import { PERSONAL, STATS } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      {/* Glowing orbs */}
      <div className="hero-orb1" />
      <div className="hero-orb2" />
      <div className="hero-orb3" />

      {/* Pulsing rings */}
      <div className="hero-ring hero-ring1" />
      <div className="hero-ring hero-ring2" />
      <div className="hero-ring hero-ring3" />

      {/* Floating code lines */}
      <div className="float-code">const dev = new FullStackDeveloper();</div>
      <div className="float-code">import React from 'react';</div>
      <div className="float-code">async function buildGreatProducts() {"{}"}</div>
      <div className="float-code">SELECT * FROM experience WHERE years &gt; 5;</div>

      {/* Ghost text background */}
      <div className="hero-big-text">
        SOFTWARE<br />DEVELOPER
      </div>

      {/* Floating SVG shapes */}
      <svg style={{ position:"absolute",top:"12%",right:"8%",width:80,opacity:0.12,animation:"codeDrift 14s ease-in-out infinite",pointerEvents:"none" }} viewBox="0 0 80 80" fill="none">
        <polygon points="40,4 76,62 4,62" stroke="#9d4edd" strokeWidth="1.5" />
        <polygon points="40,16 66,58 14,58" stroke="#00d4ff" strokeWidth="0.8" />
      </svg>
      <svg style={{ position:"absolute",bottom:"18%",left:"6%",width:60,opacity:0.1,animation:"codeDrift 18s ease-in-out infinite reverse",pointerEvents:"none" }} viewBox="0 0 60 60" fill="none">
        <rect x="6" y="6" width="48" height="48" stroke="#9d4edd" strokeWidth="1.5" rx="4" />
        <rect x="16" y="16" width="28" height="28" stroke="#00d4ff" strokeWidth="0.8" rx="2" />
      </svg>
      <svg style={{ position:"absolute",top:"60%",right:"5%",width:50,opacity:0.1,animation:"codeDrift 22s ease-in-out infinite",animationDelay:"-6s",pointerEvents:"none" }} viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="20" stroke="#9d4edd" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="10" stroke="#00d4ff" strokeWidth="0.8" />
      </svg>

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-available">
          <span className="dot" />&nbsp;AVAILABLE FOR WORK
        </div>

        <div className="hero-greeting">Hello, World! 👋</div>

        <h1 className="hero-name">
          {PERSONAL.name.split(" ")[0]}<br />
          <span className="purple">{PERSONAL.name.split(" ")[1]}</span>
        </h1>

        <div className="hero-typewriter">
          <span className="hi">const</span> role = "{PERSONAL.role}"
        </div>

        <p className="hero-desc">{PERSONAL.tagline}</p>

        <div className="hero-btns">
          <button className="btn-purple" onClick={() => scrollTo("projects")}>
            View My Work
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("contact")}>
            Get In Touch
          </button>
        </div>

        <div className="hero-stats">
          {STATS.map(({ num, label }) => (
            <div key={label} className="hstat">
              <div className="hstat-num">{num}</div>
              <div className="hstat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
