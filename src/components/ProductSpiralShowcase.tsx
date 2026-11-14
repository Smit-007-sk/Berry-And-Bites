"use client";

import React, { useMemo } from "react";
import InfiniteSpiral from "./InfiniteSpiral";
import { products } from "@/data/products";

export default function ProductSpiralShowcase() {
  // Alternate items in a 2-cheesecake -> 1-strawberry-chocolate -> 1-mojito pattern
  const spiralItems = useMemo(() => {
    // Separate products by category
    // (Note: classic & sugar-free cheesecakes both provide cheesecake flavors)
    const cheesecakes = products.filter(
      (p) => p.categoryId === "cheesecakes" || p.categoryId === "sugar-free-cheesecakes"
    );
    const strawberryChocolates = products.filter(
      (p) => p.categoryId === "strawberry-chocolate"
    );
    const mojitos = products.filter((p) => p.categoryId === "mojitos");

    // Interleave in a zig-zag: [2 cheesecakes, 1 strawberry, 1 mojito] repeatedly
    const interleaved: typeof products = [];
    let cIdx = 0;
    let sIdx = 0;
    let mIdx = 0;

    const totalProducts = products.length;
    while (interleaved.length < totalProducts) {
      // 1. Take up to 2 cheesecakes
      for (let i = 0; i < 2; i++) {
        if (cIdx < cheesecakes.length) {
          interleaved.push(cheesecakes[cIdx++]);
        }
      }
      // 2. Take 1 strawberry chocolate
      if (sIdx < strawberryChocolates.length) {
        interleaved.push(strawberryChocolates[sIdx++]);
      }
      // 3. Take 1 mojito
      if (mIdx < mojitos.length) {
        interleaved.push(mojitos[mIdx++]);
      }

      // Safeguard in case one category is exhausted early
      if (
        cIdx >= cheesecakes.length &&
        sIdx >= strawberryChocolates.length &&
        mIdx >= mojitos.length
      ) {
        break;
      }
    }

    return interleaved.map((prod) => ({
      id: prod.id,
      src: prod.image,
      alt: prod.name,
      label: `${prod.name} (${prod.price})`,
      href: `/menu/${prod.categorySlug}/${prod.slug}`,
    }));
  }, []);

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAF6F0] overflow-hidden border-t border-[#4A3B36]/08">
      <div className="max-w-5xl mx-auto px-4 mb-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A18] tracking-tight">
          Handcrafted Treats & Botanical Sips
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#786862] max-w-lg mx-auto">
          Drag, scroll or hover through our homemade cheesecakes, fresh strawberry chocolate cups, and botanical mojitos. Click any item to explore!
        </p>
      </div>

      {/* 3D Infinite Spiral Container */}
      <div className="relative w-full h-[520px] sm:h-[620px] overflow-hidden">
        {/* Subtle top and bottom fades so cards float gracefully */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FAF6F0] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF6F0] to-transparent z-20 pointer-events-none" />

        <InfiniteSpiral
          items={spiralItems}
          animationMode="all"
          speed={0.45}
          direction="up"
          radius={220}
          cardWidth={130}
          cardHeight={130}
          verticalSpacing={65}
          perspective={1100}
          cardRadius={18}
          centerScale={1.25}
          cardsPerTurn={8}
          edgeBlur={0}
          edgeFade={0.2}
          pauseOnHover
          imageFit="cover"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
