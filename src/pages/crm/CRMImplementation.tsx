import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Settings, Database, Users, Zap, Shield, Headphones } from "lucide-react";

const implementationPhases = [
  {
    phase: "01",
    title: "Discovery & Planning",
    description: "Deep dive into your requirements, define scope, and create a detailed implementation roadmap."
  },
  {
    phase: "02",
    title: "Configuration & Setup",
    description: "Configure your CRM with custom fields, modules, and workflows tailored to your business."
  },
  {
    phase: "03",
    title: "Data Migration",
    description: "Clean, map, and migrate your existing data with zero data loss and full validation."
  },
  {
    phase: "04",
    title: "Integration",
    description: "Connect your CRM with existing tools and third-party applications for seamless operations."
  },
  {
    phase: "05",
    title: "Testing & Training",
    description: "Comprehensive testing and hands-on training to ensure team readiness."
  },
  {
    phase: "06",
    title: "Go-Live & Support",
    description: "Smooth launch with dedicated support and ongoing optimization."
  }
];

const features = [
  { icon: Settings, title: "Custom Configuration", description: "Tailored to your exact workflows" },
  { icon: Database, title: "Data Migration", description: "Safe, accurate data transfer" },
  { icon: Users, title: "User Training", description: "Comprehensive team onboarding" },
  { icon: Zap, title: "Automation Setup", description: "Workflow automation included" },
  { icon: Shield, title: "Security Setup", description: "Enterprise-grade security" },
  { icon: Headphones, title: "Post-Go-Live Support", description: "Ongoing assistance" }
];

export default function CRMImplementation() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark-gradient section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-6">
              CRM Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6">
              CRM Implementation
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              End-to-end CRM implementation services that transform your customer relationship management. 
              From planning to go-live, we ensure a seamless transition.
            </p>
            <Button variant="heroDark" size="lg" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-light-gradient py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#00A0B0]" />
                  </div>
                  <h3 className="font-semibold text-[#111827] text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#374151]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-[#374151]">
              A proven methodology that ensures successful CRM deployment every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl font-bold text-[#3FE0F0]/30">{phase.phase}</span>
                <h3 className="text-xl font-bold text-[#111827] mt-4 mb-3">{phase.title}</h3>
                <p className="text-[#374151]">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              CRM Platforms We Implement
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Zoho CRM", "Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive", "Freshsales"].map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0B1C3D]/60 rounded-xl p-6 border border-[#3FE0F0]/20 text-center"
              >
                <span className="text-[#FFFFFF] font-medium">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Implement Your CRM?
            </h2>
            <p className="text-lg text-[#374151] mb-8">
              Get started with a free consultation to discuss your implementation needs.
            </p>
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
