import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, FileText, MessageSquare, Phone, Mail, CreditCard, Cloud, Send, DollarSign, ShoppingBag, Receipt, Brain, Home, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Real extensions data from Club Code Technology website
const extensions = [
  {
    name: "MyDocSafe for Zoho Apps",
    description: "Securely manage your documents with MyDocSafe integration for Zoho CRM and Zoho Projects. Automate document workflows, digital signatures, and data sharing.",
    icon: FileText,
    features: ["Document Automation", "Digital Signatures", "Secure Data Sharing"],
    color: "#3B82F6",
    category: "Document Management",
  },
  {
    name: "Go To SMS for Zoho CRM",
    description: "Easily send SMS messages directly from your Zoho CRM. Personalized text communication with leads and customers to stay connected on the go.",
    icon: MessageSquare,
    features: ["Direct SMS", "Personalized Messaging", "Lead Communication"],
    color: "#10B981",
    category: "Communication",
  },
  {
    name: "RingCentral for Zoho CRM",
    description: "Integrate RingCentral with Zoho CRM to improve communication. Make calls, track conversations, and view call logs without leaving your CRM.",
    icon: Phone,
    features: ["Click-to-Call", "Call Logging", "Conversation Tracking"],
    color: "#F59E0B",
    category: "Telephony",
  },
  {
    name: "Clickatell for Zoho CRM",
    description: "Engage with customers effectively through Clickatell SMS communication within Zoho CRM. Manage and track SMS campaigns alongside CRM activities.",
    icon: Send,
    features: ["SMS Campaigns", "Customer Engagement", "Campaign Tracking"],
    color: "#06B6D4",
    category: "Messaging",
  },
  {
    name: "Acelle Mail for Zoho CRM",
    description: "Integrate Acelle Mail with Zoho CRM for seamless email marketing. Create campaigns, track open rates, and improve lead nurturing.",
    icon: Mail,
    features: ["Email Campaigns", "Open Rate Tracking", "Lead Nurturing"],
    color: "#EC4899",
    category: "Email Marketing",
  },
  {
    name: "Twilio for Zoho CRM",
    description: "Take advantage of Twilio's powerful SMS and voice services right within Zoho CRM. Send automated messages or engage in personalized communication.",
    icon: MessageSquare,
    features: ["SMS & Voice", "Automated Messages", "Two-way Communication"],
    color: "#EF4444",
    category: "Communication",
  },
  {
    name: "GiftBit for Zoho CRM",
    description: "Send digital gift cards directly from Zoho CRM to reward loyal customers or incentivize leads with instant, trackable rewards.",
    icon: CreditCard,
    features: ["Digital Gift Cards", "Customer Rewards", "Lead Incentives"],
    color: "#8B5CF6",
    category: "Rewards",
  },
  {
    name: "OneDrive for Zoho Projects",
    description: "Easily manage and share documents by integrating OneDrive with Zoho Projects. Collaborate on files and keep project documentation centralized.",
    icon: Cloud,
    features: ["File Sharing", "Team Collaboration", "Document Storage"],
    color: "#0078D4",
    category: "Cloud Storage",
  },
  {
    name: "Sendmode for Zoho CRM",
    description: "Sendmode enables efficient business messaging through Zoho CRM. Use SMS to communicate with customers and automate marketing campaigns.",
    icon: Send,
    features: ["Business SMS", "Automated Campaigns", "Response Tracking"],
    color: "#14B8A6",
    category: "Messaging",
  },
  {
    name: "BQE for Zoho CRM",
    description: "Streamline project management and financial tracking with BQE for Zoho CRM. Manage time tracking, billing, and project costs all from within CRM.",
    icon: DollarSign,
    features: ["Time Tracking", "Billing Management", "Project Costs"],
    color: "#059669",
    category: "Finance",
  },
  {
    name: "Shopify for Zoho Inventory",
    description: "Synchronize your Shopify store with Zoho Inventory to automate inventory tracking, order management, and fulfillment processes.",
    icon: ShoppingBag,
    features: ["Inventory Sync", "Order Management", "Fulfillment"],
    color: "#96BF48",
    category: "E-commerce",
  },
  {
    name: "Xendit for Zoho Billings",
    description: "Make payments easier by integrating Xendit with Zoho Billings. Process payments seamlessly and improve billing workflow.",
    icon: Receipt,
    features: ["Payment Processing", "Billing Workflow", "Transaction Tracking"],
    color: "#0038A8",
    category: "Payments",
  },
  {
    name: "RazorPay for Zoho Projects",
    description: "Collect payments easily by integrating RazorPay with Zoho Projects. Simplify payment workflows and track payment status.",
    icon: CreditCard,
    features: ["Payment Collection", "Status Tracking", "Workflow Integration"],
    color: "#072654",
    category: "Payments",
  },
  {
    name: "Velents AI for Zoho Recruit",
    description: "Enhance your hiring process with Velents AI integration for Zoho Recruit. Use AI to analyze candidates and match qualifications with job requirements.",
    icon: Brain,
    features: ["AI Candidate Analysis", "Skills Matching", "Recruitment Automation"],
    color: "#6366F1",
    category: "AI Recruitment",
  },
  {
    name: "IDX Broker for Zoho CRM",
    description: "IDX Broker integration brings real estate listings into Zoho CRM, enabling agents to manage leads, track property info, and close deals effectively.",
    icon: Home,
    features: ["Real Estate Listings", "Lead Management", "Property Tracking"],
    color: "#DC2626",
    category: "Real Estate",
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
            { value: "50+", label: "Extensions" },
            { value: "100+", label: "Integrations" },
            { value: "700+", label: "Implementations" },
            { value: "100%", label: "Job Success" },
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
          {extensions.map((ext, index) => {
            const Icon = ext.icon;
            return (
              <motion.div
                key={ext.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
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
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${ext.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: ext.color }} />
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
