import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, XCircle, MinusCircle,
  Zap, Brain, BarChart3, Settings, Users, Building2,
  Rocket, TrendingUp, Shield, Headphones, Database,
  BookOpen, Target, ArrowRightLeft, Star, Award,
  ChevronDown, ChevronUp, Globe, Layers, DollarSign,
} from "lucide-react";
import { CRMComparisonData, comparisonLinks } from "@/data/crmComparisonData";
import { useState } from "react";

const ratingIcon = (rating: string) => {
  switch (rating) {
    case "excellent": return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    case "good": return <MinusCircle className="w-5 h-5 text-amber-400" />;
    case "basic": return <MinusCircle className="w-5 h-5 text-orange-400" />;
    case "limited": return <XCircle className="w-5 h-5 text-red-400" />;
    default: return null;
  }
};

const ratingLabel = (rating: string) => {
  switch (rating) {
    case "excellent": return "Excellent";
    case "good": return "Good";
    case "basic": return "Basic";
    case "limited": return "Limited";
    default: return "";
  }
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-[#111827] pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#3FE0F0] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#374151] flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-[#374151] leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export function CRMComparisonTemplate({ data }: { data: CRMComparisonData }) {
  const otherComparisons = comparisonLinks.filter((c) => c.slug !== data.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://cctpvtltd.lovable.app/compare/${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      {/* 1. Hero Section */}
      <section className="bg-dark-gradient section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#4DA3FF]/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-6">CRM Comparison</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-4">
                Zoho CRM vs {data.competitor}
              </h1>
              <p className="text-lg text-[#3FE0F0] font-medium mb-4">Complete Feature, Pricing & Migration Comparison</p>
              <p className="text-lg text-[#E5E7EB] mb-8 leading-relaxed">{data.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="heroDark" size="lg" asChild>
                  <Link to="/data-migration">Start CRM Migration <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="heroSecondary" size="lg" asChild>
                  <Link to="/contact">Talk to Zoho Expert</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Feature Comparison", color: "#3FE0F0" },
                { icon: DollarSign, label: "Pricing Analysis", color: "#10B981" },
                { icon: Brain, label: "AI & Automation", color: "#4DA3FF" },
                { icon: ArrowRightLeft, label: "Migration Guide", color: "#8B5CF6" },
              ].map((item, i) => (
                <div key={item.label} className="p-5 bg-[#0B1C3D]/60 backdrop-blur-sm rounded-2xl border border-[#3FE0F0]/20 text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: item.color }} />
                  <p className="text-sm text-[#E5E7EB] font-medium">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Platform Overview */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Platform Overview
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zoho */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-[#3FE0F0]/30 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center"><Star className="w-5 h-5 text-[#3FE0F0]" /></div>
                <h3 className="text-2xl font-bold text-[#111827]">Zoho CRM</h3>
                <span className="px-2 py-0.5 bg-[#3FE0F0]/20 text-[#00A0B0] text-xs font-bold rounded-full">Recommended</span>
              </div>
              <p className="text-[#374151] mb-6 leading-relaxed">{data.zohoOverview}</p>
              <div className="space-y-2">
                {data.zohoStrengths.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#3FE0F0] flex-shrink-0" /><span className="text-[#374151]">{s}</span></div>
                ))}
              </div>
            </motion.div>
            {/* Competitor */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center"><Database className="w-5 h-5 text-[#374151]" /></div>
                <h3 className="text-2xl font-bold text-[#111827]">{data.competitor}</h3>
              </div>
              <p className="text-[#374151] mb-6 leading-relaxed">{data.competitorOverview}</p>
              <div className="space-y-2">
                {data.competitorStrengths.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#374151] flex-shrink-0" /><span className="text-[#374151]">{s}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Feature Comparison Table */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3FE0F0]/3 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
            Feature-by-Feature Comparison
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 px-4">
              <div className="text-sm font-semibold text-[#E5E7EB]">Feature</div>
              <div className="text-sm font-semibold text-[#3FE0F0] text-center">Zoho CRM</div>
              <div className="text-sm font-semibold text-[#E5E7EB] text-center">{data.competitorShort}</div>
            </div>
            {data.features.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#0B1C3D]/60 border border-[#3FE0F0]/10 mb-2"
              >
                <div className="text-[#FFFFFF] font-medium text-sm">{feature.name}</div>
                <div className="flex items-center justify-center gap-2">{ratingIcon(feature.zoho)}<span className="text-xs text-[#E5E7EB] hidden sm:inline">{ratingLabel(feature.zoho)}</span></div>
                <div className="flex items-center justify-center gap-2">{ratingIcon(feature.competitor)}<span className="text-xs text-[#E5E7EB] hidden sm:inline">{ratingLabel(feature.competitor)}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Comparison */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            Pricing Comparison
          </motion.h2>
          <p className="text-[#374151] text-center text-lg mb-12 max-w-2xl mx-auto">{data.pricing.tcoNote}</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Entry Level", zoho: data.pricing.entry.zoho, comp: data.pricing.entry.competitor },
              { label: "Professional", zoho: data.pricing.professional.zoho, comp: data.pricing.professional.competitor },
              { label: "Enterprise", zoho: data.pricing.enterprise.zoho, comp: data.pricing.enterprise.competitor },
            ].map((tier, i) => (
              <motion.div key={tier.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
                <h3 className="font-bold text-[#111827] mb-6">{tier.label}</h3>
                <div className="mb-4">
                  <p className="text-xs text-[#374151] mb-1">Zoho CRM</p>
                  <p className="text-2xl font-bold text-[#3FE0F0]">{tier.zoho}</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-[#374151] mb-1">{data.competitorShort}</p>
                  <p className="text-2xl font-bold text-[#374151]">{tier.comp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Automation & AI */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#4DA3FF]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
            Automation & AI Comparison
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0B1C3D]/80 rounded-2xl p-8 border border-[#3FE0F0]/20">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-[#3FE0F0]" />
                <h3 className="text-xl font-bold text-[#FFFFFF]">Zoho CRM</h3>
              </div>
              <div className="space-y-3">
                {data.zohoAutomation.map((item) => (
                  <div key={item} className="flex items-start gap-3"><Zap className="w-4 h-4 text-[#3FE0F0] mt-0.5 flex-shrink-0" /><span className="text-[#E5E7EB] text-sm">{item}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0B1C3D]/80 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-[#E5E7EB]" />
                <h3 className="text-xl font-bold text-[#FFFFFF]">{data.competitorShort}</h3>
              </div>
              <div className="space-y-3">
                {data.competitorAutomation.map((item) => (
                  <div key={item} className="flex items-start gap-3"><Zap className="w-4 h-4 text-[#E5E7EB]/60 mt-0.5 flex-shrink-0" /><span className="text-[#E5E7EB] text-sm">{item}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Zoho Ecosystem */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            The Zoho Ecosystem Advantage
          </motion.h2>
          <p className="text-[#374151] text-center text-lg mb-12 max-w-2xl mx-auto">
            Unlike {data.competitorShort}, Zoho CRM natively integrates with 45+ business applications — all under one login.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Zoho Books", desc: "Accounting", icon: BookOpen },
              { name: "Zoho Desk", desc: "Support", icon: Headphones },
              { name: "Zoho Campaigns", desc: "Marketing", icon: Globe },
              { name: "Zoho Analytics", desc: "BI & Reports", icon: BarChart3 },
              { name: "Zoho Creator", desc: "Custom Apps", icon: Layers },
            ].map((app, i) => (
              <motion.div key={app.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 border border-gray-200 text-center hover:border-[#3FE0F0]/30 transition-colors">
                <app.icon className="w-8 h-8 mx-auto mb-2 text-[#3FE0F0]" />
                <p className="font-semibold text-[#111827] text-sm">{app.name}</p>
                <p className="text-xs text-[#374151]">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Best For Different Businesses */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
            Which CRM Is Best For Your Business?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, label: "Startups", text: data.bestFor.startups },
              { icon: Building2, label: "Small Businesses", text: data.bestFor.smallBiz },
              { icon: TrendingUp, label: "Growing Companies", text: data.bestFor.growing },
              { icon: Globe, label: "Enterprises", text: data.bestFor.enterprise },
            ].map((card, i) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#0B1C3D]/80 rounded-2xl p-6 border border-[#3FE0F0]/20">
                <card.icon className="w-8 h-8 text-[#3FE0F0] mb-4" />
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">{card.label}</h3>
                <p className="text-sm text-[#E5E7EB] leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Migration Section */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            Migrating from {data.competitor} to Zoho CRM
          </motion.h2>
          <p className="text-[#374151] text-center text-lg mb-12 max-w-2xl mx-auto">
            Our structured migration process ensures zero data loss and minimal business disruption.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {data.migrationSteps.map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                <span className="w-7 h-7 rounded-lg bg-[#3FE0F0]/10 flex items-center justify-center text-[#3FE0F0] text-xs font-bold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm text-[#374151]">{step}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="heroLight" size="lg" asChild>
              <Link to="/data-migration">Start Your CRM Migration <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Why Businesses Choose Zoho CRM */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
            Why Businesses Choose Zoho CRM
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, title: "Lower Cost of Ownership" },
              { icon: Zap, title: "Faster Implementation" },
              { icon: Settings, title: "Advanced Automation" },
              { icon: Layers, title: "Deep Customization" },
              { icon: Globe, title: "Zoho One Ecosystem" },
              { icon: Brain, title: "AI-Powered Insights" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-[#0B1C3D]/80 rounded-xl p-5 border border-[#3FE0F0]/20">
                <item.icon className="w-8 h-8 text-[#3FE0F0] flex-shrink-0" />
                <span className="text-[#FFFFFF] font-semibold">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ClubCode Technology Section */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-bold rounded-full mb-4">Global Zoho Premium Partner</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">Club Code Technology</h2>
            <p className="text-[#374151] text-lg mb-8 leading-relaxed">
              As a Global Zoho Premium Partner, Club Code Technology brings deep expertise in CRM implementation, CRM migration, 
              workflow automation, and Zoho ecosystem integration. We've helped hundreds of businesses transition to Zoho CRM 
              with 100% data integrity and zero business disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroLight" size="lg" asChild>
                <Link to="/contact">Book Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/data-migration">Request CRM Migration</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#FFFFFF] text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {data.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl overflow-hidden">
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Related Comparisons */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            Compare Zoho CRM With Other Platforms
          </motion.h2>
          <p className="text-[#374151] text-center text-lg mb-12">Explore more CRM comparisons to find the right fit for your business.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {otherComparisons.map((comp, i) => (
              <motion.div key={comp.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={comp.path} className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-[#3FE0F0]/40 hover:shadow-md transition-all group text-center">
                  <p className="font-semibold text-[#111827] group-hover:text-[#00A0B0] transition-colors">Zoho CRM vs {comp.competitor}</p>
                  <ArrowRight className="w-4 h-4 mx-auto mt-2 text-[#3FE0F0] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3FE0F0]/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
              Ready to Switch to Zoho CRM?
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              Get a free migration assessment and discover how Zoho CRM can transform your business.
            </p>
            <Button variant="heroDark" size="xl" asChild>
              <Link to="/contact">Book Free Consultation <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
