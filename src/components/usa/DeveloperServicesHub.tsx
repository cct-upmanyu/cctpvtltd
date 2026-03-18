import { motion, AnimatePresence } from "framer-motion";
import { Code, ArrowRight, CheckCircle, X, Send, Users, Building2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

import verticalStudioLogo from "@/assets/zoho-products/vertical-studio.jpg";
import zohoCatalystLogo from "@/assets/zoho-products/zoho-catalyst.png";
import zohoMarketplaceLogo from "@/assets/zoho-products/zoho-marketplace.png";
import zohoCrmLogo from "@/assets/zoho-products/zoho-crm-logo.png";
import delugeLogo from "@/assets/zoho-products/deluge.webp";
import zohoCreatorLogo from "@/assets/zoho-creator-interface.jpg";

const devServices = [
  {
    logo: verticalStudioLogo,
    title: "Vertical Studio Solutions",
    description: "Industry-specific deep-dive applications purpose-built for healthcare, finance, logistics, and manufacturing workflows.",
    features: ["Domain-specific modules", "Pre-built compliance layers", "Rapid deployment"],
  },
  {
    logo: zohoCreatorLogo,
    title: "Zoho Creator Custom Apps",
    description: "Bespoke low-code solutions for niche workflows that off-the-shelf products simply can't address.",
    features: ["Drag-and-drop builders", "Deluge scripting", "Mobile-first design"],
  },
  {
    logo: zohoCatalystLogo,
    title: "Zoho Catalyst (Serverless)",
    description: "High-performance, scalable backend development using Zoho's serverless compute platform for complex business logic.",
    features: ["Event-driven functions", "Auto-scaling infra", "Zero server management"],
  },
  {
    logo: zohoMarketplaceLogo,
    title: "Widgets & Extensions",
    description: "Creating Marketplace extensions and custom dashboard widgets that extend Zoho's native capabilities for your team.",
    features: ["Marketplace-ready", "Embedded analytics", "Cross-app widgets"],
  },
  {
    logo: zohoCrmLogo,
    title: "Custom UI for Zoho CRM",
    description: "Tailoring the user interface for specialized sales pipelines, industry-specific views, and advanced data visualization.",
    features: ["Canvas design studio", "Custom related lists", "Pipeline-specific UX"],
  },
  {
    logo: delugeLogo,
    title: "API Orchestration & Deluge",
    description: "Enterprise-grade API integrations and Deluge scripting to connect Zoho with your entire tech ecosystem seamlessly.",
    features: ["REST/SOAP APIs", "Webhook automation", "Multi-system sync"],
  },
];

export function DeveloperServicesHub() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", requirements: "" });
      setFileName("");
    }, 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      <section className="py-20" style={{ background: "linear-gradient(180deg, #F0F8FF 0%, #F5FAFF 50%, #FFFFFF 100%)" }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
              <Code className="w-4 h-4 text-[#4DA3FF]" />
              <span className="text-[#0B1C3D] text-sm font-semibold">Certified Zoho Developer Team</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
              Expert Zoho Development & Staff Augmentation
            </h2>
            <p className="text-[#374151] text-lg max-w-3xl mx-auto leading-relaxed">
              From low-code Creator apps to serverless Catalyst backends—our certified developers build exactly what your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {devServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:shadow-xl hover:shadow-[#4DA3FF]/8 transition-all duration-300 group"
              >
                <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-white border border-[#E2E8F0] overflow-hidden mb-4">
                  <img src={service.logo} alt={service.title} className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{service.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#374151] text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-[#3FE0F0] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="heroLight" size="xl" className="text-base" onClick={() => setShowForm(true)}>
              Hire a Certified Zoho Developer <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Hire Developer Form Modal */}
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
              className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">Thank You!</h3>
                  <p className="text-[#374151]">We'll review your requirements and get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
                    <div>
                      <h3 className="text-xl font-bold text-[#111827]">Hire a Certified Zoho Developer</h3>
                      <p className="text-sm text-[#6B7280] mt-1">Tell us about your project requirements</p>
                    </div>
                    <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#F3F4F6] transition-colors">
                      <X className="w-5 h-5 text-[#6B7280]" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
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

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Company Name *</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input required type="text" value={formData.company} onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30" placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Requirements *</label>
                      <textarea required value={formData.requirements} onChange={e => setFormData(p => ({ ...p, requirements: e.target.value }))}
                        rows={4} className="w-full px-4 py-2.5 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:border-[#3FE0F0] focus:ring-1 focus:ring-[#3FE0F0]/30 resize-none"
                        placeholder="Describe your project requirements, timeline, and any specific Zoho products you need help with..." />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-1.5">Attachment (optional)</label>
                      <div
                        className="flex items-center gap-3 px-4 py-3 rounded-lg border border-dashed border-[#D1D5DB] cursor-pointer hover:border-[#3FE0F0] hover:bg-[#3FE0F0]/5 transition-all"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Paperclip className="w-4 h-4 text-[#9CA3AF]" />
                        <span className="text-sm text-[#6B7280]">
                          {fileName || "Click to attach a file (PDF, DOC, images)"}
                        </span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                          onChange={handleFileChange}
                        />
                      </div>
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