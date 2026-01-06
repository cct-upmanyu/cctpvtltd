import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Users, Lightbulb, BarChart3, FileText, Compass } from "lucide-react";

const consultingServices = [
  {
    icon: Compass,
    title: "CRM Strategy Development",
    description: "We analyze your business objectives and develop a comprehensive CRM strategy aligned with your growth goals."
  },
  {
    icon: Target,
    title: "Requirements Analysis",
    description: "Deep dive into your sales processes, customer journeys, and operational needs to define precise CRM requirements."
  },
  {
    icon: FileText,
    title: "Platform Selection",
    description: "Expert guidance on selecting the right CRM platform — Zoho, Salesforce, HubSpot, or others based on your needs."
  },
  {
    icon: Lightbulb,
    title: "Process Optimization",
    description: "Identify inefficiencies in your current processes and design optimized workflows for your CRM implementation."
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Prepare your organization for CRM adoption with stakeholder alignment and training strategies."
  },
  {
    icon: BarChart3,
    title: "ROI Assessment",
    description: "Quantify the expected return on investment and define success metrics for your CRM initiative."
  }
];

const benefits = [
  "Clear CRM roadmap aligned with business objectives",
  "Reduced implementation risk through proper planning",
  "Platform selection confidence based on expert analysis",
  "Optimized processes before technology investment",
  "Stakeholder buy-in and adoption readiness",
  "Measurable success criteria and KPIs"
];

export default function CRMConsulting() {
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
              CRM Consulting
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              Strategic guidance to help you select, plan, and implement the right CRM solution for your business. 
              We turn complexity into clarity.
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

      {/* Services Grid */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Consulting Services
            </h2>
            <p className="text-lg text-[#374151]">
              Comprehensive CRM consulting to ensure your investment delivers maximum value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#00A0B0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">{service.title}</h3>
                  <p className="text-[#374151]">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                Why Invest in CRM Consulting?
              </h2>
              <p className="text-lg text-[#E5E7EB] mb-8">
                A well-planned CRM strategy is the foundation of successful implementation. Our consulting services ensure you make informed decisions.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
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
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-6">Platforms We Consult On</h3>
              <div className="space-y-4">
                {["Zoho CRM", "Salesforce", "HubSpot", "Microsoft Dynamics", "Pipedrive", "Freshsales"].map((platform) => (
                  <div key={platform} className="flex items-center gap-3 text-[#E5E7EB]">
                    <div className="w-2 h-2 rounded-full bg-[#3FE0F0]" />
                    {platform}
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
              Ready to Define Your CRM Strategy?
            </h2>
            <p className="text-lg text-[#374151] mb-8">
              Schedule a free consultation to discuss your CRM needs and get expert guidance.
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
