import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, Sparkles, TrendingUp, Clock, AlertTriangle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterItem {
  before: string;
  after: string;
}

interface BeforeAfterCardProps {
  title: string;
  description?: string;
  items: BeforeAfterItem[];
  stats?: {
    label: string;
    before: string;
    after: string;
    improvement?: string;
  }[];
  className?: string;
}

export function BeforeAfterCard({ 
  title, 
  description, 
  items, 
  stats,
  className 
}: BeforeAfterCardProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-gradient-to-br from-card to-card/80 rounded-2xl border border-border/50 overflow-hidden shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={cn(
            "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700",
            activeTab === "before" ? "bg-red-500/10" : "bg-green-500/10"
          )}
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.8 : 0.5
          }}
        />
        <motion.div 
          className={cn(
            "absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700",
            activeTab === "before" ? "bg-orange-500/10" : "bg-emerald-500/10"
          )}
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.8 : 0.5
          }}
        />
      </div>

      {/* Header */}
      <div className="relative p-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: activeTab === "after" ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className={cn(
              "w-6 h-6 transition-colors duration-300",
              activeTab === "before" ? "text-muted-foreground" : "text-primary"
            )} />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Toggle Tabs */}
      <div className="relative px-6">
        <div className="flex bg-muted/50 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("before")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300",
              activeTab === "before" 
                ? "bg-red-500/10 text-red-600 dark:text-red-400 shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <AlertTriangle className="w-4 h-4" />
            Before
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300",
              activeTab === "after" 
                ? "bg-green-500/10 text-green-600 dark:text-green-400 shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Zap className="w-4 h-4" />
            After
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "before" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "before" ? 20 : -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-colors",
                  activeTab === "before" 
                    ? "bg-red-500/5 border border-red-500/10" 
                    : "bg-green-500/5 border border-green-500/10"
                )}
              >
                {activeTab === "before" ? (
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm text-foreground">
                  {activeTab === "before" ? item.before : item.after}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Comparison */}
      {stats && stats.length > 0 && (
        <div className="relative px-6 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 rounded-xl p-4 text-center border border-border/50"
              >
                <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={cn(
                      "text-2xl font-bold",
                      activeTab === "before" ? "text-red-500" : "text-green-500"
                    )}
                  >
                    {activeTab === "before" ? stat.before : stat.after}
                  </motion.div>
                </AnimatePresence>
                {stat.improvement && activeTab === "after" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-1 mt-1 text-xs text-green-500"
                  >
                    <TrendingUp className="w-3 h-3" />
                    {stat.improvement}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Interactive Timeline Before/After Component
interface TransformationTimelineProps {
  title: string;
  subtitle?: string;
  transformations: {
    area: string;
    before: string;
    after: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  className?: string;
}

export function TransformationTimeline({ 
  title, 
  subtitle,
  transformations,
  className 
}: TransformationTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative", className)}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-primary to-green-500 hidden md:block" />
        
        {/* Arrow in center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-20 shadow-lg hidden md:flex">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>

        <div className="space-y-6">
          {transformations.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative grid md:grid-cols-[1fr_80px_1fr] gap-4 items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Before Card */}
                <motion.div
                  animate={{ 
                    scale: isHovered ? 1.02 : 1,
                    x: isHovered ? -10 : 0
                  }}
                  className={cn(
                    "p-5 rounded-xl border-2 transition-all duration-300",
                    isHovered 
                      ? "bg-red-500/10 border-red-500/30 shadow-lg shadow-red-500/10" 
                      : "bg-card border-border/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                      isHovered ? "bg-red-500/20" : "bg-muted"
                    )}>
                      <X className={cn(
                        "w-5 h-5 transition-colors",
                        isHovered ? "text-red-500" : "text-muted-foreground"
                      )} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-red-500 mb-1">BEFORE</div>
                      <p className="text-sm text-foreground">{item.before}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Center Icon */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    animate={{ 
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                      isHovered 
                        ? "bg-primary shadow-lg shadow-primary/30" 
                        : "bg-muted border-2 border-border"
                    )}
                  >
                    <Icon className={cn(
                      "w-6 h-6 transition-colors",
                      isHovered ? "text-white" : "text-muted-foreground"
                    )} />
                  </motion.div>
                </div>

                {/* After Card */}
                <motion.div
                  animate={{ 
                    scale: isHovered ? 1.02 : 1,
                    x: isHovered ? 10 : 0
                  }}
                  className={cn(
                    "p-5 rounded-xl border-2 transition-all duration-300",
                    isHovered 
                      ? "bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10" 
                      : "bg-card border-border/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                      isHovered ? "bg-green-500/20" : "bg-muted"
                    )}>
                      <Check className={cn(
                        "w-5 h-5 transition-colors",
                        isHovered ? "text-green-500" : "text-muted-foreground"
                      )} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-500 mb-1">AFTER</div>
                      <p className="text-sm text-foreground">{item.after}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile: Area Label */}
                <div className="md:hidden text-center -mt-2 mb-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    <Icon className="w-4 h-4" />
                    {item.area}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Animated Stats Counter for Transformations
interface TransformationStatsProps {
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
    color: "primary" | "green" | "blue" | "orange";
  }[];
  className?: string;
}

export function TransformationStats({ stats, className }: TransformationStatsProps) {
  const colorMap = {
    primary: "from-primary to-primary/70 text-primary",
    green: "from-green-500 to-green-600 text-green-500",
    blue: "from-blue-500 to-blue-600 text-blue-500",
    orange: "from-orange-500 to-orange-600 text-orange-500"
  };

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
          <div className="relative bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <motion.div
              className={cn("text-4xl md:text-5xl font-bold mb-2", colorMap[stat.color].split(" ").slice(2).join(" "))}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {stat.value}{stat.suffix}
            </motion.div>
            <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
            <div className="text-xs text-muted-foreground">{stat.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
