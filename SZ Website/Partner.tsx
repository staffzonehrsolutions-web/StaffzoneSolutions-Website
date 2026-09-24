import TallyEmbed from "./TallyEmbed";

export default function Partner() {
  return (
    <div>
      <section className="page-hero page-hero-partner">
        <div className="container page-hero-inner">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Grow together</div>
          <h1>Partner with<br /><em>Staffzone Solutions.</em></h1>
          <p>We collaborate with independent talent consultants, recruiters, and regional advisors to build high-performing teams.</p>
        </div>
      </section>

      <section className="section partner-section">
        <div className="container partner-grid">
          <div className="partner-intro">
            <div className="section-kicker">Collaborative network</div>
            <h2 className="section-heading">Let&apos;s build<br /><span>value together.</span></h2>
            <p className="body-large">Whether you represent candidates, manage client relationships, or operate as an independent recruiter—we offer clear engagement models.</p>
          </div>

          <div className="partner-form">
            <TallyEmbed
              formId="jaN7RR"
              title="Partner with StaffZone Solutions"
              height={900}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
