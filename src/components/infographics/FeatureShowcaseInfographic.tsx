import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  color?: string;
}

interface FeatureShowcaseInfographicProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  variant?: "cards" | "tabs" | "accordion";
}

export function FeatureShowcaseInfographic({
  title,
  subtitle,
  features,
  variant = "cards"
}: FeatureShowcaseInfographicProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  if (variant === "tabs") {
    return (
      <div className="w-full">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-50/50">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                    isActive
                      ? "text-primary border-primary bg-white"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:bg-gray-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  {feature.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${features[activeFeature].color || "hsl(190, 85%, 50%)"}15` 
                    }}
                  >
                    {(() => {
                      const Icon = features[activeFeature].icon;
                      return <Icon className="w-8 h-8" style={{ color: features[activeFeature].color || "hsl(190, 85%, 50%)" }} />;
                    })()}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-muted-foreground text-lg mb-6">
                    {features[activeFeature].description}
                  </p>
                </div>
                <div className="space-y-3">
                  {features[activeFeature].benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle2 
                        className="w-5 h-5 mt-0.5 flex-shrink-0" 
                        style={{ color: features[activeFeature].color || "hsl(190, 85%, 50%)" }}
                      />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Default cards variant
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isHovered = hoveredFeature === index;
          const color = feature.color || `hsl(${190 + index * 30}, 70%, 50%)`;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                animate={{ opacity: isHovered ? 0.05 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
              />
              
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
