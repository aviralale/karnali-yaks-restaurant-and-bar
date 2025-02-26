import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import {
  Play,
  Image,
  Loader,
  AlertCircle,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";
import Logo from "../../public/favicon.svg";
import { Link } from "react-router-dom";

// Define types for the API response
type Photo = {
  id: number;
  title: string;
  image?: string;
  caption?: string;
  uploaded_at: string;
};

type Video = {
  id: number;
  title: string;
  video?: string;
  thumbnail?: string | null;
  uploaded_at: string;
};

type MediaItem = (Photo | Video) & {
  type: "photo" | "video";
};

type GalleryProps = {
  isHomePage: boolean;
};

// Type guard function to check if an item is a Photo
const isPhoto = (item: Photo | Video): item is Photo => {
  return (item as Photo).image !== undefined;
};

const Gallery = ({ isHomePage }: GalleryProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filterType, setFilterType] = useState<"all" | "photos" | "videos">(
    "all"
  );
  const galleryRef = useRef<HTMLDivElement>(null);

  // Fetch photos and videos from the API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const [photosResponse, videosResponse] = await Promise.all([
          axios.get(
            "https://api.karnaliyaksrestaurant.com/api/gallery/photos/"
          ),
          axios.get(
            "https://api.karnaliyaksrestaurant.com/api/gallery/videos/"
          ),
        ]);

        setPhotos(photosResponse.data.results);
        setVideos(videosResponse.data.results);
        setError(null);
      } catch (err) {
        setError("Failed to load gallery. Please try again later.");
        console.error("Error fetching media:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  // Combine photos and videos into a single array for the masonry grid
  const mediaItems: MediaItem[] = [
    ...photos.map((photo) => ({ ...photo, type: "photo" as const })),
    ...videos.map((video) => ({ ...video, type: "video" as const })),
  ].sort(
    (a, b) =>
      new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime()
  );

  // Filter items based on selected filter
  const filteredItems = mediaItems.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType.slice(0, -1); // Convert "photos" to "photo", etc.
  });

  const displayItems = isHomePage ? filteredItems.slice(0, 6) : filteredItems;

  // Masonry grid breakpoints
  const breakpointColumnsObj = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns for screens <= 1100px
    700: 1, // 1 column for screens <= 700px
  };

  const openLightbox = (item: MediaItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <div
        className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 rounded-xl"
        style={{ padding: "48px 24px", minHeight: "16rem" }}
      >
        <Loader
          className="animate-spin text-emerald-600"
          style={{ marginBottom: "16px" }}
          size={40}
        />
        <p className="text-lg text-emerald-800 font-medium">
          Loading our beautiful moments...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center bg-red-50 rounded-xl border border-red-200"
        style={{ padding: "48px 24px" }}
      >
        <AlertCircle
          className="text-red-600"
          style={{ marginBottom: "16px" }}
          size={40}
        />
        <p className="text-lg text-red-800 font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          style={{ marginTop: "16px", padding: "8px 16px" }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section
      ref={galleryRef}
      className={`bg-gradient-to-b from-gray-50 to-white rounded-2xl min-h-[70vh] flex flex-col items-center justify-around ${
        isHomePage ? "overflow-hidden" : ""
      }`}
      style={{ padding: "48px 24px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: "32px" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-800 relative inline-block">
          Gallery
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500 rounded-full"></span>
        </h1>
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          style={{ marginTop: "16px" }}
        >
          Explore our beautiful moments captured in photos and videos
        </p>
      </motion.div>

      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
          style={{ gap: "12px", marginBottom: "32px" }}
        >
          <button
            onClick={() => setFilterType("all")}
            className={`rounded-full transition-all ${
              filterType === "all"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-emerald-700 hover:bg-emerald-50"
            }`}
            style={{ padding: "10px 20px" }}
          >
            All ({mediaItems.length})
          </button>
          <button
            onClick={() => setFilterType("photos")}
            className={`rounded-full transition-all flex items-center ${
              filterType === "photos"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-emerald-700 hover:bg-emerald-50"
            }`}
            style={{ padding: "10px 20px", gap: "6px" }}
          >
            <Image size={16} /> Photos ({photos.length})
          </button>
          <button
            onClick={() => setFilterType("videos")}
            className={`rounded-full transition-all flex items-center ${
              filterType === "videos"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-emerald-700 hover:bg-emerald-50"
            }`}
            style={{ padding: "10px 20px", gap: "6px" }}
          >
            <Play size={16} /> Videos ({videos.length})
          </button>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
        style={{ minHeight: displayItems.length === 0 ? "70vh" : "auto" }}
      >
        {displayItems.length === 0 ? (
          <div
            style={{
              padding: "4rem 0",
            }}
          >
            <AlertCircle
              className="text-gray-400"
              style={{ marginBottom: "16px" }}
              size={40}
            />
            <p className="text-lg text-gray-600 font-medium">
              No {filterType === "all" ? "media" : filterType} to display
            </p>
            {filterType !== "all" && (
              <button
                onClick={() => setFilterType("all")}
                className="mt-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors px-4 py-2"
              >
                View all media
              </button>
            )}
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex min-w-[95vw] min-h-[70vh]"
            style={{ marginLeft: "-16px" }}
            columnClassName=""
          >
            {displayItems.map((item) => (
              <motion.div
                key={`${item.type}-${item.id}`}
                variants={itemVariants}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                style={{
                  marginBottom: "16px",
                  marginLeft: "16px",
                  // aspectRatio: "1 / 1", // Make all items maintain a square aspect ratio
                  position: "relative",
                }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative group h-full">
                  {isPhoto(item) ? (
                    <div className="overflow-hidden h-full">
                      <img
                        src={item.image}
                        alt={item.title || "Gallery photo"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div
                        className="absolute top-2 right-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-90 transition-opacity"
                        style={{ padding: "6px" }}
                      >
                        <Maximize2 className="text-white" size={16} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full">
                      <img
                        src={item.thumbnail || Logo}
                        alt={item.title || "Video thumbnail"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="rounded-full bg-black/60 transform transition-transform duration-300 group-hover:scale-110"
                          style={{ padding: "12px" }}
                        >
                          <Play className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 to-transparent text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ padding: "16px" }}
                  >
                    {item.title && (
                      <h3 className="font-medium text-sm md:text-base truncate">
                        {item.title}
                      </h3>
                    )}
                    {isPhoto(item) && item.caption && (
                      <p
                        className="text-xs text-gray-300 line-clamp-2"
                        style={{ marginTop: "6px" }}
                      >
                        {item.caption}
                      </p>
                    )}
                    <p
                      className="text-xs text-gray-400"
                      style={{ marginTop: "6px" }}
                    >
                      {new Date(item.uploaded_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        )}

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            style={{ padding: "24px" }}
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full hover:bg-black/80"
                style={{ padding: "10px" }}
                onClick={closeLightbox}
              >
                ✕
              </button>

              <div className="overflow-hidden rounded-lg w-full max-h-[80vh] bg-black/30">
                {selectedItem.type === "photo" ? (
                  <img
                    src={(selectedItem as Photo).image}
                    alt={selectedItem.title || "Gallery photo"}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh]"
                    poster={(selectedItem as Video).thumbnail || undefined}
                  >
                    <source
                      src={(selectedItem as Video).video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {(selectedItem.title ||
                (isPhoto(selectedItem) && selectedItem.caption)) && (
                <div
                  className="bg-white rounded-lg w-full"
                  style={{ padding: "20px", marginTop: "16px" }}
                >
                  {selectedItem.title && (
                    <h3 className="font-bold text-lg">{selectedItem.title}</h3>
                  )}
                  {isPhoto(selectedItem) && selectedItem.caption && (
                    <p className="text-gray-600" style={{ marginTop: "8px" }}>
                      {selectedItem.caption}
                    </p>
                  )}
                  <p
                    className="text-sm text-gray-500"
                    style={{ marginTop: "12px" }}
                  >
                    {new Date(selectedItem.uploaded_at).toLocaleDateString()} •{" "}
                    {selectedItem.type.charAt(0).toUpperCase() +
                      selectedItem.type.slice(1)}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>

      {!isHomePage && displayItems.length > 0 && (
        <div className="text-center" style={{ marginTop: "32px" }}>
          <p className="text-gray-600">
            Showing {displayItems.length} of {mediaItems.length} items
          </p>
        </div>
      )}
      {isHomePage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            to="/gallery"
            className="flex items-center gap-2 text-lg font-semibold rounded-full bg-black/80 text-white shadow-md transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
            style={{
              padding: "0.75rem 1.5rem",
            }}
          >
            View Full Gallery <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
