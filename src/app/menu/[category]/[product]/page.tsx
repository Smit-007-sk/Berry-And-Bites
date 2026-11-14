import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import InstagramCTA from "@/components/InstagramCTA";
import ProductCard from "@/components/ProductCard";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Star,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((item) => ({
    category: item.categorySlug,
    product: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(
    (p) =>
      p.categorySlug === resolvedParams.category &&
      p.slug === resolvedParams.product
  );

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} – ${product.categoryName}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const currentProduct = products.find(
    (p) =>
      p.categorySlug === resolvedParams.category &&
      p.slug === resolvedParams.product
  );

  if (!currentProduct) {
    notFound();
  }

  const isCheesecake =
    currentProduct.categoryId === "cheesecakes" ||
    currentProduct.categoryId === "sugar-free-cheesecakes";

  const relatedProducts = products
    .filter((p) => p.id !== currentProduct.id)
    .sort((a, b) => {
      if (a.categoryId === currentProduct.categoryId && b.categoryId !== currentProduct.categoryId) return -1;
      if (b.categoryId === currentProduct.categoryId && a.categoryId !== currentProduct.categoryId) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <div className="pt-24 sm:pt-28 pb-16 px-3 sm:px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A3B36] hover:text-[#C74D68] transition-colors group bg-white px-4 py-2 rounded-full border border-[#4A3B36]/10 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Menu</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C74D68] bg-[#F9ECEF] px-3 py-1 rounded-full border border-[#F3D4DD]">
              {currentProduct.quantity}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#786862] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#4A3B36]/08">
              {currentProduct.categoryName}
            </span>
          </div>
        </div>

        {/* Product Details Hero Card */}
        <div className="bg-white rounded-3xl border border-[#4A3B36]/08 shadow-sm overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 items-start">
            {/* Product Image Frame */}
            <div
              className={`relative w-full rounded-2xl overflow-hidden border border-[#4A3B36]/08 ${
                isCheesecake
                  ? "aspect-square bg-transparent p-0"
                  : "aspect-[4/5] sm:aspect-square bg-[#FAF6F0] p-2 flex items-center justify-center"
              }`}
            >
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                priority
                className={isCheesecake ? "object-cover object-center" : "object-contain object-center"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Details & Action */}
            <div className="flex flex-col justify-center pt-1">
              <div>
                {/* Badges: Bestseller and Purity Note */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {currentProduct.isBestSeller && (
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-[#D35400] bg-[#FFF5EB] px-2.5 py-1 rounded-full border border-[#FAD7A0]">
                      <Star className="w-3.5 h-3.5 fill-[#D35400] text-[#D35400]" />
                      <span>Bestseller</span>
                    </div>
                  )}

                  <span className="text-[11px] font-semibold text-[#786862] bg-[#FAF6F0] px-2.5 py-1 rounded-full border border-[#4A3B36]/08 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C74D68]" />
                    <span>{currentProduct.purityNote}</span>
                  </span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241A18] leading-tight mt-1">
                  {currentProduct.name}
                </h1>

                {currentProduct.price && (
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold text-[#C74D68] font-sans">
                      {currentProduct.price}
                    </span>
                    <span className="text-xs font-medium text-[#786862]">
                      ({currentProduct.quantity})
                    </span>
                  </div>
                )}

                <p className="mt-3.5 text-xs sm:text-sm text-[#786862] leading-relaxed">
                  {currentProduct.fullDescription}
                </p>
              </div>

              {/* Recipe Highlights & Ingredients */}
              <div className="mt-5 pt-4 border-t border-[#4A3B36]/08">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#241A18] mb-2.5">
                  Ingredients & Quantity Specifications:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A3B36] bg-[#FAF6F0] border border-[#4A3B36]/08 px-2.5 py-1 rounded-lg"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C74D68]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instagram Order Action Box */}
              <div className="mt-6 pt-5 border-t border-[#4A3B36]/08 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C74D68] hover:bg-[#A83850] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Order / Enquire on Instagram</span>
                </a>

                <Link
                  href="/#menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#FAF6F0] hover:bg-[#4A3B36]/05 text-[#4A3B36] font-medium text-sm transition-colors text-center border border-[#4A3B36]/10 cursor-pointer"
                >
                  <span>Menu</span>
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-[#786862] flex items-center justify-center sm:justify-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C74D68]" />
                <span>Made fresh daily at our stall. Visit or check today&apos;s batch on Instagram.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Compact Instagram Callout */}
        <div className="mt-8">
          <InstagramCTA
            variant="compact"
            customTitle={`Craving the ${currentProduct.name}?`}
          />
        </div>

        {/* Related Products Section */}
        <div className="mt-12 sm:mt-14">
          <div className="flex items-center justify-between mb-4 border-b border-[#4A3B36]/08 pb-3">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#241A18]">
              You Might Also Love
            </h2>

            <Link
              href="/#menu"
              className="text-xs sm:text-sm font-semibold text-[#C74D68] hover:underline cursor-pointer"
            >
              Full Menu &rarr;
            </Link>
          </div>

          <div className="flex flex-col space-y-2.5">
            {relatedProducts.map((relProduct: Product) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
