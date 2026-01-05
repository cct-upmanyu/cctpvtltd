import { motion, useAnimationFrame } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";

// Zoho app data with official brand colors
const zohoApps = [
  { name: "CRM", color: "#E42527" },
  { name: "Books", color: "#4CAF50" },
  { name: "Creator", color: "#00A1E0" },
  { name: "Inventory", color: "#F7981D" },
  { name: "Campaigns", color: "#6A1B9A" },
  { name: "People", color: "#4CAF50" },
  { name: "Recruit", color: "#FF6F00" },
  { name: "Payroll", color: "#00897B" },
  { name: "Desk", color: "#009688" },
  { name: "SalesIQ", color: "#7B1FA2" },
  { name: "Social", color: "#E91E63" },
  { name: "Sites", color: "#3F51B5" },
  { name: "Flow", color: "#00BCD4" },
  { name: "Expense", color: "#8BC34A" },
  { name: "Survey", color: "#9C27B0" },
  { name: "Zia", color: "#673AB7" },
  { name: "Voice", color: "#03A9F4" },
  { name: "Bookings", color: "#FF5722" },
];

// Split apps into 3 orbits
const innerOrbit = zohoApps.slice(0, 6);
const middleOrbit = zohoApps.slice(6, 12);
const outerOrbit = zohoApps.slice(12, 18);

// SVG Icon components matching Zoho's official icon style
const AppIcon = ({ name, color }: { name: string; color: string }) => {
  const icons: Record<string, JSX.Element> = {
    CRM: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    Books: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    ),
    Creator: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    ),
    Inventory: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z"/>
      </svg>
    ),
    Campaigns: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"/>
      </svg>
    ),
    People: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    Recruit: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    Payroll: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    Desk: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </svg>
    ),
    SalesIQ: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
      </svg>
    ),
    Social: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
      </svg>
    ),
    Sites: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    Flow: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/>
      </svg>
    ),
    Expense: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v6H9v-2h4v-2H9V7h6v2z"/>
      </svg>
    ),
    Survey: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
    Zia: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
    Voice: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    ),
    Bookings: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6">
        <path fill={color} d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
      </svg>
    ),
  };

  return icons[name] || <svg viewBox="0 0 24 24" className="w-5 h-5"><circle fill={color} cx="12" cy="12" r="10"/></svg>;
};

interface OrbitingAppProps {
  app: { name: string; color: string };
  index: number;
  total: number;
  radius: number;
  rotationOffset: number;
  onHover: (name: string | null) => void;
  hoveredApp: string | null;
  containerSize: number;
}

const OrbitingApp = ({ 
  app, 
  index, 
  total, 
  radius, 
  rotationOffset,
  onHover,
  hoveredApp,
  containerSize 
}: OrbitingAppProps) => {
  const baseAngle = (index / total) * 360 - 90; // Start from top
  const currentAngle = baseAngle + rotationOffset;
  const angleRad = (currentAngle * Math.PI) / 180;
  
  // Calculate actual radius based on container
  const actualRadius = (radius / 100) * (containerSize / 2);
  
  const x = Math.cos(angleRad) * actualRadius;
  const y = Math.sin(angleRad) * actualRadius;
  
  // Check if at top position (focal point) - around -90 degrees (270 in positive)
  const normalizedAngle = ((currentAngle % 360) + 360) % 360;
  const isAtTop = normalizedAngle > 250 && normalizedAngle < 290;
  
  const isPaused = hoveredApp === app.name;
  const scale = isAtTop ? 1.1 : isPaused ? 1.15 : 1;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 cursor-pointer z-10"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale,
        y: [0, -2, 0], // Micro-floating effect
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 25 },
        y: { duration: 2 + index * 0.1, repeat: Infinity, ease: "easeInOut" }
      }}
      onMouseEnter={() => onHover(app.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div 
        className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center transition-shadow duration-300"
        style={{
          boxShadow: isAtTop || isPaused 
            ? `0 8px 24px ${app.color}35, 0 4px 12px rgba(0,0,0,0.08)` 
            : '0 4px 12px rgba(0,0,0,0.06)',
          border: `2px solid ${isAtTop || isPaused ? app.color : '#E5E7EB'}`
        }}
      >
        <AppIcon name={app.name} color={app.color} />
      </div>
      <div 
        className="flex items-center gap-0.5 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm"
        style={{ 
          border: isAtTop || isPaused ? `1px solid ${app.color}40` : '1px solid transparent'
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
          exit={{ opacity: 0, y: 8 }}
          className="absolute top-full mt-2 px-3 py-2 bg-white rounded-lg shadow-xl text-xs whitespace-nowrap z-20 border border-gray-100"
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
  const [rotationAngles, setRotationAngles] = useState({ inner: 0, middle: 0, outer: 0 });
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState(500);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(0);

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const size = Math.min(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        setContainerSize(size);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Slower speeds for premium, calm feel
  const speeds = { inner: 0.012, middle: 0.009, outer: 0.006 };

  useAnimationFrame((time) => {
    if (hoveredApp) return; // Pause on hover
    
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    
    setRotationAngles(prev => ({
      inner: prev.inner + speeds.inner * delta,
      middle: prev.middle + speeds.middle * delta,
      outer: prev.outer + speeds.outer * delta,
    }));
  });

  const handleHover = useCallback((name: string | null) => {
    setHoveredApp(name);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Premium soft gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #E8F4FC 0%, #F0F7FB 25%, #FFFFFF 50%, #F8FAFC 75%, #EEF6FC 100%)'
        }}
      />
      
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #94A3B8 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            Complete Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Zoho One Ecosystem Mastery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            One unified operating system powering every business function. 
            50+ integrated applications working seamlessly together.
          </motion.p>
        </div>

        {/* Orbital animation container */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto aspect-square flex items-center justify-center"
          style={{ minHeight: '400px' }}
        >
          {/* Concentric ring backgrounds with subtle glow */}
          <div 
            className="absolute rounded-full"
            style={{ 
              width: '92%', 
              height: '92%',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              background: 'radial-gradient(circle, transparent 60%, rgba(59, 130, 246, 0.02) 100%)'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{ 
              width: '68%', 
              height: '68%',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              background: 'radial-gradient(circle, transparent 60%, rgba(59, 130, 246, 0.03) 100%)'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{ 
              width: '42%', 
              height: '42%',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              background: 'radial-gradient(circle, transparent 60%, rgba(59, 130, 246, 0.04) 100%)'
            }}
          />

          {/* Rotating decorative dashed rings */}
          <motion.div
            className="absolute rounded-full border border-dashed"
            style={{ width: '95%', height: '95%', borderColor: 'rgba(59, 130, 246, 0.1)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full border border-dashed"
            style={{ width: '72%', height: '72%', borderColor: 'rgba(59, 130, 246, 0.1)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          />

          {/* Outer orbit apps (radius ~46%) */}
          {outerOrbit.map((app, index) => (
            <OrbitingApp
              key={app.name}
              app={app}
              index={index}
              total={outerOrbit.length}
              radius={92}
              rotationOffset={rotationAngles.outer}
              onHover={handleHover}
              hoveredApp={hoveredApp}
              containerSize={containerSize}
            />
          ))}

          {/* Middle orbit apps (radius ~34%) */}
          {middleOrbit.map((app, index) => (
            <OrbitingApp
              key={app.name}
              app={app}
              index={index}
              total={middleOrbit.length}
              radius={68}
              rotationOffset={rotationAngles.middle}
              onHover={handleHover}
              hoveredApp={hoveredApp}
              containerSize={containerSize}
            />
          ))}

          {/* Inner orbit apps (radius ~21%) */}
          {innerOrbit.map((app, index) => (
            <OrbitingApp
              key={app.name}
              app={app}
              index={index}
              total={innerOrbit.length}
              radius={42}
              rotationOffset={rotationAngles.inner}
              onHover={handleHover}
              hoveredApp={hoveredApp}
              containerSize={containerSize}
            />
          ))}

          {/* Central Zoho One Hub - Fixed & Static */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Pulsing glow behind hub */}
            <motion.div
              className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Central hub card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-4 md:p-5 flex flex-col items-center border border-gray-100">
              {/* 3D Cube icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 mb-2">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  {/* Cube faces */}
                  <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" fill="#E8F4FC" stroke="#3B82F6" strokeWidth="0.5"/>
                  <path d="M4 14L24 24V44L4 34V14Z" fill="#3B82F6"/>
                  <path d="M44 14L24 24V44L44 34V14Z" fill="#60A5FA"/>
                  <path d="M4 14L24 4L44 14L24 24L4 14Z" fill="#93C5FD"/>
                  {/* Zoho colored dots */}
                  <circle cx="12" cy="20" r="2.5" fill="#E42527"/>
                  <circle cx="36" cy="20" r="2.5" fill="#4CAF50"/>
                  <circle cx="24" cy="10" r="2.5" fill="#F7981D"/>
                </svg>
              </div>
              
              {/* Zoho One text with brand colors */}
              <div className="flex items-center gap-0.5">
                <span className="text-lg md:text-xl font-bold">
                  <span style={{ color: '#E42527' }}>Z</span>
                  <span style={{ color: '#F7981D' }}>o</span>
                  <span style={{ color: '#4CAF50' }}>h</span>
                  <span style={{ color: '#00A1E0' }}>o</span>
                </span>
                <span className="text-lg md:text-xl font-bold text-gray-800 ml-1">One</span>
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 mt-0.5">Unified Business OS</span>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14 md:mt-20"
        >
          {[
            { value: "50+", label: "Integrated Apps" },
            { value: "100M+", label: "Users Worldwide" },
            { value: "1", label: "Unified Platform" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ZohoEcosystemSection;
