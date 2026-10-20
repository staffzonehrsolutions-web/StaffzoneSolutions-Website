import { ArrowRight, ArrowUpRight, Check, ChevronRight, Compass, Layers3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('lottie-player')) {
      const player = document.createElement('lottie-player');
      player.setAttribute('src', '/animation.json');
      player.setAttribute('background', 'transparent');
      player.setAttribute('speed', '1');
      player.setAttribute('loop', '');
      player.setAttribute('autoplay', '');
      (player as HTMLElement).style.width = '100%';
      (player as HTMLElement).style.height = '100%';
      containerRef.current.appendChild(player);
    }
  }, []);

  return (
    <div>
      <style>{`
        /* Staffzone cyan border-draw hover effect */
        .home-border-draw {
          position: relative;
          isolation: isolate;
        }

        .home-border-draw::before,
        .home-border-draw::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          box-sizing: border-box;
          border: 4px solid transparent;
          border-radius: inherit;
          pointer-events: none;
          z-index: 10;
        }

        /* Draw the top edge, then the left edge. */
        .home-border-draw::before {
          top: 0;
          left: 0;
          border-top-color: #02e3f4;
          border-left-color: #02e3f4;
          transition: width 0.25s ease, height 0.25s ease 0.25s;
        }

        /* Complete the border from the bottom-right corner. */
        .home-border-draw::after {
          right: 0;
          bottom: 0;
          border-right-color: #02e3f4;
          border-bottom-color: #02e3f4;
          transition: width 0.25s ease 0.5s, height 0.25s ease 0.75s;
        }

        .home-border-draw:hover::before,
        .home-border-draw:hover::after,
        .home-border-draw:focus-visible::before,
        .home-border-draw:focus-visible::after,
        .home-border-draw:focus-within::before,
        .home-border-draw:focus-within::after {
          width: 100%;
          height: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-border-draw::before,
          .home-border-draw::after {
            transition: none;
          }
        }
      `}</style>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
            
            {/* Text Content */}
            <div style={{ flex: "1 1 400px" }}>
              <h2 className="display-heading">Work is changing.<br /><span>People still matter most.</span></h2>
              <div className="intro-bottom-row">
                <p className="body-large">From skilled manpower and payroll administration to campus drives, internships, and upskilling, we make workforce growth simpler, sharper, and more human.</p>
                <Link href="/about" className="round-arrow" aria-label="Learn more about StaffzoneSolutions"><ArrowRight size={20} /></Link>
              </div>
            </div>

            {/* Lottie Animation Beside the Text */}
            <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
              <div className="home-border-draw" style={{ 
                width: "100%", 
                maxWidth: "400px", 
                aspectRatio: "1 / 1", 
                borderRadius: "36px", 
                backgroundColor: "transparent", // Set to transparent
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                overflow: "hidden",
                border: "1px solid rgba(2, 227, 244, 0.2)"
              }}>
                <div ref={containerRef} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section audience-section">
        <div className="container">
          <div className="section-kicker">One mission · Two pathways</div>
          <div className="audience-header"><h2 className="section-heading">Progress looks different<br /><span>for everyone.</span></h2><p className="body-large">We create value on both sides of the opportunity—helping employers grow with confidence and helping people grow with purpose.</p></div>
          <div className="audience-grid">
            {audiencePaths.map((path,
