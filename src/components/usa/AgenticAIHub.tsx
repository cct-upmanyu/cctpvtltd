import { motion } from "framer-motion";
import { Brain, Sparkles, FileSearch, ShieldCheck, Bot, Zap, TrendingUp, Users } from "lucide-react";

import aiChatbotImg from "@/assets/ai-chatbot-scenario.jpg";
import aiDocProcessImg from "@/assets/ai-document-processing.jpg";
import aiDashboardImg from "@/assets/ai-predictive-dashboard.jpg";
import aiGovernanceImg from "@/assets/ai-governance-dashboard.jpg";
import aiWorkflowImg from "@/assets/ai-workflow-orchestration.jpg";
import aiSupportImg from "@/assets/ai-customer-support.jpg";

const aiFeatures = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Autonomous Lead Qualification with Zia",
    description: "AI agents that monitor incoming leads 24/7, score them based on behavioral signals, and route high-intent prospects directly to your top closers—without human intervention.",
    tag: "Agentic AI",
    image: aiChatbotImg,
  },
  {
    icon: <FileSearch className="w-7 h-7" />,
    title: "Intelligent Document Processing",
    description: "Automatically extract, classify, and route data from invoices, contracts, and forms. Reduce manual data entry by 90% with AI-powered OCR and NLP pipelines.",
    tag: "Automation",
    image: aiDocProcessImg,
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Predictive Sales & Revenue Forecasting",
    description: "Leverage Zia's predictive analytics to forecast deal closures, identify at-risk accounts, and optimize your pipeline for maximum revenue impact.",
    tag: "Analytics",
    image: aiDashboardImg,
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Human-in-the-Loop AI Governance",
    description: "Enterprise-grade AI with built-in approval workflows. AI agents escalate edge cases to human reviewers, ensuring compliance with HIPAA, SOX, and CCPA regulations.",
    tag: "Governance",
    image: aiGovernanceImg,
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Workflow Orchestration Agents",
    description: "Deploy autonomous agents that monitor CRM and ERP data, trigger multi-step workflows, coordinate across apps, and self-correct without human triggers.",
    tag: "Agentic AI",
    image: aiWorkflowImg,
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "AI Customer Support Agents",
    description: "Intelligent support agents that resolve tickets, suggest knowledge base articles, and escalate complex issues—reducing first-response time by 75%.",
    tag: "Support",
    image: aiSupportImg,
  },
];

export function AgenticAIHub() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #EBF4FF 0%, #F0F7FF 50%, #F8FAFC 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#3FE0F0]/25 bg-[#3FE0F0]/5">
            <Brain className="w-4 h-4 text-[#3FE0F0]" />
            <span className="text-[#0B1C3D] text-sm font-semibold">Next-Generation Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
            Next-Gen Agentic AI Solutions
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto leading-relaxed">
            Go beyond chatbots. Our Agentic AI systems autonomously monitor, decide, and act across your CRM, ERP, and operations—with human oversight built in.
          </p>
        </motion.div>

        {/* Top 3 cards with images */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {aiFeatures.slice(0, 3).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/8 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Image */}
              {feature.image && (
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3FE0F0]/10 to-[#4DA3FF]/10 text-[#3FE0F0]">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3FE0F0] bg-[#3FE0F0]/8 px-2.5 py-1 rounded-full">{feature.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2 leading-snug">{feature.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 cards with images */}
        <div className="grid md:grid-cols-3 gap-6">
          {aiFeatures.slice(3).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/8 transition-all duration-300 group relative overflow-hidden"
            >
              {feature.image && (
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#3FE0F0]/10 to-[#4DA3FF]/10 text-[#3FE0F0]">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3FE0F0] bg-[#3FE0F0]/8 px-2.5 py-1 rounded-full">{feature.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2 leading-snug">{feature.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}