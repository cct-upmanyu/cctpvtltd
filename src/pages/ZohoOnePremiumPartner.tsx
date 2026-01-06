import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Building2, 
  Globe, 
  Zap, 
  Shield, 
  HeadphonesIcon,
  TrendingUp,
  Clock,
  Award,
  BarChart3,
  Layers,
  Settings,
  Database,
  Mail,
  DollarSign,
  Target,
  Briefcase,
  AlertTriangle,
  Lightbulb,
  Factory,
  Home,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Truck,
  Scale,
  Palette,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import zohoOneLogo from "@/assets/zoho-one-logo.png";
import clientLogosRow1 from "@/assets/client-logos-row1.png";
import clientLogosRow2 from "@/assets/client-logos-row2.png";

// JSON-LD Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClubCode Technology - Zoho One Premium Partner",
  "description": "Certified Zoho Premium Partner specializing in Zoho One implementation, digital transformation, and business automation. 500+ implementations across 40+ countries.",
  "url": "https://www.clubcodetechnology.com/zoho-one-premium-partner",
  "logo": "https://www.clubcodetechnology.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/clubcodetechnology"
  ],
  "offers": {
    "@type": "Offer",
    "name": "Zoho One Implementation Services",
    "description": "Enterprise-grade Zoho One implementation and digital transformation"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
};

const stats = [
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Implementations", icon: CheckCircle },
  { value: "40+", label: "Countries Served", icon: Globe },
  { value: "50+", label: "Zoho Apps Expertise", icon: Layers }
];

const implementationFailures = [
  "Multiple apps installed but not connected",
  "Manual work despite \"automation\" tools",
  "CRM, Books, Inventory, HR running in silos",
  "Reporting that doesn't match real operations",
  "Over-customization causing long-term instability"
];

const whatMakesUsDifferent = [
  { icon: Award, text: "Certified Zoho Premium Partner" },
  { icon: Clock, text: "10+ years of Zoho consulting & architecture experience" },
  { icon: CheckCircle, text: "500+ successful Zoho implementations" },
  { icon: Globe, text: "Clients across 40+ countries" },
  { icon: Database, text: "Deep expertise in CRM, Finance, ERP, AI & Automation" },
  { icon: Building2, text: "Industry-specific solution frameworks" },
  { icon: TrendingUp, text: "Long-term optimization & health monitoring" }
];

const zohoOneConnects = [
  "Sales pipelines",
  "Marketing campaigns",
  "Customer support",
  "Finance & accounting",
  "HR & recruitment",
  "Operations & inventory",
  "Internal collaboration"
];

const zohoOneEnables = [
  "30–50% reduction in manual work",
  "Faster decision-making through unified reporting",
  "Consistent data across departments",
  "Scalable growth without system rewrites"
];

const implementationFramework = [
  {
    step: "1",
    title: "Discovery & Business Mapping",
    description: "We analyze your current tools, workflows, data flow, and pain points. Every department is mapped before any configuration begins."
  },
  {
    step: "2",
    title: "Solution Architecture",
    description: "We design how Zoho CRM, Books, Inventory, People, Desk, Creator, and other apps interact—before enabling them."
  },
  {
    step: "3",
    title: "Data Migration & System Setup",
    description: "Clean, structured data migration from legacy CRMs, ERPs, spreadsheets, or third-party tools."
  },
  {
    step: "4",
    title: "Automation & Integrations",
    description: "Workflow automation, approval rules, third-party integrations, and API-based connections."
  },
  {
    step: "5",
    title: "Role-Based Training & Go-Live",
    description: "Department-wise training ensures real adoption—not shelfware."
  },
  {
    step: "6",
    title: "Post-Launch Optimization",
    description: "Monitoring, performance tuning, reporting enhancements, and future scalability planning."
  }
];

const departmentImplementations = [
  {
    title: "Sales & CRM Automation",
    description: "We implement Zoho CRM, Bigin, and Bookings to create structured pipelines, lead scoring, and automated follow-ups—aligned with real sales behavior.",
    icon: Target
  },
  {
    title: "Marketing & Lead Nurturing",
    description: "Zoho Campaigns, Marketing Automation, Forms, and PageSense are connected directly to CRM for measurable ROI.",
    icon: TrendingUp
  },
  {
    title: "Customer Support & Experience",
    description: "Zoho Desk, SalesIQ, Assist, and Lens create a unified support experience across chat, email, phone, and remote assistance.",
    icon: HeadphonesIcon
  },
  {
    title: "Finance & Accounting",
    description: "Zoho Books, Inventory, Invoice, Expense, and Payroll are implemented with compliance, reporting, and audit readiness in mind.",
    icon: DollarSign
  },
  {
    title: "HR & Recruitment",
    description: "Zoho People and Recruit manage onboarding, attendance, performance, and hiring workflows seamlessly.",
    icon: Briefcase
  },
  {
    title: "Operations, ERP & Custom Apps",
    description: "Zoho Creator, Projects, Sprints, and Inventory allow us to build custom ERP workflows where off-the-shelf systems fail.",
    icon: Settings
  },
  {
    title: "Workplace & Collaboration",
    description: "Zoho Mail, Cliq, WorkDrive, Writer, Sheet, and Show enable secure internal collaboration with enterprise control.",
    icon: Mail
  }
];

const industryImplementations = [
  { name: "Manufacturing & Distribution", icon: Factory, description: "Sales orders, inventory tracking, vendor management, production reporting, and finance automation under one system." },
  { name: "Healthcare & Clinics", icon: HeartPulse, description: "Lead management, appointment scheduling, billing, staff management, and compliance-ready workflows." },
  { name: "Recruitment & Staffing", icon: Users, description: "Candidate pipelines, client management, contracts, payroll, and reporting—all connected." },
  { name: "Real Estate & Property", icon: Home, description: "Lead capture, site visits, listings, contracts, commissions, and post-sales service." },
  { name: "Professional Services", icon: Briefcase, description: "CRM, project management, invoicing, timesheets, and client communication in one flow." },
  { name: "Education & Training", icon: GraduationCap, description: "Admissions, CRM, fee management, staff workflows, and reporting." },
  { name: "Retail & eCommerce", icon: ShoppingCart, description: "Inventory, orders, CRM, marketing, accounting, and customer support in one ecosystem." },
  { name: "Logistics & Supply Chain", icon: Truck, description: "Order tracking, invoicing, vendor coordination, and reporting automation." },
  { name: "Legal & Law Firms", icon: Scale, description: "Client intake, document management, billing, and compliance-driven workflows." },
  { name: "Financial Services", icon: DollarSign, description: "Lead management, compliance tracking, reporting, and client servicing." },
  { name: "Marketing & Creative", icon: Palette, description: "CRM, project tracking, billing, performance reporting, and collaboration." },
  { name: "SaaS & Technology", icon: Code, description: "Sales pipelines, onboarding automation, customer success, billing, and analytics." }
];

const whyChooseUs = [
  { icon: Award, text: "Zoho-certified architects, not generic developers" },
  { icon: Building2, text: "Industry-specific frameworks—not templates" },
  { icon: Shield, text: "Scalable configurations that don't break over time" },
  { icon: BarChart3, text: "Strong focus on data accuracy & reporting" },
  { icon: Zap, text: "AI & automation-ready architecture" },
  { icon: Users, text: "Long-term partnership mindset" }
];

const faqs = [
  {
    question: "Is Zoho One suitable for my business size?",
    answer: "Yes—from startups to enterprises with hundreds of users. Zoho One scales with your business, and we configure it to match your current needs while ensuring room for growth."
  },
  {
    question: "How long does Zoho One implementation take?",
    answer: "2–4 weeks for standard setups, 8–12 weeks for complex ERP-level implementations. The timeline depends on the number of departments, data migration complexity, and customization requirements."
  },
  {
    question: "Can Zoho One replace our existing ERP or CRM?",
    answer: "Yes, in most cases. We evaluate your current systems and architect the right migration path. Many businesses successfully replace Salesforce, HubSpot, SAP, or legacy ERPs with a properly implemented Zoho One."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. Optimization, reporting, automation, and health checks are part of our services. We offer flexible support plans including monthly retainers, on-demand support, and dedicated account management."
  },
  {
    question: "What makes ClubCode different from other Zoho partners?",
    answer: "We focus on architecture-first implementation, not just app enablement. Our team has 10+ years of experience and has completed 500+ implementations across 40+ countries. We build solutions that scale."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Absolutely! We provide role-based training tailored to each department—sales, finance, HR, operations, and management. Training ensures real adoption and ROI from your Zoho One investment."
  },
  {
    question: "Can you integrate Zoho One with our existing tools?",
    answer: "Yes. We specialize in third-party integrations including payment gateways, shipping providers, marketing tools, legacy databases, and custom APIs. Zoho One becomes the central hub of your tech stack."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in Manufacturing, Healthcare, Real Estate, Professional Services, Retail, Logistics, Education, Legal, Financial Services, and SaaS. Our industry-specific frameworks accelerate implementation."
  }
];

export default function ZohoOnePremiumPartner() {
  useEffect(() => {
    document.title = "Zoho One Implementation Partner | Certified Premium Partner - ClubCode Technology";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Certified Zoho Premium Partner specializing in Zoho One implementation, digital transformation, and business automation. 500+ implementations across 40+ countries.');
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.clubcodetechnology.com/zoho-one-premium-partner');
    
    let script = document.querySelector('#structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
      document.title = "ClubCode Technology";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-[#0B1C3D] overflow-hidden pt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3D] via-[#1a3a6e] to-[#0B1C3D]" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#E42527]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={zohoOneLogo} alt="Zoho One" className="h-12" />
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30">
                    Premium Partner
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Zoho One Implementation & 
                  <span className="text-gradient-primary"> Digital Transformation</span> Partner
                </h1>
                
                <p className="text-xl text-[#94A3B8] mb-4 font-medium">
                  Built, Implemented & Scaled by a Certified Zoho Premium Partner
                </p>
                
                <p className="text-[#CBD5E1] mb-6 leading-relaxed">
                  Zoho One is powerful—but without the right implementation partner, it often becomes under-utilized, fragmented, or over-customized. At ClubCode Technology, we don't just enable Zoho One—we architect, implement, customize, and scale it around how your business actually operates.
                </p>
                
                <p className="text-[#CBD5E1] mb-8 leading-relaxed">
                  As a <strong className="text-white">Certified Zoho Premium Partner</strong>, we help organizations replace disconnected systems with one intelligent operating platform, delivering clarity, automation, and measurable ROI across every department.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="https://www.zoho.com/one/signup.html" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10">
                      Start Free Trial
                    </Button>
                  </a>
                </div>
                
                <div className="mt-8 flex items-center gap-6 text-sm text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Onboarding Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>30-Day Trial</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                      >
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-dark-text-secondary">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Stats */}
        <section className="lg:hidden bg-[#0a1628] py-8">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-dark-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Implementations Fail */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-destructive/30 bg-destructive/10 text-destructive text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Common Pitfalls
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Zoho One Implementations Fail Without the Right Partner
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Zoho One itself is not the problem. Poor architecture, rushed configuration, and generic setups are.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground mb-6">
                  Most businesses approach Zoho One with one of these challenges:
                </p>
                <div className="space-y-4">
                  {implementationFailures.map((failure, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg"
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{failure}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    This is where ClubCode Technology makes the difference.
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    We implement Zoho One as a <strong className="text-primary">business operating system</strong>, not a collection of apps.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section-padding bg-[#0B1C3D]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Makes ClubCode Technology Different
              </h2>
              <p className="text-dark-text-secondary max-w-2xl mx-auto text-lg">
                Zoho builds the platform. We make it work for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatMakesUsDifferent.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-white font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-dark-text-secondary mt-8 text-lg"
            >
              Zoho One is only as powerful as the strategy behind it—and that's where we lead.
            </motion.p>
          </div>
        </section>

        {/* Zoho One as Business OS */}
        <section className="section-padding bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Unified Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Zoho One as a Business Operating System
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                (Not Just Software)
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground mb-6 text-lg">
                  Zoho One replaces 6–10 disconnected tools with a single source of truth, connecting:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {zohoOneConnects.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  With proper implementation, Zoho One enables:
                </h3>
                <div className="space-y-4">
                  {zohoOneEnables.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Implementation Framework */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Zoho One Implementation Framework
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A Proven, Enterprise-Ready Methodology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationFramework.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Implementations */}
        <section className="section-padding bg-[#0B1C3D]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                By Department
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Zoho One by Department – Implemented the Right Way
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentImplementations.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <dept.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{dept.title}</h3>
                  <p className="text-dark-text-secondary text-sm">{dept.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Implementations */}
        <section className="section-padding bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Industry Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Zoho One Industry-Specific Implementations
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {industryImplementations.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{industry.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Infographic Style */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Partner Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Businesses Choose ClubCode Technology for Zoho One
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground"
            >
              Trusted by brands across <strong className="text-foreground">Healthcare, Finance, Manufacturing, Legal, Retail & SaaS</strong>.
            </motion.p>
          </div>
        </section>

        {/* Trusted By */}
        <section className="section-padding bg-[#0B1C3D]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Leading Brands
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img 
                  src={clientLogosRow1} 
                  alt="Client logos" 
                  className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex justify-center"
              >
                <img 
                  src={clientLogosRow2} 
                  alt="More client logos" 
                  className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-light-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AccordionItem 
                      value={`faq-${index}`} 
                      className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-dark-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with Zoho One?
              </h2>
              <p className="text-dark-text-secondary text-lg mb-8">
                Schedule a free consultation with our Zoho One architects. Let's discuss how we can build your business operating system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://www.zoho.com/one/signup.html" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10">
                    Start 30-Day Trial
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
