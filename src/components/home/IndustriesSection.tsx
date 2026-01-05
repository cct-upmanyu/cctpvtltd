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
  ArrowRight
} from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", slug: "manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
  { icon: Users, name: "Recruitment", slug: "recruitment", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop" },
  { icon: Building2, name: "Real Estate", slug: "real-estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop" },
  { icon: Sun, name: "Solar", slug: "solar", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop" },
  { icon: Truck, name: "Logistics", slug: "logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
  { icon: Heart, name: "Healthcare", slug: "healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" },
  { icon: GraduationCap, name: "Education", slug: "education", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" },
  { icon: Megaphone, name: "PR & Marketing", slug: "pr-marketing", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" },
  { icon: ShoppingCart, name: "Retail", slug: "retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
  { icon: Plane, name: "Aviation", slug: "aviation", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
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
          <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
            Deep domain expertise across diverse industries, delivering customized solutions that address your unique challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-6 mb-12">
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
                  to={`/industries#${industry.slug}`}
                  className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#3FE0F0]/10 hover:border-[#3FE0F0]/40 hover-lift transition-all"
                >
                  {/* Background Image - Larger size */}
                  <div className="relative w-full h-40 md:h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D] via-[#0B1C3D]/50 to-transparent" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-[#3FE0F0]/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-[#3FE0F0] group-hover:scale-110 transition-all border border-[#3FE0F0]/30">
                      <Icon className="w-7 h-7 text-[#3FE0F0] group-hover:text-[#0B1C3D] transition-colors" />
                    </div>
                    {/* DARK SECTION: Text must be #FFFFFF */}
                    <span className="text-base font-semibold text-[#FFFFFF] group-hover:text-[#3FE0F0] transition-colors">
                      {industry.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-[#3FE0F0] font-medium hover:gap-3 transition-all"
          >
            View All Industry Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}