import { motion } from "framer-motion";
import GoogleMaps from "@/components/GoogleMaps";
import Hero from "@/components/Hero";
import HeroCategories from "@/components/HeroCategories";
import HeroMenu from "@/components/HeroMenu";
import HomeLatest from "@/components/HomeLatest";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const HomePage = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
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
          padding: "2rem 0",
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
          padding: "2rem 1rem",
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
          padding: "2rem 0",
        }}
      >
        <HomeLatest />
      </motion.section>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
        style={{
          padding: "2rem 0",
          marginBottom: "2rem",
        }}
      >
        <Gallery isHomePage />
        <Link to="/gallery" className="text-xl uppercase text-center flex">
          View Gallery <ArrowUpRight />{" "}
        </Link>
      </motion.section>

      {/* GoogleMaps Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white"
        style={{
          padding: "2rem 1rem",
        }}
      >
        <GoogleMaps />
      </motion.section>
    </main>
  );
};

export default HomePage;
