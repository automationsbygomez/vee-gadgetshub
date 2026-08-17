import {
  BadgeCheck,
  Headphones,
  Laptop,
  Shield,
  Smartphone,
  Truck,
  Watch,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export interface Product {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  rating: number;
  gradient: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Shop", href: "/products" },
  { label: "Categories", href: "/#categories" },
  { label: "Deals", href: "/products" },
  { label: "About", href: "/about" },
];

export const categories: Category[] = [
  {
    name: "Smartphones",
    description: "Latest flagships & essentials",
    icon: Smartphone,
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
  },
  {
    name: "Laptops",
    description: "Power for work & play",
    icon: Laptop,
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
  },
  {
    name: "Audio",
    description: "Immersive sound experiences",
    icon: Headphones,
    gradient: "from-indigo-600 via-blue-500 to-cyan-500",
  },
  {
    name: "Wearables",
    description: "Smart watches & fitness",
    icon: Watch,
    gradient: "from-purple-600 via-violet-500 to-blue-600",
  },
];

export const products: Product[] = [
  {
    name: "Galaxy Pro Max",
    category: "Smartphone",
    price: "₦899,000",
    originalPrice: "₦950,000",
    badge: "Sale",
    rating: 4.9,
    gradient: "from-violet-700 via-purple-600 to-indigo-700",
  },
  {
    name: "UltraBook X1",
    category: "Laptop",
    price: "₦1,250,000",
    badge: "New",
    rating: 4.8,
    gradient: "from-blue-700 via-indigo-600 to-violet-700",
  },
  {
    name: "AirPods Elite",
    category: "Audio",
    price: "₦185,000",
    rating: 4.7,
    gradient: "from-indigo-700 via-blue-600 to-cyan-600",
  },
  {
    name: "Smart Watch S9",
    category: "Wearable",
    price: "₦320,000",
    badge: "Hot",
    rating: 4.9,
    gradient: "from-purple-700 via-violet-600 to-blue-700",
  },
  {
    name: "Pixel Ultra 8",
    category: "Smartphone",
    price: "₦780,000",
    badge: "New",
    rating: 4.8,
    gradient: "from-violet-700 via-indigo-600 to-blue-700",
  },
  {
    name: "ProBook Air M3",
    category: "Laptop",
    price: "₦1,450,000",
    rating: 4.9,
    gradient: "from-blue-700 via-violet-600 to-purple-700",
  },
  {
    name: "Studio Headphones Pro",
    category: "Audio",
    price: "₦245,000",
    originalPrice: "₦280,000",
    badge: "Sale",
    rating: 4.6,
    gradient: "from-indigo-700 via-purple-600 to-violet-700",
  },
  {
    name: "FitBand Pro 2",
    category: "Wearable",
    price: "₦95,000",
    rating: 4.5,
    gradient: "from-purple-700 via-blue-600 to-indigo-700",
  },
];

export const benefits: Benefit[] = [
  {
    icon: BadgeCheck,
    title: "100% Authentic",
    description:
      "Every product is sourced from verified distributors with full warranty coverage.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Same-day dispatch in Lagos. Nationwide delivery within 2–5 business days.",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description:
      "Encrypted payments and buyer protection on every order you place.",
  },
  {
    icon: Zap,
    title: "Best Prices",
    description:
      "Competitive pricing with exclusive deals for our loyal customers.",
  },
];
