import { motion } from "framer-motion";
import { ArrowRight, Shield, Landmark, CheckCircle, Zap, TrendingUp, BarChart3, FileCheck, Award, Clock, Users, Sparkles, Briefcase, Factory, ShoppingCart, Heart, Building2, Globe, GraduationCap, Cpu, Truck, Home, Scale, Code, Megaphone, Clapperboard, HandHeart, Brain, Bot, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import heroUsaBg from "@/assets/hero-usa-landmarks.png";

// Custom USA sections
import { GrowthCounter } from "@/components/usa/GrowthCounter";

import { AgenticAIHub } from "@/components/usa/AgenticAIHub";
import { MigrationPortal } from "@/components/usa/MigrationPortal";
import { ComplianceRibbon } from "@/components/usa/ComplianceRibbon";
import { ComparisonEngine } from "@/components/usa/ComparisonEngine";
import { ZohoOneERP } from "@/components/usa/ZohoOneERP";
import { LowCodeApps } from "@/components/usa/LowCodeApps";
import { DeveloperServicesHub } from "@/components/usa/DeveloperServicesHub";
import { TrustAndPackages } from "@/components/usa/TrustAndPackages";
import { ZohoEcosystemModule } from "@/components/usa/ZohoEcosystemModule";
import { USAMigrationCTA } from "@/components/usa/USAMigrationCTA";
import { MigrationMasterySection } from "@/components/usa/MigrationMasterySection";
import { TrustSection } from "@/components/home/TrustSection";

const darkSectionBg = "linear-gradient(180deg, #0B1C3D 0%, #0F2A5F 50%, #0B1C3D 100%)";
const skyGradientBg = "linear-gradient(180deg, #EBF4FF 0%, #F0F7FF 50%, #F8FAFC 100%)";
const warmLightBg = "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)";

const usaIndustries = [
  { name: "Technology & SaaS", icon: <Code className="w-7 h-7" />, description: "Accelerate growth with integrated CRM, marketing automation, and customer success platforms.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", href: "/industries/saas" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Ensure HIPAA compliance while improving patient care with secure management solutions.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", href: "/industries/healthcare" },
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Maintain SOX compliance while streamlining operations with compliant automation.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", href: "/industries/financial-services" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Optimize production with lean manufacturing principles and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80", href: "/industries/manufacturing" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Dominate omnichannel retail with integrated inventory, POS, and customer engagement.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", href: "/industries/retail" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Optimize legal, accounting, and consulting workflows with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", href: "/industries/professional-services" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", href: "/industries/education" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", href: "/industries/real-estate" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", href: "/industries/logistics" },
  { name: "Marketing & Creative", icon: <Megaphone className="w-7 h-7" />, description: "Manage campaigns, client relationships, and project workflows with unified marketing automation.", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80", href: "/industries/marketing-creative" },
  { name: "SaaS & Startups", icon: <Cpu className="w-7 h-7" />, description: "Accelerate growth with subscription billing, customer success, and product analytics tools.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", href: "/industries/it" },
  { name: "Nonprofits & NGOs", icon: <HandHeart className="w-7 h-7" />, description: "Track donors, manage volunteers, and automate fundraising with purpose-built CRM solutions.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", href: "/industries/nonprofits" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", href: "/industries/hospitality" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management, client billing, and compliance tracking for law firms.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80", href: "/industries/legal" },
  { name: "Media & Entertainment", icon: <Clapperboard className="w-7 h-7" />, description: "Manage content pipelines, talent relationships, and distribution with integrated workflows.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", href: "/industries/media" },
  { name: "Recruitment & HR", icon: <Users className="w-7 h-7" />, description: "Automate hiring workflows, candidate tracking, and employee onboarding with Zoho Recruit and People.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", href: "/industries/recruitment" },
];

const services = [
  { title: "Zoho CRM Implementation", description: "Fully customized Zoho CRM that captures leads, automates follow-ups, and provides real-time pipeline visibility.", features: ["Sales automation", "Custom dashboards", "Mobile CRM"] },
  { title: "Zoho One ERP Development", description: "Unify sales, marketing, finance, HR, and operations into a single AI-powered platform.", features: ["Cross-department integration", "Process automation", "Custom modules"] },
  { title: "Zoho Creator Custom Apps", description: "Bespoke applications built on Zoho Creator for unique operational challenges.", features: ["Low-code development", "Mobile-ready apps", "Third-party integrations"] },
  { title: "Zoho Finance Suite", description: "Streamline accounting with Zoho Books, Inventory, and Subscriptions.", features: ["Automated invoicing", "Multi-currency support", "Financial reporting"] },
  { title: "AI Automation & Agentic AI", description: "Intelligent workflows that learn, decide, and act autonomously across your business.", features: ["AI lead scoring", "Predictive analytics", "Conversational AI"] },
  { title: "Data Migration & Integrations", description: "Seamlessly migrate from legacy systems and connect Zoho with your existing tech stack.", features: ["Zero-downtime migration", "API integrations", "Real-time data sync"] },
];

const faqs = [
  { question: "What makes ClubCode Technology different from other Zoho partners in the US?", answer: "We're a Global Zoho Premium Partner with 12+ years of experience, 500+ US implementations, and deep expertise in Agentic AI, Deluge scripting, and enterprise-grade CRM/ERP architecture. We don't just implement—we architect systems for scale." },
  { question: "Do you ensure HIPAA, SOX, and CCPA compliance?", answer: "Absolutely. All our implementations are architected with US regulatory requirements built in—including HIPAA for healthcare, SOX for financial reporting, and CCPA for data privacy. We provide audit trails, encryption, and access controls by default." },
  { question: "How long does a typical Zoho implementation take?", answer: "A basic CRM setup takes 2-4 weeks. Comprehensive Zoho One ERP implementations typically take 8-16 weeks. We provide a detailed timeline during our free consultation." },
  { question: "Can you migrate our data from Salesforce or HubSpot?", answer: "Yes, we specialize in zero-downtime migrations from Salesforce, HubSpot, Microsoft Dynamics, and legacy ERPs. Our 6-step process (Extract → Clean → Map → Import → Validate → Train) ensures data integrity." },
  { question: "Do you offer post-implementation support?", answer: "Yes—comprehensive post-launch support including training, optimization, troubleshooting, and ongoing enhancements. We're your long-term technology partner, not a one-time vendor." },
];

export default function ZohoPartnerUSA() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zoho Premium Partner USA – ERP, CRM, Agentic AI & Automation | ClubCode Technology Pvt Ltd</title>
        <meta name="description" content="Leading Zoho Premium Partner in the United States. CRM implementation, Zoho One ERP, Agentic AI, Deluge scripting, Salesforce migration, and low-code ERP solutions. HIPAA, SOX & CCPA compliant." />
      </Helmet>
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroUsaBg} alt="United States landmarks" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C3D]/30 via-[#0B1C3D]/25 to-[#020817]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/20 via-transparent to-[#0B1C3D]/20" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(63,224,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(63,224,240,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#3FE0F0]/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-[#4DA3FF]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{ background: "rgba(63,224,240,0.08)", border: "1px solid rgba(63,224,240,0.25)", backdropFilter: "blur(8px)" }}>
              <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
              <span className="text-[#3FE0F0] text-sm font-semibold tracking-wide">Global Zoho Premium Partner · United States</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5">
              Zoho Premium Partner
              <br />
              <span className="text-white/95">United States</span>
            </h1>

            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-bold mb-6 px-6 py-3 rounded-lg text-white" style={{ background: "#3FE0F0", boxShadow: "0 0 15px rgba(63,224,240,0.15)", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
              ERP, CRM, Agentic AI & Robotic Process Automation Experts
            </p>

            <p className="text-base lg:text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Helping United States businesses scale with Zoho, custom ERP systems, Deluge scripting, and AI-powered automation. Transform operations with our proven expertise across New York, San Francisco, Chicago, Dallas, and beyond.
            </p>

            <div className="flex flex-wrap gap-5 justify-center text-sm mb-10">
              {[
                { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
                { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
                { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
                { icon: <Sparkles className="w-4 h-4" />, text: "500+ US Implementations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-[#3FE0F0]">{item.icon}</span>
                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl" className="text-base" asChild>
                <Link to="/contact">
                  Book Free US Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" className="text-base" asChild>
                <Link to="/contact">Talk to a Zoho Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ MIGRATION CTA (2nd Section) ═══════ */}
      <USAMigrationCTA />


      {/* ═══════ GROWTH COUNTER ═══════ */}
      <GrowthCounter />

      {/* ═══════ DEVELOPER SERVICES HUB (Light Sky Blue) ═══════ */}
      <DeveloperServicesHub />

      {/* ═══════ TRUST & PACKAGES (Deep Blue) ═══════ */}
      <TrustAndPackages />

      {/* ═══════ ZOHO ECOSYSTEM MODULE ═══════ */}
      <ZohoEcosystemModule />

      {/* ═══════ IMPLEMENTATION & MIGRATION MASTERY ═══════ */}
      <MigrationMasterySection />

      {/* ═══════ AGENTIC AI HUB ═══════ */}
      <AgenticAIHub />

      {/* ═══════ MIGRATION PORTAL ═══════ */}
      <MigrationPortal />

      {/* ═══════ COMPLIANCE RIBBON ═══════ */}
      <ComplianceRibbon />

      {/* ═══════ ZOHO ONE ERP ═══════ */}
      <ZohoOneERP />

      {/* ═══════ COMPARISON ENGINE ═══════ */}
      <ComparisonEngine />

      {/* ═══════ SERVICES ═══════ */}
      <section className="py-20" style={{ background: warmLightBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Zoho Services for US Businesses</h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">End-to-end Zoho implementation, ERP development, and AI automation tailored for American enterprises.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all duration-300 group">
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{service.title}</h3>
                <p className="text-[#374151] mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-[#374151] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3FE0F0]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES ═══════ */}
      <section className="py-20 relative" style={{ background: darkSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve in the United States</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Specialized Zoho & AI solutions for <span className="text-[#3FE0F0] font-semibold">16+ industries</span> driving the US economy.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {usaIndustries.map((industry, i) => (
              <Link key={industry.name} to={industry.href}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="rounded-2xl overflow-hidden relative min-h-[240px] group cursor-pointer">
                  <div className="absolute inset-0">
                    <img src={industry.image} alt={industry.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D] via-[#0B1C3D]/75 to-[#0B1C3D]/30 group-hover:from-[#0B1C3D]/95 transition-all duration-300" />
                  </div>
                  <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#3FE0F0]/15 backdrop-blur-sm flex items-center justify-center mb-2.5 text-[#3FE0F0] border border-[#3FE0F0]/10">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{industry.name}</h3>
                    <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{industry.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-20" style={{ background: warmLightBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Why Choose ClubCode Technology Pvt Ltd</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Award className="w-5 h-5" />, title: "Global Zoho Premium Partner", description: "Recognized expertise and direct access to Zoho resources and priority support." },
              { icon: <Users className="w-5 h-5" />, title: "Certified Zoho Experts", description: "Team of certified Zoho developers, architects, and Deluge scripting specialists." },
              { icon: <Brain className="w-5 h-5" />, title: "Agentic AI Pioneers", description: "We go beyond chatbots—deploying autonomous AI agents that monitor, decide, and act." },
              { icon: <FileCheck className="w-5 h-5" />, title: "Compliance-First Architecture", description: "HIPAA, SOX, and CCPA compliance built into every implementation by default." },
              { icon: <Globe className="w-5 h-5" />, title: "500+ US Implementations", description: "Proven track record across healthcare, finance, SaaS, manufacturing, and more." },
              { icon: <Shield className="w-5 h-5" />, title: "Enterprise Governance", description: "Security-first approach with audit trails, encryption, and role-based access controls." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-5 flex items-start gap-4 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#3FE0F0]/10 text-[#3FE0F0]">{item.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-[#374151] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs ═══════ */}
      <section className="py-20" style={{ background: skyGradientBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl px-6 overflow-hidden bg-white border border-[#E2E8F0]">
                  <AccordionTrigger className="text-[#111827] font-semibold text-left hover:no-underline text-sm">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[#374151] text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: darkSectionBg }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3FE0F0]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Operations and Scale Your Business in the United States?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how Zoho, Agentic AI, and custom automation can transform your operations—with HIPAA, SOX, and CCPA compliance built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl" asChild>
                <Link to="/contact">
                  Book Free US Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact">Speak with a Zoho Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
