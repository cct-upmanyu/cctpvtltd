import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Building2, Sun, Truck, Heart, GraduationCap, Megaphone, ShoppingCart, Plane } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Streamline production planning, inventory management, quality control, and supply chain operations.",
    solutions: ["Production ERP", "Inventory Management", "Quality Control", "Supply Chain"],
  },
  {
    icon: Users,
    name: "Recruitment & Staffing",
    slug: "recruitment",
    description: "Automate candidate management, client relations, and placement tracking.",
    solutions: ["ATS Integration", "Client CRM", "Candidate Portal", "Payroll Integration"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    slug: "real-estate",
    description: "Manage properties, leads, transactions, and client relationships seamlessly.",
    solutions: ["Property CRM", "Lead Management", "Document Automation", "Transaction Tracking"],
  },
  {
    icon: Sun,
    name: "Solar & Renewable",
    slug: "solar",
    description: "End-to-end solar project management from lead to installation and monitoring.",
    solutions: ["Project Management", "Site Assessment", "Installation Tracking", "Service Management"],
  },
  {
    icon: Truck,
    name: "Logistics & Transport",
    slug: "logistics",
    description: "Optimize fleet management, route planning, and delivery tracking.",
    solutions: ["Fleet Management", "Route Optimization", "Delivery Tracking", "Driver Management"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    slug: "healthcare",
    description: "Patient management, appointment scheduling, and medical record systems.",
    solutions: ["Patient CRM", "Appointment Scheduling", "EMR Integration", "Billing Management"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    slug: "education",
    description: "Student management, admissions, learning platforms, and institutional operations.",
    solutions: ["Student CRM", "Admissions Portal", "LMS Integration", "Fee Management"],
  },
  {
    icon: Megaphone,
    name: "PR & Marketing",
    slug: "pr-marketing",
    description: "Campaign management, client relations, and media tracking solutions.",
    solutions: ["Campaign Management", "Media Monitoring", "Client Portal", "Analytics Dashboard"],
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    slug: "retail",
    description: "Multi-channel retail management, inventory, and customer engagement.",
    solutions: ["POS Integration", "Inventory Sync", "Customer Loyalty", "E-commerce Integration"],
  },
  {
    icon: Plane,
    name: "Aviation",
    slug: "aviation",
    description: "Flight operations, crew management, and maintenance tracking systems.",
    solutions: ["Operations Management", "Crew Scheduling", "Maintenance Tracking", "Safety Compliance"],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Navbar />
      
      {/* Hero - LIGHT SECTION */}
      <section className="bg-light-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-6">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              Solutions Tailored to
              <span className="text-gradient-primary block">Your Industry</span>
            </h1>
            <p className="text-[#374151] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Deep domain expertise across diverse industries, delivering customized solutions that address your unique challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid - LIGHT SECTION */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  id={industry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#F5F7FB] rounded-2xl p-8 border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#3FE0F0]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#111827] mb-2">{industry.name}</h3>
                      <p className="text-[#374151] mb-4">{industry.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.solutions.map((solution) => (
                          <span
                            key={solution}
                            className="px-3 py-1 bg-[#3FE0F0]/5 text-[#3FE0F0] text-sm rounded-full border border-[#3FE0F0]/20"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - DARK SECTION */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              We work with businesses across all sectors. Let's discuss your unique requirements.
            </p>
            <Button variant="heroDark" size="xl">
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}