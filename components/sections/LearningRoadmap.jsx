"use client";

import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const steps = [
  {
    phase: "Phase 1",
    label: "Foundation",
    weeks: "Weeks 1–4",
    icon: "🌱",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
    items: [
      "Basics of programming & logic",
      "Core concepts of your track",
      "Dev environment setup",
      "Version control with Git",
    ],
    outcome: "Solid fundamentals",
  },
  {
    phase: "Phase 2",
    label: "Core Skills",
    weeks: "Weeks 5–10",
    icon: "⚡",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.1)",
    border: "rgba(37,99,235,0.25)",
    items: [
      "Deep dive into core technologies",
      "Build first mini projects",
      "Industry best practices",
      "Code review sessions",
    ],
    outcome: "Hands-on proficiency",
  },
  {
    phase: "Phase 3",
    label: "Advanced Topics",
    weeks: "Weeks 11–16",
    icon: "🚀",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.25)",
    items: [
      "Advanced features & patterns",
      "Performance optimization",
      "Security best practices",
      "Build capstone project",
    ],
    outcome: "Industry-level skills",
  },
  {
    phase: "Phase 4",
    label: "Job Ready",
    weeks: "Weeks 17–20",
    icon: "🏆",
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    items: [
      "Resume & LinkedIn optimization",
      "Mock interview rounds",
      "Portfolio deployment",
      "Company introductions",
    ],
    outcome: "Land your dream job!",
  },
];

export default function LearningRoadmap() {
  return (
    <section
      id="roadmap"
      className="section-padding relative overflow-hidden"
      aria-label="Learning roadmap"
    >
      <div
        className="glow-blue absolute"
        style={{ top: "50%", left: "-100px", transform: "translateY(-50%)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Learning Path"
          title="Your Journey from"
          highlight="Zero to Hero"
          subtitle="A structured, proven pathway that takes you from beginner to job-ready professional. No prior experience needed."
        />

        {/* Timeline */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10" style={{ gap: "3rem", marginTop: "3rem" }}>
            {steps.map((step, i) => (
              <ScrollReveal key={step.phase} delay={i * 0.15} className="h-full">
                <div className="h-full">
                  {/* Phase Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl relative"
                      style={{
                        background: step.bg,
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 20px ${step.bg}`,
                      }}
                    >
                      {step.icon}
                      <div
                        className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: step.color,
                          color: "#fff",
                        }}
                      >
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl transition-all duration-300 text-center"
                    style={{
                      background: step.bg,
                      border: `1.5px solid ${step.border}`,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${step.border}`,
                      padding: "1.75rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.5), 0 0 30px ${step.bg}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${step.border}`;
                    }}
                  >
                    <div
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: step.color, marginBottom: "0.75rem" }}
                    >
                      {step.phase} · {step.weeks}
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{
                        color: "#f8fafc",
                        fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {step.label}
                    </h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem", textAlign: "center" }}>
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center justify-center gap-2 text-sm"
                          style={{ color: "#94a3b8" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: step.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="text-sm font-semibold px-3 py-2 rounded-xl text-center"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      ✓ {step.outcome}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <ScrollReveal delay={0.5}>
          <div
            className="text-center rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))",
              border: "1px solid rgba(37,99,235,0.2)",
              marginTop: "4rem",
              padding: "3rem 2rem",
            }}
          >
            <p className="text-base font-medium" style={{ color: "#f8fafc", marginBottom: "2rem", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
              🎓 By the end, you&#39;ll have a{" "}
              <span className="gradient-text">job-ready portfolio</span>,{" "}
              <span className="gradient-text">interview skills</span>, and the{" "}
              <span className="gradient-text">confidence</span> to ace any technical round.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
              <a href="#admission" className="btn-primary inline-flex">
                <span>Begin Your Roadmap</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
