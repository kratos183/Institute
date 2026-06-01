"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faqs";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{ scrollMarginTop: "100px" }}
      aria-label="Frequently asked questions"
    >
      <div
        className="glow-cyan absolute"
        style={{ bottom: "0", right: "20%" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out to us directly."
        />

        <div className="max-w-3xl mx-auto" style={{ marginTop: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={i * 0.07}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen
                      ? "rgba(37,99,235,0.08)"
                      : "rgba(255,255,255,0.03)",
                    border: isOpen
                      ? "1px solid rgba(37,99,235,0.3)"
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{
                          background: isOpen
                            ? "linear-gradient(135deg, #2563eb, #7c3aed)"
                            : "rgba(255,255,255,0.08)",
                          color: isOpen ? "#fff" : "#64748b",
                        }}
                      >
                        Q{i + 1}
                      </div>
                      <span
                        className="font-semibold text-base leading-snug"
                        style={{
                          color: isOpen ? "#f8fafc" : "#cbd5e1",
                          fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0"
                      aria-hidden="true"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? "#3b82f6" : "#64748b"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                          className="px-6 pb-6 pt-2"
                        >
                          <div
                            className="h-px mb-5"
                            style={{ background: "rgba(37,99,235,0.2)" }}
                          />
                          <div className="flex gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                              style={{
                                background: "rgba(34,211,238,0.15)",
                                color: "#22d3ee",
                              }}
                            >
                              A
                            </div>
                            <p
                              className="text-base leading-relaxed flex-1"
                              style={{ color: "#cbd5e1", paddingTop: "2px" }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
          </div>
        </div>

        {/* CTA below FAQ */}
        <ScrollReveal delay={0.3}>
          <div className="text-center" style={{ marginTop: "4rem" }}>
            <p className="text-sm" style={{ color: "#64748b", marginBottom: "1.5rem" }}>
              Still have questions? We&#39;re happy to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="btn-outline text-sm">
                ✉️ Ask Us Anything
              </a>
              <a href="tel:+919876543210" className="btn-primary text-sm">
                <span>📞 Call Now</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
