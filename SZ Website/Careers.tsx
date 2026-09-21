import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, MapPin, Search, Upload, UsersRound } from "lucide-react";
import { toast } from "sonner";

const jobs = [
  { id: 1, title: "Senior Talent Partner", location: "Mumbai", type: "Full-time", experience: "Senior", category: "Talent", description: "Own strategic hiring partnerships for a portfolio of high-growth clients." },
  { id: 2, title: "Payroll Operations Lead", location: "Pune", type: "Full-time", experience: "Senior", category: "Operations", description: "Bring precision and calm to payroll operations for growing teams." },
  { id: 3, title: "People Advisory Consultant", location: "Bengaluru", type: "Full-time", experience: "Mid-level", category: "Advisory", description: "Turn people challenges into practical strategies that teams can use." },
  { id: 4, title: "Learning Program Coordinator", location: "Mumbai", type: "Hybrid", experience: "Early career", category: "Learning", description: "Help create memorable learning experiences for ambitious organisations." },
];

export default function Careers() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All locations");
  const [experience, setExperience] = useState("All experience");
  const [selectedJob, setSelectedJob] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [revealedStep, setRevealedStep] = useState(0);
  const [openRolesVisible, setOpenRolesVisible] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const openRolesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = journeyRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || revealedStep > 0) return;
      setRevealedStep(1);
      const second = window.setTimeout(() => setRevealedStep(2), 480);
      const third = window.setTimeout(() => setRevealedStep(3), 960);
      return () => {
        window.clearTimeout(second);
        window.clearTimeout(third);
      };
    }, { threshold: 0.45 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [revealedStep]);

  useEffect(() => {
    const section = openRolesRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setOpenRolesVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const filteredJobs = useMemo(() => jobs.filter((job) => {
    const matchesQuery = `${job.title} ${job.category}`.toLowerCase().includes(query.toLowerCase());
    const matchesLocation = location === "All locations" || job.location === location;
    const matchesExperience = experience === "All experience" || job.experience === experience;
    return matchesQuery && matchesLocation && matchesExperience;
  }), [query, location, experience]);

  const selectJob = (title: string) => {
    setSelectedJob(title);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Application received", { description: "Our team will be in touch if your experience is a match." });
  };

  return (
    <div>
      <section className="page-hero page-hero-careers"><div className="container page-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> For students & job seekers</div><h1 className="liquid-copy liquid-copy-title">Build skills.<br /><em>Find your opportunity.</em></h1><p className="liquid-copy liquid-copy-body">Get practical exposure, improve your skills, and connect with employers through internships, job drives, placements, and mentorship.</p></div></section>
      <section className="section careers-intro"><div className="container careers-intro-grid"><div><div className="section-kicker">Your career journey</div><h2 className="section-heading">Turn potential<br /><span>into progress.</span></h2></div><div ref={journeyRef}><p className="body-large">Whether you are starting out or ready for your next move, we help you build employability through real-world projects, upskilling, resume support, interview preparation, and direct pathways to employers.</p><div className={`career-mini-stats ${revealedStep > 0 ? "career-mini-stats-visible" : ""}`} aria-label="Career journey steps"><div className={`career-mini-step ${revealedStep >= 1 ? "is-revealed career-mini-stat-active" : ""}`}><strong>01</strong><span>Practical exposure</span></div><div className={`career-mini-step ${revealedStep >= 2 ? "is-revealed" : ""}`}><strong>02</strong><span>Skills & mentorship</span></div><div className={`career-mini-step ${revealedStep >= 3 ? "is-revealed" : ""}`}><strong>03</strong><span>Placement pathways</span></div></div></div></div></section>
      <section ref={openRolesRef} className={`section open-roles-section section-transition ${openRolesVisible ? "is-visible" : ""}`}><div className="container"><div className="section-header-row"><div><div className="section-kicker">Open roles</div><h2 className="section-heading">Find your<br /><span>next chapter.</span></h2></div><div className="roles-count"><strong>{filteredJobs.length}</strong> open roles</div></div><div className="job-filters"><label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roles" aria-label="Search roles" /></label><select value={location} onChange={(event) => setLocation(event.target.value)} aria-label="Filter by location"><option>All locations</option><option>Mumbai</option><option>Pune</option><option>Bengaluru</option></select><select value={experience} onChange={(event) => setExperience(event.target.value)} aria-label="Filter by experience"><option>All experience</option><option>Early career</option><option>Mid-level</option><option>Senior</option></select></div><div className="jobs-list">{filteredJobs.length ? filteredJobs.map((job) => <article className="job-card" key={job.id}><div className="job-icon"><BriefcaseBusiness size={19} /></div><div className="job-main"><div className="job-meta"><span>{job.category}</span><span>{job.type}</span></div><h3>{job.title}</h3><p>{job.description}</p><div className="job-location"><MapPin size={14} /> {job.location} &nbsp;·&nbsp; {job.experience}</div></div><button className="button button-outline button-apply" onClick={() => selectJob(job.title)}>Apply now <ArrowRight size={16} /></button></article>) : <div className="empty-state"><Search size={23} /><h3>No roles found</h3><p>Try a broader search or check back soon for new opportunities.</p></div>}</div></div></section>
      <section className="section application-section" id="application-form"><div className="container application-grid"><div className="application-side"><div className="section-kicker">Your next move</div><h2 className="section-heading">Tell us what<br /><span>you&apos;re good at.</span></h2><p className="body-large">Don&apos;t see the exact role? We&apos;re always interested in meeting thoughtful people who care about doing excellent work.</p><div className="application-note"><UsersRound size={19} /><span>We review every application with care—not an algorithm.</span></div></div><form className="application-card" onSubmit={submitApplication}>{submitted ? <div className="submitted-state"><CheckCircle2 size={37} /><h3>Thanks for raising your hand.</h3><p>Your application is with our team. We&apos;ll be in touch soon.</p><button type="button" className="text-link text-link-dark" onClick={() => setSubmitted(false)}>Submit another application <ArrowRight size={15} /></button></div> : <><div className="application-card-header"><h3>Apply now</h3><span>It takes about 3 minutes.</span></div><label>Role of interest<select value={selectedJob} onChange={(event) => setSelectedJob(event.target.value)} required><option value="">Select a role</option>{jobs.map((job) => <option key={job.id} value={job.title}>{job.title}</option>)}</select></label><div className="form-two-col"><label>First name<input required placeholder="Your first name" /></label><label>Last name<input required placeholder="Your last name" /></label></div><label>Email address<input required type="email" placeholder="you@example.com" /></label><label className="upload-field"><span>Resume / CV</span><div className="upload-box"><Upload size={18} /><span>Upload a PDF or DOCX</span><input type="file" accept=".pdf,.doc,.docx" required /></div></label><button className="button button-primary form-submit" type="submit">Send application <ArrowRight size={16} /></button></>}</form></div></section>
    </div>
  );
}
