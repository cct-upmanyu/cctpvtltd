import { motion } from "framer-motion";
import { Blocks } from "lucide-react";
import { Link } from "react-router-dom";

import crmPlusLogo from "@/assets/zoho-suite-logos/crm-plus.svg";
import financePlusLogo from "@/assets/zoho-suite-logos/finance-plus.svg";
import peoplePlusLogo from "@/assets/zoho-suite-logos/people-plus.svg";
import marketingPlusLogo from "@/assets/zoho-suite-logos/marketing-plus.svg";
import servicePlusLogo from "@/assets/zoho-suite-logos/service-plus.svg";
import projectsPlusLogo from "@/assets/zoho-suite-logos/projects-plus.svg";
import workplaceLogo from "@/assets/zoho-suite-logos/workplace.svg";

const suites = [
  { name: "CRM Plus", logo: crmPlusLogo, description: "Unified customer experience platform for sales, marketing, and support.", href: "/zoho-crm" },
  { name: "Finance Plus", logo: financePlusLogo, description: "End-to-end financial management—invoicing, expenses, inventory, and subscriptions.", href: "/zoho-books" },
  { name: "People Plus", logo: peoplePlusLogo, description: "Complete HR ecosystem for recruiting, onboarding, payroll, and performance.", href: "/zoho-people" },
  { name: "Marketing Plus", logo: marketingPlusLogo, description: "Omnichannel marketing automation with email, social, events, and analytics.", href: "/crm-solutions" },
  { name: "Service Plus", logo: servicePlusLogo, description: "Customer service excellence with help desk, live chat, and field service tools.", href: "/crm-solutions" },
  { name: "Projects Plus", logo: projectsPlusLogo, description: "Project planning, task management, and collaboration for agile teams.", href: "/zoho-solutions" },
  { name: "Workplace", logo: workplaceLogo, description: "Business communication and collaboration suite replacing fragmented tools.", href: "/zoho-solutions" },
];


export function ZohoEcosystemModule() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F0F7FF 100%)" }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
            <Blocks className="w-4 h-4 text-[#4DA3FF]" />
            <span className="text-[#0B1C3D] text-sm font-semibold">Complete Zoho Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
            End-to-End Implementation of Zoho Apps
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            We implement, customize, and integrate every Zoho suite—delivering a unified business OS tailored to your industry.
          </p>
        </motion.div>

        {/* Zoho Suites Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {suites.map((suite, i) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={suite.href}
                className="block rounded-2xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg hover:shadow-[#4DA3FF]/8 transition-all duration-300 group h-full"
              >
                <img src={suite.logo} alt={suite.name} className="w-10 h-10 mb-3 object-contain" loading="lazy" />
                <h3 className="text-sm font-bold text-[#111827] mb-1 group-hover:text-[#4DA3FF] transition-colors">{suite.name}</h3>
                <p className="text-[#374151] text-xs leading-relaxed">{suite.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
