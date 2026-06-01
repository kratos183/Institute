"use client";

import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  {
    icon: "🎯",
    title: "Industry-Focused Training",
    description:
      "Every course is designed in collaboration with industry professionals to ensure you learn exactly what employers demand.",
  },
  {
    icon: "🚀",
    title: "Hands-On Learning",
    description:
      "Learn by building real projects, not watching theory. Our project-based approach prepares you for actual workplace challenges.",
  },
  {
    icon: "👨‍💼",
    title: "Expert Mentorship",
    description:
      "Learn from trainers with 5–15 years of industry experience at top tech companies and startups.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ scrollMarginTop: "100px" }}
      aria-label="About Computer Zone"
    >
      <div
        className="glow-purple"
        style={{ bottom: "-100px", right: "10%" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div>
            <SectionHeading
              badge="About Us"
              title="Transforming Careers"
              highlight="Since 2015"
              subtitle=""
              center={false}
            />

            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                <strong style={{ color: "#f8fafc" }}>Computer Zone</strong> was founded with a singular mission — to make quality tech education accessible to every student regardless of their background. For over a decade, we have been the launchpad for thousands of successful tech careers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
                We bridge the gap between academic knowledge and industry requirements through our constantly updated curriculum, live project experience, and dedicated placement support. Our graduates work at companies ranging from Fortune 500 corporations to high-growth startups.
              </p>
            </ScrollReveal>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <ScrollReveal delay={0.35}>
                <div
                  className="p-5 rounded-xl text-center"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                >
                  <div className="text-2xl mb-2 flex justify-center">🎯</div>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: "#f8fafc", fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    To empower every student with the digital skills and confidence to build a successful tech career.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div
                  className="p-5 rounded-xl text-center"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <div className="text-2xl mb-2 flex justify-center">🔭</div>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{ color: "#f8fafc", fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
                  >
                    Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    To be India's most trusted computer institute with the highest placement rate and student satisfaction.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.45}>
              <div style={{ marginTop: "2.5rem" }}>
                <a href="#admission" className="btn-primary inline-flex">
                  <span>Start Your Journey</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Values */}
          <div>
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={0.15 + i * 0.12}>
                <div
                  className="flex flex-col items-center text-center gap-4 p-5 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    marginBottom: "2rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(37,99,235,0.08)";
                    e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: "rgba(37,99,235,0.12)", width: "4rem", height: "4rem" }}
                  >
                    {val.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{
                        color: "#f8fafc",
                        fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                      }}
                    >
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {val.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Achievement Strip */}
            <ScrollReveal delay={0.55}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.12))",
                  border: "1px solid rgba(37,99,235,0.2)",
                  marginTop: "2rem",
                }}
              >
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { n: "5000+", label: "Students" },
                    { n: "10+", label: "Years" },
                    { n: "200+", label: "Companies" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        className="text-2xl font-black"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.n}
                      </div>
                      <div className="text-xs" style={{ color: "#64748b" }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
