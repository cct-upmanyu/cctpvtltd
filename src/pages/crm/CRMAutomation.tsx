import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, RefreshCw, Mail, Bell, Timer, GitBranch } from "lucide-react";

const automationServices = [
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description: "Automate repetitive tasks, data updates, and routine processes with intelligent workflow rules."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Set up automated email sequences, follow-ups, and personalized communication workflows."
  },
  {
    icon: Bell,
    title: "Alert & Notification Automation",
    description: "Configure smart alerts, escalations, and notifications based on CRM events and conditions."
  },
  {
    icon: Timer,
    title: "Scheduled Automation",
    description: "Schedule automated reports, data cleanups, and batch processes to run at optimal times."
  },
  {
    icon: RefreshCw,
    title: "Data Sync Automation",
    description: "Automate data synchronization between CRM and connected applications in real-time."
  },
  {
    icon: Zap,
    title: "Process Blueprints",
    description: "Design visual process automations that guide teams through complex workflows."
  }
];

export default function CRMAutomation() {
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
              CRM Automation
            </h1>
            <p className="text-lg lg:text-xl text-[#E5E7EB] mb-8">
              Eliminate manual tasks and boost productivity with intelligent CRM automation. 
              Let your CRM work for you, not the other way around.
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
              Automation Services
            </h2>
            <p className="text-lg text-[#374151]">
              Comprehensive automation solutions to streamline your CRM operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => {
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

      {/* CTA */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Ready to Automate Your CRM?
            </h2>
            <p className="text-lg text-[#E5E7EB] mb-8">
              Discover how automation can transform your CRM efficiency and team productivity.
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

      <Footer />
    </div>
  );
}
