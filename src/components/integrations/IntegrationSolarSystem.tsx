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

// Zoho-compatible integration apps with logos
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
];

export function IntegrationSolarSystem({ 
  apps = defaultApps, 
  showMoreCount = 100 
}: IntegrationSolarSystemProps) {
  // Position apps in orbital rings
  const innerRing = apps.slice(0, 6);
  const middleRing = apps.slice(6, 14);
  const outerRing = apps.slice(14, 24);

  return (
    <TooltipProvider delayDuration={100}>
      <div className="relative w-full py-16">
        {/* Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,85%,55%)] via-[hsl(195,80%,50%)] to-[hsl(210,85%,45%)] rounded-3xl overflow-hidden">
          {/* Radial glow from center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[520px] md:min-h-[580px]">
          
          {/* Orbital Rings Container - This is the key: using CSS animations */}
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Inner Orbit Ring - Rotates clockwise */}
            <div 
              className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-white/30"
              style={{ animation: 'spin 30s linear infinite' }}
            >
              {innerRing.map((app, index) => {
                const angle = (index / innerRing.length) * 360;
                return (
                  <Tooltip key={app.id}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-12 h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${50 + 50 * Math.cos((angle - 90) * Math.PI / 180)}%`,
                          top: `${50 + 50 * Math.sin((angle - 90) * Math.PI / 180)}%`,
                          animation: 'counter-spin 30s linear infinite'
                        }}
                      >
                        <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"
                          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
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
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-foreground text-background font-semibold px-4 py-2 z-50">
                      {app.name}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* Middle Orbit Ring - Rotates counter-clockwise */}
            <div 
              className="absolute w-[440px] h-[440px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-white/25 hidden md:block"
              style={{ animation: 'counter-spin 45s linear infinite' }}
            >
              {middleRing.map((app, index) => {
                const angle = (index / middleRing.length) * 360;
                return (
                  <Tooltip key={app.id}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-11 h-11 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${50 + 50 * Math.cos((angle - 90) * Math.PI / 180)}%`,
                          top: `${50 + 50 * Math.sin((angle - 90) * Math.PI / 180)}%`,
                          animation: 'spin 45s linear infinite'
                        }}
                      >
                        <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"
                          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.18)' }}
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
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-foreground text-background font-semibold px-4 py-2 z-50">
                      {app.name}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>

            {/* Outer Orbit Ring - Rotates clockwise slowly */}
            <div 
              className="absolute w-[640px] h-[640px] md:w-[760px] md:h-[760px] rounded-full border border-dashed border-white/20 hidden lg:block"
              style={{ animation: 'spin 60s linear infinite' }}
            >
              {outerRing.map((app, index) => {
                const angle = (index / outerRing.length) * 360;
                return (
                  <Tooltip key={app.id}>
                    <TooltipTrigger asChild>
                      <div
                        className="absolute w-10 h-10 md:w-11 md:h-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{
                          left: `${50 + 50 * Math.cos((angle - 90) * Math.PI / 180)}%`,
                          top: `${50 + 50 * Math.sin((angle - 90) * Math.PI / 180)}%`,
                          animation: 'counter-spin 60s linear infinite'
                        }}
                      >
                        <div className="w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300"
                          style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}
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
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-foreground text-background font-semibold px-4 py-2 z-50">
                      {app.name}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>

          {/* Center Hub - ClubCode Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute z-20"
          >
            <div className="relative">
              {/* Shadow */}
              <div className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 bg-black/20 rounded-2xl transform translate-x-2 translate-y-3 blur-lg" />
              
              {/* Main logo container */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-4 ring-4 ring-white/40"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2)'
                }}
              >
                <img 
                  src={cctLogo} 
                  alt="ClubCode Technology" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Animated pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/40"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Data flow particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)',
                }}
                animate={{
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 150, Math.cos(i * 45 * Math.PI / 180) * 300],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 150, Math.sin(i * 45 * Math.PI / 180) * 300],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* More Apps Badge */}
        <div className="relative z-10 flex justify-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm text-[hsl(200,85%,40%)] font-bold px-6 py-3 rounded-full shadow-lg"
          >
            {showMoreCount}+ More Apps
          </motion.div>
        </div>

        {/* CSS Keyframes for rotation */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes counter-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </div>
    </TooltipProvider>
  );
}
