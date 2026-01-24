import { motion } from "framer-motion";
import { integrations } from "@/data/integrationsData";
import cctLogo from "@/assets/cct-logo.png";

interface IntegrationMarqueeProps {
  showMoreCount?: number;
}

export const IntegrationMarquee = ({ showMoreCount = 100 }: IntegrationMarqueeProps) => {
  // Split apps into two rows for variety
  const row1Apps = integrations.slice(0, Math.ceil(integrations.length / 2));
  const row2Apps = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <div className="relative w-full py-12">
      {/* Dark gradient background using design tokens */}
      <div className="absolute inset-0 bg-dark-gradient rounded-3xl overflow-hidden">
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-8">
        {/* Central Hub - ClubCode Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-2xl flex items-center justify-center">
              <img
                src={cctLogo}
                alt="ClubCode Technology"
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-white/40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Row 1 - Scrolling Left */}
        <div className="overflow-hidden mb-4">
          <div className="flex animate-marquee-left">
            {[...row1Apps, ...row1Apps].map((app, index) => (
              <div
                key={`row1-${app.id}-${index}`}
                className="flex-shrink-0 mx-2"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right">
            {[...row2Apps, ...row2Apps].map((app, index) => (
              <div
                key={`row2-${app.id}-${index}`}
                className="flex-shrink-0 mx-2"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <a
            href="#integrations"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Browse All Integrations
          </a>
        </motion.div>
      </div>
    </div>
  );
};
