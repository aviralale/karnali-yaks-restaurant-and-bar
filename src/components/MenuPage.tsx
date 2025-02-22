import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface DietaryTag {
  id: number;
  name: string;
  icon: string;
  description: string;
}

interface Variation {
  id: number;
  name: string;
  price: string;
}

interface MenuItem {
  id: number;
  name: string;
  name_spanish: string;
  description: string;
  description_spanish: string;
  price: string;
  category: number;
  category_name: string;
  dietary_tags: DietaryTag[];
  variations: Variation[];
  spice_level: number | null;
  is_special: boolean;
  order: number;
}

interface MenuCategory {
  id: number;
  name: string;
  es_name: string;
  description: string;
  items: MenuItem[];
}

interface MenuResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: MenuCategory[];
}

const DietaryIcon = ({ tag }: { tag: DietaryTag }) => (
  <div
    className={`inline-flex items-center rounded-full ${
      tag.name == "Molluscs"
        ? "bg-blue-500"
        : tag.name == "Gluten"
        ? "bg-yellow-600"
        : tag.name == "Egg"
        ? "bg-orange-500"
        : tag.name == "Fish"
        ? "bg-blue-700"
        : tag.name == "Peanuts"
        ? "bg-amber-900"
        : tag.name == "Soy"
        ? "bg-green-600"
        : tag.name == "Dairy"
        ? "bg-amber-950"
        : tag.name == "Nuts"
        ? "bg-red-400"
        : tag.name == "celery"
        ? "bg-green-500"
        : tag.name == "Crustaceans"
        ? "bg-blue-800"
        : tag.name == "Sesame"
        ? "bg-yellow-700"
        : tag.name == "Mustard"
        ? "bg-red-500"
        : tag.name == "Sulphites"
        ? "bg-orange-600"
        : tag.name == "Lupins"
        ? "bg-green-700"
        : "bg-transparent"
    }`}
    style={{
      marginRight: "0.5rem",
      padding: "0.25rem",
    }}
    title={tag.name}
  >
    <img
      src={tag.icon}
      alt={tag.name}
      className={`w-4 h-4 object-contain`}
      style={{
        filter: "invert(1)",
      }}
    />
  </div>
);

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div
    className="border-b border-gray-200 last:border-b-0"
    style={{
      padding: "1.5rem 0",
    }}
  >
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold flex items-center">
          {item.order}. {item.name}
          {item.is_special && <span className="ml-2 text-red-500">★</span>}
        </h1>
        {item.name_spanish && (
          <p className="text-gray-600 italic mt-1">{item.name_spanish}</p>
        )}
        {item.description && (
          <p className="text-gray-700 mt-2">{item.description}</p>
        )}
        {item.description_spanish && (
          <p className="text-gray-600 italic mt-1">
            {item.description_spanish}
          </p>
        )}
        <div className="mt-3 flex items-center">
          {item.dietary_tags.map((tag) => (
            <DietaryIcon key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
      <div className="text-right ml-8">
        {item.price && <p className="text-xl font-bold">{item.price}€</p>}
        {item.variations.map((variation) => (
          <div key={variation.id} className="text-gray-700 mt-1">
            <span>{variation.name}: </span>
            <span className="font-medium">{variation.price}€</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CategorySection = ({
  category,
  searchQuery,
}: {
  category: MenuCategory;
  searchQuery: string;
}) => {
  const filteredItems = category.items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name_spanish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description_spanish.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
    >
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => <MenuItemCard key={item.id} item={item} />)
      ) : (
        <p className="text-gray-500 text-lg">
          No items found for this category.
        </p>
      )}
    </div>
  );
};

const MenuFilter = ({ onSearch }: { onSearch: (query: string) => void }) => (
  <div
    className="relative"
    style={{
      marginBottom: "3rem",
    }}
  >
    <input
      type="text"
      placeholder="Search menu..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-4 pl-12 text-xl border-2 border-black rounded-none outline-none"
      style={{
        padding: "1rem",
        paddingLeft: "3rem",
      }}
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6" />
  </div>
);

const LoadingSkeleton = () => (
  <div className="space-y-12">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 mb-6" />
        <div className="space-y-6">
          {[1, 2].map((j) => (
            <div key={j} className="py-6 border-b border-gray-200">
              <div className="h-6 w-3/4 bg-gray-200 mb-4" />
              <div className="h-4 w-1/2 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const MenuContainer = () => {
  const [menuData, setMenuData] = useState<MenuResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/menu/categories/"
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
        margin: "auto",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          display: "none",
        }}
      >
        <MenuFilter onSearch={setSearchQuery} />
      </div>
      <Tabs
        defaultValue={menuData.results[0]?.name || ""}
        className="flex justify-center items-center"
      >
        <TabsList className="flex flex-wrap gap-6">
          {menuData.results.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.name}
              className="text-center "
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {menuData.results.map((category) => (
          <TabsContent key={category.id} value={category.name}>
            <CategorySection category={category} searchQuery={searchQuery} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuContainer;
