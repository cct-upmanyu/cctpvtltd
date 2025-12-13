import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, PieChart, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";

const crmPlatforms = [
  {
    name: "Zoho CRM",
    description: "Our specialty—deep customization and integration with the entire Zoho ecosystem.",
    features: ["Blueprint automation", "Canvas design", "Zia AI", "Custom modules", "Third-party integrations"],
    highlight: true,
  },
  {
    name: "Salesforce",
    description: "Enterprise implementations with custom development and complex integrations.",
    features: ["Apex development", "Lightning components", "CPQ", "Einstein AI", "AppExchange solutions"],
  },
  {
    name: "HubSpot",
    description: "Full-funnel marketing and sales automation for growth-focused businesses.",
    features: ["Marketing Hub", "Sales Hub", "Service Hub", "CMS Hub", "Custom integrations"],
  },
  {
    name: "Pipedrive",
    description: "Sales-focused CRM implementation for SMBs and sales teams.",
    features: ["Pipeline management", "Automation", "Reporting", "Integrations", "Custom fields"],
  },
  {
    name: "Custom CRM",
    description: "Built from scratch using Zoho Creator or other low-code platforms.",
    features: ["100% customizable", "Industry-specific", "Scalable", "AI-enabled", "Full ownership"],
  },
];

const benefits = [
  { icon: TrendingUp, title: "Increase Sales", description: "Streamline processes and close deals faster" },
  { icon: Users, title: "Better Customer Experience", description: "360° view of every customer interaction" },
  { icon: Zap, title: "Automate Workflows", description: "Eliminate manual tasks and reduce errors" },
  { icon: PieChart, title: "Data-Driven Decisions", description: "Real-time analytics and insights" },
];

export default function CRMSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium mb-6">
              CRM Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              CRM & Revenue Systems
              <span className="text-gradient-primary block">That Drive Growth</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl mb-8 max-w-2xl">
              Whether it's Zoho CRM, Salesforce, HubSpot, or a custom solution—we implement CRM systems that align with how your business actually sells.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroDark" size="lg">
                Get CRM Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                Compare Platforms
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRM Platforms */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CRM Platforms We Implement
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert implementation across all major CRM platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 border transition-all hover-lift ${
                  platform.highlight
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30"
                    : "bg-background border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Database className={`w-6 h-6 ${platform.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                  {platform.highlight && (
                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                      Specialty
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which CRM is Right for You?
            </h2>
            <p className="text-muted-dark-foreground text-lg mb-8">
              Our experts will analyze your requirements and recommend the perfect CRM solution for your business.
            </p>
            <Button variant="heroDark" size="xl">
              Get Free CRM Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}