import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoursesSection from "@/components/sections/CoursesSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import LearningRoadmap from "@/components/sections/LearningRoadmap";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import AdmissionForm from "@/components/sections/AdmissionForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <CoursesSection />
        <div className="section-divider" />
        <ProjectsShowcase />
        <div className="section-divider" />
        <LearningRoadmap />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
        <AdmissionForm />
      </main>
      <Footer />
    </>
  );
}
