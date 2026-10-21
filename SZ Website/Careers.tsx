import WebsiteForm from "./WebsiteForm";
import ParticleDrift from "./ParticleDrift";

export default function Careers() {
  return (
    <div>
      <section 
        className="page-hero page-hero-careers" 
        style={{ 
          position: "relative", 
          overflow: "hidden", 
          isolation: "isolate" 
        }}
      >
        {/* Interactive Particle Layer */}
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            zIndex: 1, 
            pointerEvents: "auto" 
          }}
        >
          <ParticleDrift />
        </div>

        {/* Text Layer on top with pointer-events passthrough */}
        <div 
          className="container page-hero-inner" 
          style={{ 
            position: "relative", 
            zIndex: 2, 
            pointerEvents: "none" 
          }}
        >
          <div className="eyebrow eyebrow-light" style={{ pointerEvents: "auto" }}>
            <span className="eyebrow-dot" /> Join our network
          </div>
          <h1 style={{ pointerEvents: "auto" }}>
            Build your career<br />
            <em>with progress.</em>
          </h1>
          <p style={{ pointerEvents: "auto" }}>
            Explore opportunities across our core operational domains or register your candidate profile for future staffing mandates.
          </p>
        </div>
      </section>

      <section className="section application-section">
        <div className="container">
          <div className="application-card">
            <WebsiteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
