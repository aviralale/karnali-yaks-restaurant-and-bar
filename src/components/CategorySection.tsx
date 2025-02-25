import { MenuCategory } from "@/lib/types";
import MenuItemCard from "./MenuItemCard";

const CategorySection = ({ category }: { category: MenuCategory }) => {
  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
    >
      {category.items.length > 0 ? (
        category.items.map((item) => <MenuItemCard key={item.id} item={item} />)
      ) : (
        <p className="text-gray-500 text-lg">
          No items found for this category.
        </p>
      )}
    </div>
  );
};

export default CategorySection;
