import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { DietaryTags, MenuResponse } from "@/lib/types";
import DietaryIcon from "./DietaryIcon";
import LoadingSkeleton from "./LoadingSkeleton";
import CategorySection from "./CategorySection";
import { motion } from "framer-motion";
import {
  ChevronRight,
  AlertTriangle,
  Coffee,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

const MenuContainer = () => {
  const [menuData, setMenuData] = useState<MenuResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dietaryTags, setDietaryTags] = useState<DietaryTags | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const fetchDietaryTags = async () => {
      try {
        const response = await axios.get(
          "https://api.karnaliyaksrestaurant.com/api/menu/dietary-tags/"
        );
        setDietaryTags(response.data);
        setError(null);
      } catch (err) {
        setError("Error loading dietary tags. Please try again later.");
        console.error("Error fetching dietary tags:", err);
      }
    };

    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://api.karnaliyaksrestaurant.com/api/menu/categories/"
        );
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();
        setMenuData(data);
        setActiveCategory(data.results[0]?.name || "");
        setError(null);
      } catch (err) {
        setError("Error loading menu. Please try again later.");
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
    fetchDietaryTags();
  }, []);

  useEffect(() => {
    // Check if scrolling is needed
    const checkForScrolling = () => {
      if (categoriesRef.current) {
        const { scrollWidth, clientWidth } = categoriesRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkForScrolling();
    window.addEventListener("resize", checkForScrolling);
    return () => window.removeEventListener("resize", checkForScrolling);
  }, [menuData]);

  const scrollCategories = (direction: string) => {
    if (categoriesRef.current) {
      const currentScroll = categoriesRef.current.scrollLeft;
      const scrollAmount = direction === "left" ? -250 : 250;

      categoriesRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to handle category change
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  if (loading) {
    return (
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <div
            className="flex items-center justify-center"
            style={{ marginBottom: "2rem" }}
          >
            <Coffee
              size={32}
              className="text-amber-600"
              style={{ marginRight: "1rem" }}
            />
            <h2 className="text-2xl font-bold text-amber-800">
              Loading Our Menu
            </h2>
          </div>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          className="flex items-start rounded-lg bg-red-50 border-l-4 border-red-500"
          style={{ padding: "1.5rem", marginTop: "3rem", marginBottom: "3rem" }}
        >
          <AlertTriangle
            className="text-red-500"
            style={{ marginRight: "1rem" }}
          />
          <div>
            <h3
              className="text-lg font-semibold text-red-800"
              style={{ marginBottom: "0.5rem" }}
            >
              There was a problem
            </h3>
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!menuData) return null;

  const activeMenuCategory = menuData.results.find(
    (category) => category.name === activeCategory
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full"
      style={{ maxWidth: "80rem", margin: "3rem auto", padding: "0 1.5rem" }}
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-emerald-800 text-center"
        style={{ marginBottom: "1.5rem" }}
      >
        Our Menu
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg text-gray-600 text-center max-w-3xl mx-auto"
        style={{ margin: "0 auto 3rem auto" }}
      >
        Explore our carefully crafted dishes featuring flavors from India,
        Thailand, Mexico, Nepal, and the Himalayas
      </motion.p>

      <div className="flex flex-col w-full">
        <motion.div variants={itemVariants}>
          <div
            className="bg-amber-50 rounded-xl shadow-md relative"
            style={{ padding: "1rem", marginBottom: "2rem" }}
          >
            {/* Scroll hint overlay - shows only on initial load */}
            {showScrollButtons && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center z-20 pointer-events-none animate-pulse"
                style={{ animation: "fadeOut 1s ease-in-out forwards 3s" }}
              >
                <div
                  className="bg-white rounded-lg flex items-center"
                  style={{ padding: "1rem" }}
                >
                  <ChevronLeft
                    className="text-emerald-600"
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="text-emerald-800 font-medium">
                    Swipe to see all categories
                  </p>
                  <ChevronRightIcon
                    className="text-emerald-600"
                    style={{ marginLeft: "0.5rem" }}
                  />
                </div>
              </div>
            )}

            {/* Scroll buttons */}
            {showScrollButtons && (
              <>
                <button
                  onClick={() => scrollCategories("left")}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 hover:bg-amber-50 transition-colors"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 0.25rem",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <ChevronLeft size={24} className="text-emerald-800" />
                </button>
                <button
                  onClick={() => scrollCategories("right")}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md z-10 hover:bg-amber-50 transition-colors"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 0.25rem",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <ChevronRightIcon size={24} className="text-emerald-800" />
                </button>
              </>
            )}

            {/* Category buttons */}
            <div
              ref={categoriesRef}
              className="flex items-center w-full bg-transparent"
              style={{
                paddingBottom: "0.5rem",
                paddingLeft: showScrollButtons ? "2rem" : "0.5rem",
                paddingRight: showScrollButtons ? "2rem" : "0.5rem",
                overflowX: "scroll",
                msOverflowStyle: "none" /* IE and Edge */,
                scrollbarWidth: "none" /* Firefox */,
              }}
            >
              {menuData.results.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`text-lg font-medium rounded-lg text-emerald-800 flex items-center whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-white shadow-md"
                      : "bg-transparent hover:bg-white/50"
                  }`}
                  style={{
                    padding: "0.75rem 1.25rem",
                    margin: "0 0.5rem",
                    minWidth: "fit-content",
                    border:
                      activeCategory === category.name
                        ? "1px solid rgba(217, 119, 6, 0.3)"
                        : "none",
                  }}
                >
                  {category.name}
                  {activeCategory === category.name && (
                    <ChevronRight size={16} style={{ marginLeft: "0.5rem" }} />
                  )}
                </button>
              ))}
            </div>

            {/* Add a style to hide scrollbar */}
            <style>
              {`
                div[ref="categoriesRef"]::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
          </div>
        </motion.div>

        <div className="relative">
          {/* Content section - show only active category */}
          {activeMenuCategory && (
            <div className="rounded-xl shadow-lg">
              <div className="relative overflow-hidden rounded-xl bg-white">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#f3f3f3_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-100 to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-100 to-transparent opacity-40"></div>

                {/* Content */}
                <div className="relative z-10" style={{ padding: "2.5rem" }}>
                  <motion.div
                    key={activeMenuCategory.id} // Add key to force rerender when category changes
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2
                      className="text-3xl md:text-4xl font-bold text-emerald-800"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {activeMenuCategory.name}
                    </h2>

                    <CategorySection category={activeMenuCategory} />

                    <div
                      style={{
                        borderTop: "1px solid",
                        borderColor: "rgba(217, 119, 6, 0.2)",
                        marginTop: "3rem",
                        paddingTop: "2rem",
                      }}
                    >
                      <h3
                        className="text-2xl font-bold text-amber-800 text-center"
                        style={{ marginBottom: "1.5rem" }}
                      >
                        Dietary Information
                      </h3>

                      <div
                        className="flex flex-wrap justify-center"
                        style={{ gap: "0.75rem" }}
                      >
                        {dietaryTags?.results.map((dietaryTag) => (
                          <div
                            key={dietaryTag.id}
                            className="flex items-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
                            style={{
                              padding: "0.5rem 1rem",
                              border: "1px solid rgba(217, 119, 6, 0.2)",
                            }}
                          >
                            <div style={{ marginRight: "0.5rem" }}>
                              <DietaryIcon tag={dietaryTag} />
                            </div>
                            <span className="font-medium text-gray-800">
                              {dietaryTag.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add keyframes for the fadeOut animation */}
      <style>
        {`
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; visibility: hidden; }
          }
          
          /* Fix for scrollbar hiding */
          div::-webkit-scrollbar {
            display: none;
          }
          
          div {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </motion.div>
  );
};

export default MenuContainer;
