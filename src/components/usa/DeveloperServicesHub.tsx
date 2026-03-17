import { motion } from "framer-motion";
import { Code, Puzzle, Server, Layout, AppWindow, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const devServices = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Vertical Studio Solutions",
    description: "Industry-specific deep-dive applications purpose-built for healthcare, finance, logistics, and manufacturing workflows.",
    features: ["Domain-specific modules", "Pre-built compliance layers", "Rapid deployment"],
  },
  {
    icon: <AppWindow className="w-7 h-7" />,
    title: "Zoho Creator Custom Apps",
    description: "Bespoke low-code solutions for niche workflows that off-the-shelf products simply can't address.",
    features: ["Drag-and-drop builders", "Deluge scripting", "Mobile-first design"],
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Zoho Catalyst (Serverless)",
    description: "High-performance, scalable backend development using Zoho's serverless compute platform for complex business logic.",
    features: ["Event-driven functions", "Auto-scaling infra", "Zero server management"],
  },
  {
    icon: <Puzzle className="w-7 h-7" />,
    title: "Widgets & Extensions",
    description: "Creating Marketplace extensions and custom dashboard widgets that extend Zoho's native capabilities for your team.",
    features: ["Marketplace-ready", "Embedded analytics", "Cross-app widgets"],
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: "Custom UI for Zoho CRM",
    description: "Tailoring the user interface for specialized sales pipelines, industry-specific views, and advanced data visualization.",
    features: ["Canvas design studio", "Custom related lists", "Pipeline-specific UX"],
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "API Orchestration & Deluge",
    description: "Enterprise-grade API integrations and Deluge scripting to connect Zoho with your entire tech ecosystem seamlessly.",
    features: ["REST/SOAP APIs", "Webhook automation", "Multi-system sync"],
  },
];

export function DeveloperServicesHub() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #F0F8FF 0%, #F5FAFF 50%, #FFFFFF 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
            <Code className="w-4 h-4 text-[#4DA3FF]" />
            <span className="text-[#0B1C3D] text-sm font-semibold">Certified Zoho Developer Team</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
            Expert Zoho Development & Staff Augmentation
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto leading-relaxed">
            From low-code Creator apps to serverless Catalyst backends—our certified developers build exactly what your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {devServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#4DA3FF]/8 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4DA3FF]/10 to-[#3FE0F0]/10 text-[#4DA3FF] group-hover:from-[#4DA3FF]/20 group-hover:to-[#3FE0F0]/20 transition-all mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">{service.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#374151] text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-[#3FE0F0] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroLight" size="xl" className="text-base" asChild>
            <Link to="/contact">
              Hire a Certified Zoho Developer <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
