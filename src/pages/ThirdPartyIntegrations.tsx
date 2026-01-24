import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IntegrationsGrid } from "@/components/integrations/IntegrationsGrid";
import { IntegrationMarquee } from "@/components/integrations/IntegrationMarquee";
import { StatsInfographic } from "@/components/infographics/StatsInfographic";
import { 
  ArrowRight, 
  Zap,
  Shield,
  RefreshCw,
  Layers
} from "lucide-react";

const integrationBenefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Setup",
    description: "Get your integrations running in hours, not weeks. Our pre-built connectors accelerate deployment."
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Bi-directional data synchronization ensures your teams always work with current information."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "OAuth 2.0, encrypted transfers, and compliance with enterprise security standards."
  },
  {
    icon: Layers,
    title: "No-Code Workflows",
    description: "Build complex automation workflows without writing a single line of code."
  }
];

const integrationStats = [
  { label: "Apps Connected", value: 500, suffix: "+", trend: "up" as const, trendValue: "Growing" },
  { label: "Data Syncs Daily", value: 10, suffix: "M+", trend: "up" as const, trendValue: "+25% this month" },
  { label: "Enterprise Clients", value: 200, suffix: "+", trend: "up" as const, trendValue: "Worldwide" },
  { label: "Uptime Guarantee", value: 99.9, suffix: "%", trend: "neutral" as const, trendValue: "SLA Backed" }
];


const ThirdPartyIntegrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Light Theme */}
        <section className="bg-[hsl(0,0%,96%)] section-padding relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-5 py-2 border-2 border-primary text-primary rounded-full text-sm font-medium mb-8">
                Integration Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Connect Everything to{" "}
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(190,85%,50%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                  Zoho
                </span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                We architect and implement seamless integrations that unify Zoho, CRM, ERP, and external platforms into a single operational ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="min-w-[220px] border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
                  <Link to="/contact">
                    Discuss Your Integration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[220px]">
                  <a href="#integrations">
                    Browse All Integrations
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <StatsInfographic
              stats={integrationStats}
              variant="inline"
              animated={true}
            />
          </div>
        </section>

        {/* Integration Solar System Visualization */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Integration Hub
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Apps, Connected
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We integrate all your favorite business applications into a unified ecosystem.
              </p>
            </motion.div>

            <IntegrationMarquee />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Integration Services?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enterprise-grade integrations built for reliability, security, and scalability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Integrations Grid - make.com style */}
        <section id="integrations" className="bg-[hsl(0,0%,96%)] section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Integration Catalog
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="bg-gradient-to-r from-[hsl(210,90%,55%)] via-[hsl(330,80%,65%)] to-[hsl(270,70%,60%)] bg-clip-text text-transparent">
                  500+ App Integrations
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse our complete catalog of third-party integrations. Search by app name or filter by category.
              </p>
            </motion.div>

            <IntegrationsGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark-gradient section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Integration?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                We build custom integrations for any platform. Let's discuss how we can connect your unique tech stack.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="heroDark" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    Request Custom Integration
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroSecondary" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThirdPartyIntegrations;
