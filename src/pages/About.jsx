import { PERSONAL } from "../data/portfolioData";

export default function About() {
  const paragraphs = PERSONAL.about.split("\n\n");

  return (
    <div className="about" id="about">
      <div className="about-pattern" />
      <div className="about-inner">

       <div className="about-avatar">
  <img 
    src="/Vaishnavipic.png" 
    alt="Vaishnavi Parmar" 
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
  />
</div>

        {/* Text */}
        <div>
          <div className="about-label">About Me</div>
          <h2 className="about-title">
            Passionate Developer &amp; <span>Tech Enthusiast</span>
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="about-body" style={{ marginBottom: i < paragraphs.length - 1 ? "1rem" : 0 }}>
              {p}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}
