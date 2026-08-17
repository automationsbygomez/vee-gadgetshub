"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section id="products" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-3 text-zinc-400">
              Handpicked bestsellers at unbeatable prices
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
