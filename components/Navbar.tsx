"use client";

import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Vee{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              GadgetsHub
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white sm:flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-[10px] font-bold">
              0
            </span>
          </button>
          <Link
            href="/products"
            className="hidden rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Shop Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/5 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
