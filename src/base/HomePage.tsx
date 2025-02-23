import { motion } from "framer-motion";
import GoogleMaps from "@/components/GoogleMaps";
import Hero from "@/components/Hero";
import HeroCategories from "@/components/HeroCategories";
import HeroMenu from "@/components/HeroMenu";
import HomeLatest from "@/components/HomeLatest";

const HomePage = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // Animate into view
  };

  return (
    <main className="flex flex-col gap-24">
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation only once when in view
        style={{
          padding: "2rem 15rem",
        }}
      >
        <Hero />
      </motion.section>

      {/* HeroMenu Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white"
        style={{
          padding: "2rem 15rem",
        }}
      >
        <HeroMenu />
        <HeroCategories />
      </motion.section>

      {/* HomeLatest Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          padding: "2rem 15rem",
        }}
      >
        <HomeLatest />
      </motion.section>

      {/* GoogleMaps Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white"
        style={{
          padding: "2rem 15rem",
        }}
      >
        <GoogleMaps />
      </motion.section>
    </main>
  );
};

export default HomePage;
