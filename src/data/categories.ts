export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  quantity: string;
  purityBadge: string;
  image: string;
  badge?: string;
}

export const categories: Category[] = [
  {
    id: "cheesecakes",
    slug: "cheesecake",
    name: "Cheesecakes",
    tagline: "100% Homemade • Pure Mascarpone & Amul",
    description: "Handcrafted from scratch at home with luxurious Italian mascarpone cheese, pure Amul butter, and 100% natural ingredients. Generous 250ml square dessert tin.",
    quantity: "250ml Tin",
    purityBadge: "Pure Mascarpone & Amul • 100% Natural",
    image: "/images/cheesecakes/milk cheesecake.jpg",
    badge: "250ml Tin"
  },
  {
    id: "sugar-free-cheesecakes",
    slug: "sugar-free-cheesecake",
    name: "Sugar-Free Cheesecakes",
    tagline: "No Added Sugar • High-Fiber Digestive Biscuits",
    description: "Guilt-free indulgence! Prepared with wholesome high-fiber digestive biscuits, zero added sugar, and creamy mascarpone & Amul dairy in a 250ml tin.",
    quantity: "250ml Tin",
    purityBadge: "No Added Sugar • Digestive Biscuits",
    image: "/images/cheesecakes/biscoff cheesecake.jpg",
    badge: "No Added Sugar"
  },
  {
    id: "strawberry-chocolate",
    slug: "strawberry-chocolate",
    name: "Strawberry Chocolate",
    tagline: "Farm Fresh Berries • Rich Warm Chocolate",
    description: "Farm-fresh vibrant whole strawberries layered with flowing warm Belgian chocolate in a grand 350ml glass.",
    quantity: "350ml Glass",
    purityBadge: "Fresh Strawberries • Rich Chocolate",
    image: "/images/strawberry-chocolate/triple.jpg",
    badge: "350ml Glass"
  },
  {
    id: "mojitos",
    slug: "mojitos",
    name: "Mojitos",
    tagline: "Homemade Jaggery Syrups • Natural & Crisp",
    description: "Handcrafted with our homemade natural syrups sweetened with pure jaggery powder and fresh botanicals in a 250ml glass.",
    quantity: "250ml Glass",
    purityBadge: "Homemade Jaggery Syrup",
    image: "/images/mojitos/blue lagoon.jpg",
    badge: "250ml Glass"
  }
];
