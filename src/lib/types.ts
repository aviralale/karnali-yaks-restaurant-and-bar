export interface DietaryTag {
  id: number;
  name: string;
  es_name: string;
  icon: string;
  description: string;
}

export interface Variation {
  id: number;
  name: string;
  price: string;
}

export interface MenuItem {
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

export interface MenuCategory {
  id: number;
  name: string;
  es_name: string;
  description: string;
  items: MenuItem[];
}

export interface MenuResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: MenuCategory[];
}

export interface DietaryTags {
  count: string;
  next: string;
  previous: string;
  results: DietaryTag[];
}
