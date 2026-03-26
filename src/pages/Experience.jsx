import { EXPERIENCE } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useAnimations";

function ExpCard({ emoji, company, role, date, chips, highlights, delay }) {
  const [ref, visible] = useFadeIn(delay);
  return (
    <div ref={ref} className={`exp-card ${visible ? "visible" : ""}`}>
      <div className="exp-avatar">{emoji}</div>
      <div className="exp-body">
        <div className="exp-company">{company}</div>
        <div className="exp-role">{role}</div>
        <div className="exp-chips">
          {chips.map((c) => (
            <span key={c} className="exp-chip">{c}</span>
          ))}
          {highlights.map((h) => (
            <span key={h} className="exp-chip hl">{h}</span>
          ))}
        </div>
      </div>
      <div className="exp-date">{date}</div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="section exp-section-wrap" id="experience">
      <div className="sec-label">Career</div>
      <h2 className="sec-title">Work <span>Experience</span></h2>
      <div className="exp-list">
        {EXPERIENCE.map((exp, i) => (
          <ExpCard key={exp.company} {...exp} delay={i * 120} />
        ))}
      </div>
    </div>
  );
}
