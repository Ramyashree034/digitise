const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-neon text-4xl md:text-6xl mb-6">
            About Digitise 2025
          </h2>
          <div className="section-divider mb-8" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Digitise 2025 is the most anticipated tech festival of the year, bringing together 
              brilliant minds, innovative ideas, and cutting-edge technology in one spectacular event.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From intense hackathons to engaging tech quizzes, from coding contests to fun 
              activities, we've crafted an experience that celebrates the spirit of innovation 
              and technological excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Participants Expected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-orbitron font-bold text-secondary mb-2">₹50K+</div>
                <div className="text-muted-foreground">Prize Pool</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="card-neon p-8 text-center">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-4">
                Event Highlights
              </h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  <span>8-hour Intensive Hackathon</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                  <span>Competitive Coding Contests</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                  <span>Tech Quiz & Trivia Rounds</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-pink rounded-full"></span>
                  <span>Interactive Fun Activities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                  <span>Industry Expert Judging Panel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;