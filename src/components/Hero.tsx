"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "काठमाडौंको", className: "text-white" },
  { text: "आपतकालीन साथी", className: "text-white" },
  { text: "Sahayogi", className: "text-[#DC2626]" },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <div className="max-w-4xl">
        {lines.map((line, i) => (
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl ${line.className}`}
          >
            {line.text}
          </motion.h1>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#888888]"
        >
          Nepal&apos;s first community emergency response app. One tap connects
          you to nearby responders, hospitals, and help — when every second
          counts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://sahayogi-app.vercel.app"
            className="rounded-full bg-[#DC2626] px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Open Web App
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/[0.08] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/[0.05]"
          >
            Learn More
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 text-sm text-[#888888]"
        >
          Trusted by the people of Kathmandu &bull; Free forever
        </motion.p>
      </div>
    </section>
  );
}
