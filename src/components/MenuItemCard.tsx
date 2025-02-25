import { MenuItem } from "@/lib/types";
import DietaryIcon from "./DietaryIcon";

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div
    className="border-b border-gray-200 last:border-b-0"
    style={{
      padding: "1.5rem 0",
    }}
  >
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h1
          className="text-3xl font-extrabold flex items-center"
          style={{
            marginBottom: "0.5rem",
          }}
        >
          {item.order}. {item.name}
          {item.is_special && <span className="ml-2 text-red-500">★</span>}
        </h1>
        {item.name_spanish && (
          <em className="text-gray-600 italic mt-1">{item.name_spanish}</em>
        )}
        {item.description && (
          <p className="text-gray-700 mt-2">{item.description}</p>
        )}
        {item.description_spanish && (
          <p className="text-gray-600 italic mt-1">
            {item.description_spanish}
          </p>
        )}
        <div
          className="flex items-center"
          style={{
            marginTop: "0.5rem",
          }}
        >
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

export default MenuItemCard;
