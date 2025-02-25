import { DietaryTag } from "@/lib/types";

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

export default DietaryIcon;
