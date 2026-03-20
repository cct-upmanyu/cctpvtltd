import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, ShoppingCart, GraduationCap, Truck, Clock, Bot, Cog, Database } from "lucide-react";

const caseStudies = [
  {
    title: "Manufacturing Excellence with Zoho One",
    industry: "Manufacturing",
    icon: Building2,
    result: "40% cost reduction",
    description: "Automated inventory management and production tracking across 5 facilities.",
  },
  {
    title: "Retail Chain Digital Transformation",
    industry: "Retail",
    icon: ShoppingCart,
    result: "35% sales increase",
    description: "Unified commerce platform connecting 50+ stores with real-time inventory.",
  },
  {
    title: "EdTech Platform Scaling",
    industry: "Education",
    icon: GraduationCap,
    result: "500% capacity growth",
    description: "Custom enrollment automation handling 10x student growth with integrated LMS.",
  },
  {
    title: "Logistics Fleet Optimization",
    industry: "Logistics",
    icon: Truck,
    result: "25% fuel savings",
    description: "GPS-integrated fleet management with route optimization across 200+ vehicles.",
  },
];

const blogPosts = [
  {
    title: "How AI is Revolutionizing CRM in 2025",
    excerpt: "AI-powered lead scoring and predictive analytics helping businesses close deals 3x faster.",
    category: "AI & Automation",
    readTime: "8 min",
    icon: Bot,
  },
  {
    title: "10 Zoho CRM Customizations Every Business Needs",
    excerpt: "Essential customizations that improve sales productivity and customer engagement.",
    category: "Zoho Tips",
    readTime: "6 min",
    icon: Cog,
  },
  {
    title: "Data Migration: Avoiding Common Pitfalls",
    excerpt: "Lessons from 500+ migrations to ensure smooth, complete, error-free data transfer.",
    category: "Best Practices",
    readTime: "8 min",
    icon: Database,
  },
];

export function CaseStudiesAndBlog() {
  return (
    <section className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Case Studies Column */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-medium mb-3 border border-emerald-500/20">
                  Proven Results
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827]" style={{ lineHeight: 1.1 }}>
                  Case Studies
                </h2>
              </div>
              <Link
                to="/case-studies"
                className="text-sm text-[#1B90E0] font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all shrink-0"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to="/case-studies"
                    className="group flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:border-emerald-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <study.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-wider">{study.industry}</span>
                        <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs">
                          <TrendingUp className="w-3 h-3" />
                          {study.result}
                        </span>
                      </div>
                      <h3 className="text-[#111827] font-semibold text-sm mb-1 group-hover:text-emerald-700 transition-colors leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-[#6B7280] text-xs leading-relaxed">{study.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog Column */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#1B90E0]/10 text-[#1B90E0] text-xs font-medium mb-3 border border-[#1B90E0]/20">
                  Insights & Guides
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827]" style={{ lineHeight: 1.1 }}>
                  From Our Blog
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-sm text-[#1B90E0] font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all shrink-0"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to="/blog"
                    className="group flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:border-[#1B90E0]/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1B90E0]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <post.icon className="w-5 h-5 text-[#1B90E0]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#1B90E0]/10 text-[#1B90E0] font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-[#9CA3AF]">
                          <Clock className="w-2.5 h-2.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-[#111827] font-semibold text-sm mb-1 group-hover:text-[#1B90E0] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[#6B7280] text-xs leading-relaxed">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
