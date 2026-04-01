"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#DC2626]">सहायोगी</span>
          <span className="text-lg font-semibold text-white">Sahayogi</span>
        </div>
        <a
          href="https://sahayogi-app.vercel.app"
          className="rounded-full bg-[#DC2626] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get the App
        </a>
      </div>
    </motion.nav>
  );
}
