import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import aitLogo from "@/assets/ait-logo.jpg"; // 👈 add your logo image inside src/assets

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_24%,hsl(var(--primary))_25%,hsl(var(--primary))_26%,transparent_27%,transparent_74%,hsl(var(--primary))_75%,hsl(var(--primary))_76%,transparent_77%),linear-gradient(0deg,transparent_24%,hsl(var(--primary))_25%,hsl(var(--primary))_26%,transparent_27%,transparent_74%,hsl(var(--primary))_75%,hsl(var(--primary))_76%,transparent_77%)] bg-[100px_100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={aitLogo}
            alt="AIT Logo"
            className="h-20 md:h-28 lg:h-32 drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <div className="animate-float">
          <h1 className="title-neon text-5xl md:text-7xl lg:text-8xl mb-4 animate-neon-pulse">
            🚀 DIGITISE 2025
          </h1>
        </div>

        {/* College Name */}
        <p className="text-lg md:text-xl lg:text-2xl mb-6 font-semibold text-glow">
          Adichunchanagiri Institute of Technology, Chikkamagaluru
        </p>

        {/* Department Name */}
        <p className="text-md md:text-lg lg:text-xl mb-6 font-medium text-glow text-secondary-foreground">
          Department of ISE
        </p>

        {/* Description */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-glow font-light max-w-4xl mx-auto">
          The ultimate fest – Hackathon, Coding Contests, Tech Quiz & Fun Events!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToEvents} className="btn-neon text-lg px-10 py-6">
            Explore Events
          </Button>
          <Button
            onClick={() =>
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-10 py-6 text-lg"
          >
            Register Now
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
