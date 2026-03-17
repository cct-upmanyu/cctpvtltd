import { motion } from "framer-motion";
import { Heart, Landmark, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const complianceCards = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "HIPAA-Compliant Healthcare Solutions",
    description: "Secure patient data management, appointment scheduling, and billing automation built to meet strict HIPAA privacy and security standards.",
    tags: ["Patient CRM", "Secure Data", "Audit Trails"],
    href: "/industries/healthcare",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "#E11D48",
    borderColor: "#E11D4820",
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "SOX-Ready Financial Reporting",
    description: "Automated financial controls, audit trails, and reporting workflows that ensure Sarbanes-Oxley compliance for public and pre-IPO companies.",
    tags: ["Audit Trails", "Internal Controls", "Auto Reports"],
    href: "/industries/financial-services",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconColor: "#2563EB",
    borderColor: "#2563EB20",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "CCPA Data Privacy",
    description: "Consumer data rights management, consent tracking, and automated data subject requests—keeping your business compliant with California's privacy law.",
    tags: ["Consent Mgmt", "Data Rights", "Privacy Controls"],
    href: "/contact",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "#059669",
    borderColor: "#05966920",
  },
];

export function ComplianceRibbon() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            US Compliance & Security
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            Enterprise-grade solutions architected for America's most demanding regulatory frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {complianceCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Link
                to={card.href}
                className="block rounded-2xl p-6 bg-white border hover:shadow-xl transition-all duration-300 group h-full"
                style={{ borderColor: card.borderColor }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5`} style={{ color: card.iconColor }}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#0B1C3D]">{card.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#374151]">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-[#3FE0F0] group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
