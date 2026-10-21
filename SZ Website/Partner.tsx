import WebsiteForm from "./WebsiteForm";
import ParticleDrift from "./ParticleDrift";

export default function Partner() {
  return (
    <div>
      <section 
        className="page-hero page-hero-partner" 
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
            <span className="eyebrow-dot" /> Grow together
          </div>
          <h1 style={{ pointerEvents: "auto" }}>
            Partner with<br />
            <em>Staffzone Solutions.</em>
          </h1>
          <p style={{ pointerEvents: "auto" }}>
            We collaborate with independent talent consultants, recruiters, and regional advisors to build high-performing teams.
          </p>
        </div>
      </section>

      <section className="section partner-section">
        <div className="container partner-grid">
          <div className="partner-intro">
            <div className="section-kicker">Collaborative network</div>
            <h2 className="section-heading">Let&apos;s build<br /><span>value together.</span></h2>
            <p className="body-large">
              Whether you represent candidates, manage client relationships, or operate as an independent recruiter—we offer clear engagement models.
            </p>
          </div>

          <div className="partner-form">
            <WebsiteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
