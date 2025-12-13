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
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Global Enterprises
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                className="group relative bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover-lift transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
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
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground text-sm mb-8">
            Technology Partners & Certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {["Zoho", "Google Cloud", "AWS", "Microsoft", "Salesforce"].map((partner) => (
              <div
                key={partner}
                className="text-muted-foreground font-semibold text-lg hover:text-foreground transition-colors"
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