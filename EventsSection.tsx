import { Button } from "@/components/ui/button";

const EventsSection = () => {
  // Hackathon Event
  const hackathonEvents = [
    {
      name: "8-Hour Hackathon",
      type: "Hackathon",
      description:
        "Build innovative solutions in 8 hours. Teams of 2-4 members work on real-world problem statements.",
      date: "Oct 17, 2024",
    },
  ];

  // Hackathon Themes
  const hackathonThemes = [
    "EdTech & Learning Innovation",
    "Digital Health & Well-being",
    "Smart City & Sustainability",
    "IoT & Smart Systems",
    "AI & Data Science Application",
    "Social Impact & Inclusive Tech",
    "Green Education & Awareness",
    "Block chain, Cloud or Quantum Computing",
  ];

  // Tech Events
  const techEvents = [
    {
      name: "CSS Design Sprint",
      type: "Tech Contest",
      description:
        "Show off your CSS skills by designing visually appealing web pages in limited time.",
      date: "Oct 16, 2024",
    },
    {
      name: "Byte Battle",
      type: "Quiz",
      description:
        "Test your knowledge across programming, AI, web development, and tech trends.",
      date: "Oct 16, 2024",
    },
    {
      name: "Debugging",
      type: "Contest",
      description:
        "Fix buggy code snippets under time pressure and earn the top spot.",
      date: "Oct 16, 2024",
    },
    {
      name: "Visualize It",
      type: "Tech Fun",
      description:
        "Bring data to life with creative visualizations using any tool or framework.",
      date: "Oct 16, 2024",
    },
  ];

  // Non-Tech Events
  const nonTechEvents = [
    {
      name: "BGMI",
      type: "Gaming",
      description:
        "Compete in high-intensity matches of Battlegrounds Mobile India.",
      date: "Oct 16, 2024",
    },
    {
      name: "Freefire",
      type: "Gaming",
      description: "Show your battle royale skills in exciting Freefire rounds.",
      date: "Oct 16, 2024",
    },
  ];

  const handleRegister = (eventName: string) => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  const EventCard = ({ event, isHackathon = false }: { event: any; isHackathon?: boolean }) => (
    <div className={`card-neon p-6 h-full flex flex-col ${isHackathon ? "lg:col-span-2" : ""}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                event.type === "Hackathon"
                  ? "bg-primary/20 text-primary"
                  : event.type.includes("Tech")
                  ? "bg-secondary/20 text-secondary"
                  : event.type === "Quiz"
                  ? "bg-accent/20 text-accent"
                  : "bg-neon-pink/20 text-neon-pink"
              }`}
            >
              {event.type}
            </span>
            <span className="text-muted-foreground text-sm">{event.date}</span>
          </div>
          <h3 className="text-xl font-orbitron font-bold mb-2 text-glow">{event.name}</h3>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 flex-1">{event.description}</p>

      <Button onClick={() => handleRegister(event.name)} className="btn-neon w-full">
        Register Now
      </Button>
    </div>
  );

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-neon text-4xl md:text-6xl mb-6">Events</h2>
          <div className="section-divider mb-8" />
        </div>

        {/* Tech & Non-Tech Events Section (Oct 16) */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-secondary mb-8">
            October 16th - Tech & Non-Tech Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techEvents.map((event, index) => (
              <EventCard key={`tech-${index}`} event={event} />
            ))}
            {nonTechEvents.map((event, index) => (
              <EventCard key={`nontech-${index}`} event={event} />
            ))}
          </div>
        </div>

        {/* Hackathon Section (Oct 17) */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-primary mb-8">
            October 17th - Hackathon Marathon
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {hackathonEvents.map((event, index) => (
              <EventCard key={`hack-${index}`} event={event} isHackathon={true} />
            ))}
          </div>

          {/* Hackathon Themes */}
          <div className="mt-12 text-center">
            <h4 className="text-2xl font-orbitron font-bold mb-6 text-accent">
              Select Your Hackathon Theme
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {hackathonThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="card-neon p-4 cursor-pointer hover:scale-105 transition-transform"
                >
                  <p className="text-lg font-medium text-primary">{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
