import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Brain, 
  PieChart, 
  Cog, 
  Globe, 
  Database,
  ArrowRight,
  Link2,
  Puzzle,
  Gauge,
  Shield,
  CheckCircle
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Zoho Ecosystem Implementation",
    description: "We architect and deploy end-to-end Zoho One, CRM Plus, and Finance Plus solutions, unifying 50+ applications into a cohesive operational ecosystem.",
    href: "/zoho-solutions",
    color: "primary",
    features: ["Zoho One Setup", "Suite Integration", "User Training"]
  },
  {
    icon: Brain,
    title: "AI-Powered Business Automation",
    description: "We integrate ChatGPT, intelligent chatbots, and AI copilots into your workflows—automating decisions and accelerating enterprise-wide productivity.",
    href: "/ai-solutions",
    color: "secondary",
    features: ["AI Agents", "Chatbots", "Process Automation"]
  },
  {
    icon: PieChart,
    title: "CRM & Revenue Systems",
    description: "We implement and optimize Zoho CRM, Salesforce, HubSpot, and Pipedrive to drive revenue growth with data-driven sales automation.",
    href: "/crm-solutions",
    color: "accent",
    features: ["CRM Setup", "Sales Pipelines", "Lead Automation"]
  },
  {
    icon: Cog,
    title: "Custom ERP Development",
    description: "We build modular, scalable ERP systems on Zoho Creator—tailored to your industry's unique operational requirements.",
    href: "/custom-erp",
    color: "primary",
    features: ["Custom Modules", "Workflow Design", "Scalable Architecture"]
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "We develop CRM-connected, AI-enabled business websites engineered to convert visitors into qualified leads and customers.",
    href: "/website-development",
    color: "secondary",
    features: ["CRM Integration", "Lead Capture", "SEO Optimized"]
  },
  {
    icon: Database,
    title: "Data Migration & Architecture",
    description: "We execute seamless migrations from legacy systems with zero data loss, establishing AI-ready data architectures for future growth.",
    href: "/data-migration",
    color: "accent",
    features: ["Zero Downtime", "Data Validation", "Legacy System Exit"]
  },
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description: "We architect secure integrations connecting Zoho, CRM, and ERP systems with payment gateways, telephony, WhatsApp, and enterprise platforms.",
    href: "/third-party-integrations",
    color: "primary",
    features: ["API Development", "Webhooks", "Real-time Sync"]
  },
  {
    icon: Puzzle,
    title: "Zoho Extension Development",
    description: "We build custom Zoho Marketplace and private extensions to enhance native functionality and support advanced enterprise workflows.",
    href: "/zoho-extension-development",
    color: "secondary",
    features: ["Custom Widgets", "Marketplace Apps", "Private Extensions"]
  },
  {
    icon: Gauge,
    title: "System Optimization & Scaling",
    description: "We audit, optimize, and scale existing Zoho, CRM, and ERP deployments for peak performance, automation efficiency, and long-term growth.",
    href: "/zoho-solutions#optimization",
    color: "accent",
    features: ["Performance Audit", "Automation Review", "Growth Planning"]
  },
  {
    icon: Shield,
    title: "Compliance, Security & Governance",
    description: "We design role-based access, audit frameworks, and data protection policies aligned with enterprise and regional compliance standards.",
    href: "/zoho-solutions#compliance",
    color: "primary",
    features: ["RBAC Setup", "Audit Trails", "Data Security"]
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-light-gradient section-padding relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3FE0F0]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#0B1C3D] text-sm font-medium mb-4 border border-[#3FE0F0]/20">
            Our Expertise
          </span>
          {/* LIGHT SECTION: Heading must be #111827 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            10 Core Capabilities
          </h2>
          {/* LIGHT SECTION: Secondary text must be #374151 */}
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            End-to-end solutions designed to transform your business operations with intelligent automation. 
            From strategy to implementation to ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={capability.href}
                  className="group block h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3FE0F0]/30 hover:shadow-xl hover:shadow-[#3FE0F0]/10 hover-lift transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    capability.color === "primary" 
                      ? "bg-[#3FE0F0]/10 group-hover:bg-[#3FE0F0] group-hover:shadow-lg group-hover:shadow-[#3FE0F0]/30" 
                      : capability.color === "secondary"
                      ? "bg-[#4DA3FF]/10 group-hover:bg-[#4DA3FF] group-hover:shadow-lg group-hover:shadow-[#4DA3FF]/30"
                      : "bg-[#8B5CF6]/10 group-hover:bg-[#8B5CF6] group-hover:shadow-lg group-hover:shadow-[#8B5CF6]/30"
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${
                      capability.color === "primary" 
                        ? "text-[#3FE0F0] group-hover:text-white" 
                        : capability.color === "secondary"
                        ? "text-[#4DA3FF] group-hover:text-white"
                        : "text-[#8B5CF6] group-hover:text-white"
                    }`} />
                  </div>
                  
                  {/* LIGHT SECTION: Text must be #111827 */}
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#3FE0F0] transition-colors">
                    {capability.title}
                  </h3>
                  
                  {/* LIGHT SECTION: Secondary text must be #374151 */}
                  <p className="text-[#374151] mb-4 leading-relaxed text-sm">
                    {capability.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {capability.features.map((feature) => (
                      <span 
                        key={feature}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-gray-100 text-[#374151]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#3FE0F0]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#3FE0F0] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#374151] mb-6">
            Not sure which solution fits your needs? Let's discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0B1C3D] to-[#1A365D] text-white font-semibold hover:shadow-lg transition-all"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
