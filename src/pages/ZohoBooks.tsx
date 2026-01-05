import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
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
  Banknote
} from "lucide-react";

const ZohoBooks = () => {
  useEffect(() => {
    document.title = "Zoho Books Accounting Software Implementation | Club Code Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Zoho Books implementation services. Comprehensive cloud accounting software for invoicing, expenses, inventory, and financial reporting for growing businesses.");
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zoho Books Implementation Services",
      "provider": {
        "@type": "Organization",
        "name": "Club Code Technology"
      },
      "description": "Expert Zoho Books accounting software implementation, automation, and integration services for businesses.",
      "serviceType": "Accounting Software Implementation"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const coreFeatures = [
    {
      icon: FileText,
      title: "Invoicing & Receivables",
      description: "Speed up receivables with professional invoices, multiple payment modes, online payment links, and automated follow-ups.",
      features: ["Custom invoice templates", "Online payments", "Automated reminders", "Payment tracking"]
    },
    {
      icon: Receipt,
      title: "Bills & Payables",
      description: "Stay on top of payables by tracking bills, automating recurring expenses, and including client expenses on invoices.",
      features: ["Bill management", "Expense tracking", "Recurring expenses", "Vendor management"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Take full control of your inventory with stock tracking, purchase orders, and reorder alerts.",
      features: ["Stock tracking", "Purchase orders", "Reorder alerts", "Warehouse management"]
    },
    {
      icon: Clock,
      title: "Project Accounting",
      description: "Manage projects efficiently with budgets, task allocation, time tracking, and accurate client billing.",
      features: ["Time tracking", "Budget management", "Task allocation", "Project profitability"]
    },
    {
      icon: BarChart3,
      title: "Financial Reports",
      description: "Make informed decisions with powerful reports including P&L, balance sheet, cash flow, and tax reports.",
      features: ["P&L statements", "Balance sheets", "Cash flow reports", "Tax reports"]
    },
    {
      icon: Banknote,
      title: "Banking & Reconciliation",
      description: "Connect bank accounts for automatic transaction imports and simplified reconciliation.",
      features: ["Bank feeds", "Auto-categorization", "Bank reconciliation", "Multi-bank support"]
    }
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Manage accounting on the go with iOS and Android apps."
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description: "Handle foreign transactions with real-time exchange rates."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Communicate seamlessly with team, customers, and vendors."
    },
    {
      icon: Workflow,
      title: "Automation",
      description: "Automate workflows, emails, and recurring transactions."
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Custom templates, fields, and reports for unique needs."
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      description: "Accept payments via multiple gateways and methods."
    }
  ];

  const integrations = [
    "Zoho CRM", "Zoho Inventory", "Zoho Expense", "Zoho Payroll",
    "Stripe", "PayPal", "Square", "Razorpay",
    "Shopify", "WooCommerce", "Amazon", "eBay"
  ];

  const whyChoose = [
    "Plans for every kind of business",
    "No frequent price hikes",
    "User-friendly interface",
    "Excellent support",
    "Seamless migration",
    "Bank-grade security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
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
                Comprehensive <span className="text-primary">Accounting</span> for Growing Businesses
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Manage your end-to-end accounting—from invoicing to inventory and expenses—with Zoho Books, the cloud accounting software trusted by businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We implement, configure, and optimize Zoho Books to streamline your financial operations and drive business growth.
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
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Why Businesses Choose Zoho Books</h3>
                <div className="space-y-3">
                  {whyChoose.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Accounting Suite
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

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineered for Business Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to unlock your business potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
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
              Connect with your favorite apps for payments, e-commerce, and more.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Zoho Books Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete accounting software implementation from certified experts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Implementation & Setup", description: "Complete Zoho Books configuration with chart of accounts, taxes, and opening balances." },
              { title: "Data Migration", description: "Seamless migration from QuickBooks, Xero, Tally, or other accounting systems." },
              { title: "Workflow Automation", description: "Automate invoicing, payment reminders, approvals, and recurring transactions." },
              { title: "Integration Services", description: "Connect with CRM, inventory, e-commerce, payment gateways, and banking." },
              { title: "Custom Reporting", description: "Build custom reports and dashboards for financial insights and compliance." },
              { title: "Training & Support", description: "Enable your finance team with comprehensive training and ongoing support." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Migrate to Zoho Books for Free
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Now you can easily move from QuickBooks, Xero, or other accounting solutions to Zoho Books. Our experts handle the complete migration with zero data loss.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us for Migration</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Streamline Your Financial Operations
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses managing their accounting with Zoho Books. Let us set up your financial foundation for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
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
