"use client";

import { useState } from "react";

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

const TOTAL_STEPS = 5;

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

export default function CotizarForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
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
        return formData.tipoEspacio !== "";
      case 2:
        return formData.ambientes !== "";
      case 3:
        return formData.comuna !== "";
      case 4:
        return formData.necesidad !== "";
      case 5:
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

  const handleSubmit = () => {
    // TODO: Send to API endpoint / webhook
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-gray-200 p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan rounded-full transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-8">
        {/* Step 1: Tipo de espacio */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">
              ¿Qué tipo de espacio quieres climatizar?
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { value: "departamento", label: "Departamento", icon: "🏢" },
                { value: "casa", label: "Casa", icon: "🏠" },
                { value: "oficina", label: "Oficina / Local", icon: "🏪" },
                { value: "otro", label: "Otro", icon: "📍" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateField("tipoEspacio", option.value);
                    setStep(2);
                  }}
                  className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                    formData.tipoEspacio === option.value
                      ? "border-cyan bg-cyan/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-sm font-medium text-navy">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Ambientes */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">
              ¿Cuántos ambientes?
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { value: "1", label: "1 ambiente" },
                { value: "2", label: "2 ambientes" },
                { value: "3", label: "3 ambientes" },
                { value: "4+", label: "4 o más" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateField("ambientes", option.value);
                    setStep(3);
                  }}
                  className={`rounded-xl border-2 p-4 text-center transition-all ${
                    formData.ambientes === option.value
                      ? "border-cyan bg-cyan/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-2xl font-bold text-navy">
                    {option.value}
                  </span>
                  <span className="block mt-1 text-xs text-steel-dark">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Comuna */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">
              ¿En qué comuna estás?
            </h2>
            <div className="mt-6">
              <select
                value={formData.comuna}
                onChange={(e) => {
                  updateField("comuna", e.target.value);
                  if (e.target.value) setStep(4);
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
        )}

        {/* Step 4: Necesidad */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">
              ¿Ya tienes equipo o necesitas uno?
            </h2>
            <div className="mt-6 space-y-3">
              {[
                {
                  value: "todo-incluido",
                  label: "Necesito equipo + instalación",
                  desc: "Todo incluido",
                },
                {
                  value: "solo-instalacion",
                  label: "Ya tengo equipo, solo necesito instalación",
                  desc: "Solo servicio",
                },
                {
                  value: "mantencion",
                  label: "Solo mantención",
                  desc: "Limpieza y revisión",
                },
                {
                  value: "asesoria",
                  label: "No estoy seguro — necesito asesoría",
                  desc: "Te ayudamos a decidir",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    updateField("necesidad", option.value);
                    setStep(5);
                  }}
                  className={`w-full flex items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                    formData.necesidad === option.value
                      ? "border-cyan bg-cyan/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div>
                    <span className="text-sm font-medium text-navy">
                      {option.label}
                    </span>
                    <span className="block mt-0.5 text-xs text-steel-dark">
                      {option.desc}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-steel shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Datos */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-semibold text-navy">Tus datos</h2>
            <p className="mt-1 text-sm text-steel-dark">
              Para contactarte con tu propuesta personalizada.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => updateField("nombre", e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => updateField("telefono", e.target.value)}
                  placeholder="+569 XXXX XXXX"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email{" "}
                  <span className="text-steel font-normal">(opcional)</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Comentario{" "}
                  <span className="text-steel font-normal">(opcional)</span>
                </label>
                <textarea
                  value={formData.comentario}
                  onChange={(e) => updateField("comentario", e.target.value)}
                  placeholder="¿Algo que debamos saber sobre tu espacio?"
                  rows={3}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-steel focus:border-cyan focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-sm font-medium text-steel-dark hover:text-navy transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              disabled={!canAdvance()}
              className="rounded-full bg-cyan px-8 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Enviar cotización
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canAdvance()}
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
