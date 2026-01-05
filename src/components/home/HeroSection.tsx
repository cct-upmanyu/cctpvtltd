import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    badge: "Global Zoho Premium Partner",
    headline: "AI Automation Experts",
    subheadline: "Building Intelligent Systems",
    description: "We design, implement, and optimize Zoho, AI, CRM, and custom ERP solutions that automate operations, improve decisions, and help businesses scale globally.",
    cta: "Book a Free Consultation",
    secondaryCta: "Talk to a Zoho Expert",
    image: "/hero-slide-1.jpg",
    gradient: "from-[#0B1C3D] via-[#0F2A5F] to-[#1A365D]",
  },
  {
    badge: "Enterprise AI Solutions",
    headline: "Transform with AI",
    subheadline: "Intelligent Automation at Scale",
    description: "Leverage cutting-edge AI agents, machine learning, and automation to streamline workflows, reduce costs, and unlock new revenue opportunities.",
    cta: "Explore AI Solutions",
    secondaryCta: "See Case Studies",
    image: "/hero-slide-2.jpg",
    gradient: "from-[#1A365D] via-[#0F2A5F] to-[#0B1C3D]",
  },
  {
    badge: "Custom ERP Development",
    headline: "Custom-Built Solutions",
    subheadline: "For Your Unique Business",
    description: "From CRM to full ERP systems, we build tailored solutions on Zoho Creator and integrate with your existing tech stack for seamless operations.",
    cta: "Start Your Project",
    secondaryCta: "View Our Portfolio",
    image: "/hero-slide-3.jpg",
    gradient: "from-[#0F2A5F] via-[#1A365D] to-[#0B1C3D]",
  },
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
      {/* Animated Background */}
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
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        >
          {/* Animated particles/orbs */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large floating orbs */}
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
            <motion.div
              animate={{
                x: [0, 60, 0],
                y: [0, 60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[80px]"
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Animated lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0,100 Q400,50 800,150 T1600,100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.path
                d="M0,300 Q500,200 1000,350 T2000,300"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3FE0F0" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3FE0F0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3FE0F0" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#4DA3FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4DA3FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
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
                className="text-lg lg:text-xl text-[#E5E7EB] mb-10 max-w-2xl mx-auto"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="heroDark" size="xl">
                  {slide.cta}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroSecondary" size="lg">
                  {slide.secondaryCta}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Trust Indicators - DARK SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-8 justify-center text-[#E5E7EB] text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3FE0F0]" />
              <span>12+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4DA3FF]" />
              <span>800+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span>Global Clients</span>
            </div>
          </motion.div>

          {/* Slide Navigation - Moved inside content area */}
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
        </div>
      </div>

    </section>
  );
}
