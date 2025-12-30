import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Database, 
  ArrowRightLeft, 
  CheckCircle, 
  Shield, 
  Zap, 
  Brain,
  FileSpreadsheet,
  Building2,
  ShoppingCart,
  Briefcase,
  Scale,
  Users,
  ArrowDown,
  Clock,
  Target,
  BarChart3
} from "lucide-react";
import dataMigrationHero from "@/assets/data-migration-hero.jpg";

// Platforms migrated
const platformsFrom = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Freshsales", category: "CRM" },
  { name: "Microsoft Dynamics", category: "CRM" },
  { name: "Kustomer", category: "CRM" },
  { name: "QuickBooks", category: "Accounting" },
  { name: "Xero", category: "Accounting" },
  { name: "MYOB", category: "Accounting" },
  { name: "Sage", category: "Accounting" },
  { name: "Lawmatics", category: "Legal" },
  { name: "MyCase", category: "Legal" },
  { name: "JobDiva", category: "Staffing" },
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Custom Legacy", category: "Database" },
];

const platformsTo = [
  "Zoho CRM",
  "Zoho Creator",
  "Zoho Books",
  "Zoho People",
  "Zoho Inventory",
  "Zoho One",
];

const migrationSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current systems, data structures, and business processes to create a comprehensive migration plan.",
    icon: Target,
  },
  {
    step: "02",
    title: "Data Audit & Cleanup",
    description: "Cleanse and standardize your data to ensure only quality information moves to your new system.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "Mapping & Validation",
    description: "Execute precise field mapping, relationship preservation, and thorough data validation.",
    icon: ArrowRightLeft,
  },
  {
    step: "04",
    title: "Migration Execution",
    description: "Perform the migration with real-time monitoring, rollback capabilities, and zero downtime approach.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Testing & Reconciliation",
    description: "Comprehensive testing and data reconciliation to ensure 100% accuracy and integrity.",
    icon: CheckCircle,
  },
  {
    step: "06",
    title: "AI Enablement",
    description: "Enhance your new system with AI capabilities for predictions, insights, and intelligent automation.",
    icon: Brain,
  },
];

const features = [
  { icon: Database, title: "Zero Data Loss", description: "100% data integrity guaranteed" },
  { icon: ArrowRightLeft, title: "Seamless Transition", description: "Minimal business disruption" },
  { icon: Shield, title: "Secure Process", description: "Enterprise-grade security" },
  { icon: Zap, title: "Fast Execution", description: "Efficient timeline delivery" },
  { icon: Brain, title: "AI-Ready", description: "Prepared for AI integration" },
];

const migrationExpertise = [
  "CRM to CRM migrations",
  "Accounting platform migrations",
  "ERP rebuilds & transitions",
  "Multi-entity data consolidation",
  "De-duplication & normalization",
  "Compliance-safe migrations",
];

const realWorldScenarios = [
  {
    icon: Scale,
    title: "Legal Firms",
    migration: "Lawmatics / MyCase → Zoho",
    description: "Case management, client data, and billing history migrated with full document preservation.",
  },
  {
    icon: Users,
    title: "Staffing Agencies",
    migration: "JobDiva → Zoho",
    description: "Candidate databases, placement records, and client relationships migrated seamlessly.",
  },
  {
    icon: Building2,
    title: "Finance Companies",
    migration: "QuickBooks/Xero → Zoho Books",
    description: "Chart of accounts, transaction history, and vendor data migrated with reconciliation.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Businesses",
    migration: "Shopify → Zoho Inventory",
    description: "Product catalogs, order history, and customer data migrated with sync setup.",
  },
];

export default function DataMigration() {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Navbar />
      
      {/* Hero Section - Full-width with tech image background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={dataMigrationHero} 
            alt="Data Migration Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/80 to-[#0B1C3D]/60" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#4DA3FF]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container-custom relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/5 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
                <span className="text-[#3FE0F0] text-sm font-medium">Data Migration Experts</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6"
              >
                Enterprise-Grade
                <span className="block text-gradient-primary mt-2">Data Migration</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-[#E5E7EB] mb-4"
              >
                We don't just migrate data — we rebuild data foundations.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base lg:text-lg text-[#E5E7EB]/80 mb-8"
              >
                Zero-downtime migrations across CRMs, ERPs, accounting platforms, and legacy systems with 100% data integrity.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="heroDark" size="lg" className="min-w-[220px]">
                  Get Migration Assessment
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroSecondary" size="lg" className="min-w-[220px]">
                  Talk to an Expert
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex flex-wrap gap-6 text-[#E5E7EB] text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3FE0F0]" />
                  <span>100% Data Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF]" />
                  <span>Zero Downtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>500+ Migrations</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "100%", label: "Data Integrity", color: "#3FE0F0", icon: Shield },
                { value: "0", label: "Downtime Hours", color: "#10B981", icon: Clock },
                { value: "15+", label: "Platforms", color: "#4DA3FF", icon: Database },
                { value: "500+", label: "Migrations", color: "#8B5CF6", icon: ArrowRightLeft },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-6 bg-[#0B1C3D]/60 backdrop-blur-sm rounded-2xl border border-[#3FE0F0]/20"
                  >
                    <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    <span className="text-3xl font-bold block mb-1" style={{ color: stat.color }}>{stat.value}</span>
                    <p className="text-sm text-[#E5E7EB]">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F7FB] to-transparent" />
      </section>

      {/* Features Strip - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-[#0B1C3D]/80 rounded-xl border border-[#3FE0F0]/20"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#3FE0F0]" />
                  </div>
                  <h3 className="font-semibold text-[#FFFFFF] text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#E5E7EB]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Migrated - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-4">
              15+ Platforms Migrated Successfully
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Platforms We've Migrated
              <span className="text-gradient-primary block">From & To</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* From Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-4 text-center">Migrating From</h3>
              <div className="grid grid-cols-2 gap-2">
                {platformsFrom.map((platform) => (
                  <div
                    key={platform.name}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#374151] text-center hover:border-[#3FE0F0]/30 transition-colors"
                  >
                    {platform.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#3FE0F0]/10 border-2 border-[#3FE0F0] flex items-center justify-center mb-4">
                <ArrowRightLeft className="w-10 h-10 text-[#3FE0F0]" />
              </div>
              <div className="text-center">
                <p className="text-[#111827] font-bold">Zero Downtime</p>
                <p className="text-[#374151] text-sm">100% Data Integrity</p>
              </div>
            </motion.div>

            {/* To Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-4 text-center">Migrating To</h3>
              <div className="space-y-2">
                {platformsTo.map((platform) => (
                  <div
                    key={platform}
                    className="px-4 py-3 bg-[#3FE0F0]/5 border border-[#3FE0F0]/30 rounded-lg text-[#111827] font-medium text-center"
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Expertise - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                Migration Expertise
              </h2>
              <p className="text-[#E5E7EB] text-lg mb-8">
                Our team has deep expertise across all types of data migrations, ensuring your transition is smooth, secure, and complete.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {migrationExpertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#3FE0F0] flex-shrink-0" />
                    <span className="text-[#FFFFFF]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "100%", label: "Data Accuracy", color: "#3FE0F0" },
                { value: "0", label: "Downtime Hours", color: "#10B981" },
                { value: "15+", label: "Platforms Covered", color: "#4DA3FF" },
                { value: "500+", label: "Migrations Done", color: "#8B5CF6" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#0B1C3D]/80 rounded-xl border border-[#3FE0F0]/20 text-center"
                >
                  <span className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
                  <p className="text-sm text-[#E5E7EB] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Flow - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Our Migration Process
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful data migration with zero data loss
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {migrationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#3FE0F0]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-[#3FE0F0]/20">{step.step}</span>
                      <div className="w-10 h-10 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#3FE0F0]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#374151]">{step.description}</p>
                    
                    {/* Connector arrow */}
                    {index < migrationSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-[#3FE0F0]" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Insight Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "99.9% Accuracy Rate", color: "#3FE0F0" },
              { label: "Zero Downtime", color: "#10B981" },
              { label: "1M+ Records Migrated", color: "#4DA3FF" },
            ].map((callout) => (
              <div
                key={callout.label}
                className="px-4 py-2 rounded-full border-2"
                style={{ borderColor: callout.color, color: callout.color }}
              >
                <span className="font-semibold">{callout.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real-World Scenarios - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
              Real-World Migration Scenarios
            </h2>
            <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
              Examples of complex migrations we've successfully completed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {realWorldScenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0B1C3D]/80 rounded-2xl p-6 border border-[#3FE0F0]/20 hover:border-[#3FE0F0]/40 hover-lift transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#3FE0F0]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">{scenario.title}</h3>
                      <p className="text-[#3FE0F0] text-sm font-medium mb-2">{scenario.migration}</p>
                      <p className="text-[#E5E7EB] text-sm">{scenario.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - LIGHT SECTION */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Migrate Your Data?
            </h2>
            <p className="text-[#374151] text-lg mb-8">
              Get a comprehensive migration assessment and timeline estimate with zero obligation.
            </p>
            <Button variant="heroLight" size="xl">
              Start Your Migration
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}