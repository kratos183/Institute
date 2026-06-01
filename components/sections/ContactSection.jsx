"use client";

import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const contactDetails = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["Shyamdih More, Katras", "Dhanbad, Jharkhand – 828113"],
    href: "https://www.google.com/maps/search/Shyamdih+More+Katras+Dhanbad+Jharkhand",
    linkLabel: "Get Directions",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.2)",
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 79924 30183", "+91 79797 38041"],
    href: "tel:+917992430183",
    linkLabel: "Call Now",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["chandansaricreative@gmail.com", "chandansarithorium@gmail.com"],
    href: "mailto:chandansaricreative@gmail.com",
    linkLabel: "Send Email",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: "🕐",
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 4:00 PM"],
    href: null,
    linkLabel: null,
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.015)", scrollMarginTop: "100px" }}
      aria-label="Contact information"
    >
      <div
        className="glow-blue absolute"
        style={{ bottom: "0", left: "-100px" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Contact Us"
          title="We'd Love to"
          highlight="Hear From You"
          subtitle="Have questions? Want a free demo class? Walk in or reach out anytime — we're here to help you make the best decision."
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 card-grid mb-14">
          {contactDetails.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div
                className="p-6 rounded-2xl h-full transition-all duration-300 text-center"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px ${item.bg}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="text-3xl mb-3 flex justify-center">{item.icon}</div>
                <h3
                  className="font-bold text-sm mb-3"
                  style={{
                    color: "#f8fafc",
                    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm" style={{ color: "#94a3b8" }}>
                      {line}
                    </p>
                  ))}
                </div>
                {item.href && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-80"
                    style={{ color: item.color }}
                  >
                    {item.linkLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Map + WhatsApp Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 card-grid">
          {/* Map */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                height: "380px",
              }}
            >
              <iframe
                title="Computer Zone Location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.123456789!2d86.3!3d23.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4e8b3b3b3b3%3A0x1234567890abcdef!2sKatras%2C+Dhanbad%2C+Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          {/* Quick Contact Sidebar */}
          <ScrollReveal delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", height: "100%" }}>
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917992430183?text=Hi%2C%20I%27m%20interested%20in%20enrolling%20at%20Computer%20Zone.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center gap-4 p-8 rounded-2xl transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(34,197,94,0.08))",
                  border: "1.5px solid rgba(37,211,102,0.3)",
                  minHeight: "180px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(37,211,102,0.18), rgba(34,197,94,0.12))";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(37,211,102,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(37,211,102,0.12), rgba(34,197,94,0.08))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 text-4xl"
                  style={{ 
                    background: "rgba(37,211,102,0.2)",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.15)",
                  }}
                >
                  💬
                </div>
                <div>
                  <div
                    className="font-black text-lg mb-2"
                    style={{
                      color: "#25d366",
                      fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                    }}
                  >
                    Chat on WhatsApp
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    Instant reply during business hours
                  </div>
                </div>
              </a>

              {/* Demo Class Card */}
              <div
                className="p-8 rounded-2xl flex flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
                  border: "1.5px solid rgba(37,99,235,0.25)",
                  minHeight: "240px",
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-5"
                  style={{ 
                    background: "rgba(37,99,235,0.2)",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.15)",
                  }}
                >
                  🎓
                </div>
                <h3
                  className="font-black text-lg mb-3"
                  style={{
                    color: "#f8fafc",
                    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                  }}
                >
                  Free Demo Class
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                  Experience our teaching style before you commit. Attend a free demo session for any course.
                </p>
                <a href="#admission" className="btn-primary w-full justify-center text-sm py-3.5">
                  <span>Book Free Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hours Quick View */}
              <div
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.1))",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-5">
                  <div className="pulse-dot" />
                  <span className="text-base font-bold" style={{ color: "#34d399" }}>
                    Open Today
                  </span>
                </div>
                <div className="space-y-3">
                  <div
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📅</span>
                      <span className="text-sm font-medium" style={{ color: "#cbd5e1" }}>Mon – Sat</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#34d399" }}>9 AM – 8 PM</span>
                  </div>
                  <div
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">☀️</span>
                      <span className="text-sm font-medium" style={{ color: "#cbd5e1" }}>Sunday</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#22d3ee" }}>10 AM – 4 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
