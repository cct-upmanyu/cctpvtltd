import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Layers, Brain, PieChart, Cog, Globe, Database,
  ArrowRight, Link2, Puzzle, Gauge, Shield, CheckCircle,
  ClipboardCheck, SearchCheck
} from "lucide-react";

import zohoEcosystemImg from "@/assets/capabilities/zoho-ecosystem.jpg";
import aiAutomationImg from "@/assets/capabilities/ai-automation.jpg";
import crmRevenueImg from "@/assets/capabilities/crm-revenue.jpg";
import customErpImg from "@/assets/capabilities/custom-erp.jpg";
import websiteDevImg from "@/assets/capabilities/website-dev.jpg";
import dataMigrationImg from "@/assets/capabilities/data-migration.jpg";
import integrationsImg from "@/assets/capabilities/integrations.jpg";
import extensionsImg from "@/assets/capabilities/extensions.jpg";
import optimizationImg from "@/assets/capabilities/optimization.jpg";
import complianceImg from "@/assets/capabilities/compliance.jpg";
import legacyAuditImg from "@/assets/capabilities/legacy-audit.jpg";
import zohoAuditImg from "@/assets/capabilities/zoho-audit.jpg";

const capabilities = [
  {
    icon: Layers,
    title: "Zoho Ecosystem Implementation",
    description: "End-to-end Zoho One, CRM Plus, and Finance Plus solutions unifying 50+ applications into a cohesive operational ecosystem.",
    href: "/zoho-solutions",
    image: zohoEcosystemImg,
    features: ["Zoho One Setup", "Suite Integration", "User Training"]
  },
  {
    icon: Brain,
    title: "AI-Powered Business Automation",
    description: "ChatGPT, intelligent chatbots, and AI copilots integrated into workflows—automating decisions and accelerating productivity.",
    href: "/ai-solutions",
    image: aiAutomationImg,
    features: ["AI Agents", "Chatbots", "Process Automation"]
  },
  {
    icon: PieChart,
    title: "CRM & Revenue Systems",
    description: "Zoho CRM, Salesforce, HubSpot, and Pipedrive implementations driving revenue growth with data-driven sales automation.",
    href: "/crm-solutions",
    image: crmRevenueImg,
    features: ["CRM Setup", "Sales Pipelines", "Lead Automation"]
  },
  {
    icon: Cog,
    title: "Custom ERP Development",
    description: "Modular, scalable ERP systems on Zoho Creator—tailored to your industry's unique operational requirements.",
    href: "/custom-erp",
    image: customErpImg,
    features: ["Custom Modules", "Workflow Design", "Scalable Architecture"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "CRM-connected, AI-enabled business websites engineered to convert visitors into qualified leads and customers.",
    href: "/website-development",
    image: websiteDevImg,
    features: ["CRM Integration", "Lead Capture", "SEO Optimized"]
  },
  {
    icon: Database,
    title: "Data Migration & Architecture",
    description: "Seamless migrations from legacy systems with zero data loss, establishing AI-ready data architectures for future growth.",
    href: "/data-migration",
    image: dataMigrationImg,
    features: ["Zero Downtime", "Data Validation", "Legacy System Exit"]
  },
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description: "Secure integrations connecting Zoho, CRM, and ERP with payment gateways, telephony, WhatsApp, and enterprise platforms.",
    href: "/third-party-integrations",
    image: integrationsImg,
    features: ["API Development", "Webhooks", "Real-time Sync"]
  },
  {
    icon: Puzzle,
    title: "Zoho Extension Development",
    description: "Custom Zoho Marketplace and private extensions enhancing native functionality for advanced enterprise workflows.",
    href: "/zoho-extension-development",
    image: extensionsImg,
    features: ["Custom Widgets", "Marketplace Apps", "Private Extensions"]
  },
  {
    icon: Gauge,
    title: "System Optimization & Scaling",
    description: "Audit, optimize, and scale existing Zoho, CRM, and ERP deployments for peak performance and long-term growth.",
    href: "/zoho-solutions#optimization",
    image: optimizationImg,
    features: ["Performance Audit", "Automation Review", "Growth Planning"]
  },
  {
    icon: Shield,
    title: "Compliance, Security & Governance",
    description: "Role-based access, audit frameworks, and data protection policies aligned with enterprise compliance standards.",
    href: "/zoho-solutions#compliance",
    image: complianceImg,
    features: ["RBAC Setup", "Audit Trails", "Data Security"]
  },
  {
    icon: ClipboardCheck,
    title: "Audit Current Legacy System",
    description: "Comprehensive assessment of your existing legacy systems—identifying inefficiencies, risks, and a clear migration roadmap to modern platforms.",
    href: "/audit-legacy-system",
    image: legacyAuditImg,
    features: ["System Assessment", "Risk Analysis", "Migration Roadmap"]
  },
  {
    icon: SearchCheck,
    title: "Audit Current Zoho Setup",
    description: "Deep-dive audit of your Zoho ecosystem—uncovering underutilized features, broken automations, and data issues to unlock 100% ROI.",
    href: "/audit-zoho-setup",
    image: zohoAuditImg,
    features: ["CRM Health Check", "Automation Review", "Data Cleanup"]
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-light-gradient section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B90E0]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A855F7]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B90E0]/10 text-[#0B1C3D] text-sm font-medium mb-4 border border-[#1B90E0]/20">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            10 Core Capabilities
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            End-to-end solutions designed to transform your business operations with intelligent automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={capability.href}
                  className="group block h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B90E0]/30 hover:shadow-xl hover:shadow-[#1B90E0]/10 transition-all duration-300"
                >
                  {/* Background Image Header */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={capability.image} 
                      alt={capability.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/80 via-[#0B1C3D]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-tight max-w-[200px]">
                        {capability.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6">
                    <p className="text-[#374151] mb-4 leading-relaxed text-sm">
                      {capability.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.features.map((feature) => (
                        <span 
                          key={feature}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gray-100 text-[#374151]"
                        >
                          <CheckCircle className="w-3 h-3 text-[#1B90E0]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#1B90E0] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#374151] mb-6">
            Not sure which solution fits your needs? Let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0B1C3D] to-[#1A365D] text-white font-semibold hover:shadow-lg transition-all active:scale-[0.97]"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
