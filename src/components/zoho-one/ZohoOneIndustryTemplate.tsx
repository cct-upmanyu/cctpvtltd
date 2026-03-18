import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, AlertTriangle, Lightbulb } from "lucide-react";
import zohoOneLogo from "@/assets/zoho-one-logo.png";
import type { ZohoOneIndustry } from "@/data/zohoOneIndustryData";

interface Props {
  industry: ZohoOneIndustry;
}

export default function ZohoOneIndustryTemplate({ industry }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0B1C3D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#4DA3FF]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-6">
              Zoho One Industry Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{industry.heroTitle}</h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">{industry.heroSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact?demo=true">Get a Custom Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Why {industry.name} Businesses Choose <span className="text-primary">Zoho One</span>
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              {industry.name} organizations face unique operational challenges that generic software can't solve. Zoho One provides 45+ integrated applications
              that work together seamlessly, giving {industry.name.toLowerCase()} businesses a unified platform to manage every aspect of their operations—from
              customer relationships and project management to finance and HR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges — Infographic Style */}
      <section className="bg-[#0B1C3D] section-padding overflow-hidden">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-red-400/30 bg-red-500/10 text-red-400 text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4 inline mr-1" /> Industry Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Key Challenges in {industry.name}
            </h2>
          </motion.div>

          {/* Infographic layout — central spine with branching cards */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/60 via-orange-400/40 to-red-500/60" />

            {industry.challenges.map((challenge, i) => {
              const isLeft = i % 2 === 0;
              const colors = [
                { border: "border-red-500/30", bg: "bg-red-500/10", dot: "bg-red-500", glow: "shadow-[0_0_12px_rgba(239,68,68,0.4)]", num: "text-red-400" },
                { border: "border-orange-500/30", bg: "bg-orange-500/10", dot: "bg-orange-500", glow: "shadow-[0_0_12px_rgba(249,115,22,0.4)]", num: "text-orange-400" },
                { border: "border-amber-500/30", bg: "bg-amber-500/10", dot: "bg-amber-500", glow: "shadow-[0_0_12px_rgba(245,158,11,0.4)]", num: "text-amber-400" },
                { border: "border-rose-500/30", bg: "bg-rose-500/10", dot: "bg-rose-500", glow: "shadow-[0_0_12px_rgba(244,63,94,0.4)]", num: "text-rose-400" },
              ];
              const c = colors[i % colors.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-center mb-8 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div className={`bg-white/[0.04] backdrop-blur-md rounded-2xl ${c.border} border p-6 max-w-md ${isLeft ? "md:ml-auto" : ""} hover:bg-white/[0.08] transition-all`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                          <span className={`font-bold text-lg ${c.num}`}>{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 className="font-bold text-white text-lg">{challenge.title}</h3>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${c.dot} ${c.glow} border-2 border-[#0B1C3D] z-10`} />

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zoho Solutions */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 inline mr-1" /> Zoho One Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              How Zoho One Solves It
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industry.zohoSolutions.map((solution, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{solution.title}</h3>
                <p className="text-[#374151] text-sm mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {solution.apps.map(app => (
                    <span key={app} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{app}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Recommended Zoho Apps for {industry.name}
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industry.recommendedApps.map(app => (
              <motion.span key={app} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="px-4 py-2 bg-[#0B1C3D] text-white text-sm font-medium rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3FE0F0]" />
                {app}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow — Horizontal Alternating Timeline */}
      {industry.workflow && (
        <section className="bg-[#0B1C3D] section-padding overflow-hidden">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
              <img src={zohoOneLogo} alt="Zoho One" className="h-10 mx-auto mb-4 object-contain" />
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-4">
                <Zap className="w-4 h-4 inline mr-1" /> Automated Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{industry.workflow.title}</h2>
              <p className="text-white/60 mt-3">See how Zoho One apps work together in a seamless flow</p>
            </motion.div>

            {/* Horizontal timeline — desktop */}
            <div className="hidden lg:block relative mt-16">
              {/* Horizontal track */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#3FE0F0]/20 via-[#3FE0F0]/60 to-[#3FE0F0]/20 -translate-y-1/2" />

              <div className="grid" style={{ gridTemplateColumns: `repeat(${industry.workflow.steps.length}, 1fr)` }}>
                {industry.workflow.steps.map((step, i) => {
                  const isUp = i % 2 === 0;
                  const stepColors = [
                    "from-[#E94235] to-[#FF6F61]",
                    "from-[#4285F4] to-[#6FA8FF]",
                    "from-[#34A853] to-[#5CDB7B]",
                    "from-[#FBBC05] to-[#FFD54F]",
                    "from-[#3FE0F0] to-[#4DA3FF]",
                    "from-[#A259FF] to-[#C77DFF]",
                  ];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: isUp ? -30 : 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className={`relative flex flex-col items-center ${isUp ? "pb-20" : "pt-20"}`}
                    >
                      {/* Connector dot on the track */}
                      <div className={`absolute ${isUp ? "bottom-0" : "top-0"} left-1/2 -translate-x-1/2`}>
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${stepColors[i % stepColors.length]} shadow-[0_0_12px_rgba(63,224,240,0.5)] border-2 border-[#0B1C3D]`} />
                        {/* Vertical connector line */}
                        <div className={`absolute left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#3FE0F0]/50 to-transparent ${isUp ? "bottom-full" : "top-full"}`} />
                      </div>

                      {/* Card */}
                      <div className={`bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl p-4 mx-1 hover:bg-white/[0.1] transition-all ${isUp ? "mb-4" : "mt-4"}`}>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stepColors[i % stepColors.length]} flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto`}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <p className="text-white/90 text-xs text-center leading-relaxed font-medium">{step}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile — vertical timeline */}
            <div className="lg:hidden mt-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3FE0F0]/60 via-[#3FE0F0]/30 to-[#3FE0F0]/60" />
              <div className="space-y-6">
                {industry.workflow.steps.map((step, i) => {
                  const stepColors = [
                    "from-[#E94235] to-[#FF6F61]",
                    "from-[#4285F4] to-[#6FA8FF]",
                    "from-[#34A853] to-[#5CDB7B]",
                    "from-[#FBBC05] to-[#FFD54F]",
                    "from-[#3FE0F0] to-[#4DA3FF]",
                    "from-[#A259FF] to-[#C77DFF]",
                  ];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative flex items-center gap-4 pl-12"
                    >
                      <div className={`absolute left-4 w-5 h-5 rounded-full bg-gradient-to-br ${stepColors[i % stepColors.length]} border-2 border-[#0B1C3D] shadow-[0_0_10px_rgba(63,224,240,0.4)]`} />
                      <div className="bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl p-4 flex-1">
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-bold bg-gradient-to-br ${stepColors[i % stepColors.length]} bg-clip-text text-transparent`}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="text-white/90 text-sm font-medium">{step}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#111827]">Explore Related Solutions</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Zoho CRM", to: "/zoho-crm" },
              { label: "Zoho Creator", to: "/zoho-creator" },
              { label: "Zoho Books", to: "/zoho-books" },
              { label: "Zoho Analytics", to: "/zoho-analytics" },
              { label: "Industries", to: "/industries" },
              { label: "Contact Us", to: "/contact" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="px-4 py-2 rounded-full border border-gray-200 text-[#374151] text-sm hover:border-primary hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your {industry.name} Operations?
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              Get a personalized Zoho One implementation plan tailored to your {industry.name.toLowerCase()} business. Our experts will map your workflows and recommend the perfect app stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact?demo=true">Get a Custom Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
