import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send, CheckCircle, Building2, Users, Database, Code, Globe, RefreshCw, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const migrationLinks = [
  { label: "Salesforce → Zoho", href: "/compare/zoho-crm-vs-salesforce" },
  { label: "HubSpot → Zoho", href: "/compare/zoho-crm-vs-hubspot" },
  { label: "SAP/Oracle → Zoho Creator", href: "/custom-erp" },
];

const complianceBadges = [
  { label: "HIPAA Compliant", href: null },
  { label: "SOX Ready", href: null },
  { label: "CCPA Safe", href: null },
];

const migrationFeatures = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Deluge Scripting Expertise",
    description: "Custom business logic, workflow automation, and API integrations using Zoho's proprietary scripting language.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "API Orchestration",
    description: "Multi-system data synchronization across REST/SOAP APIs with real-time webhooks and error handling.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Process Re-Engineering",
    description: "Map, optimize, and automate business processes during migration—not just lift-and-shift.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Zero-Downtime Cutover",
    description: "Parallel-run strategy ensures your business never stops operating during the transition.",
  },
];

const serviceOptions = [
  "Salesforce to Zoho Migration",
  "HubSpot to Zoho Migration",
  "Legacy ERP Modernization",
  "New Zoho Implementation",
  "Data Migration & Cleanup",
  "Third-Party Integration",
];

const companySizes = ["1-10", "11-50", "51-200", "201-500", "500+"];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

export function USAMigrationCTA() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    service: "",
    currentPlatform: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", companySize: "", service: "", currentPlatform: "", budget: "", timeline: "", details: "" });
    }, 3000);
  };

  return (
    <>
      <section className="py-16" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight">
                Implementation & Migration with Deluge Mastery
              </h2>
              <p className="text-[#374151] text-base md:text-lg mb-6 leading-relaxed">
                Every migration is an opportunity to re-engineer. Our team combines deep Deluge scripting expertise with API orchestration to ensure your transition is seamless, compliant, and optimized for scale.
              </p>

              {/* Migration route links */}
              <div className="flex flex-wrap gap-2.5 mb-4">
                {migrationLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/5 text-[#0B1C3D] text-sm font-semibold hover:bg-[#3FE0F0]/15 hover:border-[#3FE0F0]/50 transition-all"
                  >
                    {link.label.toUpperCase()}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </Link>
                ))}
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {complianceBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#4DA3FF]/20 bg-[#4DA3FF]/5 text-[#0B1C3D] text-sm font-semibold"
                  >
                    {badge.label.toUpperCase()}
                  </span>
                ))}
              </div>

              <Button variant="heroLight" size="lg" onClick={() => setShowForm(true)}>
                Explore Migration Services <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Right: Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {migrationFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg hover:shadow-[#3FE0F0]/8 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#3FE0F0]/10 text-[#3FE0F0] mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#111827] mb-1.5">{feature.title}</h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Gathering Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">Thank You!</h3>
                  <p className="text-[#374151]">Our US team will review your requirements and reach out within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">Migration Requirements Assessment</h3>
                      <p className="text-sm text-[#6B7280] mt-1">Help us understand your needs for a tailored proposal</p>
                    </div>
                    <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F3F4F6] transition-colors">
                      <X className="w-5 h-5 text-[#6B7280]" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Full Name *</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                          <input required type="text" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30" placeholder="John Smith" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Work Email *</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Company Name *</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                          <input required type="text" value={formData.company} onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30" placeholder="Acme Corp" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Company Size *</label>
                        <select required value={formData.companySize} onChange={e => setFormData(p => ({ ...p, companySize: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 bg-white">
                          <option value="">Select size</option>
                          {companySizes.map(s => <option key={s} value={s}>{s} employees</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Service Required *</label>
                      <select required value={formData.service} onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 bg-white">
                        <option value="">Select service</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Current Platform</label>
                        <div className="relative">
                          <Database className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                          <input type="text" value={formData.currentPlatform} onChange={e => setFormData(p => ({ ...p, currentPlatform: e.target.value }))}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30" placeholder="e.g., Salesforce, HubSpot" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-1.5">Budget Range</label>
                        <select value={formData.budget} onChange={e => setFormData(p => ({ ...p, budget: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 bg-white">
                          <option value="">Select budget</option>
                          {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Additional Details</label>
                      <textarea value={formData.details} onChange={e => setFormData(p => ({ ...p, details: e.target.value }))}
                        rows={3} className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 resize-none"
                        placeholder="Tell us about your current challenges, number of users, key integrations needed..." />
                    </div>

                    <Button type="submit" variant="heroLight" size="lg" className="w-full">
                      <Send className="w-4 h-4" /> Submit Requirements
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}