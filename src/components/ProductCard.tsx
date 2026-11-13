import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productHref = `/menu/${product.categorySlug}/${product.slug}`;

  return (
    <Link
      href={productHref}
      className="group block py-4 sm:py-5 border-b border-[#4A3B36]/10 hover:bg-white/40 transition-colors focus:outline-none"
    >
      <div className="flex items-start justify-between gap-3.5 sm:gap-6">
        {/* Left Side: Product Image */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 bg-[#241A18]/05 shadow-sm border border-[#4A3B36]/08">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
          />
        </div>

        {/* Center: Bestseller (if applicable) + Product Name + Short Description */}
        <div className="flex-1 min-w-0 flex flex-col justify-start">
          {product.isBestSeller && (
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D35400] tracking-wide mb-1">
              <Star className="w-3 h-3 fill-[#D35400] text-[#D35400]" />
              <span>Bestseller</span>
            </div>
          )}

          {/* Product Name */}
          <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#241A18] group-hover:text-[#C74D68] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 text-xs sm:text-sm text-[#786862] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Right Side: Price on top + Quantity (e.g. 250ml Tin / 350ml Glass) cleanly below it */}
        <div className="shrink-0 flex flex-col items-end text-right pt-0.5 pl-2">
          <span className="text-base sm:text-lg font-bold text-[#241A18] font-sans">
            {product.price}
          </span>
          <span className="text-[11px] font-medium text-[#786862] tracking-tight whitespace-nowrap mt-0.5">
            {product.quantity}
          </span>
        </div>
      </div>
    </Link>
  );
}
