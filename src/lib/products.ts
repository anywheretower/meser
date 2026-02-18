export type ProductCategory = "aire-acondicionado" | "termo-electrico";

export interface ProductModel {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  line: string;
  price: number;
  originalPrice: number;
  todoIncluidoPrice: number;
  specs: string[];
  coverage?: string;
  popular?: boolean;
}

export interface ProductGroup {
  brand: string;
  line: string;
  category: ProductCategory;
  models: ProductModel[];
}

export function formatPrice(n: number): string {
  if (n === 0) return "Consultar";
  return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/* ── Aires Acondicionados ── */

export const airesGroups: ProductGroup[] = [
  {
    brand: "Midea",
    line: "Inverter Xtra",
    category: "aire-acondicionado",
    models: [
      {
        id: "midea-inverter-xtra-9k",
        name: "Midea Inverter Xtra 9.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Inverter Xtra",
        price: 299990,
        originalPrice: 479990,
        todoIncluidoPrice: 0,
        specs: ["Inverter frío/calor", "WiFi", "Clase A", "20 dB"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "midea-inverter-xtra-12k",
        name: "Midea Inverter Xtra 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Inverter Xtra",
        price: 319990,
        originalPrice: 549990,
        todoIncluidoPrice: 0,
        specs: ["Inverter frío/calor", "WiFi", "Clase A", "22 dB"],
        coverage: "Hasta 22 m²",
      },
      {
        id: "midea-inverter-xtra-18k",
        name: "Midea Inverter Xtra 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Inverter Xtra",
        price: 499990,
        originalPrice: 749990,
        todoIncluidoPrice: 0,
        specs: ["Inverter frío/calor", "WiFi", "Clase A", "24 dB"],
        coverage: "Hasta 32 m²",
      },
    ],
  },
  {
    brand: "Midea",
    line: "EcoMaster",
    category: "aire-acondicionado",
    models: [
      {
        id: "midea-ecomaster-9k",
        name: "Midea EcoMaster 9.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        price: 319990,
        originalPrice: 549990,
        todoIncluidoPrice: 449980,
        specs: ["Inverter frío/calor", "WiFi + IA", "Clase A", "19 dB"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "midea-ecomaster-12k",
        name: "Midea EcoMaster 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        price: 349990,
        originalPrice: 629990,
        todoIncluidoPrice: 499980,
        specs: ["Inverter frío/calor", "WiFi + IA", "Clase A", "22 dB"],
        coverage: "Hasta 22 m²",
        popular: true,
      },
      {
        id: "midea-ecomaster-18k",
        name: "Midea EcoMaster 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        price: 529990,
        originalPrice: 899990,
        todoIncluidoPrice: 679990,
        specs: ["Inverter frío/calor", "WiFi + IA", "Clase A", "24 dB"],
        coverage: "Hasta 32 m²",
      },
      {
        id: "midea-ecomaster-24k",
        name: "Midea EcoMaster 24.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        price: 649990,
        originalPrice: 1069990,
        todoIncluidoPrice: 0,
        specs: ["Inverter frío/calor", "WiFi + IA", "Clase A", "26 dB"],
        coverage: "Hasta 40 m²",
      },
    ],
  },
  {
    brand: "Samsung",
    line: "Wind-Free",
    category: "aire-acondicionado",
    models: [
      {
        id: "samsung-windfree-9k",
        name: "Samsung Wind-Free 9.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        price: 0,
        originalPrice: 0,
        todoIncluidoPrice: 499980,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "samsung-windfree-12k",
        name: "Samsung Wind-Free 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        price: 0,
        originalPrice: 0,
        todoIncluidoPrice: 549980,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 22 m²",
      },
      {
        id: "samsung-windfree-18k",
        name: "Samsung Wind-Free 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        price: 0,
        originalPrice: 0,
        todoIncluidoPrice: 699980,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 32 m²",
      },
      {
        id: "samsung-windfree-24k",
        name: "Samsung Wind-Free 24.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        price: 849990,
        originalPrice: 1055990,
        todoIncluidoPrice: 0,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 40 m²",
      },
    ],
  },
  {
    brand: "Midea",
    line: "Consola Xtreme Heat",
    category: "aire-acondicionado",
    models: [
      {
        id: "midea-consola-xtreme-14k",
        name: "Consola Midea Xtreme Heat 14.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Consola Xtreme Heat",
        price: 499990,
        originalPrice: 899990,
        todoIncluidoPrice: 649990,
        specs: ["Inverter frío/calor", "Piso-cielo", "WiFi", "Ideal mansardas"],
        coverage: "Hasta 23 m²",
      },
      {
        id: "midea-consola-xtreme-18k",
        name: "Consola Midea Xtreme Heat 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Consola Xtreme Heat",
        price: 579990,
        originalPrice: 1049990,
        todoIncluidoPrice: 729990,
        specs: ["Inverter frío/calor", "Piso-cielo", "WiFi", "Ideal mansardas"],
        coverage: "Hasta 32 m²",
      },
    ],
  },
];

/* ── Termos Eléctricos ── */

export const termosGroup: ProductGroup = {
  brand: "Midea",
  line: "Lume",
  category: "termo-electrico",
  models: [
    {
      id: "midea-lume-50l",
      name: "Midea Lume 50L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      price: 149990,
      originalPrice: 199990,
      todoIncluidoPrice: 0,
      specs: ["50 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-80l",
      name: "Midea Lume 80L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      price: 179990,
      originalPrice: 249990,
      todoIncluidoPrice: 0,
      specs: ["80 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-100l",
      name: "Midea Lume 100L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      price: 219990,
      originalPrice: 299990,
      todoIncluidoPrice: 0,
      specs: ["100 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-120l",
      name: "Midea Lume 120L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      price: 249990,
      originalPrice: 319990,
      todoIncluidoPrice: 0,
      specs: ["120 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
  ],
};

/* ── Helpers ── */

export const allProducts: ProductModel[] = [
  ...airesGroups.flatMap((g) => g.models),
  ...termosGroup.models,
];

export function getProductById(id: string): ProductModel | undefined {
  return allProducts.find((p) => p.id === id);
}
