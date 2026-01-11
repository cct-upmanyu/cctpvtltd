import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield,
  TrendingUp,
  Globe,
  Target,
  CheckCircle,
  Lightbulb,
  Handshake,
  Building2,
  Layers,
  Database,
  Cpu,
  BarChart3,
  Zap,
  AlertTriangle,
  FileSpreadsheet,
  Settings,
  GitBranch,
  Eye,
  Lock,
  Scale,
  Users,
  Cog,
  Network,
  Bot,
  RefreshCw,
  Award,
  MapPin,
  Briefcase,
  ChevronDown
} from "lucide-react";
import heroImage from "@/assets/hero-custom-erp.jpg";

// Helper component for expandable team member description
const ExpandableDescription = ({ description, maxLength = 150 }: { description: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsExpansion = description.length > maxLength;
  
  const displayText = needsExpansion && !isExpanded 
    ? description.substring(0, maxLength).trim() + "..." 
    : description;
  
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.p 
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-600 text-sm leading-relaxed"
        >
          {displayText}
        </motion.p>
      </AnimatePresence>
      {needsExpansion && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-primary text-sm font-medium flex items-center gap-1 hover:text-primary/80 transition-colors mx-auto"
        >
          {isExpanded ? "See Less" : "See More"}
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
};

// Team members data
const teamMembers = [
  { 
    name: "Navdeep Sen", 
    role: "Founder", 
    description: "Navdeep Sen is the founder and strategic force behind ClubCode Technology Pvt Ltd. He brings deep expertise in CRM architecture, ERP systems, automation, and the Zoho ecosystem, helping businesses replace fragmented tools with structured, scalable systems. He is known for translating complex business requirements into governed digital operating models that support long-term growth rather than short-term fixes.",
    featured: true
  },
  { 
    name: "Shiya Sharma", 
    role: "Business Development Analyst | Presales Zoho Engineer", 
    description: "Certified Zoho Marketing Automation Expert and Zoho Social Specialist. Shiya works at the intersection of business development, presales engineering, and client engagement, helping organizations align marketing, sales, and CRM systems through data-driven automation strategies. She translates business requirements into clearly defined functional and technical scopes, ensuring the right solution is proposed from the outset. She supports revenue growth and client retention by collaborating closely with clients during presales and delivery phases, ensuring clarity in requirements, smooth project execution, and long-term value realization. Shiya also supports business partner relationships and collaboration initiatives, helping strengthen ecosystem synergies and enable long-term partnership success."
  },
  { 
    name: "Deepak Verma", 
    role: "Business Development Executive", 
    description: "Deepak works closely with prospective and existing clients to understand business challenges, operational goals, and technology constraints. He plays a key role in aligning client expectations with appropriate platforms, implementation approaches, and timelines. His consultative approach helps reduce project risk and ensures a strong foundation for successful delivery."
  },
  { 
    name: "Ravi Kumar", 
    role: "Project Manager | Senior Zoho Developer | Salesforce Integration Expert", 
    description: "Ravi brings over 12 years of experience delivering enterprise-grade CRM, ERP, and integration projects across diverse industries. He leads complex implementations with a strong focus on scope control, timelines, quality assurance, and stakeholder coordination. Technically, Ravi specializes in Zoho development, Salesforce integrations, extension development, and advanced automation. He bridges architecture, governance, and hands-on execution to ensure systems are scalable, secure, and maintainable."
  },
  { 
    name: "Vinay Kumar", 
    role: "Full Stack Developer", 
    description: "Vinay is responsible for building scalable web applications, portals, and integrations that connect multiple business systems seamlessly. He works across Zoho CRM, Zoho Books, Zoho Inventory, HRMS platforms, WordPress, custom plugins, and AI integrations. Vinay focuses on performance, reliability, and clean system connectivity, ensuring solutions are robust and production-ready. His work supports long-term scalability and smooth user experiences across platforms."
  },
  { 
    name: "Sahil Kumar", 
    role: "Full Stack Developer", 
    description: "Sahil specializes in developing custom applications using Zoho Creator, Zoho One, and Zoho Catalyst for businesses with complex workflows. He designs secure, user-friendly applications and backend services that extend platform capabilities beyond standard configurations. Sahil focuses on building systems that are stable, maintainable, and scalable. His work ensures business users can operate efficiently while systems remain flexible for future growth."
  },
  { 
    name: "Gaurav Sharma", 
    role: "Zoho Developer", 
    description: "Gaurav works across the Zoho ecosystem, including Zoho CRM, Creator, Books, Projects, Analytics, and FSM. He designs governed data models, custom workflows, automation logic, and reporting structures aligned to business processes. Gaurav focuses on data accuracy, operational clarity, and system reliability. His implementations help organizations gain better visibility, control, and trust in their business data."
  },
];

// Commitment items
const commitmentItems = [
  { icon: Settings, label: "Simplify Operations" },
  { icon: Eye, label: "Improve Visibility" },
  { icon: Zap, label: "Automate Intelligently" },
  { icon: Lock, label: "Secure Data" },
  { icon: Scale, label: "Scale Sustainably" },
];

// What we're known for
const trustSignals = [
  { icon: Building2, title: "CRM, ERP & Automation Architecture", description: "Deep expertise in designing integrated business systems" },
  { icon: Layers, title: "Zoho Ecosystem Experience", description: "Comprehensive knowledge across all Zoho applications" },
  { icon: Handshake, title: "Consultative Guidance", description: "Strategic advice based on business needs, not product sales" },
  { icon: Briefcase, title: "Industry-Aware Workflows", description: "Solutions designed with domain-specific understanding" },
  { icon: RefreshCw, title: "Long-Term Optimization", description: "Continuous improvement and evolution of systems" },
];

// Approach principles
const principles = [
  { icon: Layers, title: "System-First Design", description: "Architecture before automation—building foundations that last" },
  { icon: Shield, title: "Governance Before Automation", description: "Establish control frameworks before scaling processes" },
  { icon: Database, title: "Data Integrity Over Speed", description: "Accuracy and consistency as non-negotiable standards" },
  { icon: TrendingUp, title: "Scalability by Design", description: "Every solution built to grow with your business" },
];

// Service ecosystem
const serviceNodes = [
  { icon: Target, title: "CRM Services" },
  { icon: Building2, title: "ERP Services" },
  { icon: Layers, title: "Zoho Ecosystem" },
  { icon: GitBranch, title: "Data Migration & Integrations" },
  { icon: Bot, title: "AI & Automation" },
];

// Founder's observed problems
const founderProblems = [
  { icon: AlertTriangle, text: "CRMs under-utilized" },
  { icon: FileSpreadsheet, text: "ERPs bypassed with spreadsheets" },
  { icon: Zap, text: "Automation without governance" },
  { icon: Database, text: "Conflicting data across tools" },
  { icon: Users, text: "Teams adapting to systems" },
];

// Evolution milestones
const evolutionMilestones = [
  { title: "CRM & Automation Practice", description: "Building expertise in customer relationship systems" },
  { title: "Systems Consulting Expansion", description: "Growing into comprehensive business system design" },
  { title: "ERP, Data, AI & Platform Architecture", description: "Expanding capabilities across enterprise platforms" },
  { title: "Global Delivery & Long-Term Partnerships", description: "Serving clients across continents with dedicated teams" },
];

// Global regions
const globalRegions = [
  { name: "India", flag: "🇮🇳" },
  { name: "UK", flag: "🇬🇧" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Middle East", flag: "🇦🇪" },
  { name: "Europe", flag: "🇪🇺" },
];

export default function Company() {
  useEffect(() => {
    document.title = "About Us | Club Code Technology - System Design Experts";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Club Code Technology designs secure, transparent, and scalable digital systems for long-term business growth. We help businesses overcome fragmentation through system-first architecture.');
    
    return () => {
      document.title = "ClubCode Technology";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* HERO SECTION — BRAND POSITIONING */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/90 via-[#0B1C3D]/80 to-[#0B1C3D]/70" />
        
        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Designing Business Systems
              <span className="text-[#3FE0F0] block mt-2">That Scale With Confidence</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Businesses don't fail because they lack software.
              </p>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                They fail because their systems don't work together.
              </p>
            </div>
            
            <p className="text-lg text-white/70 max-w-2xl mb-10">
              ClubCode Technology Pvt Ltd designs secure, transparent, and scalable digital systems for long-term business growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" variant="heroDark">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="heroSecondary">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1 — ABOUT: PROBLEM → PURPOSE → SOLUTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              About ClubCode Technology Pvt Ltd
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          {/* 3-Column Infographic */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-red-100 flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">The Problem</h3>
              <p className="text-muted-foreground">
                Operational fragmentation, disconnected tools, and short-term decisions leave businesses struggling to scale.
              </p>
            </motion.div>

            {/* Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground">
                Founded to help businesses overcome fragmentation through system-first architecture and strategic guidance.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">The Solution</h3>
              <p className="text-muted-foreground">
                Secure, transparent, scalable digital systems guided by strategy—not sales pressure.
              </p>
            </motion.div>
          </div>

          {/* Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-[#0B1C3D] to-[#1a3a6e] rounded-2xl p-8 text-center"
          >
            <p className="text-white/90 text-lg">
              We work with SMBs to enterprises, helping them adopt the right software, architecture, and automation—guided by strategy, not sales pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY: EVOLUTION TIMELINE */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Evolution of ClubCode Technology Pvt Ltd
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/30 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-4 gap-8">
              {evolutionMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-[#0B1C3D] z-10" />
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:mt-8 text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-sm text-white/70">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-white/80 italic max-w-2xl mx-auto">
              "Technology should adapt to the business — not the other way around."
            </p>
          </motion.div>

          {/* Global Map with Flags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {globalRegions.map((region) => (
              <div
                key={region.name}
                className="flex items-center gap-3 px-5 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/15 transition-colors"
              >
                <span className="text-2xl">{region.flag}</span>
                <span className="text-white font-medium">{region.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — FOUNDER'S VISION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Founder's Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Insight That Started It All
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Founder Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              {/* Image Placeholder */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Founder Image Placeholder</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Navdeep Sen</h3>
              <p className="text-primary font-medium mb-4">Founder</p>
              <p className="text-muted-foreground">
                Navdeep Sen is the founder and strategic force behind Club Code Technology. He brings deep expertise in CRM architecture, ERP systems, automation, and the Zoho ecosystem, helping businesses replace fragmented tools with structured, scalable systems. He is known for translating complex business requirements into governed digital operating models that support long-term growth rather than short-term fixes.
              </p>
            </motion.div>

            {/* Problems Observed - Icon Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Problems Observed in the Industry</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {founderProblems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <motion.div
                      key={problem.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-foreground font-medium">{problem.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-[#0B1C3D] to-[#1a3a6e] rounded-xl p-6">
                <p className="text-white/90 text-lg">
                  "The problem was never software availability. It was poor system design and short-term decision making."
                </p>
                <p className="text-primary mt-2 font-medium">— Navdeep Sen</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE CORE BELIEF: BELIEF PILLARS */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              The Core Belief
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Foundation
            </h2>
          </motion.div>

          {/* 3 Belief Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent h-full rounded-2xl p-8 border border-primary/20 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Right Software for Long-Term Fit</h3>
                <p className="text-white/70">
                  We recommend solutions based on your business trajectory, not short-term convenience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent h-full rounded-2xl p-8 border border-primary/20 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Honest Technology Partnership</h3>
                <p className="text-white/70">
                  Transparent communication, realistic expectations, and genuine care for your success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-primary/20 to-transparent h-full rounded-2xl p-8 border border-primary/20 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security, Transparency & Scalability</h3>
                <p className="text-white/70">
                  Every system we design prioritizes data security, clear visibility, and room to grow.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-white/80 italic max-w-2xl mx-auto">
              This system-first philosophy guides every engagement at Club Code Technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — WHAT WE DO: SERVICE ECOSYSTEM MAP */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Ecosystem
            </h2>
          </motion.div>

          {/* Ecosystem Diagram */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Center Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-48 h-48 mx-auto bg-gradient-to-br from-[#0B1C3D] to-[#1a3a6e] rounded-full flex items-center justify-center mb-8 shadow-xl"
            >
              <div className="text-center">
                <Network className="w-10 h-10 text-primary mx-auto mb-2" />
                <p className="text-white font-bold text-sm px-4">Integrated Business Systems</p>
              </div>
            </motion.div>

            {/* Surrounding Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {serviceNodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{node.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just deploy software. We design systems that reflect how businesses actually operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — HOW WE THINK: PRINCIPLES GRID */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Think
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{principle.title}</h3>
                  <p className="text-sm text-white/70">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT WE'RE KNOWN FOR: TRUST SIGNAL GRID */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              What We're Known For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Reputation in the Industry
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground">{signal.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg font-medium text-foreground">
              We act as technology partners, not vendors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 — MEET THE TEAM */}
      <section className="bg-white section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#0B1C3D]/20 bg-[#0B1C3D]/5 text-[#0B1C3D] text-sm font-medium mb-4">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-4">
              A Unique Team with Out-of-Bounds Ideas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Behind every system we design is a team that blends strategy, technical depth, and execution excellence.
            </p>
          </motion.div>

          {/* Featured Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-[#0B1C3D] to-[#1a3a6e] rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Placeholder */}
                <div className="w-48 h-48 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                  <Users className="w-20 h-20 text-primary" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">Navdeep Sen</h3>
                  <p className="text-primary font-medium mb-4">Founder</p>
                  <p className="text-white/80 leading-relaxed">
                    Navdeep Sen is the founder and strategic force behind ClubCode Technology Pvt Ltd. He brings deep expertise in CRM architecture, ERP systems, automation, and the Zoho ecosystem, helping businesses replace fragmented tools with structured, scalable systems. He is known for translating complex business requirements into governed digital operating models that support long-term growth rather than short-term fixes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(m => !m.featured).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0B1C3D]/20 transition-all group flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-[#0B1C3D]/10 to-[#0B1C3D]/5 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors flex-shrink-0">
                  <Users className="w-14 h-14 text-[#0B1C3D] group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-[#0B1C3D] text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <div className="flex-1">
                    <ExpandableDescription description={member.description} maxLength={280} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — OUR COMMITMENT: COMMITMENT STRIP */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Promise
            </h2>
          </motion.div>

          {/* Commitment Strip */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {commitmentItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-full shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-[#0B1C3D] to-[#1a3a6e] rounded-2xl p-8 text-center"
          >
            <p className="text-xl text-white font-medium">
              ClubCode Technology Pvt Ltd is not just a technology provider — we are a long-term systems partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Systems That Scale?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let's discuss how we can help your business overcome fragmentation and build a foundation for long-term growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="heroDark">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="heroSecondary">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
