import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import zohoOneLogo from "@/assets/zoho-one-logo.png";

const zohoSuites = [
  { name: "CRM Plus", description: "Unified customer experience" },
  { name: "Finance Plus", description: "Complete finance suite" },
  { name: "People Plus", description: "HR & workforce management" },
  { name: "Workplace", description: "Collaboration tools" },
  { name: "Marketing Plus", description: "Marketing automation" },
  { name: "Service Plus", description: "Customer service" },
];

const zohoApps = [
  { name: "CRM", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.png", color: "#E42527" },
  { name: "Books", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/books.png", color: "#4CAF50" },
  { name: "Creator", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.png", color: "#00A1E0" },
  { name: "Desk", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/desk.png", color: "#009688" },
  { name: "People", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/people.png", color: "#4CAF50" },
  { name: "Recruit", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/recruit.png", color: "#FF6F00" },
  { name: "Projects", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.png", color: "#F44336" },
  { name: "Campaigns", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/campaigns.png", color: "#6A1B9A" },
  { name: "Analytics", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/analytics.png", color: "#1976D2" },
  { name: "Inventory", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/inventory.png", color: "#F7981D" },
  { name: "Invoice", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/invoice.png", color: "#2196F3" },
  { name: "Mail", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.png", color: "#4285F4" },
  { name: "SalesIQ", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/salesiq.png", color: "#7B1FA2" },
  { name: "Social", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/social.png", color: "#E91E63" },
  { name: "Flow", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/flow.png", color: "#00BCD4" },
  { name: "Sign", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/sign.png", color: "#00BCD4" },
];

const innerOrbit = zohoApps.slice(0, 5);
const middleOrbit = zohoApps.slice(5, 10);
const outerOrbit = zohoApps.slice(10, 16);

interface OrbitingAppProps {
  app: { name: string; logo: string; color: string };
  index: number;
  total: number;
  orbitRadius: number;
  rotationOffset: number;
  startAngleOffset: number;
  size: number;
  hoveredApp: string | null;
  onHover: (name: string | null) => void;
}

const OrbitingApp = ({ app, index, total, orbitRadius, rotationOffset, startAngleOffset, size, hoveredApp, onHover }: OrbitingAppProps) => {
  const [imgError, setImgError] = useState(false);
  const baseAngle = (index / total) * 360 + startAngleOffset;
  const currentAngle = baseAngle + rotationOffset;
  const angleRad = (currentAngle * Math.PI) / 180;
  const x = Math.cos(angleRad) * orbitRadius;
  const y = Math.sin(angleRad) * orbitRadius;
  const isHovered = hoveredApp === app.name;
  const scale = isHovered ? 2 : 1;

  return (
    <div
      className="absolute flex flex-col items-center gap-0.5"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: isHovered ? 50 : 10,
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => onHover(app.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className="rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `2px solid ${app.color}30`,
          padding: `${size * 0.15}px`,
          boxShadow: isHovered ? `0 0 20px ${app.color}40` : undefined,
        }}
      >
        {imgError ? (
          <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-[10px]" style={{ backgroundColor: app.color }}>
            {app.name.substring(0, 2)}
          </div>
        ) : (
          <img src={app.logo} alt={`Zoho ${app.name}`} className="w-full h-full object-contain" onError={() => setImgError(true)} />
        )}
      </div>
      <span className="text-[9px] font-semibold text-[#374151] whitespace-nowrap bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm">
        {app.name}
      </span>
    </div>
  );
};

export function ZohoEcosystemImageSection() {
  const [rotationAngles, setRotationAngles] = useState({ inner: 0, middle: 120, outer: 240 });
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const baseSize = Math.min(containerSize.width, containerSize.height);
  const isSmall = baseSize < 400;
  const innerRadius = baseSize * (isSmall ? 0.15 : 0.18);
  const middleRadius = baseSize * (isSmall ? 0.28 : 0.32);
  const outerRadius = baseSize * (isSmall ? 0.42 : 0.46);
  const iconSizeInner = isSmall ? 40 : 60;
  const iconSizeMiddle = isSmall ? 38 : 56;
  const iconSizeOuter = isSmall ? 34 : 52;

  // Pause rotation when any app is hovered
  useAnimationFrame((time) => {
    if (hoveredApp) {
      lastTimeRef.current = time;
      return;
    }
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    setRotationAngles(prev => ({
      inner: prev.inner - 0.012 * delta,
      middle: prev.middle - 0.008 * delta,
      outer: prev.outer - 0.005 * delta,
    }));
  });

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-0 items-center min-h-[700px] lg:min-h-[800px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="py-16 md:py-20 lg:py-24 pr-4 lg:pr-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Zoho Premium Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
              Complete Zoho
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecosystem Mastery
              </span>
            </h2>
            <p className="text-[#374151] text-base lg:text-lg mb-8 max-w-lg">
              As a certified Global Zoho Premium Partner and Creator Champions, we implement the full Zoho ecosystem—from individual apps to complete enterprise suites.
            </p>

            <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-8 max-w-lg">
              {zohoSuites.map((suite, index) => (
                <motion.div
                  key={suite.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-2 p-2.5 lg:p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#111827] text-xs lg:text-sm truncate">{suite.name}</h4>
                    <p className="text-[10px] lg:text-xs text-[#6B7280] truncate">{suite.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white border-0">
              <Link to="/zoho-solutions">
                Explore Zoho Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Orbital Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center py-8 lg:py-0"
          >
            <div ref={containerRef} className="relative w-full aspect-square max-w-[450px] md:max-w-[550px] lg:max-w-none lg:w-[650px] lg:h-[650px] flex items-center justify-center mx-auto">
              {/* Orbit rings */}
              {[outerRadius, middleRadius, innerRadius].map((r, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${r * 2 + 40}px`,
                    height: `${r * 2 + 40}px`,
                    border: `1px dashed rgba(99, 102, 241, ${0.1 + i * 0.05})`,
                  }}
                />
              ))}

              {/* Outer orbit */}
              {outerOrbit.map((app, index) => (
                <OrbitingApp key={app.name} app={app} index={index} total={outerOrbit.length} orbitRadius={outerRadius} rotationOffset={rotationAngles.outer} startAngleOffset={-90} size={iconSizeOuter} hoveredApp={hoveredApp} onHover={setHoveredApp} />
              ))}

              {/* Middle orbit */}
              {middleOrbit.map((app, index) => (
                <OrbitingApp key={app.name} app={app} index={index} total={middleOrbit.length} orbitRadius={middleRadius} rotationOffset={rotationAngles.middle} startAngleOffset={-60} size={iconSizeMiddle} hoveredApp={hoveredApp} onHover={setHoveredApp} />
              ))}

              {/* Inner orbit */}
              {innerOrbit.map((app, index) => (
                <OrbitingApp key={app.name} app={app} index={index} total={innerOrbit.length} orbitRadius={innerRadius} rotationOffset={rotationAngles.inner} startAngleOffset={-30} size={iconSizeInner} hoveredApp={hoveredApp} onHover={setHoveredApp} />
              ))}

              {/* Central Zoho One - Reduced size */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                className="relative z-20 flex flex-col items-center"
              >
                <motion.div
                  className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative bg-white rounded-xl shadow-lg p-3 md:p-4 flex flex-col items-center border border-gray-100">
                  <img src={zohoOneLogo} alt="Zoho One - Unified Business OS" className="w-16 h-auto md:w-20 object-contain" />
                  <span className="text-[10px] md:text-xs text-[#6B7280] mt-1 font-medium">Unified Business OS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
