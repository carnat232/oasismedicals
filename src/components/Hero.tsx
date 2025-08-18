import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Your Health is </span>
                <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">
                  our concern.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional diagnostic services including Ultrasound, Laboratory Tests, ECG, and X-Ray. 
                Trusted by healthcare professionals across Ogun & Lagos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book a Test Now
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center border border-primary/20 bg-gradient-to-br from-background to-secondary/50">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Tests Conducted</div>
              </Card>
              <Card className="p-6 text-center border border-accent/20 bg-gradient-to-br from-background to-accent/10">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Service Available</div>
              </Card>
              <Card className="p-6 text-center border border-success/20 bg-gradient-to-br from-background to-success/10">
                <div className="text-3xl font-bold text-success mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Trusted Results</div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern diagnostic equipment at O.A.S.I.S. Medicals" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certified & Accredited</div>
                  <div className="text-sm text-muted-foreground">Professional medical standards</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-medical-magenta to-medical-cyan rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-muted-foreground">Experienced professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;