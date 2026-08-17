"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export default function ProductsContent() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/15 via-blue-600/10 to-transparent blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            Full Collection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Shop All{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-4 max-w-xl text-lg text-zinc-400"
          >
            Browse our complete catalog of premium gadgets and tech accessories.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-sm font-medium"
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
