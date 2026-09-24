import TallyEmbed from "./TallyEmbed";
import { useRef } from "react";
import { Clock3, Mail, MapPin } from "lucide-react";
import { MapView } from "./Map";

export default function Contact() {
  const mapRef = useRef<google.maps.Map | null>(null);
  const location = { lat: 13.637147, lng: 79.504569 };

  return (
    <div>
      <section className="page-hero page-hero-contact">
        <div className="container page-hero-inner">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Start a conversation</div>
          <h1>Let&apos;s talk about<br /><em>what&apos;s next.</em></h1>
          <p>Whether you&apos;re hiring, looking for your next opportunity, or exploring a training partnership—we&apos;re here to help.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="section-kicker">Based in Andhra Pradesh</div>
            <h2 className="section-heading">Good questions<br /><span>welcome.</span></h2>
            <div className="contact-detail-list">
              <a href="mailto:admin@staffzonesolutions.in" className="contact-detail">
                <span className="contact-icon"><Mail size={18} /></span>
                <span><small>Email us</small>admin@staffzonesolutions.in</span>
              </a>
              <div className="contact-detail">
                <span className="contact-icon"><MapPin size={18} /></span>
                <span><small>Our base</small>Andhra Pradesh, India<br />Serving organisations nationwide</span>
              </div>
              <div className="contact-detail">
                <span className="contact-icon"><Clock3 size={18} /></span>
                <span><small>Office hours</small>Mon–Sat, 9:30am–6:30pm IST</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <TallyEmbed
              formId="1A8Jpg"
              title="Contact StaffZone Solutions"
              height={760}
            />
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <div className="section-header-row map-header">
            <div>
              <div className="section-kicker">Our home base</div>
              <h2 className="section-heading">Find Staffzone<br /><span>Solutions LLP.</span></h2>
            </div>
            <p className="body-large">Rooted in Andhra Pradesh, we work with organisations and professionals across India.</p>
          </div>
          <div className="map-shell">
            <MapView initialCenter={location} initialZoom={15} onMapReady={(map) => { mapRef.current = map; }} className="contact-map" />
            <button
              type="button"
              className="map-tag map-tag-button"
              onClick={() => {
                mapRef.current?.panTo(location);
                mapRef.current?.setZoom(15);
              }}
              aria-label="Center map on Staffzone Solutions LLP"
            >
              <MapPin size={15} /> Staffzone Solutions LLP <span className="map-tag-action">Center map</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
