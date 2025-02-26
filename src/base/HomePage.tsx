import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import GoogleMaps from "@/components/GoogleMaps";
import Hero from "@/components/Hero";
import HeroCategories from "@/components/HeroCategories";
import HeroMenu from "@/components/HeroMenu";
import HomeLatest from "@/components/HomeLatest";
import Gallery from "./Gallery";
import { ChevronDown } from "lucide-react";

const HomePage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Properly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };

  const scaleUpVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Fixed scroll indicator animation
  const scrollIndicatorVariants: Variants = {
    initial: { y: 0, opacity: 0.8 },
    animate: {
      y: [0, 10, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Scroll to next section function using ref
  const scrollToNextSection = () => {
    if (heroSectionRef.current) {
      const nextSection = heroSectionRef.current
        .nextElementSibling as HTMLElement;
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  // Intersection Observer to add parallax effects - properly typed
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>(".parallax-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
          } else {
            element.style.transform = "translateY(20px)";
            element.style.opacity = "0.8";
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    sections.forEach((section) => {
      section.style.transition =
        "transform 0.6s ease-out, opacity 0.6s ease-out";
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Hero Section with dramatic entrance */}
      <motion.section
        id="hero-section"
        ref={heroSectionRef}
        className="parallax-section relative p-0 h-screen overflow-hidden"
        variants={sectionVariants}
      >
        <Hero />

        {/* Scroll down indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        >
          <span className="text-white mb-2 text-sm font-medium">
            Scroll to explore
          </span>
          <ChevronDown size={24} color="#fff" />
        </motion.div>
      </motion.section>

      {/* Menu & Categories Section with scale-up animation */}
      <motion.section
        className="parallax-section py-24 px-4 bg-gradient-to-br from-gray-50 to-white rounded-t-3xl -mt-8 relative z-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
        variants={scaleUpVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HeroMenu />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <HeroCategories />
        </motion.div>
      </motion.section>

      {/* Latest News Section with fade-in effect */}
      <motion.section
        className="parallax-section py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-100 relative"
        variants={fadeInVariants}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <HomeLatest />
        </motion.div>
      </motion.section>

      {/* Gallery Section with staggered image reveal */}
      <motion.section
        className="parallax-section py-20 px-4 bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center relative overflow-hidden"
        variants={sectionVariants}
      >
        <Gallery isHomePage />
      </motion.section>

      {/* Google Maps Section with elegant entrance */}
      <motion.section
        className="parallax-section py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-t-3xl -mt-8 relative z-1 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]"
        variants={sectionVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <GoogleMaps />
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default HomePage;
