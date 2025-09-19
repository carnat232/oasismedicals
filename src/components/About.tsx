import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, Target, Eye } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Accurate & Timely Diagnostics",
      description: "State-of-the-art equipment ensuring precise results delivered when you need them most."
    },
    {
      icon: Users,
      title: "Experienced Medical Professionals",
      description: "Our team of certified specialists brings years of expertise to every test and consultation."
    },
    {
      icon: Award,
      title: "State-of-the-Art Equipment",
      description: "Latest medical technology for superior imaging and diagnostic capabilities."
    },
    {
      icon: Clock,
      title: "Confidential & Patient-Centered Care",
      description: "Your privacy and comfort are our priorities in every interaction and procedure."
    }
  ];

  const visionMission = [
    {
      icon: Eye,
      title: "Our Vision",
      content: "To be the leading diagnostic center in Nigeria, providing world-class medical services that improve health outcomes and save lives through early detection and accurate diagnosis."
    },
    {
      icon: Target,
      title: "Our Mission",
      content: "To deliver exceptional diagnostic services with compassion, accuracy, and integrity, making quality healthcare accessible to all while maintaining the highest professional standards."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">O.A.S.I.S. MEDICALS</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Dedicated to providing exceptional diagnostic services with a commitment to your health and well-being
          </p>
        </div>

        {/* Vision & Mission with Image */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Facility Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden h-full">
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/lovable-uploads/b37e74d6-ddb5-4e25-ac78-9c8350905184.png" 
                  alt="OASIS Medical professional team photo"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </Card>
          </div>
          
          {/* Vision & Mission Cards */}
          <div className="lg:col-span-2 space-y-6">
            {visionMission.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Meet Our Medical Director */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-primary">Medical Director</span>
          </h3>
          
          <Card className="overflow-hidden bg-gradient-to-br from-background to-primary/5 border-2 border-primary/10 shadow-xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Medical Director Image */}
                <div className="lg:col-span-2">
                  <div className="relative h-full min-h-[600px]">
                    <img 
                      src="/lovable-uploads/dr-timothy-olugbode.jpg" 
                      alt="Dr. Timothy Olayemi Olugbode - Medical Director and CEO of OASIS MEDICALS"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10"></div>
                  </div>
                </div>
                
                {/* Medical Director Bio */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                      <h4 className="text-3xl font-bold text-foreground mb-2">Dr. Timothy Olayemi Olugbode</h4>
                      <p className="text-xl text-primary font-semibold">Medical Director & Chief Executive Officer</p>
                    </div>
                    
                    {/* Professional Background */}
                    <div>
                      <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Professional Background
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Dr. Timothy Olayemi Olugbode is the Medical Director and Chief Executive Officer of O.A.S.I.S. MEDICALS, 
                        where he provides strategic leadership and drives the vision of delivering world-class, patient-centered healthcare services. 
                        With over a decade of professional experience as a Medical Laboratory Scientist and Medical Sonographer, 
                        he has built a strong reputation for excellence in medical diagnostics, imaging, and research.
                      </p>
                    </div>
                    
                    {/* Education & Certifications */}
                    <div>
                      <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Education & Certifications
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        He holds a professional certificate in Medical Laboratory Technology (MLT), Bachelor's degree and a Master's degree in Medical Microbiology, 
                        which laid the foundation for his expertise in laboratory medicine, infectious disease management, and diagnostic microbiology. 
                        Expanding his professional competence into diagnostic imaging, he obtained Certificate in Obstetrics and Gynecology Medical Sonography 
                        from the Centre for Ultrasound and Research Education (CURE) at the Lagos University Teaching Hospital (LUTH) and Postgraduate Diploma 
                        in General Sonography from the Radiographers Registration Board of Nigeria (RRBN).
                      </p>
                    </div>
                    
                    {/* Research & Academic Excellence */}
                    <div>
                      <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        Research & Academic Excellence
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        Dr. Timothy Olayemi Olugbode is a passionate researcher whose work integrates laboratory science and diagnostic imaging 
                        to improve patient outcomes and healthcare delivery. He is currently in the final stages of completing his PhD thesis, 
                        further cementing his role as an academic and professional authority in his field.
                      </p>
                    </div>
                    
                    {/* Recognition & Awards */}
                    <div>
                      <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Recognition & Awards
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        In recognition of his outstanding contributions to medicine, diagnostics, and community healthcare, 
                        he has received an Honorary Doctorate degree along with numerous awards of recognition from professional 
                        and community-based organizations.
                      </p>
                    </div>
                    
                    {/* Leadership Vision */}
                    <div>
                      <h5 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Leadership Vision
                      </h5>
                      <p className="text-muted-foreground leading-relaxed">
                        As a healthcare leader, Dr. Timothy Olugbode combines clinical expertise, research-driven innovation, 
                        and visionary leadership to advance medical practice. At O.A.S.I.S. MEDICALS, he remains committed to 
                        delivering quality, accessible, and innovative healthcare solutions, while mentoring the next generation 
                        of healthcare professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose OASIS */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">OASIS?</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-medical-cyan to-medical-magenta rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-muted-foreground">Successful Tests</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-muted-foreground">Service Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-success mb-2">500+</div>
                  <div className="text-muted-foreground">Healthcare Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Patient Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;