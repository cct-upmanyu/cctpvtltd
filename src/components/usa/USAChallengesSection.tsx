import { motion } from "framer-motion";
import { ArrowRight, Layers, DollarSign, Cog, BrainCircuit, Link2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const challenges = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Fragmented Systems",
    problem: "US businesses juggle 10–15 disconnected SaaS tools on average, creating data silos, duplicated effort, and blind spots across departments.",
    solution: "Zoho One unifies 45+ apps under a single license—CRM, finance, HR, marketing, and more—eliminating silos and giving you one source of truth.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "High SaaS Costs",
    problem: "Enterprise software stacks from Salesforce, HubSpot, and Microsoft can cost $150–$300/user/month, straining budgets as teams scale.",
    solution: "Zoho delivers comparable functionality at a fraction of the cost—starting at $45/user/month for the full Zoho One suite with no hidden fees.",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Manual Processes",
    problem: "Repetitive data entry, manual approvals, and spreadsheet-based workflows waste hundreds of hours each quarter and introduce costly errors.",
    solution: "Zoho's workflow engine, Deluge scripting, and Blueprint process automation eliminate manual tasks—reducing processing time by up to 70%.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Lack of AI Capabilities",
    problem: "Most mid-market businesses lack the infrastructure or expertise to leverage AI for sales forecasting, customer insights, or anomaly detection.",
    solution: "Zoho's built-in AI assistant Zia provides predictive analytics, sentiment analysis, lead scoring, and intelligent recommendations out of the box.",
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "Integration Issues",
    problem: "Connecting legacy ERP, e-commerce platforms, and third-party APIs often requires expensive middleware and months of custom development.",
    solution: "Zoho Flow, native REST/SOAP APIs, and pre-built connectors for 500+ platforms enable seamless integration—often in days, not months.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Compliance Challenges",
    problem: "Navigating HIPAA, SOX, CCPA, and industry-specific regulations is complex and risky without purpose-built governance frameworks.",
    solution: "Zoho offers SOC 2 Type II certification, HIPAA-ready infrastructure, GDPR compliance, and granular audit trails for full regulatory coverage.",
  },
];

const faqs = [
  {
    question: "Why should US businesses choose Zoho over Salesforce or HubSpot?",
    answer: "Zoho delivers enterprise-grade CRM, ERP, and automation at 60–70% lower cost than Salesforce, with deeper native integration across 45+ applications. Unlike HubSpot, Zoho covers finance, HR, and operations—not just marketing and sales.",
  },
  {
    question: "How does Zoho help with US compliance requirements like HIPAA and SOX?",
    answer: "Zoho provides SOC 2 Type II certified infrastructure, HIPAA-compliant data handling, and configurable audit trails for SOX readiness. As a certified Zoho Partner USA, we architect every implementation with compliance-first design patterns.",
  },
  {
    question: "What does a Zoho implementation timeline look like for US companies?",
    answer: "A standard Zoho Implementation USA project takes 4–12 weeks depending on complexity. Our phased approach includes discovery, configuration, data migration, training, and go-live support—ensuring zero disruption to your operations.",
  },
  {
    question: "Can Zoho integrate with our existing US-based tools and platforms?",
    answer: "Absolutely. Zoho integrates natively with QuickBooks, Stripe, Shopify, Slack, Microsoft 365, Google Workspace, and 500+ other platforms via Zoho Flow and custom API orchestration provided by our Zoho Consulting USA team.",
  },
];

export function USAChallengesSection() {
  return (
    <>
      {/* Challenges Grid */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 50%, #F0F9FF 100%)" }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-xs font-semibold uppercase tracking-wider mb-5">
              US Market Challenges
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-5 leading-tight">
              Challenges US Businesses Face<br className="hidden md:block" />
              <span className="text-[#3FE0F0]">(And How Zoho Solves Them)</span>
            </h2>
            <p className="text-[#374151] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              From fragmented tech stacks to rising SaaS costs, American enterprises face unique operational hurdles. As a trusted <strong>Zoho Partner USA</strong>, we help businesses overcome these challenges with unified, AI-powered solutions built for scale and compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl p-6 bg-white border border-[#E2E8F0] hover:border-[#3FE0F0]/40 hover:shadow-xl hover:shadow-[#3FE0F0]/8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#3FE0F0]/10 text-[#3FE0F0] mb-4 group-hover:bg-[#3FE0F0]/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3">{item.title}</h3>
                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#EF4444]/80 mb-1">The Challenge</p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#10B981]/80 mb-1">Zoho Solution</p>
                  <p className="text-[#374151] text-sm leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button variant="heroLight" size="xl" asChild>
                <Link to="/contact">
                  Book a Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact">Get a Custom Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)" }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              Zoho Implementation USA — FAQs
            </h3>
            <p className="text-[#374151] max-w-xl mx-auto">
              Common questions from US businesses exploring Zoho Consulting USA services.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`challenge-faq-${i}`}
                  className="rounded-2xl px-6 overflow-hidden bg-white border border-[#E2E8F0]"
                >
                  <AccordionTrigger className="text-[#111827] font-semibold text-left hover:no-underline text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#374151] text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
