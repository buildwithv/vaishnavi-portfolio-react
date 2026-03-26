import { useState, useEffect, useRef } from "react";
import { EMAILJS } from "./data/portfolioData";

// Components
import Particles  from "./components/Particles";
import Navbar     from "./components/Navbar";
import Footer     from "./components/Footer";

// Pages / Sections
import Hero       from "./pages/Hero";
import About      from "./pages/About";
import Skills     from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects   from "./pages/Projects";
import Metrics    from "./pages/Metrics";
import Contact    from "./pages/Contact";

import "./styles/global.css";
import "./styles/sections.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const notifiedRef         = useRef(false);

  // Sync theme with <html data-theme>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  // EmailJS visitor notification — fires once on page load
  useEffect(() => {
    if (notifiedRef.current) return;
    if (EMAILJS.publicKey === "YOUR_PUBLIC_KEY") return;
    notifiedRef.current = true;

    const script  = document.createElement("script");
    script.src    = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init(EMAILJS.publicKey);
      window.emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        visitor_time:    new Date().toLocaleString(),
        visitor_page:    window.location.href,
        visitor_browser: navigator.userAgent.split(")")[0].split("(")[1] || "Unknown",
        visitor_os:      navigator.platform || "Unknown",
      }).catch(() => {});
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Particles />
      <div className="aurora-bar" />
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
