import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/7534552/7534552-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div
        className={`relative h-full flex flex-col items-center justify-center text-white px-4 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-6 text-center">
          𝔞𝔫𝔱𝔞𝔯𝔞𝔤𝔞_𝔦𝔫𝔱𝔢𝔯𝔦𝔬𝔯𝔰_
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light tracking-widest text-center">
          Crafting Timeless Interiors
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}
