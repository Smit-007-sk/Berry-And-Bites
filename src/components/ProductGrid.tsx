"use client";

import React from "react";
import { products, Product } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function ProductGrid({
  selectedCategory,
  onSelectCategory,
}: ProductGridProps) {
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <section id="menu" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Menu Header */}
        <div className="text-center sm:text-left mb-5 sm:mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241A18]">
            Our Desserts
          </h2>
        </div>

        {/* Category Menu Options (visible without scroll on mobile: 2-column on mobile, row on tablet/desktop) */}
        <div className="mb-6 sm:mb-8 pb-4 border-b border-[#4A3B36]/10">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => onSelectCategory("all")}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center ${
                selectedCategory === "all"
                  ? "bg-[#241A18] text-white shadow-sm"
                  : "bg-white text-[#4A3B36] hover:bg-[#F9ECEF] border border-[#4A3B36]/10"
              }`}
            >
              All Items ({products.length})
            </button>

            {categories.map((cat) => {
              const count = products.filter((p) => p.categoryId === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`w-full sm:w-auto px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-center ${
                    isActive
                      ? "bg-[#C74D68] text-white shadow-sm"
                      : "bg-white text-[#4A3B36] hover:bg-[#F9ECEF] border border-[#4A3B36]/10"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#FAF6F0] text-[#786862]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Divider-separated Restaurant List View (No Box Container) matching the Swiggy/Zomato reference */}
        {filteredProducts.length > 0 ? (
          <div className="divide-y divide-[#4A3B36]/10">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white rounded-2xl border border-[#4A3B36]/10 p-6">
            <p className="text-[#786862] text-sm">No desserts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
