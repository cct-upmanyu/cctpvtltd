import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Brain, 
  PieChart, 
  Cog, 
  Globe, 
  Database,
  ArrowRight
} from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "Zoho Ecosystem Implementation",
    description: "Complete Zoho One, CRM Plus, Finance Plus, and 50+ app implementations tailored to your business.",
    href: "/zoho-solutions",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI-Powered Business Automation",
    description: "ChatGPT integrations, intelligent chatbots, and AI copilots that transform your operations.",
    href: "/ai-solutions",
    color: "secondary",
  },
  {
    icon: PieChart,
    title: "CRM & Revenue Systems",
    description: "Zoho CRM, Salesforce, HubSpot, Pipedrive—custom implementations for sales growth.",
    href: "/crm-solutions",
    color: "accent",
  },
  {
    icon: Cog,
    title: "Custom ERP Development",
    description: "Modular ERP systems built on Zoho Creator with full customization capabilities.",
    href: "/custom-erp",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "CRM-connected, AI-enabled business websites that convert visitors to customers.",
    href: "/website-development",
    color: "secondary",
  },
  {
    icon: Database,
    title: "Data Migration & Architecture",
    description: "Seamless migration from legacy systems with zero data loss and AI enablement.",
    href: "/data-migration",
    color: "accent",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Core Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end solutions designed to transform your business operations with intelligent automation
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
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={capability.href}
                  className="group block h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-colors ${
                    capability.color === "primary" 
                      ? "bg-primary/10 group-hover:bg-primary/20" 
                      : capability.color === "secondary"
                      ? "bg-secondary/10 group-hover:bg-secondary/20"
                      : "bg-accent/10 group-hover:bg-accent/20"
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      capability.color === "primary" 
                        ? "text-primary" 
                        : capability.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}