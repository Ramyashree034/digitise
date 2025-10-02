const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-orbitron font-black title-neon">
              Digitise 2025
            </h3>
            <p className="text-muted-foreground">
              The ultimate tech festival bringing together innovation, 
              competition, and community in one spectacular event.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-rajdhani font-bold text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Digitise
              </a>
              <a href="#events" className="block text-muted-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#schedule" className="block text-muted-foreground hover:text-primary transition-colors">
                Schedule
              </a>
              <a href="#register" className="block text-muted-foreground hover:text-primary transition-colors">
                Registration
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-rajdhani font-bold text-secondary">
              Contact Info
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 isedeptait22@gmail.com</p>
              <p>📞 +91 9110435932</p>
              <p>📍 AIT Campus </p>
              <p>📅 October 16-17, 2024</p>
            </div>
          </div>
        </div>
        
        <div className="section-divider mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p className="mb-4 md:mb-0">
            © 2024 Digitise 2025. All rights reserved.
          </p>
          <p className="text-sm">
            Built with ❤️ for the tech community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;