import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-16T00:00:00").getTime(); // Event date
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft)
    return (
      <p className="text-center text-xl text-red-500 font-bold">
        Event Started!
      </p>
    );

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-background/80 text-center">
      <h2 className="title-neon text-4xl md:text-6xl mb-6">Countdown to Digitise 2025 🎉</h2>
      <div className="section-divider mb-8" />
      <div className="flex justify-center gap-6 text-glow text-3xl md:text-4xl lg:text-5xl font-orbitron">
        <div className="card-neon p-6 rounded-lg">
          <div>{timeLeft.days}</div>
          <div className="text-lg md:text-xl font-semibold">Days</div>
        </div>
        <div className="card-neon p-6 rounded-lg">
          <div>{timeLeft.hours}</div>
          <div className="text-lg md:text-xl font-semibold">Hours</div>
        </div>
        <div className="card-neon p-6 rounded-lg">
          <div>{timeLeft.minutes}</div>
          <div className="text-lg md:text-xl font-semibold">Minutes</div>
        </div>
        <div className="card-neon p-6 rounded-lg">
          <div>{timeLeft.seconds}</div>
          <div className="text-lg md:text-xl font-semibold">Seconds</div>
        </div>
      </div>
      <p className="mt-6 text-xl md:text-2xl text-muted-foreground">
        Get ready for an amazing day of tech, innovation, and fun!
      </p>
    </section>
  );
};

export default Countdown;
