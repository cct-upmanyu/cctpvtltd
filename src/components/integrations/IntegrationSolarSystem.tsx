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
  color: string;
}

interface IntegrationSolarSystemProps {
  apps?: IntegrationApp[];
  showMoreCount?: number;
}

// Zoho-compatible integration apps with 3D-style logos from logo.dev
const defaultApps: IntegrationApp[] = [
  // Inner ring - CRM & Sales platforms
  { id: "hubspot", name: "HubSpot", logo: "https://img.logo.dev/hubspot.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#ff7a59" },
  { id: "salesforce", name: "Salesforce", logo: "https://img.logo.dev/salesforce.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#00a1e0" },
  { id: "pipedrive", name: "Pipedrive", logo: "https://img.logo.dev/pipedrive.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#25292c" },
  { id: "mailchimp", name: "Mailchimp", logo: "https://img.logo.dev/mailchimp.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#ffe01b" },
  { id: "freshsales", name: "Freshsales", logo: "https://img.logo.dev/freshsales.io?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#f26322" },
  { id: "monday", name: "Monday.com", logo: "https://img.logo.dev/monday.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#ff3d57" },
  // Middle ring - Business & Communication tools
  { id: "google-sheets", name: "Google Sheets", logo: "https://img.logo.dev/sheets.google.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#0f9d58" },
  { id: "slack", name: "Slack", logo: "https://img.logo.dev/slack.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#4a154b" },
  { id: "quickbooks", name: "QuickBooks", logo: "https://img.logo.dev/quickbooks.intuit.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#2ca01c" },
  { id: "xero", name: "Xero", logo: "https://img.logo.dev/xero.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#13b5ea" },
  { id: "shopify", name: "Shopify", logo: "https://img.logo.dev/shopify.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#96bf48" },
  { id: "stripe", name: "Stripe", logo: "https://img.logo.dev/stripe.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#635bff" },
  { id: "paypal", name: "PayPal", logo: "https://img.logo.dev/paypal.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#003087" },
  { id: "microsoft", name: "Microsoft 365", logo: "https://img.logo.dev/microsoft.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#00a4ef" },
  // Outer ring - Extended ecosystem
  { id: "google", name: "Google Workspace", logo: "https://img.logo.dev/google.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#4285f4" },
  { id: "zendesk", name: "Zendesk", logo: "https://img.logo.dev/zendesk.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#03363d" },
  { id: "woocommerce", name: "WooCommerce", logo: "https://img.logo.dev/woocommerce.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#96588a" },
  { id: "twilio", name: "Twilio", logo: "https://img.logo.dev/twilio.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#f22f46" },
  { id: "trello", name: "Trello", logo: "https://img.logo.dev/trello.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#0079bf" },
  { id: "asana", name: "Asana", logo: "https://img.logo.dev/asana.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#f06a6a" },
  { id: "dropbox", name: "Dropbox", logo: "https://img.logo.dev/dropbox.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#0061ff" },
  { id: "intercom", name: "Intercom", logo: "https://img.logo.dev/intercom.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#1f8ded" },
  { id: "notion", name: "Notion", logo: "https://img.logo.dev/notion.so?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#000000" },
  { id: "airtable", name: "Airtable", logo: "https://img.logo.dev/airtable.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#18bfff" },
  { id: "zapier", name: "Zapier", logo: "https://img.logo.dev/zapier.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#ff4a00" },
  { id: "jira", name: "Jira", logo: "https://img.logo.dev/jira.atlassian.com?token=pk_VAZ6tvAVQHCDwKeaNRVyjQ", color: "#0052cc" },
];

export function IntegrationSolarSystem({ 
  apps = defaultApps, 
  showMoreCount = 100 
}: IntegrationSolarSystemProps) {
  // Position apps in orbital rings
  const innerRing = apps.slice(0, 6);
  const middleRing = apps.slice(6, 14);
  const outerRing = apps.slice(14, 26);

  return (
    <TooltipProvider delayDuration={100}>
      <div className="relative w-full py-16">
        {/* Blue gradient background with transparency for 3D depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,85%,55%)] via-[hsl(195,80%,50%)] to-[hsl(210,85%,45%)] rounded-3xl overflow-hidden">
          {/* Radial glow from center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
          
          {/* Subtle orbital lines with glow */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="orbitalGlow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <ellipse cx="400" cy="250" rx="110" ry="70" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" filter="url(#orbitalGlow)" />
            <ellipse cx="400" cy="250" rx="200" ry="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="8 8" filter="url(#orbitalGlow)" />
            <ellipse cx="400" cy="250" rx="310" ry="180" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="10 10" filter="url(#orbitalGlow)" />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[520px] md:min-h-[580px]">
          
          {/* Animated Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              <filter id="dataGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated flow particles from inner ring */}
            {innerRing.map((app, index) => {
              const angle = (index / innerRing.length) * 360 - 30;
              const radius = 120;
              const endX = Math.cos((angle * Math.PI) / 180) * radius;
              const endY = Math.sin((angle * Math.PI) / 180) * (radius * 0.7);
              
              return (
                <g key={`flow-inner-${app.id}`}>
                  {/* Connection line */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${endX}px)`}
                    y2={`calc(50% + ${endY}px)`}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Glowing data particle */}
                  <motion.circle
                    r="5"
                    fill="white"
                    filter="url(#dataGlow)"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      cx: [`calc(50% + ${endX * 0.15}px)`, `calc(50% + ${endX * 0.85}px)`],
                      cy: [`calc(50% + ${endY * 0.15}px)`, `calc(50% + ${endY * 0.85}px)`],
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}

            {/* Animated flow particles from middle ring */}
            {middleRing.map((app, index) => {
              const angle = (index / middleRing.length) * 360 + 22.5;
              const radius = 220;
              const endX = Math.cos((angle * Math.PI) / 180) * radius;
              const endY = Math.sin((angle * Math.PI) / 180) * (radius * 0.6);
              
              return (
                <g key={`flow-middle-${app.id}`} className="hidden md:block">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${endX}px)`}
                    y2={`calc(50% + ${endY}px)`}
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    className="hidden md:block"
                  />
                  <motion.circle
                    r="4"
                    fill="white"
                    filter="url(#dataGlow)"
                    className="hidden md:block"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.9, 0.9, 0],
                      cx: [`calc(50% + ${endX * 0.1}px)`, `calc(50% + ${endX * 0.9}px)`],
                      cy: [`calc(50% + ${endY * 0.1}px)`, `calc(50% + ${endY * 0.9}px)`],
                    }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.35 + 0.5,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub - ClubCode Logo with 3D effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute z-20"
          >
            <div className="relative">
              {/* 3D shadow layers */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 bg-black/20 rounded-2xl transform translate-x-2 translate-y-3 blur-lg" />
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-2xl transform -translate-x-0.5 -translate-y-0.5" />
              
              {/* Main logo container with 3D gradient */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-white via-white to-gray-100 rounded-2xl shadow-2xl flex items-center justify-center p-4 ring-4 ring-white/40"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                <img 
                  src={cctLogo} 
                  alt="ClubCode Technology" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              
              {/* Animated pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Inner Ring - 3D App Logos */}
          {innerRing.map((app, index) => {
            const angle = (index / innerRing.length) * 360 - 30;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.7);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
                className="absolute z-10"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative group cursor-pointer"
                    >
                      {/* 3D shadow */}
                      <div className="absolute inset-0 w-16 h-16 md:w-18 md:h-18 bg-black/25 rounded-2xl transform translate-x-1 translate-y-2 blur-md group-hover:translate-y-3 transition-transform" />
                      
                      {/* Logo container with 3D styling */}
                      <div 
                        className="relative w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-all duration-300"
                        style={{
                          boxShadow: `0 12px 24px -8px rgba(0,0,0,0.3), 0 4px 8px -2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.3)`
                        }}
                      >
                        <img 
                          src={app.logo} 
                          alt={app.name}
                          className="w-full h-full object-contain drop-shadow-sm"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=${app.color.replace('#', '')}&color=fff&size=128&bold=true`;
                          }}
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-semibold px-4 py-2">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* Middle Ring - 3D App Logos */}
          {middleRing.map((app, index) => {
            const angle = (index / middleRing.length) * 360 + 22.5;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.6);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                className="absolute hidden md:block z-10"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative group cursor-pointer"
                    >
                      {/* 3D shadow */}
                      <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 bg-black/20 rounded-xl transform translate-x-1 translate-y-2 blur-md group-hover:translate-y-3 transition-transform" />
                      
                      {/* Logo container */}
                      <div 
                        className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white via-white to-gray-50 rounded-xl flex items-center justify-center p-2.5 group-hover:scale-110 transition-all duration-300"
                        style={{
                          boxShadow: `0 10px 20px -6px rgba(0,0,0,0.25), 0 3px 6px -2px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9)`
                        }}
                      >
                        <img 
                          src={app.logo} 
                          alt={app.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=${app.color.replace('#', '')}&color=fff&size=128&bold=true`;
                          }}
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-semibold px-4 py-2">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* Outer Ring - 3D App Logos */}
          {outerRing.map((app, index) => {
            const angle = (index / outerRing.length) * 360 + 15;
            const radius = 340;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.5);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
                className="absolute hidden lg:block z-10"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 5 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
                      className="relative group cursor-pointer"
                    >
                      {/* 3D shadow */}
                      <div className="absolute inset-0 w-12 h-12 bg-black/15 rounded-lg transform translate-x-0.5 translate-y-1.5 blur-sm group-hover:translate-y-2 transition-transform" />
                      
                      {/* Logo container */}
                      <div 
                        className="relative w-12 h-12 bg-gradient-to-br from-white via-white to-gray-100 rounded-lg flex items-center justify-center p-2 group-hover:scale-110 transition-all duration-300"
                        style={{
                          boxShadow: `0 8px 16px -4px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)`
                        }}
                      >
                        <img 
                          src={app.logo} 
                          alt={app.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=${app.color.replace('#', '')}&color=fff&size=96&bold=true`;
                          }}
                        />
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-foreground text-background font-semibold px-3 py-1.5">
                    {app.name}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            );
          })}

          {/* "100+ More Apps" Badge with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-6 md:bottom-10"
          >
            <div 
              className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-full px-8 py-3 shadow-xl"
              style={{
                boxShadow: '0 15px 30px -10px rgba(0,0,0,0.3), 0 5px 10px -3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)'
              }}
            >
              <span className="text-base md:text-lg font-bold bg-gradient-to-r from-[hsl(200,85%,45%)] to-[hsl(210,85%,35%)] bg-clip-text text-transparent">
                {showMoreCount}+ More Apps
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  );
}