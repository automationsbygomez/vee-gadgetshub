"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-blue-600/20" />
        <div className="relative px-8 py-16 text-center sm:px-16">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-600">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-400">
            Get exclusive deals, new arrivals, and tech tips delivered straight
            to your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
