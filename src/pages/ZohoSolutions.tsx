import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Layers, BarChart3, Users, Wallet, Building, Headphones } from "lucide-react";

const zohoSuites = [
  {
    icon: Layers,
    name: "Zoho One",
    description: "The operating system for business—45+ integrated apps for every business need.",
    features: ["CRM", "Finance", "HR", "Marketing", "Support", "Collaboration"],
  },
  {
    icon: BarChart3,
    name: "CRM Plus",
    description: "Unified customer experience platform combining sales, marketing, and support.",
    features: ["Zoho CRM", "SalesIQ", "Desk", "Analytics", "Social", "Campaigns"],
  },
  {
    icon: Wallet,
    name: "Finance Plus",
    description: "Complete finance suite for accounting, invoicing, expenses, and inventory.",
    features: ["Books", "Invoice", "Expense", "Inventory", "Checkout", "Practice"],
  },
  {
    icon: Users,
    name: "People Plus",
    description: "Comprehensive HR solution for hiring, onboarding, and workforce management.",
    features: ["People", "Recruit", "Workerly", "Connect", "Payroll", "Expense"],
  },
  {
    icon: Building,
    name: "Workplace",
    description: "Modern workplace collaboration with secure communication and productivity tools.",
    features: ["Cliq", "Mail", "Connect", "Meeting", "Writer", "Sheet"],
  },
  {
    icon: Headphones,
    name: "Service Plus",
    description: "Omnichannel customer service platform for exceptional support experiences.",
    features: ["Desk", "Assist", "Lens", "SalesIQ", "Analytics", "Survey"],
  },
];

const allApps = [
  "Zoho CRM", "Zoho Creator", "Zoho Books", "Zoho People", "Zoho Recruit",
  "Zoho Desk", "Zoho FSM", "Zoho Analytics", "Zoho SalesIQ", "Zoho Zia",
  "Zoho Catalyst", "Zoho Mail", "Zoho Cliq", "Zoho Meeting", "Zoho Projects",
  "Zoho Sprints", "Zoho Inventory", "Zoho Invoice", "Zoho Expense", "Zoho Sign",
  "Zoho Forms", "Zoho Survey", "Zoho Campaigns", "Zoho Social", "Zoho Sites",
  "Zoho PageSense", "Zoho Backstage", "Zoho Bigin", "Zoho Bookings", "Zoho Flow"
];

export default function ZohoSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-light-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Global Zoho Premium Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Zoho
              <span className="text-gradient-primary block">Ecosystem Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
              As certified Zoho Creator Champions, we implement, customize, and optimize the entire Zoho ecosystem to transform your business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroLight" size="lg">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                Talk to a Zoho Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suites Grid */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zoho Business Suites
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive suites designed for specific business functions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {zohoSuites.map((suite, index) => {
              const Icon = suite.icon;
              return (
                <motion.div
                  key={suite.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{suite.name}</h3>
                  <p className="text-muted-foreground mb-4">{suite.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {suite.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Apps */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              50+ Zoho Applications
            </h2>
            <p className="text-muted-foreground text-lg">
              We implement and customize every Zoho application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {allApps.map((app, index) => (
              <motion.span
                key={app}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer"
              >
                {app}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose ClubCode for Zoho?
              </h2>
              <div className="space-y-4">
                {[
                  "Global Zoho Premium Partner certification",
                  "Zoho Creator Champions recognition",
                  "12+ years of Zoho implementation experience",
                  "800+ successful Zoho projects delivered",
                  "Deep integration with AI and automation",
                  "24/7 support and maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-dark-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card-dark/50 rounded-2xl p-8 border border-border-dark"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Get a Free Zoho Assessment</h3>
              <p className="text-muted-dark-foreground mb-6">
                Let our experts analyze your current systems and recommend the perfect Zoho solution.
              </p>
              <Button variant="heroDark" size="lg" className="w-full">
                Schedule Your Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}