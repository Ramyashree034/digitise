import { Phone } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Technical Registration",
      person: "Ramyashree S V",
      info: "9110435932",
    },
    {
      icon: Phone,
      title: "Girls Hostel Accommodation",
      person: "P N Khushi",
      info: "9019055369",
    },
    {
      icon: Phone,
      title: "Boys Hostel Accommodation",
      person: "Ahishek N S",
      info: "7411255177",
    },
    {
      icon: Phone,
      title: "Boys Hostel Accommodation",
      person: "Lekhan",
      info: "9353093025",
    },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/ait_ise_official?utm_source=qr&igsh=MWQ0aGFpOGlkNmllMA==", color: "text-neon-pink" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/isedept22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "text-neon-blue" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="title-neon text-4xl md:text-6xl mb-6">Get In Touch</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about Digitise 2025? We're here to help you make the
            most of this incredible tech festival.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="card-neon p-6 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-orbitron font-bold mb-2 text-glow">
                {item.title}
              </h3>
              <h4 className="text-md font-semibold text-secondary mb-1">
                {item.person}
              </h4>
              <p className="text-primary font-semibold">{item.info}</p>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-bold mb-8 text-secondary">
            Follow Us For Updates
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full border-2 border-current ${social.color} hover:bg-current/10 transition-all duration-300`}
                aria-label={social.name}
              >
                <span className="text-lg font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
