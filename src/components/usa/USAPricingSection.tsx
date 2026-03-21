import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Check, Star, ArrowRight, Award, Clock, Layers, Cpu,
  Sparkles, Plug, Settings, ChevronRight,
  CalendarCheck, UserCheck, Gauge, RefreshCw, Brain,
  Network, GraduationCap, Building2, Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pricingModels = ["Project-Based", "Monthly Retainer", "Dedicated Partner"] as const;
type PricingModel = typeof pricingModels[number];

const projectPackages = [
  {
    name: "Starter",
    hours: "10–30 Hours",
    price: "$500 – $1,500",
    desc: "Best for quick wins, system fixes, and small-scale automation",
    features: [
      "Zoho CRM or single-app setup configured to your business workflow",
      "Basic automation to eliminate repetitive manual tasks",
      "Standard field customization and layout optimization",
      "Email-based support for quick iterations",
      "One structured revision cycle for refinements",
    ],
    phases: ["Discovery & Requirement Mapping", "Implementation & Configuration", "Go-Live Deployment"],
    timeline: "1–2 Weeks",
  },
  {
    name: "Professional",
    hours: "30–100 Hours",
    price: "$1,500 – $5,000",
    desc: "Ideal for growing businesses scaling CRM, ERP & automation systems",
    highlighted: true,
    badge: "MOST POPULAR",
    features: [
      "Multi-application Zoho ecosystem setup (CRM + Books + Desk, etc.)",
      "Advanced workflow automation across departments",
      "Custom modules, fields, and business logic implementation",
      "Third-party integrations (payment gateways, APIs, external tools)",
      "Hands-on user training sessions for team adoption",
      "Two structured revision cycles for optimization",
      "30-day post-launch support for stability and improvements",
    ],
    phases: ["Discovery & Process Analysis", "System Architecture Design", "Core Build & Configuration", "Testing & Quality Assurance", "Go-Live & User Enablement"],
    timeline: "2–6 Weeks",
  },
  {
    name: "Enterprise",
    hours: "100–250+ Hours",
    price: "$5,000 – $12,500+",
    desc: "Built for complex ERP systems, AI automation, and multi-department operations",
    features: [
      "Full-scale Zoho ERP & CRM ecosystem implementation",
      "AI-powered automation for operations, sales, and workflows",
      "Advanced multi-system integrations across your tech stack",
      "Custom application development using Zoho & low-code platforms",
      "Cross-department workflow orchestration and process mapping",
      "Advanced analytics dashboards for real-time business insights",
      "Dedicated project manager for end-to-end execution",
      "Three structured revision cycles for precision delivery",
      "60-day post-launch support for continuous optimization",
    ],
    phases: ["Discovery & Business Analysis", "Solution Architecture & Planning", "Phase 1 System Build", "Phase 2 Advanced Development", "Testing & Validation", "Go-Live Deployment", "Optimization & Scaling"],
    timeline: "6–12 Weeks",
  },
];

const projectCostFactors = [
  { icon: Layers, label: "Business Process Complexity" },
  { icon: Cpu, label: "Number of Applications" },
  { icon: Sparkles, label: "Automation & AI Scope" },
  { icon: Plug, label: "Integration Requirements" },
  { icon: Settings, label: "Customization Level" },
  { icon: Clock, label: "Timeline & Urgency" },
];

const retainerTiers = [
  { name: "Starter", hours: 5, desc: "Ongoing maintenance, minor fixes & quick system tweaks", subtitle: "Ideal for lean teams with periodic needs" },
  { name: "Growth", hours: 10, desc: "Regular feature builds, workflow upgrades & proactive support", subtitle: "Where most scaling businesses start", badge: "Most Popular" },
  { name: "Professional", hours: 20, desc: "Continuous development, multi-app optimization & deep customization", subtitle: "Best value per hour — built for momentum" },
  { name: "Enterprise", hours: 40, desc: "Near-dedicated resource for complex, always-evolving ecosystems", subtitle: "Maximum output, lowest effective rate" },
];

const rateFactors = [
  { icon: Cpu, title: "Technical Depth", desc: "Basic configuration vs. advanced Deluge scripting & custom builds" },
  { icon: Clock, title: "Hours Committed", desc: "Larger monthly buckets unlock significantly lower per-hour rates" },
  { icon: Zap, title: "Turnaround Speed", desc: "Standard delivery vs. same-day priority execution" },
  { icon: Network, title: "Integration Scope", desc: "Single app sync vs. multi-API orchestration across your stack" },
  { icon: GraduationCap, title: "Training & Enablement", desc: "Self-serve documentation vs. live team workshops" },
  { icon: Building2, title: "Ecosystem Breadth", desc: "Standalone app support vs. full Zoho One ecosystem management" },
];

const partnerBenefits = [
  { icon: CalendarCheck, title: "Weekly Strategy Meetings", desc: "Regular touchpoints to review progress, plan upcoming work, and align on priorities." },
  { icon: UserCheck, title: "Dedicated Senior Resources", desc: "Direct access to Jesus Sosa and our top senior developers. No junior handoffs." },
  { icon: Gauge, title: "Top Priority Status", desc: "Your requests jump to the front of the queue. 24-hour response time guaranteed." },
  { icon: RefreshCw, title: "Continuous Development", desc: "Constant building, improving, and iterating as fast as your business evolves." },
  { icon: Brain, title: "Strategic Consulting", desc: "Beyond execution — we help you plan, strategize, and make technology decisions." },
];

const investmentFactors = [
  { label: "Dedicated Hours", desc: "Weekly/monthly time commitment" },
  { label: "Scope of Work", desc: "Breadth of ongoing projects" },
  { label: "Complexity Level", desc: "Technical requirements" },
  { label: "Resource Allocation", desc: "Team members assigned" },
  { label: "Meeting Frequency", desc: "Weekly vs. bi-weekly sync" },
];

function GradientButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 font-semibold rounded-lg bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,144,224,0.3)] hover:brightness-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function GradientOutlineButton({ children, className = "", variant = "light", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 font-semibold rounded-lg border transition-all duration-300 ${
        variant === "dark"
          ? "border-[#22D3EE]/50 text-white hover:border-[#22D3EE] hover:bg-[#22D3EE]/5"
          : "border-[#CBD5E0] text-[#111827] hover:border-[#22D3EE] hover:bg-[#1B90E0]/5"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function USAPricingSection() {
  const [activeModel, setActiveModel] = useState<PricingModel>("Project-Based");

  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #F4F6F8 0%, #FFFFFF 50%, #F4F6F8 100%)" }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-[#1B90E0]/5 border border-[#1B90E0]/20">
            <Sparkles className="w-4 h-4 text-[#1B90E0]" />
            <span className="text-[#1B90E0] text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Flexible Pricing for US Businesses
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Scalable pricing designed for businesses implementing CRM, ERP systems, automation, and AI-driven workflows.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-[#D1D5DB] rounded-xl p-1.5 shadow-sm">
            {pricingModels.map((model) => (
              <button
                key={model}
                onClick={() => setActiveModel(model)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeModel === model
                    ? "bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white shadow-md"
                    : "text-[#6B7280] hover:text-[#111827]"
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        {/* ── PROJECT-BASED ── */}
        <AnimatePresence mode="wait">
          {activeModel === "Project-Based" && (
            <motion.div key="project" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="max-w-3xl mx-auto text-center mb-6">
                <h3 className="text-2xl font-bold text-[#111827] mb-3">Project Sample Packages</h3>
                <p className="text-[#374151]">Every project is priced based on <strong>working hours</strong>. We divide costs into <strong>phases & milestones</strong> — transparent, predictable, and collaborative.</p>
              </div>

              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-gradient-to-r from-[#1B90E0]/5 via-[hsl(190,85%,50%)]/5 to-[#1B90E0]/5 border border-[#1B90E0]/20 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B90E0]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#1B90E0]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#111827]">How We Price Projects</h4>
                  </div>
                  <p className="text-[#374151] text-sm">We estimate total hours → define milestones → split cost per phase. You approve each phase before we proceed. No surprises.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-14 max-w-6xl mx-auto items-start">
                {projectPackages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className={`relative rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                      pkg.highlighted
                        ? "bg-white border-[#1B90E0]/40 shadow-[0_0_50px_rgba(46,168,255,0.12)] ring-1 ring-[#1B90E0]/20"
                        : "bg-white border-[#D1D5DB] hover:border-[#1B90E0]/30 hover:shadow-lg"
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white border-0 px-4 py-1 text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 mr-1" /> {pkg.badge}
                        </Badge>
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-[#111827] mb-1">{pkg.name}</h4>
                    <p className="text-sm text-[#6B7280] mb-3">{pkg.desc}</p>
                    <p className="text-xs text-[#1B90E0] font-medium mb-1">{pkg.hours}</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] bg-clip-text text-transparent mb-1">{pkg.price}</p>
                    <p className="text-xs text-[#6B7280] mb-5">Timeline: {pkg.timeline}</p>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-3">What You Get</p>
                      <div className="space-y-2.5">
                        {pkg.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#1B90E0] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-[#374151]">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-semibold text-[#111827] uppercase tracking-wider mb-3">Delivery Phases</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.phases.map((phase, pi) => (
                          <span key={phase} className="inline-flex items-center gap-1 text-xs bg-[#1B90E0]/5 text-[#1B90E0] px-3 py-1.5 rounded-full border border-[#1B90E0]/15">
                            <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white flex items-center justify-center text-[9px] font-bold">{pi + 1}</span>
                            {phase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/pricing">
                      <GradientButton className="w-full py-4 text-sm">
                        Get Project Estimate <ArrowRight className="w-4 h-4" />
                      </GradientButton>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-5xl mx-auto mb-10">
                <h4 className="text-xl font-bold text-[#111827] text-center mb-8">How We Define Your Project Cost</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {projectCostFactors.map((item, i) => (
                    <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      className="bg-white border border-[#D1D5DB] rounded-2xl p-5 text-center hover:border-[#1B90E0]/40 hover:shadow-lg transition-all duration-300 group">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1B90E0]/8 flex items-center justify-center group-hover:bg-[#1B90E0]/15 transition-colors">
                        <item.icon className="w-6 h-6 text-[#1B90E0]" />
                      </div>
                      <span className="text-xs font-semibold text-[#374151]">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MONTHLY RETAINER ── */}
        <AnimatePresence mode="wait">
          {activeModel === "Monthly Retainer" && (
            <motion.div key="retainer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#111827] mb-3">Flexible Monthly Retainer Plans</h3>
                <p className="text-[#374151] max-w-3xl mx-auto">Lock in discounted hourly rates with a monthly commitment. Unused hours roll over — so nothing goes to waste.</p>
              </div>

              <div className="max-w-md mx-auto mb-12">
                <div className="bg-gradient-to-r from-[#1B90E0]/5 via-[hsl(190,85%,50%)]/5 to-[#1B90E0]/5 border border-[#1B90E0]/20 rounded-2xl p-8 text-center">
                  <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Hourly Rate Range</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] bg-clip-text text-transparent mb-3">$40 – $80<span className="text-lg text-[#6B7280]">/hour</span></p>
                  <p className="text-sm text-[#6B7280]">Higher commitment = lower rate.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto items-start">
                {retainerTiers.map((tier, i) => (
                  <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className={`relative rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-2 ${
                      tier.badge ? "bg-white border-[#1B90E0]/40 shadow-[0_0_50px_rgba(46,168,255,0.12)] ring-1 ring-[#1B90E0]/20" : "bg-white border-[#D1D5DB] hover:border-[#1B90E0]/30 hover:shadow-lg"
                    }`}>
                    {tier.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <Badge className="bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white border-0 px-4 py-1 text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 mr-1" /> {tier.badge}
                        </Badge>
                      </div>
                    )}
                    <div className={`rounded-lg px-4 py-1.5 mb-4 text-center ${tier.badge ? "bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] text-white" : "bg-[#F0F7FF] text-[#1B90E0]"}`}>
                      <h4 className="text-sm font-bold">{tier.name}</h4>
                    </div>
                    <p className="text-center mb-3">
                      <span className="text-2xl font-bold text-[#111827]">{tier.hours}</span>
                      <span className="text-sm text-[#6B7280] ml-1">hrs/month</span>
                    </p>
                    <p className="text-sm text-[#374151] text-center mb-2">{tier.desc}</p>
                    <p className="text-xs text-[#6B7280] text-center italic">{tier.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-5xl mx-auto mb-10">
                <h4 className="text-xl font-bold text-[#111827] text-center mb-3">What Drives Your Hourly Rate</h4>
                <p className="text-sm text-[#6B7280] text-center mb-8 max-w-2xl mx-auto">Six factors shape your custom rate — understanding them helps you optimize your investment.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rateFactors.map((factor, i) => (
                    <motion.div key={factor.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="bg-white border border-[#D1D5DB] rounded-2xl p-6 hover:border-[#1B90E0]/30 hover:shadow-lg transition-all duration-300 group">
                      <div className="w-11 h-11 rounded-xl bg-[#1B90E0]/8 flex items-center justify-center mb-3 group-hover:bg-[#1B90E0]/15 transition-colors">
                        <factor.icon className="w-5 h-5 text-[#1B90E0]" />
                      </div>
                      <h5 className="font-semibold text-[#111827] mb-1 text-sm">{factor.title}</h5>
                      <p className="text-xs text-[#6B7280]">{factor.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── DEDICATED PARTNER ── */}
        <AnimatePresence mode="wait">
          {activeModel === "Dedicated Partner" && (
            <motion.div key="partner" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="max-w-3xl mx-auto mb-14">
                <div className="relative bg-white border border-[#1B90E0]/20 rounded-3xl p-10 md:p-14 shadow-xl shadow-[#1B90E0]/8 hover:border-[#1B90E0]/40 transition-all duration-500">
                  <div className="absolute -top-4 left-8">
                    <Badge className="bg-gradient-to-r from-[#0B1F3A] to-[#0E2A4D] text-white border-0 px-5 py-1.5 text-sm font-bold shadow-lg">
                      <Award className="w-4 h-4 mr-1.5" /> Premium Tier
                    </Badge>
                  </div>
                  <div className="relative z-10 mt-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">Dedicated Zoho, ERP & AI Partner</h3>
                    <p className="text-[#374151] mb-8 max-w-xl text-lg">Your own Zoho architect, strategist, and AI automation specialist — fully embedded in your business.</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] bg-clip-text text-transparent">$3,000</span>
                      <span className="text-2xl text-[#6B7280]">–</span>
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] bg-clip-text text-transparent">$8,000</span>
                      <span className="text-[#6B7280]">/month</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-8">(Based on scope & commitment)</p>
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
                          <div className="w-6 h-6 rounded-full bg-[#1B90E0]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-[#1B90E0]" />
                          </div>
                          <span className="text-[#374151]">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-5xl mx-auto mb-14">
                <h4 className="text-xl font-bold text-[#111827] text-center mb-10">What You Get as a Dedicated Partner</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerBenefits.map((benefit, i) => (
                    <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="bg-white border border-[#D1D5DB] rounded-2xl p-7 hover:border-[#1B90E0]/30 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-[#1B90E0]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B90E0]/20 transition-colors">
                        <benefit.icon className="w-6 h-6 text-[#1B90E0]" />
                      </div>
                      <h5 className="font-bold text-[#111827] mb-2">{benefit.title}</h5>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-[#111827] text-center mb-8">Investment Based On</h4>
                <div className="bg-white border border-[#D1D5DB] rounded-2xl p-8">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {investmentFactors.map((factor, i) => (
                      <motion.div key={factor.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1B90E0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-[#1B90E0]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#111827] text-sm">{factor.label}</p>
                          <p className="text-xs text-[#6B7280]">{factor.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA to Pricing Page */}
        <div className="text-center mt-14">
          <Link to="/pricing">
            <GradientButton className="px-10 py-5 text-lg">
              Contact for Pricing <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
