import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Award, Brain, Bot, FileCheck, Headphones, Globe, Building2, Briefcase, Factory, ShoppingCart, Heart, Landmark, Zap, TrendingUp, BarChart3, Sparkles, GraduationCap, Cpu, Truck, Home, Scale, Megaphone, Code, Clapperboard, HandHeart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CountryData, services, aiCapabilities, faqs } from "@/data/countryData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

// Background styles
const darkSectionBg = "linear-gradient(180deg, #0B1C3D 0%, #0F2A5F 50%, #0B1C3D 100%)";
const lightSectionBg = "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)";
const skyGradientBg = "linear-gradient(180deg, #EBF4FF 0%, #F0F7FF 50%, #F8FAFC 100%)";
const warmLightBg = "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)";

const glassCard = {
  background: "rgba(15, 25, 50, 0.6)",
  border: "1px solid rgba(63, 224, 240, 0.08)",
  backdropFilter: "blur(12px)",
};

interface IndustryItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

interface SocialProofItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
}

interface BusinessOutcome {
  icon: React.ReactNode;
  text: string;
  color: string;
}

export interface CountryPageConfig {
  country: CountryData;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroDescription: string;
  trustBadges: { icon: React.ReactNode; text: string }[];
  socialProof: SocialProofItem[];
  marketDescription: string;
  servicesTitle: string;
  servicesDescription: string;
  businessOutcomes: BusinessOutcome[];
  industries: IndustryItem[];
  ctaButtonText: string;
  ctaTitle: string;
  migrationCurrency?: string;
}

// Migration CTA Component
function MigrationCTA() {
  return (
    <section className="py-12" style={{ background: lightSectionBg }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-[#3FE0F0]/20"
          style={{ background: "linear-gradient(135deg, #F0FDFF 0%, #E0F7FA 30%, #E8F4FD 60%, #EFF6FF 100%)" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                Looking to Migrate from Salesforce, HubSpot, or Legacy ERP?
              </h3>
              <p className="text-[#374151] text-base md:text-lg mb-6 leading-relaxed">
                Connect with our certified Zoho specialists who will streamline your migration process and maximize your platform's performance. One step away from transforming your operational efficiency!
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="heroLight" size="lg">
                  Request Migration Assessment
                </Button>
                <Button variant="heroSecondary" size="lg">
                  Talk to Sales
                </Button>
              </div>
            </div>
            <div className="hidden md:flex w-64 lg:w-80 h-full items-center justify-center p-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#3FE0F0]/20 to-[#4DA3FF]/20 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#3FE0F0]/30 to-[#4DA3FF]/30 flex items-center justify-center">
                    <ArrowRight className="w-10 h-10 text-[#0B1C3D]" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3FE0F0]/20 animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#4DA3FF]/20 animate-pulse delay-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CountryPageTemplate({ config }: { config: CountryPageConfig }) {
  const { country } = config;

  const processedFaqs = faqs.map((faq) => ({
    question: faq.question.replace("{country}", country.name),
    answer: faq.answer
      .replace("{country}", country.name)
      .replace("{compliance}", country.complianceLaws.map((l) => l.name).join(", ")),
  }));

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
      </Helmet>
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-32 pb-28 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={config.heroImage} alt={`${country.name} landmarks`} className="w-full h-full object-cover" loading="eager" />
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
              <span className="text-[#3FE0F0] text-sm font-semibold tracking-wide">Global Zoho Premium Partner</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5">
              Zoho Premium Partner
              <br />
              <span className="text-white/95">{country.name}</span>
            </h1>

            <p className="inline-block text-xl md:text-2xl lg:text-3xl font-bold mb-6 px-6 py-3 rounded-lg text-white" style={{ background: "#3FE0F0", boxShadow: "0 0 15px rgba(63,224,240,0.15)", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
              {config.heroSubtitle}
            </p>

            <p className="text-base lg:text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              {config.heroDescription}
            </p>

            <div className="flex flex-wrap gap-5 justify-center text-sm mb-10">
              {config.trustBadges.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-[#3FE0F0]">{item.icon}</span>
                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl" className="text-base">
                {config.ctaButtonText}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="xl" className="text-base">
                Talk to a Zoho Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ MIGRATION CTA ═══════ */}
      <MigrationCTA />

      {/* ═══════ SOCIAL PROOF ═══════ */}
      <section className="py-8" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {config.socialProof.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl px-5 py-5 text-center flex flex-col items-center gap-3 border border-[#E2E8F0] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                style={{ background: "#F8FAFC" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}10`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#0B1C3D] font-bold text-sm">{item.title}</p>
                  <p className="text-[#374151] text-xs">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LOCAL MARKET — LIGHT SKY ═══════ */}
      <section className="py-20" style={{ background: skyGradientBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Understanding the {country.name} Market
            </h2>
            <p className="text-[#374151] text-lg mb-10 max-w-3xl mx-auto">
              {config.marketDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 text-left bg-white border border-[#E2E8F0] shadow-sm">
                <h3 className="text-[#111827] font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-[#3FE0F0]" /></span>
                  Local Challenges We Address
                </h3>
                <ul className="space-y-3">
                  {country.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#374151]">
                      <CheckCircle className="w-4 h-4 text-[#3FE0F0] flex-shrink-0 mt-1" />
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 text-left bg-white border border-[#E2E8F0] shadow-sm">
                <h3 className="text-[#111827] font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center"><Award className="w-4 h-4 text-[#4DA3FF]" /></span>
                  Why Partner With Us
                </h3>
                <ul className="space-y-3">
                  {country.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#374151]">
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

      {/* ═══════ SERVICES — WHITE ═══════ */}
      <section className="py-20" style={{ background: warmLightBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              {config.servicesTitle}
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              {config.servicesDescription}
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
                className="rounded-2xl p-6 bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all duration-300 group"
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

      {/* ═══════ BUSINESS OUTCOMES — NAVY (1st dark) ═══════ */}
      <section className="py-16 relative" style={{ background: darkSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Business Outcomes We Deliver</h3>
            <p className="text-white/70 text-sm">Measurable results for {country.name} enterprises</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {config.businessOutcomes.map((item, index) => (
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

      {/* ═══════ AI AUTOMATION — LIGHT SKY ═══════ */}
      <section className="py-20" style={{ background: skyGradientBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#3FE0F0]/20 bg-[#3FE0F0]/5">
              <Brain className="w-4 h-4 text-[#3FE0F0]" />
              <span className="text-[#0B1C3D] text-sm font-medium">AI-Powered Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              AI Automation & Agentic AI
            </h2>
            <p className="text-[#374151] text-lg max-w-3xl mx-auto">
              Our AI solutions are designed to assist, not replace, your team. We implement human-in-the-loop governance to ensure AI agents work safely within your business processes while respecting {country.name} data privacy regulations.
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
                className="rounded-2xl p-6 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#3FE0F0]/10">
                    <Bot className="w-6 h-6 text-[#3FE0F0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">{capability.title}</h3>
                    <p className="text-[#374151] text-sm leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl p-6 max-w-3xl mx-auto bg-white border border-[#4DA3FF]/15 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#4DA3FF]" />
              <h3 className="text-lg font-semibold text-[#111827]">Data Privacy & Compliance</h3>
            </div>
            <p className="text-[#374151] text-sm leading-relaxed">
              All AI implementations comply with {country.name} data protection requirements including {country.complianceLaws.map((l) => l.name).join(", ")}. Your data security and privacy are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ COMPLIANCE — WHITE ═══════ */}
      <section className="py-20" style={{ background: warmLightBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Regulatory Compliance in {country.name}
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              Enterprise-grade solutions built with {country.name} regulatory requirements in mind.
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
                className="rounded-2xl p-6 text-center bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all"
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

      {/* ═══════ INDUSTRIES — NAVY (2nd dark) ═══════ */}
      <section className="py-20 relative" style={{ background: darkSectionBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve in {country.name}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Specialized Zoho & AI solutions for <span className="text-[#3FE0F0] font-semibold">{config.industries.length}+ industries</span> driving the {country.name} economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {config.industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden relative min-h-[240px] group cursor-pointer"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY MODEL — LIGHT SKY ═══════ */}
      <section className="py-20" style={{ background: skyGradientBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Delivery & Support Model
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              A structured approach to implementation with ongoing support tailored for {country.name} businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-7 h-7" />, title: "Timezone-Aligned Support", description: `Support available during ${country.timezone} business hours for seamless communication.` },
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
                className="rounded-2xl p-6 text-center bg-white border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#3FE0F0]/5 transition-all"
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

      {/* ═══════ WHY CHOOSE US — WHITE ═══════ */}
      <section className="py-20" style={{ background: warmLightBg }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Why Choose ClubCode Technology Pvt Ltd in {country.name}
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
                className="rounded-2xl p-5 flex items-start gap-4 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#3FE0F0]/10 text-[#3FE0F0]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111827] mb-1">{item.title}</h3>
                  <p className="text-[#374151] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs — LIGHT SKY ═══════ */}
      <section className="py-20" style={{ background: skyGradientBg }}>
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

      {/* ═══════ FINAL CTA — NAVY (3rd dark) ═══════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: darkSectionBg }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3FE0F0]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {config.ctaTitle}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help you leverage Zoho, AI, and automation to transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl">
                {config.ctaButtonText}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="xl">
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
