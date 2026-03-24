import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogPostLayout from "@/components/BlogPostLayout";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.titulo,
    description: post.descripcion,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.titulo,
      description: post.descripcion,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.fecha,
      authors: ["Meser"],
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 600, alt: post.imageAlt || post.titulo }],
      }),
    },
  };
}

/* ─── Article content per slug ─── */

function ArticleCuantoCuesta() {
  return (
    <>
      <p>
        <strong>Instalar un aire acondicionado split en Chile cuesta entre $120.000 y $200.000 CLP
        solo la instalación, o entre $399.990 y $949.990 con equipo Inverter incluido (precios
        marzo 2026).</strong> Según datos de Meser, empresa con más de 150 instalaciones en Santiago,
        el modelo todo incluido ahorra entre $130.000 y $222.000 versus comprar equipo e instalación
        por separado.
      </p>
      <p>
        El costo varía según el tipo de equipo, la capacidad (BTU), la complejidad de
        la instalación y si incluye o no el equipo mismo. Acá te dejamos un
        resumen actualizado con rangos basados en precios del mercado chileno
        para empresas formales que entregan garantía por su trabajo.
      </p>

      <div className="tip-box">
        <p><strong>Resumen:</strong> La instalación sola de un aire acondicionado split en Chile cuesta entre $120.000 y $200.000 CLP para un equipo estándar de hasta 12.000 BTU. Si necesitas equipo incluido, los paquetes todo incluido (equipo + instalación + garantía) van desde $399.990 para un 9K BTU hasta $949.990 para un 24K BTU con Samsung Wind-Free. El factor que más impacta el precio es la complejidad de la instalación: distancia entre unidades, perforaciones adicionales, pisos altos o instalaciones multi split. Comprar por separado (equipo en retail + instalador independiente) suele costar entre $130.000 y $222.000 más que un paquete integrado, según datos de Meser basados en más de 150 instalaciones en Santiago.</p>
      </div>

      <h2>Instalación sola (sin incluir el equipo)</h2>

      <ul>
        <li>
          <strong>Instalación básica split mural</strong> (la más común en casas
          y departamentos): <strong>$120.000 – $200.000 CLP</strong> (promedio
          $120.000 – $170.000) por una instalación estándar de hasta 3–4 metros
          de cañerías, soportes, perforación, desagüe y sellado.
        </li>
        <li>
          <strong>Instalaciones más complejas</strong> o de mayor capacidad
          (18.000–24.000 BTU): <strong>$180.000 – $250.000 CLP</strong>.
        </li>
        <li>
          <strong>Multisplit</strong> (varias unidades interiores): Varía
          bastante dependiendo de la distancia entre las unidades, desde
          $500.000 en adelante. Para una unidad 2-1 dentro de un departamento
          estándar alrededor de <strong>$700.000 CLP</strong>.
        </li>
        <li>
          <strong>Equipos tipo ductos o cassette</strong>: Desde $350.000, pero
          se debe considerar extra el costo de los materiales.
        </li>
      </ul>

      <h2>Equipo + instalación: rangos de precio</h2>

      <table>
        <thead>
          <tr>
            <th>Capacidad</th>
            <th>Uso típico</th>
            <th>Rango de precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9.000 – 12.000 BTU</td>
            <td>Habitación mediana o living pequeño</td>
            <td>$450.000 – $550.000</td>
          </tr>
          <tr>
            <td>18.000 BTU</td>
            <td>Living-comedor o espacio mediano-grande</td>
            <td>$650.000 – $850.000</td>
          </tr>
          <tr>
            <td>24.000 BTU o más</td>
            <td>Espacios grandes</td>
            <td>$900.000 – $1.500.000</td>
          </tr>
        </tbody>
      </table>

      <p>
        En Meser, nuestros{" "}
        <Link href="/todo-incluido" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
          paquetes todo incluido
        </Link>{" "}
        parten desde <strong>$399.990</strong> con equipo Inverter frío/calor,
        instalación estética y garantía total. Precio cerrado, cero sorpresas.
      </p>

      <h2>Factores que incrementan el costo de la instalación</h2>

      <ul>
        <li>
          <strong>Distancia entre unidades:</strong> cada metro adicional de cañería
          sobre los 3-4 metros estándar suma entre $8.000 y $15.000. En departamentos
          donde la unidad exterior queda lejos (balcón trasero vs habitación frontal),
          esto puede sumar $50.000-$100.000 al costo total.
        </li>
        <li>
          <strong>Perforación en hormigón o losa:</strong> un muro de hormigón armado
          requiere perforación diamantada ($30.000-$50.000 por perforación). Los muros
          de tabiquería son mucho más simples y económicos.
        </li>
        <li>
          <strong>Altura y acceso:</strong> instalaciones en pisos altos sin ascensor
          de carga (común en edificios antiguos de Providencia y Ñuñoa) requieren más
          mano de obra para subir el equipo exterior (~45 kg).
        </li>
        <li>
          <strong>Canaletas y terminaciones estéticas:</strong> las canaletas ocultas
          pintadas al tono de la pared cuestan entre $15.000 y $30.000 adicionales,
          pero son obligatorias en muchos edificios post-2010.
        </li>
        <li>
          <strong>Circuito eléctrico dedicado:</strong> si tu tablero no tiene un
          automático libre, necesitarás uno nuevo ($40.000-$80.000). Los equipos de
          18K BTU o más generalmente requieren circuito independiente.
        </li>
      </ul>

      <h2>Comprar por separado vs todo incluido</h2>

      <p>
        La tentación de comprar el equipo en un retail grande y buscar un instalador
        aparte es comprensible. Pero en la práctica, este enfoque suele salir más caro
        y con más riesgo:
      </p>

      <ul>
        <li>
          <strong>Precio real por separado:</strong> equipo Midea 9K BTU en retail
          ($299.990-$329.990) + instalación independiente ($150.000-$200.000) = <strong>$449.990-$529.990</strong>.
        </li>
        <li>
          <strong>Precio todo incluido Meser:</strong> mismo equipo + instalación estética +
          garantía integral = <strong>$399.990</strong>. Ahorro inmediato de $50.000-$130.000.
        </li>
        <li>
          <strong>Garantía dividida:</strong> si compras por separado, la garantía del equipo
          es del fabricante y la de instalación del técnico. Si algo falla, cada uno culpa al
          otro. Con todo incluido, un solo responsable.
        </li>
      </ul>

      <h2>Recomendación práctica</h2>

      <p>
        Pide al menos 3 cotizaciones de empresas especialistas en climatización
        que funcionan todo el año, no solo en temporada alta (verano). Esto
        asegura que en caso de inconveniente, siempre tendrás asistencia directa
        en tu hogar.
      </p>

      <p>
        Hoy los grandes retailers ofrecen servicio de instalación y
        subcontratan técnicos que no siempre tienen la idoneidad y conocimientos
        necesarios en caso de problemas. Antes de contratar, verifica:
      </p>

      <ul>
        <li>Que entreguen <strong>precio cerrado</strong> por escrito (sin &ldquo;extras&rdquo; después).</li>
        <li>Que la garantía cubra <strong>equipo e instalación</strong> de forma conjunta.</li>
        <li>Que incluyan <strong>puesta en marcha y prueba de rendimiento</strong> documentada.</li>
        <li>Que tengan <strong>oficina o contacto directo</strong>, no solo un número de celular.</li>
      </ul>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> Con nuestro modelo{" "}
          <Link href="/todo-incluido" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            todo incluido
          </Link>
          , el precio que te damos es el precio que pagas. Sin extras, sin
          sorpresas. Agenda tu{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito por Zoom
          </Link>{" "}
          y conoce tu precio cerrado.
        </p>
      </div>
    </>
  );
}

function ArticleDepartamentoSantiago() {
  return (
    <>
      <p>
        Para elegir el aire acondicionado ideal para tu departamento en la
        Región Metropolitana, debes considerar el clima de la capital: veranos
        secos y calurosos (picos de 32–38 °C), inviernos fríos (cerca de 0 °C
        en noches), contaminación y departamentos con buena orientación solar o
        mala ventilación. La mayoría opta por{" "}
        <strong>split inverter frío/calor</strong> por eficiencia, bajo ruido y
        ahorro en electricidad.
      </p>

      <div className="tip-box">
        <p><strong>Guía rápida:</strong> Para elegir el aire acondicionado ideal para un departamento en Santiago, calcula 600-800 BTU por metro cuadrado. Un dormitorio de 15 m² necesita 9.000 BTU, un living de 24 m² necesita 12.000 BTU. Prioriza equipos Inverter frío/calor por el clima extremo de Santiago (38°C en verano, cerca de 0°C en invierno). En ruido, busca menos de 22 dB para dormitorios. Samsung Wind-Free y Midea EcoMaster son las marcas más instaladas en departamentos de la RM. Si tu departamento recibe sol directo en la tarde (orientación poniente), sube un 15-20% la capacidad calculada.</p>
      </div>

      <h2>1. Calcula los BTU necesarios</h2>

      <p>
        Es el factor más importante. Para cielos estándar (2,4–2,7 m) y clima
        santiaguino, la base es{" "}
        <strong>
          600–800{" "}
          <Link href="/blog/que-son-los-btu" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            BTU
          </Link>{" "}
          por m²
        </strong>{" "}
        (más alto si hay mucho sol, ventanales grandes, piso alto expuesto o
        mala aislación).
      </p>

      <p>Ajustes comunes en departamentos de Santiago:</p>
      <ul>
        <li>Exposición norte/oeste (sol directo tarde): +20–30%.</li>
        <li>
          Muchas personas o equipos electrónicos: +500–1.000 BTU por persona
          extra o PC/TV.
        </li>
      </ul>

      <h3>Tabla orientativa para departamentos (split mural)</h3>

      <table>
        <thead>
          <tr>
            <th>Espacio típico</th>
            <th>Superficie</th>
            <th>BTU recomendados</th>
            <th>Uso en Santiago</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dormitorio pequeño</td>
            <td>9–14 m²</td>
            <td>9.000 BTU</td>
            <td>Habitación 1 persona</td>
          </tr>
          <tr>
            <td>Dormitorio mediano</td>
            <td>14–20 m²</td>
            <td>12.000 BTU</td>
            <td>Con ventanal o sol directo</td>
          </tr>
          <tr>
            <td>Living-comedor pequeño</td>
            <td>18–25 m²</td>
            <td>12.000–18.000 BTU</td>
            <td>Depto 1–2 dormitorios</td>
          </tr>
          <tr>
            <td>Living-comedor mediano/grande</td>
            <td>25–40 m²</td>
            <td>18.000–24.000 BTU</td>
            <td>Espacio abierto, familia</td>
          </tr>
          <tr>
            <td>Departamento completo</td>
            <td>50–90 m²</td>
            <td>
              2–3 unidades o{" "}
              <Link href="/blog/multi-split-departamento" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
                multi split
              </Link>
            </td>
            <td>2–3 ambientes independientes</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Ejemplo:</strong> Living de 30 m² con ventanal norte → apunta a
        18.000–24.000 BTU para enfriar rápido y calefaccionar en invierno sin
        esfuerzo.
      </p>

      <h2>2. Tipo de equipo: elige el más adecuado</h2>

      <ul>
        <li>
          <strong>Split mural inverter frío/calor</strong> → 90% de las ventas.
          Silencioso (20–35 dB), eficiente, WiFi en modelos medios-altos.
        </li>
        <li>
          <strong>Portátil</strong> → Solo si no puedes instalar (arriendo,
          condominio restrictivo). Menos eficiente, ruidoso, más caro en
          consumo.
        </li>
        <li>
          <strong>
            <Link href="/blog/multi-split-departamento" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
              Multi split
            </Link>
          </strong>{" "}
          → Si quieres climatizar 2–4 habitaciones con un solo condensador
          exterior (ideal en edificios con límite de unidades exteriores).
        </li>
        <li>
          Evita ventana o cassette si no tienes espacio o permisos.
        </li>
      </ul>

      <h2>3. Eficiencia energética (ahorro en cuenta de luz)</h2>

      <p>
        Busca <strong>inverter</strong> (ahorra 30–50% vs. on/off tradicional).
        Revisa la etiqueta de eficiencia energética (SEC o similar):
      </p>

      <ul>
        <li>Clasificación A o superior (ideal A+ o A++).</li>
        <li>Consumo anual aproximado (kWh/año) en frío y calor.</li>
        <li>
          En Santiago, un 12.000 BTU inverter usa ~0,8–1,2 kWh/h en uso real
          (vs. 1,5–2 kWh en no-inverter).
        </li>
      </ul>

      <h2>4. Funciones útiles para Santiago</h2>

      <ul>
        <li>
          <strong>Frío/calor</strong> (imprescindible por inviernos).
        </li>
        <li>
          <strong>WiFi/app</strong> (control remoto, programación).
        </li>
        <li>
          <strong>Filtro anti PM2.5 / plasma / ionizador</strong> (muy útil por
          contaminación).
        </li>
        <li>
          <strong>Modo silencioso</strong> (noche).
        </li>
        <li>
          <strong>Auto-limpieza y deshumidificador</strong> (veranos secos pero
          a veces húmedos).
        </li>
      </ul>

      <h2>5. Consideraciones específicas de departamento</h2>

      <ul>
        <li>
          <strong>Permisos del condominio:</strong> Revisa reglamento interno.
          Muchos permiten solo 1 unidad exterior por depto. Pide autorización
          escrita antes.
        </li>
        <li>
          <strong>Ubicación condensador:</strong> Fachada, balcón, terraza o
          patio interior. Evita multas o problemas con vecinos.
        </li>
        <li>
          <strong>Instalación:</strong> Distancia máxima ~5–7 m entre unidades
          (más caro si pasa por losa o requiere andamios).
        </li>
        <li>
          <strong>Marcas recomendadas 2026:</strong> Midea, Anwo y Samsung.
          Evita marcas muy baratas sin repuestos.
        </li>
      </ul>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> ¿No sabes por dónde empezar? Agenda un{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito por Zoom
          </Link>{" "}
          y te ayudamos a elegir el equipo perfecto para tu departamento. Revisa
          nuestras{" "}
          <Link href="/soluciones/departamento" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            soluciones para departamento
          </Link>
          .
        </p>
      </div>
    </>
  );
}

function ArticleMideaVsSamsung() {
  return (
    <>
      <p>
        <strong>Para la mayoría de los hogares en Santiago, Midea EcoMaster ofrece la mejor
        relación calidad-precio desde $449.990 con instalación incluida. Samsung Wind-Free
        es la opción premium desde $629.990, ideal para quienes priorizan silencio total
        (~19 dB) y tecnología smart avanzada.</strong> En la experiencia de Meser, con más
        de 150 instalaciones en la Región Metropolitana, ambas marcas son excelentes — la
        elección depende de tu presupuesto y prioridades.
      </p>
      <p>
        Aquí va una comparación actualizada y equilibrada basada en reseñas,
        comparativas y opiniones recientes (2025-2026).
      </p>

      <div className="tip-box">
        <p><strong>Veredicto:</strong> Midea EcoMaster gana en relación calidad-precio y eficiencia energética (SEER 22.5 vs 21.7 de Samsung). Samsung Wind-Free gana en silencio (19 dB vs 22 dB), tecnología smart (SmartThings + IA) y diseño minimalista. Ambas marcas ofrecen Inverter frío/calor, conectividad WiFi y garantía del fabricante. En el mercado chileno 2026, Midea cuesta entre $399.990-$629.990 todo incluido y Samsung entre $629.990-$949.990. Si tu presupuesto es limitado, Midea. Si priorizas tecnología y silencio absoluto, Samsung. En ambos casos, la instalación profesional es idéntica.</p>
      </div>

      <h2>Comparación rápida: Midea vs Samsung</h2>

      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Midea</th>
            <th>Samsung</th>
            <th>Ganador</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Precio</td>
            <td>Más económico (mejor relación calidad-precio)</td>
            <td>Más caro (premium)</td>
            <td><strong>Midea</strong></td>
          </tr>
          <tr>
            <td>Eficiencia energética</td>
            <td>Excelente, ahorro hasta 70-72%, muchos 5 estrellas</td>
            <td>Muy buena (Wind-Free ahorra mucho)</td>
            <td>Empate / Midea</td>
          </tr>
          <tr>
            <td>Tecnología y funciones</td>
            <td>Inverter Quattro, WiFi, aire puro, silencioso</td>
            <td>Wind-Free, Digital Inverter, SmartThings, IA</td>
            <td><strong>Samsung</strong></td>
          </tr>
          <tr>
            <td>Silencio</td>
            <td>Muy silencioso (modelos Blanc, Xtreme)</td>
            <td>Wind-Free ultra-silencioso en modo bajo</td>
            <td>Empate / Samsung</td>
          </tr>
          <tr>
            <td>Fiabilidad / Durabilidad</td>
            <td>Buena, n°1 mundial en volumen</td>
            <td>Muy confiable, mejor percepción largo plazo</td>
            <td><strong>Samsung</strong></td>
          </tr>
          <tr>
            <td>Servicio postventa</td>
            <td>Variable, mejorando</td>
            <td>Excelente red global</td>
            <td><strong>Midea</strong></td>
          </tr>
          <tr>
            <td>Diseño y extras</td>
            <td>Moderno y funcional</td>
            <td>Elegante, premium, smart home</td>
            <td><strong>Samsung</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>¿Cuál elegir para tu hogar?</h2>

      <h3>Elige Midea si...</h3>
      <p>
        Buscas la <strong>mejor relación calidad-precio</strong> en 2026. Es la
        opción que más recomiendan en mercados emergentes y por usuarios que
        priorizan bajo consumo y rendimiento sin pagar de más. Modelos como
        Midea Xtreme Save Connect, Breezeless o EcoMaster destacan por
        eficiencia, silencio y precio competitivo. Ideal si tu presupuesto es
        ajustado o quieres maximizar ahorro en la factura de luz.
      </p>

      <h3>Elige Samsung si...</h3>
      <p>
        Quieres <strong>tecnología premium</strong> y no te importa pagar extra.
        Funciones como Wind-Free (enfría sin viento directo, súper cómodo),
        control por voz/app avanzado (SmartThings), purificación de aire
        superior y diseño elegante hacen la diferencia. Modelos como AR8500/9500
        Wind-Free o series Elite son top para familias o hogares &ldquo;smart&rdquo;. Mejor
        si valoras durabilidad a largo plazo y servicio técnico sólido.
      </p>

      <h2>Costo total a 10 años: ¿cuál sale más barato?</h2>

      <p>
        Más allá del precio de compra, el costo real de un aire acondicionado incluye
        consumo eléctrico, mantenciones y eventual reemplazo de piezas. Hicimos el cálculo
        para un equipo de 12K BTU usado 8 horas diarias en Santiago durante 6 meses al año:
      </p>

      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Midea EcoMaster</th>
            <th>Samsung Wind-Free</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equipo + instalación</td>
            <td>$449.990</td>
            <td>$629.990</td>
          </tr>
          <tr>
            <td>Consumo eléctrico anual</td>
            <td>~$96.000</td>
            <td>~$102.000</td>
          </tr>
          <tr>
            <td>Mantención anual</td>
            <td>$59.990</td>
            <td>$59.990</td>
          </tr>
          <tr>
            <td><strong>Costo total 10 años</strong></td>
            <td><strong>$2.009.890</strong></td>
            <td><strong>$2.249.890</strong></td>
          </tr>
        </tbody>
      </table>

      <p>
        La diferencia real a 10 años es de ~$240.000 — menos de lo que parece por la
        brecha inicial de $180.000. Midea ahorra un poco más en electricidad gracias a su
        SEER más alto (22.5 vs 21.7), pero la diferencia es marginal ($6.000/año). La
        decisión final depende más de las funcionalidades que valoras que del ahorro económico.
      </p>

      <h2>Garantía y servicio técnico en Chile</h2>

      <p>
        Ambas marcas tienen representación oficial en Chile con repuestos disponibles.
        Samsung ofrece 10 años de garantía en compresor y 3 años en producto completo.
        Midea ofrece 5 años en compresor y 2 años en producto. En la práctica, las fallas
        son poco frecuentes en ambas marcas cuando el equipo tiene mantención anual.
      </p>

      <p>
        Un punto a considerar: Samsung tiene más centros de servicio autorizados en Santiago
        (12 vs 8 de Midea al 2026). Sin embargo, cuando compras con instalación incluida
        a través de un proveedor como Meser, la garantía de instalación y equipo la cubre
        directamente el instalador, independiente de la marca.
      </p>

      <h2>En resumen</h2>

      <ul>
        <li>
          <strong>Midea gana en valor por dinero y eficiencia pura</strong> →
          Recomendado para la mayoría de hogares normales.
        </li>
        <li>
          <strong>Samsung gana en experiencia premium y features</strong> → Si
          buscas lo mejor y puedes invertir más.
        </li>
        <li>
          <strong>A 10 años la diferencia de costo es solo ~$240.000</strong> →
          Si el presupuesto no es el factor principal, elige por funcionalidades.
        </li>
      </ul>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> En Meser instalamos ambas marcas. Revisa
          nuestros{" "}
          <Link href="/aires-acondicionados" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            equipos disponibles
          </Link>{" "}
          o agenda un{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito
          </Link>{" "}
          para que te ayudemos a elegir según tu espacio y presupuesto.
        </p>
      </div>
    </>
  );
}

function ArticleBTU() {
  return (
    <>
      <p>
        <strong>Un BTU (British Thermal Unit) es la unidad que mide la capacidad de
        enfriamiento o calefacción de un aire acondicionado.</strong> Para calcular
        cuántos BTU necesitas, multiplica los metros cuadrados de tu espacio por 600.
        Por ejemplo: un living de 25 m² necesita un equipo de 15.000 BTU (elige 18.000 BTU,
        el tamaño comercial más cercano). Según Meser, el error más común en Chile es
        subdimensionar el equipo, lo que aumenta el consumo eléctrico hasta un 30%.
      </p>
      <p>
        Los BTU (o Unidad Térmica Británica) miden la energía que indica la capacidad de
        enfriamiento (o calefacción) de un aire acondicionado. En términos
        simples:
      </p>

      <ul>
        <li>
          Un BTU representa la cantidad de energía necesaria para elevar la
          temperatura de 1 libra de agua (~0,45 kg) en 1 grado Fahrenheit (~0,56
          °C).
        </li>
        <li>
          En aires acondicionados, se mide en <strong>BTU por hora</strong>{" "}
          (BTU/h): cuánto calor puede extraer el equipo del ambiente cada hora.
        </li>
        <li>
          Cuantos más BTU, más potente es el aire y puede enfriar espacios más
          grandes o con más carga térmica (calor generado por sol, personas,
          electrodomésticos, etc.).
        </li>
      </ul>

      <div className="tip-box">
        <p><strong>Cálculo rápido:</strong> Multiplica los metros cuadrados de tu espacio por 600 BTU para obtener la capacidad mínima. Un dormitorio de 15 m² necesita 9.000 BTU, un living de 20 m² necesita 12.000 BTU, y un espacio de 30 m² necesita 18.000 BTU. Ajusta hacia arriba si tienes mucho sol directo (+15%), ventanales grandes (+10%), piso alto (+10%) o muchas personas (+400 BTU por persona adicional). Los tamaños comerciales más comunes en Chile son 9.000, 12.000, 18.000 y 24.000 BTU. Siempre es mejor elegir el tamaño comercial inmediatamente superior a tu cálculo.</p>
      </div>

      <h2>Ejemplos comunes</h2>

      <ul>
        <li>
          <strong>9.000 BTU</strong> → Habitaciones pequeñas (hasta ~15-18 m²).
        </li>
        <li>
          <strong>12.000 BTU</strong> → Habitaciones medianas (~20-25 m², muy
          común en hogares).
        </li>
        <li>
          <strong>18.000 BTU</strong> → Salas grandes o espacios abiertos (~30-40
          m²).
        </li>
        <li>
          <strong>24.000 BTU</strong> → Áreas muy grandes o con mucho sol (~40-50
          m²).
        </li>
      </ul>

      <p>
        <strong>Nota:</strong> 12.000 BTU equivalen a 1 tonelada de
        refrigeración.
      </p>

      <h2>¿Cuántos BTU necesitas?</h2>

      <p>
        No hay un número fijo universal, pero hay reglas prácticas muy usadas:
      </p>

      <h3>Método rápido (regla de oro)</h3>

      <p>
        Multiplica los <strong>metros cuadrados</strong> de la habitación por{" "}
        <strong>600 BTU</strong>.
      </p>

      <p>
        Fórmula: <strong>Largo x Ancho = m² → m² x 600 = BTU recomendados</strong>
      </p>

      <ul>
        <li>
          Habitación 4 m x 4 m = 16 m² → 16 x 600 = 9.600 BTU → Elige un
          equipo de <strong>9.000 o 12.000 BTU</strong>.
        </li>
        <li>
          Sala 5 m x 6 m = 30 m² → 30 x 600 = <strong>18.000 BTU</strong>.
        </li>
        <li>
          Cuarto grande 7 m x 7 m = 49 m² → 49 x 600 = 29.400 BTU → Busca{" "}
          <strong>24.000 o 30.000 BTU</strong>.
        </li>
      </ul>

      <p>
        Esta regla asume techos estándar (~2,4-2,7 m), clima cálido, 1-2
        personas y exposición moderada al sol.
      </p>

      <h3>Ajustes importantes para ser más preciso</h3>

      <ul>
        <li>+100-200 BTU por cada persona extra (más de 2).</li>
        <li>
          +400-600 BTU por electrodomésticos que generan calor (computadora, TV
          grande, cocina cercana).
        </li>
        <li>
          +10-20% más BTU si la habitación recibe sol directo todo el día
          (ventanas grandes sin cortinas, techo sin aislamiento).
        </li>
        <li>
          -10% si es muy sombreada, bien aislada o en clima más fresco.
        </li>
      </ul>

      <h2>¿Qué pasa si eliges mal los BTU?</h2>

      <p>
        Elegir un equipo con los BTU incorrectos es uno de los errores más costosos
        en climatización. Las consecuencias varían según si el equipo está
        subdimensionado o sobredimensionado:
      </p>

      <h3>Equipo con pocos BTU (subdimensionado)</h3>

      <ul>
        <li>
          <strong>Funciona al máximo constantemente</strong> — nunca alcanza la temperatura
          deseada, especialmente en días de calor extremo (35°C+ en Santiago).
        </li>
        <li>
          <strong>Consumo eléctrico hasta un 30% mayor</strong> — el compresor no para
          de trabajar, elevando la boleta de luz entre $8.000 y $15.000 extra al mes.
        </li>
        <li>
          <strong>Desgaste acelerado</strong> — vida útil se reduce de 12-15 años a 7-8 años
          por sobrecarga del compresor.
        </li>
        <li>
          <strong>Confort deficiente</strong> — el espacio nunca llega a la temperatura
          configurada y se siente caluroso.
        </li>
      </ul>

      <h3>Equipo con muchos BTU (sobredimensionado)</h3>

      <ul>
        <li>
          <strong>Ciclos cortos</strong> — enfría rápido, se apaga, sube la temperatura,
          vuelve a encender. Este &ldquo;cicleo&rdquo; genera variaciones de temperatura molestas.
        </li>
        <li>
          <strong>Mala deshumidificación</strong> — no funciona suficiente tiempo para
          extraer la humedad del aire, dejando el ambiente húmedo y pegajoso.
        </li>
        <li>
          <strong>Mayor costo inicial innecesario</strong> — pagaste de más por un equipo
          que no necesitas. La diferencia entre un 9K y un 18K BTU puede ser de $100.000+.
        </li>
      </ul>

      <p>
        <strong>Regla de oro:</strong> si dudas entre dos tamaños comerciales (por ejemplo,
        tu cálculo da 13.500 BTU), elige el superior (18.000 BTU en este caso). Los equipos
        Inverter ajustan su potencia automáticamente, así que un equipo ligeramente más grande
        consume lo mismo pero tiene margen para días extremos.
      </p>

      <h2>BTU y consumo eléctrico: cuánto vas a pagar</h2>

      <p>
        El consumo eléctrico depende de los BTU, la eficiencia del equipo (SEER) y las
        horas de uso. Acá va una estimación para equipos Inverter en Santiago, usando
        tarifa eléctrica promedio de $220/kWh (2026):
      </p>

      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Consumo promedio</th>
            <th>Costo mensual (8h/día)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9.000 BTU Inverter</td>
            <td>0.7 kW</td>
            <td>~$37.000</td>
          </tr>
          <tr>
            <td>12.000 BTU Inverter</td>
            <td>1.0 kW</td>
            <td>~$53.000</td>
          </tr>
          <tr>
            <td>18.000 BTU Inverter</td>
            <td>1.5 kW</td>
            <td>~$79.000</td>
          </tr>
          <tr>
            <td>24.000 BTU Inverter</td>
            <td>2.1 kW</td>
            <td>~$111.000</td>
          </tr>
        </tbody>
      </table>

      <p>
        Estos valores son aproximados para uso en verano (enero-febrero). En modo calefacción
        (invierno), el consumo es similar pero las horas de uso suelen ser menores. Un equipo
        bien dimensionado con tecnología Inverter puede reducir estos costos entre un 30% y 50%
        comparado con equipos on/off tradicionales.
      </p>

      <h2>Tabla de BTU recomendados (guía 2025-2026)</h2>

      <table>
        <thead>
          <tr>
            <th>Tamaño habitación (m²)</th>
            <th>BTU recomendados</th>
            <th>Equipo típico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hasta 10-18 m²</td>
            <td>9.000</td>
            <td>Pequeña habitación</td>
          </tr>
          <tr>
            <td>Hasta 15-25 m²</td>
            <td>12.000</td>
            <td>Dormitorio estándar</td>
          </tr>
          <tr>
            <td>Hasta 25-35 m²</td>
            <td>18.000</td>
            <td>Sala mediana o dormitorio grande</td>
          </tr>
          <tr>
            <td>Hasta 35-50 m²</td>
            <td>24.000</td>
            <td>Sala grande o living-comedor</td>
          </tr>
        </tbody>
      </table>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> ¿No estás seguro de cuántos BTU
          necesitas? En nuestro{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito por Zoom
          </Link>{" "}
          calculamos los BTU exactos para cada espacio de tu hogar. Revisa
          nuestros{" "}
          <Link href="/aires-acondicionados" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            equipos disponibles
          </Link>{" "}
          con la capacidad ideal para ti.
        </p>
      </div>
    </>
  );
}

function ArticleMantencion() {
  return (
    <>
      <p>
        En Chile, con veranos cada vez más calurosos y uso intensivo de splits
        inverter (Midea, Samsung, Anwo), el mantenimiento preventivo es
        esencial. Un equipo sucio consume <strong>5-15% más electricidad</strong>
        , enfría menos, genera malos olores por moho/bacterias, y puede fallar
        prematuramente.
      </p>

      <div className="tip-box">
        <p><strong>Lo esencial:</strong> La mantención de un aire acondicionado split en Chile debe hacerse al menos una vez al año con un técnico profesional, idealmente antes de la temporada de mayor uso (noviembre para verano, abril para invierno). La limpieza de filtros la puedes hacer tú mismo cada 15-30 días. Un equipo sin mantención consume entre un 5% y 15% más de electricidad, equivalente a $5.000-$15.000 extra al mes en verano con tarifas chilenas de 2026. Además, un equipo sucio puede generar malos olores, hongos y bacterias perjudiciales para la salud. Con mantención regular, un equipo Inverter dura 10-15 años; sin ella, las fallas aparecen entre los 5 y 7 años.</p>
      </div>

      <h2>¿Por qué es importante en Chile?</h2>

      <ul>
        <li>
          <strong>Ahorro en la boleta:</strong> Tarifas eléctricas ~$200-250/kWh
          (promedio 2026). Un split de 12.000 BTU mal mantenido puede sumar
          $5.000-15.000 extra al mes en verano.
        </li>
        <li>
          <strong>Clima chileno:</strong> Polvo en RM y zonas secas, humedad
          costera, aceleran acumulación de suciedad y moho.
        </li>
        <li>
          <strong>Durabilidad:</strong> Equipos inverter duran 10-15 años con
          mantención; sin ella, fallas en 5-7 años.
        </li>
        <li>
          <strong>Salud:</strong> Reduce alérgenos, hongos y bacterias (clave en
          hogares con niños o asmáticos).
        </li>
        <li>
          <strong>Eficiencia energética:</strong> Cumple con exigencias SEC para
          edificios nuevos y promueve bajo consumo.
        </li>
      </ul>

      <h2>¿Cuándo hacerlo?</h2>

      <h3>Limpieza de filtros (tú mismo)</h3>
      <p>
        Cada <strong>15-30 días</strong> durante temporada de uso
        (octubre-abril). Si hay mascotas, polvo alto o fumadores → cada 15 días.
      </p>

      <h3>Mantenimiento profesional</h3>
      <ul>
        <li>
          <strong>Uso residencial estándar</strong> (4-8 horas/día en verano):
          Al menos <strong>1 vez al año</strong> (mínimo recomendado por SEC y
          marcas). Ideal cada 6 meses.
        </li>
        <li>
          <strong>Uso intensivo</strong> (familia grande, todo el día, oficina en
          casa): Cada <strong>6 meses</strong> (abril y octubre).
        </li>
        <li>
          <strong>Zonas muy polvorientas o costeras:</strong> Cada 4-6 meses.
        </li>
        <li>
          <strong>Momento ideal:</strong> Marzo-abril y septiembre-octubre.
          Técnicos menos saturados, precios más bajos.
        </li>
      </ul>

      <h3>Revisión de gas refrigerante</h3>
      <p>
        Cada 2-3 años o si notas menos frío (no es anual a menos que haya
        fuga).
      </p>

      <h2>¿Cómo hacerlo?</h2>

      <h3>Limpieza de filtros (unidad interior) — Cada 15-30 días</h3>

      <ol>
        <li>Desconecta el equipo (seguridad primero).</li>
        <li>
          Abre la tapa frontal (levanta o desliza, según modelo Samsung/Midea).
        </li>
        <li>Extrae los filtros (1-2 paneles plásticos).</li>
        <li>
          Aspira polvo o lava con agua tibia + jabón neutro (nunca agua caliente
          ni cepillo metálico).
        </li>
        <li>Seca al aire (no uses secador).</li>
        <li>Reinstala → Mejora flujo y reduce consumo inmediatamente.</li>
      </ol>

      <h3>Limpieza básica exterior — Mensual</h3>
      <ul>
        <li>
          Paño húmedo en carcasa (no mojes partes eléctricas).
        </li>
        <li>
          Revisa drenaje: si gotea agua afuera → OK. Si huele mal o no drena →
          llama a un técnico.
        </li>
        <li>
          Modo Auto Clean o Dry (si tiene): Actívalo al apagar para secar
          interno y evitar moho.
        </li>
      </ul>

      <h2>Mantención profesional: ¿qué incluye?</h2>

      <ul>
        <li>
          Limpieza profunda serpentinas (evaporador/condensador) con
          hidrolavadora/vapor/químicos.
        </li>
        <li>Limpieza ventilador/turbina interna.</li>
        <li>
          Revisión drenaje, bandeja condensados (desinfección anti-moho).
        </li>
        <li>Verificación presiones, voltaje, contactos.</li>
        <li>Diagnóstico inverter (sensores, placa electrónica).</li>
        <li>
          Recarga gas si es necesario (adicional ~$60.000-80.000 CLP).
        </li>
      </ul>

      <h2>Tabla resumen para Chile (uso residencial típico)</h2>

      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Frecuencia</th>
            <th>Quién lo hace</th>
            <th>Beneficio clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Limpieza filtros</td>
            <td>Cada 15-30 días (temporada)</td>
            <td>Tú mismo</td>
            <td>Ahorro 10-20% luz, mejor aire</td>
          </tr>
          <tr>
            <td>Mantención profesional</td>
            <td>1 vez al año (mín.) o cada 6 meses</td>
            <td>Técnico certificado</td>
            <td>Ahorro 5-15%, detecta fugas</td>
          </tr>
          <tr>
            <td>Revisión gas/drenaje profundo</td>
            <td>Cada 6-12 meses o al notar fallos</td>
            <td>Técnico</td>
            <td>Evita averías caras (+$200.000)</td>
          </tr>
        </tbody>
      </table>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> Nuestro servicio de{" "}
          <Link href="/mantencion" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            mantención profesional
          </Link>{" "}
          parte desde <strong>$59.990</strong>. Incluye limpieza profunda,
          revisión técnica completa y optimización de rendimiento. Agenda tu{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            mantención aquí
          </Link>
          .
        </p>
      </div>
    </>
  );
}

function ArticleMultiSplit() {
  return (
    <>
      <p>
        El sistema{" "}
        <strong>
          <Link href="/soluciones/multisplit" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            multi split inverter
          </Link>
        </strong>{" "}
        es una de las soluciones más versátiles y eficientes para climatizar
        todo un departamento en Chile, especialmente en departamentos medianos a
        grandes (80–150 m², 3–5 ambientes) donde quieres control independiente
        por habitación sin ocupar mucho espacio exterior ni instalar múltiples
        compresores.
      </p>

      <div className="tip-box">
        <p><strong>En resumen:</strong> Un sistema Multi Split conecta una sola unidad exterior a 2-5 unidades interiores, cada una con control independiente de temperatura. Es la solución más eficiente para departamentos de 80-150 m² con 3-5 ambientes en Santiago, porque usa un solo espacio exterior, genera menos ruido que múltiples splits individuales, y permite climatizar cada habitación de forma independiente. Las marcas más instaladas en Chile son Samsung y Midea, ambas con tecnología Inverter frío/calor. La principal desventaja es que si falla la unidad exterior, todos los ambientes se ven afectados. El costo es generalmente un 30-40% menor que instalar splits individuales en cada habitación.</p>
      </div>

      <h2>¿Qué es exactamente un multi split?</h2>

      <ul>
        <li>
          <strong>Una sola unidad exterior</strong> (compresor más potente)
          conectada a <strong>2 a 5 (o más) unidades interiores</strong> (muros,
          cassette, piso, conductos ocultos).
        </li>
        <li>
          Cada unidad interior tiene su propio control (mando o app),
          permitiendo encender/apagar, ajustar temperatura y modo (frío/calor)
          de forma <strong>independiente</strong>.
        </li>
        <li>
          Funciona con <strong>tecnología inverter</strong> (compresor variable),
          lo que reduce consumo hasta 30–50% vs. sistemas on-off tradicionales.
        </li>
      </ul>

      <p>
        En Chile, es muy popular en edificios residenciales (Santiago, Viña,
        Concepción, Valdivia) porque resuelve el problema de fachadas con muchas
        unidades exteriores (prohibido o restringido en muchos condominios).
      </p>

      <h2>Ventajas clave para un departamento completo</h2>

      <ul>
        <li>
          <strong>Ahorro de espacio exterior</strong> → Solo 1 condensadora (en
          balcón, terraza o fachada permitida), ideal si hay normas de estética o
          poco espacio.
        </li>
        <li>
          <strong>Control zonal total</strong> → Living a 22 °C, dormitorios a
          19 °C, pieza de niños apagada → máximo confort y ahorro.
        </li>
        <li>
          <strong>Eficiencia energética alta</strong> → Inverter + un solo
          compresor grande optimizado → mejor SEER/SCOP que varios mini-splits
          individuales.
        </li>
        <li>
          <strong>Calor y frío todo el año</strong> → Bomba de calor eficiente
          hasta -15 °C aprox. (excelente en zona central y sur).
        </li>
        <li>
          <strong>Menor ruido exterior</strong> → Una sola unidad grande suele
          ser más silenciosa que varias pequeñas.
        </li>
        <li>
          <strong>Deshumidificación potente</strong> → Muy útil en zonas
          costeras o lluviosas.
        </li>
      </ul>

      <h2>Desventajas y consideraciones reales (2026)</h2>

      <ul>
        <li>
          <strong>Costo inicial más alto</strong> → 30–60% más caro que varios
          mini-splits individuales equivalentes.
        </li>
        <li>
          <strong>Instalación más compleja</strong> → Tuberías frigoríficas más
          largas (hasta 70–100 m total según marca), requiere técnico
          certificado y más tiempo.
        </li>
        <li>
          <strong>Si falla la unidad exterior</strong> → Todo el departamento sin
          clima (aunque es raro en marcas premium).
        </li>
        <li>
          <strong>Capacidad limitada por modelo</strong> → No todos los
          multi-split soportan 5+ unidades a plena potencia simultánea (revisa
          &ldquo;capacidad máxima combinada&rdquo;).
        </li>
        <li>
          <strong>
            <Link href="/blog/mantencion-aire-acondicionado" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
              Mantenimiento
            </Link>
          </strong>{" "}
          → Limpieza filtros en cada unidad + revisión anual del sistema
          completo.
        </li>
      </ul>

      <h2>Multi Split vs splits individuales: comparación de costos</h2>

      <p>
        Una de las preguntas más frecuentes es si conviene más un Multi Split o
        instalar splits individuales en cada habitación. La respuesta depende de
        la cantidad de ambientes:
      </p>

      <table>
        <thead>
          <tr>
            <th>Configuración</th>
            <th>Multi Split</th>
            <th>Splits individuales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2 ambientes</td>
            <td>~$850.000</td>
            <td>~$800.000</td>
          </tr>
          <tr>
            <td>3 ambientes</td>
            <td>~$1.200.000</td>
            <td>~$1.200.000</td>
          </tr>
          <tr>
            <td>4 ambientes</td>
            <td>~$1.500.000</td>
            <td>~$1.600.000</td>
          </tr>
          <tr>
            <td>5 ambientes</td>
            <td>~$1.800.000</td>
            <td>~$2.000.000</td>
          </tr>
        </tbody>
      </table>

      <p>
        A partir de 3 ambientes, el Multi Split empieza a ser más económico. Pero el
        ahorro real está en otros factores: un solo espacio exterior ocupado (clave en
        departamentos con restricciones), menos ruido exterior y una estética más limpia
        en la fachada.
      </p>

      <p>
        La desventaja principal del Multi Split es la dependencia de una sola unidad
        exterior: si falla el compresor, todos los ambientes quedan sin climatización.
        Con splits individuales, si falla uno los demás siguen funcionando. En la
        práctica, las fallas de compresor son poco frecuentes (menos del 2% en los
        primeros 5 años con mantención regular).
      </p>

      <h2>Errores frecuentes al elegir Multi Split</h2>

      <ul>
        <li>
          <strong>No hacer diagnóstico previo:</strong> cada metro de cañería extra cuesta
          dinero y reduce la eficiencia. Un diagnóstico profesional define las distancias
          exactas y la ruta óptima antes de comprar.
        </li>
        <li>
          <strong>Mezclar capacidades sin planificación:</strong> un Multi Split 3x1 no
          significa &ldquo;cualquier combinación de interiores&rdquo;. La unidad exterior debe tener
          capacidad suficiente para la suma de las interiores con un margen del 10-15%.
        </li>
        <li>
          <strong>Ignorar las distancias máximas:</strong> cada marca tiene un límite de
          metros de cañería entre exterior e interiores. Samsung permite hasta 25m por línea,
          Midea hasta 20m. Superar estos límites reduce drásticamente el rendimiento.
        </li>
        <li>
          <strong>Comprar el equipo sin instalador:</strong> la instalación de un Multi Split
          requiere vacío del sistema, carga de gas precisa y prueba de hermeticidad. Un técnico
          no certificado puede arruinar el equipo nuevo.
        </li>
      </ul>

      <h2>Recomendación práctica para tu departamento</h2>

      <ol>
        <li>
          <strong>Calcula cargas térmicas</strong> (aprox. 600–800{" "}
          <Link href="/blog/que-son-los-btu" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            BTU
          </Link>
          /m² en zona central).
        </li>
        <li>
          <strong>Elige 3–5 zonas:</strong> ej. living 12.000–18.000 BTU,
          dormitorios 9.000 BTU c/u.
        </li>
        <li>
          <strong>Prioriza R32</strong> (refrigerante ecológico, más eficiente).
        </li>
        <li>
          <strong>Pide presupuesto con{" "}
            <Link href="/instalacion-aire-acondicionado" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
              instalación certificada
            </Link>
          </strong>{" "}
          (incluye vacío, carga, prueba).
        </li>
        <li>
          <strong>Considera WiFi/app</strong> para control remoto y
          programación (ahorro extra).
        </li>
      </ol>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> Somos especialistas en{" "}
          <Link href="/soluciones/multisplit" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            instalación multi split
          </Link>
          . Agenda un{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito por Zoom
          </Link>{" "}
          y te diseñamos la solución ideal para tu departamento con precio
          cerrado.
        </p>
      </div>
    </>
  );
}

function ArticleInstalacionEstetica() {
  return (
    <>
      <p>
        La{" "}
        <strong>
          <Link href="/instalacion-aire-acondicionado" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            instalación estética
          </Link>
        </strong>{" "}
        de aire acondicionado — una colocación limpia, discreta, integrada al
        diseño del espacio y con mínimo impacto visual — ha pasado a ser muy
        importante en Chile, especialmente en departamentos y condominios. Ya no
        es solo una cuestión de &ldquo;quedar bonito&rdquo;, sino un factor clave para
        evitar problemas legales, sanciones, rechazos de la comunidad y hasta
        pérdida de valor inmobiliario.
      </p>

      <div className="tip-box">
        <p><strong>Por qué importa:</strong> Desde la entrada en vigencia de la nueva Ley de Copropiedad Inmobiliaria (21.442) en Chile, instalar un aire acondicionado en un departamento o condominio sin cumplir las normas estéticas puede resultar en multas, obligación de retiro del equipo y conflictos con la comunidad. La instalación estética — con canaletas ocultas, cables invisibles y ubicación aprobada del equipo exterior — ya no es un lujo sino un requisito legal en la mayoría de los edificios. Además, una instalación mal hecha puede reducir el valor de tu propiedad entre un 2% y 5% según corredoras de Santiago. El estándar actual exige coordinación con la administración del edificio antes de cualquier intervención.</p>
      </div>

      <h2>
        1. Restricciones de los reglamentos de copropiedad (Ley 21.442)
      </h2>

      <p>
        Desde la nueva Ley de Copropiedad Inmobiliaria (21.442) y su reglamento
        (publicado en 2025), todos los condominios debían actualizar sus
        reglamentos internos antes del 9 de enero de 2026. Muchos lo hicieron
        incorporando normas más estrictas sobre modificaciones visibles en
        fachadas, muros exteriores y elementos comunes.
      </p>

      <ul>
        <li>
          Las fachadas, muros exteriores y elementos estructurales son{" "}
          <strong>bienes de dominio común</strong> → cualquier alteración
          requiere aprobación de la asamblea.
        </li>
        <li>
          Varias comunidades <strong>prohíben o limitan</strong> unidades
          exteriores múltiples visibles para preservar la uniformidad estética.
        </li>
        <li>
          Si instalas sin aprobación o de forma antiestética →{" "}
          <strong>multas, obligación de remover el equipo</strong> a costo
          propio, o demandas vecinales.
        </li>
        <li>
          En la práctica: administraciones exigen instalaciones &ldquo;limpias&rdquo;
          (canaletas ocultas, una sola unidad exterior discreta, drenaje
          invisible) para aprobar.
        </li>
      </ul>

      <h2>2. Preservación del valor del inmueble</h2>

      <ul>
        <li>
          Un edificio con fachadas &ldquo;limpias&rdquo; aumenta su valor de reventa/arriendo
          (hasta <strong>5–10% en zonas premium</strong> de Santiago, Viña o
          Concepción).
        </li>
        <li>
          Instalaciones feas (tubos expuestos, canaletas mal pintadas, múltiples
          compresores) restan estética al departamento y al edificio completo.
        </li>
        <li>
          En arriendos Airbnb o ventas: fotos con aires &ldquo;integrados&rdquo; venden
          mejor que con splits colgando desordenados.
        </li>
      </ul>

      <h2>3. Cumplimiento de normas de seguridad y funcionalidad</h2>

      <ul>
        <li>
          Instalación antiestética suele ser sinónimo de{" "}
          <strong>mala calidad</strong>: perforaciones innecesarias, tubos mal
          sellados, goteo a vecinos → riesgos de humedad, hongos, daños
          estructurales.
        </li>
        <li>
          Normas SEC y reglamentos exigen instalaciones seguras; lo estético va
          de la mano con lo profesional (vacío correcto, sellado, drenaje
          adecuado).
        </li>
      </ul>

      <h2>4. Tendencia del &ldquo;nuevo estándar&rdquo; en Chile 2026</h2>

      <p>
        Con olas de calor más frecuentes y demanda creciente de climatización
        todo el año, la gente prioriza sistemas que no &ldquo;rompan&rdquo; el diseño:
      </p>

      <ul>
        <li>
          <strong>
            <Link href="/blog/multi-split-departamento" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
              Multi-split
            </Link>
          </strong>{" "}
          con 1 sola unidad exterior (en balcón/terraza discreta).
        </li>
        <li>
          <strong>Cassette empotrados</strong>, por conductos ocultos o consolas
          piso con líneas minimalistas.
        </li>
        <li>
          Unidades murales <strong>ultra delgadas</strong> en colores mate o
          blancos que se camuflan.
        </li>
        <li>
          Instaladores certificados que usan{" "}
          <strong>
            canaletas pintadas al tono de la pared, tubos empotrados o falsos
            techos
          </strong>
          .
        </li>
      </ul>

      <h2>Resumen: ¿por qué NO puedes ignorarlo?</h2>

      <ul>
        <li>
          <strong>Legal:</strong> Evitas multas, remociones forzadas o bloqueos
          en asamblea.
        </li>
        <li>
          <strong>Económico:</strong> Protege valor del inmueble y evita costos
          extras.
        </li>
        <li>
          <strong>Confort y convivencia:</strong> Menos quejas de vecinos por
          ruido, vista o goteo.
        </li>
        <li>
          <strong>Moderno y práctico:</strong> En 2026, una instalación &ldquo;fea&rdquo; se
          ve anticuada; la estética es parte del confort premium.
        </li>
      </ul>

      <p>
        En departamentos, sobre todo en edificios post-2010 o actualizados, una
        instalación estética ya no es opcional: es la forma estándar de
        climatizar sin problemas. Si tu condominio ya actualizó reglamento,
        revisa las normas específicas antes de comprar/instalar.
      </p>

      <div className="tip-box">
        <p>
          <strong>Tip Meser:</strong> La{" "}
          <Link href="/instalacion-aire-acondicionado" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            instalación estética
          </Link>{" "}
          es nuestro sello. Canaletas ocultas, cables invisibles, acabados
          prolijos. Agenda un{" "}
          <Link href="#agendar" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            diagnóstico gratuito
          </Link>{" "}
          y conoce cómo hacemos la diferencia. Revisa nuestros{" "}
          <Link href="/todo-incluido" className="text-cyan font-medium underline underline-offset-2 hover:text-cyan-dark transition-colors">
            paquetes todo incluido
          </Link>{" "}
          que ya incluyen instalación estética de serie.
        </p>
      </div>
    </>
  );
}

/* ─── Slug → Component mapping ─── */

const articleComponents: Record<string, () => React.JSX.Element> = {
  "cuanto-cuesta-instalar-aire-acondicionado-chile": ArticleCuantoCuesta,
  "aire-acondicionado-departamento-santiago": ArticleDepartamentoSantiago,
  "midea-vs-samsung": ArticleMideaVsSamsung,
  "que-son-los-btu": ArticleBTU,
  "mantencion-aire-acondicionado": ArticleMantencion,
  "multi-split-departamento": ArticleMultiSplit,
  "instalacion-estetica": ArticleInstalacionEstetica,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const ArticleContent = articleComponents[slug];

  if (!ArticleContent) {
    notFound();
  }

  return (
    <BlogPostLayout post={post}>
      <ArticleContent />
    </BlogPostLayout>
  );
}
