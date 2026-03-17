import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Globe, Flag, Sparkles } from "lucide-react";

function AnimatedNumber({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: <Award className="w-6 h-6" />, value: 12, suffix: "+", label: "Years of Experience", color: "#3FE0F0" },
  { icon: <Globe className="w-6 h-6" />, value: 4000, suffix: "+", label: "Global Implementations", color: "#4DA3FF" },
  { icon: <Flag className="w-6 h-6" />, value: 500, suffix: "+", label: "US Implementations", color: "#3FE0F0" },
  { icon: <Sparkles className="w-6 h-6" />, value: 50, suffix: "+", label: "Zoho Extensions Built", color: "#4DA3FF" },
];

export function GrowthCounter() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #0F2A5F 50%, #0B1C3D 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(63,224,240,0.5) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Trusted by Enterprises Worldwide</h2>
          <p className="text-white/60 mt-2">Numbers that speak for themselves</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${stat.color}15`, color: stat.color, border: `1px solid ${stat.color}20` }}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
