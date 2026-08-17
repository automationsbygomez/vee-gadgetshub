"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section id="benefits" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Vee GadgetsHub?
          </h2>
          <p className="mt-3 text-zinc-400">
            The premium experience you deserve, every time
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/5 bg-zinc-900/30 p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20">
                <benefit.icon className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-base font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
