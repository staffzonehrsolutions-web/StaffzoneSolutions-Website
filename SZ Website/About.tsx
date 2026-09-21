import { useEffect, useRef, useState } from "react";
import { ArrowRight, HeartHandshake, Lightbulb, ShieldCheck, Target, UsersRound } from "lucide-react";
import { Link } from "wouter";

const values = [
  { icon: HeartHandshake, title: "People-first", text: "We create better outcomes for employers and candidates by listening to both sides of the opportunity." },
  { icon: Target, title: "Built for impact", text: "Our work is practical, measurable, and designed to improve hiring, skills, and workforce continuity." },
  { icon: ShieldCheck, title: "Transparent & reliable", text: "We show up with professional service delivery, clear communication, and compliance-aware processes." },
  { icon: Lightbulb, title: "Always learning", text: "We help people keep growing through upskilling, mentorship, project work, and real-world exposure." },
];

function TypeoutValueCard({ value, index, active }: { value: typeof values[number]; index: number; active: boolean }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!active) return;
    let cursor = 0;
    let interval: number | undefined;
    const delay = window.setTimeout(() => {
      interval = window.setInterval(() => {
        cursor += 1;
        setTypedText(value.text.slice(0, cursor));
        if (cursor >= value.text.length && interval) window.clearInterval(interval);
      }, 18);
    }, index * 180 + 260);
    return () => { window.clearTimeout(delay); if (interval) window.clearInterval(interval); };
  }, [active, index, value.text]);

  return <article className={`value-card social-value-card ${active ? "social-value-card-visible" : ""}`}><div className="social-card-title"><span className="social-status-dot" /> {value.title}</div><p className="social-card-body">{typedText}<span className="typing-cursor" aria-hidden="true" /></p></article>;
}

const impactStats = [
  { target: 5, suffix: "+", label: "Companies supported", detail: "Trusted workforce partner" },
  { target: 10, suffix: "+", label: "Vendor partners", detail: "A growing delivery network" },
  { target: 500, suffix: "+", label: "Employees sourced", detail: "Every quarter" },
  { target: 4, suffix: "", label: "States in INDIA", detail: "Local expertise, national ambition" },
];

function AnimatedStat({ target, suffix, label, detail, index, active }: { target: number; suffix: string; label: string; detail: string; index: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const delay = window.setTimeout(() => {
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1050, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      frame = window.requestAnimationFrame(tick);
    }, index * 140);
    return () => { window.clearTimeout(delay); window.cancelAnimationFrame(frame); };
  }, [active, index, target]);

  return <article className={`history-card impact-stat-card ${active ? "impact-stat-card-visible" : ""}`}><div className="history-card-top"><span>0{index + 1}</span></div><div className="impact-stat-number" aria-label={`${target}${suffix} ${label}`}>{value}{suffix}</div><h3>{label}</h3><p>{detail}</p></article>;
}

const foundingMembers = [
  { name: "B. Swetha", role: "Designated Partner" },
  { name: "Y Vineeth Kumar", role: "Designated Partner" },
];

const corporateTeam = [
  { name: "Harsha", role: "Head of Corporate Affairs & Operation" },
  { name: "Vinay", role: "Head – Talent Acquisition & Talent Acquisition & Workforce Solutions" },
];

const leaders = [
  { name: "Shaik Munvar Sulthan", role: "South Zone Manager" },
];

export default function About() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);
  const [valuesVisible, setValuesVisible] = useState(false);
  const valuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.28 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = valuesRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setValuesVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
<section className="page-hero page-hero-about"><div className="container page-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> About StaffzoneSolutions</div><h1>Better work starts<br /><em>with the right people.</em></h1><p>Based in Andhra Pradesh, we connect organisations and professionals across India through trusted staffing, HR solutions, and career-building opportunities.</p></div></section>

<section className="section story-section"><div className="container story-grid"><div className="story-image-wrap"><div className="story-image" /><div className="image-note"><span>01</span><span>People before process</span></div></div><div className="story-copy"><div className="section-kicker">Our story</div><h2 className="section-heading">Local expertise.<br /><span>National ambition.</span></h2><p className="body-large">StaffzoneSolutions was created to help organisations hire with confidence and help individuals access the skills, experience, and opportunities they need to succeed.</p><p>From recruitment and payroll to campus drives, internships, project placements, and career guidance, we bring employers and talent closer together. Our Andhra Pradesh roots keep us grounded in local relationships, while our reach helps us serve teams and professionals across the country.</p></div></div></section>

<section className="section compliance-section"><div className="container"><div className="section-kicker">Business credentials</div><div className="compliance-intro"><h2 className="section-heading">Built on trust.<br /><span>Registered to deliver.</span></h2><p className="body-large">Our statutory registrations and MSME certification reflect the professional foundation behind every employer and candidate relationship.</p></div><div className="compliance-grid"><article className="compliance-card"><span className="compliance-label">GST Registration Number</span><strong>GST Registration Number: 37AFZFS2451K1Z6</strong><p>Staffzone Solutions LLP is registered to provide professional staffing and HR services.</p></article><article className="compliance-card compliance-certificate"><span className="compliance-label">MSME Certificate</span><strong>Udyam Registration: UDYAM-AP-23-0094171</strong><p>Micro enterprise registration under the Ministry of Micro, Small & Medium Enterprises.</p><a href="/manus-storage/StaffzoneUdyamCertificate_1pg_4c5fed8f.pdf" target="_blank" rel="noreferrer" className="button button-outline">View certificate <ArrowRight size={16} /></a></article></div></div></section>

<section ref={valuesRef} className={`section values-section social-values-section ${valuesVisible ? "social-values-visible" : ""}`}><div className="container"><div className="section-kicker">What guides us</div><div className="values-intro"><h2 className="section-heading">Our values are not<br /><span>wallpaper.</span></h2><p className="body-large">They shape how we listen, how we advise, and how we measure the work we put into the world.</p></div><div className="values-grid">{values.map((value, index) => <TypeoutValueCard value={value} index={index} active={valuesVisible} key={value.title} />)}</div></div></section>

      <section ref={statsRef} className={`section timeline-section impact-section ${statsVisible ? "impact-section-visible" : ""}`}><div className="container history-grid"><div className="history-intro"><div className="section-kicker">A little history</div><h2 className="section-heading">Growing with<br /><span>the people.</span></h2><p className="body-large">From a shared idea to an LLP with a growing South India footprint, our journey has always been shaped by relationships, reliability, and the people we support.</p></div><div className="history-cards impact-stats-grid">{impactStats.map((stat, index) => <AnimatedStat key={stat.label} {...stat} index={index} active={statsVisible} />)}</div></div></section>

      <section className="section team-section"><div className="container"><div className="section-header-row"><div><div className="section-kicker">The people behind it</div><h2 className="section-heading">The team behind<br /><span>the opportunity.</span></h2></div><UsersRound className="section-header-icon" size={34} /></div><div className="team-group"><div className="team-group-heading"><span>01</span><h3>Founding Members</h3><p>Leadership and direction for StaffzoneSolutions LLP.</p></div><div className="team-grid team-grid-two">{foundingMembers.map((member) => <div className="team-card" key={member.name}><div className="team-meta"><span className="team-role-label">Founding Member</span><h3>{member.name}</h3><p>{member.role}</p></div></div>)}</div></div><div className="team-group"><div className="team-group-heading"><span>02</span><h3>Key Managerial Personnel (KMP)</h3><p>Operational leadership supporting our organisation and partners.</p></div><div className="team-grid team-grid-two">{corporateTeam.map((member) => <div className="team-card" key={member.name}><div className="team-meta"><span className="team-role-label">KMP</span><h3>{member.name}</h3><p>{member.role}</p></div></div>)}</div></div><div className="team-group"><div className="team-group-heading"><span>03</span><h3>Leaders</h3><p>Focused leaders helping employers and talent move forward.</p></div><div className="team-grid team-grid-two">{leaders.map((member) => <div className="team-card" key={member.name}><div className="team-meta"><span className="team-role-label">Leader</span><h3>{member.name}</h3><p>{member.role}</p></div></div>)}</div></div></div></section>

      <section className="cta-section"><div className="container cta-inner"><div className="cta-mark"><UsersRound size={24} /></div><div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Work with us</div><h2>Let&apos;s build something<br /><em>worth being part of.</em></h2></div><Link href="/contact" className="button button-accent cta-button">Get in touch <ArrowRight size={17} /></Link></div></section>
    </div>
  );
}
