"use client";

import { motion } from "framer-motion";
import { Package, Star } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-colors hover:border-white/10"
    >
      <div className="relative">
        <div
          className={`flex h-48 items-center justify-center bg-gradient-to-br ${product.gradient}`}
        >
          <Package className="h-16 w-16 text-white/20" />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-2.5 py-0.5 text-xs font-semibold">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {product.category}
        </p>
        <h3 className="mt-1 text-base font-semibold">{product.name}</h3>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-zinc-400">{product.rating}</span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-500 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-medium transition-colors group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-violet-300"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
