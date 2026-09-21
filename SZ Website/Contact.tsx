import { FormEvent, useRef, useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const location = { lat: 13.637147, lng: 79.504569 };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Message sent", { description: "Thanks for reaching out. We’ll get back to you within one business day." });
  };

  return (
    <div>
      <section className="page-hero page-hero-contact"><div className="container page-hero-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Start a conversation</div><h1>Let&apos;s talk about<br /><em>what&apos;s next.</em></h1><p>Whether you&apos;re hiring, looking for your next opportunity, or exploring a training partnership—we&apos;re here to help.</p></div></section>
      <section className="section contact-section"><div className="container contact-grid"><div className="contact-details"><div className="section-kicker">Based in Andhra Pradesh</div><h2 className="section-heading">Good questions<br /><span>welcome.</span></h2><div className="contact-detail-list"><a href="mailto:admin@staffzonesolutions.in" className="contact-detail"><span className="contact-icon"><Mail size={18} /></span><span><small>Email us</small>admin@staffzonesolutions.in</span></a><div className="contact-detail"><span className="contact-icon"><MapPin size={18} /></span><span><small>Our base</small>Andhra Pradesh, India<br />Serving organisations nationwide</span></div><div className="contact-detail"><span className="contact-icon"><Clock3 size={18} /></span><span><small>Office hours</small>Mon–Sat, 9:30am–6:30pm IST</span></div></div></div><form className="contact-form" onSubmit={submit}>{sent ? <div className="submitted-state submitted-state-contact"><Send size={35} /><h3>Message on its way.</h3><p>Thanks for getting in touch. A member of our team will reply shortly.</p><button type="button" className="text-link text-link-dark" onClick={() => setSent(false)}>Send another message <ArrowRight size={15} /></button></div> : <><div className="form-two-col"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label></div><label>I&apos;m looking for<select required defaultValue=""><option value="" disabled>Select an option</option><option>Hiring & staffing</option><option>Payroll & compliance</option><option>Training & development</option><option>Internships & project work</option><option>Job opportunities</option><option>Something else</option></select></label><label>Message<textarea required rows={6} placeholder="Tell us a little about what you’re working on..." /></label><button className="button button-primary form-submit" type="submit">Send message <ArrowRight size={16} /></button></>}</form></div></section>
      <section className="section map-section"><div className="container"><div className="section-header-row map-header"><div><div className="section-kicker">Our home base</div><h2 className="section-heading">Find Staffzone<br /><span>Solutions LLP.</span></h2></div><p className="body-large">Rooted in Andhra Pradesh, we work with organisations and professionals across India.</p></div><div className="map-shell"><MapView initialCenter={location} initialZoom={15} onMapReady={(map) => { mapRef.current = map; }} className="contact-map" /><button type="button" className="map-tag map-tag-button" onClick={() => { mapRef.current?.panTo(location); mapRef.current?.setZoom(15); }} aria-label="Center map on Staffzone Solutions LLP"><MapPin size={15} /> Staffzone Solutions LLP <span className="map-tag-action">Center map</span></button></div></div></section>
    </div>
  );
}
