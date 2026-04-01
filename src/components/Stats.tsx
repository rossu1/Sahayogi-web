"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500m", label: "Responder alert radius" },
  { value: "10km", label: "Blood donor search radius" },
  { value: "10+", label: "Kathmandu hospitals listed" },
  { value: "Free", label: "Forever, no subscription" },
];

export default function Stats() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/[0.08] bg-[#111111] p-6 text-center"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-[#888888]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
