"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ArrowDown, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Responsive Height: 
          - Mobile (up to sm): h-[84vh] min-h-[560px] with pt-20 so the entire poster artwork sits naturally under the floating navbar
          - Desktop (sm and up): h-[80vh] min-h-[520px] max-h-[760px]
      */}
      <div className="relative w-full h-[84vh] min-h-[560px] sm:h-[80vh] sm:min-h-[520px] sm:max-h-[760px] bg-[#241A18]">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Image Frame tailored for mobile posters:
                  - On mobile: object-cover with object-[center_28%] or object-top to keep the brand logo and central drink/cheesecake perfectly in the frame without aggressive side cuts.
              */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-[center_35%] sm:object-center transform scale-100"
                  sizes="100vw"
                />
                {/* Layered Gradient: 
                    Gentle top gradient under navbar + deeper bottom contrast gradient for crystal clear text readability 
                */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1211]/60 via-transparent to-[#1A1211]/90" />
              </div>

              {/* Text & CTAs Content positioned comfortably in the lower third with safe touch zones */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-10 md:p-16 text-white max-w-4xl mx-auto w-full pb-8 sm:pb-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white mb-2 w-fit">
                  <Sparkles className="w-3 h-3 text-[#F5C2CD]" />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-1.5 text-balance drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-xs sm:text-base text-white/90 font-normal mb-4 sm:mb-5 max-w-lg line-clamp-2 drop-shadow">
                  {slide.subtitle}
                </p>

                {/* CTAs formatted for easy thumb-tap on mobile */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#C74D68] hover:bg-[#A83850] text-white text-xs sm:text-sm font-semibold shadow-lg transition-all active:scale-95"
                  >
                    <span>Explore Menu</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium transition-all active:scale-95"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-white" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Indicator Dots placed for easy visibility */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-10 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          {heroSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === currentIndex
                  ? "w-5 h-1.5 bg-[#C74D68]"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
