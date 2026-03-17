import { motion } from "framer-motion";
import { Star, ThumbsUp, Award, ArrowRight, CheckCircle, Briefcase, Code, AppWindow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upworkStats = [
  { label: "Job Success", value: "100%", icon: <ThumbsUp className="w-5 h-5" /> },
  { label: "Top Rated Plus", value: "Verified", icon: <Award className="w-5 h-5" /> },
  { label: "Client Reviews", value: "5.0★", icon: <Star className="w-5 h-5" /> },
  { label: "Projects Delivered", value: "500+", icon: <Briefcase className="w-5 h-5" /> },
];

const engagementTiers = [
  {
    tier: "Tier 1",
    title: "Consulting & Strategy",
    subtitle: "USA Zoho Partner Led",
    description: "Expert-led discovery, CRM audits, and digital transformation roadmaps tailored to your industry and compliance requirements.",
    features: ["Business process mapping", "Zoho ecosystem assessment", "ROI & cost-benefit analysis", "Compliance gap analysis"],
    icon: <Briefcase className="w-6 h-6" />,
    accent: "#F97316",
  },
  {
    tier: "Tier 2",
    title: "Dedicated Developer Engagement",
    subtitle: "Certified Talent On Demand",
    description: "Embed certified Zoho developers into your team—full-time or part-time—for ongoing development, customization, and support.",
    features: ["Certified Zoho developers", "Flexible engagement models", "Timezone-aligned delivery", "Weekly progress reports"],
    icon: <Code className="w-6 h-6" />,
    accent: "#3FE0F0",
    popular: true,
  },
  {
    tier: "Tier 3",
    title: "Custom App & Extension Dev",
    subtitle: "Fixed Scope, Transparent Pricing",
    description: "End-to-end development of custom Zoho Creator apps, Marketplace extensions, and API integrations with fixed timelines and budgets.",
    features: ["Scope-locked delivery", "Milestone-based payments", "Source code ownership", "Post-launch support included"],
    icon: <AppWindow className="w-6 h-6" />,
    accent: "#4DA3FF",
  },
];

export function TrustAndPackages() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #0F2A5F 50%, #0B1C3D 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(63,224,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(63,224,240,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#F97316]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
            <Award className="w-4 h-4 text-[#F97316]" />
            <span className="text-[#F97316] text-sm font-semibold">Verified Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Verified Expertise & Transparent Pricing
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Certified USA Zoho Partners backed by <span className="text-[#F97316] font-semibold">Top-Rated Plus</span> Upwork profiles with 100% job success and 5-star client reviews.
          </p>
        </motion.div>

        {/* Upwork Validation Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8 mb-12 border border-[#F97316]/15"
          style={{ background: "rgba(249,115,22,0.06)", backdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#14A800] flex items-center justify-center">
              <ThumbsUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Upwork Top Rated Plus</p>
              <p className="text-white/50 text-xs">Verified USA Partner Profile · Enterprise Clients</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {upworkStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                  {stat.icon}
                </div>
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engagement Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {engagementTiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
              style={{
                background: tier.popular ? "rgba(63,224,240,0.08)" : "rgba(15,25,50,0.6)",
                border: `1px solid ${tier.popular ? "rgba(63,224,240,0.25)" : "rgba(255,255,255,0.06)"}`,
                backdropFilter: "blur(8px)",
              }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-bl-xl" style={{ background: "#3FE0F0", color: "#0B1C3D" }}>
                  Most Popular
                </div>
              )}
              <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: tier.accent }}>{tier.tier}</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tier.accent}15`, color: tier.accent }}>
                {tier.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
              <p className="text-white/40 text-xs font-medium mb-3">{tier.subtitle}</p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/80 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: tier.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "heroDark" : "heroSecondary"}
                size="sm"
                className="w-full"
                asChild
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
