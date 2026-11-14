"use client";

import React, { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import BrandQuote from "@/components/BrandQuote";
import ProductSpiralShowcase from "@/components/ProductSpiralShowcase";
import ProductGrid from "@/components/ProductGrid";
import AboutStory from "@/components/AboutStory";
import InstagramCTA from "@/components/InstagramCTA";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Full-screen width Hero Section */}
      <HeroSlider />

      {/* 2. Brand Quote Section */}
      <BrandQuote />

      {/* 3. 3D Infinite Spiral Interactive Product Showcase */}
      <ProductSpiralShowcase />

      {/* 4. Product Listing Grid (Zomato/Swiggy single-alignment style) */}
      <ProductGrid
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Brand Story & Fresh Stall Craft */}
      <AboutStory />

      {/* 6. Instagram Community CTA */}
      <InstagramCTA />
    </div>
  );
}
