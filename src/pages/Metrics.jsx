import { METRICS } from "../data/portfolioData";

export default function Metrics() {
  return (
    <div className="metrics-section">
      <div className="section">
        <div className="sec-label">Impact</div>
        <h2 className="sec-title">By the <span>Numbers</span></h2>
        <div className="metrics-grid">
          {METRICS.map(({ val, label }) => (
            <div key={label} className="metric">
              <div className="metric-val">{val}</div>
              <div className="metric-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
