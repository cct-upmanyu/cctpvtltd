import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe } from "lucide-react";

const locations = [
  { name: "United Kingdom", slug: "/zoho-partner-uk", flag: "🇬🇧", cities: "London · Manchester · Birmingham", accent: "#E42527" },
  { name: "United States", slug: "/zoho-partner-usa", flag: "🇺🇸", cities: "New York · San Francisco · Chicago", accent: "#3B82F6" },
  { name: "United Arab Emirates", slug: "/zoho-partner-uae", flag: "🇦🇪", cities: "Dubai · Abu Dhabi · Sharjah", accent: "#10B981" },
  { name: "Australia", slug: "/zoho-partner-australia", flag: "🇦🇺", cities: "Sydney · Melbourne · Brisbane", accent: "#F59E0B" },
  { name: "Canada", slug: "/zoho-partner-canada", flag: "🇨🇦", cities: "Toronto · Vancouver · Montreal", accent: "#EF4444" },
  { name: "India", slug: "/zoho-partner-india", flag: "🇮🇳", cities: "Mumbai · Bangalore · Delhi", accent: "#F97316" },
  { name: "Europe", slug: "/zoho-partner-europe", flag: "🇪🇺", cities: "Berlin · Paris · Amsterdam", accent: "#6366F1" },
];

const stats = [
  { value: "7+", label: "Regions Served" },
  { value: "4000+", label: "Global Implementations" },
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Timezone Coverage" },
];

export const GlobalPresenceSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #F0F7FF 0%, #E8F0FE 30%, #F5F0FF 60%, #FFF5F5 100%)" }}>
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-emerald-200/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blue-200/50 shadow-sm mb-5">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">Global Presence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4" style={{ textWrap: "balance" }}>
            Trusted Across Continents
          </h2>
          <p className="text-[#374151] max-w-2xl mx-auto text-lg" style={{ textWrap: "pretty" }}>
            As a Global Zoho Premium Partner, we deliver localized expertise with world-class standards across 7+ regions.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-5 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 tabular-nums">{stat.value}</div>
              <div className="text-sm text-[#6B7280] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Country Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={loc.slug}
                className="group block p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/90 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
                style={{ borderBottom: `3px solid ${loc.accent}` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{loc.flag}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h3 className="text-[#111827] font-semibold text-lg mb-1">{loc.name}</h3>
                <p className="text-[#6B7280] text-sm">{loc.cities}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
