import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W, H, raf;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouse);

    const mkStar = () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.4 + 0.3,
      a:     Math.random(),
      da:    (Math.random() - 0.5) * 0.005,
      dx:    (Math.random() - 0.5) * 0.07,
      dy:    (Math.random() - 0.5) * 0.07,
      color: Math.random() > 0.6 ? "purple" : Math.random() > 0.5 ? "cyan" : "white",
    });

    const stars = Array.from({ length: 160 }, mkStar);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const base   = isDark ? 1 : 0.6;
      const { x: mx, y: my } = mouseRef.current;

      stars.forEach((s) => {
        s.x += s.dx; s.y += s.dy; s.a += s.da;
        if (s.a <= 0 || s.a >= 1) s.da *= -1;
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;

        // Mouse repel
        const dmx  = s.x - mx, dmy = s.y - my;
        const dist = Math.sqrt(dmx * dmx + dmy * dmy);
        if (dist < 100 && dist > 0) {
          const f = (100 - dist) / 100;
          s.x += (dmx / dist) * f * 2.2;
          s.y += (dmy / dist) * f * 2.2;
        }

        if (s.color === "white" && !isDark) return;
        const al = s.a * base;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle =
          s.color === "purple" ? `rgba(157,78,221,${al * 0.9})` :
          s.color === "cyan"   ? `rgba(0,212,255,${al * 0.8})`  :
                                 `rgba(255,255,255,${al * 0.65})`;
        ctx.fill();
      });

      // Connecting lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(157,78,221,${(1 - d / 120) * 0.07 * base})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
