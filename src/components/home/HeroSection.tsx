import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Award, Globe, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlexusBackground } from "@/components/animations/PlexusBackground";

const heroSlides = [
  {
    badge: "Premium Global Zoho Partner",
    headline: "AI Automation Experts",
    subheadline: "Building Intelligent Systems",
    description: "We design, implement, and optimize Zoho, AI, CRM, and custom ERP solutions that automate operations, improve decisions, and help businesses scale globally.",
    cta: "Book a Free Consultation",
    ctaLink: "/contact",
    secondaryCta: "Talk to a Zoho Expert",
    secondaryLink: "/contact",
    backgroundType: "plexus" as const,
    video: "",
  },
  {
    badge: "Enterprise AI Solutions",
    headline: "Transform with AI",
    subheadline: "Intelligent Automation at Scale",
    description: "Leverage cutting-edge AI agents, machine learning, and automation to streamline workflows, reduce costs, and unlock new revenue opportunities.",
    cta: "Explore AI Solutions",
    ctaLink: "/ai-solutions",
    secondaryCta: "See Case Studies",
    secondaryLink: "/case-studies",
    backgroundType: "plexus" as const,
    video: "",
  },
  {
    badge: "Custom ERP Development",
    headline: "Custom-Built Solutions",
    subheadline: "For Your Unique Business",
    description: "From CRM to full ERP systems, we build tailored solutions on Zoho Creator and integrate with your existing tech stack for seamless operations.",
    cta: "Start Your Project",
    ctaLink: "/contact",
    secondaryCta: "View Our Portfolio",
    secondaryLink: "/case-studies",
    backgroundType: "video" as const,
    video: "https://videos.pexels.com/video-files/6774621/6774621-uhd_2732_1440_25fps.mp4",
  },
  {
    badge: "Zoho Creator Champions",
    headline: "Low-Code Excellence",
    subheadline: "Enterprise Apps Without Limits",
    description: "Build sophisticated business applications with Zoho Creator. From CRM customizations to full ERP systems, we deliver solutions that scale with your ambitions.",
    cta: "Discuss Your Requirements",
    ctaLink: "/contact",
    secondaryCta: "Explore Zoho Creator",
    secondaryLink: "/zoho-creator",
    backgroundType: "video" as const,
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
  },
];

const trustStats = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Briefcase, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "Global", label: "Client Reach" },
  { icon: Users, value: "50+", label: "Industries Served" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {slide.backgroundType === "plexus" ? (
            <PlexusBackground />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105"
              style={{ filter: "brightness(0.4)" }}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          )}

          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C3D]/70 via-transparent to-[#0B1C3D]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3D]/50 via-transparent to-[#0B1C3D]/50" />

          {/* Subtle animated light streaks */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-20deg]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
                <span className="text-white/90 text-sm font-medium tracking-wide">{slide.badge}</span>
              </motion.div>

              {/* Main Headline — Cinematic Scale */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-3"
              >
                {slide.headline}
              </motion.h1>

              {/* Subheadline with gradient */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3FE0F0] via-[#4DA3FF] to-[#8B5CF6] bg-clip-text text-transparent mb-8"
              >
                {slide.subheadline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="text-lg lg:text-xl text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="heroDark" size="xl" asChild>
                  <Link to={slide.ctaLink}>
                    {slide.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroSecondary" size="lg" asChild>
                  <Link to={slide.secondaryLink}>
                    {slide.secondaryCta}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#3FE0F0]" />
                  <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">{stat.value}</span>
                  <span className="text-xs text-white/60">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Slide Navigation — Minimal */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-10 bg-[#3FE0F0]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Partner Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              { label: "Premium Zoho Partner", color: "#E42527" },
              { label: "Zoho Creator Champions", color: "#00A1E0" },
              { label: "Global Implementation Partner", color: "#8B5CF6" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-white/80">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
