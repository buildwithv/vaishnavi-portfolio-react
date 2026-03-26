import { PERSONAL } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      <p>© 2025 <span>{PERSONAL.name}</span>. All rights reserved.</p>
      <p>Built with React &amp; passion ✨</p>
    </footer>
  );
}
