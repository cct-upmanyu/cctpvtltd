import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Zap,
  Target,
  Mail,
  Phone,
  Globe,
  Layers,
  Bot,
  CheckCircle
} from "lucide-react";
import heroCrmSolutions from "@/assets/hero-crm-solutions.jpg";

const crmSections = [
  {
    title: "Sales Automation",
    description: "Automate routine sales tasks, score leads intelligently, and accelerate deal closure with workflow automation that adapts to your sales process.",
    icon: Zap,
    features: [
      "Lead scoring and prioritization",
      "Automated follow-up sequences",
      "Sales pipeline automation",
      "Quote and proposal generation"
    ]
  },
  {
    title: "Lead & Deal Management",
    description: "Capture leads from multiple sources, track them through your pipeline, and convert them into paying customers with complete visibility.",
    icon: Target,
    features: [
      "360-degree lead view",
      "Multi-stage pipeline management",
      "Deal probability tracking",
      "Revenue forecasting"
    ]
  },
  {
    title: "Omnichannel Communication",
    description: "Engage customers across email, phone, social media, and live chat from a single unified platform.",
    icon: MessageSquare,
    features: [
      "Email integration and tracking",
      "Built-in telephony",
      "Social media monitoring",
      "Live chat integration"
    ]
  },
  {
    title: "Analytics & Forecasting",
    description: "Make data-driven decisions with real-time dashboards, custom reports, and AI-powered sales predictions.",
    icon: BarChart3,
    features: [
      "Real-time sales dashboards",
      "Custom report builder",
      "AI-powered predictions",
      "Territory analytics"
    ]
  },
  {
    title: "Customization & Automation",
    description: "Tailor Zoho CRM to match your exact business processes with no-code customization tools and powerful workflow automation.",
    icon: Settings,
    features: [
      "Custom modules and fields",
      "Blueprint process automation",
      "Canvas design studio",
      "Custom functions (Deluge)"
    ]
  },
  {
    title: "Integrations & Ecosystem",
    description: "Connect Zoho CRM with 500+ applications including Zoho apps, third-party tools, and custom integrations.",
    icon: Layers,
    features: [
      "Native Zoho integrations",
      "Third-party app marketplace",
      "REST API access",
      "Custom connector development"
    ]
  }
];

const channelIcons = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Globe, label: "Web" },
];

const whyImplementWithUs = [
  "Certified Zoho Premium Partner with 500+ implementations",
  "Industry-specific CRM blueprints and best practices",
  "Custom workflow design matching your sales process",
  "Data migration with zero downtime guarantee",
  "Ongoing training and 24/7 support",
  "AI-powered enhancements and Zia integration"
];

export default function ZohoCRM() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCrmSolutions} 
            alt="Zoho CRM Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/80 to-[#0B1C3D]/60" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#4DA3FF]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
              <span className="text-[#3FE0F0] text-sm font-medium">Zoho Premium Partner</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6"
            >
              Zoho CRM
              <span className="block text-gradient-primary mt-2">Implementation & Consulting</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-[#E5E7EB] mb-8"
            >
              Transform your customer relationships with intelligent CRM that adapts to your business. 
              From lead to loyalty, manage every interaction with precision and insight.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Channel Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex gap-6"
            >
              {channelIcons.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={channel.label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[#3FE0F0]/10 border border-[#3FE0F0]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#3FE0F0]" />
                    </div>
                    <span className="text-xs text-[#E5E7EB]">{channel.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4FA] to-transparent" />
      </section>

      {/* CRM Overview */}
      <section className="bg-[#F0F4FA] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#00A0B0] text-sm font-bold rounded-full mb-4">
              Complete CRM Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Everything You Need to Build 
              <span className="text-gradient-primary"> Lasting Customer Relationships</span>
            </h2>
            <p className="text-lg text-[#374151]">
              Zoho CRM brings your sales, marketing, and customer support together in one platform. 
              With AI-powered insights and automation, your team can focus on what matters most — your customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#00A0B0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-3">{section.title}</h3>
                  <p className="text-[#374151] mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#374151]">
                        <CheckCircle className="w-4 h-4 text-[#3FE0F0] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Implement With Us - Dark Section */}
      <section className="bg-gradient-to-br from-[#0B1C3D] via-[#0F2A5F] to-[#0B1C3D] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-4">
                Your Implementation Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                Why Implement Zoho CRM with Club Code Technology
              </h2>
              <p className="text-lg text-[#E5E7EB] mb-8">
                As a Zoho Premium Partner, we bring deep expertise, proven methodologies, and a commitment to your success. 
                Our team has helped 500+ businesses transform their customer relationships.
              </p>
              <div className="space-y-4">
                {whyImplementWithUs.map((reason, index) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                    <span className="text-[#FFFFFF]">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Implementations", color: "#3FE0F0" },
                { value: "50+", label: "Industries Served", color: "#4DA3FF" },
                { value: "99%", label: "Client Satisfaction", color: "#10B981" },
                { value: "24/7", label: "Support Available", color: "#8B5CF6" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-[#0B1C3D]/60 rounded-xl border border-[#3FE0F0]/20"
                >
                  <span className="text-3xl font-bold block mb-1" style={{ color: stat.color }}>{stat.value}</span>
                  <p className="text-sm text-[#E5E7EB]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0F4FA] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-lg text-[#374151] mb-8">
              Get a free consultation with our Zoho CRM experts and discover how we can help you achieve your sales goals.
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
