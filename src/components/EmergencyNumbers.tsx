"use client";

import { motion } from "framer-motion";

const numbers = [
  {
    number: "102",
    labelNp: "एम्बुलेन्स",
    labelEn: "Ambulance",
    color: "text-[#DC2626]",
    borderColor: "border-[#DC2626]/20",
  },
  {
    number: "100",
    labelNp: "प्रहरी",
    labelEn: "Police",
    color: "text-[#3b82f6]",
    borderColor: "border-[#3b82f6]/20",
  },
  {
    number: "101",
    labelNp: "दमकल",
    labelEn: "Fire",
    color: "text-[#f97316]",
    borderColor: "border-[#f97316]/20",
  },
];

export default function EmergencyNumbers() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/[0.08] bg-[#111111] p-8 sm:p-12"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            आपतकालीन नम्बरहरू
          </h2>
          <p className="mb-10 text-center text-[#888888]">Emergency Numbers</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {numbers.map((item, i) => (
              <motion.a
                key={i}
                href={`tel:${item.number}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center rounded-xl border ${item.borderColor} bg-[#0a0a0a] p-8 transition-colors hover:bg-white/[0.03]`}
              >
                <span className={`text-5xl font-bold ${item.color}`}>
                  {item.number}
                </span>
                <span className="mt-3 text-base font-medium text-white">
                  {item.labelNp}
                </span>
                <span className="mt-1 text-sm text-[#888888]">
                  {item.labelEn}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
