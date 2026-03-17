import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, Award, ArrowRight, CheckCircle, Briefcase, Code, AppWindow, Puzzle, Layers, X, Send } from "lucide-react";
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
    formFields: ["Company Name", "Industry", "Current CRM/ERP", "Key Business Challenges", "Timeline"],
  },
  {
    tier: "Tier 2",
    title: "Zoho App Implementation",
    subtitle: "End-to-End Setup & Customization",
    description: "Complete Zoho CRM, Zoho One, or individual app implementation with custom modules, workflows, and integrations.",
    features: ["Custom module setup", "Workflow automation", "Data import & mapping", "User training & onboarding"],
    icon: <Layers className="w-6 h-6" />,
    accent: "#3FE0F0",
    popular: true,
    formFields: ["Company Name", "Zoho Apps Needed", "Number of Users", "Integration Requirements", "Go-Live Date"],
  },
  {
    tier: "Tier 3",
    title: "Creator App Development",
    subtitle: "Custom Low-Code Solutions",
    description: "Bespoke Zoho Creator applications for unique operational workflows—inventory, field service, approvals, and more.",
    features: ["Custom app architecture", "Deluge scripting", "Mobile-first design", "Third-party API connections"],
    icon: <AppWindow className="w-6 h-6" />,
    accent: "#4DA3FF",
    formFields: ["Company Name", "App Purpose / Use Case", "Key Features Needed", "User Count", "Budget Range"],
  },
  {
    tier: "Tier 4",
    title: "Extension Development",
    subtitle: "Marketplace & Custom Widgets",
    description: "Build and publish Zoho Marketplace extensions, CRM widgets, and custom UI components that extend native capabilities.",
    features: ["Marketplace-ready packaging", "Custom CRM widgets", "Cross-app extensions", "Ongoing maintenance"],
    icon: <Puzzle className="w-6 h-6" />,
    accent: "#F97316",
    formFields: ["Company Name", "Extension Type (Widget/Marketplace)", "Target Zoho App", "Functionality Required", "Timeline"],
  },
  {
    tier: "Tier 5",
    title: "Dedicated Developer Engagement",
    subtitle: "Certified Talent On Demand",
    description: "Embed certified Zoho developers into your team—full-time or part-time—for ongoing development, customization, and support.",
    features: ["Certified Zoho developers", "Flexible engagement models", "Timezone-aligned delivery", "Weekly progress reports"],
    icon: <Code className="w-6 h-6" />,
    accent: "#4DA3FF",
    formFields: ["Company Name", "Developer Skills Needed", "Engagement Type (Full-time/Part-time)", "Project Duration", "Start Date"],
  },
];

function RequirementsForm({ tier, onClose }: { tier: typeof engagementTiers[0]; onClose: () => void }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(11,28,61,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center hover:bg-[#E2E8F0] transition-colors">
          <X className="w-4 h-4 text-[#374151]" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${tier.accent}15`, color: tier.accent }}>
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Requirements Submitted!</h3>
            <p className="text-[#374151] text-sm mb-6">Our team will review and get back to you within 24 hours.</p>
            <Button variant="heroLight" size="sm" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${tier.accent}15`, color: tier.accent }}>
                {tier.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111827]">{tier.title}</h3>
                <p className="text-xs text-[#6B7280]">Requirements Gathering</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {tier.formFields.map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-[#111827] mb-1.5">{field}</label>
                  {field.includes("Challenges") || field.includes("Use Case") || field.includes("Functionality") || field.includes("Features") ? (
                    <textarea
                      required
                      rows={3}
                      className="w-full rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3FE0F0]/40 focus:border-[#3FE0F0] resize-none"
                      placeholder={`Describe your ${field.toLowerCase()}...`}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    />
                  ) : (
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3FE0F0]/40 focus:border-[#3FE0F0]"
                      placeholder={`Enter ${field.toLowerCase()}`}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    />
                  )}
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#3FE0F0]/40 focus:border-[#3FE0F0]"
                  placeholder="you@company.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <Button type="submit" variant="heroDark" size="lg" className="w-full mt-2">
                Submit Requirements <Send className="w-4 h-4" />
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export function TrustAndPackages() {
  const [activeForm, setActiveForm] = useState<number | null>(null);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                onClick={() => setActiveForm(i)}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeForm !== null && (
          <RequirementsForm
            tier={engagementTiers[activeForm]}
            onClose={() => setActiveForm(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
