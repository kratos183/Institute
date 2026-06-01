import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  titleClassName = "",
}) {
  return (
    <div className={`mb-20 md:mb-24 ${center ? "text-center" : ""}`}>
      {badge && (
        <ScrollReveal delay={0}>
          <div
            className={`inline-flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}
          >
            <span className="badge badge-blue">{badge}</span>
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${titleClassName}`}
          style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
        >
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className="mt-4 text-lg max-w-2xl leading-relaxed"
            style={{
              color: "#94a3b8",
              margin: center ? "1rem auto 0" : "1rem 0 0",
            }}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
