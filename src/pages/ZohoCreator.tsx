import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { 
  Blocks, 
  Smartphone, 
  Workflow, 
  BarChart3, 
  Plug, 
  Sparkles,
  Building2,
  Users,
  Package,
  GraduationCap,
  ShoppingCart,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Code,
  Briefcase,
  AlertTriangle,
  Target,
  Settings,
  Database,
  Cog,
  Factory,
  HeartPulse,
  Truck,
  Home,
  Scale,
  Layers,
  Shield,
  Clock,
  MessageSquare,
  LineChart
} from "lucide-react";

const ZohoCreator = () => {
  useEffect(() => {
    document.title = "Zoho Creator Implementation Partner | Custom CRM, ERP & Business Systems | Club Code Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Creator implementation partner. Build custom CRM, ERP, and business systems that scale. Low-code development, workflow automation, and enterprise application development.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Creator Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "Club Code Technology"
      },
      "description": "Expert Zoho Creator custom application development, CRM, ERP, and enterprise system implementation services.",
      "serviceType": "Custom Application Development"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const whatCreatorIs = [
    "A low-code platform for building custom software without writing traditional code",
    "A system architecture platform for building CRM, ERP, and operations systems",
    "A mobile-first development environment with native iOS and Android apps",
    "A workflow automation engine for complex business processes",
    "An integration hub connecting to 500+ applications and services",
    "A scalable enterprise platform trusted by 30K+ organizations"
  ];

  const whenBusinessesNeed = [
    {
      icon: Settings,
      title: "Workflows Don't Fit Standard CRM",
      description: "Your sales, operations, or service processes are unique and can't be forced into off-the-shelf software."
    },
    {
      icon: Layers,
      title: "Multiple Departments Need One System",
      description: "Sales, operations, finance, and service teams need to work from the same data and processes."
    },
    {
      icon: Database,
      title: "ERP Is Too Heavy or Expensive",
      description: "Enterprise ERP systems are overkill for your needs, but spreadsheets aren't cutting it anymore."
    },
    {
      icon: Workflow,
      title: "Manual Processes Are Slowing Growth",
      description: "Approvals, handoffs, and data entry are creating bottlenecks and errors in your operations."
    },
    {
      icon: Plug,
      title: "Systems Don't Talk to Each Other",
      description: "Your CRM, accounting, inventory, and other tools operate as disconnected silos."
    },
    {
      icon: Code,
      title: "Custom Software Is Too Slow",
      description: "Traditional development takes months and costs too much for evolving business needs."
    }
  ];

  const developmentServices = [
    {
      icon: Blocks,
      title: "Custom Business Application Development",
      description: "Build purpose-built applications for your unique workflows—not generic software you have to work around.",
      features: ["Process mapping & requirements analysis", "UI/UX design for business users", "Deluge scripting for complex logic", "Mobile app deployment"]
    },
    {
      icon: Target,
      title: "Custom CRM Development Using Zoho Creator",
      description: "When Zoho CRM isn't flexible enough, Creator becomes the foundation for truly custom CRM systems.",
      features: ["Industry-specific CRM workflows", "Custom sales pipeline logic", "Client portal development", "Advanced reporting & analytics"]
    },
    {
      icon: Factory,
      title: "ERP-Like Systems & Operations Platforms",
      description: "Build comprehensive operations management without ERP licensing costs or implementation nightmares.",
      features: ["Inventory & order management", "Production & manufacturing workflows", "Multi-location operations", "Vendor & procurement systems"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation & Process Engineering",
      description: "Automate complex business processes with visual workflows, approvals, and conditional logic.",
      features: ["Multi-stage approval workflows", "Scheduled automation & alerts", "Business rule automation", "SLA tracking & escalations"]
    },
    {
      icon: Plug,
      title: "Integrations & API Development",
      description: "Connect Creator applications to your entire tech stack—ERPs, accounting, shipping, and more.",
      features: ["REST API development", "Webhook implementations", "Third-party integrations", "Real-time data sync"]
    },
    {
      icon: Database,
      title: "Data Migration & Modernization",
      description: "Move from legacy systems, spreadsheets, or disconnected tools to a unified Creator platform.",
      features: ["Data mapping & cleanup", "Phased migration approach", "Historical data preservation", "User training & adoption"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Deployment",
      description: "Every Creator application comes with native iOS and Android apps—no additional development required.",
      features: ["Native mobile apps", "Offline capabilities", "Push notifications", "Mobile-optimized UX"]
    },
    {
      icon: Users,
      title: "Training, Governance & Long-Term Support",
      description: "Ensure your team can use, maintain, and evolve your Creator applications over time.",
      features: ["Admin training & documentation", "User onboarding programs", "Governance frameworks", "Ongoing optimization support"]
    }
  ];

  const industrySolutions = [
    {
      icon: Factory,
      title: "Manufacturing & Distribution",
      description: "Production scheduling, inventory tracking, quality control, vendor management, and order fulfillment systems.",
      link: "/industries/manufacturing"
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Clinics",
      description: "Patient management, appointment scheduling, billing workflows, compliance tracking, and staff coordination.",
      link: "/industries/healthcare"
    },
    {
      icon: Users,
      title: "Recruitment & Staffing",
      description: "Candidate pipelines, client management, placement tracking, timesheet systems, and commission calculations.",
      link: "/industries/professional-services"
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Lead management, property listings, site visit tracking, contract management, and commission workflows.",
      link: "/industries/real-estate"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Project management, resource allocation, time tracking, client portals, and billing automation.",
      link: "/industries/professional-services"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Admissions management, student information systems, fee tracking, course scheduling, and certification workflows.",
      link: "/industries/education"
    },
    {
      icon: ShoppingCart,
      title: "Retail & eCommerce",
      description: "Multi-channel order management, inventory synchronization, customer service workflows, and returns processing.",
      link: "/industries/retail"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Fleet management, dispatch systems, delivery tracking, driver coordination, and route optimization.",
      link: "/industries/logistics"
    }
  ];

  const prebuiltSolutions = [
    { icon: Package, title: "Asset & Equipment Management", description: "Track assets, schedule maintenance, manage warranties, and automate service workflows." },
    { icon: Building2, title: "Construction & Project Management", description: "Centralize projects, track progress, manage subcontractors, and control budgets." },
    { icon: Wrench, title: "Procurement & Vendor Management", description: "Digital workflows for vendor onboarding, PO approvals, and spend tracking." },
    { icon: GraduationCap, title: "Education Management Systems", description: "Unified tools for admissions, scheduling, attendance, and student management." },
    { icon: BarChart3, title: "Internal Operations Dashboards", description: "Real-time visibility into KPIs, team performance, and business metrics." },
    { icon: Scale, title: "Compliance & Audit Systems", description: "Document management, audit trails, checklist automation, and reporting." }
  ];

  const whyProjectsFail = [
    {
      issue: "No Requirements Analysis",
      consequence: "Apps are built without understanding actual workflows, leading to low adoption.",
      prevention: "We conduct deep discovery sessions before any development begins."
    },
    {
      issue: "Over-Engineering",
      consequence: "Complex features that nobody uses, making the system hard to maintain.",
      prevention: "We build for today's needs with architecture that allows growth."
    },
    {
      issue: "Poor Data Architecture",
      consequence: "Data silos, duplicate records, and reporting that doesn't reflect reality.",
      prevention: "We design data models that support current and future requirements."
    },
    {
      issue: "No Integration Strategy",
      consequence: "Creator apps become another disconnected system in your tech stack.",
      prevention: "Integration architecture is defined before development starts."
    },
    {
      issue: "Inadequate Training",
      consequence: "Users don't understand the system, leading to workarounds and abandonment.",
      prevention: "Role-based training ensures every user knows how to work effectively."
    }
  ];

  const implementationMethodology = [
    {
      step: "01",
      title: "Discovery & Process Mapping",
      description: "Deep-dive into your workflows, pain points, and requirements. Every department and stakeholder is consulted."
    },
    {
      step: "02",
      title: "Solution Architecture",
      description: "Design the data model, app structure, integrations, and user experience before any development."
    },
    {
      step: "03",
      title: "Development & Configuration",
      description: "Build the application with iterative reviews, ensuring alignment with business needs."
    },
    {
      step: "04",
      title: "Integration & Automation",
      description: "Connect to your ecosystem and implement workflow automation, approvals, and notifications."
    },
    {
      step: "05",
      title: "Testing & User Acceptance",
      description: "Rigorous testing with real users and data to validate the solution meets requirements."
    },
    {
      step: "06",
      title: "Training & Go-Live",
      description: "Comprehensive training, data migration, and phased rollout with ongoing support."
    }
  ];

  const faqs = [
    {
      question: "What is Zoho Creator and how is it different from Zoho CRM?",
      answer: "Zoho Creator is a low-code platform for building custom applications—it's the foundation for creating software that fits your exact needs. Zoho CRM is a pre-built sales and customer management tool. We use Creator when CRM's standard features aren't flexible enough for your workflows."
    },
    {
      question: "Can Zoho Creator replace our existing ERP system?",
      answer: "For many mid-sized businesses, yes. Creator can handle inventory, orders, production, finance workflows, and more—without ERP licensing costs or implementation complexity. We assess your needs and recommend the right approach."
    },
    {
      question: "How long does a typical Creator implementation take?",
      answer: "Simple applications: 2-4 weeks. Comprehensive systems with multiple modules: 8-16 weeks. Enterprise-grade platforms: 3-6 months. Timeline depends on complexity, integrations, and data migration requirements."
    },
    {
      question: "Do Creator applications work on mobile?",
      answer: "Yes. Every application built on Creator automatically generates native iOS and Android apps. These include offline capabilities, push notifications, and mobile-optimized interfaces."
    },
    {
      question: "Can Creator integrate with our existing systems?",
      answer: "Absolutely. Creator connects to 500+ applications through pre-built connectors and can integrate with any system via REST APIs, webhooks, or custom Deluge scripting. We design integration architecture as part of every project."
    },
    {
      question: "What happens if our needs change after the system is built?",
      answer: "Creator's low-code nature means modifications are faster and less expensive than traditional development. We build with flexibility in mind and offer ongoing support for system evolution."
    },
    {
      question: "Is Zoho Creator secure for enterprise use?",
      answer: "Yes. Zoho Creator offers role-based access control, data encryption, audit logs, GDPR compliance, and SOC 2 Type II certification. We implement security best practices in every deployment."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Comprehensive training is included in every implementation. We provide role-based training for end users, admin training for system managers, and documentation for ongoing reference."
    }
  ];

  const stats = [
    { value: "7M+", label: "Apps Built Globally" },
    { value: "30K+", label: "Organizations" },
    { value: "6M+", label: "Active Users" },
    { value: "500+", label: "Integrations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Zoho Creator Implementation Partner
                </span>
                <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium">
                  Creator Champions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build Custom <span className="text-primary">CRM, ERP & Business Systems</span> That Scale
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Zoho Creator isn't just a "low-code tool"—it's the foundation for building enterprise-grade business applications that fit how you actually operate.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We design, develop, and deploy custom systems—from simple workflow apps to comprehensive operational platforms—that replace spreadsheets, legacy software, and disconnected tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border/50 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-background/50 rounded-xl">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Gartner Magic Quadrant</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Challenger 2024 - Enterprise Low-Code Application Platforms</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is Zoho Creator Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Is Zoho Creator?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than a low-code tool—Creator is a system architecture platform for enterprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {whatCreatorIs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When Businesses Need Creator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When Do Businesses Need Zoho Creator?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creator becomes essential when off-the-shelf software creates more problems than it solves.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whenBusinessesNeed.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zoho Creator Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom applications to enterprise platforms—we build systems that transform operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry-Specific Creator Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-architected frameworks accelerate implementation for your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={industry.link}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Built Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pre-Built Solutions We Customize
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start with proven frameworks and customize to your exact requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prebuiltSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Projects Fail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Common Pitfalls
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Creator Projects Fail—And How We Prevent It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most failures aren't about the platform—they're about the implementation approach.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whyProjectsFail.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wider">Issue</span>
                    <h4 className="font-semibold text-foreground">{item.issue}</h4>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Consequence</span>
                    <p className="text-sm text-muted-foreground">{item.consequence}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Prevention</span>
                    <p className="text-sm text-muted-foreground">{item.prevention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Methodology Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven 6-step approach that ensures successful Creator deployments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {implementationMethodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about Zoho Creator implementation.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border/50 px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Custom Business Systems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop forcing your business into software that doesn't fit. Let's build systems designed around how you actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/zoho-solutions">Explore Zoho Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZohoCreator;