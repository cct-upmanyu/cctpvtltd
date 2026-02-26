import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Award, Brain, Bot, FileCheck, Headphones, Globe, Building2, Briefcase, Factory, ShoppingCart, Heart, Landmark, Zap, TrendingUp, BarChart3, Sparkles, GraduationCap, Cpu, Truck, Home, Scale, Megaphone, Code, Clapperboard, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getCountryBySlug, services, aiCapabilities, faqs } from "@/data/countryData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import heroUkBg from "@/assets/hero-uk-landmarks.png";

// Full 16 industries
const ukIndustries = [
  { name: "Financial Services", icon: <Landmark className="w-7 h-7" />, description: "Streamline banking, insurance, and fintech operations with AI-driven compliance monitoring.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { name: "Professional Services", icon: <Briefcase className="w-7 h-7" />, description: "Optimize legal, accounting, and consulting workflows with integrated CRM and project management.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { name: "Manufacturing", icon: <Factory className="w-7 h-7" />, description: "Enhance production efficiency with ERP systems, inventory management, and supply chain automation.", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-7 h-7" />, description: "Unify online and offline sales channels with integrated POS, inventory, and customer engagement.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { name: "Healthcare", icon: <Heart className="w-7 h-7" />, description: "Improve patient management and NHS compliance with secure, GDPR-compliant solutions.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { name: "Education", icon: <GraduationCap className="w-7 h-7" />, description: "Transform institutions with student management, fee collection, and learning management systems.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80" },
  { name: "IT & Technology", icon: <Cpu className="w-7 h-7" />, description: "Scale technology companies with integrated project management, billing, and resource optimization.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Logistics & Transport", icon: <Truck className="w-7 h-7" />, description: "Optimize fleet management, route planning, and supply chain visibility with real-time tracking.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Real Estate", icon: <Home className="w-7 h-7" />, description: "Manage property portfolios, tenant relationships, and sales pipelines with integrated CRM solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { name: "Hospitality & Tourism", icon: <Building2 className="w-7 h-7" />, description: "Enhance guest experiences with CRM, booking management, and loyalty program automation.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { name: "Legal Services", icon: <Scale className="w-7 h-7" />, description: "Streamline case management, client billing, and compliance tracking for law firms.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80" },
  { name: "Marketing & Creative", icon: <Megaphone className="w-7 h-7" />, description: "Manage campaigns, client relationships, and project workflows with unified marketing automation.", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80" },
  { name: "SaaS & Startups", icon: <Code className="w-7 h-7" />, description: "Accelerate growth with subscription billing, customer success, and product analytics tools.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { name: "Media & Entertainment", icon: <Clapperboard className="w-7 h-7" />, description: "Manage content pipelines, talent relationships, and distribution with integrated workflows.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80" },
  { name: "Nonprofits & NGOs", icon: <HandHeart className="w-7 h-7" />, description: "Track donors, manage volunteers, and automate fundraising with purpose-built CRM solutions.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { name: "Recruitment & HR", icon: <Users className="w-7 h-7" />, description: "Automate hiring workflows, candidate tracking, and employee onboarding with Zoho Recruit and People.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
];

// Shared styles for consistency
const darkSectionBg = "linear-gradient(180deg, #020817 0%, #0B1426 50%, #020817 100%)";
const lightSectionBg = "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)";
const glassCard = {
  background: "rgba(15, 25, 50, 0.6)",
  border: "1px solid rgba(63, 224, 240, 0.08)",
  backdropFilter: "blur(12px)",
};
const lightCard = {
  background: "#FFFFFF",
  border: "1px solid rgba(63, 224, 240, 0.12)",
};

export default function ZohoPartnerUK() {
  const country = getCountryBySlug("uk");
  if (!country) return null;

  const processedFaqs = faqs.map((faq) => ({
    question: faq.question.replace("{country}", country.name),
    answer: faq.answer
      .replace("{country}", country.name)
      .replace("{compliance}", country.complianceLaws.map((l) => l.name).join(", ")),
  }));

  return (
    <div className="min-h-screen bg-[#020817]">
      <Helmet>
        <title>Zoho Premium Partner UK – ERP, CRM & AI Automation | ClubCode Technology</title>
        <meta name="description" content="Helping UK businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with GDPR-compliant and FCA-ready architecture." />
      </Helmet>
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — UK Landmarks + Deep Tech Overlay
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroUkBg} alt="United Kingdom landmarks" className="w-full h-full object-cover" loading="eager" />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/70 via-[#020817]/50 to-[#020817]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/40 via-transparent to-[#020817]/40" />
        </div>
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(63,224,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(63,224,240,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#3FE0F0]/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-[#4DA3FF]/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{ background: "rgba(63,224,240,0.08)", border: "1px solid rgba(63,224,240,0.25)", backdropFilter: "blur(8px)" }}>
              <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
              <span className="text-[#3FE0F0] text-sm font-semibold tracking-wide">Global Zoho Premium Partner</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5">
              Zoho Premium Partner
              <br />
              <span className="text-white/95">United Kingdom</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 bg-gradient-to-r from-[#3FE0F0] via-[#4DA3FF] to-[#3FE0F0] bg-clip-text text-transparent">
              ERP, CRM, Agentic AI & Robotic Process Automation Experts
            </p>

            <p className="text-base lg:text-lg text-white/65 mb-8 max-w-3xl mx-auto leading-relaxed">
              Helping United Kingdom businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 justify-center text-sm mb-10">
              {[
                { icon: <Award className="w-4 h-4" />, text: "Global Zoho Premium Partner" },
                { icon: <Clock className="w-4 h-4" />, text: "12+ Years Experience" },
                { icon: <Users className="w-4 h-4" />, text: "4000+ Global Implementations" },
                { icon: <Sparkles className="w-4 h-4" />, text: "100+ UK Implementations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-[#3FE0F0]">{item.icon}</span>
                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl" className="text-base">
                Book a Free United Kingdom Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg" className="text-base">
                Talk to a Zoho Expert
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
      </section>

      {/* ═══════ MIGRATION STRIP ═══════ */}
      <section className="py-4 relative" style={{ background: "linear-gradient(90deg, #020817 0%, #0B1426 50%, #020817 100%)", borderTop: "1px solid rgba(63,224,240,0.06)", borderBottom: "1px solid rgba(63,224,240,0.06)" }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm text-center md:text-left">
              <span className="text-[#3FE0F0] font-semibold">Looking to migrate from Salesforce, HubSpot, or legacy ERP?</span>{" "}
              We provide structured Zoho migration for UK businesses.
            </p>
            <Button variant="heroDark" size="sm" className="whitespace-nowrap">
              Request Migration Assessment <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF — Attractive Badges ═══════ */}
      <section className="py-6" style={{ background: "linear-gradient(180deg, #0B1426 0%, #020817 100%)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Trusted by UK SMEs", subtitle: "& Enterprise Clients", color: "#3FE0F0" },
              { icon: <Landmark className="w-5 h-5" />, title: "FCA-Regulated", subtitle: "Firm Support", color: "#4DA3FF" },
              { icon: <CheckCircle className="w-5 h-5" />, title: "GDPR-Ready", subtitle: "Implementations", color: "#3FE0F0" },
              { icon: <Zap className="w-5 h-5" />, title: "Limited £500", subtitle: "Zoho Audit Offer", color: "#4DA3FF" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl px-4 py-4 text-center flex flex-col items-center gap-2"
                style={{ background: "rgba(15, 25, 50, 0.5)", border: `1px solid ${item.color}15` }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${item.color}12`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LOCAL MARKET UNDERSTANDING — DARK ═══════ */}
      <section className="py-20 relative" style={{ background: darkSectionBg }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#3FE0F0]/20 to-transparent" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Understanding the United Kingdom Market
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
              UK businesses face unique challenges—from Brexit-related regulatory shifts to intense digital competition. We deliver tailored Zoho solutions that address compliance, efficiency, and growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 text-left" style={glassCard}>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-[#3FE0F0]" /></span>
                  Local Challenges We Address
                </h3>
                <ul className="space-y-3">
                  {country.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <CheckCircle className="w-4 h-4 text-[#3FE0F0] flex-shrink-0 mt-1" />
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 text-left" style={glassCard}>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center"><Award className="w-4 h-4 text-[#4DA3FF]" /></span>
                  Why Partner With Us
                </h3>
                <ul className="space-y-3">
                  {country.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <CheckCircle className="w-4 h-4 text-[#4DA3FF] flex-shrink-0 mt-1" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES — LIGHT ═══════ */}
      <section className="py-20" style={{ background: lightSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Zoho Services for UK Businesses
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              End-to-end Zoho implementation, ERP development, and AI automation tailored for UK enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all duration-300 group"
                style={lightCard}
              >
                <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#0B1426] transition-colors">{service.title}</h3>
                <p className="text-[#374151] mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#374151] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3FE0F0]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BUSINESS OUTCOMES — DARK ═══════ */}
      <section className="py-16 relative" style={{ background: darkSectionBg }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#4DA3FF]/15 to-transparent" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Business Outcomes We Deliver</h3>
            <p className="text-white/70 text-sm">Measurable results for UK enterprises</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs", color: "#3FE0F0" },
              { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems", color: "#4DA3FF" },
              { icon: <FileCheck className="w-6 h-6" />, text: "Automate compliance reporting", color: "#3FE0F0" },
              { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility", color: "#4DA3FF" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={glassCard}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color}10`, color: item.color }}>
                  {item.icon}
                </div>
                <p className="text-white text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AI AUTOMATION — DARK ═══════ */}
      <section className="py-20 relative" style={{ background: "linear-gradient(180deg, #0B1426 0%, #020817 100%)" }}>
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#3FE0F0]/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-[#4DA3FF]/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(63,224,240,0.06)", border: "1px solid rgba(63,224,240,0.15)" }}>
              <Brain className="w-4 h-4 text-[#3FE0F0]" />
              <span className="text-[#3FE0F0] text-sm font-medium">AI-Powered Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Automation & Agentic AI
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Our AI solutions are designed to assist, not replace, your team. We implement human-in-the-loop governance to ensure AI agents work safely within your business processes while respecting United Kingdom data privacy regulations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 hover:border-[#3FE0F0]/15 transition-colors"
                style={glassCard}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#3FE0F0]/10">
                    <Bot className="w-6 h-6 text-[#3FE0F0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl p-6 max-w-3xl mx-auto" style={{ ...glassCard, borderColor: "rgba(77,163,255,0.12)" }}>
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#4DA3FF]" />
              <h3 className="text-lg font-semibold text-white">Data Privacy & Compliance</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              All AI implementations comply with United Kingdom data protection requirements including GDPR, UK Data Protection Act, FCA Compliance. Your data security and privacy are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ COMPLIANCE — LIGHT ═══════ */}
      <section className="py-20" style={{ background: lightSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Regulatory Compliance in the United Kingdom
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              Enterprise-grade solutions built with UK regulatory requirements in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {country.complianceLaws.map((law, index) => (
              <motion.div
                key={law.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all"
                style={lightCard}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3FE0F0]/10 to-[#4DA3FF]/10 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-[#3FE0F0]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">{law.name}</h3>
                <p className="text-[#374151] text-sm">{law.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES — DARK (16 Industries) ═══════ */}
      <section className="py-20 relative" style={{ background: darkSectionBg }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#3FE0F0]/15 to-transparent" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve in the United Kingdom
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Specialized Zoho & AI solutions for <span className="text-[#3FE0F0] font-semibold">15+ industries</span> driving the UK economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ukIndustries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden relative min-h-[240px] group cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/75 to-[#020817]/30 group-hover:from-[#020817]/95 transition-all duration-300" />
                </div>
                <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#3FE0F0]/15 backdrop-blur-sm flex items-center justify-center mb-2.5 text-[#3FE0F0] border border-[#3FE0F0]/10">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{industry.name}</h3>
                  <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY MODEL — LIGHT ═══════ */}
      <section className="py-20" style={{ background: lightSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Delivery & Support Model
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              A structured approach to implementation with ongoing support tailored for UK businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-7 h-7" />, title: "Timezone-Aligned Support", description: "Support available during GMT/BST business hours for seamless communication." },
              { icon: <Users className="w-7 h-7" />, title: "Dedicated Project Manager", description: "A single point of contact throughout your project for accountability and clarity." },
              { icon: <CheckCircle className="w-7 h-7" />, title: "Structured Implementation", description: "Phased approach with clear milestones, testing, and sign-offs at each stage." },
              { icon: <Headphones className="w-7 h-7" />, title: "Ongoing Optimization", description: "Post-launch support, training, and continuous improvement as your business evolves." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all"
                style={lightCard}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3FE0F0]/10 to-[#4DA3FF]/10 flex items-center justify-center mx-auto mb-4 text-[#3FE0F0]">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#374151] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US — DARK ═══════ */}
      <section className="py-20 relative" style={{ background: darkSectionBg }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#3FE0F0]/15 to-transparent" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ClubCode Technology Pvt Ltd in the United Kingdom
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Award className="w-5 h-5" />, title: "Global Zoho Premium Partner", description: "Recognized expertise and direct access to Zoho resources and support." },
              { icon: <Users className="w-5 h-5" />, title: "Certified Experts", description: "Team of certified Zoho developers, architects, and consultants." },
              { icon: <Brain className="w-5 h-5" />, title: "AI-First Mindset", description: "We integrate AI into solutions to drive efficiency and innovation." },
              { icon: <FileCheck className="w-5 h-5" />, title: "Strong Documentation", description: "Comprehensive documentation and knowledge transfer for your team." },
              { icon: <Globe className="w-5 h-5" />, title: "Global Delivery Experience", description: "Proven track record across multiple countries and industries." },
              { icon: <Shield className="w-5 h-5" />, title: "Enterprise Governance", description: "Security-first approach with compliance-ready implementations." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-5 flex items-start gap-4 hover:border-[#3FE0F0]/15 transition-colors"
                style={glassCard}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#3FE0F0]/10 text-[#3FE0F0]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs — LIGHT ═══════ */}
      <section className="py-20" style={{ background: lightSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {processedFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl px-6 overflow-hidden"
                  style={lightCard}
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

      {/* ═══════ FINAL CTA — DARK ═══════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: darkSectionBg }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3FE0F0]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[#3FE0F0]/15 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Operations and Scale Your Business in the United Kingdom?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help you leverage Zoho, AI, and automation to transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl">
                Book a Free UK Zoho Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                Speak with a Zoho Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
