const VenueSection = () => {
  return (
    <section id="venue" className="py-20 px-4 bg-background/20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="title-neon text-4xl md:text-6xl mb-6">Venue</h2>
        <p className="text-xl text-muted-foreground mb-8">
          AIT Chikkamagaluru
        </p>

        {/* Map Container */}
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.1351928867707!2d75.7982147!3d13.3418653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77aa342ed7f%3A0xaec39f2826004a0!2sAIT%20Chikkamagaluru!5e0!3m2!1sen!2sin!4v1759336968755!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Directions Button */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=AIT+Chikkamagaluru"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-background font-bold rounded-full shadow-lg hover:bg-primary/80 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default VenueSection;
