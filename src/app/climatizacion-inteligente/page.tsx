import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Climatización Inteligente · Control WiFi · Domótica · IA",
  description:
    "Controla tu aire acondicionado desde el celular, con WiFi, asistentes de voz e inteligencia artificial. Samsung SmartThings y Midea AIR app. Meser Santiago.",
};

export default function ClimatizacionInteligentePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan/10 border border-cyan/20 px-4 py-1.5 text-sm font-medium text-cyan mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
              </svg>
              WiFi · IA · Domótica
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tu aire acondicionado, inteligente de verdad
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Control desde el celular · Asistentes de voz · Inteligencia artificial · Automatización total
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              Los equipos Samsung y Midea que instalamos incluyen conectividad WiFi
              integrada. Controla la temperatura desde cualquier lugar, programa
              horarios inteligentes y deja que la IA optimice tu consumo energético
              automáticamente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Cotiza tu equipo inteligente
              </Link>
              <Link
                href="/aires-acondicionados"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Ver equipos disponibles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Control desde el celular */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Tu clima, en la palma de tu mano
            </h2>
            <p className="mt-4 text-lg text-steel-dark">
              No necesitas estar en casa para controlar tu aire acondicionado.
              Desde tu smartphone, tenés el control total.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Encender y apagar remoto",
                text: "Llegando a casa en 15 minutos? Enciende el aire desde el auto y llega a un ambiente perfecto.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                ),
              },
              {
                title: "Temperatura exacta",
                text: "Ajusta grados, velocidad del ventilador y modo de operación desde la app. Sin levantarte del sillón.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ),
              },
              {
                title: "Programación semanal",
                text: "Configura horarios diferentes para cada día. Lunes a viernes a las 7am, fines de semana a las 10am.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan/10 text-cyan flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-steel-dark leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Samsung y Midea */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Las apps que controlan tu clima
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Samsung */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Samsung SmartThings</h3>
                  <p className="text-sm text-steel-dark">Equipos Wind-Free</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Control remoto desde cualquier lugar del mundo",
                  "Monitoreo de consumo energético en tiempo real",
                  "Modo AI Energy que aprende tus patrones",
                  "Compatible con Google Home, Alexa y Bixby",
                  "Notificaciones de mantención y filtros",
                  "Control por voz: \"Ok Google, pon el aire en 22 grados\"",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-steel-dark">
                    <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Midea */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <span className="text-xl font-bold text-emerald-600">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Midea AIR App</h3>
                  <p className="text-sm text-steel-dark">Equipos EcoMaster y Consola</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Encendido y apagado desde el celular vía WiFi",
                  "Programación de horarios personalizados",
                  "Modo ECO inteligente que reduce consumo hasta 60%",
                  "Compatible con Google Home y Amazon Alexa",
                  "Control de múltiples equipos en una sola app",
                  "Historial de uso y estadísticas de consumo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-steel-dark">
                    <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inteligencia Artificial */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Inteligencia artificial que aprende de ti
            </h2>
            <p className="mt-4 text-lg text-steel-dark">
              Los equipos modernos no solo enfrían — piensan. La IA integrada analiza
              tu comportamiento y optimiza el confort automáticamente.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sensor de presencia",
                text: "Detecta si hay personas en la habitación. Si sales, baja la potencia. Si vuelves, se reactiva.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                title: "Aprendizaje de hábitos",
                text: "Después de unas semanas, el equipo sabe a qué hora llegas y prepara la temperatura ideal.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "Ahorro energético IA",
                text: "Optimiza ciclos de encendido/apagado para consumir lo mínimo sin sacrificar confort.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Clima adaptativo",
                text: "Ajusta la intensidad según la temperatura exterior, humedad y hora del día. Sin que toques nada.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asistentes de voz */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Compatible con tus asistentes de voz
          </h2>
          <p className="mt-4 text-lg text-steel-dark text-center">
            Solo di lo que necesitas. Tu aire obedece.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Google Home",
                command: "\"Ok Google, pon el aire en 23 grados\"",
                color: "bg-blue-50 text-blue-600",
              },
              {
                name: "Amazon Alexa",
                command: "\"Alexa, enciende el aire del dormitorio\"",
                color: "bg-sky-50 text-sky-600",
              },
              {
                name: "Samsung Bixby",
                command: "\"Bixby, activa modo nocturno en el aire\"",
                color: "bg-indigo-50 text-indigo-600",
              },
            ].map((assistant) => (
              <div
                key={assistant.name}
                className="rounded-2xl bg-white border border-gray-200 p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${assistant.color} flex items-center justify-center mx-auto`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{assistant.name}</h3>
                <p className="mt-2 text-sm text-steel italic">{assistant.command}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domótica y automatización */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Integración con tu hogar inteligente
            </h2>
            <p className="mt-4 text-lg text-steel-dark">
              Tu aire acondicionado puede ser parte de un ecosistema completo de
              domótica. Automatiza todo.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Rutinas automáticas",
                text: "\"Cuando llego a casa\" → se enciende el aire, se bajan las persianas, se prende la luz del living. Todo automático.",
              },
              {
                title: "Geolocalización",
                text: "El aire se enciende cuando estás a 10 minutos de tu casa y se apaga cuando sales. Sin tocar nada.",
              },
              {
                title: "Sensores de temperatura",
                text: "Conecta sensores en distintas habitaciones y el sistema equilibra la temperatura en toda la casa.",
              },
              {
                title: "Escenas personalizadas",
                text: "\"Modo película\": aire en 22°, luces tenues, cortinas cerradas. Un botón y listo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 text-cyan flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel-dark leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wind-Free highlight */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Samsung Wind-Free: la tecnología más avanzada
            </h2>
            <p className="mt-4 text-steel-light text-center max-w-2xl mx-auto">
              23.000 micro-orificios dispersan el aire frío sin corrientes directas.
              No sientes el viento, solo la temperatura perfecta.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { stat: "AI Auto", desc: "La IA analiza el espacio y ajusta el flujo de aire óptimo" },
                { stat: "Motion Detect", desc: "Sensor de movimiento redirige el aire donde estás" },
                { stat: "SmartThings", desc: "Control total desde tu celular, en cualquier lugar" },
              ].map((item) => (
                <div key={item.stat} className="text-center">
                  <p className="text-xl font-bold text-cyan">{item.stat}</p>
                  <p className="mt-2 text-sm text-steel-light">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/aires-acondicionados"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Ver equipos Samsung Wind-Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "¿Necesito WiFi en mi casa para usar estas funciones?",
                a: "Sí, necesitas una red WiFi 2.4 GHz (la que tienen la mayoría de los routers). La configuración es simple: descargas la app, conectas el equipo y listo. Te ayudamos en la puesta en marcha.",
              },
              {
                q: "¿Todos los equipos que venden tienen WiFi?",
                a: "Sí. Todos los equipos Samsung Wind-Free y Midea EcoMaster que instalamos incluyen módulo WiFi integrado de fábrica. No necesitas comprar adaptadores adicionales.",
              },
              {
                q: "¿Puedo controlar varios equipos desde una sola app?",
                a: "Sí. Tanto SmartThings (Samsung) como Midea AIR permiten controlar múltiples equipos desde la misma cuenta. Ideal para casas con multi-split o varios ambientes.",
              },
              {
                q: "¿La inteligencia artificial consume más electricidad?",
                a: "Al contrario. Los modos de IA optimizan el consumo, reduciendo el gasto energético entre un 20% y 60% respecto al uso manual. La IA trabaja para que gastes menos.",
              },
              {
                q: "¿Meser me ayuda a configurar la app y la domótica?",
                a: "Sí. La puesta en marcha incluye configurar la app en tu celular, conectar el equipo al WiFi y enseñarte a usar todas las funciones inteligentes. Sin costo adicional.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-steel shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-steel-dark leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Quieres climatización inteligente en tu hogar?"
        text="Todos nuestros equipos incluyen WiFi y control desde el celular. Cotiza sin compromiso y te asesoramos sobre la mejor opción para tu casa."
        ctaLabel="Cotiza tu equipo inteligente"
        whatsapp
      />
    </>
  );
}
