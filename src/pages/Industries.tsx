import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Building2, Sun, Truck, Heart, GraduationCap, Megaphone, ShoppingCart, Plane, Hotel, Monitor, HandHeart, Film, Briefcase } from "lucide-react";
import heroIndustries from "@/assets/hero-industries.jpg";
import zohoOneLogo from "@/assets/zoho-one-logo.png";
import { zohoOneIndustries } from "@/data/zohoOneIndustryData";

const creatorIndustries = [
  { icon: Factory, name: "Manufacturing", slug: "manufacturing", description: "Streamline production planning, inventory management, quality control, and supply chain operations.", solutions: ["Production ERP", "Inventory Management", "Quality Control", "Supply Chain"] },
  { icon: ShoppingCart, name: "Retail", slug: "retail", description: "Automate backend operations, customer engagement, inventory management, and logistics.", solutions: ["E-commerce Integration", "Inventory Sync", "Customer Loyalty", "POS Integration"] },
  { icon: GraduationCap, name: "Education", slug: "education", description: "Student management, admissions, learning platforms, and institutional operations.", solutions: ["Student CRM", "Admissions Portal", "LMS Integration", "Fee Management"] },
  { icon: Truck, name: "Logistics", slug: "logistics", description: "Optimize fleet management, route planning, and delivery tracking.", solutions: ["Fleet Management", "Route Optimization", "Delivery Tracking", "Driver Management"] },
  { icon: Heart, name: "Healthcare", slug: "healthcare", description: "Patient management, appointment scheduling, and medical record systems.", solutions: ["Patient CRM", "Appointment Scheduling", "EMR Integration", "Billing Management"] },
  { icon: Building2, name: "Real Estate", slug: "real-estate", description: "Manage properties, leads, transactions, and client relationships seamlessly.", solutions: ["Property CRM", "Lead Management", "Document Automation", "Transaction Tracking"] },
  { icon: Hotel, name: "Hospitality", slug: "hospitality", description: "Build holistic hospitality and hotel management solutions for personalized guest experiences.", solutions: ["Property Management", "Reservation System", "Guest Management", "F&B Operations"] },
  { icon: Monitor, name: "Information Technology", slug: "it", description: "Build custom IT solutions for service management, project tracking, and internal tools.", solutions: ["ITSM", "Asset Management", "Project Management", "Security & Compliance"] },
  { icon: HandHeart, name: "Nonprofits", slug: "nonprofits", description: "Automate fundraising, volunteer management, and program delivery.", solutions: ["Donor CRM", "Volunteer Portal", "Grant Management", "Impact Reporting"] },
  { icon: Film, name: "Media", slug: "media", description: "Custom media management solutions for publishing, advertising, and content management.", solutions: ["Content Management", "Editorial Calendar", "Ad Sales", "Audience Analytics"] },
  { icon: Briefcase, name: "Professional Services", slug: "professional-services", description: "Build custom solutions for consulting, legal, and professional service firms.", solutions: ["Client CRM", "Time & Billing", "Project Management", "Document Management"] },
  { icon: Users, name: "Recruitment & Staffing", slug: "recruitment", description: "Automate candidate management, client relations, and placement tracking.", solutions: ["ATS Integration", "Client CRM", "Candidate Portal", "Payroll Integration"] },
  { icon: Sun, name: "Solar & Renewable", slug: "solar", description: "End-to-end solar project management from lead to installation and monitoring.", solutions: ["Project Management", "Site Assessment", "Installation Tracking", "Service Management"] },
  { icon: Megaphone, name: "PR & Marketing", slug: "pr-marketing", description: "Campaign management, client relations, and media tracking solutions.", solutions: ["Campaign Management", "Media Monitoring", "Client Portal", "Analytics Dashboard"] },
  { icon: Plane, name: "Aviation", slug: "aviation", description: "Flight operations, crew management, and maintenance tracking systems.", solutions: ["Operations Management", "Crew Scheduling", "Maintenance Tracking", "Safety Compliance"] },
];

const zohoOneSlugMap: Record<string, string> = {
  logistics: "logistics",
  manufacturing: "manufacturing",
  healthcare: "healthcare",
  "real-estate": "real-estate",
  education: "education",
  retail: "retail",
  hospitality: "hospitality",
  "professional-services": "professional-services",
  it: "information-technology",
  nonprofits: "nonprofits",
  recruitment: "recruitment-staffing",
  solar: "solar-renewable",
  "pr-marketing": "pr-marketing",
  aviation: "aviation",
  media: "media",
};

const iconMap: Record<string, any> = {
  logistics: Truck, manufacturing: Factory, healthcare: Heart, "real-estate": Building2,
  education: GraduationCap, retail: ShoppingCart, hospitality: Hotel,
  "professional-services": Briefcase, "information-technology": Monitor,
  nonprofits: HandHeart, "recruitment-staffing": Users, "solar-renewable": Sun,
  "pr-marketing": Megaphone, aviation: Plane, media: Film,
};

type Platform = "zoho-one" | "zoho-creator";

export default function Industries() {
  const [platform, setPlatform] = useState<Platform>("zoho-creator");

  const creatorPageSlugs = ["manufacturing", "retail", "education", "logistics", "healthcare", "real-estate", "hospitality", "it", "nonprofits", "media", "professional-services"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroIndustries} alt="Industry Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/85 to-[#0B1C3D]/70" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Solutions Tailored to
              <span className="text-gradient-primary block">Your Industry</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Deep domain expertise across diverse industries, delivering customized solutions that address your unique challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Toggle */}
      <section className="bg-light-gradient py-12 border-b border-gray-100">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6">
            <span className="text-[#374151] font-medium">Choose your platform:</span>
            <div className="inline-flex rounded-xl bg-gray-100 p-1.5 shadow-inner">
              <button
                onClick={() => setPlatform("zoho-one")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  platform === "zoho-one"
                    ? "bg-white text-[#111827] shadow-md"
                    : "text-[#6B7280] hover:text-[#374151]"
                }`}
              >
                <img src={zohoOneLogo} alt="Zoho One" className="h-5 object-contain" />
                Zoho One
              </button>
              <button
                onClick={() => setPlatform("zoho-creator")}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  platform === "zoho-creator"
                    ? "bg-white text-[#111827] shadow-md"
                    : "text-[#6B7280] hover:text-[#374151]"
                }`}
              >
                <svg viewBox="0 0 40 40" className="w-5 h-5">
                  <rect x="5" y="5" width="30" height="30" rx="6" fill="#F0483E" />
                  <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                Zoho Creator
              </button>
            </div>
            <p className="text-sm text-[#6B7280] max-w-lg text-center">
              {platform === "zoho-one"
                ? "45+ integrated apps for end-to-end business operations across every department."
                : "Build custom low-code applications tailored to your unique industry workflows."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-light-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={platform} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platform === "zoho-creator"
                  ? creatorIndustries.map((industry, index) => {
                      const Icon = industry.icon;
                      const hasPage = creatorPageSlugs.includes(industry.slug);
                      return (
                        <motion.div key={industry.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                          <Link to={hasPage ? `/industries/${industry.slug}` : `/contact?industry=${industry.slug}`}
                            className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all h-full group">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-[#111827] mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
                                <p className="text-[#374151] text-sm mb-3">{industry.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {industry.solutions.slice(0, 3).map(s => (
                                    <span key={s} className="px-2 py-0.5 bg-gray-100 text-[#374151] text-xs rounded-full">{s}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              {hasPage ? "Explore Solutions" : "Contact Us"} <ArrowRight className="w-4 h-4" />
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })
                  : zohoOneIndustries.map((industry, index) => {
                      const Icon = iconMap[industry.slug] || Factory;
                      return (
                        <motion.div key={industry.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                          <Link to={`/zoho-one-${industry.slug}`}
                            className="block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all h-full group">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-[#111827] mb-2 group-hover:text-primary transition-colors">
                                  Zoho One for {industry.name}
                                </h3>
                                <p className="text-[#374151] text-sm mb-3">{industry.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {industry.solutions.slice(0, 3).map(s => (
                                    <span key={s} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">{s}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Explore Zoho One Solution <ArrowRight className="w-4 h-4" />
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See Your Industry?</h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              We work with businesses across all sectors. Let's discuss your unique requirements and build a tailored solution.
            </p>
            <Button variant="heroPrimary" size="xl" asChild>
              <Link to="/contact">Talk to an Expert <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
