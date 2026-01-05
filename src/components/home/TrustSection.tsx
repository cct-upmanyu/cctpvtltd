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
    <section className="bg-gradient-to-br from-[#F0F4FA] via-[#E8EEF7] to-[#F5F7FB] section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0B1C3D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* LIGHT SECTION: Heading must be #0F172A */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Trusted by Global Enterprises
          </h2>
          {/* LIGHT SECTION: Secondary text must be #374151 */}
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
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
                className="group relative bg-white rounded-2xl p-6 text-center border border-[#0B1C3D]/10 hover:border-[#3FE0F0]/50 hover:shadow-lg hover-lift transition-all shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#0B1C3D] to-[#0F2A5F] flex items-center justify-center group-hover:from-[#3FE0F0] group-hover:to-[#4DA3FF] transition-all">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                {/* LIGHT SECTION: Text must be #111827 */}
                <div className="text-2xl md:text-3xl font-bold text-[#111827] mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                {/* LIGHT SECTION: Secondary text must be #374151 */}
                <p className="text-sm text-[#374151]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-[#0B1C3D]/10"
        >
          {/* LIGHT SECTION: Secondary text must be #374151 */}
          <p className="text-center text-[#374151] text-sm mb-8">
            Technology Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            <motion.img
              src="/zoho-logo-official.png"
              alt="Zoho Partner"
              className="h-12 transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
              alt="Google Cloud Partner"
              className="h-8 transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS Partner"
              className="h-8 transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft Partner"
              className="h-8 transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
              alt="Salesforce Partner"
              className="h-9 transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}