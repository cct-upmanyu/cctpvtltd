import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send, CheckCircle, Building2, Users, Database, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
      <section className="py-12" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 100%)" }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-[#3FE0F0]/20"
            style={{ background: "linear-gradient(135deg, #F0FDFF 0%, #E0F7FA 30%, #E8F4FD 60%, #EFF6FF 100%)" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                  Looking to Migrate from Salesforce, HubSpot, or Legacy ERP?
                </h3>
                <p className="text-[#374151] text-base md:text-lg mb-6 leading-relaxed">
                  Connect with our certified US-based Zoho specialists who will streamline your migration process and maximize your platform's performance. One step away from transforming your operational efficiency!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="heroLight" size="lg" onClick={() => setShowForm(true)}>
                    Request Migration Assessment <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="heroSecondary" size="lg" onClick={() => setShowForm(true)}>
                    Talk to Sales
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex w-64 lg:w-80 h-full items-center justify-center p-8">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#3FE0F0]/20 to-[#4DA3FF]/20 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#3FE0F0]/30 to-[#4DA3FF]/30 flex items-center justify-center">
                      <ArrowRight className="w-10 h-10 text-[#0B1C3D]" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3FE0F0]/20 animate-pulse" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#4DA3FF]/20 animate-pulse delay-500" />
                </div>
              </div>
            </div>
          </motion.div>
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
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Expected Timeline</label>
                      <select value={formData.timeline} onChange={e => setFormData(p => ({ ...p, timeline: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 bg-white">
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP (Within 2 weeks)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Just exploring">Just exploring options</option>
                      </select>
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
