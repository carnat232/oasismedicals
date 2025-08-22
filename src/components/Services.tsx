import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, TestTube, Activity, X, ArrowRight, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Ultrasound Scans",
      description: "Advanced ultrasound imaging for comprehensive diagnostic assessment",
      features: ["Pelvic & Obstetrics", "Abdominal Scans", "Breast Ultrasound", "Thyroid Scan"],
      priceRange: "₦2,500 - ₦50,000",
      popular: true
    },
    {
      icon: TestTube,
      title: "Laboratory Tests",
      description: "Complete laboratory services with accurate and timely results",
      features: ["Blood Chemistry", "Microbiology", "Hormonal Profiles", "Histology"],
      priceRange: "Varies by test",
      popular: false
    },
    {
      icon: Activity,
      title: "ECG Services",
      description: "Electrocardiogram testing for heart health assessment",
      features: ["Pre & Post Exercise", "Heart Monitoring", "Cardiac Assessment", "Professional Reports"],
      priceRange: "₦12,000",
      popular: false
    },
    {
      icon: X,
      title: "X-Ray Imaging",
      description: "Digital X-ray services with detailed reporting",
      features: ["Head & Neck", "Chest & Abdomen", "Limbs & Joints", "Special Investigations"],
      priceRange: "Varies by area",
      popular: false
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive diagnostic services with state-of-the-art equipment and experienced medical professionals
          </p>
          
          {/* Service Information Image */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="overflow-hidden">
              <img 
                src="/lovable-uploads/2cc29c8d-32c8-40e9-bfd5-6f67fc90db01.png" 
                alt="Medical tests information display at OASIS Medical Center"
                className="w-full h-48 object-cover rounded-2xl shadow-xl"
              />
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-medical-cyan to-medical-magenta text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-3">Starting from</div>
                    <div className="text-lg font-bold text-primary mb-4">{service.priceRange}</div>
                    <Button 
                      onClick={openWhatsApp}
                      className="w-full bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Same Day</div>
                <div className="text-muted-foreground">Results Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Expert</div>
                <div className="text-muted-foreground">Medical Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">Accurate</div>
                <div className="text-muted-foreground">Diagnostics</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;