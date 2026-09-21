import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, ClipboardCheck, GraduationCap, Sparkles } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  "Free internship opportunity",
  "Stipend-supported placements",
  "Completion certificate",
  "Practical exposure with guidance",
];

export default function InternshipApplication() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your internship application has been received.");
  };

  return (
    <div>
      <section className="page-hero page-hero-careers internship-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Internship opportunity</div>
          <h1>Start with<br /><em>real experience.</em></h1>
          <p>Apply for a free internship with StaffzoneSolutions and take your next step with practical exposure, a stipend, mentorship, and certification.</p>
        </div>
      </section>

      <section className="section internship-intro-section">
        <div className="container internship-intro-grid">
          <div>
            <div className="section-kicker">For students and job seekers</div>
            <h2 className="section-heading">Learn by doing.<br /><span>Grow with purpose.</span></h2>
            <p className="body-large">Our internship program connects emerging talent with meaningful project work, employability support, and a clear path toward future opportunities.</p>
          </div>
          <div className="internship-benefits-card">
            <div className="internship-benefits-heading"><Sparkles size={18} /> What you receive</div>
            <ul>{benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={17} /> {benefit}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section internship-form-section">
        <div className="container internship-form-grid">
          <div className="internship-form-aside">
            <div className="section-kicker">Apply now</div>
            <h2 className="section-heading">Tell us where<br /><span>you want to go.</span></h2>
            <p className="body-large">Share your details and our team will review your application and connect with you about suitable internship opportunities.</p>
            <div className="internship-aside-note"><GraduationCap size={22} /><span>Open to students, fresh graduates, and aspiring professionals.</span></div>
          </div>

          <form className="internship-form" onSubmit={handleSubmit}>
            <div className="form-section-heading"><ClipboardCheck size={19} /><span>Personal details</span></div>
            <div className="form-row">
              <label>Full name<input name="name" type="text" placeholder="Your full name" required /></label>
              <label>Mobile number<input name="mobile" type="tel" placeholder="+91 00000 00000" required /></label>
            </div>
            <div className="form-row">
              <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
              <label>Date of birth<input name="dateOfBirth" type="date" required /></label>
            </div>
            <div className="form-row">
              <label>Current location<input name="location" type="text" placeholder="City, State" required /></label>
              <label>Highest qualification<input name="qualification" type="text" placeholder="e.g. B.Tech, MBA, Degree" required /></label>
            </div>
            <div className="form-row">
              <label>Internship time period<select name="duration" defaultValue="" required><option value="" disabled>Select duration</option><option>1 month</option><option>2 months</option><option>3 months</option><option>6 months</option><option>More than 6 months</option></select></label>
              <label>Expected joining date<input name="joiningDate" type="date" required /></label>
            </div>
            <label>Area of interest<input name="interest" type="text" placeholder="e.g. HR, Recruitment, Marketing, Operations" required /></label>
            <label>Other relevant information<textarea name="information" rows={4} placeholder="Tell us about your goals, skills, projects, or anything else we should know." /></label>
            <label className="checkbox-field"><input type="checkbox" required /> <span>I confirm that the information provided is accurate and I agree to be contacted about internship opportunities.</span></label>
            <button type="submit" className="button button-accent internship-submit">Submit internship application <ArrowRight size={17} /></button>
            {submitted && <div className="form-success" role="status"><CheckCircle2 size={18} /> Thank you. Our team will review your application and contact you soon.</div>}
          </form>
        </div>
      </section>
    </div>
  );
}
