import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, ShoppingCart, GraduationCap, Truck } from "lucide-react";

const caseStudies = [
  {
    title: "Manufacturing Excellence with Zoho One",
    industry: "Manufacturing",
    icon: Building2,
    result: "40% cost reduction",
    description: "Automated inventory management and production tracking across 5 facilities, eliminating manual bottlenecks.",
  },
  {
    title: "Retail Chain Digital Transformation",
    industry: "Retail",
    icon: ShoppingCart,
    result: "35% sales increase",
    description: "Unified commerce platform connecting 50+ stores with real-time inventory visibility and customer insights.",
  },
  {
    title: "EdTech Platform Scaling",
    industry: "Education",
    icon: GraduationCap,
    result: "500% capacity growth",
    description: "Custom enrollment automation handling 10x student growth with integrated LMS and analytics.",
  },
  {
    title: "Logistics Fleet Optimization",
    industry: "Logistics",
    icon: Truck,
    result: "25% fuel savings",
    description: "GPS-integrated fleet management with route optimization and automated dispatch across 200+ vehicles.",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B90E0]/10 text-[#0B1C3D] text-sm font-medium mb-4 border border-[#1B90E0]/20">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Real Businesses. Real Impact.
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            See how we've helped companies across industries automate operations, cut costs, and scale with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#1B90E0]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1B90E0]/10 flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-[#1B90E0]" />
                </div>
                <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">{study.industry}</span>
              </div>
              <h3 className="text-[#111827] font-semibold text-sm mb-2 leading-snug">{study.title}</h3>
              <p className="text-[#6B7280] text-xs mb-4 leading-relaxed">{study.description}</p>
              <div className="flex items-center gap-2 mt-auto">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 font-bold text-sm">{study.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1B90E0] text-[#1B90E0] font-semibold hover:bg-[#1B90E0] hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
