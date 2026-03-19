import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check, Zap, TrendingUp, DollarSign, Clock, Shield,
  Bot, Code, BarChart3, Plug, Star, ArrowRight,
  Users, Rocket, Award, Layers, Target, Cpu,
  ChevronRight, Globe, Sparkles, X, Send,
  Search, Settings, Play, TestTube, CheckCircle, RefreshCw,
  Briefcase, LineChart, Brain, FileText, Workflow, HeartHandshake
} from "lucide-react";

import addonChatbot from "@/assets/addon-chatbot.png";
import addonCreator from "@/assets/addon-creator.png";
import addonApi from "@/assets/addon-api.png";
import addonAnalytics from "@/assets/addon-analytics.png";

const CONSULTATION_URL = "https://booknow.clubcodetechnology.com/";

const pricingModels = ["Project-Based", "Monthly Retainer", "Dedicated Partner"] as const;
type PricingModel = typeof pricingModels[number];

const retainerPlans = [
  {
    name: "Starter",
    hours: "10",
    price: 500,
    rate: 50,
    features: [
      "Continuous system optimization",
      "Workflow automation",
      "AI implementation support",
      "Integration management",
      "Performance improvements",
      "Ongoing consultation",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    hours: "20–30",
    priceRange: "$900 – $1,350",
    rate: 45,
    price: 900,
    features: [
      "Continuous system optimization",
      "Workflow automation",
      "AI implementation support",
      "Integration management",
      "Performance improvements",
      "Ongoing consultation",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Scale",
    hours: "40–60",
    priceRange: "$1,600 – $2,400",
    rate: 40,
    price: 1600,
    features: [
      "Continuous system optimization",
      "Workflow automation",
      "AI implementation support",
      "Integration management",
      "Performance improvements",
      "Ongoing consultation",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    hours: "80–100",
    priceRange: "$3,200 – $4,000",
    rate: 40,
    price: 3200,
    features: [
      "Continuous system optimization",
      "Workflow automation",
      "AI implementation support",
      "Integration management",
      "Performance improvements",
      "Ongoing consultation",
    ],
    highlighted: false,
  },
];

const enterpriseBenefits = [
  "Dedicated Zoho & AI consultant",
  "Priority support",
  "Weekly or bi-weekly strategy calls",
  "Advanced system architecture",
  "Cross-department workflow design",
  "Long-term roadmap planning",
];

const projectCostFactors = [
  { icon: Layers, label: "Business Process Complexity" },
  { icon: Cpu, label: "Number of Applications" },
  { icon: Sparkles, label: "Automation & AI Scope" },
  { icon: Plug, label: "Integration Requirements" },
  { icon: Settings, label: "Customization Level" },
  { icon: Clock, label: "Timeline & Urgency" },
];

const projectIncludes = [
  "Requirement analysis",
  "System architecture design",
  "Implementation & configuration",
  "Workflow automation",
  "Testing & validation",
  "User training",
  "Post-go-live support",
];

const projectCards = [
  { title: "Quick Enhancements", hours: "10–30 hours", price: "$500 – $1,500", color: "from-[#2EA8FF]/10 to-[#00D4FF]/5" },
  { title: "Standard Implementations", hours: "30–100 hours", price: "$1,500 – $5,000", color: "from-[#2EA8FF]/15 to-[#00D4FF]/10" },
  { title: "Advanced Systems", hours: "100–250 hours", price: "$5,000 – $12,500+", color: "from-[#2EA8FF]/20 to-[#00D4FF]/15" },
];

const projectTimeline = [
  { phase: "Discovery", time: "2–5 days", icon: Search },
  { phase: "Implementation", time: "2–6 weeks", icon: Settings },
  { phase: "Testing & Go-Live", time: "3–7 days", icon: Play },
];

const projectUseCases = [
  "CRM implementation",
  "ERP system setup",
  "Migration from legacy systems",
  "Automation of manual workflows",
  "AI-driven system development",
];

const addOns = [
  { icon: Bot, title: "AI Chatbot Setup", price: "$500 – $2,000", desc: "Custom AI chatbot for sales, support, or internal use", image: addonChatbot },
  { icon: Code, title: "Custom App Development", price: "$800 – $5,000", desc: "Custom low-code applications built on Zoho Creator", image: addonCreator },
  { icon: Plug, title: "API Integrations", price: "$300 – $2,500", desc: "Third-party API connections and data sync", image: addonApi },
  { icon: BarChart3, title: "Analytics Dashboards", price: "$400 – $2,000", desc: "Custom reporting and BI dashboards", image: addonAnalytics },
];

const roiItems = [
  { icon: Clock, value: "20–40", suffix: "hrs/month", label: "Save Monthly Hours" },
  { icon: DollarSign, value: "30–50", suffix: "%", label: "Reduce Operational Costs" },
  { icon: TrendingUp, value: "2–3×", suffix: "", label: "Improve Sales Conversions" },
  { icon: Zap, value: "80", suffix: "%", label: "Eliminate Manual Work" },
  { icon: Users, value: "0", suffix: " extra hires", label: "Scale Without Hiring" },
  { icon: LineChart, value: "Real-time", suffix: "", label: "Gain Business Insights" },
];

const comparisonData = [
  { metric: "Effective Hourly Rate", project: "$50/hr", retainer: "From $40/hr", partner: "Custom" },
  { metric: "80-Hour Cost", project: "$4,000", retainer: "$3,200", partner: "Included" },
  { metric: "Priority Level", project: "Standard", retainer: "High", partner: "VIP" },
  { metric: "Support Speed", project: "48 hrs", retainer: "12 hrs", partner: "4 hrs" },
  { metric: "Strategy Calls", project: "On request", retainer: "Weekly", partner: "Unlimited" },
  { metric: "AI Roadmap", project: "–", retainer: "Basic", partner: "Full" },
];

const deliverySteps = [
  { icon: Search, label: "Discovery & Requirement Analysis", desc: "Deep-dive into your business processes and goals" },
  { icon: FileText, label: "System Architecture Design", desc: "Blueprint your ideal system configuration" },
  { icon: Settings, label: "Implementation & Configuration", desc: "Build and configure your Zoho ecosystem" },
  { icon: TestTube, label: "Testing & Validation", desc: "Rigorous QA to ensure flawless performance" },
  { icon: Play, label: "Go-Live Deployment", desc: "Smooth transition with zero downtime" },
  { icon: RefreshCw, label: "Continuous Optimization", desc: "Ongoing improvements and system tuning" },
];

const realProjects = [
  { title: "CRM Implementation", price: "$1,500 – $3,500", icon: Target, desc: "Full Zoho CRM setup with custom pipelines, automations, and integrations" },
  { title: "ERP Workflow System", price: "$5,000 – $10,000", icon: Workflow, desc: "End-to-end ERP with finance, inventory, and operations modules" },
  { title: "AI Automation Setup", price: "$1,000 – $3,000", icon: Brain, desc: "AI-powered workflows, chatbots, and predictive analytics" },
];

const pricingFactors = [
  { icon: Layers, label: "Business complexity" },
  { icon: Cpu, label: "Number of applications" },
  { icon: Plug, label: "Integration requirements" },
  { icon: Sparkles, label: "AI implementation scope" },
  { icon: Clock, label: "Timeline urgency" },
];

const faqs = [
  { q: "How do I choose the right plan?", a: "We recommend starting with a discovery call where we assess your business needs, system complexity, and goals. Based on that, we'll suggest the most cost-effective engagement model — whether it's a one-time project, monthly retainer, or dedicated partnership." },
  { q: "Can I upgrade or change plans?", a: "Absolutely. Our plans are designed to scale with your business. You can upgrade, downgrade, or switch engagement models at any time with 30 days' notice." },
  { q: "What happens if I exceed my monthly hours?", a: "Additional hours are billed at your plan's hourly rate. We'll always notify you before any overages occur, so there are no surprises." },
  { q: "How is billing handled?", a: "We invoice monthly at the start of each billing cycle. Payment terms are Net-15. We accept bank transfers, credit cards, and PayPal." },
  { q: "Do you support AI implementations?", a: "Yes — AI is core to our offering. We implement AI chatbots, predictive analytics, workflow automation, and custom AI agents across your Zoho ecosystem and beyond." },
];

function PlanFormModal({ plan, onClose }: { plan: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-1">Get Started</h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm mb-6">Tell us about your requirements and we'll get back within 24 hours.</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div>
            <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Selected Plan</label>
            <Input value={plan} readOnly className="bg-[#F4F6F8] border-[#D1D5DB]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Full Name *</label>
              <Input placeholder="John Doe" required className="border-[#D1D5DB]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Email *</label>
              <Input type="email" placeholder="john@company.com" required className="border-[#D1D5DB]" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Company</label>
              <Input placeholder="Your Company" className="border-[#D1D5DB]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Phone</label>
              <Input placeholder="+1 234 567 890" className="border-[#D1D5DB]" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">What are you interested in?</label>
            <select className="w-full h-10 px-3 rounded-lg border border-[#D1D5DB] bg-white text-[hsl(var(--foreground))] text-sm">
              <option>CRM Setup & Customization</option>
              <option>ERP System Implementation</option>
              <option>AI & Automation</option>
              <option>Data Migration</option>
              <option>Custom App Development</option>
              <option>Ongoing Support & Optimization</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-1.5">Project Requirements</label>
            <Textarea placeholder="Briefly describe your project, goals, and any specific requirements..." className="border-[#D1D5DB] min-h-[100px]" />
          </div>
          <Button type="submit" className="w-full bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white py-5 rounded-xl text-base">
            Submit Request <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeModel, setActiveModel] = useState<PricingModel>("Monthly Retainer");
  const [hours, setHours] = useState([50]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const getEstimate = (h: number) => {
    if (h <= 10) return { plan: "Starter", cost: h * 50, rate: 50 };
    if (h <= 30) return { plan: "Growth", cost: h * 45, rate: 45 };
    if (h <= 60) return { plan: "Scale", cost: h * 40, rate: 40 };
    return { plan: "Enterprise", cost: h * 40, rate: 40 };
  };

  const estimate = getEstimate(hours[0]);

  return (
    <>
      <Helmet>
        <title>Zoho, ERP & AI Solutions Pricing | ClubCode Technology Pvt Ltd</title>
        <meta name="description" content="Transparent, scalable pricing for Zoho CRM, ERP implementation, and AI automation. Global Zoho Premium Partner with flexible project-based, retainer, and dedicated partner plans." />
        <meta name="keywords" content="Zoho pricing, Zoho ERP implementation cost, Zoho partner pricing USA, CRM implementation cost, AI automation pricing, Zoho consulting pricing" />
        <link rel="canonical" href="https://cctpvtltd.lovable.app/pricing" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen">

        {/* ═══════════════ SECTION 1: HERO ═══════════════ */}
        <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0E2A4D 50%, #0B1F3A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(46,168,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(46,168,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2EA8FF]/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/6 rounded-full blur-[130px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Badge className="mb-6 bg-white/8 text-[#00D4FF] border-[#00D4FF]/20 px-5 py-2 backdrop-blur-sm text-sm">
                <Globe className="w-4 h-4 mr-2" /> Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                Flexible Pricing for{" "}
                <span className="bg-gradient-to-r from-[#2EA8FF] via-[#00D4FF] to-[#2EA8FF] bg-clip-text text-transparent">
                  Zoho, ERP & AI Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#B0C4DE] max-w-3xl mx-auto mb-4">
                Transparent, scalable pricing designed for businesses implementing CRM, ERP systems, automation, and AI-driven workflows.
              </p>
              <p className="text-sm text-[#7A9CC6] mb-10 tracking-wide">
                Global Zoho Premium Partner &nbsp;·&nbsp; 800+ Implementations &nbsp;·&nbsp; 40+ Countries Served
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_40px_rgba(46,168,255,0.3)] border-0">
                  <Link to="/contact">Get Custom Pricing</Link>
                </Button>
                <Button asChild className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
                  <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SECTION 2: PRICING MODEL SELECTOR ═══════════════ */}
        <section className="py-10 bg-[#F4F6F8]">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="inline-flex bg-white border border-[#D1D5DB] rounded-2xl p-1.5 shadow-sm">
                {pricingModels.map((model) => (
                  <button
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeModel === model
                        ? "bg-[#2EA8FF] text-white shadow-lg shadow-[#2EA8FF]/25"
                        : "text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 3: PROJECT-BASED PRICING ═══════════════ */}
        <AnimatePresence mode="wait">
          {activeModel === "Project-Based" && (
            <motion.section
              key="project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F4F6F8]"
            >
              <div className="pb-24">
                <div className="container-custom">
                  {/* Title & Intro */}
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Project-Based Pricing for Zoho, ERP & AI Solutions</h2>
                    <p className="text-[#374151] text-lg">Every business is unique — and so is every system we build. Our pricing is tailored based on your specific workflows, system requirements, and automation goals.</p>
                  </div>

                  {/* How We Define Your Project Cost */}
                  <div className="max-w-5xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">How We Define Your Project Cost</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {projectCostFactors.map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="bg-white border border-[#D1D5DB] rounded-2xl p-5 text-center hover:border-[#2EA8FF]/40 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#2EA8FF]/8 flex items-center justify-center group-hover:bg-[#2EA8FF]/15 transition-colors">
                            <item.icon className="w-6 h-6 text-[#2EA8FF]" />
                          </div>
                          <span className="text-xs font-semibold text-[#374151]">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">What's Included</h3>
                    <div className="bg-white border border-[#D1D5DB] rounded-2xl p-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {projectIncludes.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#2EA8FF]/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3.5 h-3.5 text-[#2EA8FF]" />
                            </div>
                            <span className="text-[#374151] text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Investment Range */}
                  <div className="max-w-4xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">Project Investment Range</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {projectCards.map((card, i) => (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`relative bg-gradient-to-br ${card.color} border border-[#D1D5DB] rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                          <p className="text-sm font-semibold text-[#2EA8FF] mb-2">{card.hours}</p>
                          <h4 className="text-lg font-bold text-[#111827] mb-3">{card.title}</h4>
                          <p className="text-3xl font-bold bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent">{card.price}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Timeline */}
                  <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">Project Timeline</h3>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      {projectTimeline.map((step, i) => (
                        <div key={step.phase} className="flex items-center gap-4 flex-1 w-full">
                          <div className="bg-white border border-[#D1D5DB] rounded-2xl p-6 text-center flex-1 hover:border-[#2EA8FF]/40 transition-colors">
                            <step.icon className="w-8 h-8 text-[#2EA8FF] mx-auto mb-3" />
                            <p className="font-semibold text-[#111827] text-sm">{step.phase}</p>
                            <p className="text-xs text-[#6B7280] mt-1">{step.time}</p>
                          </div>
                          {i < projectTimeline.length - 1 && (
                            <ArrowRight className="w-5 h-5 text-[#D1D5DB] hidden md:block flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Use Cases */}
                  <div className="max-w-3xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">Best Use Cases</h3>
                    <div className="bg-white border border-[#D1D5DB] rounded-2xl p-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {projectUseCases.map((uc) => (
                          <div key={uc} className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-[#2EA8FF] flex-shrink-0" />
                            <span className="text-[#374151] text-sm">{uc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button onClick={() => setSelectedPlan("Project-Based")} className="bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(46,168,255,0.25)] border-0">
                      Request Custom Project Estimate <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ═══════════════ SECTION 4: MONTHLY RETAINER ═══════════════ */}
        <AnimatePresence mode="wait">
          {activeModel === "Monthly Retainer" && (
            <motion.section
              key="retainer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F4F6F8]"
            >
              <div className="pb-24">
                <div className="container-custom">
                  <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Zoho, ERP & AI Growth Plans</h2>
                    <p className="text-[#374151] max-w-2xl mx-auto text-lg">Flexible monthly engagement designed for continuous system improvement, automation, and long-term scalability.</p>
                  </div>

                  {/* Plan Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {retainerPlans.map((plan, i) => (
                      <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative group rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-2 ${
                          plan.highlighted
                            ? "bg-white border-[#2EA8FF]/50 shadow-[0_0_50px_rgba(46,168,255,0.12)] ring-1 ring-[#2EA8FF]/20"
                            : "bg-white border-[#D1D5DB] hover:border-[#2EA8FF]/30 hover:shadow-lg"
                        }`}
                      >
                        {plan.badge && (
                          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                            <Badge className="bg-[#2EA8FF] text-white border-0 px-4 py-1 text-xs font-bold shadow-lg shadow-[#2EA8FF]/30">
                              <Star className="w-3 h-3 mr-1" /> {plan.badge}
                            </Badge>
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-[#111827] mb-1">{plan.name}</h3>
                        <p className="text-sm text-[#6B7280] mb-5">{plan.hours} hours/month</p>
                        <div className="mb-1">
                          {plan.priceRange ? (
                            <span className="text-3xl font-bold text-[#111827]">{plan.priceRange}</span>
                          ) : (
                            <>
                              <span className="text-4xl font-bold text-[#111827]">${plan.price.toLocaleString()}</span>
                              <span className="text-[#6B7280]">/mo</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-[#6B7280] mb-6">~${plan.rate}/hr</p>
                        <div className="space-y-3 mb-8">
                          {plan.features.map((f) => (
                            <div key={f} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-[#2EA8FF] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#374151]">{f}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={() => setSelectedPlan(`${plan.name} – ${plan.hours} hrs/mo`)}
                          className={`w-full rounded-xl py-5 border-0 ${
                            plan.highlighted
                              ? "bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white shadow-lg shadow-[#2EA8FF]/20"
                              : "bg-[#F4F6F8] hover:bg-[#E5E7EB] text-[#111827] border border-[#D1D5DB]"
                          }`}
                        >
                          Choose Plan
                        </Button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enterprise-Level Benefits */}
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#111827] text-center mb-8">Enterprise-Level Benefits</h3>
                    <div className="bg-white border border-[#D1D5DB] rounded-2xl p-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {enterpriseBenefits.map((b) => (
                          <div key={b} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#2EA8FF]/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3.5 h-3.5 text-[#2EA8FF]" />
                            </div>
                            <span className="text-[#374151] text-sm">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ═══════════════ SECTION 5: DEDICATED PARTNER ═══════════════ */}
        <AnimatePresence mode="wait">
          {activeModel === "Dedicated Partner" && (
            <motion.section
              key="partner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#F4F6F8]"
            >
              <div className="pb-24">
                <div className="container-custom">
                  <div className="max-w-3xl mx-auto">
                    <div className="relative bg-white border border-[#2EA8FF]/20 rounded-3xl p-10 md:p-14 shadow-xl shadow-[#2EA8FF]/8 group hover:border-[#2EA8FF]/40 transition-all duration-500">
                      <div className="absolute -top-4 left-8">
                        <Badge className="bg-gradient-to-r from-[#0B1F3A] to-[#0E2A4D] text-white border-0 px-5 py-1.5 text-sm font-bold shadow-lg">
                          <Award className="w-4 h-4 mr-1.5" /> Premium Tier
                        </Badge>
                      </div>
                      <div className="relative z-10 mt-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">Dedicated Zoho, ERP & AI Partner</h2>
                        <p className="text-[#374151] mb-8 max-w-xl text-lg">Your own Zoho architect, strategist, and AI automation specialist — fully embedded in your business operations.</p>
                        <div className="flex items-baseline gap-2 mb-10">
                          <span className="text-5xl font-bold bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent">$3,000</span>
                          <span className="text-2xl text-[#6B7280]">–</span>
                          <span className="text-5xl font-bold bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent">$10,000</span>
                          <span className="text-[#6B7280]">/month</span>
                        </div>
                        <p className="text-sm text-[#6B7280] mb-8">(Based on scope)</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                          {[
                            "Dedicated expert embedded in your team",
                            "End-to-end system ownership",
                            "Weekly strategic planning",
                            "AI transformation roadmap",
                            "Continuous development & optimization",
                            "Business process consulting",
                          ].map((f) => (
                            <div key={f} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#2EA8FF]/10 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3.5 h-3.5 text-[#2EA8FF]" />
                              </div>
                              <span className="text-[#374151]">{f}</span>
                            </div>
                          ))}
                        </div>
                        <Button onClick={() => setSelectedPlan("Dedicated Partner – $3,000–$10,000/mo")} className="bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(46,168,255,0.25)] border-0">
                          Apply for Dedicated Partnership <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ═══════════════ SECTION 6: COST COMPARISON ═══════════════ */}
        <section className="py-24" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0E2A4D 50%, #0B1F3A 100%)" }}>
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See How You Save as You Scale</h2>
              <p className="text-[#B0C4DE]">Long-term engagement = significant savings. Compare your options.</p>
            </div>

            {/* Interactive slider */}
            <div className="max-w-xl mx-auto mb-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[#B0C4DE]">Estimate your monthly hours</span>
                <span className="text-2xl font-bold text-[#2EA8FF]">{hours[0]} hrs</span>
              </div>
              <Slider
                value={hours}
                onValueChange={setHours}
                min={10}
                max={120}
                step={5}
                className="mb-6 [&_[data-radix-slider-track]]:bg-white/10 [&_[data-radix-slider-range]]:bg-gradient-to-r [&_[data-radix-slider-range]]:from-[#2EA8FF] [&_[data-radix-slider-range]]:to-[#00D4FF] [&_[data-radix-slider-thumb]]:bg-[#2EA8FF] [&_[data-radix-slider-thumb]]:border-[#00D4FF]"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-[#7A9CC6] mb-1">Project Rate</p>
                  <p className="text-xl font-bold text-white">${hours[0] * 50}</p>
                </div>
                <div className="bg-[#2EA8FF]/10 border border-[#2EA8FF]/30 rounded-xl p-4">
                  <p className="text-xs text-[#2EA8FF] mb-1">{estimate.plan} Plan</p>
                  <p className="text-xl font-bold text-[#2EA8FF]">${estimate.cost.toLocaleString()}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-xs text-emerald-400 mb-1">You Save</p>
                  <p className="text-xl font-bold text-emerald-400">${(hours[0] * 50 - estimate.cost).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-5 text-[#7A9CC6] font-medium text-sm">Metric</th>
                      <th className="p-5 text-[#7A9CC6] font-medium text-sm text-center">Project-Based</th>
                      <th className="p-5 text-[#2EA8FF] font-medium text-sm text-center bg-[#2EA8FF]/5">Retainer</th>
                      <th className="p-5 text-[#7A9CC6] font-medium text-sm text-center">Dedicated Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0">
                        <td className="p-5 text-white text-sm font-medium">{row.metric}</td>
                        <td className="p-5 text-[#B0C4DE] text-sm text-center">{row.project}</td>
                        <td className="p-5 text-white text-sm text-center font-semibold bg-[#2EA8FF]/5">{row.retainer}</td>
                        <td className="p-5 text-[#B0C4DE] text-sm text-center">{row.partner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm">
                <span className="bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent font-semibold">
                  Save up to 25–30% with long-term engagement
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 7: ROI ═══════════════ */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What You Gain with Zoho, ERP & AI</h2>
              <p className="text-[#374151]">Measurable business outcomes from intelligent automation.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {roiItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-[#D1D5DB] rounded-2xl p-6 text-center hover:border-[#2EA8FF]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#2EA8FF]/8 flex items-center justify-center group-hover:bg-[#2EA8FF]/15 transition-colors">
                    <item.icon className="w-6 h-6 text-[#2EA8FF]" />
                  </div>
                  <p className="text-2xl font-bold text-[#111827] mb-1">
                    {item.value}{item.suffix}
                  </p>
                  <p className="text-xs text-[#6B7280]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 8: DELIVERY PROCESS ═══════════════ */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">How We Deliver Successful Projects</h2>
              <p className="text-[#374151]">A proven, structured approach to every engagement.</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverySteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative bg-[#F8FAFC] border border-[#D1D5DB] rounded-2xl p-6 hover:border-[#2EA8FF]/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="absolute top-4 right-4 text-3xl font-bold text-[#2EA8FF]/10 group-hover:text-[#2EA8FF]/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#2EA8FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#2EA8FF]/15 transition-colors">
                      <step.icon className="w-6 h-6 text-[#2EA8FF]" />
                    </div>
                    <h4 className="font-semibold text-[#111827] mb-1">{step.label}</h4>
                    <p className="text-sm text-[#6B7280]">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 9: REAL USE CASE PRICING ═══════════════ */}
        <section className="py-24 bg-[#F4F6F8]">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Real Project Examples</h2>
              <p className="text-[#374151]">Typical investment ranges based on our past implementations.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {realProjects.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-[#D1D5DB] rounded-2xl p-8 text-center hover:border-[#2EA8FF]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#2EA8FF]/10 flex items-center justify-center group-hover:bg-[#2EA8FF]/15 transition-colors">
                    <proj.icon className="w-7 h-7 text-[#2EA8FF]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#111827] mb-2">{proj.title}</h4>
                  <p className="text-sm text-[#6B7280] mb-4">{proj.desc}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent">{proj.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 10: ADD-ONS ═══════════════ */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Optional Add-ons</h2>
              <p className="text-[#374151]">Extend your ecosystem with specialized solutions.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-2xl overflow-hidden hover:border-[#2EA8FF]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-40 bg-gradient-to-br from-[#2EA8FF]/5 to-[#00D4FF]/5 flex items-center justify-center overflow-hidden">
                    <img src={addon.image} alt={addon.title} className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#111827] font-semibold mb-1">{addon.title}</h3>
                    <p className="text-[#2EA8FF] font-bold text-sm mb-2">{addon.price}</p>
                    <p className="text-[#6B7280] text-xs">{addon.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 11: WHAT DETERMINES PRICING ═══════════════ */}
        <section className="py-24 bg-[#F4F6F8]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What Determines Your Pricing</h2>
                <p className="text-[#374151]">Every project is unique. Our pricing reflects five key dimensions:</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {pricingFactors.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white border border-[#D1D5DB] rounded-2xl p-6 text-center hover:border-[#2EA8FF]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#2EA8FF]/8 flex items-center justify-center group-hover:bg-[#2EA8FF]/15 transition-all">
                      <item.icon className="w-7 h-7 text-[#2EA8FF]" />
                    </div>
                    <span className="text-sm font-semibold text-[#374151]">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 12: FLEXIBLE PRICING MESSAGE ═══════════════ */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0E2A4D 100%)" }}>
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TrendingUp className="w-10 h-10 text-[#00D4FF] mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing That Scales With Your Business</h2>
              <p className="text-[#B0C4DE] text-lg max-w-2xl mx-auto">
                As your requirements grow, your effective hourly investment reduces — ensuring long-term efficiency and better ROI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SECTION 13: FAQ ═══════════════ */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
                <p className="text-[#374151]">Everything you need to know about working with us.</p>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-[#D1D5DB] rounded-2xl px-6 overflow-hidden data-[state=open]:border-[#2EA8FF]/30 transition-colors">
                    <AccordionTrigger className="text-[#111827] font-semibold text-left hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#374151] pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ═══════════════ SECTION 14: FINAL CTA ═══════════════ */}
        <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #0E2A4D 50%, #0B1F3A 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2EA8FF]/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Rocket className="w-12 h-12 text-[#00D4FF] mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Let's Build Your Business System{" "}
                <span className="bg-gradient-to-r from-[#2EA8FF] to-[#00D4FF] bg-clip-text text-transparent">the Right Way</span>
              </h2>
              <p className="text-[#B0C4DE] text-lg mb-10 max-w-2xl mx-auto">
                Get a tailored pricing plan based on your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#2EA8FF] hover:bg-[#1C8DFF] text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_40px_rgba(46,168,255,0.3)] border-0">
                  <Link to="/contact">Get Custom Pricing</Link>
                </Button>
                <Button asChild className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl">
                  <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />

      {/* Plan Form Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <PlanFormModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
