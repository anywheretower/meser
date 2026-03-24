export type ProductCategory = "aire-acondicionado" | "termo-electrico";

export interface ProductModel {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  line: string;
  image?: string;
  price: number;
  originalPrice: number;
  todoIncluidoPrice: number;
  specs: string[];
  coverage?: string;
  popular?: boolean;
  fichaUrl?: string;
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
    line: "EcoMaster",
    category: "aire-acondicionado",
    models: [
      {
        id: "midea-ecomaster-9k",
        name: "Midea EcoMaster 9.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        image: "/images/productos/midea-ecomaster.webp",
        fichaUrl: "/fichas/midea-ecomaster.pdf",
        price: 319990,
        originalPrice: 549990,
        todoIncluidoPrice: 419990,
        specs: ["Inverter frío/calor", "IA", "WiFi", "Clase A", "19 dB"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "midea-ecomaster-12k",
        name: "Midea EcoMaster 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        image: "/images/productos/midea-ecomaster.webp",
        fichaUrl: "/fichas/midea-ecomaster.pdf",
        price: 349990,
        originalPrice: 629990,
        todoIncluidoPrice: 449990,
        specs: ["Inverter frío/calor", "IA", "WiFi", "Clase A", "22 dB"],
        coverage: "Hasta 22 m²",
        popular: true,
      },
      {
        id: "midea-ecomaster-18k",
        name: "Midea EcoMaster 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        image: "/images/productos/midea-ecomaster.webp",
        fichaUrl: "/fichas/midea-ecomaster.pdf",
        price: 529990,
        originalPrice: 899990,
        todoIncluidoPrice: 629990,
        specs: ["Inverter frío/calor", "IA", "WiFi", "Clase A", "24 dB"],
        coverage: "Hasta 32 m²",
      },
      {
        id: "midea-ecomaster-24k",
        name: "Midea EcoMaster 24.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "EcoMaster",
        image: "/images/productos/midea-ecomaster.webp",
        fichaUrl: "/fichas/midea-ecomaster.pdf",
        price: 649990,
        originalPrice: 1069990,
        todoIncluidoPrice: 749990,
        specs: ["Inverter frío/calor", "IA", "WiFi", "Clase A", "26 dB"],
        coverage: "Hasta 40 m²",
      },
    ],
  },
  {
    brand: "Anwo",
    line: "Ecoflow",
    category: "aire-acondicionado",
    models: [
      {
        id: "anwo-ecoflow-9k",
        name: "Anwo Ecoflow 9.000 BTU",
        category: "aire-acondicionado",
        brand: "Anwo",
        line: "Ecoflow",
        image: "/images/productos/anwo-ecoflow-9k.webp",
        fichaUrl: "/fichas/anwo-ecoflow.pdf",
        price: 319990,
        originalPrice: 599990,
        todoIncluidoPrice: 419990,
        specs: ["Inverter frío/calor", "WiFi", "R32", "Clase A"],
        coverage: "Hasta 18 m²",
      },
      {
        id: "anwo-ecoflow-12k",
        name: "Anwo Ecoflow 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Anwo",
        line: "Ecoflow",
        image: "/images/productos/anwo-ecoflow-12k.webp",
        fichaUrl: "/fichas/anwo-ecoflow.pdf",
        price: 349990,
        originalPrice: 649990,
        todoIncluidoPrice: 449990,
        specs: ["Inverter frío/calor", "WiFi", "R32", "Clase A"],
        coverage: "Hasta 22 m²",
      },
      {
        id: "anwo-ecoflow-18k",
        name: "Anwo Ecoflow 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Anwo",
        line: "Ecoflow",
        image: "/images/productos/anwo-ecoflow-18k.webp",
        fichaUrl: "/fichas/anwo-ecoflow.pdf",
        price: 529990,
        originalPrice: 899990,
        todoIncluidoPrice: 629990,
        specs: ["Inverter frío/calor", "WiFi", "R32", "Clase A"],
        coverage: "Hasta 32 m²",
      },
      {
        id: "anwo-ecoflow-24k",
        name: "Anwo Ecoflow 24.000 BTU",
        category: "aire-acondicionado",
        brand: "Anwo",
        line: "Ecoflow",
        image: "/images/productos/anwo-ecoflow-24k.webp",
        fichaUrl: "/fichas/anwo-ecoflow.pdf",
        price: 649990,
        originalPrice: 1049990,
        todoIncluidoPrice: 749990,
        specs: ["Inverter frío/calor", "WiFi", "R32", "Clase A"],
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
        image: "/images/productos/samsung-windfree.webp",
        fichaUrl: "/fichas/samsung-windfree.pdf",
        price: 449990,
        originalPrice: 749990,
        todoIncluidoPrice: 549990,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "samsung-windfree-12k",
        name: "Samsung Wind-Free 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        image: "/images/productos/samsung-windfree.webp",
        fichaUrl: "/fichas/samsung-windfree.pdf",
        price: 529990,
        originalPrice: 799990,
        todoIncluidoPrice: 629990,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 22 m²",
      },
      {
        id: "samsung-windfree-18k",
        name: "Samsung Wind-Free 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        image: "/images/productos/samsung-windfree.webp",
        fichaUrl: "/fichas/samsung-windfree.pdf",
        price: 699990,
        originalPrice: 849990,
        todoIncluidoPrice: 799990,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 32 m²",
      },
      {
        id: "samsung-windfree-24k",
        name: "Samsung Wind-Free 24.000 BTU",
        category: "aire-acondicionado",
        brand: "Samsung",
        line: "Wind-Free",
        image: "/images/productos/samsung-windfree.webp",
        fichaUrl: "/fichas/samsung-windfree.pdf",
        price: 849990,
        originalPrice: 1055990,
        todoIncluidoPrice: 949990,
        specs: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        coverage: "Hasta 40 m²",
      },
    ],
  },
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
        image: "/images/productos/midea-inverter-xtra.webp",
        fichaUrl: "/fichas/midea-inverter-xtra.pdf",
        price: 299990,
        originalPrice: 479990,
        todoIncluidoPrice: 399990,
        specs: ["Inverter frío/calor", "Clase A", "20 dB"],
        coverage: "Hasta 17 m²",
      },
      {
        id: "midea-inverter-xtra-12k",
        name: "Midea Inverter Xtra 12.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Inverter Xtra",
        image: "/images/productos/midea-inverter-xtra.webp",
        fichaUrl: "/fichas/midea-inverter-xtra.pdf",
        price: 319990,
        originalPrice: 549990,
        todoIncluidoPrice: 419990,
        specs: ["Inverter frío/calor", "Clase A", "22 dB"],
        coverage: "Hasta 22 m²",
      },
      {
        id: "midea-inverter-xtra-18k",
        name: "Midea Inverter Xtra 18.000 BTU",
        category: "aire-acondicionado",
        brand: "Midea",
        line: "Inverter Xtra",
        image: "/images/productos/midea-inverter-xtra.webp",
        fichaUrl: "/fichas/midea-inverter-xtra.pdf",
        price: 499990,
        originalPrice: 749990,
        todoIncluidoPrice: 599990,
        specs: ["Inverter frío/calor", "Clase A", "24 dB"],
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
      image: "/images/productos/midea-lume-50l.webp",
      fichaUrl: "/fichas/midea-lume-50l.pdf",
      price: 149990,
      originalPrice: 199990,
      todoIncluidoPrice: 249990,
      specs: ["50 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-80l",
      name: "Midea Lume 80L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      image: "/images/productos/midea-lume-80l.webp",
      fichaUrl: "/fichas/midea-lume-80l.pdf",
      price: 179990,
      originalPrice: 249990,
      todoIncluidoPrice: 279990,
      specs: ["80 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-100l",
      name: "Midea Lume 100L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      image: "/images/productos/midea-lume-100l.webp",
      fichaUrl: "/fichas/midea-lume-100l.pdf",
      price: 219990,
      originalPrice: 299990,
      todoIncluidoPrice: 319990,
      specs: ["100 litros", "Eléctrico", "Acero esmaltado", "Termostato regulable"],
    },
    {
      id: "midea-lume-120l",
      name: "Midea Lume 120L",
      category: "termo-electrico",
      brand: "Midea",
      line: "Lume",
      image: "/images/productos/midea-lume-120l.webp",
      fichaUrl: "/fichas/midea-lume-120l.pdf",
      price: 249990,
      originalPrice: 319990,
      todoIncluidoPrice: 349990,
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
