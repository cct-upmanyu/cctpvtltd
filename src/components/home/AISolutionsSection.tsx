import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import aiZohoImg from "@/assets/ai-services/ai-zoho.jpg";
import chatgptImg from "@/assets/ai-services/chatgpt-integration.jpg";
import crmAssistantImg from "@/assets/ai-services/crm-assistant.jpg";
import aiChatbotsImg from "@/assets/ai-services/ai-chatbots.jpg";
import aiVoiceImg from "@/assets/ai-services/ai-voice.jpg";
import workflowImg from "@/assets/ai-services/workflow-automation.jpg";

const aiCapabilities = [
  {
    title: "AI for Zoho",
    description: "Custom Zia configurations, predictive insights, and intelligent automation within your Zoho ecosystem.",
    image: aiZohoImg,
  },
  {
    title: "ChatGPT Integrations",
    description: "Enterprise-grade GPT implementations for content, support, and business intelligence.",
    image: chatgptImg,
  },
  {
    title: "CRM AI Assistants",
    description: "Intelligent copilots that help your sales team close deals faster with smart recommendations.",
    image: crmAssistantImg,
  },
  {
    title: "AI Chatbots",
    description: "Multi-platform chatbots for Website, WhatsApp, Instagram, and Facebook with natural conversations.",
    image: aiChatbotsImg,
  },
  {
    title: "AI Voice & IVR",
    description: "Smart voice routing, voice bots, and intelligent IVR systems that understand context.",
    image: aiVoiceImg,
  },
  {
    title: "Workflow Automation",
    description: "AI-powered process automation that learns and adapts to your business patterns.",
    image: workflowImg,
  },
];

export function AISolutionsSection() {
  return (
    <section className="bg-light-gradient section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B90E0]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#1B90E0]/20 bg-[#1B90E0]/5 text-[#0B1C3D] text-sm font-medium mb-4">
            AI Automation Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            AI That Actually Works—
            <span className="text-gradient-primary block">Inside Your Business Systems</span>
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            We don't just add AI as a feature. We integrate it deeply into your CRM, ERP, and operations for real business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1B90E0]/30 hover:shadow-xl hover:shadow-[#1B90E0]/10 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/70 via-[#0B1C3D]/30 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  {capability.title}
                </h3>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <p className="text-[#374151] leading-relaxed text-sm">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button variant="heroLight" size="lg" asChild>
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
