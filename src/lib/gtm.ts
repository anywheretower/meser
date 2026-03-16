export const GTM_ID = "GTM-PP3T3QKL";

type GTMEvent = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

export function pushEvent(data: GTMEvent) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

// ── Conversion events ──

export function trackFormSubmit(formData: Record<string, string>) {
  pushEvent({
    event: "form_submit",
    form_name: "cotizar",
    tipo_espacio: formData.tipoEspacio,
    ambientes: formData.ambientes,
    comuna: formData.comuna,
    necesidad: formData.necesidad,
  });
  // GA4 recommended event
  pushEvent({
    event: "generate_lead",
    currency: "CLP",
    value: 399990,
  });
}

export function trackFormStep(step: number, field: string, value: string) {
  pushEvent({
    event: "form_step",
    form_name: "cotizar",
    step_number: step,
    step_field: field,
    step_value: value,
  });
}

export function trackWhatsAppClick(location: string) {
  pushEvent({
    event: "whatsapp_click",
    click_location: location,
  });
}

export function trackPhoneClick(location: string) {
  pushEvent({
    event: "phone_click",
    click_location: location,
  });
}

export function trackCotizarClick(location: string) {
  pushEvent({
    event: "cotizar_click",
    click_location: location,
  });
}

// ── E-commerce events ──

export function trackAddToCart(productId: string, price: number, withInstallation: boolean) {
  pushEvent({
    event: "add_to_cart",
    product_id: productId,
    price,
    with_installation: withInstallation,
    currency: "CLP",
  });
}

export function trackViewProduct(productId: string, productName: string, price: number) {
  pushEvent({
    event: "view_item",
    product_id: productId,
    product_name: productName,
    price,
    currency: "CLP",
  });
}

// ── Engagement events ──

export function trackScrollDepth(percent: number) {
  pushEvent({
    event: "scroll_depth",
    scroll_percent: percent,
  });
}

export function trackCTAView(ctaName: string) {
  pushEvent({
    event: "cta_view",
    cta_name: ctaName,
  });
}
