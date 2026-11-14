"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSlider from "@/components/HeroSlider";
import BrandQuote from "@/components/BrandQuote";
import ProductSpiralShowcase from "@/components/ProductSpiralShowcase";
import ProductGrid from "@/components/ProductGrid";
import AboutStory from "@/components/AboutStory";
import InstagramCTA from "@/components/InstagramCTA";

function HomeContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

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

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
