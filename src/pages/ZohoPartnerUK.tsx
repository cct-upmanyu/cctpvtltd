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

      {/* Hero Section - ENHANCED DARK */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #0a1628 25%, #0c1e3a 50%, #0f2847 75%, #071a2e 100%)" }}>
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(63,224,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(63,224,240,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* UK silhouette / abstract map overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] opacity-[0.03]">
            <svg viewBox="0 0 400 500" fill="white" className="w-full h-full">
              <ellipse cx="200" cy="180" rx="80" ry="140" />
              <ellipse cx="180" cy="350" rx="50" ry="80" />
              <ellipse cx="230" cy="300" rx="60" ry="100" />
              <ellipse cx="160" cy="140" rx="40" ry="60" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#4DA3FF]/5 rounded-full blur-[100px]" />
          {/* Glow behind H1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#3FE0F0]/[0.04] rounded-full blur-[80px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
              <span className="text-[#3FE0F0] text-sm font-medium">Global Zoho Premium Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Zoho Premium Partner United Kingdom
              <span className="block bg-gradient-to-r from-[#3FE0F0] to-[#4DA3FF] bg-clip-text text-transparent mt-2">
                ERP, CRM & AI Automation Experts
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Helping UK businesses implement Zoho CRM, Zoho One, ERP systems, and AI-powered automation with GDPR-compliant and FCA-ready architecture.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-white/80 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#3FE0F0]" />
                <span>Global Zoho Premium Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#3FE0F0]" />
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#3FE0F0]" />
                <span>800+ Global Implementations</span>
              </div>
            </div>

            {/* Micro trust statements */}
            <div className="flex flex-wrap gap-4 justify-center text-white/50 text-xs mb-10">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Trusted by UK SMEs & Enterprises</span>
              <span className="flex items-center gap-1"><Landmark className="w-3 h-3" /> Supporting FCA-regulated firms</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> GDPR-ready implementations</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl">
                Book a Free UK Zoho Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                Talk to a Zoho Expert
              </Button>
            </div>

            {/* Urgency element */}
            <p className="text-white/40 text-xs mt-6">
              🎯 Limited £500 Zoho Audit Offer · Free initial consultation · ROI-driven implementation roadmap
            </p>
          </motion.div>
        </div>
      </section>

      {/* Migration Strip */}
      <section className="py-4 bg-gradient-to-r from-[#0c1e3a] via-[#0f2847] to-[#0c1e3a] border-y border-[#3FE0F0]/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              <span className="text-[#3FE0F0] font-semibold">Looking to migrate from Salesforce, HubSpot, or legacy ERP?</span>{" "}
              We provide structured Zoho migration for UK businesses.
            </p>
            <Button variant="heroDark" size="sm" className="whitespace-nowrap">
              Request Migration Assessment
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Local Market Understanding - DARK */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Understanding the United Kingdom Market
            </h2>
            <p className="text-white/80 text-lg mb-10">
              UK businesses face unique challenges—from Brexit-related regulatory shifts to intense digital competition. We deliver tailored Zoho solutions that address compliance, efficiency, and growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-glass p-6 text-left">
                <h3 className="text-white font-semibold text-lg mb-4">Local Challenges We Address</h3>
                <ul className="space-y-3">
                  {country.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass p-6 text-left">
                <h3 className="text-white font-semibold text-lg mb-4">Why Partner With Us</h3>
                <ul className="space-y-3">
                  {country.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - LIGHT */}
      <section className="py-20 bg-light-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#111827] mb-3">{service.title}</h3>
                <p className="text-[#374151] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#374151] text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome-Oriented Strip - DARK */}
      <section className="py-12 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Business Outcomes We Deliver</h3>
            <p className="text-white/60 text-sm">Measurable results for UK enterprises</p>
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
                className="card-glass p-5 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3 text-[#3FE0F0]">
                  {item.icon}
                </div>
                <p className="text-white/80 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Section - DARK */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">AI-Powered Solutions</span>
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
                className="card-glass p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-white/70">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="card-glass p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-white">Data Privacy & Compliance</h3>
            </div>
            <p className="text-white/80">
              All AI implementations comply with United Kingdom data protection requirements including GDPR, UK Data Protection Act, FCA Compliance. Your data security and privacy are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section - LIGHT */}
      <section className="py-20 bg-light-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
                className="bg-white border border-border rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">{law.name}</h3>
                <p className="text-[#374151]">{law.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - DARK */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve in the United Kingdom
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
                className="card-glass p-6"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  {industryIcons[industry.name] || <Building2 className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-white/70">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model - LIGHT */}
      <section className="py-20 bg-light-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Delivery & Support Model
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
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
                className="bg-white border border-border rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#374151] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - DARK */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
                className="card-glass p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
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

      {/* FAQs - LIGHT */}
      <section className="py-20 bg-light-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
                  className="bg-white border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-[#111827] font-semibold text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#374151]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA - DARK */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
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
