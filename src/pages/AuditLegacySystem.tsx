import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Search, BarChart3, Shield, Zap, FileText, TrendingUp,
  AlertTriangle, CheckCircle, XCircle, Database, Server, HardDrive,
  Target, Clock, ChevronDown, ChevronUp, Gauge, Bug, Lock, Workflow
} from "lucide-react";

const legacyPainPoints = [
  { icon: Bug, title: "Frequent System Crashes", description: "Outdated infrastructure causing downtime, data loss, and frustrated teams." },
  { icon: Lock, title: "Security Vulnerabilities", description: "End-of-life software with unpatched vulnerabilities exposing your business to threats." },
  { icon: HardDrive, title: "Expensive Maintenance", description: "Rising costs to maintain aging hardware and software with diminishing vendor support." },
  { icon: XCircle, title: "No Integration Capability", description: "Siloed systems that can't connect with modern tools, APIs, or cloud platforms." },
  { icon: AlertTriangle, title: "Compliance Risks", description: "Legacy systems failing to meet modern regulatory and data protection standards." },
];

const auditTimeline = [
  {
    step: 1, title: "System Discovery", days: "Day 1–3", icon: Search,
    details: ["Complete technology stack inventory", "Infrastructure mapping & documentation", "Stakeholder & user interviews"],
  },
  {
    step: 2, title: "Technical Assessment", days: "Day 3–6", icon: Server,
    details: ["Code quality & architecture review", "Database structure & performance analysis", "Security vulnerability scanning"],
  },
  {
    step: 3, title: "Integration & Data Audit", days: "Day 6–9", icon: Database,
    details: ["Data flow mapping across systems", "API & integration point analysis", "Data quality & redundancy check"],
  },
  {
    step: 4, title: "Risk & Gap Analysis", days: "Day 9–12", icon: Shield,
    details: ["Business continuity risk assessment", "Compliance gap identification", "Total cost of ownership analysis"],
  },
  {
    step: 5, title: "Migration Roadmap", days: "Day 12–15", icon: TrendingUp,
    details: ["Platform recommendation (Zoho, Cloud, Hybrid)", "Phased migration plan with zero downtime", "ROI projection & timeline"],
  },
];

const auditAreas = [
  { title: "Infrastructure Audit", icon: Server, items: ["Server & hosting analysis", "Network architecture review", "Storage & backup assessment", "Uptime & reliability metrics"] },
  { title: "Application Audit", icon: Workflow, items: ["Custom app code review", "Framework & dependency analysis", "Performance bottleneck detection", "User experience evaluation"] },
  { title: "Database Audit", icon: Database, items: ["Schema & structure analysis", "Query performance profiling", "Data integrity validation", "Backup & recovery testing"] },
  { title: "Security Audit", icon: Lock, items: ["Vulnerability assessment", "Access control review", "Encryption & compliance check", "Penetration test findings"] },
  { title: "Integration Audit", icon: Zap, items: ["API endpoint mapping", "Data sync reliability", "Third-party dependency risks", "Middleware assessment"] },
];

const deliverables = [
  "Legacy System Audit Report (PDF)",
  "Technology Stack Assessment",
  "Security Vulnerability Report",
  "Data Migration Blueprint",
  "Modernization Roadmap",
  "ROI & Cost Savings Projection",
];

const roiMetrics = [
  { label: "Infrastructure Cost Reduction", value: "40–60%", color: "#1B90E0" },
  { label: "System Uptime Improvement", value: "99.9%", color: "#22D3EE" },
  { label: "Productivity Increase", value: "35%+", color: "#10B981" },
  { label: "Security Incidents Reduced", value: "90%+", color: "#8B5CF6" },
];

export default function AuditLegacySystem() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Legacy System Audit | Modernize Your Business Technology | ClubCode Technology</title>
        <meta name="description" content="Comprehensive legacy system audit and modernization roadmap. Identify risks, inefficiencies, and get a clear migration plan to modern platforms like Zoho." />
        <meta name="keywords" content="legacy system audit, system modernization, technology assessment, legacy migration, digital transformation audit" />
        <link rel="canonical" href="https://cctpvtltd.lovable.app/audit-legacy-system" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 50%, #0B1C3D 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1B90E0]/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-[#22D3EE]/10 text-[#22D3EE] text-sm font-bold rounded-full mb-6 border border-[#22D3EE]/20">
              Legacy System Audit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Legacy System Is <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Costing You More</span> Than You Think
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-4 max-w-3xl">
              Comprehensive assessment of your existing systems—identifying risks, inefficiencies, and building a clear roadmap to modern platforms.
            </p>
            <p className="text-sm text-[#22D3EE]/80 mb-8 font-medium">
              12+ Years Experience · 4000+ Global Implementations · Zero-Downtime Migrations
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <a href="https://booknow.clubcodetechnology.com/" target="_blank" rel="noopener noreferrer">
                  Get Free Legacy Audit <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" className="rounded-lg border border-[#22D3EE]/50 bg-transparent text-white hover:bg-[#22D3EE]/10" asChild>
                <Link to="/contact">See Assessment Sample</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Why Legacy Systems Hold You Back</h2>
            <p className="text-lg text-[#374151]">Aging technology creates hidden costs and risks across your entire operation.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legacyPainPoints.map((point, i) => (
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

      {/* Before vs After */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Legacy Burden to Modern Advantage</h2>
            <p className="text-lg text-gray-300">We map your current state and design the ideal future architecture.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border border-red-500/30 bg-red-500/5">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2"><XCircle className="w-6 h-6" /> Current Legacy State</h3>
              <div className="space-y-4">
                {["Outdated servers & on-premise hardware", "Manual processes & paper-based workflows", "Siloed data across disconnected systems", "Vendor lock-in with rising costs", "Security gaps & compliance risks"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"><CheckCircle className="w-6 h-6" /> After Modernization</h3>
              <div className="space-y-4">
                {["Cloud-native, scalable infrastructure", "Fully automated digital workflows", "Unified data across Zoho ecosystem", "Flexible, cost-effective licensing", "Enterprise-grade security & compliance"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Our 5-Step Legacy Audit Framework</h2>
            <p className="text-lg text-[#374151]">A systematic approach to understanding and modernizing your technology stack.</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B90E0] via-[#22D3EE] to-[#10B981]" />
            <div className="grid lg:grid-cols-5 gap-6">
              {auditTimeline.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="relative">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1B90E0]/30 hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}>
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

      {/* Audit Areas */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Legacy System Assessment</h2>
            <p className="text-lg text-gray-300">Every layer of your technology stack, thoroughly analyzed.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map((area, i) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border border-[#22D3EE]/20 bg-white/5 hover:bg-white/10 hover:border-[#22D3EE]/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center mb-4 group-hover:bg-[#22D3EE]/20 transition-colors">
                  <area.icon className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                <div className="space-y-2">
                  {area.items.map(item => (
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

      {/* Deliverables */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What You Get After the Audit</h2>
            <p className="text-lg text-[#374151]">Clear, actionable deliverables to guide your modernization journey.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1B90E0] to-[#22D3EE] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#111827] font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A365D 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expected Results After Modernization</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, i) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center rounded-2xl p-8 border border-[#22D3EE]/20 bg-white/5">
                <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: metric.color }}>{metric.value}</div>
                <p className="text-gray-300 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #0D2B5E 50%, #0B1C3D 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B90E0]/10 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Break Free from Legacy Constraints?</h2>
            <p className="text-lg text-gray-300 mb-8">Get a comprehensive assessment and a clear modernization roadmap. No obligation, just clarity.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <a href="https://booknow.clubcodetechnology.com/" target="_blank" rel="noopener noreferrer">
                  Book Legacy Audit Call <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" className="rounded-lg border border-[#22D3EE]/50 bg-transparent text-white hover:bg-[#22D3EE]/10" asChild>
                <Link to="/contact">Get Assessment Sample</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}