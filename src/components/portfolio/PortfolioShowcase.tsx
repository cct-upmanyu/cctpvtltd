import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioShowcaseProps {
  title?: string;
  subtitle?: string;
  items: PortfolioItem[];
  showViewAll?: boolean;
}

export const PortfolioShowcase = ({
  title = "Our Recent Work",
  subtitle = "See how we've helped businesses transform their digital presence",
  items,
  showViewAll = true,
}: PortfolioShowcaseProps) => {
  return (
    <section className="bg-light-gradient section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            {title}
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#3FE0F0]/30 hover-lift transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0B1C3D] to-[#0F2A5F]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">{item.image}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3D]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 rounded-full bg-[#3FE0F0]/20 text-[#3FE0F0] text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#3FE0F0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#374151] text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-[#F5F7FB] text-[#374151] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="heroPrimary" size="lg">
              <Link to="/contact">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
