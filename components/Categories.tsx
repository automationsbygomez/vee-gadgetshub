"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section id="categories" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 text-zinc-400">
            Find exactly what you need across our curated collections
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#products"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-colors hover:border-white/10"
            >
              <div
                className={`mb-6 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              >
                <cat.icon className="h-12 w-12 text-white/90" />
              </div>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{cat.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-violet-400 opacity-0 transition-opacity group-hover:opacity-100">
                Explore
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
