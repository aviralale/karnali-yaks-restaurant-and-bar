import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";

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
  const mediaItems = [
    ...photos.map((photo) => ({ ...photo, type: "photo" })),
    ...videos.map((video) => ({ ...video, type: "video" })),
  ];
  const displayItems = isHomePage ? mediaItems.slice(0, 6) : mediaItems;

  // Masonry grid breakpoints
  const breakpointColumnsObj = {
    default: 3, // 3 columns by default
    1100: 2, // 2 columns for screens <= 1100px
    700: 1, // 1 column for screens <= 700px
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section
      className={`bg-gray-50 ${isHomePage ? "overflow-hidden" : ""}`}
      style={{
        padding: "1.5rem",
      }}
    >
      <h1
        className="text-7xl font-bold text-center  text-emerald-800"
        style={{
          marginBottom: "2rem",
        }}
      >
        Gallery
      </h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {displayItems.map((item) => (
          <div
            key={item.id}
            className="relative group  rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            {isPhoto(item) ? (
              <img
                src={item.image}
                alt={item.title || "Gallery photo"}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                controls
                poster={item.thumbnail || undefined}
                className="w-full h-auto"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {item.title && (
              <div
                className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black to-transparent  text-white"
                style={{
                  padding: "1rem",
                }}
              >
                <p className="text-sm font-semibold">{item.title}</p>
                {isPhoto(item) && item.caption && (
                  <p
                    className="text-xs "
                    style={{
                      marginTop: "0.25rem",
                    }}
                  >
                    {item.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
