import { ArrowRight, ArrowUpRight, Check, ChevronRight, Compass, Layers3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";

const services = [
  { icon: UsersRound, number: "01", title: "Recruitment & staffing", text: "Build high-performing teams with people who bring the right skills, mindset, and momentum." },
  { icon: ShieldCheck, number: "02", title: "Payroll & compliance", text: "Keep every detail accurate, compliant, and ready to scale as your workforce evolves." },
  { icon: Sparkles, number: "03", title: "Training & development", text: "Turn potential into performance with focused learning journeys your people remember." },
  { icon: Compass, number: "04", title: "HR consulting", text: "Make confident people decisions with practical advice grounded in your business reality." },
];

const partnerTypes = ["Startups", "Scale-ups", "Enterprise", "Public sector"];
const audiencePaths = [
  { eyebrow: "For employers", title: "Build the workforce your business needs.", text: "End-to-end HR support designed to simplify workforce management and strengthen day-to-day operations.", items: ["Recruitment & staffing", "Payroll & compliance", "Workforce continuity", "Campus drives & internships", "Upskilling & project placements"], outcome: "Faster hiring · Lower HR overhead · Compliance assurance" },
  { eyebrow: "For students & job seekers", title: "Turn ambition into opportunity.", text: "Practical pathways that help you learn, build confidence, and connect directly with employers.", items: ["Internships & project work", "Job drives & placement support", "Technical & soft-skill upskilling", "Resume & interview preparation", "Career guidance & mentorship"], outcome: "Real exposure · Better skills · Direct pathways to employment" },
];

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> The people advantage</div>
            <h1>Better teams.<br /><em>Brighter futures.</em></h1>
            <p className="hero-lede">StaffzoneSolutions connects businesses with the right talent—and helps students and job seekers build careers that move them forward.</p>
            <div className="hero-actions">
              <div className="hero-employer-actions">
                <Link href="/services" className="button button-accent">For employers <ArrowRight size={17} /></Link>
                <Link href="/internship-application" className="hero-internship-link">Internship Application <ArrowRight size={15} /></Link>
              </div>
              <Link href="/careers" className="text-link text-link-light">For job seekers <ChevronRight size={16} /></Link>
            </div>
            <div className="hero-note"><span className="note-line" /> Andhra Pradesh roots · National reach</div>
          </div>
          <div className="hero-visual reveal-up reveal-delay-2" aria-label="A collaborative team meeting">
            <div className="hero-image" />
            <div className="hero-image-overlay" />
            <div className="hero-stat-card">
              <span className="stat-kicker">Average time to hire</span>
              <strong>18 days</strong>
              <span className="stat-positive"><span>↗</span> 32% faster than average</span>
            </div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-corner-label">People / Process / Progress</div>
          </div>
        </div>
        <div className="hero-marquee" aria-label="StaffzoneSolutions capabilities">
          <div className="marquee-track">
            {[...partnerTypes, ...partnerTypes].map((partner, index) => <span key={`${partner}-${index}`}><i /> {partner}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="container intro-grid">
          <div className="section-kicker">01 / What we do</div>
          <div>
            <h2 className="display-heading">Work is changing.<br /><span>People still matter most.</span></h2>
            <div className="intro-bottom-row">
              <p className="body-large">From skilled manpower and payroll administration to campus drives, internships, and upskilling, we make workforce growth simpler, sharper, and more human.</p>
              <Link href="/about" className="round-arrow" aria-label="Learn more about StaffzoneSolutions"><ArrowRight size={20} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container">
          <div className="section-kicker">One mission · Two pathways</div>
          <div className="audience-header"><h2 className="section-heading">Progress looks different<br /><span>for everyone.</span></h2><p className="body-large">We create value on both sides of the opportunity—helping employers grow with confidence and helping people grow with purpose.</p></div>
          <div className="audience-grid">
            {audiencePaths.map((path, index) => <article className={`audience-card audience-card-${index + 1}`} key={path.eyebrow}><div className="audience-card-number">0{index + 1}</div><div className="eyebrow">{path.eyebrow}</div><h3>{path.title}</h3><p>{path.text}</p><ul>{path.items.map((item) => <li key={item}><span />{item}</li>)}</ul><div className="audience-outcome">{path.outcome}</div><Link href={index === 0 ? "/services" : "/careers"} className="text-link text-link-dark">{index === 0 ? "Explore employer solutions" : "Explore career pathways"} <ArrowRight size={16} /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section section-services-preview">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-kicker">02 / Our services</div>
              <h2 className="section-heading">The right support<br /><span>at every stage.</span></h2>
            </div>
            <Link href="/services" className="text-link text-link-dark">View all services <ArrowRight size={16} /></Link>
          </div>
          <div className="service-preview-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link href="/services" className="service-preview-card" key={service.number}>
                  <div className="service-card-top"><span className="service-number">{service.number}</span><Icon size={22} strokeWidth={1.7} /></div>
                  <div><h3>{service.title}</h3><p>{service.text}</p></div>
                  <span className="card-arrow"><ArrowRight size={17} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <div className="proof-image-card">
            <div className="proof-image" />
            <div className="proof-caption"><span className="caption-dot" /> Real people. Real progress.</div>
          </div>
          <div className="proof-copy">
            <div className="section-kicker">03 / Why Staffzone</div>
            <h2 className="section-heading">Not just a vendor.<br /><span>A team on your side.</span></h2>
            <p className="body-large">We combine market insight, operational rigour, and a genuine interest in people to help you create workplaces where good work can happen.</p>
            <ul className="check-list">
              <li><Check size={16} /> Senior attention on every engagement</li>
              <li><Check size={16} /> Transparent, human communication</li>
              <li><Check size={16} /> Solutions designed to keep working</li>
            </ul>
            <Link href="/about" className="button button-outline">Meet StaffzoneSolutions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-mark"><Layers3 size={25} /></div>
          <div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Start a conversation</div><h2>Let&apos;s make your next move<br /><em>your best one yet.</em></h2></div>
          <Link href="/contact" className="button button-accent cta-button">Talk to our team <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
