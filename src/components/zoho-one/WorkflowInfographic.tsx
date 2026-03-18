import { motion } from "framer-motion";
import zohoOneLogo from "@/assets/zoho-one-logo.png";
import { Zap } from "lucide-react";

interface Props {
  title: string;
  steps: string[];
}

const STEP_COLORS = [
  { bg: "#E94235", gradient: "from-[#E94235] to-[#FF6F61]", label: "text-white" },
  { bg: "#4285F4", gradient: "from-[#4285F4] to-[#6FA8FF]", label: "text-white" },
  { bg: "#34A853", gradient: "from-[#34A853] to-[#5CDB7B]", label: "text-white" },
  { bg: "#FBBC05", gradient: "from-[#FBBC05] to-[#FFD54F]", label: "text-[#1a1a1a]" },
  { bg: "#3FE0F0", gradient: "from-[#3FE0F0] to-[#4DA3FF]", label: "text-white" },
  { bg: "#A259FF", gradient: "from-[#A259FF] to-[#C77DFF]", label: "text-white" },
  { bg: "#E94235", gradient: "from-[#E94235] to-[#FF6F61]", label: "text-white" },
  { bg: "#4285F4", gradient: "from-[#4285F4] to-[#6FA8FF]", label: "text-white" },
];

export default function WorkflowInfographic({ title, steps }: Props) {
  const totalSteps = steps.length;

  // Generate SVG wave path points
  const generateWavePath = (width: number, height: number, steps: number) => {
    const midY = height / 2;
    const amplitude = 60;
    const segmentWidth = width / (steps - 1);

    let path = `M 0 ${midY}`;
    for (let i = 0; i < steps - 1; i++) {
      const x1 = i * segmentWidth;
      const x2 = (i + 1) * segmentWidth;
      const midX = (x1 + x2) / 2;
      const isUp = i % 2 === 0;
      const cp1Y = isUp ? midY - amplitude : midY + amplitude;
      const cp2Y = isUp ? midY - amplitude : midY + amplitude;
      path += ` C ${midX} ${cp1Y}, ${midX} ${cp2Y}, ${x2} ${midY}`;
    }
    return path;
  };

  // Calculate card positions on the wave
  const getCardPositions = (width: number, height: number, steps: number) => {
    const midY = height / 2;
    const segmentWidth = width / (steps - 1);
    const positions: { x: number; y: number; isUp: boolean }[] = [];

    for (let i = 0; i < steps; i++) {
      const x = i * segmentWidth;
      const isUp = i % 2 === 0;
      positions.push({ x, y: midY, isUp });
    }
    return positions;
  };

  const svgWidth = 1200;
  const svgHeight = 400;
  const positions = getCardPositions(svgWidth, svgHeight, totalSteps);

  return (
    <section className="bg-[#F0F2F5] section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <img src={zohoOneLogo} alt="Zoho One" className="h-10 mx-auto mb-4 object-contain" />
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-1" /> Automated Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">{title}</h2>
          <p className="text-[#6B7280] mt-3 max-w-2xl mx-auto">
            See how Zoho One apps work together in a seamless flow
          </p>
        </motion.div>

        {/* Desktop — Snake Wave Path */}
        <div className="hidden lg:block relative" style={{ minHeight: "480px" }}>
          {/* SVG Wave */}
          <svg
            viewBox={`-40 0 ${svgWidth + 80} ${svgHeight}`}
            className="w-full h-auto absolute inset-0"
            preserveAspectRatio="xMidYMid meet"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E0E0E0" />
                <stop offset="50%" stopColor="#BDBDBD" />
                <stop offset="100%" stopColor="#E0E0E0" />
              </linearGradient>
            </defs>
            <path
              d={generateWavePath(svgWidth, svgHeight, totalSteps)}
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Dots on wave at each step position */}
            {positions.map((pos, i) => (
              <circle
                key={i}
                cx={pos.x}
                cy={pos.y}
                r="8"
                fill={STEP_COLORS[i % STEP_COLORS.length].bg}
                stroke="white"
                strokeWidth="3"
              />
            ))}
            {/* Dashed connectors from dot to card */}
            {positions.map((pos, i) => {
              const isUp = i % 2 === 0;
              const lineY1 = pos.y + (isUp ? -12 : 12);
              const lineY2 = pos.y + (isUp ? -70 : 70);
              return (
                <line
                  key={`line-${i}`}
                  x1={pos.x}
                  y1={lineY1}
                  x2={pos.x}
                  y2={lineY2}
                  stroke={STEP_COLORS[i % STEP_COLORS.length].bg}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              );
            })}
          </svg>

          {/* Cards overlay */}
          <div
            className="relative w-full"
            style={{ height: `${svgHeight}px` }}
          >
            {positions.map((pos, i) => {
              const isUp = i % 2 === 0;
              const color = STEP_COLORS[i % STEP_COLORS.length];
              const leftPercent = (pos.x / svgWidth) * 100;
              const cardWidth = Math.max(120, Math.min(160, 900 / totalSteps));

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isUp ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `calc(${leftPercent}% + 40px)`,
                    top: isUp ? "10px" : "auto",
                    bottom: isUp ? "auto" : "10px",
                    transform: "translateX(-50%)",
                    width: `${cardWidth}px`,
                    zIndex: 10,
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${color.gradient} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-default`}
                  >
                    <div className={`text-xs font-bold ${color.label} opacity-80 mb-1 uppercase tracking-wider`}>
                      Step {i + 1}
                    </div>
                    <p className={`${color.label} text-xs font-semibold leading-snug`}>
                      {steps[i]}
                    </p>
                  </div>
                  {/* Arrow pointer */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 ${
                      isUp
                        ? "bottom-[-8px] border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent"
                        : "top-[-8px] border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent"
                    }`}
                    style={{
                      borderTopColor: isUp ? STEP_COLORS[i % STEP_COLORS.length].bg : "transparent",
                      borderBottomColor: !isUp ? STEP_COLORS[i % STEP_COLORS.length].bg : "transparent",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile — Vertical Snake */}
        <div className="lg:hidden mt-8">
          <div className="relative">
            {/* Vertical wave line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E94235] via-[#34A853] via-[#4285F4] to-[#A259FF]" />

            <div className="space-y-4">
              {steps.map((step, i) => {
                const color = STEP_COLORS[i % STEP_COLORS.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex items-start gap-4 pl-16"
                  >
                    {/* Dot on line */}
                    <div
                      className={`absolute left-[26px] top-4 w-5 h-5 rounded-full bg-gradient-to-br ${color.gradient} border-3 border-white shadow-md z-10`}
                    />
                    {/* Card */}
                    <div
                      className={`bg-gradient-to-br ${color.gradient} rounded-xl p-4 flex-1 shadow-md`}
                    >
                      <span className={`text-[10px] font-bold ${color.label} opacity-70 uppercase tracking-wider`}>
                        Step {i + 1}
                      </span>
                      <p className={`${color.label} text-sm font-semibold leading-snug mt-1`}>
                        {step}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
