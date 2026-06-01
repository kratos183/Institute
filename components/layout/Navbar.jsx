"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on nav link click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    
    // Manual scroll to section
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 10, 15, 0.9)"
          : "rgba(10, 10, 15, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            aria-label="Computer Zone Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg font-bold"
              style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                boxShadow: "0 4px 15px rgba(37,99,235,0.4)",
              }}
            >
              CZ
            </div>
            <div>
              <span
                className="text-lg font-bold block leading-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Computer Zone
              </span>
              <span className="text-xs hidden sm:block" style={{ color: "#64748b" }}>
                Premier Computer Institute
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center lg:gap-1.5 xl:gap-3.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative lg:px-2.5 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: isActive ? "#3b82f6" : "#94a3b8",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = "#f8fafc";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = "#94a3b8";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                      style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+917992430183" className="btn-outline text-sm py-2 px-4">
              📞 Call Now
            </a>
            <a href="#admission" className="btn-primary text-sm py-2.5 px-5">
              <span>Enroll Free</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
            style={{
              background: mobileOpen ? "rgba(37,99,235,0.15)" : "transparent",
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
                y: mobileOpen ? 8 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-0.5 rounded-full"
              style={{ background: "#f8fafc" }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-0.5 rounded-full"
              style={{ background: "#f8fafc" }}
            />
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
                y: mobileOpen ? -8 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="block w-5 h-0.5 rounded-full"
              style={{ background: "#f8fafc" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,15,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer block"
                    style={{
                      color: activeSection === link.href.replace("#", "") ? "#3b82f6" : "#94a3b8",
                      background:
                        activeSection === link.href.replace("#", "")
                          ? "rgba(37,99,235,0.1)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="#admission"
                  onClick={(e) => handleNavClick(e, '#admission')}
                  className="btn-primary w-full justify-center py-3"
                >
                  <span>Enroll Free</span>
                </a>
                <a
                  href="tel:+917992430183"
                  className="btn-outline w-full justify-center py-3"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
