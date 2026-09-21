import { FormEvent, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check, Handshake, LineChart, ShieldCheck, Sparkles, Store, UsersRound } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: UsersRound, title: "Engage or onboard a client", text: "Use your local relationships and recruiting experience to connect employers with StaffzoneSolutions when they need talent." },
  { icon: Handshake, title: "Grow with Staffzone", text: "Get a proven operating model, support, and access to our wider staffing and HR capabilities." },
  { icon: LineChart, title: "Build earning potential", text: "Create a second income stream through successful hiring partnerships and a growing client portfolio." },
  { icon: Store, title: "Own your next chapter", text: "Progress from recruiter to hiring partner or franchise owner with a pathway shaped around your ambition." },
];

const journey = [
  { step: "01", title: "Start with your network", text: "Tell us about your recruiting experience, market, and the kind of employers you can reach." },
  { step: "02", title: "Qualify the opportunity", text: "We work together to understand the client need, commercial fit, and right partnership model." },
  { step: "03", title: "Launch with support", text: "Access onboarding, process guidance, staffing capabilities, and a team that helps you move faster." },
  { step: "04", title: "Scale your portfolio", text: "Build repeat business, expand your reach, and explore a franchise-owner path over time." },
];

export default function Partner() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Partner enquiry received", { description: "Our team will review your details and contact you about the next step." });
  };

  return (
    <div>
      <section className="page-hero page-hero-partner"><div className="container page-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> For experienced recruiters</div><h1>From recruiter<br /><em>to business partner.</em></h1><p>Turn your relationships, market knowledge, and recruiting experience into a bigger opportunity with StaffzoneSolutions LLP.</p></div></section>

      <section className="section partner-intro"><div className="container partner-intro-grid"><div><div className="section-kicker">The opportunity</div><h2 className="section-heading">Your network<br /><span>can go further.</span></h2></div><div><p className="body-large">If you are already working as a recruiter or talent professional, you may be closer to building something of your own than you think. Engage or onboard a client, create value, and grow with a staffing and HR partner that gives you the support to move from salary-only work toward a scalable partnership.</p><div className="partner-callout"><Sparkles size={19} /><span>Flexible pathways for recruiters who want more responsibility, more ownership, and more earning potential.</span></div></div></div></section>

      <section className="section partner-benefits"><div className="container"><div className="section-kicker">Why partner with us</div><div className="partner-benefits-header"><h2 className="section-heading">A platform for<br /><span>your next move.</span></h2><p className="body-large">You bring the relationships and drive. Staffzone brings the structure, delivery capability, and support to help turn opportunity into an operating business.</p></div><div className="partner-benefits-grid">{benefits.map((benefit) => { const Icon = benefit.icon; return <article className="partner-benefit-card" key={benefit.title}><div className="partner-benefit-icon"><Icon size={21} /></div><h3>{benefit.title}</h3><p>{benefit.text}</p></article>; })}</div></div></section>

      <section className="section partner-journey"><div className="container partner-journey-grid"><div><div className="section-kicker">The pathway</div><h2 className="section-heading">Build it<br /><span>step by step.</span></h2><p className="body-large">The goal is not to rush into a franchise. It is to prove the model, build trust with clients, and create a partnership that is right for both sides.</p><div className="partner-journey-note"><ShieldCheck size={18} /><span>Commercial terms, eligibility, support, and franchise details are discussed transparently during the partner conversation.</span></div></div><div className="partner-journey-list">{journey.map((item) => <div className="partner-journey-item" key={item.step}><span className="partner-step">{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></div></section>

      <section className="section partner-form-section" id="partner-enquiry"><div className="container partner-form-grid"><div><div className="section-kicker">Ready to explore it?</div><h2 className="section-heading">Engage or onboard<br /><span>a client with us.</span></h2><p className="body-large">Tell us a little about your experience and the client or market you want to build around. We will take it from there.</p></div><form className="partner-form" onSubmit={submit}>{submitted ? <div className="submitted-state"><Check size={36} /><h3>Thanks for raising your hand.</h3><p>Our partnership team will review your enquiry and get in touch about the next conversation.</p><button type="button" className="text-link text-link-dark" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={15} /></button></div> : <><div className="form-two-col"><label>Name<input required placeholder="Your name" /></label><label>Phone<input required type="tel" placeholder="Your phone number" /></label></div><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Current experience<select required defaultValue=""><option value="" disabled>Select an option</option><option>Recruiter / talent consultant</option><option>Staffing agency owner</option><option>HR professional</option><option>Business development professional</option><option>Other</option></select></label><label>Tell us about your opportunity<textarea required rows={5} placeholder="Which city or market do you cover? Do you already have a client or employer relationship?" /></label><button className="button button-primary form-submit" type="submit">Explore partnership <ArrowRight size={16} /></button><small className="partner-disclaimer">Partnership, franchise, salary, commission, and profit arrangements are subject to eligibility, due diligence, client conversion, and mutually agreed terms. Results are not guaranteed.</small></>}</form></div></section>

      <section className="cta-section"><div className="container cta-inner"><div className="cta-mark"><BriefcaseBusiness size={24} /></div><div><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Make the move</div><h2>Your next client could be<br /><em>your next chapter.</em></h2></div><a href="#partner-enquiry" className="button button-accent cta-button">Start the conversation <ArrowRight size={17} /></a></div></section>
    </div>
  );
}
