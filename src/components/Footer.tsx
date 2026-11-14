import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#241A18] text-[#FDFBF8] pt-14 pb-10 border-t border-[#4A3B36]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand Info with Logo */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0 bg-white shadow-sm">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Berry <span className="text-[#C74D68]">&</span> Bites
              </span>
            </Link>

            <p className="mt-3 text-xs sm:text-sm text-[#A39690] max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#C74D68] text-white text-xs font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-white" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5C2CD] font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[#A39690] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5C2CD] font-semibold mb-3">
              Visit Stall
            </h4>
            <p className="text-xs text-[#A39690] leading-relaxed mb-2">
              {siteConfig.stallLocation}
            </p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F5C2CD] hover:underline"
            >
              <span>Get Directions on Maps &rarr;</span>
            </a>
          </div>

          {/* Dessert Menu */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5C2CD] font-semibold mb-3">
              Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/?category=${cat.id}#menu`}
                    className="text-[#A39690] hover:text-white transition-colors cursor-pointer"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A39690]">
          <p>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-[#F5C2CD]">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>

          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
