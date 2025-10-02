const ScheduleSection = () => {
  // October 16th - Tech & Non-Tech Events
  const oct16Schedule = [
    { time: "09:00 AM", event: "Opening Ceremony & Inauguration" },
    { time: "09:30 AM", event: "Tech Event 1" },
    { time: "10:30 AM", event: "Tech Quiz 2" },
    { time: "11:30 AM", event: "Tech Quiz 3" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "01:00 PM", event: "Tech Quiz 4" },
    { time: "02:00 PM", event: "Non Tech Quiz 5" },
    { time: "03:00 PM", event: "Break" },
    { time: "04:00 PM", event: "Non Tech Quiz 6" },
    { time: "05:00 PM", event: "Closing & Awards Ceremony" },
  ];

  // October 17th - Hackathon
  const oct17Schedule = [
    { time: "08:00 AM", event: "Registration & Check-in" },
    { time: "09:00 AM", event: "Opening Ceremony" },
    { time: "10:00 AM", event: "Hackathon Round 1: Ideation" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "02:00 PM", event: "Hackathon Round 2: Development" },
    { time: "03:00 PM", event: "Coffee Break" },
    { time: "04:00 PM", event: "Hackathon Round 3: Finalization" },
    { time: "04:00 PM", event: "Judges Visit & Feedback" },
    { time: "05:00 PM", event: "Submission & Validation" },
  ];

  const renderSchedule = (schedule: { time: string; event: string }[]) => (
    <ul className="space-y-2">
      {schedule.map((item, idx) => (
        <li key={idx} className="flex justify-between border-b border-muted py-1">
          <span className="font-orbitron font-bold text-primary">{item.time}</span>
          <span className="text-foreground">{item.event}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="schedule" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-neon text-4xl md:text-6xl mb-6">
            Event Schedule
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* October 16th - Tech & Non-Tech Events */}
          <div className="card-neon p-6">
            <h3 className="text-2xl font-orbitron font-bold text-secondary mb-4 text-center">
              October 16th, 2024
            </h3>
            <p className="text-center mb-4 text-xl text-primary">Tech & Non-Tech Events</p>
            {renderSchedule(oct16Schedule)}
          </div>

          {/* October 17th - Hackathon */}
          <div className="card-neon p-6">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-4 text-center">
              October 17th, 2024
            </h3>
            <p className="text-center mb-4 text-xl text-secondary">Hackathon Marathon</p>
            {renderSchedule(oct17Schedule)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
