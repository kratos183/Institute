import { courses } from "@/data/courses";
import CourseCard from "../ui/CourseCard";
import SectionHeading from "../ui/SectionHeading";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="section-padding relative overflow-hidden"
      style={{ scrollMarginTop: "100px" }}
      aria-label="Our courses"
    >
      <div
        className="glow-purple absolute"
        style={{ bottom: "-50px", left: "10%" }}
        aria-hidden="true"
      />
      <div
        className="glow-cyan absolute"
        style={{ top: "10%", right: "-50px" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <SectionHeading
          badge="Our Courses"
          title="Choose Your"
          highlight="Career Path"
          subtitle="From beginner to job-ready in months. All courses include live projects, expert mentorship, and dedicated placement support."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" style={{ marginTop: "4rem" }}>
          <p className="text-sm" style={{ color: "#64748b", marginBottom: "1.5rem" }}>
            Can&#39;t decide? Let our career counsellors guide you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+919876543210" className="btn-outline">
              📞 Call for Free Counselling
            </a>
            <a href="#admission" className="btn-primary">
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
