"use client";

import { useState } from "react";
import { trackFormSubmit, trackFormStep, trackWhatsAppClick } from "@/lib/gtm";

const COMUNAS = [
  "Las Condes",
  "Vitacura",
  "Providencia",
  "Lo Barnechea",
  "Ñuñoa",
  "La Reina",
  "Peñalolén",
  "Santiago Centro",
  "Independencia",
  "Recoleta",
  "Macul",
  "La Florida",
  "Puente Alto",
  "Maipú",
  "Colina",
  "Chicureo",
  "Otra",
];

const TOTAL_STEPS = 3;

type FormData = {
  tipoEspacio: string;
  ambientes: string;
  comuna: string;
  necesidad: string;
  nombre: string;
  telefono: string;
  email: string;
  comentario: string;
};

export function QuickCapture() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleQuickSubmit = async () => {
    if (!phone.trim() || phone.trim().length < 8) return;
    setSending(true);
    try {
      await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telefono: phone, nombre: "Captura rápida", tipoEspacio: "", ambientes: "", comuna: "", necesidad: "", email: "", comentario: "Captura rápida — solicita llamada" }),
      });
      trackFormSubmit({ telefono: phone, nombre: "Captura rápida", tipoEspacio: "", ambientes: "", comuna: "", necesidad: "", email: "", comentario: "" });
      setSent(true);
    } catch {
      setSent(false);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <p className="text-sm text-green-400 font-medium">
        ¡Listo! Te llamamos en menos de 2 horas.
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-sm text-red-400 font-medium">
        Error al enviar. Intenta de nuevo o escríbenos al{" "}
        <a href="https://wa.me/56982351110" target="_blank" rel="noopener noreferrer" className="underline text-cyan">+569 8235 1110</a>.
      </p>
    );
  }

  return (
    <div className="flex gap-2">
      <input
        type="tel"
        aria-label="Número de teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+569 XXXX XXXX"
        className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-steel-light/50 focus:border-cyan focus:outline-none"
      />
      <button
        onClick={handleQuickSubmit}
        disabled={sending || phone.trim().length < 8}
        className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors disabled:opacity-40"
      >
        {sending ? "..." : "Llámame"}
      </button>
    </div>
  );
}

export default function CotizarForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    tipoEspacio: "",
    ambientes: "",
    comuna: "",
    necesidad: "",
    nombre: "",
    telefono: "",
    email: "",
    comentario: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canAdvance = () => {
    switch (step) {
      case 1:
        return formData.tipoEspacio !== "" && formData.ambientes !== "";
      case 2:
        return formData.comuna !== "" && formData.necesidad !== "";
      case 3:
        return formData.nombre.trim() !== "" && formData.telefono.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error al enviar");
      trackFormSubmit(formData);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("meser_form_submitted", "1");
      }
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-gray-200 p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-navy">
          ¡Listo! Recibimos tu solicitud
        </h2>
        <p className="mt-3 text-steel-dark leading-relaxed">
          Te contactaremos en menos de 2 horas para agendar tu diagnóstico
          gratuito por Zoom.
        </p>
        <p className="mt-4 text-sm text-steel-dark">
          Si prefieres hablar ahora:{" "}
          <a
            href="https://wa.me/56982351110"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan hover:text-cyan-dark"
            onClick={() => trackWhatsAppClick("cotizar_exito")}
          >
            +569 8235 1110
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
      {/* Progress bar */}
      <div className="px-8 pt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-steel-dark">
            Paso {step} de {TOTAL_STEPS}
          </span>
          <span className="text-xs text-steel">
            {Math.round((step / TOTAL_STEPS) * 100)}%
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={TOTAL_STEPS} aria-label={`Paso ${step} de ${TOTAL_STEPS}`}>
          <div
            className="h-full bg-cyan rounded-full transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-8" aria-live="polite">
        {/* Step 1: Tipo de espacio + Ambientes */}
        {step === 1 && (
          <div className="space-y-8">
            <fieldset>
              <legend className="text-xl font-semibold text-navy">
                ¿Qué tipo de espacio quieres climatizar?
              </legend>
              <div className="mt-4 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Tipo de espacio">
                {[
                  { value: "departamento", label: "Departamento", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2 22V6l10-4 10 4v16M2 22h20M6 10v2m4-2v2m4-2v2m-8 4v2m4-2v2m4-2v2" /></svg> },
                  { value: "casa", label: "Casa", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1V10" /></svg> },
                  { value: "oficina", label: "Oficina / Local", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4m0 0v10" /></svg> },
                  { value: "otro", label: "Otro", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all cursor-pointer focus-within:ring-2 focus-within:ring-cyan focus-within:ring-offset-2 ${
                      formData.tipoEspacio === option.value
                        ? "border-cyan bg-cyan/5 text-cyan"
                        : "border-gray-200 hover:border-gray-300 text-navy"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tipoEspacio"
                      value={option.value}
                      checked={formData.tipoEspacio === option.value}
                      onChange={() => {
                        updateField("tipoEspacio", option.value);
                        trackFormStep(1, "tipoEspacio", option.value);
                      }}
                      className="sr-only"
                    />
                    <span className="shrink-0">{option.icon}</span>
                    <span className="text-sm font-medium text-navy">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-lg font-semibold text-navy">
                ¿Cuántos ambientes?
              </legend>
              <div className="mt-4 grid grid-cols-4 gap-3" role="radiogroup" aria-label="Cantidad de ambientes">
                {[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4+", label: "4+" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`rounded-xl border-2 p-3 text-center transition-all cursor-pointer focus-within:ring-2 focus-within:ring-cyan focus-within:ring-offset-2 ${
                      formData.ambientes === option.value
                        ? "border-cyan bg-cyan/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="ambientes"
                      value={option.value}
                      checked={formData.ambientes === option.value}
                      onChange={() => {
                        updateField("ambientes", option.value);
                        trackFormStep(1, "ambientes", option.value);
                      }}
                      className="sr-only"
                    />
                    <span className="text-xl font-bold text-navy">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {/* Step 2: Comuna + Necesidad */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <label htmlFor="cotizar-comuna" className="block text-xl font-semibold text-navy">
                ¿En qué comuna estás?
              </label>
              <div className="mt-4">
                <select
                  id="cotizar-comuna"
                  value={formData.comuna}
                  onChange={(e) => {
                    updateField("comuna", e.target.value);
                    if (e.target.value) {
                      trackFormStep(2, "comuna", e.target.value);
                    }
                  }}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 text-sm text-navy bg-white focus:border-cyan focus:outline-none transition-colors"
                >
                  <option value="">Selecciona tu comuna</option>
                  {COMUNAS.map((comuna) => (
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset>
              <legend className="text-lg font-semibold text-navy">
                ¿Qué necesitas?
              </legend>
              <div className="mt-4 space-y-2" role="radiogroup" aria-label="Tipo de necesidad">
                {[
                  { value: "todo-incluido", label: "Equipo + instalación", desc: "Todo incluido" },
                  { value: "solo-instalacion", label: "Solo instalación (tengo equipo)", desc: "Solo servicio" },
                  { value: "mantencion", label: "Mantención", desc: "Limpieza y revisión" },
                  { value: "asesoria", label: "No estoy seguro", desc: "Asesoría gratuita" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`w-full flex items-center justify-between rounded-xl border-2 p-3.5 text-left transition-all cursor-pointer focus-within:ring-2 focus-within:ring-cyan focus-within:ring-offset-2 ${
                      formData.necesidad === option.value
                        ? "border-cyan bg-cyan/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="necesidad"
                      value={option.value}
                      checked={formData.necesidad === option.value}
                      onChange={() => {
                        updateField("necesidad", option.value);
                        trackFormStep(2, "necesidad", option.value);
                      }}
                      className="sr-only"
                    />
                    <div>
                      <span className="text-sm font-medium text-navy">{option.label}</span>
                      <span className="block mt-0.5 text-xs text-steel-dark">{option.desc}</span>
                    </div>
                    <svg className="w-4 h-4 text-steel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {/* Step 3: Datos de contacto */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">Tus datos</h2>
            <p className="mt-1 text-sm text-steel-dark">
              Para contactarte con tu propuesta personalizada.
            </p>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cotizar-nombre" className="block text-sm font-medium text-navy mb-1.5">
                    Nombre *
                  </label>
                  <input
                    id="cotizar-nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => updateField("nombre", e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="cotizar-telefono" className="block text-sm font-medium text-navy mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    id="cotizar-telefono"
                    type="tel"
                    required
                    pattern="\+?[0-9\s]{8,15}"
                    value={formData.telefono}
                    onChange={(e) => updateField("telefono", e.target.value)}
                    placeholder="+569 XXXX XXXX"
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cotizar-email" className="block text-sm font-medium text-navy mb-1.5">
                  Email{" "}
                  <span className="text-steel font-normal">(opcional)</span>
                </label>
                <input
                  id="cotizar-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="cotizar-comentario" className="block text-sm font-medium text-navy mb-1.5">
                  Comentario{" "}
                  <span className="text-steel font-normal">(opcional)</span>
                </label>
                <textarea
                  id="cotizar-comentario"
                  value={formData.comentario}
                  onChange={(e) => updateField("comentario", e.target.value)}
                  placeholder="¿Algo que debamos saber sobre tu espacio?"
                  rows={2}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div role="alert" className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            Error al enviar. Intenta de nuevo o contáctanos por{" "}
            <a href="https://wa.me/56982351110" target="_blank" rel="noopener noreferrer" className="font-semibold underline" onClick={() => trackWhatsAppClick("cotizar_error")}>
              WhatsApp
            </a>.
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handleBack}
              disabled={sending}
              className="flex items-center gap-1 text-sm font-medium text-steel-dark hover:text-navy transition-colors disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>
          ) : (
            <div />
          )}

          {step === TOTAL_STEPS ? (
            <button
              onClick={handleSubmit}
              disabled={!canAdvance() || sending}
              className="rounded-full bg-cyan px-8 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? "Enviando..." : "Agendar mi asesoría gratuita"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canAdvance()}
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === 1 ? "Elegir servicio" : "Completar datos"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
