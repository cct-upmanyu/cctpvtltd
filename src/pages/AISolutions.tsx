import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, MessageSquare, Phone, Bot, Sparkles, Zap, Database, Globe, Instagram, MessageCircle } from "lucide-react";

const aiServices = [
  {
    icon: Sparkles,
    title: "AI for Zoho (Zia Enhancement)",
    description: "Supercharge Zoho's native AI with custom configurations, advanced predictions, and intelligent automation tailored to your business processes.",
    features: ["Custom Zia configurations", "Predictive lead scoring", "Intelligent forecasting", "Automated insights"],
  },
  {
    icon: Brain,
    title: "ChatGPT Business Integrations",
    description: "Enterprise-grade GPT implementations that understand your business context and deliver actionable intelligence.",
    features: ["Content generation", "Document analysis", "Customer insights", "Knowledge base AI"],
  },
  {
    icon: Bot,
    title: "CRM AI Assistants & Copilots",
    description: "Intelligent copilots that help your sales team close deals faster with smart recommendations and automated workflows.",
    features: ["Sales recommendations", "Deal predictions", "Email drafting", "Meeting summaries"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots (Multi-Platform)",
    description: "Deploy intelligent conversational AI across all customer touchpoints for 24/7 engagement.",
    platforms: [
      { icon: Globe, name: "Website" },
      { icon: MessageCircle, name: "WhatsApp" },
      { icon: Instagram, name: "Instagram" },
      { icon: MessageSquare, name: "Facebook" },
    ],
  },
  {
    icon: Phone,
    title: "AI Voice & IVR Systems",
    description: "Transform your phone systems with AI-powered voice bots, smart routing, and intelligent IVR that understands natural language.",
    features: ["Voice bots", "Smart call routing", "Speech analytics", "Sentiment detection"],
  },
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description: "AI-powered process automation that learns from your business patterns and continuously optimizes operations.",
    features: ["Process mining", "Predictive automation", "Anomaly detection", "Self-optimization"],
  },
];

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-dark-gradient particles-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              AI Automation Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI That Actually Works—
              <span className="text-gradient-primary block">Inside Your Business Systems</span>
            </h1>
            <p className="text-muted-dark-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We don't just add AI as a feature. We integrate it deeply into your CRM, ERP, and operations for measurable business impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="heroDark" size="lg">
                Build Your AI Strategy
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroSecondary" size="lg">
                See AI in Action
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Hub Animation Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Central AI Hub Architecture
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our AI solutions connect seamlessly with your entire technology ecosystem
            </p>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-border">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { icon: Database, label: "Zoho" },
                  { icon: Bot, label: "CRM" },
                  { icon: Brain, label: "AI Core" },
                  { icon: Globe, label: "Website" },
                  { icon: MessageCircle, label: "WhatsApp" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isCenter = index === 2;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col items-center p-4 rounded-xl ${
                        isCenter 
                          ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground"
                          : "bg-card border border-border"
                      }`}
                    >
                      <Icon className={`w-8 h-8 mb-2 ${isCenter ? "" : "text-primary"}`} />
                      <span className={`text-sm font-medium ${isCenter ? "" : "text-foreground"}`}>
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-grade AI implementations that deliver real business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  {service.features && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {service.platforms && (
                    <div className="flex gap-3">
                      {service.platforms.map((platform) => {
                        const PlatformIcon = platform.icon;
                        return (
                          <div
                            key={platform.name}
                            className="flex items-center gap-1 text-muted-foreground text-sm"
                          >
                            <PlatformIcon className="w-4 h-4" />
                            <span>{platform.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
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
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-muted-dark-foreground text-lg mb-8">
              Get a customized AI strategy that aligns with your business goals and technical infrastructure.
            </p>
            <Button variant="heroDark" size="xl">
              Let's Build Your AI Strategy
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}