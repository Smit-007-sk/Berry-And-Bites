import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Sparkles, Clock, MapPin, CheckCircle2, Heart } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 bg-white/70 border-y border-[#4A3B36]/06">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Visual Showcase - Clean artwork with 100% visibility (badge moved outside the image) */}
          <div className="flex flex-col gap-3">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] shadow-md border border-[#4A3B36]/10">
              <Image
                src="/images/hero/image.png"
                alt="Berry & Bites Homemade Cheesecakes"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Purity Badge placed cleanly underneath the image so it NEVER covers the artwork */}
            <div className="bg-[#FDFBF8] p-3 rounded-2xl border border-[#4A3B36]/08 shadow-sm flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-[#F9ECEF] text-[#C74D68] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-[#241A18]">100% Homemade & Fresh</p>
                <p className="text-[11px] text-[#786862]">Exclusively Amul dairy, mascarpone cheese & homemade jaggery syrups.</p>
              </div>
            </div>
          </div>

          {/* Text Story & Ingredients Promise */}
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#C74D68] font-semibold bg-[#F9ECEF] px-3 py-1 rounded-full border border-[#F3D4DD] w-fit">
              Our Purity & Craft Promise
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#241A18] mt-2.5 leading-tight">
              Honest Ingredients, Zero Compromise.
            </h2>
            
            <p className="mt-3 text-xs sm:text-sm text-[#786862] leading-relaxed">
              At <strong>Berry & Bites</strong>, everything is made at home from scratch with natural ingredients you can trust:
            </p>

            {/* 3 Core Quality Pillars */}
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#4A3B36]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C74D68] mt-0.5 shrink-0" />
                <span>
                  <strong>100% Homemade Cheesecakes (250ml Tin):</strong> Baked fresh at home using exclusively genuine <strong>Amul</strong> dairy products. 100% natural, rich, and creamy.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C74D68] mt-0.5 shrink-0" />
                <span>
                  <strong>Strawberry Chocolate (350ml Glass):</strong> Hand-selected <strong>natural fresh strawberries</strong> smothered in warm, flowing rich Belgian chocolate.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C74D68] mt-0.5 shrink-0" />
                <span>
                  <strong>Handcrafted Mojitos (250ml Glass):</strong> Prepared with our <strong>homemade natural syrups</strong> sweetened with pure <strong>jaggery powder</strong> for an authentic, refreshing taste.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#4A3B36]/08 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-white/80 transition-colors group cursor-pointer border border-transparent hover:border-[#4A3B36]/10"
              >
                <MapPin className="w-4 h-4 text-[#C74D68] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#241A18] flex items-center gap-1">
                    <span>Stall Location</span>
                    <span className="text-[10px] text-[#C74D68] font-normal underline">Google Maps &rarr;</span>
                  </h4>
                  <p className="text-xs text-[#786862] mt-0.5 leading-relaxed">{siteConfig.stallLocation}</p>
                </div>
              </a>
              <div className="flex items-start gap-2.5 p-2.5">
                <Clock className="w-4 h-4 text-[#C74D68] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#241A18]">Stall Hours</h4>
                  <p className="text-xs text-[#786862] mt-0.5 leading-relaxed">{siteConfig.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
