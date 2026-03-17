import { motion } from "framer-motion";
import { Clock, MapPin, Headphones } from "lucide-react";

const timezones = [
  { zone: "EST", cities: "New York, Miami, Boston", offset: "UTC-5", active: true },
  { zone: "CST", cities: "Chicago, Dallas, Houston", offset: "UTC-6", active: true },
  { zone: "MST", cities: "Denver, Phoenix", offset: "UTC-7", active: true },
  { zone: "PST", cities: "San Francisco, LA, Seattle", offset: "UTC-8", active: true },
];

export function TimezoneSupport() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border border-[#3FE0F0]/20 bg-[#3FE0F0]/5">
            <Headphones className="w-4 h-4 text-[#3FE0F0]" />
            <span className="text-[#0B1C3D] text-sm font-medium">Timezone-Aligned Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
            24/7 Coverage Across All US Timezones
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Our distributed team ensures you always have expert support during your business hours—no waiting, no delays.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timezones.map((tz, i) => (
            <motion.div
              key={tz.zone}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg hover:border-[#3FE0F0]/30 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center bg-[#3FE0F0]/10 text-[#3FE0F0] group-hover:bg-[#3FE0F0] group-hover:text-white transition-all">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-1">{tz.zone}</h3>
              <p className="text-xs text-[#6B7280] mb-2">{tz.offset}</p>
              <div className="flex items-center justify-center gap-1 text-[#374151] text-xs">
                <MapPin className="w-3 h-3 text-[#3FE0F0]" />
                <span>{tz.cities}</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Support
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
