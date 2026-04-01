"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "📍",
    title: "Location detected",
    desc: "App finds your GPS instantly",
  },
  {
    number: "02",
    emoji: "🚨",
    title: "Alert sent",
    desc: "Responders + services notified in seconds",
  },
  {
    number: "03",
    emoji: "🤝",
    title: "Help arrives",
    desc: "Community responds before ambulance",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            तीन सजिलो चरण
          </h2>
          <p className="mt-4 text-[#888888]">Three simple steps</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-6xl font-bold text-[#DC2626]/20">
                {step.number}
              </span>
              <p className="mt-2 text-3xl">{step.emoji}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#888888]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
