import { allProducts } from "@/lib/products";

const BASE_URL = "https://www.meser.cl";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatPriceMerchant(price: number): string {
  return `${price} CLP`;
}

function buildProductEntry(product: typeof allProducts[number]): string {
  const isAire = product.category === "aire-acondicionado";
  const productUrl = isAire
    ? `${BASE_URL}/aires-acondicionados`
    : `${BASE_URL}/termos`;

  const imageUrl = product.image
    ? `${BASE_URL}${product.image}`
    : `${BASE_URL}/images/og-image.png`;

  const description = isAire
    ? `${product.name} - ${product.specs.join(", ")}. ${product.coverage || ""}. Precio todo incluido con instalación estética y garantía total en Santiago.`
    : `${product.name} - ${product.specs.join(", ")}. Entrega e instalación en Santiago.`;

  const googleCategory = isAire
    ? "2367" // Home > Heating, Ventilation & Air Conditioning
    : "2858"; // Home > Plumbing > Water Heaters

  const availability = product.price > 0 ? "in_stock" : "preorder";

  // Solo equipo entry
  const soloEquipo = product.price > 0 ? `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <title>${escapeXml(product.name)}</title>
      <description>${escapeXml(description.trim())}</description>
      <link>${productUrl}</link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:price>${formatPriceMerchant(product.price)}</g:price>
      ${product.originalPrice > 0 ? `<g:sale_price>${formatPriceMerchant(product.price)}</g:sale_price>` : ""}
      <g:availability>${availability}</g:availability>
      <g:condition>new</g:condition>
      <g:brand>${escapeXml(product.brand)}</g:brand>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${isAire ? "Climatización > Aires Acondicionados" : "Climatización > Termos Eléctricos"}</g:product_type>
      <g:custom_label_0>${escapeXml(product.line)}</g:custom_label_0>
      <g:custom_label_1>solo_equipo</g:custom_label_1>
      <g:shipping>
        <g:country>CL</g:country>
        <g:service>Despacho Santiago</g:service>
        <g:price>0 CLP</g:price>
      </g:shipping>
    </item>` : "";

  // Con instalación entry
  const conInstalacion = `
    <item>
      <g:id>${escapeXml(product.id)}-instalado</g:id>
      <title>${escapeXml(product.name)} — Con Instalación Todo Incluido</title>
      <description>${escapeXml(`${product.name} con instalación estética profesional incluida. ${product.specs.join(", ")}. ${product.coverage || ""}. Precio cerrado: equipo + instalación + garantía total. Santiago, Chile.`.trim())}</description>
      <link>${BASE_URL}/todo-incluido</link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:price>${formatPriceMerchant(product.todoIncluidoPrice)}</g:price>
      <g:availability>in_stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>${escapeXml(product.brand)}</g:brand>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${isAire ? "Climatización > Aires Acondicionados > Todo Incluido" : "Climatización > Termos Eléctricos > Con Instalación"}</g:product_type>
      <g:custom_label_0>${escapeXml(product.line)}</g:custom_label_0>
      <g:custom_label_1>todo_incluido</g:custom_label_1>
      <g:shipping>
        <g:country>CL</g:country>
        <g:service>Instalación en Santiago</g:service>
        <g:price>0 CLP</g:price>
      </g:shipping>
    </item>`;

  return soloEquipo + conInstalacion;
}

export async function GET() {
  const items = allProducts.map(buildProductEntry).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Meser — Catálogo de Productos</title>
    <link>${BASE_URL}</link>
    <description>Aires acondicionados y termos eléctricos con instalación incluida en Santiago, Chile. Precio cerrado, garantía total.</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
