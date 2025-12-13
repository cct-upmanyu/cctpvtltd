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
  { icon: Factory, name: "Manufacturing", slug: "manufacturing" },
  { icon: Users, name: "Recruitment", slug: "recruitment" },
  { icon: Building2, name: "Real Estate", slug: "real-estate" },
  { icon: Sun, name: "Solar", slug: "solar" },
  { icon: Truck, name: "Logistics", slug: "logistics" },
  { icon: Heart, name: "Healthcare", slug: "healthcare" },
  { icon: GraduationCap, name: "Education", slug: "education" },
  { icon: Megaphone, name: "PR & Marketing", slug: "pr-marketing" },
  { icon: ShoppingCart, name: "Retail", slug: "retail" },
  { icon: Plane, name: "Aviation", slug: "aviation" },
];

export function IndustriesSection() {
  return (
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solutions Tailored to
            <span className="text-gradient-primary block">Your Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep domain expertise across diverse industries, delivering customized solutions that address your unique challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
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
                  className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover-lift transition-all text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </span>
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
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Industry Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}