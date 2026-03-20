import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Bot, Cog, Database, Globe } from "lucide-react";

const blogPosts = [
  {
    title: "How AI is Revolutionizing CRM in 2025",
    excerpt: "AI-powered lead scoring, predictive analytics, and automated workflows helping businesses close deals 3x faster.",
    category: "AI & Automation",
    readTime: "8 min read",
    icon: Bot,
  },
  {
    title: "10 Zoho CRM Customizations Every Business Needs",
    excerpt: "Essential customizations that improve sales productivity and customer engagement out of the box.",
    category: "Zoho Tips",
    readTime: "6 min read",
    icon: Cog,
  },
  {
    title: "Data Migration Best Practices: Avoiding Common Pitfalls",
    excerpt: "Lessons from 500+ migrations to ensure your data transfer is smooth, complete, and error-free.",
    category: "CRM Best Practices",
    readTime: "8 min read",
    icon: Database,
  },
];

export function BlogPreview() {
  return (
    <section className="section-padding bg-[#F0F7FF] relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B90E0]/10 text-[#0B1C3D] text-sm font-medium mb-4 border border-[#1B90E0]/20">
              Insights & Guides
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
              From Our Blog
            </h2>
            <p className="text-[#374151] text-lg max-w-xl">
              Actionable insights on Zoho, AI automation, CRM strategy, and digital transformation.
            </p>
          </div>
          <Link
            to="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#1B90E0] font-semibold hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="group block bg-[#F8FAFC] rounded-2xl border border-gray-200 p-6 h-full hover:border-[#1B90E0]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-[#1B90E0]/10 text-[#1B90E0] font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#1B90E0]/10 flex items-center justify-center mb-4">
                  <post.icon className="w-5 h-5 text-[#1B90E0]" />
                </div>
                <h3 className="text-[#111827] font-semibold mb-2 group-hover:text-[#1B90E0] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[#1B90E0] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
