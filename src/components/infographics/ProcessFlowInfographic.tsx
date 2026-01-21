import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: React.ElementType;
}

interface ProcessFlowInfographicProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: "timeline" | "zigzag" | "numbered";
}

export function ProcessFlowInfographic({
  title,
  subtitle,
  steps,
  variant = "timeline"
}: ProcessFlowInfographicProps) {
  
  if (variant === "zigzag") {
    return (
      <div className="w-full">
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            const gradientColors = [
              "from-[hsl(210,90%,55%)] to-[hsl(190,85%,50%)]",
              "from-[hsl(190,85%,50%)] to-[hsl(330,80%,65%)]",
              "from-[hsl(330,80%,65%)] to-[hsl(290,70%,55%)]",
              "from-[hsl(290,70%,55%)] to-[hsl(270,70%,60%)]",
              "from-[hsl(270,70%,60%)] to-[hsl(210,90%,55%)]",
              "from-[hsl(150,70%,45%)] to-[hsl(190,85%,50%)]",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow ${
                    isEven ? "md:ml-auto" : ""
                  } max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center text-white font-bold text-sm`}>
                        {step.step}
                      </div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-md z-10" />

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Default timeline variant
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h3>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const gradientColors = [
              "from-[hsl(210,90%,55%)] to-[hsl(190,85%,50%)]",
              "from-[hsl(190,85%,50%)] to-[hsl(330,80%,65%)]",
              "from-[hsl(330,80%,65%)] to-[hsl(290,70%,55%)]",
              "from-[hsl(290,70%,55%)] to-[hsl(270,70%,60%)]",
              "from-[hsl(270,70%,60%)] to-[hsl(210,90%,55%)]",
              "from-[hsl(150,70%,45%)] to-[hsl(190,85%,50%)]",
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all h-full">
                  {/* Step number */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md`}>
                    {step.step}
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
