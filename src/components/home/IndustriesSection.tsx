import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Users, 
  Building2, 
  Sun, 
  Truck, 
  Heart, 
  GraduationCap, 
  Megaphone, 
  ShoppingCart,
  Plane,
  ArrowRight,
  Briefcase
} from "lucide-react";

const industries = [
  { 
    icon: Factory, 
    name: "Manufacturing", 
    slug: "manufacturing", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    description: "Production tracking, quality control, supply chain optimization"
  },
  { 
    icon: ShoppingCart, 
    name: "Retail & eCommerce", 
    slug: "retail", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Inventory management, POS integration, customer loyalty"
  },
  { 
    icon: GraduationCap, 
    name: "Education", 
    slug: "education", 
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    description: "Student management, admissions, learning platforms"
  },
  { 
    icon: Truck, 
    name: "Logistics & Transport", 
    slug: "logistics", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Fleet tracking, route optimization, delivery management"
  },
  { 
    icon: Heart, 
    name: "Healthcare", 
    slug: "healthcare", 
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    description: "Patient records, appointment scheduling, compliance"
  },
  { 
    icon: Building2, 
    name: "Real Estate", 
    slug: "real-estate", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    description: "Property management, lead tracking, listings automation"
  },
  { 
    icon: Users, 
    name: "Hospitality", 
    slug: "hospitality", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    description: "Guest experience, reservations, multi-location management"
  },
  { 
    icon: Megaphone, 
    name: "IT & Tech Services", 
    slug: "it", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    description: "Project tracking, helpdesk, resource management"
  },
  { 
    icon: Sun, 
    name: "Nonprofits", 
    slug: "nonprofits", 
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    description: "Donor management, volunteer coordination, impact tracking"
  },
  { 
    icon: Plane, 
    name: "Media & Entertainment", 
    slug: "media", 
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
    description: "Content management, royalty tracking, talent management"
  },
  { 
    icon: Briefcase, 
    name: "Professional Services", 
    slug: "professional-services", 
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop",
    description: "Client management, time tracking, project delivery"
  },
  { 
    icon: Factory, 
    name: "Financial Services", 
    slug: "financial-services", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    description: "Compliance, portfolio management, client advisory"
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3FE0F0]/3 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
            Industry Expertise
          </span>
          {/* DARK SECTION: Heading must be #FFFFFF */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
            Solutions Tailored to
            <span className="text-gradient-primary block">Your Industry</span>
          </h2>
          {/* DARK SECTION: Secondary text must be #E5E7EB */}
          <p className="text-[#E5E7EB] text-lg max-w-3xl mx-auto">
            Deep domain expertise across diverse industries. We understand your unique challenges and deliver 
            customized Zoho, CRM, and ERP solutions that drive measurable results.
          </p>
        </motion.div>

        {/* Industry Grid - Enhanced Cards with Larger Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#3FE0F0]/10 hover:border-[#3FE0F0]/40 hover-lift transition-all bg-[#0F2A5F]/50"
                >
                  {/* Background Image */}
                  <div className="relative w-full h-44 md:h-52 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D] via-[#0B1C3D]/60 to-transparent" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-[#3FE0F0]/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-[#3FE0F0] group-hover:scale-110 transition-all border border-[#3FE0F0]/30">
                      <Icon className="w-6 h-6 text-[#3FE0F0] group-hover:text-[#0B1C3D] transition-colors" />
                    </div>
                    {/* DARK SECTION: Text must be #FFFFFF */}
                    <h3 className="text-base font-semibold text-[#FFFFFF] group-hover:text-[#3FE0F0] transition-colors text-center mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-[#E5E7EB]/70 text-center line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Industries Served" },
            { value: "500+", label: "Industry Solutions" },
            { value: "12+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="text-center p-4 rounded-xl bg-[#0F2A5F]/50 border border-[#3FE0F0]/10"
            >
              <span className="text-2xl md:text-3xl font-bold text-[#3FE0F0]">{stat.value}</span>
              <p className="text-sm text-[#E5E7EB]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3FE0F0] to-[#4DA3FF] text-[#0B1C3D] font-semibold hover:shadow-lg hover:shadow-[#3FE0F0]/25 transition-all"
          >
            View All Industry Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
