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
  CheckCircle,
  AlertTriangle,
  Factory,
  Heart,
  Briefcase,
  Building2,
  GraduationCap,
  ShoppingCart,
  DollarSign,
  Lightbulb,
  Search,
  RefreshCcw,
  Headphones,
  Shield,
  Clock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroCrmSolutions from "@/assets/hero-crm-solutions.jpg";

// What Zoho CRM Solves
const whatCRMSolves = [
  {
    icon: Target,
    title: "Centralize Leads from All Channels",
    description: "Website, social, ads, referrals—all tracked in one place with full context"
  },
  {
    icon: Zap,
    title: "Automate Follow-Ups & Sequences",
    description: "Never miss a lead with automated email sequences and task reminders"
  },
  {
    icon: BarChart3,
    title: "Improve Pipeline Visibility",
    description: "Real-time dashboards show deal stages, revenue forecasts, and team performance"
  },
  {
    icon: Users,
    title: "Align Sales, Marketing & Support",
    description: "One unified view of each customer across departments"
  }
];

// Implementation Services
const implementationServices = [
  {
    icon: Search,
    title: "Zoho CRM Consulting & Strategy",
    description: "We assess your current sales process, identify gaps, and design a CRM architecture that supports real business goals—not generic templates.",
    features: [
      "Sales process mapping",
      "Technology stack assessment", 
      "CRM roadmap development",
      "ROI projection"
    ]
  },
  {
    icon: Settings,
    title: "Zoho CRM Implementation & Setup",
    description: "From scratch or on top of existing data, we configure modules, fields, layouts, and automations aligned with how your team actually sells.",
    features: [
      "Module configuration",
      "Custom field setup",
      "Pipeline design",
      "Territory management"
    ]
  },
  {
    icon: Layers,
    title: "Zoho CRM Customization",
    description: "Blueprints, Canvas, Deluge scripting, custom buttons, and advanced automation for complex sales workflows.",
    features: [
      "Blueprint process automation",
      "Canvas UI customization",
      "Custom functions (Deluge)",
      "Approval workflows"
    ]
  },
  {
    icon: Zap,
    title: "Zoho CRM Automation",
    description: "Workflow rules, macros, email templates, auto-assignment, and intelligent triggers that save hours of manual work.",
    features: [
      "Workflow automation",
      "Lead assignment rules",
      "Email automation",
      "Scheduled actions"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Zoho CRM Optimization & Health Checks",
    description: "Already using Zoho CRM? We audit, clean up, and optimize your existing setup for better performance and adoption.",
    features: [
      "CRM health assessment",
      "Data cleanup",
      "Performance optimization",
      "Automation review"
    ]
  },
  {
    icon: Layers,
    title: "Zoho CRM Integrations",
    description: "Connect CRM to accounting, marketing, support, telephony, WhatsApp, and third-party systems via native integrations or APIs.",
    features: [
      "Native Zoho integrations",
      "Third-party connections",
      "API development",
      "Data synchronization"
    ]
  }
];

// Industry-Specific CRM Solutions
const industrySolutions = [
  {
    icon: Factory,
    name: "Manufacturing & Distribution",
    description: "Sales orders linked to inventory, vendor quotes, production schedules, and dealer/distributor tracking.",
    useCases: ["Dealer management", "Quote-to-order automation", "Inventory visibility"]
  },
  {
    icon: Heart,
    name: "Healthcare & Clinics",
    description: "Patient lead management, appointment scheduling, treatment tracking, and follow-up automation.",
    useCases: ["Patient acquisition", "Appointment CRM", "Referral tracking"]
  },
  {
    icon: Users,
    name: "Recruitment & Staffing",
    description: "Candidate pipelines, client account management, placement tracking, and commission automation.",
    useCases: ["Candidate tracking", "Client management", "Placement automation"]
  },
  {
    icon: Building2,
    name: "Real Estate & Property",
    description: "Lead capture from portals, site visit scheduling, listing management, and broker coordination.",
    useCases: ["Lead from portals", "Site visit scheduling", "Commission tracking"]
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Client relationship tracking, proposal automation, project handoff, and retainer management.",
    useCases: ["Client lifecycle", "Proposal tracking", "Project handoff"]
  },
  {
    icon: DollarSign,
    name: "Financial Services",
    description: "Lead qualification, compliance tracking, document collection, and advisor-client relationship management.",
    useCases: ["KYC workflows", "Advisor dashboards", "Client onboarding"]
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    description: "Student lead management, admissions pipeline, course enrollment, and alumni relationship tracking.",
    useCases: ["Admission funnels", "Enrollment tracking", "Alumni CRM"]
  },
  {
    icon: ShoppingCart,
    name: "Retail, eCommerce & D2C",
    description: "Customer segmentation, order history integration, loyalty programs, and omnichannel engagement.",
    useCases: ["Customer 360", "Order integration", "Loyalty programs"]
  }
];

// Implementation Methodology
const implementationMethodology = [
  {
    step: "1",
    title: "Discovery & Sales Process Mapping",
    description: "We analyze your current sales workflows, pain points, and data sources to design the optimal CRM structure."
  },
  {
    step: "2",
    title: "CRM Architecture Design",
    description: "Module configuration, field mapping, pipeline stages, and automation logic are designed before any setup begins."
  },
  {
    step: "3",
    title: "Data Migration & Cleanup",
    description: "We migrate and clean historical data from spreadsheets, legacy CRMs, or other systems with zero data loss."
  },
  {
    step: "4",
    title: "Customization & Automation",
    description: "Blueprints, workflows, custom functions, and integrations are built to match your exact sales process."
  },
  {
    step: "5",
    title: "Training & User Adoption",
    description: "Role-based training ensures sales teams, managers, and leadership can effectively use the system."
  },
  {
    step: "6",
    title: "Go-Live & Optimization",
    description: "Post-launch monitoring, performance tuning, and continuous improvement based on real usage data."
  }
];

// Decision Guidance
const whenZohoCRMIsIdeal = [
  "Lead-to-deal process with defined stages",
  "Sales team that needs visibility & accountability",
  "Marketing-to-sales handoff automation",
  "Customer lifecycle tracking needs",
  "Multi-channel lead capture requirements"
];

const whenToConsiderAlternatives = [
  { scenario: "Zoho Creator", reason: "When CRM logic is too restrictive and you need custom data models" },
  { scenario: "Zoho Catalyst", reason: "When advanced serverless backend is required" },
  { scenario: "Hybrid (CRM + Creator)", reason: "When standard CRM + custom operational modules are needed" }
];

// FAQs
const faqs = [
  {
    question: "How long does Zoho CRM implementation take?",
    answer: "Standard implementations take 2–4 weeks. Complex setups with extensive customization, data migration, and integrations may take 6–10 weeks. We provide a detailed timeline during our discovery phase."
  },
  {
    question: "Can Zoho CRM replace Salesforce or HubSpot?",
    answer: "Yes. Many of our clients have successfully migrated from Salesforce, HubSpot, Pipedrive, and other CRMs. Zoho CRM offers comparable features at a fraction of the cost, with better integration in the Zoho ecosystem."
  },
  {
    question: "Do you provide training for our sales team?",
    answer: "Absolutely. We provide role-based training for sales reps, managers, and leadership. Training ensures real adoption and ROI from your CRM investment."
  },
  {
    question: "Can you integrate Zoho CRM with our existing tools?",
    answer: "Yes. We specialize in integrations with accounting software, marketing tools, telephony, WhatsApp, e-commerce platforms, and custom APIs. Zoho CRM becomes the central hub of your sales tech stack."
  },
  {
    question: "What if we already have Zoho CRM but it's not working well?",
    answer: "We offer CRM optimization and health check services. We audit your existing setup, identify issues, clean up data, and reconfigure the system for better performance and adoption."
  },
  {
    question: "Is Zoho CRM suitable for small businesses?",
    answer: "Yes. Zoho CRM scales from small teams to enterprises. We configure it to match your current needs while ensuring room for growth. Bigin by Zoho is also available for very small teams."
  }
];

// Channel Icons
const channelIcons = [
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Globe, label: "Web" },
];

// Why Implement With Us
const whyImplementWithUs = [
  { icon: CheckCircle, text: "Certified Zoho Premium Partner with 500+ implementations" },
  { icon: Factory, text: "Industry-specific CRM blueprints and best practices" },
  { icon: Settings, text: "Custom workflow design matching your sales process" },
  { icon: Shield, text: "Data migration with zero downtime guarantee" },
  { icon: Headphones, text: "Ongoing training and 24/7 support" },
  { icon: Zap, text: "AI-powered enhancements and Zia integration" }
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
          <div className="max-w-4xl">
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
              Zoho CRM Implementation,
              <span className="block text-gradient-primary mt-2">Customization & Optimization Partner</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#E5E7EB] mb-4 font-medium"
            >
              Build a Sales-Driven CRM That Actually Works for Your Business
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-[#CBD5E1] mb-8 max-w-2xl"
            >
              Zoho CRM is one of the most flexible CRM platforms available—but without proper implementation, 
              it often becomes underutilized, fragmented, or cluttered with bad data. We don't just enable Zoho CRM—we 
              design, customize, and scale it around your sales process.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book Free CRM Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/contact">
                  Request a Demo
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
              {channelIcons.map((channel) => {
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
      </section>

      {/* What Zoho CRM Solves - LIGHT SECTION */}
      <section className="bg-[#F5F7FB] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#00A0B0] text-sm font-bold rounded-full mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              What Zoho CRM Solves for 
              <span className="text-gradient-primary"> Growing Businesses</span>
            </h2>
            <p className="text-lg text-[#374151]">
              Zoho CRM isn't just a contact database—it's the central hub for managing leads, 
              deals, customer communication, and revenue forecasting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatCRMSolves.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-[#00A0B0]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[#374151] text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CRM Not One-Size-Fits-All Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] rounded-2xl p-8 border border-[#F59E0B]/20"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-[#D97706] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#92400E] mb-2">
                  Zoho CRM Is Not One-Size-Fits-All
                </h3>
                <p className="text-[#78350F]">
                  Most failed CRM projects happen because of generic configuration, poor data migration, 
                  or lack of user training. A proper implementation requires understanding your sales process first, 
                  then configuring the CRM to match—not the other way around.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Services - Dark Section */}
      <section className="bg-gradient-to-br from-[#0B1C3D] via-[#0F2A5F] to-[#0B1C3D] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Zoho CRM Implementation Services
            </h2>
            <p className="text-lg text-[#E5E7EB]">
              From strategy to optimization, we deliver end-to-end CRM solutions that drive real sales results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0B1C3D]/60 rounded-2xl p-6 border border-[#3FE0F0]/20 hover:border-[#3FE0F0]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#3FE0F0]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">{service.title}</h3>
                  <p className="text-[#CBD5E1] text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#E5E7EB]">
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

      {/* Industry-Specific CRM - LIGHT SECTION */}
      <section className="bg-[#F5F7FB] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#00A0B0] text-sm font-bold rounded-full mb-4">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Industry-Specific <span className="text-gradient-primary">CRM Solutions</span>
            </h2>
            <p className="text-lg text-[#374151]">
              We've implemented Zoho CRM across diverse industries with specialized configurations for each.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3FE0F0]/10 group-hover:bg-[#3FE0F0] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-[#00A0B0] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{industry.name}</h3>
                  <p className="text-[#374151] text-sm mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.useCases.map((useCase) => (
                      <span key={useCase} className="px-2 py-1 text-xs bg-gray-100 text-[#374151] rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Methodology - Dark Section */}
      <section className="bg-[#0B1C3D] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              6-Step Implementation Methodology
            </h2>
            <p className="text-lg text-[#E5E7EB]">
              A proven framework that ensures successful CRM deployment and user adoption.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementationMethodology.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#0F2A5F]/60 rounded-2xl p-6 border border-[#3FE0F0]/20"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#3FE0F0] to-[#4DA3FF] flex items-center justify-center text-[#0B1C3D] font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-2 mt-2">{step.title}</h3>
                <p className="text-[#CBD5E1] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guidance - LIGHT SECTION */}
      <section className="bg-[#F5F7FB] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#00A0B0] text-sm font-bold rounded-full mb-4">
              Decision Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Is Zoho CRM Right for You?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* When CRM is Ideal */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-green-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Zoho CRM Is Ideal When:</h3>
              </div>
              <ul className="space-y-3">
                {whenZohoCRMIsIdeal.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* When to Consider Alternatives */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-amber-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Consider Alternatives When:</h3>
              </div>
              <ul className="space-y-4">
                {whenToConsiderAlternatives.map((item) => (
                  <li key={item.scenario} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#111827]">{item.scenario}: </span>
                      <span className="text-[#374151]">{item.reason}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              </p>
              <div className="space-y-4">
                {whyImplementWithUs.map((reason, index) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      key={reason.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-5 h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                      <span className="text-[#FFFFFF]">{reason.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "CRM Implementations", color: "#3FE0F0" },
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

      {/* FAQ Section - LIGHT SECTION */}
      <section className="bg-[#F5F7FB] py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#00A0B0] text-sm font-bold rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left text-[#111827] font-semibold hover:no-underline">
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

      {/* CTA Section - LIGHT SECTION */}
      <section className="bg-gradient-to-r from-[#3FE0F0]/10 via-[#4DA3FF]/10 to-[#8B5CF6]/10 py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg text-[#374151] mb-8">
              Get a free consultation with our Zoho CRM experts and discover how we can help you close more deals, faster.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroPrimary" size="lg" asChild>
                <Link to="/contact">
                  Book Free CRM Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-[#0B1C3D] text-[#0B1C3D] hover:bg-[#0B1C3D] hover:text-white">
                <Link to="/zoho-solutions">
                  Explore All Zoho Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
