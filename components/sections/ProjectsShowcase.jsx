"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const categories = ["All", "Full Stack", "AI / ML", "Data Analysis", "Cybersecurity"];

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.01)", scrollMarginTop: "100px" }}
      aria-label="Student projects"
    >
      <div className="container relative z-10">
        <SectionHeading
          badge="Student Projects"
          title="Real-World Projects"
          highlight="Built by Students"
          subtitle="Our students don't just learn — they build. These are actual projects created by our graduates during their training."
        />

        {/* Category Filter */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2" style={{ marginBottom: "3rem", marginTop: "2rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background:
                    activeCategory === cat
                      ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                      : "rgba(255,255,255,0.05)",
                  color: activeCategory === cat ? "#fff" : "#94a3b8",
                  border:
                    activeCategory === cat
                      ? "1px solid transparent"
                      : "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    activeCategory === cat
                      ? "0 4px 15px rgba(37,99,235,0.3)"
                      : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "3rem", marginTop: "3rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
               <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="h-full"
              >
                <div
                  className="h-full flex flex-col overflow-hidden group"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1.5px solid rgba(255,255,255,0.13)",
                    borderRadius: "1rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.55), 0 0 24px rgba(37,99,235,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.45)"; }}
                >
                  {/* Card Top */}
                  <div
                    className={`h-44 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      }}
                    />
                    <div className="relative text-center">
                      <div className="text-6xl mb-2">{project.icon}</div>
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(0,0,0,0.3)",
                          color: "#fff",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Stats overlay */}
                    <div
                      className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span
                        className="flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          color: "#fff",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        📦 {project.stats.commits} commits
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs px-2 py-1 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          color: "#fbbf24",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        ⭐ {project.stats.stars}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1 text-center">
                    <h3
                      className="font-bold mb-3 text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "#94a3b8" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5 justify-center">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            color: "#94a3b8",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div
                      className="flex items-center justify-center gap-2 pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "1rem" }}
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                          color: "#fff",
                        }}
                      >
                        {project.student[0]}
                      </div>
                      <div>
                        <p className="text-xs font-medium" style={{ color: "#f8fafc" }}>
                          {project.student}
                        </p>
                        <p className="text-xs" style={{ color: "#64748b" }}>
                          {project.course}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
