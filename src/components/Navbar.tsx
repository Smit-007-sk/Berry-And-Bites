"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHomePage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // If not on home page (e.g. on product detail pages), always keep navbar visible
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const checkHeroVisibility = () => {
      const heroElement = document.getElementById("hero");
      if (!heroElement) {
        // Fallback: show if scrolled past 400px
        setIsVisible(window.scrollY > 400);
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      // rect.bottom is the distance from top of viewport to bottom of hero section.
      // When rect.bottom <= 80, the user has scrolled past the hero section!
      setIsVisible(rect.bottom <= 80);
    };

    checkHeroVisibility();
    window.addEventListener("scroll", checkHeroVisibility, { passive: true });
    window.addEventListener("resize", checkHeroVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkHeroVisibility);
      window.removeEventListener("resize", checkHeroVisibility);
    };
  }, [isHomePage]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-6 pt-2.5 sm:pt-3.5 ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <nav
            className="flex items-center justify-between px-3.5 sm:px-5 py-2 rounded-full transition-all duration-300 bg-[#FAF6F0]/95 backdrop-blur-md border border-[#4A3B36]/10 shadow-[0_4px_20px_rgba(36,26,24,0.08)]"
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
              onClick={closeMenu}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#4A3B36]/10 shadow-sm bg-[#FAF6F0] shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-center"
                  sizes="48px"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#241A18] leading-tight">
                  Berry <span className="text-[#C74D68]">&</span> Bites
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#786862] font-medium hidden sm:inline-block">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/75 px-3 py-1 rounded-full border border-[#4A3B36]/06">
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#4A3B36] hover:text-[#C74D68] transition-colors rounded-full hover:bg-white cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side: Instagram & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Berry & Bites on Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#241A18] bg-[#F9ECEF] hover:bg-[#C74D68] hover:text-white transition-all duration-200 border border-[#F3D4DD] cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C74D68] group-hover:text-white transition-colors" />
                <span className="hidden sm:inline">Instagram</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-full text-[#4A3B36] hover:bg-[#4A3B36]/08 focus:outline-none cursor-pointer active:scale-95 transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#C74D68]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Only rendered and active when open so it NEVER blocks clicks on the page) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#241A18]/50 backdrop-blur-sm cursor-pointer"
            onClick={closeMenu}
          />

          {/* Floating Mobile Menu Container */}
          <div className="fixed top-20 left-4 right-4 bg-[#FDFBF8] rounded-3xl p-6 shadow-2xl border border-[#4A3B36]/10 z-10 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#4A3B36]/08">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#4A3B36]/10 shrink-0">
                    <Image
                      src={siteConfig.logo}
                      alt={siteConfig.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-[#241A18]">Berry & Bites</p>
                    <p className="text-[10px] uppercase tracking-wider text-[#786862]">{siteConfig.tagline}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-1.5 rounded-full hover:bg-[#4A3B36]/08 text-[#786862]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <span className="text-xs uppercase tracking-wider text-[#A39690] font-semibold px-2 pt-1">
                Menu Navigation
              </span>
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3.5 rounded-2xl text-[#241A18] font-medium text-base hover:bg-[#F9ECEF] hover:text-[#C74D68] active:bg-[#F9ECEF] transition cursor-pointer"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#A39690]">&rarr;</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-[#4A3B36]/08 mt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-[#C74D68] text-white font-medium text-sm shadow-sm hover:bg-[#A83850] active:scale-98 transition cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Follow Us on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
