import TallyEmbed from "./TallyEmbed";

export default function Careers() {
  return (
    <div>
      <section className="page-hero page-hero-careers">
        <div className="container page-hero-inner">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Join our network</div>
          <h1>Build your career<br /><em>with progress.</em></h1>
          <p>Explore opportunities across our core operational domains or register your candidate profile for future staffing mandates.</p>
        </div>
      </section>

      <section className="section application-section">
        <div className="container">
          <div className="application-card">
            <TallyEmbed
              formId="pba7aE"
              title="Apply for a career with StaffZone Solutions"
              height={980}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
