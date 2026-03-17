import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Database, FileCheck, Map, Upload, CheckCircle, GraduationCap, DollarSign, Layers, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const migrationPaths = [
  {
    from: "Salesforce",
    to: "Zoho CRM",
    highlight: "60% Lower Licensing Costs",
    features: ["No-code data mapping", "Custom object migration", "Workflow re-creation", "Zero downtime transition"],
    href: "/compare/zoho-crm-vs-salesforce",
    color: "#3FE0F0",
  },
  {
    from: "HubSpot & Dynamics",
    to: "Zoho One",
    highlight: "Unified Business OS",
    features: ["Replace fragmented tech stacks", "Single vendor ecosystem", "Integrated AI across apps", "30+ native applications"],
    href: "/compare/zoho-crm-vs-hubspot",
    color: "#4DA3FF",
  },
  {
    from: "Legacy SAP / Oracle",
    to: "Zoho Creator ERP",
    highlight: "Agile Low-Code Layers",
    features: ["Build on top of rigid systems", "Custom workflows in weeks", "Deluge scripting automation", "Progressive modernization"],
    href: "/custom-erp",
    color: "#3FE0F0",
  },
];

const migrationSteps = [
  { icon: <Database className="w-5 h-5" />, label: "Extract" },
  { icon: <FileCheck className="w-5 h-5" />, label: "Clean" },
  { icon: <Map className="w-5 h-5" />, label: "Map" },
  { icon: <Upload className="w-5 h-5" />, label: "Import" },
  { icon: <CheckCircle className="w-5 h-5" />, label: "Validate" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Train" },
];

export function MigrationPortal() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
            <Server className="w-4 h-4 text-[#4DA3FF]" />
            <span className="text-[#0B1C3D] text-sm font-semibold">High-Intent Migration Portal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
            Seamlessly Migrate to Zoho One
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            Whether you're leaving Salesforce, consolidating HubSpot + Dynamics, or modernizing legacy ERP—we make the transition risk-free.
          </p>
        </motion.div>

        {/* Migration Paths */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {migrationPaths.map((path, i) => (
            <motion.div
              key={path.from}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] hover:shadow-xl transition-all group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-[#6B7280] line-through">{path.from}</span>
                  <ArrowRight className="w-4 h-4 text-[#3FE0F0]" />
                  <span className="text-sm font-bold text-[#111827]">{path.to}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4 text-xs font-bold" style={{ background: `${path.color}10`, color: path.color }}>
                  <DollarSign className="w-3 h-3" />
                  {path.highlight}
                </div>
                <ul className="space-y-2.5">
                  {path.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-[#374151] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3FE0F0] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Button variant="heroLight" size="sm" className="w-full" asChild>
                  <Link to={path.href}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Migration Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8 border border-[#3FE0F0]/15"
          style={{ background: "linear-gradient(135deg, #F0FDFF 0%, #E8F4FD 50%, #EFF6FF 100%)" }}
        >
          <h3 className="text-center text-lg font-bold text-[#111827] mb-6">Our Proven 6-Step Migration Process</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-1">
            {migrationSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1 md:gap-2">
                <div className="flex flex-col items-center gap-1.5 px-3 py-2">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#3FE0F0]/20 flex items-center justify-center text-[#3FE0F0] shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#0B1C3D]">{step.label}</span>
                </div>
                {i < migrationSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#3FE0F0]/40 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
