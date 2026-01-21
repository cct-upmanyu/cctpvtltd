import { motion } from "framer-motion";
import cctLogo from "@/assets/cct-logo.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IntegrationApp {
  id: string;
  name: string;
  logo: string;
}

interface IntegrationSolarSystemProps {
  apps?: IntegrationApp[];
  showMoreCount?: number;
}

// Zoho-compatible integration apps using reliable logo sources
const defaultApps: IntegrationApp[] = [
  // Inner ring - CRM & Sales platforms that integrate with Zoho
  { id: "hubspot", name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
  { id: "salesforce", name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0" },
  { id: "pipedrive", name: "Pipedrive", logo: "https://cdn.simpleicons.org/pipedrive/25292C" },
  { id: "mailchimp", name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
  // Middle ring - Business & Communication tools
  { id: "google-sheets", name: "Google Sheets", logo: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { id: "slack", name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { id: "quickbooks", name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C" },
  { id: "xero", name: "Xero", logo: "https://cdn.simpleicons.org/xero/13B5EA" },
  { id: "shopify", name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
  { id: "stripe", name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { id: "paypal", name: "PayPal", logo: "https://cdn.simpleicons.org/paypal/003087" },
  { id: "microsoft", name: "Microsoft 365", logo: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
  // Outer ring - Extended ecosystem
  { id: "google", name: "Google Workspace", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { id: "zendesk", name: "Zendesk", logo: "https://cdn.simpleicons.org/zendesk/03363D" },
  { id: "woocommerce", name: "WooCommerce", logo: "https://cdn.simpleicons.org/woocommerce/96588A" },
  { id: "twilio", name: "Twilio", logo: "https://cdn.simpleicons.org/twilio/F22F46" },
  { id: "trello", name: "Trello", logo: "https://cdn.simpleicons.org/trello/0052CC" },
  { id: "asana", name: "Asana", logo: "https://cdn.simpleicons.org/asana/F06A6A" },
  { id: "dropbox", name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox/0061FF" },
  { id: "whatsapp", name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
];

export function IntegrationSolarSystem({ 
  apps = defaultApps, 
  showMoreCount = 100 
}: IntegrationSolarSystemProps) {
  // Position apps in orbital rings
  const innerRing = apps.slice(0, 4);
  const outerRing = apps.slice(4, 12);
  const thirdRing = apps.slice(12, 20);

  // Calculate positions for connection lines
  const getInnerPosition = (index: number) => {
    const angle = (index / 4) * 360 - 45;
    const radius = 140;
    return {
      x: Math.cos((angle * Math.PI) / 180) * radius,
      y: Math.sin((angle * Math.PI) / 180) * (radius * 0.7),
    };
  };

  const getOuterPosition = (index: number) => {
    const angle = (index / 8) * 360 + 22.5;
    const radius = 260;
    return {
      x: Math.cos((angle * Math.PI) / 180) * radius,
      y: Math.sin((angle * Math.PI) / 180) * (radius * 0.65),
    };
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div className="relative w-full py-16">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,85%,50%)] via-[hsl(200,80%,45%)] to-[hsl(210,90%,40%)] rounded-3xl overflow-hidden">
          {/* Subtle orbital lines */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="400" cy="250" rx="120" ry="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="400" cy="250" rx="220" ry="140" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="400" cy="250" rx="340" ry="200" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[500px] md:min-h-[550px]">
          
          {/* Animated Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection lines to inner ring */}
            {innerRing.map((_, index) => {
              const pos = getInnerPosition(index);
              return (
                <g key={`inner-line-${index}`}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${pos.x}px)`}
                    y2={`calc(50% + ${pos.y}px)`}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                  />
                  {/* Animated data dot */}
                  <motion.circle
                    r="4"
                    fill="white"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      cx: [`calc(50% + ${pos.x * 0.1}px)`, `calc(50% + ${pos.x * 0.9}px)`],
                      cy: [`calc(50% + ${pos.y * 0.1}px)`, `calc(50% + ${pos.y * 0.9}px)`],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}

            {/* Connection lines to outer ring */}
            {outerRing.map((_, index) => {
              const pos = getOuterPosition(index);
              return (
                <g key={`outer-line-${index}`} className="hidden md:block">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${pos.x}px)`}
                    y2={`calc(50% + ${pos.y}px)`}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    className="hidden md:block"
                  />
                  {/* Animated data dot */}
                  <motion.circle
                    r="3"
                    fill="white"
                    filter="url(#glow)"
                    className="hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0.8, 0],
                      cx: [`calc(50% + ${pos.x * 0.15}px)`, `calc(50% + ${pos.x * 0.85}px)`],
                      cy: [`calc(50% + ${pos.y * 0.15}px)`, `calc(50% + ${pos.y * 0.85}px)`],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.4 + 0.2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub - ClubCode Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute z-20"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-3 ring-4 ring-white/30">
              <img 
                src={cctLogo} 
                alt="ClubCode Technology" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Inner Ring Apps */}
          {innerRing.map((app, index) => {
            const angle = (index / innerRing.length) * 360 - 45;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.7);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="absolute z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer ring-2 ring-white/40"
                    >
                      <img 
                        src={app.logo} 
                        alt={app.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=0D8ABC&color=fff&size=64`;
                        }}
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-medium">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* Outer Ring Apps */}
          {outerRing.map((app, index) => {
            const angle = (index / outerRing.length) * 360 + 22.5;
            const radius = 260;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.65);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                className="absolute hidden md:block z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center p-2 hover:scale-110 transition-transform cursor-pointer ring-2 ring-white/30"
                    >
                      <img 
                        src={app.logo} 
                        alt={app.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=0D8ABC&color=fff&size=64`;
                        }}
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-medium">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* Third Ring Apps - even more distant */}
          {thirdRing.map((app, index) => {
            const angle = (index / thirdRing.length) * 360 + 10;
            const radius = 380;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.55);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.06, duration: 0.4 }}
                className="absolute hidden lg:block z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-md flex items-center justify-center p-1.5 hover:scale-110 transition-transform cursor-pointer ring-1 ring-white/20"
                    >
                      <img 
                        src={app.logo} 
                        alt={app.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=0D8ABC&color=fff&size=64`;
                        }}
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-medium">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* "100+ More Apps" Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute bottom-4 md:bottom-8"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-2.5 shadow-lg border border-white/50">
              <span className="text-sm md:text-base font-semibold text-[hsl(210,85%,40%)]">
                {showMoreCount}+ More Apps
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  );
}