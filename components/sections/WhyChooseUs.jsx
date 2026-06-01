"use client";

import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  {
    icon: "🛠️",
    title: "Live Real-World Projects",
    description:
      "Build production-grade applications during the course. Your portfolio will speak for itself in interviews.",
    stat: "6+ Projects",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.10)",
    border: "rgba(37,99,235,0.35)",
  },
  {
    icon: "💼",
    title: "Dedicated Placement Cell",
    description:
      "Our placement team actively coordinates with 200+ companies. Resume preparation, interview scheduling, and more.",
    stat: "200+ Companies",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.10)",
    border: "rgba(124,58,237,0.35)",
  },
  {
    icon: "🎤",
    title: "Interview Preparation",
    description:
      "Weekly mock technical interviews, HR round practice, aptitude training, and DSA problem-solving sessions.",
    stat: "50+ Mock Rounds",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.35)",
  },
  {
    icon: "🏆",
    title: "Industry Certificates",
    description:
      "Receive verified certificates recognized by our hiring partners. Preparation support for Google, Meta, and AWS certs.",
    stat: "Globally Recognized",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.35)",
  },
  {
    icon: "👨‍💻",
    title: "Expert Industry Trainers",
    description:
      "Learn from professionals with 5–15 years of experience at companies like Google, Infosys, TCS, and successful startups.",
    stat: "5–15 Yrs Exp.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.35)",
  },
  {
    icon: "📅",
    title: "Flexible Batch Timings",
    description:
      "Morning, afternoon, evening, and weekend batches. Online and offline modes. Learn at your own pace without compromising.",
    stat: "5 Batch Options",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.10)",
    border: "rgba(239,68,68,0.35)",
  },
  {
    icon: "🤝",
    title: "Lifetime Community Access",
    description:
      "Join our alumni network of 5000+ tech professionals. Get support, referrals, and networking opportunities forever.",
    stat: "5000+ Alumni",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.35)",
  },
  {
    icon: "💡",
    title: "1-on-1 Doubt Sessions",
    description:
      "Personalized doubt-clearing sessions with mentors. No student is left behind. Progress at your own comfortable pace.",
    stat: "Unlimited Doubts",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.10)",
    border: "rgba(34,211,238,0.35)",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.01)" }}
      aria-label="Why choose Computer Zone"
    >
      <div
        className="glow-blue absolute"
        style={{ top: "-150px", left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Why Computer Zone"
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="We don't just teach — we transform. Here's what makes Computer Zone the preferred institute for thousands of successful tech professionals."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 0.08} className="">
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  background: feat.bg,
                  border: `1.5px solid ${feat.border}`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${feat.border}`,
                  cursor: "default",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.55), 0 0 30px ${feat.bg}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${feat.border}`;
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{feat.icon}</div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    marginBottom: "0.75rem",
                    background: feat.bg,
                    color: feat.color,
                    border: `1px solid ${feat.border}`,
                  }}
                >
                  {feat.stat}
                </div>
                <h3
                  style={{
                    color: "#f8fafc",
                    fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {feat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
