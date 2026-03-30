import { PERSONAL } from "../data/portfolioData";

const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar({ isDark, onToggleTheme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      {/* Brand — vaishnavi.dev */}
      <div className="nav-brand">
        <span className="brand-domain">vaishnavi</span>
        <span className="brand-dot">.</span>
        <span className="brand-ext">dev</span>
      </div>

      {/* Nav links */}
      <ul className="nav-links">
        {NAV_LINKS.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => { e.preventDefault(); scrollTo(section); }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="nav-right">
        <button className="theme-toggle" onClick={onToggleTheme}>
          {isDark ? "☀ Light" : "🌙 Dark"}
        </button>
        <a
          href="#contact"
          className="hire-btn"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
        >
          Let's Connect
        </a>
      </div>
    </nav>
  );
}
