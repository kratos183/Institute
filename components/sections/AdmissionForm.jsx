"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";

const COURSES = [
  "Full Stack Web Development",
  "AI & Machine Learning",
  "Data Analysis",
  "Cybersecurity & Ethical Hacking",
  "ADCA + Tally",
];

const QUALIFICATIONS = ["10th", "12th", "Diploma", "Graduate", "Post Graduate", "Other"];

const initialForm = {
  fullName: "",
  mobile: "",
  email: "",
  qualification: "",
  course: "",
  message: "",
};

const initialErrors = {};

function validateField(name, value) {
  switch (name) {
    case "fullName":
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 3) return "Must be at least 3 characters";
      if (value.trim().length > 100) return "Must be under 100 characters";
      return "";
    case "mobile":
      if (!value.trim()) return "Mobile number is required";
      if (!/^[6-9]\d{9}$/.test(value.trim()))
        return "Enter a valid 10-digit mobile number";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^\S+@\S+\.\S+$/.test(value.trim()))
        return "Enter a valid email address";
      return "";
    case "qualification":
      if (!value) return "Please select your qualification";
      return "";
    case "course":
      if (!value) return "Please select a course";
      return "";
    case "message":
      if (value.length > 500) return "Maximum 500 characters";
      return "";
    default:
      return "";
  }
}

function validateAll(form) {
  const errors = {};
  Object.keys(form).forEach((key) => {
    const err = validateField(key, form[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

export default function AdmissionForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields touched
    const allTouched = Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    // Validate all
    const allErrors = validateAll(form);
    setErrors(allErrors);

    if (Object.values(allErrors).some((v) => v)) return;

    setStatus("loading");
    setServerMsg("");

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMsg(data.message);
        setForm(initialForm);
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
        setServerMsg(data.message || "Something went wrong. Please try again.");
        if (data.errors) {
          setErrors((prev) => ({ ...prev, ...data.errors }));
        }
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please check your connection and try again.");
    }
  };

  const isFormValid =
    Object.keys(validateAll(form)).length === 0;

  return (
    <section
      id="admission"
      className="section-padding relative overflow-hidden"
      aria-label="Admission enquiry form"
    >
      <div
        className="glow-blue absolute"
        style={{ top: "20%", left: "-100px" }}
        aria-hidden="true"
      />
      <div
        className="glow-purple absolute"
        style={{ bottom: "10%", right: "-80px" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Enroll Now"
          title="Start Your"
          highlight="Free Enquiry"
          subtitle="Fill in your details and our expert counsellors will reach out within 24 hours. No commitment required."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
          {/* Left Benefits Panel */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div
              className="rounded-2xl sticky top-24 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))",
                border: "1px solid rgba(37,99,235,0.25)",
                padding: "2rem",
              }}
            >
              <div className="flex justify-center" style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>🎓</div>
              <h3
                style={{
                  color: "#f8fafc",
                  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Why Enroll at Computer Zone?
              </h3>
              <p className="text-sm" style={{ color: "#64748b", marginBottom: "1.25rem" }}>
                Join thousands of students who turned their passion into a career.
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.25rem" }}>
                {[
                  { icon: "✅", text: "Free demo class for any course" },
                  { icon: "💰", text: "0% EMI options available" },
                  { icon: "🏆", text: "Industry-recognized certificates" },
                  { icon: "💼", text: "Placement support included" },
                  { icon: "👨‍💻", text: "Expert mentors with 10+ yrs exp." },
                  { icon: "🔄", text: "Lifetime access to study materials" },
                  { icon: "📱", text: "Online & offline batch options" },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex flex-col items-center text-center"
                    style={{ color: "#94a3b8", fontSize: "0.8125rem", gap: "0.25rem" }}
                  >
                    <span style={{ fontSize: "1.125rem", flexShrink: 0 }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Trust Badges */}
              <div
                className="rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "1rem",
                }}
              >
                <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                  {[
                    { n: "5000+", l: "Students" },
                    { n: "95%", l: "Placed" },
                    { n: "200+", l: "Companies" },
                    { n: "10+", l: "Years" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontSize: "1.125rem",
                          fontWeight: 900,
                        }}
                      >
                        {s.n}
                      </div>
                      <div className="text-xs" style={{ color: "#475569", marginTop: "0.25rem" }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Panel */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "2rem",
              }}
            >
              {/* Success State */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="text-6xl mb-5"
                    >
                      🎉
                    </motion.div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{
                        color: "#f8fafc",
                        fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                      }}
                    >
                      Application Submitted!
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-6 max-w-sm mx-auto"
                      style={{ color: "#94a3b8" }}
                    >
                      {serverMsg}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setStatus("idle")}
                        className="btn-outline text-sm"
                      >
                        Submit Another
                      </button>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        <span>WhatsApp Us</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Admission enquiry form"
                  >
                    <h3
                      style={{
                        color: "#f8fafc",
                        fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                        paddingLeft: "0.25rem",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        marginBottom: "1.5rem",
                      }}
                    >
                      Admission Enquiry Form
                    </h3>

                    {/* Global error banner */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-5 p-4 rounded-xl text-sm"
                          style={{
                            background: "rgba(239,68,68,0.1)",
                            border: "1px solid rgba(239,68,68,0.25)",
                            color: "#fca5a5",
                          }}
                          role="alert"
                        >
                          ⚠️ {serverMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="form-label">
                          Full Name <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Enter your full name"
                          className="form-input"
                          aria-required="true"
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                          aria-invalid={!!errors.fullName && touched.fullName}
                          autoComplete="name"
                        />
                        <AnimatePresence>
                          {errors.fullName && touched.fullName && (
                            <motion.p
                              id="fullName-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="form-error"
                            >
                              {errors.fullName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile */}
                      <div>
                        <label htmlFor="mobile" className="form-label">
                          Mobile Number <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className="form-input"
                          aria-required="true"
                          aria-describedby={errors.mobile ? "mobile-error" : undefined}
                          aria-invalid={!!errors.mobile && touched.mobile}
                          autoComplete="tel"
                        />
                        <AnimatePresence>
                          {errors.mobile && touched.mobile && (
                            <motion.p
                              id="mobile-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="form-error"
                            >
                              {errors.mobile}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          className="form-input"
                          aria-required="true"
                          aria-describedby={errors.email ? "email-error" : undefined}
                          aria-invalid={!!errors.email && touched.email}
                          autoComplete="email"
                        />
                        <AnimatePresence>
                          {errors.email && touched.email && (
                            <motion.p
                              id="email-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="form-error"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Qualification */}
                      <div>
                        <label htmlFor="qualification" className="form-label">
                          Highest Qualification <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="qualification"
                            name="qualification"
                            value={form.qualification}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-select"
                            aria-required="true"
                            aria-describedby={errors.qualification ? "qualification-error" : undefined}
                            aria-invalid={!!errors.qualification && touched.qualification}
                          >
                            <option value="" disabled>
                              Select qualification
                            </option>
                            {QUALIFICATIONS.map((q) => (
                              <option key={q} value={q}>
                                {q}
                              </option>
                            ))}
                          </select>
                          <div
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
                            aria-hidden="true"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#64748b"
                              strokeWidth="2"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                        <AnimatePresence>
                          {errors.qualification && touched.qualification && (
                            <motion.p
                              id="qualification-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="form-error"
                            >
                              {errors.qualification}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Course */}
                      <div>
                        <label htmlFor="course" className="form-label">
                          Interested Course <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="course"
                            name="course"
                            value={form.course}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-select"
                            aria-required="true"
                            aria-describedby={errors.course ? "course-error" : undefined}
                            aria-invalid={!!errors.course && touched.course}
                          >
                            <option value="" disabled>
                              Select a course
                            </option>
                            {COURSES.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                          <div
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
                            aria-hidden="true"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#64748b"
                              strokeWidth="2"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </div>
                        </div>
                        <AnimatePresence>
                          {errors.course && touched.course && (
                            <motion.p
                              id="course-error"
                              role="alert"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="form-error"
                            >
                              {errors.course}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="form-label">
                          Additional Message{" "}
                          <span style={{ color: "#64748b" }}>(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Any specific questions, preferred batch timing, or anything else you'd like us to know..."
                          className="form-textarea"
                          maxLength={500}
                          aria-describedby={
                            errors.message ? "message-error" : "message-count"
                          }
                        />
                        <div className="flex justify-between mt-1">
                          <AnimatePresence>
                            {errors.message && touched.message && (
                              <motion.p
                                id="message-error"
                                role="alert"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="form-error"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                          <p
                            id="message-count"
                            className="text-xs ml-auto"
                            style={{
                              color:
                                form.message.length > 450 ? "#f87171" : "#475569",
                            }}
                          >
                            {form.message.length}/500
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Privacy Note */}
                    <p className="text-xs" style={{ color: "#475569", marginTop: "1.75rem", marginBottom: "1.75rem" }}>
                      🔒 Your information is completely secure. We will never share your
                      data with third parties.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      id="admission-submit-btn"
                      aria-label="Submit admission enquiry"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {status === "loading" ? (
                        <>
                          <div className="spinner" aria-hidden="true" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center mt-4" style={{ color: "#64748b" }}>
                      Our counsellor will contact you within{" "}
                      <strong style={{ color: "#94a3b8" }}>24 hours</strong>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
