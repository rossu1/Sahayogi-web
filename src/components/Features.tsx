"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Droplets,
  Building2,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    iconColor: "text-[#DC2626]",
    title: "Health Emergency",
    desc: "One tap alerts nearby doctors, nurses and first aid trained responders within 500m",
  },
  {
    icon: Shield,
    iconColor: "text-[#3b82f6]",
    title: "Silent Police Alert",
    desc: "Silently notify police with live GPS tracking — without making a call or being seen",
  },
  {
    icon: Droplets,
    iconColor: "text-[#DC2626]",
    title: "Blood Donor Network",
    desc: "Find verified blood donors by type within 10km. Register as a donor and save lives",
  },
  {
    icon: Building2,
    iconColor: "text-[#16a34a]",
    title: "Hospital Finder",
    desc: "Find the right specialist with prices, ratings and directions — government and private",
  },
  {
    icon: BookOpen,
    iconColor: "text-white",
    title: "Offline First Aid",
    desc: "Step-by-step first aid guides including CPR timer — works without internet",
  },
  {
    icon: Users,
    iconColor: "text-white",
    title: "Community Responders",
    desc: "Join as a verified responder and get notified when someone nearby needs help",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything you need in an emergency
          </h2>
          <p className="mt-4 text-[#888888]">
            Built for Kathmandu. Works when it matters most.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/[0.08] bg-[#111111] p-6"
              >
                <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
