import React from "react";
import { siteConfig } from "@/config/site";

export default function BrandQuote() {
  return (
    <section className="py-10 sm:py-14 px-4 bg-[#FAF6F0]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Subtle Decorative Accent */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-8 sm:w-12 bg-[#4A3B36]/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#C74D68]/70" />
          <div className="h-[1px] w-8 sm:w-12 bg-[#4A3B36]/15" />
        </div>

        {/* Elegant Aesthetic Quote */}
        <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#241A18] font-normal leading-relaxed tracking-tight italic">
          &ldquo;{siteConfig.quote}&rdquo;
        </blockquote>

        <p className="mt-3 text-[11px] sm:text-xs tracking-widest uppercase text-[#786862] font-medium">
          &bull; {siteConfig.name} &bull; {siteConfig.tagline}
        </p>
      </div>
    </section>
  );
}
