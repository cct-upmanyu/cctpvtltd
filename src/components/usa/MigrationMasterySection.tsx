import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Workflow, Blocks, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const migrationRoutes = [
  { label: "Salesforce → Zoho", href: "/data-migration" },
  { label: "HubSpot → Zoho", href: "/data-migration" },
  { label: "SAP/Oracle → Zoho Creator", href: "/data-migration" },
  { label: "HIPAA Compliant", href: "/industries/healthcare" },
  { label: "SOX Ready", href: "/industries/financial-services" },
  { label: "CCPA Safe", href: "/contact" },
];

const migrationCapabilities = [
  { icon: <Code className="w-6 h-6" />, title: "Deluge Scripting Expertise", description: "Custom business logic, workflow automation, and API integrations using Zoho's proprietary scripting language." },
  { icon: <Database className="w-6 h-6" />, title: "API Orchestration", description: "Multi-system data synchronization across REST/SOAP APIs with real-time webhooks and error handling." },
  { icon: <Workflow className="w-6 h-6" />, title: "Process Re-Engineering", description: "Map, optimize, and automate business processes during migration—not just lift-and-shift." },
  { icon: <Blocks className="w-6 h-6" />, title: "Zero-Downtime Cutover", description: "Parallel-run strategy ensures your business never stops operating during the transition." },
];

export function MigrationMasterySection() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight">
              Implementation & Migration with Deluge Mastery
            </h2>
            <p className="text-[#374151] text-base md:text-lg mb-6 leading-relaxed">
              Every migration is an opportunity to re-engineer. Our team combines deep Deluge scripting expertise with API orchestration to ensure your transition is seamless, compliant, and optimized for scale.
            </p>

            {/* Migration route & compliance pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {migrationRoutes.map(route => (
                <Link
                  key={route.label}
                  to={route.href}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full bg-white border border-[#3FE0F0]/20 text-[#0B1C3D] hover:bg-[#3FE0F0]/10 hover:border-[#3FE0F0]/40 transition-all cursor-pointer"
                >
                  {route.label}
                  <ExternalLink className="w-2.5 h-2.5 text-[#3FE0F0]" />
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="heroLight" size="lg" asChild>
                <Link to="/data-migration">
                  Explore Migration Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/third-party-integrations">
                  Explore Third-Party Integrations <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {migrationCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg hover:shadow-[#3FE0F0]/8 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#3FE0F0]/10 text-[#3FE0F0] mb-3">
                  {cap.icon}
                </div>
                <h4 className="text-base font-bold text-[#111827] mb-1.5">{cap.title}</h4>
                <p className="text-[#6B7280] text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
