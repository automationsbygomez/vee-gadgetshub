"use client";

import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Benefits from "@/components/Benefits";

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Products Sold" },
  { value: "4.9", label: "Average Rating" },
  { value: "3+", label: "Years of Trust" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make premium technology accessible to everyone in Nigeria through authentic products, fair pricing, and exceptional service.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make starts with our customers. Your satisfaction and trust are the foundation of everything we do.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "We partner only with authorized distributors to guarantee every product meets the highest standards of authenticity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built by tech enthusiasts for tech enthusiasts. We listen, learn, and grow together with our community.",
  },
];

export default function AboutContent() {
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
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Vee GadgetsHub
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            Founded in Lagos, Vee GadgetsHub was born from a simple belief: everyone
            deserves access to genuine, premium technology without the premium
            hassle. What started as a small online store has grown into Nigeria&apos;s
            trusted destination for smartphones, laptops, audio gear, and wearables.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 text-center"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-zinc-400">
              The values that drive everything we do
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-white/5 bg-zinc-900/30 p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20">
                  <value.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Benefits />
    </>
  );
}
