import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Stat {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: React.ElementType;
  color?: string;
}

interface StatsInfographicProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  variant?: "cards" | "inline" | "grid";
  animated?: boolean;
}

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export function StatsInfographic({
  title,
  subtitle,
  stats,
  variant = "cards",
  animated = true
}: StatsInfographicProps) {
  const [isVisible, setIsVisible] = useState(false);

  const gradientColors = [
    "from-[hsl(210,90%,55%)] to-[hsl(190,85%,50%)]",
    "from-[hsl(330,80%,65%)] to-[hsl(290,70%,55%)]",
    "from-[hsl(290,70%,55%)] to-[hsl(270,70%,60%)]",
    "from-[hsl(150,70%,45%)] to-[hsl(190,85%,50%)]",
  ];

  if (variant === "inline") {
    return (
      <div className="w-full bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isNumeric = typeof stat.value === "number";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsVisible(true)}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradientColors[index % gradientColors.length]} bg-clip-text text-transparent`}>
                  {stat.prefix}
                  {animated && isNumeric && isVisible ? (
                    <AnimatedNumber value={stat.value as number} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Cards variant
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>}
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? TrendingUp : stat.trend === "down" ? TrendingDown : Minus;
          const isNumeric = typeof stat.value === "number";
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsVisible(true)}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              {Icon && (
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${stat.color || "hsl(190, 85%, 50%)"}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color || "hsl(190, 85%, 50%)" }} />
                </div>
              )}
              
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${gradientColors[index % gradientColors.length]} bg-clip-text text-transparent mb-1`}>
                {stat.prefix}
                {animated && isNumeric && isVisible ? (
                  <AnimatedNumber value={stat.value as number} />
                ) : (
                  stat.value
                )}
                {stat.suffix}
              </div>
              
              <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
              
              {stat.trend && stat.trendValue && (
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-green-600" : 
                  stat.trend === "down" ? "text-red-600" : 
                  "text-gray-500"
                }`}>
                  <TrendIcon className="w-3 h-3" />
                  {stat.trendValue}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
