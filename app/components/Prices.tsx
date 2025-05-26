"use client";

import { motion } from "framer-motion";

const pricing = [
  {
    title: "Bridal Combo",
    price: "₹5,000",
    includes: [
      "HD Makeup",
      "Hairdo",
      "Saree Draping",
      "Jewels (if needed)",
    ],
  },
  {
    title: "Bridal Combo + Mehendi",
    includes: [
      "All of the Bridal Combo services",
      "Mehendi based on design & length",
    ],
  },
  {
    title: "Bridesmaid Makeover",
    price: "₹4,000",
    includes: [
      "Makeup",
      "Hairdo",
    ],
  },
  {
    title: "Guest Makeup",
    price: "₹1,000",
    includes: [
      "Simple makeup for guests",
    ],
  },
  {
    title: "Saree Pre-Pleating",
    includes: [
      "Cotton: ₹250",
      "Silk: ₹350",
    ],
  },
  {
    title: "Mehendi Pricing",
    includes: [
      "Full Coverage (1 hand front & back): ₹2,000",
      "Simple Mehendi (per hand): ₹1,500",
      "Arabic Mehendi (per hand): ₹1,000",
      "Half Hand Full Coverage: ₹1,500",
      "Portraits & Diagrams: ₹200 each",
      "Mandala: ₹350 per hand / ₹1,000 full front",
    ],
  },
  {
    title: "Photoshoot Total Package",
    price: "₹4,500",
    includes: [
      "Makeup",
      "Hairdo",
      "Styling",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Prices() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-white">
      <h3 className="text-4xl font-extrabold text-center text-purple mb-16 tracking-wide">
        Combo & Pricing
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricing.map(({ title, includes, price }, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-900 
                       border border-purple-600 rounded-2xl p-8 shadow-lg
                       hover:shadow-[0_10px_25px_rgba(147,51,234,0.7)] 
                       cursor-pointer transition-transform duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.06 }}
          >
            <h4 className="text-2xl font-serif font-bold text-pink-400 mb-5 drop-shadow-md">
              {title}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-purple-200 font-sans leading-relaxed">
              {includes.map((item, i) => (
                <li key={i} className="hover:text-pink-300 transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
            {price && (
              <p className="mt-6 text-xl font-semibold text-pink-400 font-serif drop-shadow-md">
                {price}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
