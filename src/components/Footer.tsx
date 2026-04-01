"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/[0.08] px-6 py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#DC2626]">सहायोगी</span>
            <span className="text-lg font-semibold text-white">Sahayogi</span>
          </div>
          <p className="mt-2 text-sm text-[#888888]">
            काठमाडौंको आपतकालीन साथी
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[#888888] sm:items-center">
          <a href="#" className="transition-colors hover:text-white">
            Home
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a
            href="http://localhost:8081"
            className="transition-colors hover:text-white"
          >
            Hospitals
          </a>
          <a
            href="http://localhost:8081"
            className="transition-colors hover:text-white"
          >
            First Aid
          </a>
        </div>

        <div className="text-sm text-[#888888] sm:text-right">
          <p>
            Built with <span className="text-[#DC2626]">&#10084;</span> for
            Kathmandu
          </p>
          <p className="mt-1">By Udan Technologies</p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/[0.08] pt-6 text-center text-xs text-[#888888]">
        &copy; 2025 Sahayogi. Free forever.
      </div>
    </motion.footer>
  );
}
