import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Partner with us", href: "/partner" },
  { label: "Reach us", href: "/contact" },
  { label: "Home", href: "/" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="StaffzoneSolutions home">
      <img className="brand-logo" src="/manus-storage/StaffzoneSolutionsLOGO_e18bd229.jpeg" alt="Staffzone Solutions — For a Better Tomorrow" />
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="container header-inner">
          <Logo light={!scrolled} />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? "nav-link-active" : ""} ${item.href === "/" ? "nav-home-link" : ""}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="mobile-menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="container mobile-nav-inner">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`mobile-nav-link ${location === item.href ? "mobile-nav-link-active" : ""} ${item.href === "/" ? "mobile-home-link" : ""}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main><div key={location} className="route-stage">{children}</div></main>

      {scrolled && (location === "/about" || location === "/services") && (
        <Link href="/contact" className="floating-talk" aria-label="Let's talk with StaffzoneSolutions">
          <span>Let&apos;s talk</span><ArrowUpRight size={15} />
        </Link>
      )}

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand-block">
            <Logo light />
            <p>People-first staffing, HR, and career solutions for organisations and professionals ready to grow.</p>
            <div className="social-row" aria-label="Social media links">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>
          <div className="footer-links-group">
            <span className="footer-label">Explore</span>
            <Link href="/about">About us</Link>
            <Link href="/services">Our services</Link>
              <Link href="/careers">Join the team</Link>
              <Link href="/partner">Partner with us</Link>
          </div>
          <div className="footer-links-group">
            <span className="footer-label">Get in touch</span>
            <a href="mailto:admin@staffzonesolutions.in">admin@staffzonesolutions.in</a>
            <a href="https://www.staffzonesolution.in" target="_blank" rel="noreferrer">www.staffzonesolution.in</a>
          </div>
          <div className="footer-newsletter">
            <span className="footer-label">Stay in the loop</span>
            <p>Monthly notes on people, performance, and the future of work.</p>
            <Link href="/contact" className="footer-arrow-link">Subscribe to updates <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} StaffzoneSolutions. All rights reserved.</span>
          <span>Built for teams that move people forward.</span>
        </div>
      </footer>
    </div>
  );
}

export { Logo };
