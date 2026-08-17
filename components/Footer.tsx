import { MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Your trusted destination for premium gadgets and tech accessories
              in Nigeria.
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-zinc-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Shop
            </h4>
            <ul className="mt-4 space-y-3">
              {["Smartphones", "Laptops", "Audio", "Wearables", "Deals"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Support
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Shipping Info", href: "/contact" },
                { label: "Returns", href: "/contact" },
                { label: "FAQ", href: "/contact" },
                { label: "Track Order", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/about" },
                { label: "Privacy Policy", href: "/about" },
                { label: "Terms of Service", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Vee GadgetsHub. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
