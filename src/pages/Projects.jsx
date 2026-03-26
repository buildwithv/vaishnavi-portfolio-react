import { useState, useRef, useEffect, useCallback } from "react";
import { PROJECTS } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useAnimations";

function ProjectCard({ num, title, techs, desc, delay }) {
  const [ref, visible] = useFadeIn(delay);
  return (
    <div ref={ref} className={`proj-card ${visible ? "visible" : ""}`}>
      <div className="proj-num">{num}</div>
      <div className="proj-title">{title}</div>
      <div className="proj-techs">
        {techs.map((t) => (
          <span key={t} className="proj-tech">{t}</span>
        ))}
      </div>
      <p className="proj-desc">{desc}</p>
    </div>
  );
}

export default function Projects() {
  const [idx, setIdx]   = useState(0);
  const trackRef        = useRef(null);

  const cardW = useCallback(() => {
    const cards = trackRef.current?.querySelectorAll(".proj-card");
    return cards?.[0] ? cards[0].offsetWidth + 24 : 0;
  }, []);

  useEffect(() => {
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${idx * cardW()}px)`;
  }, [idx, cardW]);

  return (
    <div className="sec-bg" id="projects">
      <div className="section">
        <div className="sec-label">Portfolio</div>
        <h2 className="sec-title">Featured <span>Projects</span></h2>

        <div className="projects-slider">
          <div className="projects-track" ref={trackRef}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} {...project} delay={i * 120} />
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="slider-btn"
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
          >
            ←
          </button>
          <button
            className="slider-btn"
            onClick={() => setIdx((i) => Math.min(PROJECTS.length - 1, i + 1))}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
