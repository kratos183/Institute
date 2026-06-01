"use client";

const footerLinks = {
  courses: [
    { label: "Full Stack Web Dev", href: "#courses" },
    { label: "AI & Machine Learning", href: "#courses" },
    { label: "Data Analysis", href: "#courses" },
    { label: "Cybersecurity", href: "#courses" },
    { label: "ADCA + Tally", href: "#courses" },
  ],
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Student Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  contact: [
    { icon: "📍", label: "Shyamdih More, Katras, Dhanbad – 828113" },
    { icon: "📞", label: "+91 79924 30183", href: "tel:+917992430183" },
    { icon: "📞", label: "+91 79797 38041", href: "tel:+917979738041" },
    { icon: "✉️", label: "chandansaricreative@gmail.com", href: "mailto:chandansaricreative@gmail.com" },
    { icon: "🕐", label: "Mon–Sat: 9 AM – 8 PM" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#060609",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "4rem" }}>
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-5" aria-label="Computer Zone">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base"
                style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
              >
                CZ
              </div>
              <div>
                <span
                  className="text-xl font-bold block"
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
                <span className="text-xs" style={{ color: "#64748b" }}>
                  Premier Computer Institute
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "#64748b", marginBottom: "1.5rem" }}>
              Empowering students with industry-ready tech skills since 2015. 5000+ students trained. 95%+ placement rate.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2" style={{ marginBottom: "2rem" }}>
              <span className="badge badge-blue text-xs">🏆 Best Institute 2024</span>
              <span className="badge badge-green text-xs">✓ ISO Certified</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "YouTube",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0a0a0f" />
                    </svg>
                  ),
                  color: "#ff0000",
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  color: "#e1306c",
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  color: "#0a66c2",
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/919876543210",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  ),
                  color: "#25d366",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#64748b",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.borderColor = social.color + "44";
                    e.currentTarget.style.background = social.color + "15";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider"
              style={{
                color: "#f8fafc",
                fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              Our Courses
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                    onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                  >
                    <span style={{ color: "#2563eb", fontSize: "10px" }}>▶</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider"
              style={{
                color: "#f8fafc",
                fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                    onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                  >
                    <span style={{ color: "#2563eb", fontSize: "10px" }}>▶</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider"
              style={{
                color: "#f8fafc",
                fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                marginBottom: "1.5rem",
              }}
            >
              Contact Us
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {footerLinks.contact.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-relaxed transition-colors duration-200"
                      style={{ color: "#64748b" }}
                      onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                      onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/917992430183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(37,211,102,0.12)",
                color: "#25d366",
                border: "1px solid rgba(37,211,102,0.25)",
                marginTop: "1.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(37,211,102,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container" style={{ paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
          <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: "1.25rem" }}>
            <p className="text-sm" style={{ color: "#475569" }}>
              © {year} Computer Zone. All rights reserved.
            </p>
            <div className="flex items-center" style={{ gap: "2rem" }}>
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#475569" }}
                  onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                  onMouseLeave={(e) => (e.target.style.color = "#475569")}
                >
                  {link}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "#334155" }}>
              Made with ❤️ for students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
