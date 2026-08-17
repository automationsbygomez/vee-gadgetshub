"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Package,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/20 via-blue-600/10 to-transparent blur-3xl" />
        <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -right-40 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            Premium Tech, Unbeatable Value
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            Premium gadgets.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Delivered fast.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            Discover the latest smartphones, laptops, and accessories — curated
            for quality, priced for value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Browse Collection
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              View Categories
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { icon: Truck, label: "Free Shipping" },
            { icon: Shield, label: "2-Year Warranty" },
            { icon: Package, label: "Secure Packaging" },
            { icon: BadgeCheck, label: "Authentic Products" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                <Icon className="h-5 w-5 text-violet-400" />
              </div>
              <span className="text-xs font-medium text-zinc-400 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
