import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Award, Globe, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cctLogo from "@/assets/cct-logo.png";

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
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    gradient: "from-[#0B1C3D]/90 via-[#0F2A5F]/85 to-[#1A365D]/90",
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
    video: "https://videos.pexels.com/video-files/5532770/5532770-uhd_2732_1440_25fps.mp4",
    gradient: "from-[#1A365D]/90 via-[#0F2A5F]/85 to-[#0B1C3D]/90",
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
    video: "https://videos.pexels.com/video-files/6774621/6774621-uhd_2732_1440_25fps.mp4",
    gradient: "from-[#0F2A5F]/90 via-[#1A365D]/85 to-[#0B1C3D]/90",
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
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    gradient: "from-[#0B1C3D]/90 via-[#0F2A5F]/85 to-[#1A365D]/90",
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
    }, 6000);
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-8">
      {/* Video Background */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={{
            enter: { opacity: 0 },
            center: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slide.video} type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
          
          {/* Additional dark overlay for better text readability */}
          <div className="absolute inset-0 bg-[#0B1C3D]/40" />

          {/* Animated accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3FE0F0]/10 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4DA3FF]/10 rounded-full blur-[120px]"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* CCT Logo - Larger Size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img 
              src={cctLogo} 
              alt="Club Code Technology" 
              className="h-20 md:h-24 lg:h-28 w-auto mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3FE0F0]/40 bg-[#3FE0F0]/10 backdrop-blur-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#3FE0F0] animate-pulse" />
                <span className="text-[#3FE0F0] text-sm font-medium">{slide.badge}</span>
              </motion.div>

              {/* Headline - DARK SECTION: White text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
              >
                {slide.headline}
                <span className="block text-gradient-primary mt-2">{slide.subheadline}</span>
              </motion.h1>

              {/* Description - DARK SECTION: Light gray text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-[#E5E7EB] mb-10 max-w-3xl mx-auto"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
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

          {/* Enhanced Trust Stats with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <Icon className="w-6 h-6 text-[#3FE0F0]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs md:text-sm text-[#E5E7EB]">{stat.label}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-[#3FE0F0]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Partner Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#E42527]/20 to-[#E42527]/10 border border-[#E42527]/30">
              <span className="text-sm font-medium text-white">Premium Zoho Partner</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00A1E0]/20 to-[#00A1E0]/10 border border-[#00A1E0]/30">
              <span className="text-sm font-medium text-white">Zoho Creator Champions</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#8B5CF6]/10 border border-[#8B5CF6]/30">
              <span className="text-sm font-medium text-white">Global Implementation Partner</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
