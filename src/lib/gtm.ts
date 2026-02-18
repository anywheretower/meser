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

// Conversion events
export function trackFormSubmit(formData: Record<string, string>) {
  pushEvent({
    event: "form_submit",
    form_name: "cotizar",
    tipo_espacio: formData.tipoEspacio,
    ambientes: formData.ambientes,
    comuna: formData.comuna,
    necesidad: formData.necesidad,
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
