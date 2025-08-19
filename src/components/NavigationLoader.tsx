import { useState, useEffect } from "react";

interface NavigationLoaderProps {
  isVisible: boolean;
  targetSection?: string;
  onComplete?: () => void;
}

const NavigationLoader = ({ isVisible, targetSection, onComplete }: NavigationLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 200);
            return 100;
          }
          return prev + 5;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-medical-cyan/95 to-medical-magenta/95 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <img 
            src="/lovable-uploads/fc70eb34-882e-4a20-9da3-39a20773fb7c.png" 
            alt="O.A.S.I.S MEDICALS" 
            className="h-24 md:h-32 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 animate-ping">
            <div className="w-full h-full rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white animate-fade-in">
            O.A.S.I.S. MEDICALS
          </h2>
          <p className="text-white/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            ...Your Health is our concern.
          </p>
        </div>

        {/* Navigation Info */}
        {targetSection && (
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/90 text-lg mb-4">
              Navigating to {targetSection}
            </p>
            
            {/* Progress Bar */}
            <div className="w-64 mx-auto bg-white/20 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-white to-white/80 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <p className="text-white/70 text-sm mt-2">{progress}%</p>
          </div>
        )}

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationLoader;