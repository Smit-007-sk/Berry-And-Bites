"use client";

import React, { useMemo } from "react";
import { siteConfig } from "@/config/site";
import { ArrowDown, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import MorphSlider, { MorphItem } from "@/components/MorphSlider";

export default function HeroSlider() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  // 7 Selected Hero Images:
  // 1. image copy.png (Main stall setup & artwork)
  // 2. 2 Mojitos (Blue Lagoon & Mint)
  // 3. 2 Strawberry Chocolate (Triple & Nutella)
  // 4. 2 Cheesecakes (Biscoff & Oreo)
  const heroItems: MorphItem[] = useMemo(
    () => [
      {
        image: "/images/hero/image copy.png",
        caption: "Berry & Bites Stall • Devnagar Gam Rd, Gota",
      },
      {
        image: "/images/mojitos/blue lagoon.jpg",
        caption: "Handcrafted Blue Lagoon Mojito",
      },
      {
        image: "/images/mojitos/mint.jpg",
        caption: "Fresh Botanical Mint Mojito",
      },
      {
        image: "/images/strawberry-chocolate/triple.jpg",
        caption: "Triple Strawberry Chocolate Glass (350ml)",
      },
      {
        image: "/images/strawberry-chocolate/nutella.jpg",
        caption: "Nutella Strawberry Chocolate Glass (350ml)",
      },
      {
        image: "/images/cheesecakes/biscoff cheesecake.jpg",
        caption: "Biscoff Cheesecake (250ml Tin)",
      },
      {
        image: "/images/cheesecakes/oreo cheesecake.jpg",
        caption: "Oreo Chocolate Cheesecake (250ml Tin)",
      },
    ],
    []
  );

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#FAF6F0]"
    >
      {/* SVG ClipPath Definition using clipPathUnits="objectBoundingBox" 
          This scales 100% proportionally to ANY screen width (320px, 375px, 390px, 430px, etc.)
          Arc shape:
          - Starts at (0, 0) [top-left]
          - Extends to (1, 0) [top-right]
          - Goes down to (1, 1) [bottom-right corner - lower]
          - Curves smoothly with a gentle quadratic bezier Q (0.5, 0.93) to (0, 1) [bottom-left corner - lower]
          - Center (0.5, 0.93) is slightly higher, creating an organic downward concave curve of ~40-50px depth on mobile
      */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="mobileHeroCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,1 Q 0.5,0.93 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Responsive Height: 
          - Mobile (up to md): h-[84vh] min-h-[560px] with the smooth organic curve applied via [clip-path:url(#mobileHeroCurve)]
          - Desktop (md and up): h-[80vh] min-h-[520px] max-h-[760px] with straight edges (md:[clip-path:none])
      */}
      <div 
        className="relative w-full h-[84vh] min-h-[560px] md:h-[80vh] md:min-h-[520px] md:max-h-[760px] bg-[#1E1412] [clip-path:url(#mobileHeroCurve)] md:[clip-path:none] transition-all"
      >
        {/* GPU WebGL MorphSlider with 3-second auto-swipe:
            - Desktop: contain={true} so portrait & square glasses/cheesecakes are 100% visible from top strawberry to bottom base without harsh crop
            - Mobile: contain={false} (cover) preserving the mobile design and curve
        */}
        <div className="absolute inset-0 w-full h-full">
          <MorphSlider
            items={heroItems}
            transition="melt"
            intensity={0.45}
            aberration={0.25}
            drift={0.25}
            autoplay={true}
            autoplayDelay={3}
            duration={1.2}
            loop={true}
            radius={0}
            contain={isDesktop}
            showCaptions={false}
            showControls={false}
            showIndicators={true}
            className="w-full h-full"
          />

          {/* Gradient overlays:
              - Mobile: vertical bottom gradient
              - Desktop: subtle radial/horizontal gradient on the left so the text remains easy to read without washing out the center
          */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1211]/40 via-transparent to-[#1A1211]/90 md:bg-gradient-to-r md:from-[#1A1211]/85 md:via-[#1A1211]/30 md:to-transparent pointer-events-none z-10" />
        </div>

        {/* Text & CTAs Content:
            - Mobile: Bottom-aligned, centered horizontally with safe padding for the curve
            - Desktop (lg and up): Shifted cleanly to the LEFT side so the images remain 100% visible
        */}
        <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-5 sm:p-8 md:p-12 lg:p-16 text-white max-w-7xl mx-auto w-full pb-14 sm:pb-16 lg:pb-0 z-20 pointer-events-none">
          <div className="max-w-md lg:max-w-lg pointer-events-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white mb-2.5 w-fit">
              <Sparkles className="w-3 h-3 text-[#F5C2CD]" />
              <span>Homemade & Natural</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-2 text-balance drop-shadow-md">
              Every Bite, A Little Happiness.
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-white/90 font-normal mb-5 max-w-md line-clamp-3 drop-shadow">
              100% natural homemade cheesecakes, fresh strawberry chocolate cups & refreshing botanical mojitos.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3">
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
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium transition-all active:scale-95"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-white" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
