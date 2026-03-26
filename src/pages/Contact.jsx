import { PERSONAL } from "../data/portfolioData";

const CONTACT_ITEMS = [
  { icon: "📧", label: "Email",    val: PERSONAL.email,    href: `mailto:${PERSONAL.email}`    },
  { icon: "📱", label: "Phone",    val: PERSONAL.phone,    href: `tel:+13438891693`             },
  { icon: "📍", label: "Location", val: PERSONAL.location, href: "#"                            },
  { icon: "🔗", label: "LinkedIn", val: "linkedin.com/in/vaishnavi-parmar", href: PERSONAL.linkedin },
];

export default function Contact() {
  return (
    <div className="sec-bg contact-section" id="contact">
      <div className="section">
        <div className="contact-grid">

          {/* Left — heading & bio */}
          <div>
            <div className="sec-label">✦ Let's Connect</div>
            <h2 className="contact-heading">
              Reach Out <span>to me!</span>
            </h2>
            <p className="contact-sub" style={{ fontSize:"1.05rem", fontWeight:500, marginBottom:"0.8rem" }}>
              Got a project in mind or just want to say hello? My inbox is always open!
            </p>
            <p className="contact-sub">{PERSONAL.contactBio}</p>
          </div>

          {/* Right — contact cards */}
          <div className="contact-links">
            {CONTACT_ITEMS.map(({ icon, label, val, href }) => (
              <a key={label} href={href} className="contact-link">
                <div className="cl-icon">{icon}</div>
                <div>
                  <div className="cl-label">{label}</div>
                  <div className="cl-val">{val}</div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
