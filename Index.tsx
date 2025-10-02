import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Countdown from "@/components/Countdown";
import ScheduleSection from "@/components/ScheduleSection";
import EventsSection from "@/components/EventsSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <Countdown />
        <ScheduleSection />
        <EventsSection />
        <RegistrationSection />
        <ContactSection />
        <VenueSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
