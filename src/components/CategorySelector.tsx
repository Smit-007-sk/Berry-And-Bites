"use client";

import React from "react";
import Image from "next/image";
import { categories, Category } from "@/data/categories";
import { ArrowRight } from "lucide-react";

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategorySelector({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) {
  return (
    <section id="categories" className="py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#D93B58] font-semibold bg-[#F9EBEF] px-3 py-1 rounded-full border border-[#F3D3DC]">
            Handcrafted Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#211A18] mt-3">
            Product Categories
          </h2>
          <p className="text-[#6B5E59] text-sm sm:text-base max-w-lg mx-auto mt-2">
            Select a specialty collection below to discover our freshly prepared treats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((category: Category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`group relative text-left rounded-3xl overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-[#D93B58] ring-offset-4 ring-offset-[#FAF7F2] shadow-xl scale-[1.02]"
                    : "border border-[#523933]/10 shadow-sm hover:shadow-md hover:scale-[1.01]"
                } bg-white`}
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#2A1C19]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge */}
                  {category.badge && (
                    <span className="absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#2A1C19] shadow-sm">
                      {category.badge}
                    </span>
                  )}

                  {/* Tagline on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-white/80 block">
                      {category.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#6B5E59] leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#523933]/08 flex items-center justify-between text-xs font-semibold">
                    <span
                      className={`transition-colors ${
                        isSelected ? "text-[#D93B58]" : "text-[#523933] group-hover:text-[#D93B58]"
                      }`}
                    >
                      {isSelected ? "Viewing Collection" : "Explore Selection"}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#D93B58] text-white"
                          : "bg-[#FAF7F2] text-[#523933] group-hover:bg-[#D93B58] group-hover:text-white"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
