import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BeforeAfterCard, TransformationTimeline, TransformationStats } from "@/components/ui/before-after-card";
import { 
  FileText, 
  Receipt, 
  Package, 
  Clock, 
  BarChart3, 
  Globe,
  Smartphone,
  Users,
  Workflow,
  Settings,
  CreditCard,
  Building2,
  ArrowRight,
  CheckCircle2,
  Calculator,
  Banknote,
  AlertTriangle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Factory,
  ShoppingCart,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Truck,
  Database,
  DollarSign,
  Layers,
  PieChart
} from "lucide-react";

const ZohoBooks = () => {
  useEffect(() => {
    document.title = "Zoho Books Implementation Partner | Accounting Automation Experts | ClubCode Technology Pvt Ltd";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Books implementation partner. Build reliable, compliant, and scalable accounting systems. Migration from QuickBooks, Xero, Tally. Complete accounting automation.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Books Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "ClubCode Technology Pvt Ltd"
      },
      "description": "Expert Zoho Books accounting software implementation, migration, automation, and integration services for businesses.",
      "serviceType": "Accounting Software Implementation"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const whyZohoBooks = [
    "Cloud-based accounting accessible from anywhere, anytime",
    "Seamless integration with 40+ Zoho apps and 500+ third-party tools",
    "Built-in compliance for GST, VAT, and regional tax requirements",
    "AI-powered automation that learns from your patterns",
    "Bank-grade security with SOC 2 Type II certification",
    "Scalable pricing that grows with your business"
  ];

  const whyImplementationsFail = [
    {
      issue: "Poor Chart of Accounts Setup",
      consequence: "Reports don't reflect real business performance, making decision-making difficult.",
      prevention: "We design your chart of accounts based on your industry and reporting needs."
    },
    {
      issue: "Incomplete Data Migration",
      consequence: "Historical data is lost or corrupted, breaking audit trails and trend analysis.",
      prevention: "Structured migration process with data validation and reconciliation."
    },
    {
      issue: "No Workflow Automation",
      consequence: "Manual data entry continues despite having 'cloud accounting'.",
      prevention: "We implement automation rules, approval workflows, and recurring transactions."
    },
    {
      issue: "Disconnected Systems",
      consequence: "Double entry between CRM, inventory, and accounting creates errors.",
      prevention: "Full integration architecture designed before implementation."
    },
    {
      issue: "Inadequate Training",
      consequence: "Finance team uses only basic features, missing efficiency gains.",
      prevention: "Role-based training ensures everyone knows how to work effectively."
    }
  ];

  // Books Transformation Data
  const booksTransformations = [
    {
      area: "Invoicing",
      before: "Manual invoice creation taking hours each week",
      after: "Auto-generated invoices from sales orders with 1-click sending",
      icon: FileText
    },
    {
      area: "Bank Reconciliation",
      before: "Monthly reconciliation marathons with spreadsheets",
      after: "Auto-matched transactions with real-time bank feeds",
      icon: Database
    },
    {
      area: "Expense Tracking",
      before: "Lost receipts and manual expense report compilation",
      after: "Mobile receipt capture with automated expense categorization",
      icon: Receipt
    },
    {
      area: "Tax Compliance",
      before: "Last-minute scramble for GST/VAT filing with errors",
      after: "Automated tax calculations with compliant e-invoicing",
      icon: Shield
    },
    {
      area: "Cash Flow",
      before: "No visibility until month-end close",
      after: "Real-time cash position dashboard with forecasting",
      icon: DollarSign
    },
    {
      area: "Integration",
      before: "Double entry between CRM, inventory, and accounting",
      after: "Seamless flow from quote to invoice to payment receipt",
      icon: Layers
    }
  ];

  const booksTransformationStats = [
    { label: "Invoice Processing", value: "80", suffix: "%", description: "Faster creation & sending", color: "primary" as const },
    { label: "Reconciliation Time", value: "90", suffix: "%", description: "Reduction in effort", color: "green" as const },
    { label: "Data Accuracy", value: "99", suffix: "%", description: "With automated validation", color: "blue" as const },
    { label: "Reporting Speed", value: "5x", suffix: "", description: "Faster financial close", color: "orange" as const }
  ];

  const implementationServices = [
    {
      icon: Target,
      title: "Zoho Books Consulting & Strategy",
      description: "Assessment of your current accounting processes, technology stack, and reporting requirements.",
      features: ["Current state assessment", "Gap analysis", "Solution architecture", "ROI projections"]
    },
    {
      icon: Settings,
      title: "Zoho Books Implementation & Setup",
      description: "Complete configuration including chart of accounts, tax settings, opening balances, and templates.",
      features: ["Chart of accounts design", "Tax configuration", "Template customization", "Opening balance setup"]
    },
    {
      icon: Calculator,
      title: "Data Migration Services",
      description: "Seamless migration from QuickBooks, Xero, Tally, or other accounting systems with zero data loss.",
      features: ["Data mapping & cleanup", "Historical transaction import", "Reconciliation verification", "Parallel run testing"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate invoicing, payment reminders, expense approvals, and recurring transactions.",
      features: ["Auto-invoicing rules", "Payment reminders", "Approval workflows", "Recurring transactions"]
    },
    {
      icon: Zap,
      title: "Integration Services",
      description: "Connect Zoho Books with CRM, inventory, e-commerce, payment gateways, and banking systems.",
      features: ["Zoho ecosystem integration", "Payment gateway setup", "Bank feed configuration", "E-commerce connections"]
    },
    {
      icon: BarChart3,
      title: "Custom Reporting & Dashboards",
      description: "Build custom reports and real-time dashboards for financial insights and compliance.",
      features: ["Custom financial reports", "Real-time dashboards", "Compliance reports", "Executive summaries"]
    }
  ];

  const migrationSources = [
    { name: "QuickBooks Online", description: "Full migration including customers, vendors, transactions, and reconciled data." },
    { name: "QuickBooks Desktop", description: "Export and import with data transformation for cloud compatibility." },
    { name: "Xero", description: "Complete data migration with chart of accounts mapping." },
    { name: "Tally", description: "Indian businesses migrating from Tally with GST compliance." },
    { name: "Sage", description: "Migration from Sage 50 and Sage Business Cloud." },
    { name: "Excel/Spreadsheets", description: "Structured data import from manual spreadsheet accounting." }
  ];

  const industrySolutions = [
    {
      icon: Factory,
      title: "Manufacturing & Distribution",
      description: "Inventory costing, bill of materials, landed costs, and production accounting."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Project accounting, time tracking, retainer billing, and expense management."
    },
    {
      icon: ShoppingCart,
      title: "Retail & eCommerce",
      description: "Multi-channel sales tracking, inventory valuation, and payment reconciliation."
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Clinics",
      description: "Patient billing, insurance claims tracking, and compliance reporting."
    },
    {
      icon: Building2,
      title: "Real Estate & Property",
      description: "Property-wise accounting, rental tracking, and commission management."
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Fee management, course-wise revenue tracking, and scholarship accounting."
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Vehicle-wise costing, fuel tracking, and driver expense management."
    },
    {
      icon: Users,
      title: "Non-Profit Organizations",
      description: "Fund accounting, grant tracking, and donor management."
    }
  ];

  const coreFeatures = [
    {
      icon: FileText,
      title: "Invoicing & Receivables",
      description: "Professional invoices with online payments, automated reminders, and customer portals.",
      features: ["Custom invoice templates", "Online payment links", "Automated reminders", "Customer statements"]
    },
    {
      icon: Receipt,
      title: "Bills & Payables",
      description: "Track vendor bills, manage purchase orders, and automate recurring expenses.",
      features: ["Bill management", "Expense tracking", "Approval workflows", "Vendor portal"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking, purchase orders, and inventory valuation methods.",
      features: ["Stock tracking", "Purchase orders", "Reorder alerts", "FIFO/LIFO/Avg costing"]
    },
    {
      icon: Clock,
      title: "Project Accounting",
      description: "Track project costs, bill time and expenses, and monitor profitability.",
      features: ["Time tracking", "Budget management", "Milestone billing", "Project profitability"]
    },
    {
      icon: BarChart3,
      title: "Financial Reports",
      description: "Real-time P&L, balance sheet, cash flow, and custom reports.",
      features: ["P&L statements", "Balance sheets", "Cash flow reports", "Custom report builder"]
    },
    {
      icon: Banknote,
      title: "Banking & Reconciliation",
      description: "Connect bank accounts, auto-categorize transactions, and reconcile effortlessly.",
      features: ["Bank feeds", "Auto-categorization", "Reconciliation", "Multi-currency support"]
    }
  ];

  const implementationMethodology = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "Understand your current processes, reporting needs, and integration requirements."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design chart of accounts, workflow automations, and integration architecture."
    },
    {
      step: "03",
      title: "System Configuration",
      description: "Set up Zoho Books with your specific settings, templates, and tax configurations."
    },
    {
      step: "04",
      title: "Data Migration",
      description: "Migrate historical data with validation, reconciliation, and parallel testing."
    },
    {
      step: "05",
      title: "Integration & Automation",
      description: "Connect to your ecosystem and implement workflow automations."
    },
    {
      step: "06",
      title: "Training & Go-Live",
      description: "Role-based training, documentation, and supported go-live."
    }
  ];

  const faqs = [
    {
      question: "Can Zoho Books handle my complex multi-entity accounting?",
      answer: "Yes. Zoho Books supports multi-company accounting with consolidated reporting. We can configure inter-company transactions, elimination entries, and consolidated financial statements across entities."
    },
    {
      question: "How long does migration from QuickBooks take?",
      answer: "Typically 2-4 weeks depending on data complexity and transaction history. We run parallel systems to ensure accuracy before fully transitioning."
    },
    {
      question: "Does Zoho Books integrate with my bank?",
      answer: "Yes. Zoho Books connects to 14,000+ banks globally through direct feeds and aggregators. We set up automated transaction import and smart categorization rules."
    },
    {
      question: "Can Zoho Books handle inventory costing?",
      answer: "Yes. Zoho Books supports FIFO, LIFO, and weighted average costing methods. We configure the method appropriate for your industry and compliance requirements."
    },
    {
      question: "Is Zoho Books compliant with GST/VAT?",
      answer: "Absolutely. Zoho Books has built-in compliance for Indian GST, UK VAT, Australian GST, and many other regional tax requirements. We configure your instance for your specific jurisdiction."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes. We offer support packages including monthly check-ins, on-demand assistance, report customization, and system optimization as your needs evolve."
    }
  ];

  const integrations = [
    "Zoho CRM", "Zoho Inventory", "Zoho Expense", "Zoho Payroll",
    "Stripe", "PayPal", "Square", "Razorpay",
    "Shopify", "WooCommerce", "Amazon", "eBay"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Zoho Books Implementation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build a Reliable, <span className="text-primary">Compliant & Scalable</span> Accounting System
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Zoho Books is powerful cloud accounting—but without proper implementation, it becomes just another tool with manual workarounds.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We implement Zoho Books with your specific workflows, integrations, and reporting needs in mind—creating a financial foundation that supports real business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">Request Migration Assessment</Link>
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
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Why Businesses Choose Zoho Books</h3>
                <div className="space-y-3">
                  {whyZohoBooks.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Implementations Fail Section */}
      <section className="py-20 bg-muted/30">
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
              Why Accounting Implementations Fail
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most failures aren't about the software—they're about the implementation approach.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whyImplementationsFail.map((item, index) => (
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

      {/* Implementation Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zoho Books Implementation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete accounting implementation from certified experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Migrate to Zoho Books with Confidence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle complete migration from your existing accounting system—with data validation, reconciliation, and parallel running.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {migrationSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-card rounded-xl border border-border/50"
              >
                <h4 className="font-semibold text-foreground mb-1">{source.name}</h4>
                <p className="text-sm text-muted-foreground">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Accounting Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage finances, from invoicing to reporting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry-Specific Accounting Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-configured setups optimized for your industry's unique accounting needs.
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
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Methodology Section */}
      <section className="py-20">
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
              A proven 6-step approach that ensures successful Zoho Books deployments.
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

      {/* Integrations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect Zoho Books with your favorite apps for a unified financial ecosystem.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-card rounded-full border border-border/50 text-foreground font-medium"
              >
                {integration}
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
              Common questions about Zoho Books implementation.
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
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop struggling with disconnected tools and manual processes. Build a financial foundation that supports real business decisions.
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

export default ZohoBooks;