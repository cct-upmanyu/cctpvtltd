import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Award, Brain, Bot, FileCheck, Headphones, Globe, Building2, Briefcase, Factory, ShoppingCart, Heart, Landmark, Zap, TrendingUp, BarChart3 } from "lucide-react";
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

// UK warm theme colors
const ukColors = {
  // Warm sunset gold/amber accent
  accent: "#D4944C",
  accentLight: "#E8B97A",
  accentGlow: "rgba(212, 148, 76, 0.5)",
  // Deep navy from UK evening sky
  navy: "#0C1A2E",
  navyMid: "#132840",
  navyLight: "#1A3456",
  // Royal blue
  royal: "#1E3A6E",
  royalLight: "#2A5090",
  // Warm cream for light sections
  cream: "#FDF8F2",
  creamDark: "#F5EDE3",
  // Text
  textDark: "#1A1A2E",
  textMid: "#3D3D56",
  textLight: "#6B6B80",
  // Borders
  borderWarm: "#E8D5C0",
  // Cyan kept for CTAs (brand consistency)
  cyan: "#3FE0F0",
  blue: "#4DA3FF",
};

const industryIcons: Record<string, React.ReactNode> = {
  "Financial Services": <Landmark className="w-8 h-8" />,
  "Professional Services": <Briefcase className="w-8 h-8" />,
  "Manufacturing": <Factory className="w-8 h-8" />,
  "Retail & E-commerce": <ShoppingCart className="w-8 h-8" />,
  "Healthcare": <Heart className="w-8 h-8" />,
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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zoho Premium Partner UK – ERP, CRM & AI Automation | ClubCode Technology</title>
        <meta name="description" content="Helping UK businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with GDPR-compliant and FCA-ready architecture." />
      </Helmet>
      <Navbar />

      {/* ═══════ HERO — UK Landmarks Background ═══════ */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroUkBg} alt="United Kingdom landmarks" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,26,46,0.55) 0%, rgba(12,26,46,0.40) 40%, rgba(12,26,46,0.70) 100%)" }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: ukColors.accent }} />
              <span className="text-sm font-semibold" style={{ color: ukColors.accentLight }}>Global Zoho Premium Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              Zoho Premium Partner
              <br />
              United Kingdom
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{
              background: `linear-gradient(90deg, ${ukColors.accentLight}, ${ukColors.cyan}, ${ukColors.accentLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              ERP, CRM, Agentic AI & Robotic
              <br />
              Process Automation Experts
            </p>

            <p className="text-base lg:text-lg text-white/80 mb-8 max-w-3xl mx-auto drop-shadow">
              Helping United Kingdom businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-white/90 text-sm mb-10">
              {[
                { icon: <Award className="w-5 h-5" />, text: "Global Zoho Premium Partner" },
                { icon: <Clock className="w-5 h-5" />, text: "12+ Years Experience" },
                { icon: <Users className="w-5 h-5" />, text: "4000+ Global Implementations" },
                { icon: <Users className="w-5 h-5" />, text: "100+ Implementations in UK" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: ukColors.accent }}>{item.icon}</span>
                  <span>{item.text}</span>
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
      </section>

      {/* ═══════ MIGRATION STRIP ═══════ */}
      <section className="py-4 border-y" style={{ background: `linear-gradient(90deg, ${ukColors.navy}, ${ukColors.navyMid}, ${ukColors.navy})`, borderColor: `${ukColors.accent}22` }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              <span className="font-semibold" style={{ color: ukColors.accentLight }}>Looking to migrate from Salesforce, HubSpot, or legacy ERP?</span>{" "}
              We provide structured Zoho migration for UK businesses.
            </p>
            <Button variant="heroDark" size="sm" className="whitespace-nowrap">
              Request Migration Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF STRIP ═══════ */}
      <section className="py-3 border-b" style={{ background: ukColors.navy, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container-custom">
          <div className="flex flex-wrap gap-6 justify-center text-white/50 text-xs">
            {[
              { icon: <Shield className="w-3.5 h-3.5" />, text: "Trusted by UK SMEs & Enterprises" },
              { icon: <Landmark className="w-3.5 h-3.5" />, text: "Supporting FCA-regulated firms" },
              { icon: <CheckCircle className="w-3.5 h-3.5" />, text: "GDPR-ready implementations" },
              { icon: <Zap className="w-3.5 h-3.5" />, text: "Limited £500 Zoho Audit Offer" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span style={{ color: `${ukColors.accent}99` }}>{item.icon}</span> {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LOCAL MARKET UNDERSTANDING — DARK (UK Navy) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.navy} 0%, ${ukColors.navyMid} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Understanding the United Kingdom Market
            </h2>
            <p className="text-white/75 text-lg mb-10">
              UK businesses face unique challenges—from Brexit-related regulatory shifts to intense digital competition. We deliver tailored Zoho solutions that address compliance, efficiency, and growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 text-left border" style={{ background: `${ukColors.navyLight}66`, borderColor: `${ukColors.accent}22`, backdropFilter: "blur(8px)" }}>
                <h3 className="text-white font-semibold text-lg mb-4">Local Challenges We Address</h3>
                <ul className="space-y-3">
                  {country.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ukColors.accent }} />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-6 text-left border" style={{ background: `${ukColors.navyLight}66`, borderColor: `${ukColors.accent}22`, backdropFilter: "blur(8px)" }}>
                <h3 className="text-white font-semibold text-lg mb-4">Why Partner With Us</h3>
                <ul className="space-y-3">
                  {country.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ukColors.accentLight }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SERVICES — LIGHT (Warm Cream) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.cream} 0%, ${ukColors.creamDark} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: ukColors.textDark }}>
              Zoho Services for UK Businesses
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: ukColors.textMid }}>
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
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border"
                style={{ borderColor: ukColors.borderWarm }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: ukColors.textDark }}>{service.title}</h3>
                <p className="mb-4" style={{ color: ukColors.textMid }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: ukColors.textMid }}>
                      <CheckCircle className="w-4 h-4" style={{ color: ukColors.accent }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUTCOMES — DARK (Royal Blue-Navy) ═══════ */}
      <section className="py-12" style={{ background: `linear-gradient(135deg, ${ukColors.navyMid} 0%, ${ukColors.royal} 50%, ${ukColors.navyMid} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Business Outcomes We Deliver</h3>
            <p className="text-white/50 text-sm">Measurable results for UK enterprises</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce CRM licensing costs" },
              { icon: <Zap className="w-6 h-6" />, text: "Replace legacy ERP systems" },
              { icon: <FileCheck className="w-6 h-6" />, text: "Automate compliance reporting" },
              { icon: <BarChart3 className="w-6 h-6" />, text: "Improve sales pipeline visibility" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-5 text-center border"
                style={{ background: `${ukColors.navyLight}55`, borderColor: `${ukColors.accent}20` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: `${ukColors.accent}22`, color: ukColors.accent }}>
                  {item.icon}
                </div>
                <p className="text-white/80 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AI AUTOMATION — DARK ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.navy} 0%, ${ukColors.navyMid} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: `${ukColors.accent}40`, background: `${ukColors.accent}15` }}>
              <Brain className="w-4 h-4" style={{ color: ukColors.accent }} />
              <span className="text-sm font-medium" style={{ color: ukColors.accent }}>AI-Powered Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Automation & Agentic AI
            </h2>
            <p className="text-white/75 text-lg max-w-3xl mx-auto">
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
                className="rounded-xl p-6 border"
                style={{ background: `${ukColors.navyLight}55`, borderColor: `${ukColors.accent}18` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${ukColors.accent}20` }}>
                    <Bot className="w-6 h-6" style={{ color: ukColors.accent }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-white/70">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl p-6 max-w-3xl mx-auto border" style={{ background: `${ukColors.navyLight}55`, borderColor: `${ukColors.accent}18` }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6" style={{ color: ukColors.accentLight }} />
              <h3 className="text-xl font-semibold text-white">Data Privacy & Compliance</h3>
            </div>
            <p className="text-white/80">
              All AI implementations comply with United Kingdom data protection requirements including GDPR, UK Data Protection Act, FCA Compliance. Your data security and privacy are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ COMPLIANCE — LIGHT (Cream) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.creamDark} 0%, ${ukColors.cream} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: ukColors.textDark }}>
              Regulatory Compliance in the United Kingdom
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: ukColors.textMid }}>
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
                className="bg-white rounded-xl p-6 text-center border"
                style={{ borderColor: ukColors.borderWarm }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${ukColors.accent}15` }}>
                  <FileCheck className="w-8 h-8" style={{ color: ukColors.accent }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: ukColors.textDark }}>{law.name}</h3>
                <p style={{ color: ukColors.textMid }}>{law.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES — DARK (Deep Royal Navy) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.navyMid} 0%, ${ukColors.navy} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve in the United Kingdom
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Specialized solutions for key industries driving the UK economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-6 border"
                style={{ background: `${ukColors.navyLight}55`, borderColor: `${ukColors.accent}18` }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ background: `${ukColors.accent}20`, color: ukColors.accent }}>
                  {industryIcons[industry.name] || <Building2 className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-white/70">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ DELIVERY MODEL — LIGHT (Cream) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.cream} 0%, ${ukColors.creamDark} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: ukColors.textDark }}>
              Our Delivery & Support Model
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: ukColors.textMid }}>
              A structured approach to implementation with ongoing support tailored for UK businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Timezone-Aligned Support", description: "Support available during GMT/BST business hours for seamless communication." },
              { icon: <Users className="w-8 h-8" />, title: "Dedicated Project Manager", description: "A single point of contact throughout your project for accountability and clarity." },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Structured Implementation", description: "Phased approach with clear milestones, testing, and sign-offs at each stage." },
              { icon: <Headphones className="w-8 h-8" />, title: "Ongoing Optimization", description: "Post-launch support, training, and continuous improvement as your business evolves." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border"
                style={{ borderColor: ukColors.borderWarm }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `${ukColors.accent}12`, color: ukColors.accent }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: ukColors.textDark }}>{item.title}</h3>
                <p className="text-sm" style={{ color: ukColors.textMid }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US — DARK (Navy + Gold) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.navy} 0%, ${ukColors.navyMid} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ClubCode Technology Pvt Ltd in the United Kingdom
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Award className="w-6 h-6" />, title: "Global Zoho Premium Partner", description: "Recognized expertise and direct access to Zoho resources and support." },
              { icon: <Users className="w-6 h-6" />, title: "Certified Experts", description: "Team of certified Zoho developers, architects, and consultants." },
              { icon: <Brain className="w-6 h-6" />, title: "AI-First Mindset", description: "We integrate AI into solutions to drive efficiency and innovation." },
              { icon: <FileCheck className="w-6 h-6" />, title: "Strong Documentation", description: "Comprehensive documentation and knowledge transfer for your team." },
              { icon: <Globe className="w-6 h-6" />, title: "Global Delivery Experience", description: "Proven track record across multiple countries and industries." },
              { icon: <Shield className="w-6 h-6" />, title: "Enterprise Governance", description: "Security-first approach with compliance-ready implementations." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-6 flex items-start gap-4 border"
                style={{ background: `${ukColors.navyLight}55`, borderColor: `${ukColors.accent}18` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${ukColors.accent}20`, color: ukColors.accent }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs — LIGHT (Cream) ═══════ */}
      <section className="py-20" style={{ background: `linear-gradient(180deg, ${ukColors.creamDark} 0%, ${ukColors.cream} 100%)` }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: ukColors.textDark }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {processedFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border"
                  style={{ borderColor: ukColors.borderWarm }}
                >
                  <AccordionTrigger className="font-semibold text-left hover:no-underline" style={{ color: ukColors.textDark }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent style={{ color: ukColors.textMid }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA — DARK (Deep Navy + Warm Glow) ═══════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${ukColors.navy} 0%, ${ukColors.royal} 50%, ${ukColors.navy} 100%)` }}>
        {/* Warm ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: `${ukColors.accent}12` }} />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Operations and Scale Your Business in the United Kingdom?
            </h2>
            <p className="text-white/75 text-lg mb-8">
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
