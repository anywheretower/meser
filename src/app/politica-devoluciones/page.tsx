import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Devoluciones y Garantía",
  description:
    "Política de devoluciones, cambios y garantía de Meser. Conforme a la Ley 19.496 de Protección al Consumidor de Chile.",
  alternates: { canonical: "/politica-devoluciones" },
  robots: { index: true, follow: true },
};

export default function PoliticaDevolucionesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Política de Devoluciones" }]} />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            Política de Devoluciones y Garantía
          </h1>
          <p className="mt-4 text-sm text-steel-dark">
            Última actualización: 24 de marzo de 2026
          </p>

          <div className="mt-10 space-y-10 text-sm text-navy/80 leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                1. Marco legal aplicable
              </h2>
              <p className="mt-3">
                Esta política se rige por la{" "}
                <strong>Ley N° 19.496 sobre Protección de los Derechos de los
                Consumidores</strong> de Chile y sus modificaciones vigentes.
                Todo lo no contemplado en esta política se resolverá conforme
                a dicha ley.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                2. Derecho de retracto (compras a distancia)
              </h2>
              <p className="mt-3">
                De acuerdo con el artículo 3 bis de la Ley 19.496, el
                consumidor que compre a través de nuestro sitio web tiene
                derecho a retractarse dentro de los{" "}
                <strong>10 días corridos</strong> desde la recepción del
                producto, siempre que:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>El producto no haya sido instalado ni utilizado.</li>
                <li>
                  Se encuentre en su embalaje original, con todos sus
                  accesorios y sin daños.
                </li>
                <li>
                  El servicio de instalación no haya sido ejecutado.
                </li>
              </ul>
              <p className="mt-3">
                Una vez que el equipo ha sido instalado, el derecho de
                retracto no aplica dado que el servicio ya fue prestado.
              </p>
              <p className="mt-3">
                En caso de retracto, Meser devolverá el dinero íntegro del
                producto, pero <strong>cobrará el valor del retiro y despacho
                del equipo</strong>.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                3. Productos defectuosos — Garantía legal
              </h2>
              <p className="mt-3">
                De conformidad con los artículos 19 y 20 de la Ley 19.496,
                si el producto presenta{" "}
                <strong>defectos de fabricación, vicios ocultos o no
                corresponde a las especificaciones informadas</strong>, el
                consumidor tiene derecho a elegir entre:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  La <strong>reparación gratuita</strong> del producto.
                </li>
                <li>
                  El <strong>cambio</strong> por un producto nuevo equivalente.
                </li>
                <li>
                  La <strong>devolución del dinero</strong> pagado.
                </li>
              </ul>
              <p className="mt-3">
                Este derecho puede ejercerse dentro de los{" "}
                <strong>6 meses</strong> siguientes a la recepción del
                producto (garantía legal ampliada desde 2022). Si el
                fabricante ofrece una garantía mayor, prevalece la de mayor
                plazo.
              </p>
              <p className="mt-3">
                Para hacer efectiva la garantía legal, <strong>no se exigirá
                el embalaje original</strong> del producto (conforme a lo
                establecido por SERNAC). El retiro del equipo no tiene
                costo para el consumidor.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                4. Garantía Meser (equipo + instalación)
              </h2>
              <p className="mt-3">
                Además de la garantía legal, Meser ofrece garantía sobre la
                instalación realizada por nuestros técnicos. Si se detecta un
                problema atribuible a la instalación, Meser se hace cargo de
                la reparación sin costo adicional para el cliente.
              </p>
              <p className="mt-3">
                Para hacer efectiva la garantía, contacte a nuestro equipo
                indicando el problema detectado. Evaluaremos la situación y
                coordinaremos la solución en el menor plazo posible.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                5. Cambios de producto
              </h2>
              <p className="mt-3">
                Aceptamos cambios de producto (por ejemplo, cambio de modelo
                o capacidad) siempre que:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>El equipo no haya sido instalado.</li>
                <li>Se encuentre en su estado y embalaje original.</li>
                <li>
                  La solicitud se realice dentro de los{" "}
                  <strong>10 días corridos</strong> desde la recepción.
                </li>
              </ul>
              <p className="mt-3">
                Si el producto de reemplazo tiene un precio diferente, se
                ajustará la diferencia (cobro o devolución según corresponda).
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                6. Exclusiones
              </h2>
              <p className="mt-3">No se aceptan devoluciones ni cambios en los siguientes casos:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  Daños causados por mal uso, negligencia, manipulación
                  indebida o instalación realizada por terceros no
                  autorizados por Meser.
                </li>
                <li>
                  Desgaste normal por uso prolongado del equipo.
                </li>
                <li>
                  Productos que hayan sido modificados, alterados o
                  reparados por personas no autorizadas.
                </li>
                <li>
                  Servicios de instalación o mantención ya ejecutados
                  (salvo defectos atribuibles a Meser).
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                7. Procedimiento para solicitar devolución o cambio
              </h2>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li>
                  Contacte a Meser por{" "}
                  <strong>WhatsApp (+569 8235 1110)</strong> o{" "}
                  <strong>email (contacto@meser.cl)</strong> indicando su
                  nombre, producto adquirido y motivo de la solicitud.
                </li>
                <li>
                  Nuestro equipo evaluará la solicitud y le informará los
                  pasos a seguir dentro de <strong>48 horas hábiles</strong>.
                </li>
                <li>
                  Si corresponde la devolución del dinero, se realizará
                  mediante el mismo medio de pago utilizado en la compra,
                  dentro de los <strong>10 días hábiles</strong> siguientes
                  a la aprobación.
                </li>
              </ol>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                8. Contacto
              </h2>
              <p className="mt-3">
                Para cualquier consulta sobre esta política:
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  <strong>WhatsApp:</strong> +569 8235 1110
                </li>
                <li>
                  <strong>Email:</strong> contacto@meser.cl
                </li>
                <li>
                  <strong>Dirección:</strong> Los Militares 5620, Of. 905,
                  Las Condes, Santiago
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="text-xs text-steel-dark">
                Esta política es un resumen informativo y no reemplaza ni
                limita los derechos que la legislación chilena otorga a los
                consumidores. En caso de discrepancia, prevalece la Ley
                N° 19.496 y la normativa vigente. Meser se reserva el
                derecho de actualizar esta política. La versión vigente
                estará siempre disponible en esta página.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contacto"
              className="text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              ¿Tienes dudas? Contáctanos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
