import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Zoho suite info for left content
const zohoSuites = [
  { name: "CRM Plus", description: "Unified customer experience" },
  { name: "Finance Plus", description: "Complete finance suite" },
  { name: "People Plus", description: "HR & workforce management" },
  { name: "Workplace", description: "Collaboration tools" },
  { name: "Marketing Plus", description: "Marketing automation" },
  { name: "Service Plus", description: "Customer service" },
];

// Zoho app data with actual working logo URLs from Zoho static CDN
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
  { name: "Meeting", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/meeting.png", color: "#00BCD4" },
  { name: "Cliq", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/cliq.png", color: "#7B1FA2" },
  { name: "Survey", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/survey.png", color: "#9C27B0" },
  { name: "Social", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/social.png", color: "#E91E63" },
  { name: "SalesIQ", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/salesiq.png", color: "#7B1FA2" },
  { name: "Sign", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/sign.png", color: "#00BCD4" },
];

// Split apps into 3 orbits with different starting angles for natural distribution
const innerOrbit = zohoApps.slice(0, 5);
const middleOrbit = zohoApps.slice(5, 11);
const outerOrbit = zohoApps.slice(11, 18);

interface OrbitingAppProps {
  app: { name: string; logo: string; color: string };
  index: number;
  total: number;
  orbitRadius: number;
  rotationOffset: number;
  startAngleOffset: number;
  onHover: (name: string | null) => void;
  hoveredApp: string | null;
}

const OrbitingApp = ({ 
  app, 
  index, 
  total, 
  orbitRadius,
  rotationOffset,
  startAngleOffset,
  onHover,
  hoveredApp 
}: OrbitingAppProps) => {
  const [imgError, setImgError] = useState(false);
  
  // Calculate position with offset for natural distribution
  const baseAngle = (index / total) * 360 + startAngleOffset;
  const currentAngle = baseAngle + rotationOffset;
  const angleRad = (currentAngle * Math.PI) / 180;
  
  const x = Math.cos(angleRad) * orbitRadius;
  const y = Math.sin(angleRad) * orbitRadius;
  
  // Floating animation offset based on index
  const floatOffset = Math.sin((Date.now() / 1500) + index * 0.5) * 3;
  
  const isPaused = hoveredApp === app.name;
  const scale = isPaused ? 1.15 : 1;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-pointer"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y + floatOffset}px)`,
        transform: 'translate(-50%, -50%)',
        zIndex: isPaused ? 30 : 10,
      }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onMouseEnter={() => onHover(app.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div 
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-white flex items-center justify-center p-2 transition-shadow duration-300"
        style={{
          boxShadow: isPaused 
            ? `0 8px 24px ${app.color}40, 0 4px 12px rgba(0,0,0,0.1)` 
            : '0 4px 12px rgba(0,0,0,0.08)',
          border: isPaused ? `2px solid ${app.color}` : '2px solid #E5E7EB'
        }}
      >
        {imgError ? (
          <div 
            className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: app.color }}
          >
            {app.name.substring(0, 2).toUpperCase()}
          </div>
        ) : (
          <img 
            src={app.logo}
            alt={`Zoho ${app.name}`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div 
        className="flex items-center gap-0.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm whitespace-nowrap"
        style={{ 
          border: isPaused ? `1px solid ${app.color}40` : '1px solid #E5E7EB'
        }}
      >
        <span className="text-[9px] md:text-[10px] font-medium text-blue-500">Zoho</span>
        <span className="text-[9px] md:text-[10px] font-bold text-gray-800">{app.name}</span>
      </div>
      
      {/* Tooltip on hover */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 px-3 py-2 bg-white rounded-lg shadow-xl text-xs whitespace-nowrap z-40 border border-gray-100"
        >
          <span className="font-semibold" style={{ color: app.color }}>Zoho {app.name}</span>
          <br />
          <span className="text-gray-500">Unified business solution</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export function ZohoEcosystemSection() {
  const [rotationAngles, setRotationAngles] = useState({ inner: 0, middle: 120, outer: 240 });
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 500, height: 500 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(0);

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate radii based on container - larger radii for better spread
  const baseSize = Math.min(containerSize.width, containerSize.height);
  const innerRadius = baseSize * 0.20;
  const middleRadius = baseSize * 0.35;
  const outerRadius = baseSize * 0.50;

  // Slow speeds for premium, calm feel
  const speeds = { inner: 0.008, middle: 0.006, outer: 0.004 };

  useAnimationFrame((time) => {
    if (hoveredApp) return; // Pause all on hover
    
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    
    setRotationAngles(prev => ({
      inner: prev.inner + speeds.inner * delta,
      middle: prev.middle - speeds.middle * delta, // Opposite direction
      outer: prev.outer + speeds.outer * delta,
    }));
  });

  const handleHover = useCallback((name: string | null) => {
    setHoveredApp(name);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Split background - full height */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[45%] bg-[#0B1C3D]" />
        <div className="hidden lg:block w-[55%] bg-gradient-to-br from-[#F0F7FB] via-[#E8F4FC] to-[#FFFFFF]" />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-0 items-center min-h-[700px] lg:min-h-[800px]">
          {/* Left Content - Dark background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="py-16 md:py-20 lg:py-24 pr-4 lg:pr-12 max-w-full"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
              Zoho Premium Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Complete Zoho
              <span className="block bg-gradient-to-r from-[#3FE0F0] to-[#8B5CF6] bg-clip-text text-transparent">
                Ecosystem Mastery
              </span>
            </h2>
            <p className="text-gray-300 text-base lg:text-lg mb-8 max-w-lg">
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
                  className="flex items-start gap-2 p-2.5 lg:p-3 bg-[#0F2A5F]/80 rounded-lg border border-[#3FE0F0]/10"
                >
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#3FE0F0] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-xs lg:text-sm truncate">{suite.name}</h4>
                    <p className="text-[10px] lg:text-xs text-gray-400 truncate">{suite.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-[#3FE0F0] to-[#8B5CF6] hover:opacity-90 text-white border-0"
            >
              <Link to="/zoho-solutions">
                Explore Zoho Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Full Orbital Animation - properly centered in section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center py-8 lg:py-0"
          >
            <div 
              ref={containerRef}
              className="relative w-full aspect-square max-w-[600px] lg:max-w-none lg:w-[650px] lg:h-[650px] flex items-center justify-center"
            >
              {/* Concentric ring backgrounds */}
              <div 
                className="absolute rounded-full"
                style={{ 
                  width: `${outerRadius * 2 + 60}px`, 
                  height: `${outerRadius * 2 + 60}px`,
                  border: '1px solid rgba(99, 102, 241, 0.12)',
                  background: 'radial-gradient(circle, transparent 70%, rgba(99, 102, 241, 0.03) 100%)'
                }}
              />
              <div 
                className="absolute rounded-full"
                style={{ 
                  width: `${middleRadius * 2 + 40}px`, 
                  height: `${middleRadius * 2 + 40}px`,
                  border: '1px solid rgba(99, 102, 241, 0.18)',
                  background: 'radial-gradient(circle, transparent 70%, rgba(99, 102, 241, 0.04) 100%)'
                }}
              />
              <div 
                className="absolute rounded-full"
                style={{ 
                  width: `${innerRadius * 2 + 20}px`, 
                  height: `${innerRadius * 2 + 20}px`,
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  background: 'radial-gradient(circle, transparent 70%, rgba(99, 102, 241, 0.05) 100%)'
                }}
              />

              {/* Decorative dashed rings */}
              <motion.div
                className="absolute rounded-full border border-dashed opacity-30"
                style={{ 
                  width: `${outerRadius * 2 + 80}px`, 
                  height: `${outerRadius * 2 + 80}px`,
                  borderColor: '#6366F1'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
              />

              {/* Outer orbit apps */}
              {outerOrbit.map((app, index) => (
                <OrbitingApp
                  key={app.name}
                  app={app}
                  index={index}
                  total={outerOrbit.length}
                  orbitRadius={outerRadius}
                  rotationOffset={rotationAngles.outer}
                  startAngleOffset={-90}
                  onHover={handleHover}
                  hoveredApp={hoveredApp}
                />
              ))}

              {/* Middle orbit apps */}
              {middleOrbit.map((app, index) => (
                <OrbitingApp
                  key={app.name}
                  app={app}
                  index={index}
                  total={middleOrbit.length}
                  orbitRadius={middleRadius}
                  rotationOffset={rotationAngles.middle}
                  startAngleOffset={-60}
                  onHover={handleHover}
                  hoveredApp={hoveredApp}
                />
              ))}

              {/* Inner orbit apps */}
              {innerOrbit.map((app, index) => (
                <OrbitingApp
                  key={app.name}
                  app={app}
                  index={index}
                  total={innerOrbit.length}
                  orbitRadius={innerRadius}
                  rotationOffset={rotationAngles.inner}
                  startAngleOffset={-30}
                  onHover={handleHover}
                  hoveredApp={hoveredApp}
                />
              ))}

              {/* Central Zoho One Hub */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
                className="relative z-20 flex flex-col items-center"
              >
                {/* Pulsing glow */}
                <motion.div
                  className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Hub card - Zoho One Logo matching official branding */}
                <div className="relative bg-white rounded-xl shadow-lg p-5 md:p-6 flex flex-col items-center border border-gray-100">
                  {/* Official Zoho One 3D Cube Logo */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mb-3">
                    <svg viewBox="0 0 60 60" className="w-full h-full">
                      {/* 3D Cube - Blue tones matching Zoho One branding */}
                      {/* Top face - lightest blue */}
                      <polygon points="30,8 50,18 30,28 10,18" fill="#60A5FA"/>
                      {/* Left face - medium blue */}
                      <polygon points="10,18 30,28 30,48 10,38" fill="#3B82F6"/>
                      {/* Right face - darker blue */}
                      <polygon points="50,18 30,28 30,48 50,38" fill="#2563EB"/>
                      {/* Colored dots on the cube faces */}
                      <circle cx="20" cy="24" r="3" fill="#E42527"/>
                      <circle cx="30" cy="16" r="3" fill="#F7981D"/>
                      <circle cx="40" cy="24" r="3" fill="#4CAF50"/>
                      <circle cx="30" cy="38" r="2.5" fill="#00A1E0"/>
                    </svg>
                  </div>
                  
                  {/* Zoho One text - matching official style */}
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xl md:text-2xl font-bold tracking-tight">
                      <span style={{ color: '#E42527' }}>Z</span>
                      <span style={{ color: '#F7981D' }}>o</span>
                      <span style={{ color: '#4CAF50' }}>h</span>
                      <span style={{ color: '#00A1E0' }}>o</span>
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-gray-800">One</span>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">Unified Business OS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ZohoEcosystemSection;
