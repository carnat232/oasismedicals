import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Center",
      details: ["Ifo, Ogun State", "Professional diagnostic facility"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["08058135226", "07033600770"],
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick booking", "Instant responses"],
      action: "Chat Now"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 Service Available", "Emergency support"],
      action: "Book Now"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you within 30 minutes to confirm your appointment.",
      });
    }, 2000);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  const makeCall = () => {
    window.open('tel:+2348058135226', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to book your test? Get in touch with us for professional diagnostic services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const handleAction = () => {
                if (info.title === "WhatsApp") openWhatsApp();
                else if (info.title === "Call Us") makeCall();
                else if (info.title === "Visit Our Center") {
                  window.open('https://maps.google.com', '_blank');
                }
              };

              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                        <Button 
                          onClick={handleAction}
                          variant="outline" 
                          size="sm" 
                          className="mt-3 text-primary border-primary hover:bg-primary hover:text-white"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  Book Your Test Online
                </CardTitle>
                <p className="text-muted-foreground">Fill out this form and we'll contact you to confirm your appointment</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="08012345678" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="testType">Test Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select test type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ultrasound">Ultrasound Scan</SelectItem>
                        <SelectItem value="laboratory">Laboratory Tests</SelectItem>
                        <SelectItem value="ecg">ECG (Electrocardiogram)</SelectItem>
                        <SelectItem value="xray">X-Ray Services</SelectItem>
                        <SelectItem value="multiple">Multiple Tests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input id="preferredDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any specific requirements or questions..."
                      rows={3}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90"
                    >
                      {isSubmitting ? "Sending..." : "Book Appointment"}
                      <Navigation className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      type="button"
                      onClick={openWhatsApp}
                      variant="outline" 
                      className="flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Quick WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Visit Our Diagnostic Center</h3>
                <p className="text-muted-foreground">Located in Ifo, Ogun State</p>
                <Button 
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className="mt-4 bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;