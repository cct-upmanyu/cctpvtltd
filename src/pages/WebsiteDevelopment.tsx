import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Database, Bot, Smartphone, TrendingUp, CheckCircle } from "lucide-react";

const services = [
  {
    title: "CRM-Connected Websites",
    description: "Every lead, form submission, and interaction automatically flows into your CRM for complete visibility.",
    icon: Database,
  },
  {
    title: "AI-Enabled Features",
    description: "Intelligent chatbots, personalized content, and smart recommendations that convert visitors.",
    icon: Bot,
  },
  {
    title: "Conversion Optimized",
    description: "Strategic UX design, A/B testing capabilities, and analytics integration for maximum ROI.",
    icon: TrendingUp,
  },
  {
    title: "Mobile-First Design",
    description: "Responsive designs that deliver exceptional experiences across all devices.",
    icon: Smartphone,
  },
];

const process = [
  { step: "Discovery", description: "Understanding your business goals and target audience" },
  { step: "Design", description: "Creating stunning, conversion-focused designs" },
  { step: "Development", description: "Building with modern technologies and CRM integration" },
  { step: "Launch", description: "Testing, optimization, and successful deployment" },
];

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              Website Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              CRM-Connected,
              <span className="text-gradient-primary block">AI-Enabled Websites</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl mb-8 max-w-2xl">
              More than just beautiful websites—we build digital experiences that connect to your CRM, leverage AI, and drive real business results.
            </p>
            <Button variant="heroDark" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Transformation Visual */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Transformation
            </h2>
            <p className="text-muted-foreground text-lg">
              From static to intelligent business websites
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <div className="p-6 bg-muted rounded-2xl text-center">
                <Globe className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Static Website</h3>
                <p className="text-sm text-muted-foreground">Basic brochure site</p>
              </div>
              
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-primary"
                >
                  <ArrowRight className="w-8 h-8 hidden md:block" />
                  <ArrowRight className="w-8 h-8 rotate-90 md:hidden" />
                </motion.div>
              </div>
              
              <div className="p-6 bg-primary/10 border-2 border-primary/30 rounded-2xl text-center">
                <Zap className="w-12 h-12 mx-auto text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">AI Business Platform</h3>
                <p className="text-sm text-muted-foreground">CRM + AI integrated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border"
              >
                <span className="text-4xl font-bold text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-foreground mt-2 mb-2">{item.step}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Ready to Build Your Next Website?
            </h2>
            <p className="text-muted-dark-foreground text-lg mb-8">
              Let's create a website that not only looks great but drives real business results.
            </p>
            <Button variant="heroDark" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}