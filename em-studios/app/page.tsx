import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import WhySection from "../components/WhySection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import InsightsSection from "../components/InsightsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="intro" className="container mx-auto px-8 py-36">
        <div className="max-w-4xl text-left">
          <h2 className="text-zinc-200 text-6xl font-extrabold mb-6">
            Every brand has a story.
            <br />
            We help you make it impossible to ignore.
          </h2>
          <p className="text-zinc-400 text-lg">
            At EM Studios we combine strategy, creativity and technology to create brand systems, films and campaigns that move people and scale businesses.
          </p>
        </div>
      </section>

      <SelectedWork />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <WhySection />
      <PricingSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
