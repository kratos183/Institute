"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const timerRef = useRef(null);

  const paginated = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [totalPages]);

  const handlePageClick = (i) => {
    clearInterval(timerRef.current);
    setPage(i);
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 6000);
  };

  // Summary stats
  const avgRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.015)", scrollMarginTop: "100px" }}
      aria-label="Student testimonials"
    >
      <div
        className="glow-purple absolute"
        style={{ top: "50%", right: "-100px", transform: "translateY(-50%)" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Student Reviews"
          title="What Our"
          highlight="Alumni Say"
          subtitle="Thousands of lives changed. These are real stories from students who took the leap and transformed their careers."
        />

        {/* Rating Summary */}
        <ScrollReveal delay={0.1}>
          <div
            className="flex flex-wrap items-center justify-center gap-12 p-8 rounded-2xl"
            style={{
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.15)",
              marginBottom: "3rem",
              marginTop: "2rem",
            }}
          >
            <div className="text-center">
              <div
                className="text-5xl font-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {avgRating}
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-xs mt-1" style={{ color: "#64748b" }}>
                Average Rating
              </p>
            </div>
            <div className="h-16 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.08)" }} />
            {[
              { label: "Total Reviews", value: "1200+" },
              { label: "Placement Rate", value: "95%" },
              { label: "Avg. Salary Hike", value: "3.5×" },
            ].map((item) => (
              <div key={item.label} className="text-center">
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
                  {item.value}
                </div>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "3rem", marginBottom: "3rem" }}
          >
            {paginated.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              aria-label={`Go to page ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === page ? "28px" : "10px",
                height: "10px",
                background:
                  i === page
                    ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
