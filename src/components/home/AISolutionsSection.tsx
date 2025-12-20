import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageSquare, Phone, Bot, Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiCapabilities = [
  {
    icon: Sparkles,
    title: "AI for Zoho",
    description: "Custom Zia configurations, predictive insights, and intelligent automation within your Zoho ecosystem.",
  },
  {
    icon: Brain,
    title: "ChatGPT Integrations",
    description: "Enterprise-grade GPT implementations for content, support, and business intelligence.",
  },
  {
    icon: Bot,
    title: "CRM AI Assistants",
    description: "Intelligent copilots that help your sales team close deals faster with smart recommendations.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Multi-platform chatbots for Website, WhatsApp, Instagram, and Facebook with natural conversations.",
  },
  {
    icon: Phone,
    title: "AI Voice & IVR",
    description: "Smart voice routing, voice bots, and intelligent IVR systems that understand context.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "AI-powered process automation that learns and adapts to your business patterns.",
  },
];

export function AISolutionsSection() {
  return (
    <section className="bg-dark-gradient particles-bg section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/5 text-[#3FE0F0] text-sm font-medium mb-4">
            AI Automation Experts
          </span>
          {/* DARK SECTION: Heading must be #FFFFFF */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
            AI That Actually Works—
            <span className="text-gradient-primary block">Inside Your Business Systems</span>
          </h2>
          {/* DARK SECTION: Secondary text must be #E5E7EB */}
          <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
            We don't just add AI as a feature. We integrate it deeply into your CRM, ERP, and operations for real business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group card-glass rounded-2xl p-8 hover-glow transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 border border-[#3FE0F0]/20 flex items-center justify-center mb-6 group-hover:bg-[#3FE0F0]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#3FE0F0]" />
                </div>
                
                {/* DARK SECTION: Card title must be #FFFFFF */}
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3">
                  {capability.title}
                </h3>
                
                {/* DARK SECTION: Card description must be #E5E7EB */}
                <p className="text-[#E5E7EB] leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button variant="heroDark" size="lg" asChild>
            <Link to="/ai-solutions">
              Explore AI Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}