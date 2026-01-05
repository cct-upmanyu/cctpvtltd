import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Award, Brain, Bot, FileCheck, Headphones, Globe, Building2, Briefcase, Factory, ShoppingCart, Heart, GraduationCap, Landmark, Cpu, Leaf } from "lucide-react";
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

interface CountryLandingPageProps {
  country: CountryData;
}

const industryIcons: Record<string, React.ReactNode> = {
  "Financial Services": <Landmark className="w-8 h-8" />,
  "Professional Services": <Briefcase className="w-8 h-8" />,
  "Manufacturing": <Factory className="w-8 h-8" />,
  "Retail & E-commerce": <ShoppingCart className="w-8 h-8" />,
  "Healthcare": <Heart className="w-8 h-8" />,
  "Real Estate & Construction": <Building2 className="w-8 h-8" />,
  "Trading & Distribution": <Globe className="w-8 h-8" />,
  "Hospitality & Tourism": <Building2 className="w-8 h-8" />,
  "Mining & Resources": <Factory className="w-8 h-8" />,
  "Agriculture": <Leaf className="w-8 h-8" />,
  "Technology & SaaS": <Cpu className="w-8 h-8" />,
  "Natural Resources": <Factory className="w-8 h-8" />,
  "IT & Technology": <Cpu className="w-8 h-8" />,
  "Retail & FMCG": <ShoppingCart className="w-8 h-8" />,
  "Education": <GraduationCap className="w-8 h-8" />,
};

export function CountryLandingPage({ country }: CountryLandingPageProps) {
  const processedFaqs = faqs.map((faq) => ({
    question: faq.question.replace("{country}", country.name),
    answer: faq.answer
      .replace("{country}", country.name)
      .replace("{compliance}", country.complianceLaws.map((l) => l.name).join(", ")),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - LIGHT */}
      <section className="relative pt-32 pb-20 bg-light-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Global Zoho Premium Partner</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight mb-6">
              Zoho Premium Partner in {country.name}
              <span className="block text-gradient-primary mt-2">ERP, CRM & AI Automation Experts</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#374151] mb-8 max-w-3xl mx-auto">
              Helping {country.name} businesses scale with Zoho, ERP systems, and AI-powered automation. Transform your operations with our proven expertise.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-[#374151] text-sm mb-10">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Global Zoho Premium Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>800+ Global Implementations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroLight" size="xl">
                Book a Free {country.name} Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                Talk to a Zoho Expert
              </Button>
            </div>
          </motion.div>
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
              Understanding the {country.name} Market
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Businesses in {country.name} face unique challenges that require tailored solutions. From regulatory compliance to operational efficiency, we understand what it takes to succeed in your market.
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
              Services Offered in {country.name}
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              Comprehensive Zoho and automation solutions tailored for {country.name} businesses.
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
              All AI implementations comply with {country.name} data protection requirements including {country.complianceLaws.map((l) => l.name).join(", ")}. Your data security and privacy are our top priorities.
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
              Industries We Serve in {country.name}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Specialized solutions for key industries driving the {country.name} economy.
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
              A structured approach to implementation with ongoing support tailored for {country.name} businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Timezone-Aligned Support", description: `Support available during ${country.timezone} business hours for seamless communication.` },
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
              Why Choose Club Code Technology in {country.name}
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
              Ready to Streamline Operations and Scale Your Business in {country.name}?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help you leverage Zoho, AI, and automation to transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroDark" size="xl">
                Book a Free {country.name} Consultation
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
