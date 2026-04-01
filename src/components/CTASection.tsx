"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          आजै सुरु गर्नुहोस्
        </h2>
        <p className="mt-2 text-xl text-[#888888]">Start today</p>
        <p className="mt-4 text-[#888888]">
          No download required. Works in your browser.
        </p>
        <a
          href="http://localhost:8081"
          className="mt-8 inline-block rounded-full bg-[#DC2626] px-10 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
        >
          Open Sahayogi →
        </a>
        <p className="mt-6 text-sm text-[#888888]">
          Mobile app coming soon on iOS & Android
        </p>
      </motion.div>
    </section>
  );
}
