import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { integrations } from "@/data/integrationsData";

const featuredIntegrations = integrations.filter(i => i.featured).slice(0, 12);
const allLogos = integrations.slice(0, 30);

export function IntegrationsPreview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B90E0]/10 text-[#0B1C3D] text-sm font-medium mb-4 border border-[#1B90E0]/20">
            50+ Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Connect Your Entire Tech Stack
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            We build secure, real-time integrations between Zoho, CRM, and ERP systems with payment gateways, 
            communication tools, AI platforms, and enterprise software your business already relies on.
          </p>
        </motion.div>

        {/* Integration Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#F0F7FF] to-[#F8FAFC] rounded-2xl border border-[#E5E7EB] p-8 md:p-12">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 md:gap-6">
              {allLogos.map((integration, i) => (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-2 group-hover:shadow-md group-hover:border-[#1B90E0]/30 group-hover:scale-110 transition-all duration-300">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[10px] text-[#6B7280] text-center leading-tight hidden md:block">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F0F7FF] to-transparent pointer-events-none rounded-l-2xl" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F0F7FF] to-transparent pointer-events-none rounded-r-2xl" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/third-party-integrations"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white font-semibold hover:shadow-lg hover:shadow-[#1B90E0]/25 transition-all duration-300 active:scale-[0.97]"
          >
            View All 50+ Integrations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
