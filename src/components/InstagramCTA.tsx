import React from "react";
import { siteConfig } from "@/config/site";
import { Heart, MessageCircleHeart } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

interface InstagramCTAProps {
  variant?: "full" | "compact" | "card";
  customTitle?: string;
  customSubtitle?: string;
}

export default function InstagramCTA({
  variant = "full",
  customTitle,
  customSubtitle,
}: InstagramCTAProps) {
  if (variant === "compact") {
    return (
      <div className="bg-[#F9ECEF] border border-[#F3D4DD] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#C74D68] font-semibold flex items-center gap-1.5">
            <InstagramIcon className="w-3.5 h-3.5 text-[#C74D68]" />
            <span>Craving This Treat?</span>
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241A18] mt-1">
            Order / Enquire on Instagram
          </h3>
          <p className="text-xs sm:text-sm text-[#786862] mt-0.5">
            Connect with us on Instagram for daily batches, today&apos;s stall specials, or party orders.
          </p>
        </div>

        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C74D68] hover:bg-[#A83850] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 shrink-0 w-full sm:w-auto text-center"
        >
          <InstagramIcon className="w-4 h-4 text-white" />
          <span>Order / Enquire on Instagram</span>
        </a>
      </div>
    );
  }

  return (
    <section className="py-12 sm:py-16 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#241A18] overflow-hidden p-8 sm:p-14 md:p-16 border border-[#4A3B36]/20 shadow-xl">
          {/* Aesthetic Warm Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C74D68]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A3B36]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium uppercase tracking-widest text-[#F5C2CD] mb-4">
                <Heart className="w-3.5 h-3.5 text-[#C74D68]" />
                <span>Join Our Sweet Community</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {customTitle || "Have a Craving? Let's Connect!"}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                {customSubtitle ||
                  "Follow our daily pop-up stall stories, watch warm Belgian chocolate pour in real-time, and check our daily specials or party orders."}
              </p>

              <div className="mt-4 flex items-center justify-center md:justify-start gap-4 text-xs text-white/60">
                <span>&bull; Fresh Daily Batches</span>
                <span>&bull; Daily Stall Stories</span>
                <span>&bull; Stall Location Updates</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center md:justify-start w-full sm:w-auto">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C74D68] hover:bg-[#A83850] text-white font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Follow Us on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
