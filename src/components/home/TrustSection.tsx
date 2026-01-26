import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Users, CheckCircle, MapPin } from "lucide-react";

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
    value: 500,
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
    icon: MapPin,
    value: 6,
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
    <section className="bg-gradient-to-b from-[#0B1C3D] via-[#102850] to-[#0B1C3D] section-padding relative overflow-hidden">
      {/* Subtle radial glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a3a6e]/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#0F2A5F]/50 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#0F2A5F]/50 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Enterprises Worldwide
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            ClubCode Technology Pvt Ltd serves clients across UK, USA, Canada, Australia, UAE, and India
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
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#3FE0F0]/50 hover:bg-white/10 hover-lift transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#3FE0F0]/20 to-[#8B5CF6]/20 flex items-center justify-center group-hover:from-[#3FE0F0]/40 group-hover:to-[#8B5CF6]/40 transition-all border border-[#3FE0F0]/20">
                  <Icon className="w-7 h-7 text-[#3FE0F0]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-white/70">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Partners - Updated with AI theme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-center text-white/60 text-sm mb-8">
            Technology Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#3FE0F0]/40 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/zoho-logo-official.png"
                alt="Zoho Partner"
                className="h-16 w-auto"
              />
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#3FE0F0]/40 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                alt="Google Cloud Partner"
                className="h-8 w-auto"
              />
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#3FE0F0]/40 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
                alt="Meta Partner"
                className="h-8 w-auto brightness-0 invert"
              />
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#3FE0F0]/40 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft Partner"
                className="h-8 w-auto"
              />
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#3FE0F0]/40 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                alt="Salesforce Partner"
                className="h-9 w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}