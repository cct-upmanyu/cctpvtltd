import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIntegrations from "@/assets/hero-integrations.jpg";
import { 
  ArrowRight, 
  CreditCard, 
  MessageSquare, 
  Phone, 
  Target, 
  Calculator, 
  ShoppingCart, 
  Code,
  CheckCircle,
  Zap,
  Shield,
  RefreshCw
} from "lucide-react";

const integrationCategories = [
  {
    icon: CreditCard,
    title: "Payment Gateway Integrations",
    description: "Seamlessly connect Razorpay, Stripe, PayPal, and regional payment providers with Zoho and CRM systems for automated invoicing and reconciliation.",
    features: ["Automated payment reconciliation", "Multi-currency support", "Subscription billing sync"]
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & Messaging Integrations",
    description: "Integrate WhatsApp Business API, SMS gateways, and messaging platforms directly into your CRM for unified customer communication.",
    features: ["WhatsApp Business API", "Two-way messaging sync", "Automated response workflows"]
  },
  {
    icon: Phone,
    title: "Telephony & Voice Integrations",
    description: "Connect cloud telephony providers like Exotel, Knowlarity, and Twilio with Zoho CRM for click-to-call, call logging, and analytics.",
    features: ["Click-to-call functionality", "Automatic call logging", "Call analytics dashboards"]
  },
  {
    icon: Target,
    title: "Marketing Automation Integrations",
    description: "Unify Mailchimp, HubSpot Marketing, Google Ads, and Meta with your CRM for end-to-end campaign tracking and lead attribution.",
    features: ["Multi-channel attribution", "Lead scoring sync", "Campaign ROI tracking"]
  },
  {
    icon: Calculator,
    title: "Accounting & Finance Integrations",
    description: "Bridge Zoho Books, Tally, QuickBooks, and Xero with your CRM for seamless financial data flow and automated reporting.",
    features: ["Invoice sync", "Payment status updates", "Financial reporting"]
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Integrations",
    description: "Connect Shopify, WooCommerce, Amazon, and Flipkart with Zoho Inventory and CRM for unified order and inventory management.",
    features: ["Order sync automation", "Inventory management", "Customer data unification"]
  },
  {
    icon: Code,
    title: "Custom API Integrations",
    description: "Build bespoke integrations for legacy systems, proprietary software, and industry-specific platforms using secure REST and webhook architectures.",
    features: ["REST API development", "Webhook automation", "Legacy system bridges"]
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Unified Operations",
    description: "Connect all your business tools into a single source of truth, eliminating data silos and manual data entry."
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Bi-directional data synchronization ensures your teams always work with the most current information."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "All integrations built with OAuth 2.0, encrypted data transfer, and compliance with enterprise security standards."
  },
];

const ThirdPartyIntegrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section - Dark with Image */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroIntegrations} alt="Third-Party Integrations" className="w-full h-full object-cover" />
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
                Integration Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Third-Party <span className="text-gradient-primary">Integrations</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                We architect and implement secure third-party integrations that unify Zoho, CRM, ERP, and external platforms into a single operational ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="heroDark" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    Discuss Your Integration Needs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroSecondary" size="lg" className="min-w-[220px]">
                  <Link to="/contact">
                    View Integration Catalog
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integration Categories - Light */}
        <section className="bg-light-gradient section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
                Integration Categories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
                Connect Your Entire Tech Stack
              </h2>
              <p className="text-[#374151] text-lg max-w-2xl mx-auto">
                From payment gateways to messaging platforms—we build integrations that work reliably at enterprise scale.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {integrationCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[#3FE0F0]/10 group-hover:bg-[#3FE0F0]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#3FE0F0]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#3FE0F0] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-[#374151] mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[#374151] text-sm">
                          <CheckCircle className="w-4 h-4 text-[#3FE0F0]" />
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

        {/* Benefits Section - Dark */}
        <section className="bg-dark-gradient section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Integration Services?
              </h2>
              <p className="text-muted-dark-foreground text-lg max-w-2xl mx-auto">
                Enterprise-grade integrations built for reliability, security, and scalability.
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
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-muted-dark-foreground">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Light */}
        <section className="bg-light-gradient section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                Ready to Unify Your Business Systems?
              </h2>
              <p className="text-[#374151] text-lg mb-8">
                Let's discuss how we can connect your tools into a seamless operational ecosystem.
              </p>
              <Button asChild variant="heroPrimary" size="lg" className="min-w-[220px]">
                <Link to="/contact">
                  Schedule Integration Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThirdPartyIntegrations;
