import { ArrowRight, BarChart3, BookOpenCheck, BriefcaseBusiness, Check, ClipboardCheck, LineChart, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";

const services: { number: string; icon: LucideIcon; title: string; description: string; bullets: string[]; tone: string }[] = [
  { number: "01", icon: UsersRound, title: "Recruitment & staffing solutions", description: "Skilled manpower for permanent, temporary, and project-based roles—matched to the practical needs of your workforce.", bullets: ["Permanent & temporary hiring", "Project-based staffing", "Pre-trained talent pools"], tone: "service-tone-blue" },
  { number: "02", icon: ShieldCheck, title: "Payroll & compliance management", description: "Accurate salary processing, compliance support, and seamless HR administration that reduce overhead and protect continuity.", bullets: ["Salary processing", "Compliance support", "HR administration"], tone: "service-tone-lilac" },
  { number: "03", icon: BookOpenCheck, title: "Training & development programs", description: "Upskilling, internships, and project placements that bridge skill gaps and help emerging talent become work-ready.", bullets: ["Technical & soft skills", "Campus drives", "Internships & projects"], tone: "service-tone-mint" },
  { number: "04", icon: BriefcaseBusiness, title: "Workforce continuity & HR consulting", description: "Reliable deployment, attendance discipline, and practical HR guidance to keep operations smooth as your teams grow.", bullets: ["Workforce deployment", "Attendance discipline", "HR process guidance"], tone: "service-tone-peach" },
];

const steps = [{ icon: ClipboardCheck, label: "Listen", text: "We start with the context, not a pre-packaged answer." }, { icon: BarChart3, label: "Shape", text: "We turn the brief into a focused, measurable plan." }, { icon: LineChart, label: "Move", text: "We stay close enough to make sure the plan works." }];

export default function Services() {
  return (
    <div>
      <section className="page-hero page-hero-services"><div className="container page-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> How we help employers</div><h1>People solutions<br /><em>that keep business moving.</em></h1><p>End-to-end staffing and HR support that helps you hire faster, reduce overhead, stay compliant, and access pre-trained talent.</p></div></section>
      <section className="section services-list-section"><div className="container"><div className="services-list-header"><div className="section-kicker">Our capabilities</div><p className="body-large">One partner, four ways to make your people strategy work harder.</p></div><div className="services-list">{services.map((service) => { const Icon = service.icon; return <article className={`service-detail-card ${service.tone}`} key={service.number}><div className="service-detail-icon"><Icon size={25} /></div><div className="service-detail-number">{service.number}</div><div className="service-detail-copy"><h2>{service.title}</h2><p>{service.description}</p><ul>{service.bullets.map((bullet) => <li key={bullet}><Check size={15} /> {bullet}</li>)}</ul></div><Link href="/contact" className="service-detail-link" aria-label={`Learn more about ${service.title}`}><ArrowRight size={19} /></Link></article>; })}</div></div></section>
      <section className="section process-section"><div className="container"><div className="process-grid"><div><div className="section-kicker">Our approach</div><h2 className="section-heading">Clear thinking.<br /><span>Human delivery.</span></h2><p className="body-large">We are structured enough to deliver and flexible enough to listen. That balance is where the good work happens.</p></div><div className="process-steps">{steps.map((step, index) => { const Icon = step.icon; return <div className="process-step" key={step.label}><div className="process-step-index">0{index + 1}</div><div className="process-step-icon"><Icon size={20} /></div><div><h3>{step.label}</h3><p>{step.text}</p></div></div>; })}</div></div></div></section>
      <section className="cta-section"><div className="container cta-inner"><div className="cta-mark"><BriefcaseBusiness size={24} /></div><div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Ready when you are</div><h2>Have a people<br /><em>challenge to solve?</em></h2></div><Link href="/contact" className="button button-accent cta-button">Let&apos;s talk <ArrowRight size={17} /></Link></div></section>
    </div>
  );
}
