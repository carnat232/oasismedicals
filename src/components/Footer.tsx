import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, MessageCircle, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  const makeCall = () => {
    window.open('tel:+2348058135226', '_self');
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Ultrasound Scans",
    "Laboratory Tests", 
    "ECG Services",
    "X-Ray Imaging"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">O.A.S.I.S. MEDICALS</h3>
                <p className="text-sm text-muted-foreground">...Your Health is our concern.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional diagnostic services with state-of-the-art equipment and experienced medical professionals. 
              Trusted by healthcare providers across Ogun & Lagos.
            </p>
            <div className="flex space-x-3">
              <Button onClick={makeCall} size="sm" variant="outline">
                <Phone className="w-4 h-4" />
              </Button>
              <Button onClick={openWhatsApp} size="sm" className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Ifo, Ogun State</p>
                  <p className="text-sm text-muted-foreground">Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-muted-foreground">08058135226</p>
                  <p className="text-muted-foreground">07033600770</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">24/7 WhatsApp Support</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-red-500" />
            <span>© 2024 O.A.S.I.S. MEDICALS. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Patient Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;