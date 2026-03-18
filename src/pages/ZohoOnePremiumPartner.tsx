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
import { ZohoOneSuitesInfographic } from "@/components/zoho/ZohoOneSuitesInfographic";
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
    step: "01",
    title: "Discovery & Business Mapping",
    description: "We deep dive into your business processes, systems, and operational gaps to define clear transformation goals.",
    tags: ["Requirement Analysis", "Stakeholder Interviews", "System Audit"],
  },
  {
    step: "02",
    title: "Solution Architecture & Strategy",
    description: "We design a scalable Zoho One architecture tailored to your workflows, integrations, and long-term growth.",
    tags: ["Solution Design", "App Mapping", "Data Architecture"],
  },
  {
    step: "03",
    title: "Configuration & Custom Development",
    description: "We configure Zoho applications and build custom workflows using Zoho Creator, APIs, and automation tools.",
    tags: ["CRM Setup", "Creator Apps", "Workflow Automation"],
  },
  {
    step: "04",
    title: "Integration & Data Migration",
    description: "We ensure seamless integration with third-party systems and securely migrate your existing data.",
    tags: ["API Integration", "Data Migration", "System Sync"],
  },
  {
    step: "05",
    title: "Testing, QA & User Acceptance",
    description: "We rigorously test workflows, validate processes, and conduct UAT to ensure system reliability.",
    tags: ["QA Testing", "UAT", "Performance Optimization"],
  },
  {
    step: "06",
    title: "Deployment & Training",
    description: "We launch your Zoho ecosystem and train your team for smooth adoption and efficient usage.",
    tags: ["Go-Live", "Team Training", "Documentation"],
  },
  {
    step: "07",
    title: "Continuous Support & Optimization",
    description: "We provide ongoing support, performance monitoring, and continuous improvements as your business evolves.",
    tags: ["Support", "Optimization", "AI Enhancements"],
  },
];



  { name: "Manufacturing & Distribution", icon: Factory, description: "Sales orders, inventory tracking, vendor management, production reporting, and finance automation under one system.", route: "/industries/manufacturing" },
  { name: "Healthcare & Clinics", icon: HeartPulse, description: "Lead management, appointment scheduling, billing, staff management, and compliance-ready workflows.", route: "/industries/healthcare" },
  { name: "Recruitment & Staffing", icon: Users, description: "Candidate pipelines, client management, contracts, payroll, and reporting—all connected.", route: "/industries/recruitment" },
  { name: "Real Estate & Property", icon: Home, description: "Lead capture, site visits, listings, contracts, commissions, and post-sales service.", route: "/industries/real-estate" },
  { name: "Professional Services", icon: Briefcase, description: "CRM, project management, invoicing, timesheets, and client communication in one flow.", route: "/industries/professional-services" },
  { name: "Education & Training", icon: GraduationCap, description: "Admissions, CRM, fee management, staff workflows, and reporting.", route: "/industries/education" },
  { name: "Retail & eCommerce", icon: ShoppingCart, description: "Inventory, orders, CRM, marketing, accounting, and customer support in one ecosystem.", route: "/industries/retail" },
  { name: "Logistics & Supply Chain", icon: Truck, description: "Order tracking, invoicing, vendor coordination, and reporting automation.", route: "/industries/logistics" },
  { name: "Legal & Law Firms", icon: Scale, description: "Client intake, document management, billing, and compliance-driven workflows.", route: "/industries/legal" },
  { name: "Financial Services", icon: DollarSign, description: "Lead management, compliance tracking, reporting, and client servicing.", route: "/industries/financial-services" },
  { name: "Marketing & Creative", icon: Palette, description: "CRM, project tracking, billing, performance reporting, and collaboration.", route: "/industries/marketing-creative" },
  { name: "SaaS & Technology", icon: Code, description: "Sales pipelines, onboarding automation, customer success, billing, and analytics.", route: "/industries/saas" }
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
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30">
                    Certified Zoho One Premium Partner
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

        {/* Zoho One Suites Infographic - New Section */}
        <ZohoOneSuitesInfographic />

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

        {/* Top 10 Reasons Why Zoho One */}
        <section className="section-padding" style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFECD2 50%, #FFF8F0 100%)" }}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-[#FFF3E4] rounded-2xl p-8 md:p-12 border border-[#F5D5B0]/40"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
                10 reasons why Zoho One is the right business management solution
              </h2>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                Zoho One brings together 50+ integrated apps to run your entire business—from sales and marketing to finance, HR, and operations—on a single platform.
              </p>

              <div className="space-y-5">
                {[
                  { bold: "Unify", text: "all your business apps under one login, one admin panel, and one bill—eliminating tool sprawl and reducing software costs by up to 60%." },
                  { bold: "Automate", text: "repetitive workflows across departments with built-in workflow rules, approval chains, and cross-app triggers that save hours of manual work." },
                  { bold: "Sell", text: "smarter with Zoho CRM's AI-powered lead scoring, pipeline management, and real-time deal tracking—connected to marketing and support." },
                  { bold: "Manage", text: "finances end-to-end with Zoho Books, Inventory, Invoice, and Expense—fully compliant, audit-ready, and synced with your CRM." },
                  { bold: "Support", text: "customers across chat, email, phone, and remote assistance with Zoho Desk, SalesIQ, and Assist—all feeding into one customer timeline." },
                  { bold: "Recruit", text: "and manage employees seamlessly with Zoho People and Recruit—from hiring to onboarding, attendance, and performance reviews." },
                  { bold: "Collaborate", text: "internally with Zoho Mail, Cliq, WorkDrive, and Meeting—secure enterprise-grade tools that keep your team aligned." },
                  { bold: "Analyze", text: "everything with Zoho Analytics—build cross-department dashboards and reports that give leadership real-time visibility." },
                  { bold: "Customize", text: "with Zoho Creator's low-code platform—build custom apps, portals, and workflows without expensive development cycles." },
                  { bold: "Scale", text: "confidently knowing that Zoho One grows with your business—add users, apps, and integrations without switching platforms." },
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D97706]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#D97706]" />
                    </div>
                    <p className="text-[#2D2D2D] text-[15px] leading-relaxed">
                      <strong className="font-bold">{reason.bold}</strong> {reason.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Implementation Framework — Consulting-Grade Timeline */}
        <section className="section-padding bg-[#0B1C3D] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E88C30]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#E88C30]/30 bg-[#E88C30]/10 text-[#E88C30] text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Zoho One Implementation Framework
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
                A consulting-grade, enterprise-ready methodology refined over 500+ implementations
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E88C30]/60 via-[#E88C30]/30 to-transparent md:-translate-x-px" />

              {implementationFramework.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start mb-12 last:mb-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Glowing dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#E88C30] shadow-[0_0_12px_rgba(232,140,48,0.6)] -translate-x-1.5 md:-translate-x-1.5 mt-8 z-10" />

                    {/* Spacer for mobile */}
                    <div className="w-14 flex-shrink-0 md:hidden" />

                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                      <div className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E88C30]/40 hover:bg-white/[0.07] transition-all duration-300">
                        {/* Step number */}
                        <span className="inline-block text-xs font-bold tracking-widest text-[#E88C30] uppercase mb-2">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#E88C30] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-[#E88C30]/10 text-[#E88C30] text-xs font-medium border border-[#E88C30]/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>



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
                >
                  <Link
                    to={industry.route}
                    className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all group h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{industry.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">{industry.description}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
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
        <section className="section-padding bg-gradient-to-br from-[#0B1C3D] via-[#1a3a6e] to-[#0B1C3D] overflow-hidden">
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

            {/* Scrolling Logo Marquee */}
            <div className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1C3D] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1C3D] to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex animate-marquee">
                {/* First set of logos */}
                <div className="flex items-center gap-6 px-3">
                  <div className="flex-shrink-0 bg-gradient-to-br from-slate-100 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={clientLogosRow1} alt="Client logos" className="h-12 md:h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 bg-gradient-to-br from-slate-100 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={clientLogosRow2} alt="More client logos" className="h-12 md:h-16 w-auto object-contain" />
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-6 px-3">
                  <div className="flex-shrink-0 bg-gradient-to-br from-slate-100 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={clientLogosRow1} alt="Client logos" className="h-12 md:h-16 w-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 bg-gradient-to-br from-slate-100 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={clientLogosRow2} alt="More client logos" className="h-12 md:h-16 w-auto object-contain" />
                  </div>
                </div>
              </div>
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
