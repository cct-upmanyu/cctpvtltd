import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  logo: string;
  category: string;
  zohoApps: string[];
  index: number;
}

export function IntegrationCard({ name, logo, category, zohoApps, index }: IntegrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group bg-white rounded-2xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center cursor-pointer"
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <span className="text-xs text-muted-foreground mb-3">
        {category}
      </span>
      <div className="flex flex-wrap justify-center gap-1 mt-auto">
        {zohoApps.slice(0, 2).map((app) => (
          <span 
            key={app} 
            className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
          >
            {app}
          </span>
        ))}
        {zohoApps.length > 2 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-muted-foreground font-medium">
            +{zohoApps.length - 2}
          </span>
        )}
      </div>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-primary font-medium">
        View Integration <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}
