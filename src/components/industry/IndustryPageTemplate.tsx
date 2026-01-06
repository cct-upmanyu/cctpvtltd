import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import zohoOneLogo from "@/assets/zoho-one-logo.png";

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  zohoApps: string[];
}

interface UseCase {
  title: string;
  description: string;
}

interface BuiltSolution {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  screenshots?: string[]; // Array of image paths for actual app screenshots
}

interface IndustryPageProps {
  industry: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  solutions: Solution[];
  useCases: UseCase[];
  benefits: string[];
  zohoAppsUsed: string[];
  builtSolutions?: BuiltSolution[];
}

// Function to generate built solutions from the solutions prop
const generateBuiltSolutionsFromSolutions = (solutions: Solution[]): BuiltSolution[] => {
  return solutions.slice(0, 3).map((sol) => ({
    icon: sol.icon,
    title: sol.title,
    tagline: `${sol.title} — simplified and streamlined for your business`,
    description: sol.description,
    features: sol.zohoApps.slice(0, 4),
  }));
};

export function IndustryPageTemplate({
  industry,
  tagline,
  heroDescription,
  heroImage,
  solutions,
  useCases,
  benefits,
  zohoAppsUsed,
  builtSolutions,
}: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - DARK */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={industry} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/95 via-[#0B1C3D]/85 to-[#0B1C3D]/70" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              {industry} Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {tagline}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
              {heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/zoho-solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Powered By Section - LIGHT */}
      <section className="bg-light-gradient py-12 border-b border-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
          >
            <span className="text-[#374151] font-medium">Powered By:</span>
            <div className="flex items-center gap-8">
              <img src={zohoOneLogo} alt="Zoho One" className="h-10 md:h-12 object-contain" />
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <rect x="5" y="5" width="30" height="30" rx="6" fill="#F0483E"/>
                  <path d="M12 20h16M20 12v16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <span className="font-semibold text-[#111827]">Zoho Creator</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid - DARK */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
              Core Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for {industry}
            </h2>
            <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
              Comprehensive solutions leveraging Zoho One ecosystem tailored for your industry needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0B1C3D]/80 border border-[#3FE0F0]/20 rounded-2xl p-6 hover:border-[#3FE0F0]/40 hover-lift transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3FE0F0]/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#3FE0F0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-[#E5E7EB] mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.zohoApps.map((app) => (
                      <span
                        key={app}
                        className="px-2 py-1 text-xs bg-[#3FE0F0]/10 text-[#3FE0F0] rounded-full border border-[#3FE0F0]/20"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases - LIGHT */}
      <section className="bg-light-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
              What You Can Build
            </h2>
            <p className="text-[#374151] text-lg max-w-2xl mx-auto">
              Custom applications built on Zoho Creator for your specific {industry.toLowerCase()} operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">{useCase.title}</h3>
                    <p className="text-[#374151]">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions We've Built - DARK - Zoho Style Showcase */}
      <section className="bg-[#0B1C3D] section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#3FE0F0]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Solutions We've Built So Far
            </h2>
            <p className="text-[#E5E7EB] text-lg max-w-2xl mx-auto">
              Explore the custom {industry.toLowerCase()} solutions we've delivered for our clients.
            </p>
          </motion.div>

          {/* Zoho-style Solution Showcase Cards - Using solutions from "Built for" section */}
          <div className="space-y-8 mb-16">
            {(builtSolutions || generateBuiltSolutionsFromSolutions(solutions)).map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#0F2A5F]/80 to-[#0B1C3D]/90 border border-[#3FE0F0]/20 rounded-3xl overflow-hidden hover:border-[#3FE0F0]/40 transition-all duration-300"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-10 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3FE0F0]/20 to-[#4DA3FF]/20 flex items-center justify-center border border-[#3FE0F0]/30">
                          <Icon className="w-6 h-6 text-[#3FE0F0]" />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-white">{solution.title}</h3>
                          <p className="text-[#3FE0F0] text-sm font-medium">by ClubCode Technology</p>
                        </div>
                      </div>
                      
                      <p className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                        {solution.tagline}
                      </p>
                      
                      <p className="text-[#E5E7EB] mb-6">
                        {solution.description}
                      </p>
                      
                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {solution.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm rounded-full border border-[#3FE0F0]/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="heroPrimary" size="lg" asChild>
                        <Link to="/contact">
                          Request Demo
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Visual/Preview Side - Multiple App Screenshots */}
                    <div className={`relative p-6 lg:p-8 flex items-center justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <div className="relative w-full">
                        {/* Multiple App Screenshot Previews */}
                        <div className="flex gap-4 overflow-hidden justify-center">
                          {solution.screenshots && solution.screenshots.length > 0 ? (
                            solution.screenshots.slice(0, 3).map((screenshot, screenIdx) => (
                              <motion.div
                                key={screenIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + screenIdx * 0.1 }}
                                className={`flex-shrink-0 w-48 md:w-56 lg:w-64 ${screenIdx === 0 ? '' : screenIdx === 1 ? 'hidden md:block' : 'hidden lg:block'}`}
                                style={{ transform: `translateY(${screenIdx * 12}px)` }}
                              >
                                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                                  {/* Screen Header */}
                                  <div className="bg-[#0B1C3D] px-3 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                      <Icon className="w-3 h-3 text-[#3FE0F0]" />
                                      <span className="text-white text-xs font-medium">{solution.title}</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    </div>
                                  </div>
                                  
                                  {/* Actual Screenshot */}
                                  <div className="aspect-[4/3] overflow-hidden">
                                    <img 
                                      src={screenshot} 
                                      alt={`${solution.title} - Screen ${screenIdx + 1}`}
                                      className="w-full h-full object-cover object-top"
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            ))
                          ) : (
                            /* Fallback placeholder screens for solutions without screenshots */
                            ['Dashboard', 'Analytics', 'Reports'].map((screenTitle, screenIdx) => (
                              <motion.div
                                key={screenIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + screenIdx * 0.1 }}
                                className={`flex-shrink-0 w-48 md:w-56 ${screenIdx === 0 ? '' : screenIdx === 1 ? 'hidden md:block' : 'hidden lg:block'}`}
                                style={{ transform: `translateY(${screenIdx * 8}px)` }}
                              >
                                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                                  <div className="bg-[#0B1C3D] px-3 py-2 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                      <Icon className="w-3 h-3 text-[#3FE0F0]" />
                                      <span className="text-white text-xs font-medium">{screenTitle}</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                    </div>
                                  </div>
                                  <div className="p-3 bg-gray-50 space-y-2">
                                    <div className="bg-white p-2 rounded-lg border border-gray-100">
                                      <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
                                      <div className="h-5 w-10 bg-[#3FE0F0]/30 rounded" />
                                    </div>
                                    <div className="bg-white p-2 rounded-lg border border-gray-100">
                                      <div className="flex items-end gap-1 h-8">
                                        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                                          <div 
                                            key={i} 
                                            className="flex-1 bg-gradient-to-t from-[#3FE0F0] to-[#4DA3FF] rounded-t"
                                            style={{ height: `${h}%` }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))
                          )}
                        </div>
                        
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#3FE0F0]/10 to-[#4DA3FF]/10 rounded-2xl -z-10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Idea CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#3FE0F0]/10 to-[#4DA3FF]/10 border border-[#3FE0F0]/30 rounded-2xl p-8 md:p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Do You Have an Idea in Mind?
            </h3>
            <p className="text-[#E5E7EB] text-lg mb-6 max-w-xl mx-auto">
              Share your vision with us. We'll help you build a custom solution tailored to your {industry.toLowerCase()} business needs.
            </p>
            <Button variant="heroPrimary" size="xl" asChild>
              <Link to="/contact">
                Let's Discuss Your Idea
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits - LIGHT */}
      <section className="bg-light-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Benefits of Our {industry} Solutions
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[#374151]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-6">Zoho Apps We Leverage</h3>
              <div className="flex flex-wrap gap-3">
                {zohoAppsUsed.map((app) => (
                  <span
                    key={app}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
