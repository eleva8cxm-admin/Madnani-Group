import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MarqueeBanner, { DoubleMarqueeBanner, AutoMarquee } from "@/components/MarqueeBanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      
      {/* Scrolling Marquee Banner */}
      <MarqueeBanner 
        text="Building Dreams" 
        speed={1.5}
        variant="default"
      />
      
      <ServicesSection />
      
      {/* Double Marquee with opposite directions */}
      <DoubleMarqueeBanner 
        topText="Real Estate"
        bottomText="Technology"
        speed={1}
      />
      
      <ProjectsSection />
      
      {/* Auto-scrolling services marquee */}
      <AutoMarquee 
        items={[
          "Luxury Apartments",
          "Premium Villas", 
          "IT Solutions",
          "Government Projects",
          "Data Services",
          "Infrastructure"
        ]}
        speed={25}
      />
      
      <FounderSection />
      
      {/* Final marquee before contact */}
      <MarqueeBanner 
        text="Let's Grow Together" 
        speed={1.2}
        variant="outline"
      />
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
