import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import axios from "axios";
import { DietaryTags, MenuResponse } from "@/lib/types";
import DietaryIcon from "./DietaryIcon";
import LoadingSkeleton from "./LoadingSkeleton";
import CategorySection from "./CategorySection";

const MenuContainer = () => {
  const [menuData, setMenuData] = useState<MenuResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dietaryTags, setDietaryTags] = useState<DietaryTags | null>(null);

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
      } finally {
        setLoading(false);
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

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6">
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6">
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      </div>
    );
  }

  if (!menuData) return null;

  return (
    <div
      className="w-full min-h-screen flex flex-col"
      style={{
        margin: "3rem auto 3rem 0",
        padding: "0 1.5rem",
      }}
    >
      <Tabs
        defaultValue={menuData.results[0]?.name || ""}
        className="flex flex-col justify-between items-center min-h-screen gap-20"
      >
        <TabsList className="flex flex-wrap gap-6 bg-transparent">
          {menuData.results.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.name}
              className="text-center text-lg font-semibold uppercase flex-1 min-w-[150px]"
              style={{
                margin: "0.5rem",
                padding: "0 1rem",
              }}
            >
              <h1>{category.name}</h1>
            </TabsTrigger>
          ))}
        </TabsList>

        {menuData.results.map((category) => (
          <TabsContent
            key={category.id}
            value={category.name}
            className="min-h-screen min-w-[60vw] relative shadow-xl rounded-lg overflow-hidden"
            style={{
              padding: "2rem",
            }}
          >
            <div className="absolute inset-0 bg-amber-50 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white opacity-80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#f3f3f3_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.02)_75%,transparent_75%,transparent)] bg-[size:20px_20px] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-100 to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-100 to-transparent opacity-40"></div>
            <div className="relative z-10">
              <CategorySection category={category} />

              <div
                className="flex flex-col justify-center items-center  border-t border-amber-200"
                style={{
                  marginTop: "3rem",
                  paddingTop: "2rem",
                }}
              >
                <h1
                  className="text-4xl font-bold  text-amber-800"
                  style={{
                    marginBottom: "1.5rem",
                  }}
                >
                  Dietary Tags
                </h1>
                <div className="flex flex-wrap gap-4 justify-center">
                  {dietaryTags?.results.map((dietaryTag) => (
                    <div
                      key={dietaryTag.id}
                      className="flex items-center bg-white bg-opacity-70 rounded-full shadow-sm"
                      style={{
                        padding: "0.5rem 1rem",
                      }}
                    >
                      <DietaryIcon tag={dietaryTag} />
                      <h1 className="text-lg font-bold">{dietaryTag.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuContainer;
