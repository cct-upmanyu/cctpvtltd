import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowRightLeft, Shield, Zap, Clock, CheckCircle, Database } from "lucide-react";
import dataMigrationImg from "@/assets/capabilities/data-migration.jpg";

const migrationPlatforms = [
  "Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics",
  "QuickBooks", "Xero", "Sage", "Shopify", "Custom Legacy Systems"
];

const migrationStats = [
  { value: "500+", label: "Migrations Completed" },
  { value: "99.9%", label: "Data Accuracy" },
  { value: "Zero", label: "Downtime Migrations" },
  { value: "48hr", label: "Fastest Migration" },
];

const migrationSteps = [
  { icon: Database, title: "Audit & Map", desc: "We audit your existing data and map fields to the new system." },
  { icon: Shield, title: "Validate & Clean", desc: "Data is cleaned, deduplicated, and validated before transfer." },
  { icon: ArrowRightLeft, title: "Migrate & Sync", desc: "Seamless migration with real-time sync and zero data loss." },
  { icon: CheckCircle, title: "Verify & Go Live", desc: "Post-migration verification ensures everything works perfectly." },
];

export function DataMigrationPreview() {
  return (
    <section className="section-padding bg-[#0B1C3D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1B90E0]/10 rounded-full blur-[200px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B90E0]/15 text-[#22D3EE] text-sm font-medium mb-4 border border-[#1B90E0]/25">
              Data Migration Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Migrate Your Data Without <span className="text-[#22D3EE]">Losing a Single Record</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Moving from legacy CRMs, spreadsheets, or outdated ERPs? We handle end-to-end data migration 
              with zero downtime and full data integrity — so your team never skips a beat.
            </p>

            {/* Migration Steps */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {migrationSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1B90E0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <step.icon className="w-4 h-4 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{step.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Platforms */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-3">We migrate from:</p>
              <div className="flex flex-wrap gap-2">
                {migrationPlatforms.map((p) => (
                  <span key={p} className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300 bg-white/5">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/data-migration"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#22D3EE] text-[#22D3EE] font-semibold hover:bg-[#22D3EE] hover:text-[#0B1C3D] transition-all duration-300 active:scale-[0.97]"
            >
              Explore Data Migration Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img src={dataMigrationImg} alt="Data Migration Services" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D] via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {migrationStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-[#22D3EE]">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
