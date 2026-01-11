import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-custom-erp.jpg";
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
  LineChart,
  FileSpreadsheet,
  Zap,
  TrendingUp,
  CircleDot,
  Globe,
  Award,
  BadgeCheck,
  ChevronRight,
  Check,
  X,
  Lightbulb,
  Server,
  Layout,
  Monitor,
  Rocket,
  Search,
  ThumbsUp,
  MapPin
} from "lucide-react";

const ZohoCreator = () => {
  const [activeArchitectureNode, setActiveArchitectureNode] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Zoho Creator Implementation Partner | Custom CRM, ERP & Business Systems | ClubCode Technology Pvt Ltd";
    
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
        "name": "ClubCode Technology Pvt Ltd"
      },
      "description": "Expert Zoho Creator custom application development, CRM, ERP, and enterprise system implementation services.",
      "serviceType": "Custom Application Development"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Section 1: What Creator Is - Explainer Content
  const creatorExplainer = {
    title: "The Low-Code Platform for Enterprise Systems",
    description: "Zoho Creator isn't just a drag-and-drop app builder—it's a comprehensive platform for building enterprise-grade CRM, ERP, and operations systems that scale with your business.",
    highlights: [
      "7M+ applications built globally",
      "30K+ organizations trust Creator",
      "500+ pre-built integrations",
      "Native iOS & Android apps"
    ]
  };

  // Decision Checklist Items
  const decisionChecklist = [
    {
      icon: Settings,
      title: "Non-Standard Workflows",
      description: "Your processes don't fit into standard CRM or ERP pipelines"
    },
    {
      icon: Layers,
      title: "Cross-Department Systems",
      description: "Multiple teams need to work from unified data and processes"
    },
    {
      icon: Database,
      title: "ERP Is Overkill",
      description: "Traditional ERP feels too heavy, expensive, or complex"
    },
    {
      icon: FileSpreadsheet,
      title: "Spreadsheet Chaos",
      description: "Operations run on disconnected spreadsheets and manual data entry"
    },
    {
      icon: Code,
      title: "Custom Logic Required",
      description: "You need conditional workflows, approvals, and integrations"
    }
  ];

  // Section 2: Architecture Diagram Nodes
  const architectureNodes = [
    { icon: Target, title: "Custom CRMs", description: "Sales, client management, pipelines tailored to your process", position: "top-left" },
    { icon: Factory, title: "ERP-Like Systems", description: "Inventory, orders, production, finance—without licensing costs", position: "top-right" },
    { icon: Wrench, title: "Internal Tools", description: "Employee portals, HR systems, asset tracking, approvals", position: "right" },
    { icon: Users, title: "Client Portals", description: "Self-service interfaces for customers and vendors", position: "bottom-right" },
    { icon: Building2, title: "Industry Platforms", description: "Vertical solutions for manufacturing, healthcare, logistics", position: "bottom-left" },
    { icon: Plug, title: "Integration Hubs", description: "Connect to ERPs, accounting, shipping, and 500+ apps", position: "left" }
  ];

  // Section 3: Decision Matrix
  const decisionMatrixPositive = [
    { icon: Workflow, text: "Workflows can't be modeled in standard CRM" },
    { icon: Settings, text: "Multiple departments need one connected system" },
    { icon: Database, text: "ERP is too rigid for your operations" },
    { icon: Shield, text: "Custom approval chains and business rules" },
    { icon: Layers, text: "Need to replace multiple disconnected tools" }
  ];

  const decisionMatrixAlternatives = [
    { product: "Zoho CRM", useCase: "Standard sales pipeline, lead management, basic automation" },
    { product: "Zoho Catalyst", useCase: "Full-stack serverless development with more coding control" },
    { product: "Hybrid Architecture", useCase: "Creator + CRM + other Zoho apps working together" }
  ];

  // Section 4: Services Grid
  const services = [
    {
      icon: Blocks,
      title: "Custom Business Applications",
      description: "Build purpose-built applications for your unique workflows"
    },
    {
      icon: Target,
      title: "Custom CRM Using Creator",
      description: "When Zoho CRM isn't flexible enough for your sales process"
    },
    {
      icon: Factory,
      title: "ERP-Like Operations Systems",
      description: "Comprehensive operations without ERP licensing costs"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Visual workflows, approvals, and conditional logic"
    },
    {
      icon: Plug,
      title: "Integrations & APIs",
      description: "Connect to your entire tech stack with REST APIs"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Move from legacy systems to unified Creator platform"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS & Android apps with offline capability"
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Admin training, governance, and long-term optimization"
    }
  ];

  // Section 5: Industry Solutions
  const industries = [
    { icon: Factory, title: "Manufacturing", focus: "Production, inventory, quality control", link: "/industries/manufacturing" },
    { icon: HeartPulse, title: "Healthcare", focus: "Patient management, compliance", link: "/industries/healthcare" },
    { icon: Users, title: "Recruitment", focus: "Candidate pipelines, placements", link: "/industries/recruitment" },
    { icon: Home, title: "Real Estate", focus: "Leads, listings, commissions", link: "/industries/real-estate" },
    { icon: Briefcase, title: "Professional Services", focus: "Projects, resources, billing", link: "/industries/professional-services" },
    { icon: GraduationCap, title: "Education", focus: "Admissions, students, courses", link: "/industries/education" },
    { icon: ShoppingCart, title: "Retail", focus: "Orders, inventory, customers", link: "/industries/retail" },
    { icon: Truck, title: "Logistics", focus: "Fleet, dispatch, tracking", link: "/industries/logistics" },
    { icon: Scale, title: "Financial Services", focus: "Compliance, client portfolios", link: "/industries/financial-services" }
  ];

  // Section 6: Pre-Built Solutions
  const prebuiltSolutions = [
    { icon: ShoppingCart, title: "Order Management", description: "End-to-end order processing" },
    { icon: Users, title: "Employee Management", description: "Complete HR & employee lifecycle" },
    { icon: Clock, title: "Attendance Management", description: "Time tracking & attendance" },
    { icon: Truck, title: "Driver Management", description: "Driver profiles & scheduling" },
    { icon: Settings, title: "Fleet Management", description: "Vehicle tracking & maintenance" },
    { icon: Truck, title: "Logistics Management", description: "Shipments & delivery tracking" },
    { icon: Package, title: "Inventory Management", description: "Stock control & warehousing" },
    { icon: BarChart3, title: "Payment Handling", description: "Invoices & payment tracking" },
    { icon: Wrench, title: "Waste Management", description: "Collection & disposal workflows" }
  ];

  // Section 7: Why Projects Fail
  const failureReasons = [
    {
      issue: "No Requirements Analysis",
      consequence: "Apps built without understanding actual workflows—leading to low adoption",
      prevention: "Deep discovery sessions before any development begins"
    },
    {
      issue: "Over-Engineering",
      consequence: "Complex features nobody uses, making systems hard to maintain",
      prevention: "Build for today's needs with architecture that allows growth"
    },
    {
      issue: "Poor Data Architecture",
      consequence: "Data silos, duplicate records, reporting that doesn't reflect reality",
      prevention: "Design data models that support current and future requirements"
    },
    {
      issue: "No Integration Strategy",
      consequence: "Creator apps become another disconnected system",
      prevention: "Integration architecture defined before development starts"
    },
    {
      issue: "Inadequate Training",
      consequence: "Users don't understand the system—workarounds and abandonment",
      prevention: "Role-based training ensures every user knows how to work effectively"
    }
  ];

  // Section 8: Trust Panel Stats
  const trustStats = [
    { value: "250+", label: "Creator Deployments" },
    { value: "15+", label: "Industries Served" },
    { value: "50+", label: "Countries" },
    { value: "99%", label: "Client Retention" }
  ];

  const certifications = [
    { title: "Zoho Premium Partner", icon: Award },
    { title: "Creator Champions", icon: BadgeCheck },
    { title: "Advanced Certified", icon: Shield }
  ];

  // Section 9: Implementation Methodology
  const methodology = [
    { step: "01", title: "Discovery", description: "Deep-dive into workflows and requirements", icon: Search },
    { step: "02", title: "Architecture", description: "Design data models and app structure", icon: Layout },
    { step: "03", title: "Development", description: "Build with iterative reviews", icon: Code },
    { step: "04", title: "Integration", description: "Connect to your ecosystem", icon: Plug },
    { step: "05", title: "Go-Live", description: "Training, migration, and rollout", icon: Rocket }
  ];

  // Section 10: FAQs
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
      answer: "Yes. Every application built on Creator automatically generates native iOS and Android apps with offline capabilities, push notifications, and mobile-optimized interfaces."
    },
    {
      question: "Can Creator integrate with our existing systems?",
      answer: "Absolutely. Creator connects to 500+ applications through pre-built connectors and can integrate with any system via REST APIs, webhooks, or custom Deluge scripting."
    },
    {
      question: "What happens if our needs change after the system is built?",
      answer: "Creator's low-code nature means modifications are faster and less expensive than traditional development. We build with flexibility in mind and offer ongoing support for system evolution."
    },
    {
      question: "Is Zoho Creator secure for enterprise use?",
      answer: "Yes. Zoho Creator offers role-based access control, data encryption, audit logs, GDPR compliance, and SOC 2 Type II certification."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Comprehensive training is included in every implementation—role-based training for end users, admin training for system managers, and documentation for ongoing reference."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-24 pb-20 min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Zoho Creator Custom Systems" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,70%,14%)]/95 via-[hsl(217,70%,14%)]/85 to-[hsl(217,70%,14%)]/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary rounded-full text-sm font-medium backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  Zoho Premium Partner
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-full text-sm font-medium backdrop-blur-sm">
                  <BadgeCheck className="w-4 h-4" />
                  Creator Champions
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Zoho Creator Implementation Partner & Custom System Development Experts
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Build Custom CRM, ERP & Business Systems That Scale With Your Business
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="heroPrimary" size="lg" className="text-lg px-8 h-14">
                  <Link to="/contact">
                    Talk to a Zoho Creator Expert
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 1: WHAT CREATOR IS (EXPLAINER + CHECKLIST) ========== */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Is Zoho Creator?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Panel: Explainer Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 via-card to-card rounded-2xl p-8 border border-primary/20 shadow-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Blocks className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{creatorExplainer.title}</h3>
                <p className="text-muted-foreground text-lg mb-8">{creatorExplainer.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {creatorExplainer.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-background/50 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Decision Checklist Infographic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
                <h3 className="text-xl font-bold text-foreground mb-2">When You Need Zoho Creator</h3>
                <p className="text-muted-foreground mb-6">If any of these sound familiar, Creator is your solution:</p>
                
                <div className="space-y-4">
                  {decisionChecklist.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: SYSTEM ARCHITECTURE DIAGRAM ========== */}
      <section className="py-20 bg-dark-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Just an App Builder—A Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zoho Creator sits at the center of your business architecture, connecting every system and workflow.
            </p>
          </motion.div>

          {/* Architecture Diagram - Solar System Style */}
          <div className="relative max-w-6xl mx-auto">
            {/* Orbital Rings */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[500px] h-[500px] border border-primary/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-primary/20 rounded-full" />
            </div>

            {/* Center Hub - Zoho Creator Logo */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="relative mx-auto w-52 h-52 md:w-64 md:h-64 mb-8 lg:mb-0"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0483E] via-[#F48120] to-[#FACD3D] rounded-full animate-pulse opacity-20 blur-xl" />
              
              {/* Main Circle with Zoho Creator branding */}
              <div className="absolute inset-2 bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-full border-2 border-primary/30 flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                
                <div className="text-center relative z-10 p-4">
                  {/* Zoho Creator styled logo */}
                  <div className="relative mb-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-[#F0483E] via-[#F48120] to-[#FACD3D] rounded-xl flex items-center justify-center shadow-lg">
                      <Blocks className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl block">Zoho</span>
                  <span className="text-primary font-bold text-xl md:text-2xl block">Creator</span>
                </div>
              </div>

              {/* Connection lines to nodes - animated */}
              <div className="hidden lg:block">
                {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left"
                    style={{ transform: `rotate(${angle}deg)` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Surrounding Service Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 lg:mt-12">
              {architectureNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`relative group cursor-pointer ${activeArchitectureNode === idx ? 'z-10' : ''}`}
                  onMouseEnter={() => setActiveArchitectureNode(idx)}
                  onMouseLeave={() => setActiveArchitectureNode(null)}
                >
                  <div className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    activeArchitectureNode === idx 
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary shadow-lg shadow-primary/30 scale-105' 
                      : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-primary/50 hover:bg-white/10'
                  }`}>
                    {/* Icon with gradient background matching Zoho branding */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeArchitectureNode === idx 
                        ? 'bg-gradient-to-br from-[#F0483E] via-[#F48120] to-[#FACD3D]' 
                        : 'bg-primary/20 group-hover:bg-primary/30'
                    }`}>
                      <node.icon className={`w-6 h-6 md:w-7 md:h-7 ${activeArchitectureNode === idx ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-2">{node.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{node.description}</p>
                    
                    {/* Connection indicator */}
                    <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 ${
                      activeArchitectureNode === idx 
                        ? 'bg-primary shadow-lg shadow-primary/50' 
                        : 'bg-primary/30'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: DECISION MATRIX ========== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              When Is Zoho Creator Right?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A clear decision framework to choose the right platform for your needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Positive Fit Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-500/10 to-card rounded-2xl p-8 border border-green-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Creator Is Ideal When</h3>
                </div>
                
                <div className="space-y-4">
                  {decisionMatrixPositive.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-foreground font-medium pt-2">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Alternatives Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-card rounded-2xl p-8 border border-blue-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">When We Recommend</h3>
                </div>
                
                <div className="space-y-4">
                  {decisionMatrixAlternatives.map((item, idx) => (
                    <div key={idx} className="p-4 bg-background/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-semibold">
                          {item.product}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.useCase}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Not sure?</strong> We analyze your requirements and recommend the right platform—sometimes it's a combination.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: SERVICES CAPABILITY GRID ========== */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: INDUSTRY TILE GRID ========== */}
      <section className="py-20 bg-background">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={industry.link}>
                  <div className="group h-full p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-xs text-muted-foreground">{industry.focus}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: PRE-BUILT SOLUTIONS WE HAVE ========== */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Pre-Built Solutions We Have
            </h2>
            <p className="text-muted-foreground">Ready-to-deploy solutions—fully customized to your needs</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {prebuiltSolutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="h-full p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{solution.title}</h4>
                  <p className="text-xs text-muted-foreground">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: WHY PROJECTS FAIL (RISK VS PREVENTION) ========== */}
      <section className="py-20 bg-background">
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
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Failure Side */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Common Failures</h3>
                </div>
                
                {failureReasons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{item.issue}</h4>
                    <p className="text-sm text-muted-foreground">{item.consequence}</p>
                  </motion.div>
                ))}
              </div>

              {/* Prevention Side */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Our Prevention</h3>
                </div>
                
                {failureReasons.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-green-500/5 border border-green-500/10 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">{item.prevention}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: TRUST & AUTHORITY PANEL ========== */}
      <section className="py-20 bg-dark-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why ClubCode Technology Pvt Ltd
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade expertise backed by global experience and certifications.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {trustStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10"
              >
                <cert.icon className="w-6 h-6 text-primary" />
                <span className="text-white font-medium">{cert.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Global Presence */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <Globe className="w-5 h-5 text-primary" />
            <span>Serving clients across USA, UK, UAE, Australia, India & Europe</span>
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 9: IMPLEMENTATION METHODOLOGY TIMELINE ========== */}
      <section className="py-20 bg-background">
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
              A proven approach that ensures successful Creator deployments.
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {methodology.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 w-14 h-14 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-xs font-bold text-primary mb-2">STEP {step.step}</div>
                  
                  {/* Step Title */}
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  
                  {/* Step Description */}
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 10: FAQ ACCORDION ========== */}
      <section className="py-20 bg-muted/30">
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
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA: CONVERSION BANNER ========== */}
      <section className="py-20 bg-dark-gradient relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Systems That Fit Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Stop forcing your business into software that doesn't fit. Let's build something designed around how you actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="heroPrimary" size="lg" className="text-lg px-10 h-14">
                <Link to="/contact">
                  Sign Up Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroSecondary" size="lg" className="text-lg px-10 h-14">
                <Link to="/contact">
                  Talk to a Creator Expert
                </Link>
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
