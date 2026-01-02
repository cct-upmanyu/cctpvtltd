import { motion } from "framer-motion";
import { ExternalLink, Star, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Real extensions data from Club Code Technology
const extensions = [
  {
    name: "Zoho CRM Extensions",
    description: "Custom CRM extensions that integrate with third-party applications to boost the power of Zoho CRM for your specific business needs.",
    icon: "🎯",
    features: ["Lead Management", "Sales Automation", "Custom Workflows"],
    color: "#E74C3C",
    category: "Marketplace Extension",
  },
  {
    name: "WhatsApp Integration",
    description: "Connect WhatsApp Business API directly into Zoho CRM for unified customer communication with two-way messaging sync.",
    icon: "💬",
    features: ["Two-way Messaging", "Automated Responses", "CRM Sync"],
    color: "#25D366",
    category: "Communication",
  },
  {
    name: "Payment Gateway Connector",
    description: "Seamlessly connect Razorpay, Stripe, and PayPal with Zoho for automated invoicing, reconciliation, and payment tracking.",
    icon: "💳",
    features: ["Auto Reconciliation", "Multi-currency", "Invoice Sync"],
    color: "#2B84EA",
    category: "Finance Integration",
  },
  {
    name: "HR & Payroll Extension",
    description: "Automate employee management from onboarding to offboarding with Zoho People integration including leave and timesheet management.",
    icon: "👥",
    features: ["Leave Management", "Timesheet Tracking", "Performance Reviews"],
    color: "#8B5CF6",
    category: "HR Solution",
  },
  {
    name: "Zoho Creator Apps",
    description: "Custom applications built on Zoho Creator to streamline your unique business processes with seamless integration to other Zoho services.",
    icon: "🔧",
    features: ["Custom Workflows", "Mobile Ready", "API Integration"],
    color: "#F59E0B",
    category: "Custom Application",
  },
  {
    name: "Analytics Dashboard",
    description: "Custom data visualization and advanced analytics solutions powered by Zoho Analytics for perfect business decisions.",
    icon: "📊",
    features: ["Real-time Data", "Custom Reports", "BI Dashboards"],
    color: "#10B981",
    category: "Analytics",
  },
];

export const ZohoExtensionsShowcase = () => {
  return (
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
            Our Extensions Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Extensions We've Built
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Explore the powerful Zoho extensions we've developed for businesses across industries
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: "8+", label: "Years of Experience" },
            { value: "30+", label: "Certified Experts" },
            { value: "300+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl border border-gray-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#3FE0F0] mb-2">
                {stat.value}
              </div>
              <div className="text-[#374151] text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Extensions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {extensions.map((ext, index) => (
            <motion.div
              key={ext.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all relative overflow-hidden"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 rounded-full bg-[#F5F7FB] text-[#374151] text-xs font-medium">
                  {ext.category}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${ext.color}20` }}
              >
                {ext.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#3FE0F0] transition-colors">
                {ext.name}
              </h3>
              <p className="text-[#374151] text-sm mb-4 line-clamp-2">
                {ext.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {ext.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[#374151] text-sm">
                    <CheckCircle className="w-4 h-4" style={{ color: ext.color }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#374151] mb-6">
            Need a custom extension for your business?
          </p>
          <Button asChild variant="heroPrimary" size="lg">
            <Link to="/contact">
              Discuss Your Extension Idea
              <ExternalLink className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
