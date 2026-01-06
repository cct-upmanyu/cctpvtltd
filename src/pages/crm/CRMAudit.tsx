import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Search, BarChart3, Shield, Zap, FileText, TrendingUp } from "lucide-react";

const auditAreas = [
  {
    icon: Search,
    title: "Data Quality Audit",
    description: "Analyze data accuracy, completeness, and consistency. Identify duplicates and data hygiene issues."
  },
  {
    icon: BarChart3,
    title: "Usage Analytics Review",
    description: "Evaluate how your team uses CRM features. Identify underutilized capabilities and adoption gaps."
  },
  {
    icon: Shield,
    title: "Security Assessment",
    description: "Review access controls, permissions, and data security configurations for compliance."
  },
  {
    icon: Zap,
    title: "Automation Review",
    description: "Assess existing workflows and automation rules. Identify optimization opportunities."
  },
  {
    icon: FileText,
    title: "Process Documentation",
    description: "Document current processes and identify gaps between intended and actual usage."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Analyze CRM performance, page load times, and system efficiency. Recommend improvements."
  }
];

const optimizationBenefits = [
  "Improved data accuracy and reliability",
  "Better user adoption and productivity",
  "Reduced system complexity and overhead",
  "Enhanced security and compliance posture",
  "Streamlined workflows and processes",
  "Actionable roadmap for continuous improvement"
];

export default function CRMAudit() {
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
              CRM Audit & Optimization
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              Comprehensive CRM health checks and optimization services. 
              Maximize your CRM investment and drive better business outcomes.
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

      {/* Audit Areas */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              What We Audit
            </h2>
            <p className="text-lg text-[#374151]">
              Comprehensive analysis across all aspects of your CRM implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#00A0B0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">{area.title}</h3>
                  <p className="text-[#374151]">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                Optimization Benefits
              </h2>
              <p className="text-lg text-[#E5E7EB] mb-8">
                Our audit and optimization services deliver tangible improvements across your CRM ecosystem.
              </p>
              <div className="space-y-4">
                {optimizationBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B1C3D]/60 rounded-2xl p-8 border border-[#3FE0F0]/20"
            >
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">Our Audit Deliverables</h3>
              <div className="space-y-4">
                {[
                  "Comprehensive Audit Report",
                  "Data Quality Scorecard",
                  "Security Assessment Summary",
                  "Optimization Recommendations",
                  "Implementation Roadmap",
                  "ROI Projection"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#E5E7EB]">
                    <div className="w-2 h-2 rounded-full bg-[#3FE0F0]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
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
              Ready for a CRM Health Check?
            </h2>
            <p className="text-lg text-[#374151] mb-8">
              Schedule a free consultation to discuss your CRM audit and optimization needs.
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
