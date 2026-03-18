import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Check, Zap, TrendingUp, DollarSign, Clock, Shield,
  Bot, Code, BarChart3, Plug, Star, ArrowRight,
  Users, Rocket, Award, Layers, Target, Cpu,
  ChevronRight, Globe, Sparkles
} from "lucide-react";

const pricingModels = ["Project-Based", "Monthly Retainer", "Dedicated Partner"] as const;
type PricingModel = typeof pricingModels[number];

const retainerPlans = [
  {
    name: "Starter",
    hours: 10,
    price: 400,
    rate: 40,
    features: ["Monthly hours rollover", "Email support", "Basic optimizations", "Bug fixes & updates"],
    highlighted: false,
  },
  {
    name: "Growth",
    hours: 25,
    price: 950,
    rate: 38,
    features: ["Monthly hours rollover", "Priority support", "Continuous optimization", "AI workflow implementation", "Weekly progress reports"],
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Scale",
    hours: 50,
    price: 1700,
    rate: 34,
    features: ["Monthly hours rollover", "Priority support", "Continuous optimization", "AI workflow implementation", "Bi-weekly strategy calls", "Dedicated project manager"],
    highlighted: false,
  },
  {
    name: "Enterprise",
    hours: 100,
    price: 3200,
    rate: 32,
    features: ["Monthly hours rollover", "24/7 priority support", "Continuous optimization", "AI workflow implementation", "Weekly strategy calls", "Dedicated architect", "Custom SLA"],
    highlighted: false,
  },
];

const addOns = [
  { icon: Bot, title: "AI Chatbot Setup", price: "$500 – $2,000", desc: "Custom AI chatbot for sales, support, or internal use" },
  { icon: Code, title: "Zoho Creator Apps", price: "$800 – $5,000", desc: "Custom low-code applications built on Zoho Creator" },
  { icon: Plug, title: "API Integrations", price: "$300 – $2,500", desc: "Third-party API connections and data sync" },
  { icon: BarChart3, title: "Analytics Dashboards", price: "$400 – $2,000", desc: "Custom reporting and BI dashboards" },
];

const roiItems = [
  { icon: Clock, value: "20–40", suffix: "hrs/month", label: "Time Saved" },
  { icon: DollarSign, value: "30–50", suffix: "%", label: "Software Cost Reduction" },
  { icon: TrendingUp, value: "2–3×", suffix: "", label: "Sales Conversion Lift" },
  { icon: Zap, value: "80", suffix: "%", label: "Manual Work Eliminated" },
  { icon: Users, value: "0", suffix: " extra hires", label: "Scale Without Hiring" },
];

const comparisonData = [
  { metric: "Effective Hourly Rate", project: "$40/hr", retainer: "From $32/hr", partner: "Custom" },
  { metric: "80-Hour Cost", project: "$3,200", retainer: "$2,560", partner: "Included" },
  { metric: "Priority Level", project: "Standard", retainer: "High", partner: "VIP" },
  { metric: "Support Speed", project: "48 hrs", retainer: "12 hrs", partner: "4 hrs" },
  { metric: "Strategy Calls", project: "On request", retainer: "Weekly", partner: "Unlimited" },
  { metric: "AI Roadmap", project: "–", retainer: "Basic", partner: "Full" },
];

const pricingLogic = [
  { icon: Layers, label: "Business Complexity" },
  { icon: Cpu, label: "Number of Apps" },
  { icon: Plug, label: "Integrations Required" },
  { icon: Sparkles, label: "AI Scope" },
  { icon: Clock, label: "Timeline Urgency" },
];

const projectFeatures = [
  { icon: Target, label: "CRM Setup" },
  { icon: Zap, label: "Automation" },
  { icon: ArrowRight, label: "Migration" },
  { icon: Code, label: "Custom Workflows" },
];

export default function Pricing() {
  const [activeModel, setActiveModel] = useState<PricingModel>("Monthly Retainer");
  const [hours, setHours] = useState([50]);

  const getEstimate = (h: number) => {
    if (h <= 10) return { plan: "Starter", cost: 400, rate: 40 };
    if (h <= 25) return { plan: "Growth", cost: 900, rate: 36 };
    if (h <= 50) return { plan: "Scale", cost: 1600, rate: 32 };
    return { plan: "Enterprise", cost: Math.round(h * 28), rate: 28 };
  };

  const estimate = getEstimate(hours[0]);

  return (
    <>
      <Helmet>
        <title>Zoho Implementation Pricing | Zoho Partner Pricing | ClubCode Technology</title>
        <meta name="description" content="Transparent Zoho One pricing, CRM implementation cost, and AI automation pricing. Global Zoho Premium Partner with flexible project-based and retainer plans." />
        <meta name="keywords" content="Zoho pricing, Zoho implementation cost, Zoho partner pricing USA, Zoho One pricing, Zoho CRM implementation cost, AI automation pricing" />
        <link rel="canonical" href="https://cctpvtltd.lovable.app/pricing" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0F]">

        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-1.5">
                <Globe className="w-3.5 h-3.5 mr-1.5" /> Transparent Pricing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Flexible Pricing for{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Zoho One & AI Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                Transparent, scalable pricing designed for businesses implementing Zoho One, automation, and AI-driven workflows.
              </p>
              <p className="text-sm text-gray-500 mb-10">
                Global Zoho Premium Partner · 800+ Implementations · 40+ Countries Served
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <Link to="/contact">Get Custom Pricing</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5 px-8 py-6 text-lg rounded-xl">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ SECTION 2: PRICING MODEL TOGGLE ═══ */}
        <section className="py-4">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="inline-flex bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-sm">
                {pricingModels.map((model) => (
                  <button
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeModel === model
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: PROJECT-BASED PRICING ═══ */}
        <motion.section
          initial={false}
          animate={{ height: activeModel === "Project-Based" ? "auto" : 0, opacity: activeModel === "Project-Based" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="py-20">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500 group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-2">One-Time Implementation Projects</h2>
                    <p className="text-gray-400 mb-8">Fixed scope, timeline-based execution. Ideal for CRM setup, Zoho One implementations, and migrations.</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">$1,200</span>
                      <span className="text-2xl text-gray-500">–</span>
                      <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">$8,000+</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-10">Based on 30–200 hours @ $40/hr</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                      {projectFeatures.map((f) => (
                        <div key={f.label} className="flex items-center gap-2.5 bg-white/5 rounded-xl px-4 py-3">
                          <f.icon className="w-5 h-5 text-orange-400" />
                          <span className="text-sm text-gray-300">{f.label}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-6 text-lg rounded-xl">
                      <Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ SECTION 4: MONTHLY RETAINER ═══ */}
        <motion.section
          initial={false}
          animate={{ height: activeModel === "Monthly Retainer" ? "auto" : 0, opacity: activeModel === "Monthly Retainer" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="py-20">
            <div className="container-custom">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zoho One Growth Plans</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Ongoing support and optimization with predictable monthly pricing. Scale your Zoho ecosystem with dedicated expertise.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {retainerPlans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative group rounded-2xl border backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-2 ${
                      plan.highlighted
                        ? "bg-gradient-to-br from-orange-500/10 to-amber-500/5 border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                        : "bg-white/[0.04] border-white/10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 px-4 py-1 text-xs font-bold shadow-lg shadow-orange-500/30">
                          <Star className="w-3 h-3 mr-1" /> {plan.badge}
                        </Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-5">{plan.hours} hours/month</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-6">Effective rate: ${plan.rate}/hr</p>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className={`w-full rounded-xl py-5 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    }`}>
                      <Link to="/contact">Choose Plan</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ SECTION 5: DEDICATED PARTNER ═══ */}
        <motion.section
          initial={false}
          animate={{ height: activeModel === "Dedicated Partner" ? "auto" : 0, opacity: activeModel === "Dedicated Partner" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="py-20">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-orange-500/10 via-white/[0.04] to-cyan-500/5 border border-orange-500/20 rounded-3xl p-10 md:p-14 backdrop-blur-sm group hover:border-orange-500/40 transition-all duration-500">
                  <div className="absolute -top-4 left-8">
                    <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 px-5 py-1.5 text-sm font-bold shadow-lg shadow-orange-500/30">
                      <Award className="w-4 h-4 mr-1.5" /> Premium Tier
                    </Badge>
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 mt-4">Dedicated Zoho + AI Partner</h2>
                    <p className="text-gray-400 mb-8 max-w-xl">Your own Zoho architect, strategist, and AI automation specialist — fully embedded in your business operations.</p>
                    <div className="flex items-baseline gap-2 mb-10">
                      <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">$3,000</span>
                      <span className="text-2xl text-gray-500">–</span>
                      <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">$10,000</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {[
                        "Dedicated Zoho Architect",
                        "Weekly strategy calls",
                        "AI automation roadmap",
                        "Full system ownership",
                        "Continuous business optimization",
                        "Custom SLA & priority queue",
                      ].map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-orange-400" />
                          </div>
                          <span className="text-gray-300">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                      <Link to="/contact">Become a Priority Client <ChevronRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ SECTION 6: COST COMPARISON ═══ */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See How You Save Over Time</h2>
              <p className="text-gray-400">Long-term engagement = significant savings. Compare your options.</p>
            </div>

            {/* Interactive slider */}
            <div className="max-w-xl mx-auto mb-14 bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Estimate your monthly hours</span>
                <span className="text-2xl font-bold text-orange-400">{hours[0]} hrs</span>
              </div>
              <Slider
                value={hours}
                onValueChange={setHours}
                min={10}
                max={120}
                step={5}
                className="mb-6 [&_[data-radix-slider-track]]:bg-white/10 [&_[data-radix-slider-range]]:bg-gradient-to-r [&_[data-radix-slider-range]]:from-orange-500 [&_[data-radix-slider-range]]:to-amber-500 [&_[data-radix-slider-thumb]]:bg-orange-500 [&_[data-radix-slider-thumb]]:border-orange-400"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Project Rate</p>
                  <p className="text-xl font-bold text-white">${hours[0] * 40}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <p className="text-xs text-orange-400 mb-1">{estimate.plan} Plan</p>
                  <p className="text-xl font-bold text-orange-400">${estimate.cost.toLocaleString()}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-xs text-green-400 mb-1">You Save</p>
                  <p className="text-xl font-bold text-green-400">${(hours[0] * 40 - estimate.cost).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-5 text-gray-400 font-medium text-sm">Metric</th>
                      <th className="p-5 text-gray-400 font-medium text-sm text-center">Project-Based</th>
                      <th className="p-5 text-orange-400 font-medium text-sm text-center bg-orange-500/5">Retainer</th>
                      <th className="p-5 text-gray-400 font-medium text-sm text-center">Premium Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0">
                        <td className="p-5 text-gray-300 text-sm font-medium">{row.metric}</td>
                        <td className="p-5 text-gray-400 text-sm text-center">{row.project}</td>
                        <td className="p-5 text-white text-sm text-center font-semibold bg-orange-500/5">{row.retainer}</td>
                        <td className="p-5 text-gray-400 text-sm text-center">{row.partner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold">
                  Save up to 30% with long-term engagement
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 7: ROI ═══ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent" />
          <div className="container-custom relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Gain with Zoho One + AI</h2>
              <p className="text-gray-400">Measurable business outcomes from intelligent automation.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {roiItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {item.value}{item.suffix}
                  </p>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 8: ADD-ONS ═══ */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Optional Add-ons</h2>
              <p className="text-gray-400">Extend your Zoho ecosystem with specialized solutions.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {addOns.map((addon, i) => (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(63,224,240,0.08)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <addon.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{addon.title}</h3>
                  <p className="text-orange-400 font-bold text-sm mb-2">{addon.price}</p>
                  <p className="text-gray-500 text-xs">{addon.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 9: PRICING LOGIC ═══ */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Price Our Projects</h2>
              <p className="text-gray-400 mb-12">Every project is unique. Our pricing is based on five key factors:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {pricingLogic.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-6 py-3">
                    <item.icon className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 10: FINAL CTA ═══ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
          </div>
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Let's Build Your Zoho Ecosystem{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">the Right Way</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Get a tailored pricing plan based on your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <Link to="/contact">Get Custom Pricing</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5 px-10 py-6 text-lg rounded-xl">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
