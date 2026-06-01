"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

export default function CourseCard({ course, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} className="">
      <motion.div
        className="h-full flex flex-col overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1.5px solid rgba(255,255,255,0.14)",
          borderRadius: "1rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        whileHover={{ scale: 1.01, y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Top Gradient Banner */}
        <div
          className={`h-2 w-full bg-gradient-to-r ${course.gradient}`}
          style={{
            boxShadow: `0 0 20px ${course.glowColor}`,
          }}
        />

        <div className="flex flex-col flex-1 text-center" style={{ padding: "2rem" }}>
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div
              className="text-5xl flex-shrink-0 flex items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.06)", width: "5rem", height: "5rem" }}
            >
              {course.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                {course.badge && (
                  <span className={`badge ${course.badgeColor} text-xs`}>
                    {course.badge}
                  </span>
                )}
              </div>
              <h3
                className="text-xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
              >
                {course.title}
              </h3>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <ClockIcon /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <LevelIcon /> {course.level}
            </span>
            <span
              className="flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "#34d399" }}
            >
              <MoneyIcon /> {course.salary}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8", maxWidth: "90%", marginLeft: "auto", marginRight: "auto" }}>
            {course.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>
              Technologies
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {course.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(37,99,235,0.12)",
                    color: "#93c5fd",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                >
                  {tech}
                </span>
              ))}
              {course.technologies.length > 6 && (
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#94a3b8",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onClick={() => setExpanded(!expanded)}
                >
                  +{course.technologies.length - 6} more
                </span>
              )}
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2.5 mt-2 justify-center">
                    {course.technologies.slice(6).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: "rgba(37,99,235,0.12)",
                          color: "#93c5fd",
                          border: "1px solid rgba(37,99,235,0.2)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>
              Career Paths
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {course.careerOpportunities.map((career) => (
                <div key={career} className="flex items-center justify-center gap-2 text-sm" style={{ color: "#94a3b8" }}>
                  <span style={{ color: "#34d399", fontSize: "10px" }}>▶</span>
                  {career}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2.5 mb-6 justify-center">
            {course.highlights.map((h) => (
              <span
                key={h}
                className="text-xs px-2.5 py-1 rounded-full font-medium flex items-center gap-1"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  color: "#34d399",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                ✓ {h}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
            <a
              href="#admission"
              className="btn-primary w-full justify-center text-sm py-2.5"
              aria-label={`Enroll in ${course.title}`}
            >
              <span>Enroll Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
