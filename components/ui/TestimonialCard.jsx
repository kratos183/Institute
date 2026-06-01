import ScrollReveal from "../ui/ScrollReveal";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <ScrollReveal delay={index * 0.1} className="">
      <div
        style={{
          padding: "1.5rem",
          borderRadius: "1rem",
          background: "rgba(255,255,255,0.05)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.5), 0 0 30px rgba(37,99,235,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
        }}
      >
        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginBottom: "1rem" }}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span style={{ color: "#64748b", fontSize: "0.75rem", marginLeft: "0.25rem" }}>
            {testimonial.joinedYear}
          </span>
        </div>

        {/* Quote */}
        <div style={{ flex: 1, marginBottom: "1.25rem" }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginBottom: "0.75rem", opacity: 0.4, color: "#2563eb" }}
          >
            <path
              d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
              fill="currentColor"
            />
            <path
              d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
              fill="currentColor"
            />
          </svg>
          <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6 }}>
            {testimonial.content}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "1rem" }} />

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            className={`bg-gradient-to-br ${testimonial.avatarColor}`}
            style={{
              width: "2.75rem",
              height: "2.75rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {testimonial.avatar}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "#f8fafc", fontWeight: 600, fontSize: "0.875rem", fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}>
              {testimonial.name}
            </p>
            <p style={{ color: "#64748b", fontSize: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.25rem 0.5rem",
                borderRadius: "9999px",
                background: "rgba(16,185,129,0.12)",
                color: "#34d399",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              {testimonial.salary}
            </div>
          </div>
        </div>

        {/* Course Tag */}
        <div style={{ marginTop: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              padding: "0.25rem 0.625rem",
              borderRadius: "9999px",
              background: "rgba(37,99,235,0.1)",
              color: "#60a5fa",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            📚 {testimonial.course}
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
