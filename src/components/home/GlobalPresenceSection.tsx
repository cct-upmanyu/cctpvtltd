import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  { name: "United Kingdom", slug: "/zoho-partner-uk", flag: "🇬🇧", cities: "London · Manchester · Birmingham" },
  { name: "United States", slug: "/zoho-partner-usa", flag: "🇺🇸", cities: "New York · San Francisco · Chicago" },
  { name: "United Arab Emirates", slug: "/zoho-partner-uae", flag: "🇦🇪", cities: "Dubai · Abu Dhabi · Sharjah" },
  { name: "Australia", slug: "/zoho-partner-australia", flag: "🇦🇺", cities: "Sydney · Melbourne · Brisbane" },
  { name: "Canada", slug: "/zoho-partner-canada", flag: "🇨🇦", cities: "Toronto · Vancouver · Montreal" },
  { name: "India", slug: "/zoho-partner-india", flag: "🇮🇳", cities: "Mumbai · Bangalore · Delhi" },
  { name: "Europe", slug: "/zoho-partner-europe", flag: "🇪🇺", cities: "Berlin · Paris · Amsterdam" },
];

const stats = [
  { value: "7+", label: "Regions Served" },
  { value: "4000+", label: "Global Implementations" },
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Timezone Coverage" },
];

export const GlobalPresenceSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0B1C3D] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 border border-[#3FE0F0]/20 mb-5">
            <MapPin className="w-4 h-4 text-[#3FE0F0]" />
            <span className="text-sm font-medium text-[#3FE0F0] tracking-wide">Global Presence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ textWrap: "balance" }}>
            Trusted Across Continents
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg" style={{ textWrap: "pretty" }}>
            As a Global Zoho Premium Partner, we deliver localized expertise with world-class standards across 7+ regions.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <div className="text-2xl lg:text-3xl font-bold text-[#3FE0F0] tabular-nums">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Country Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={loc.slug}
                className="group block p-5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-[#3FE0F0]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{loc.flag}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#3FE0F0] group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{loc.name}</h3>
                <p className="text-gray-500 text-sm">{loc.cities}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
