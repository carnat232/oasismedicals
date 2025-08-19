import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import NavigationLoader from "./NavigationLoader";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetSection, setTargetSection] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    setTargetSection(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    setIsNavigating(true);
  };

  const handleNavigationComplete = () => {
    setIsNavigating(false);
    const sectionId = targetSection.toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setTargetSection("");
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/fc70eb34-882e-4a20-9da3-39a20773fb7c.png" 
            alt="O.A.S.I.S MEDICALS" 
            className="h-10 w-auto hover-scale"
          />
          <div>
            <h1 className="text-xl font-bold text-foreground">O.A.S.I.S. MEDICALS</h1>
            <p className="text-xs text-muted-foreground">...Your Health is our concern.</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          {user ? (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline"
                size="sm"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90">
                <MessageCircle className="w-4 h-4 mr-2" />
                Book Test
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline"
                size="sm"
                onClick={() => navigate('/auth')}
              >
                Patient Login
              </Button>
              <Button onClick={openWhatsApp} className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90">
                <MessageCircle className="w-4 h-4 mr-2" />
                Book Test
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <NavigationLoader 
        isVisible={isNavigating}
        targetSection={targetSection}
        onComplete={handleNavigationComplete}
      />
    </nav>
  );
};

export default Navbar;