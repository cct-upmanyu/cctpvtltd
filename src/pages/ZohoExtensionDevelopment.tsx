import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroExtensionDev from "@/assets/hero-extension-dev.jpg";
import { ZohoExtensionsShowcase } from "@/components/extensions/ZohoExtensionsShowcase";
import { 
  ArrowRight, 
  Package, 
  Building2, 
  Layout, 
  Code2, 
  RefreshCw,
  CheckCircle,
  Rocket,
  Shield,
  Users
} from "lucide-react";

const extensionTypes = [
  {
    icon: Package,
    title: "Zoho Marketplace Extensions",
    description: "We design, develop, and publish public extensions on Zoho Marketplace—enabling you to reach thousands of Zoho users while generating recurring revenue.",
    features: ["Marketplace certification", "Revenue sharing setup", "User analytics integration"]
  },
  {
    icon: Building2,
    title: "Private Extensions for Enterprises",
    description: "We build custom private extensions tailored to your organization's unique workflows—deployed securely within your Zoho ecosystem.",
    features: ["Enterprise-only access", "Custom security policies", "Internal deployment"]
  },
  {
    icon: Layout,
    title: "Custom Widgets & UI Extensions",
    description: "We create intuitive custom widgets that embed directly into Zoho CRM, Desk, and Creator—enhancing user experience and productivity.",
    features: ["Native Zoho look & feel", "Responsive design", "Real-time data sync"]
  },
  {
    icon: Code2,
    title: "API-Based Zoho Extensions",
    description: "We leverage Zoho APIs to build deep integrations that extend functionality beyond standard features—connecting with external systems seamlessly.",
    features: ["REST API integration", "Webhook automation", "Cross-platform connectivity"]
  },
  {
    icon: RefreshCw,
    title: "Extension Maintenance & Versioning",
    description: "We provide ongoing maintenance, version updates, and Zoho API compatibility management—ensuring your extensions remain secure and functional.",
    features: ["Version management", "API compatibility updates", "24/7 monitoring"]
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Accelerate Innovation",
    description: "Extend Zoho capabilities faster with our proven development frameworks and expertise."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "All extensions built with OAuth 2.0, secure data handling, and Zoho security compliance."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Extensions designed for adoption—intuitive interfaces that your teams will actually use."
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your workflows and identify extension opportunities." },
  { step: "02", title: "Architecture", description: "We design scalable, secure extension architecture." },
  { step: "03", title: "Development", description: "Agile development with regular demos and feedback loops." },
  { step: "04", title: "Testing", description: "Rigorous QA and Zoho certification preparation." },
  { step: "05", title: "Deployment", description: "Marketplace submission or private deployment." },
  { step: "06", title: "Support", description: "Ongoing maintenance and version updates." },
];

const ZohoExtensionDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Dark with Image */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroExtensionDev} alt="Zoho Extension Development" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/85 to-[#0B1C3D]/70" />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                Extension Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Extend the Capabilities of <span className="text-gradient-primary">Zoho Apps</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                We specialize in enhancing the functionality of Zoho apps to meet your unique business requirements. From advanced automations and third-party integrations to specialized tools, our Zoho extensions elevate your workflows and unlock new possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="heroDark" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    Discuss Your Extension Idea
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroSecondary" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    View Our Extensions
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Extension Types - LIGHT SECTION */}
        <section className="bg-light-gradient section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Extension Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
                Custom Zoho Extensions
              </h2>
              <p className="text-[#374151] text-lg max-w-2xl mx-auto">
                From marketplace-ready apps to private enterprise extensions—we build solutions that extend Zoho's native capabilities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {extensionTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/30 hover-lift transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[#4DA3FF]/10 group-hover:bg-[#4DA3FF]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#4DA3FF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#4DA3FF] transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-[#374151] mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[#374151] text-sm">
                          <CheckCircle className="w-4 h-4 text-[#4DA3FF]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Process - DARK SECTION */}
        <section className="bg-dark-gradient section-padding relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                A proven methodology for delivering extensions that meet Zoho standards and your business requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <span className="text-5xl font-bold text-primary/20 absolute top-4 right-4">{item.step}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extensions Showcase from Club Code Technology - LIGHT SECTION */}
        <ZohoExtensionsShowcase />

        {/* Benefits Section - DARK SECTION */}
        <section className="bg-dark-gradient section-padding relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Build Extensions With Us?
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Certified Zoho developers with deep expertise in extension architecture and marketplace success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-[#8B5CF6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ZohoExtensionDevelopment;
