import { SKILLS } from "../data/portfolioData";
import { useSkillBar } from "../hooks/useAnimations";

function SkillBar({ name, pct }) {
  const [ref, width] = useSkillBar(pct);
  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-head">
        <span>{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="sec-bg" id="skills">
      <div className="section">
        <div className="sec-label">Expertise</div>
        <h2 className="sec-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} pct={skill.pct} />
          ))}
        </div>
      </div>
    </div>
  );
}
