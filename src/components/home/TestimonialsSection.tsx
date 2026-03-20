import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "CEO, TechVista Solutions",
    location: "India",
    rating: 5,
    text: "Club Code Technology completely transformed how we manage our sales pipeline. Their Zoho CRM implementation cut our lead response time by 60% and the custom automations they built save our team hours every single day.",
    initials: "RM",
    color: "from-[#1B90E0] to-[#22D3EE]",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Director, GreenLeaf Exports",
    location: "UK",
    rating: 5,
    text: "We migrated from Salesforce to Zoho with Club Code and the transition was seamless. Zero data loss, minimal downtime, and the new system is far more intuitive. Their post-launch support was exceptional.",
    initials: "ST",
    color: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Managing Partner, Gulf Trade Corp",
    location: "UAE",
    rating: 5,
    text: "The custom ERP solution they built on Zoho Creator handles our entire supply chain — from procurement to delivery tracking. It replaced three separate tools and reduced operational costs by 35%.",
    initials: "AA",
    color: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    name: "Priya Nair",
    role: "Founder, EduBridge Academy",
    location: "India",
    rating: 5,
    text: "Their AI chatbot integration with our Zoho Desk has been a game-changer. Student queries get resolved 3x faster and our support team can now focus on complex issues. Highly recommend their AI solutions.",
    initials: "PN",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    name: "Michael Chen",
    role: "CTO, Pacific Retail Group",
    location: "Australia",
    rating: 5,
    text: "Club Code delivered a multi-app Zoho ecosystem that connects our CRM, inventory, and accounting in real time. The dashboards they built give us visibility we never had before. Outstanding work.",
    initials: "MC",
    color: "from-[#EC4899] to-[#BE185D]",
  },
  {
    name: "Laura Bianchi",
    role: "HR Director, NovaTech Industries",
    location: "Canada",
    rating: 5,
    text: "We engaged Club Code for Zoho People implementation across 200+ employees. The onboarding automation, leave management, and performance review modules they configured are exactly what we needed.",
    initials: "LB",
    color: "from-[#3B82F6] to-[#1D4ED8]",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="bg-[#F0F7FF] section-padding overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#1B90E0]/20 bg-[#1B90E0]/5 text-[#1B90E0] text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4" style={{ lineHeight: 1.1 }}>
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-semibold text-[#111827]">Google Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <StarRating rating={5} />
              <span className="text-sm text-[#374151] font-medium ml-1">5.0</span>
            </div>
          </div>
          <p className="text-[#374151] max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform with Zoho, AI, and custom technology solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#1B90E0]/15 mb-3" />
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[#111827] text-sm truncate">{t.name}</p>
                  <p className="text-xs text-[#6B7280] truncate">
                    {t.role} · {t.location}
                  </p>
                </div>
                <StarRating rating={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=Club+Code+Technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroLight" size="lg" className="group">
              View All Reviews on Google
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
