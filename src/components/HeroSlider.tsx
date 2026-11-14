"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowDown, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function HeroSlider() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
    >
      {/* Responsive Height: 
          - Mobile (up to sm): h-[84vh] min-h-[560px] with poster framed beautifully
          - Desktop (sm and up): h-[80vh] min-h-[520px] max-h-[760px]
      */}
      <div className="relative w-full h-[84vh] min-h-[560px] sm:h-[80vh] sm:min-h-[520px] sm:max-h-[760px] bg-[#241A18]">
        {/* Single Hero Image - image copy.png */}
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/image copy.png"
            alt="Berry & Bites Artisanal Homemade Desserts"
            fill
            priority
            className="object-cover object-[center_35%] sm:object-center transform scale-100"
            sizes="100vw"
          />
          {/* Layered Gradient for crisp readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1211]/50 via-transparent to-[#1A1211]/90" />
        </div>

        {/* Text & CTAs Content positioned in the lower area */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-10 md:p-16 text-white max-w-4xl mx-auto w-full pb-8 sm:pb-12 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white mb-2 w-fit">
            <Sparkles className="w-3 h-3 text-[#F5C2CD]" />
            <span>Homemade & Natural</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-1.5 text-balance drop-shadow-md">
            Handcrafted Indulgence, Made with Love.
          </h1>

          <p className="text-xs sm:text-base text-white/90 font-normal mb-4 sm:mb-5 max-w-lg line-clamp-2 drop-shadow">
            100% natural homemade cheesecakes, fresh strawberry chocolate cups & refreshing botanical mojitos.
          </p>

          {/* CTAs */}
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
    </section>
  );
}
}
