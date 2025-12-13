import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, ArrowRightLeft, CheckCircle, Shield, Zap, Brain } from "lucide-react";

const migrationSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current systems, data structures, and business processes to create a comprehensive migration plan.",
  },
  {
    step: "02",
    title: "Data Cleanup",
    description: "Cleanse and standardize your data to ensure only quality information moves to your new system.",
  },
  {
    step: "03",
    title: "Migration & Mapping",
    description: "Execute the migration with precise field mapping, relationship preservation, and data validation.",
  },
  {
    step: "04",
    title: "Optimization",
    description: "Configure your new system for optimal performance with custom workflows and automation.",
  },
  {
    step: "05",
    title: "AI Enablement",
    description: "Enhance your new system with AI capabilities for predictions, insights, and intelligent automation.",
  },
];

const features = [
  { icon: Database, title: "Zero Data Loss", description: "100% data integrity guaranteed" },
  { icon: ArrowRightLeft, title: "Seamless Transition", description: "Minimal business disruption" },
  { icon: Shield, title: "Secure Process", description: "Enterprise-grade security" },
  { icon: Zap, title: "Fast Execution", description: "Efficient timeline delivery" },
  { icon: Brain, title: "AI-Ready", description: "Prepared for AI integration" },
];

export default function DataMigration() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              Data Migration Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Data Migration &
              <span className="text-gradient-primary block">Zoho Setup</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Seamlessly migrate from legacy systems with zero data loss, and set up your new Zoho environment for success.
            </p>
            <Button variant="heroDark" size="lg">
              Get Migration Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
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
                  className="text-center p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Migration Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful data migration
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
            
            <div className="space-y-8 lg:space-y-0">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                      <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="w-full md:w-1/3 p-6 bg-muted rounded-2xl text-center">
                <Database className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Legacy System</h3>
                <p className="text-sm text-muted-foreground">Excel, Old CRM, Custom DB</p>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-xs text-muted-foreground">Migration</span>
              </div>
              
              <div className="w-full md:w-1/3 p-6 bg-primary/10 border-2 border-primary/30 rounded-2xl text-center">
                <Zap className="w-12 h-12 mx-auto text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">New Zoho System</h3>
                <p className="text-sm text-muted-foreground">Optimized & AI-Enabled</p>
              </div>
            </div>
          </motion.div>
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
              Ready to Migrate Your Data?
            </h2>
            <p className="text-muted-dark-foreground text-lg mb-8">
              Get a comprehensive migration assessment and timeline estimate.
            </p>
            <Button variant="heroDark" size="xl">
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