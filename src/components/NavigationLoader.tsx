import { useState, useEffect } from "react";

interface NavigationLoaderProps {
  isVisible: boolean;
  targetSection?: string;
}

const NavigationLoader = ({ isVisible, targetSection }: NavigationLoaderProps) => {
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
            <p className="text-white/90 text-lg">
              Navigating to {targetSection}
            </p>
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