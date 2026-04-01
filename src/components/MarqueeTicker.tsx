"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const items = [
  "स्वास्थ्य आपतकाल",
  "प्रहरी सूचना",
  "रगत दाता",
  "अस्पताल खोज",
  "प्राथमिक उपचार",
  "Health Emergency",
  "Police Alert",
  "Blood Donor",
  "Hospital Finder",
  "First Aid",
  "Free Forever",
  "Open Source",
];

export default function MarqueeTicker() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="border-y border-white/[0.08] bg-[#0a0a0a] py-4"
    >
      <Marquee speed={40} gradient={false} pauseOnHover>
        {items.map((item, i) => (
          <span key={i} className="mx-4 text-sm text-[#888888]">
            {item}
            <span className="ml-8 text-[#DC2626]">&bull;</span>
          </span>
        ))}
      </Marquee>
    </motion.div>
  );
}
