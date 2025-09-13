import Hero from "@/components/Hero";
import Purpose from "@/components/Purpose";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import CityShowcase from "@/components/CityShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Purpose />
      <HowItWorks />
      <About />
      <CityShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
