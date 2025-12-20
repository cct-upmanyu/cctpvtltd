import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Users, Globe, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "Premium",
    label: "Global Zoho Partner",
    suffix: "",
  },
  {
    icon: Trophy,
    value: "Zoho Creator",
    label: "Champions",
    suffix: "",
  },
  {
    icon: CheckCircle,
    value: 800,
    label: "Projects Delivered",
    suffix: "+",
  },
  {
    icon: Users,
    value: 12,
    label: "Years Experience",
    suffix: "+",
  },
  {
    icon: Globe,
    value: 5,
    label: "Global Offices",
    suffix: "",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof value === "number") {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (typeof value === "string") {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* DARK SECTION: Heading must be #FFFFFF */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
            Trusted by Global Enterprises
          </h2>
          {/* DARK SECTION: Secondary text must be #E5E7EB */}
          <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
            Serving clients across UK, USA, Canada, Australia, UAE, and India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0F2A5F] rounded-2xl p-6 text-center border border-[#3FE0F0]/10 hover:border-[#3FE0F0]/30 hover-lift transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center group-hover:bg-[#3FE0F0]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#3FE0F0]" />
                </div>
                {/* DARK SECTION: Text must be #FFFFFF */}
                <div className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                {/* DARK SECTION: Secondary text must be #E5E7EB */}
                <p className="text-sm text-[#E5E7EB]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-[#3FE0F0]/10"
        >
          {/* DARK SECTION: Secondary text must be #E5E7EB */}
          <p className="text-center text-[#E5E7EB] text-sm mb-8">
            Technology Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {["Zoho", "Google Cloud", "AWS", "Microsoft", "Salesforce"].map((partner) => (
              <div
                key={partner}
                className="text-[#E5E7EB] font-semibold text-lg hover:text-[#3FE0F0] transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}