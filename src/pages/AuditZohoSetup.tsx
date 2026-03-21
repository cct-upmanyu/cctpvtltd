import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, BarChart3, Shield, Zap, FileText, TrendingUp,
  AlertTriangle, CheckCircle, XCircle, Database, Users, Workflow,
  Target, Award, Clock, ChevronDown, ChevronUp, Gauge
} from "lucide-react";

const painPoints = [
  { icon: XCircle, title: "CRM Feels Messy & Slow", description: "Cluttered modules, unused fields, and poor data structure slowing your team down." },
  { icon: AlertTriangle, title: "Automation Not Working", description: "Workflows triggering incorrectly or not at all—costing you leads and revenue." },
  { icon: Database, title: "Duplicate & Inconsistent Data", description: "Multiple records for the same contact, conflicting information across modules." },
  { icon: BarChart3, title: "Reports Don't Match Reality", description: "Dashboards showing inaccurate data due to misconfigured fields and filters." },
  { icon: Users, title: "Teams Not Using Zoho Effectively", description: "Low adoption rates because the system doesn't match actual business processes." },
];

const auditTimeline = [
  {
    step: 1, title: "Discovery", days: "Day 1–2", icon: Search,
    details: ["Business understanding & goals mapping", "System access & environment review", "Stakeholder interviews & pain point documentation"],
  },
  {
    step: 2, title: "Deep System Audit", days: "Day 3–5", icon: Workflow,
    details: ["CRM structure & module analysis", "Workflows & automation rule review", "Integration health check across all apps"],
  },
  {
    step: 3, title: "Data & Automation Review", days: "Day 5–7", icon: Database,
    details: ["Duplicate data identification & analysis", "Deluge script & custom function review", "Workflow gap detection & bottleneck mapping"],
  },
  {
    step: 4, title: "Gap Analysis Report", days: "Day 7–9", icon: FileText,
    details: ["Comprehensive issue documentation", "Performance gap quantification", "Risk area identification & severity ranking"],
  },
  {
    step: 5, title: "Optimization Roadmap", days: "Day 10–12", icon: TrendingUp,
    details: ["Prioritized fix plan with timelines", "Automation improvement blueprint", "ROI strategy & expected outcomes"],
  },
];

const auditModules = [
  { title: "Zoho CRM Audit", icon: Target, items: ["Sales pipelines & stages", "Blueprint configurations", "Lead flow & scoring rules", "Custom modules & fields"] },
  { title: "Zoho One Audit", icon: Workflow, items: ["Cross-app integrations", "Data synchronization", "License utilization", "App adoption metrics"] },
  { title: "Automation Audit", icon: Zap, items: ["Workflow rules & triggers", "Deluge scripts & functions", "Scheduled actions", "Email & notification flows"] },
  { title: "Data Audit", icon: Database, items: ["Duplicate record analysis", "Field structure review", "Data completeness scoring", "Import/export health"] },
  { title: "Integration Audit", icon: Shield, items: ["API connection stability", "Third-party tool sync", "Webhook configurations", "Authentication & security"] },
];

const scoreCategories = [
  { name: "CRM Efficiency", color: "#1B90E0" },
  { name: "Automation Level", color: "#22D3EE" },
  { name: "Data Health", color: "#10B981" },
  { name: "Integration Strength", color: "#8B5CF6" },
  { name: "User Adoption", color: "#F59E0B" },
];

const deliverables = [
  "Zoho Audit Report (PDF)",
  "Optimization Roadmap",
  "Data Cleanup Plan",
  "Automation Blueprint",
  "Integration Fix List",
  "ROI Improvement Strategy",
];

const roiMetrics = [
  { label: "Efficiency Increase", value: "30–50%", color: "#1B90E0" },
  { label: "Better Lead Conversion", value: "2–3×", color: "#22D3EE" },
  { label: "Manual Work Reduced", value: "60%+", color: "#10B981" },
  { label: "Reporting Accuracy", value: "95%+", color: "#8B5CF6" },
];

export default function AuditZohoSetup() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zoho Audit Services | Unlock 100% of Your System's Potential | ClubCode Technology</title>
        <meta name="description" content="Comprehensive Zoho CRM audit and optimization services. We audit, optimize, and transform your Zoho ecosystem for maximum ROI. Global Zoho Premium Partner." />
        <meta name="keywords" content="Zoho audit services, Zoho CRM audit, Zoho optimization, Zoho health check, Zoho performance audit" />
        <link rel="canonical" href="https://cctpvtltd.lovable.app/audit-zoho-setup" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 50%, #0B1C3D 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1B90E0]/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-[#22D3EE]/10 text-[#22D3EE] text-sm font-bold rounded-full mb-6 border border-[#22D3EE]/20">
              Zoho Audit Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Zoho Audit Services That Unlock <span className="bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] bg-clip-text text-transparent">100%</span> of Your System's Potential
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-4 max-w-3xl">
              Most businesses use only 30–40% of Zoho. We audit, optimize, and transform your Zoho ecosystem for maximum ROI.
            </p>
            <p className="text-sm text-[#22D3EE]/80 mb-8 font-medium">
              Global Zoho Premium Partner · 830+ Implementations · 40+ Countries Served
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <a href="https://booknow.clubcodetechnology.com/" target="_blank" rel="noopener noreferrer">
                  Get Free Zoho Audit Consultation <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" className="rounded-lg border border-[#22D3EE]/50 bg-transparent text-white hover:bg-[#22D3EE]/10" asChild>
                <Link to="/contact">See Audit Report Sample</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Why Your Zoho Setup Isn't Performing</h2>
            <p className="text-lg text-[#374151]">These common issues are costing your business time, money, and missed opportunities.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-red-100 hover:border-red-200 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <point.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{point.title}</h3>
                <p className="text-[#374151] text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: Before vs After */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Zoho Audit = Clarity + Optimization + Growth</h2>
            <p className="text-lg text-gray-300">We don't just audit—we rebuild your Zoho system strategy.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border border-red-500/30 bg-red-500/5">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle className="w-6 h-6" /> Before Audit</h3>
              <div className="space-y-4">
                {["Messy CRM with unused fields", "Broken automation workflows", "Duplicate & inconsistent data", "Inaccurate reports & dashboards", "Low team adoption rates"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"><CheckCircle className="w-6 h-6" /> After Optimization</h3>
              <div className="space-y-4">
                {["Clean, structured CRM modules", "Fully automated sales pipelines", "De-duplicated, validated data", "Real-time accurate dashboards", "90%+ team adoption achieved"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Step Audit Timeline */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Our 5-Step Zoho Audit Framework</h2>
            <p className="text-lg text-[#374151]">A proven methodology delivering results in 12 business days.</p>
          </motion.div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B90E0] via-[#22D3EE] to-[#10B981]" />
            <div className="grid lg:grid-cols-5 gap-6">
              {auditTimeline.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="relative">
                  <div
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1B90E0]/30 hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] flex items-center justify-center mb-4 mx-auto lg:mx-0 relative z-10">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs font-bold text-[#1B90E0] mb-1">{step.days}</div>
                    <h3 className="text-base font-bold text-[#111827] mb-2">Step {step.step}: {step.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-[#1B90E0]">
                      {expandedStep === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      <span>{expandedStep === i ? "Hide" : "View"} details</span>
                    </div>
                    <AnimatePresence>
                      {expandedStep === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-3">
                          <div className="space-y-2 border-t pt-3">
                            {step.details.map(d => (
                              <div key={d} className="flex items-start gap-2 text-xs text-[#374151]">
                                <CheckCircle className="w-3 h-3 text-[#22D3EE] flex-shrink-0 mt-0.5" />{d}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Audit - Modules */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Zoho Ecosystem Audit</h2>
            <p className="text-lg text-gray-300">Every corner of your Zoho setup, thoroughly examined.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditModules.map((mod, i) => (
              <motion.div key={mod.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-[#22D3EE]/20 bg-white/5 hover:bg-white/10 hover:border-[#22D3EE]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center mb-4 group-hover:bg-[#22D3EE]/20 transition-colors">
                  <mod.icon className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{mod.title}</h3>
                <div className="space-y-2">
                  {mod.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />{item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Scorecard */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Get Your Zoho Performance Score</h2>
              <p className="text-lg text-[#374151] mb-8">We rate your system across 5 critical dimensions, giving you a clear picture of where you stand and what needs improvement.</p>
              <Button variant="heroPrimary" size="lg" asChild>
                <a href="https://booknow.clubcodetechnology.com/" target="_blank" rel="noopener noreferrer">
                  Get Your Score <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <Gauge className="w-8 h-8 text-[#1B90E0]" />
                <h3 className="text-xl font-bold text-[#111827]">Zoho Health Scorecard</h3>
              </div>
              <div className="space-y-5">
                {scoreCategories.map((cat, i) => (
                  <motion.div key={cat.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#111827]">{cat.name}</span>
                      <span className="text-sm font-bold" style={{ color: cat.color }}>/ 10</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${40 + Math.random() * 30}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-[#374151] mt-6 italic">* Sample scores shown. Your actual audit will provide precise ratings.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get After the Audit</h2>
            <p className="text-lg text-gray-300">Actionable deliverables, not generic advice.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl p-6 border border-[#22D3EE]/20 bg-white/5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Impact */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Expected Results After Optimization</h2>
            <p className="text-lg text-[#374151]">Measurable improvements backed by 830+ implementations.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, i) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: metric.color }}>{metric.value}</div>
                <p className="text-[#374151] font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Zoho Transformations</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { company: "Manufacturing Firm", before: "Broken workflows, 40% feature usage, manual data entry", after: "95% automation, clean data, 3× lead conversion" },
              { company: "SaaS Company", before: "Disconnected apps, duplicate contacts, no reporting", after: "Unified ecosystem, real-time dashboards, 50% time saved" },
            ].map((cs, i) => (
              <motion.div key={cs.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-[#22D3EE]/20 overflow-hidden">
                <div className="p-6 bg-red-500/10 border-b border-[#22D3EE]/20">
                  <div className="text-xs font-bold text-red-400 mb-2">BEFORE</div>
                  <p className="text-gray-300 text-sm">{cs.before}</p>
                </div>
                <div className="p-6 bg-emerald-500/10">
                  <div className="text-xs font-bold text-emerald-400 mb-2">AFTER</div>
                  <p className="text-gray-300 text-sm">{cs.after}</p>
                </div>
                <div className="px-6 py-3 bg-white/5">
                  <span className="text-xs text-[#22D3EE] font-medium">{cs.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #0D2B5E 50%, #0B1C3D 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B90E0]/10 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Wasting Your Zoho Investment</h2>
            <p className="text-lg text-gray-300 mb-8">Let's fix your system and unlock its full potential. Book a free audit consultation today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <a href="https://booknow.clubcodetechnology.com/" target="_blank" rel="noopener noreferrer">
                  Book Zoho Audit Call <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" className="rounded-lg border border-[#22D3EE]/50 bg-transparent text-white hover:bg-[#22D3EE]/10" asChild>
                <Link to="/contact">Get Audit Report Sample</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}