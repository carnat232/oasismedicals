import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import slideUltrasound from "@/assets/slide-ultrasound.jpg";
import slideLaboratory from "@/assets/slide-laboratory.jpg";
import slideXray from "@/assets/slide-xray.jpg";

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: heroImage,
      title: "Your Health is our concern.",
      subtitle: "Professional diagnostic services with state-of-the-art equipment",
      cta: "Book a Test Now"
    },
    {
      image: slideUltrasound,
      title: "Advanced Ultrasound Imaging",
      subtitle: "Comprehensive scans from ₦2,500 - Expert sonographers available 24/7",
      cta: "View Ultrasound Services"
    },
    {
      image: slideLaboratory,
      title: "Complete Laboratory Services",
      subtitle: "Accurate diagnostics with same-day results - Over 100+ tests available",
      cta: "Explore Lab Tests"
    },
    {
      image: slideXray,
      title: "Digital X-Ray & ECG",
      subtitle: "Modern imaging technology with detailed radiological reports",
      cta: "Learn More"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const openWhatsApp = () => {
    window.open('https://wa.me/2348058135226', '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{slides[currentSlide].title.split(' ').slice(0, -3).join(' ')} </span>
                <span className="bg-gradient-to-r from-medical-cyan to-medical-magenta bg-clip-text text-transparent">
                  {slides[currentSlide].title.split(' ').slice(-3).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-gradient-to-r from-medical-cyan to-medical-magenta hover:opacity-90 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {slides[currentSlide].cta}
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View All Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-sm text-white/80">Tests Conducted</div>
              </Card>
              <Card className="p-6 text-center border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/80">Service Available</div>
              </Card>
              <Card className="p-6 text-center border border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white/80">Trusted Results</div>
              </Card>
            </div>
          </div>

          {/* Slideshow Controls */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6">
              {/* Navigation Buttons */}
              <div className="flex items-center justify-center space-x-4">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <Button
                  onClick={togglePlayPause}
                  variant="outline"
                  size="icon"
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-medical-cyan to-medical-magenta' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Info */}
              <Card className="p-4 bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-center text-white">
                  <div className="text-sm opacity-80 mb-1">
                    Slide {currentSlide + 1} of {slides.length}
                  </div>
                  <div className="font-medium">
                    {slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;