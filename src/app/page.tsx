"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Clock, Medal, Leaf, MapPin, Menu, X, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573213352615?text=Hola!%20Quiero%20hacer%20un%20pedido%20%F0%9F%A5%AA";

const TRUST_ITEMS = [
  {
    icon: Clock,
    title: "12h+ de Adobo",
    desc: "Cada pieza marinada con paciencia artesanal",
  },
  {
    icon: Medal,
    title: "Receta Original",
    desc: "Transmitida de abuelo a nietos por 3 generaciones",
  },
  {
    icon: Leaf,
    title: "Sin Conservantes",
    desc: "100% natural, fresco y auténtico cada día",
  },
];

const MENU_ITEMS = [
  {
    name: "El Jamón del Abuelo",
    description:
      "Jamón artesanal marinado 12 horas en adobo secreto de hierbas y especias de la región. Servido en pan de hogaza con salsa de la casa.",
    price: "$18.000",
    badge: "Más Vendido",
    image: "/images/sanduche-jamon.jpeg",
  },
  {
    name: "La Llanera Auténtica",
    description:
      "Carne a la llanera preparada más de 20 horas con técnica tradicional transmitida de generación en generación. El sabor genuino de los llanos.",
    price: "$22.000",
    badge: "Especial",
    image: "/images/sanduche-llanera.jpeg",
  },
  {
    name: "El Combinado del Abuelo",
    description:
      "Lo mejor de dos mundos: jamón adobado y carne llanera juntos en un pan. Para los que no quieren elegir entre la tradición y el sabor.",
    price: "$26.000",
    badge: null,
    image: "/images/sanduche-bondiola.jpeg",
  },
];

export default function SanduchesDelAbuelo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream">
      {/* ── STICKY NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-brand-wood/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="text-2xl">🥪</span>
              <div className="leading-tight">
                <p className="text-brand-cream font-bold text-sm sm:text-base leading-none">
                  Sanduches
                </p>
                <p className="text-brand-orange text-[10px] font-semibold tracking-[0.25em] uppercase">
                  del Abuelo
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#historia"
                className="text-brand-cream/75 hover:text-brand-orange text-sm font-medium transition-colors"
              >
                Historia
              </a>
              <a
                href="#menu"
                className="text-brand-cream/75 hover:text-brand-orange text-sm font-medium transition-colors"
              >
                Menú
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-orange hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                Pide por WhatsApp
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brand-cream p-1.5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-brand-wood border-t border-brand-cream/10 px-4 pb-4 pt-2 flex flex-col gap-1">
            <a
              href="#historia"
              onClick={() => setMobileOpen(false)}
              className="text-brand-cream/75 text-sm py-3 border-b border-brand-cream/10"
            >
              Historia
            </a>
            <a
              href="#menu"
              onClick={() => setMobileOpen(false)}
              className="text-brand-cream/75 text-sm py-3 border-b border-brand-cream/10"
            >
              Menú
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-brand-orange text-white px-4 py-3 rounded-full text-sm font-semibold text-center"
            >
              Pide por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ── VIDEO BANNER ── */}
      <section id="inicio" className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          src="/videos/sanduche-banner-hero.mp4"
          muted
          autoPlay
          loop
          playsInline
        />
        {/* Dot-pattern overlay for cinematic texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.45) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        {/* Subtle vignette darkening edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </section>

      {/* ── HERO TEXT ── */}
      <section
        className="flex items-center justify-center py-20 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(135deg, #0d0602 0%, #2a1509 30%, #432818 55%, #7a3e1a 78%, #F26419 100%)",
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-orange text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mb-5">
            Funza, Cundinamarca · Desde 1974
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            El Sanguche
            <br />
            <span className="text-brand-orange">del Abuelo</span>
          </h1>

          <p className="text-brand-cream/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Carne a la llanera adobada por más de{" "}
            <strong className="text-brand-orange font-bold">20 horas</strong>,
            una receta transmitida de abuelo a nietos.{" "}
            <span className="text-brand-cream/60">Tres generaciones. Un solo sabor.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange hover:bg-orange-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 shadow-xl shadow-orange-900/40 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Haz tu Pedido Ahora
            </a>
            <a
              href="#menu"
              className="border-2 border-brand-cream/50 hover:border-brand-orange text-brand-cream hover:text-brand-orange px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2"
            >
              Ver el Menú
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-brand-wood py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-brand-cream/15">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center px-6"
              >
                <Icon className="text-brand-orange mb-3" size={34} />
                <h3 className="text-brand-cream font-bold text-lg mb-1">
                  {title}
                </h3>
                <p className="text-brand-cream/55 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENÚ GRID ── */}
      <section id="menu" className="py-20 px-4 sm:px-6 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-orange text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Carta Digital
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-wood"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Nuestros Sanduches
            </h2>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item) => (
              <article
                key={item.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-wood/8"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.badge && (
                    <span className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-brand-wood mb-2"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-orange text-2xl font-bold">
                      {item.price}
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-wood hover:bg-brand-orange text-brand-cream text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                    >
                      Pedir
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERITAGE SECTION ── */}
      <section id="historia" className="py-20 px-4 sm:px-6 bg-brand-wood">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div
                className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(145deg, #0d0602 0%, #2a1509 40%, #7a3e1a 80%, #F26419 100%)",
                }}
              >
                <div className="text-center p-8 w-full">
                  <p
                    className="text-brand-cream/20 text-7xl sm:text-8xl font-bold select-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    1974
                  </p>
                  <p className="text-brand-orange text-base font-medium mt-2">
                    El año que todo comenzó
                  </p>
                  <div className="mt-10 space-y-4 max-w-xs mx-auto">
                    {["1ª Gen · El Abuelo", "2ª Gen · Los Padres", "3ª Gen · Los Nietos"].map(
                      (gen, i) => (
                        <div
                          key={gen}
                          className="flex items-center gap-3 text-brand-cream/65 text-sm"
                        >
                          <div className="w-8 h-8 shrink-0 rounded-full bg-brand-orange/20 border border-brand-orange/35 flex items-center justify-center text-brand-orange text-xs font-bold">
                            {i + 1}
                          </div>
                          <span>{gen}</span>
                          {i < 2 && (
                            <div className="flex-1 border-b border-dashed border-brand-cream/20" />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full border-4 border-brand-orange/25 -z-10 hidden md:block" />
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full border-4 border-brand-cream/10 -z-10 hidden md:block" />
            </div>

            {/* Text */}
            <div>
              <p className="text-brand-orange text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                Nuestra Historia
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-brand-cream mb-6 leading-snug"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Más de 50 Años de{" "}
                <span className="text-brand-orange">Tradición Familiar</span>
              </h2>
              <div className="space-y-4 text-brand-cream/70 leading-relaxed text-base">
                <p>
                  En 1974, en el corazón de{" "}
                  <strong className="text-brand-cream">
                    Funza, Cundinamarca
                  </strong>
                  , nuestro abuelo perfeccionó una receta que cambiaría el
                  sabor del municipio para siempre: un adobo artesanal de
                  hierbas, especias y sal marina que transforma la carne en
                  algo extraordinario.
                </p>
                <p>
                  El secreto está en el tiempo:{" "}
                  <strong className="text-brand-orange">
                    más de 12 horas
                  </strong>{" "}
                  de marinado en frío, seguido de fases de conservación únicas
                  que preservan cada fibra de sabor. Sin prisa. Sin
                  conservantes. Solo paciencia y amor por el oficio.
                </p>
                <p>
                  Hoy, tres generaciones después, esa misma receta llega a tu
                  mesa exactamente como la soñó el abuelo: auténtica, generosa
                  y llena del alma de los llanos colombianos.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-700 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-900/40"
              >
                <Phone size={16} />
                Prueba la Receta Familiar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d0602] text-brand-cream/60 py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">🥪</span>
                <div>
                  <p className="text-brand-cream font-bold text-sm">
                    Sanduches del Abuelo
                  </p>
                  <p className="text-brand-orange text-xs">Desde 1974</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                La receta familiar de Funza que ha alimentado tres generaciones
                con tradición y sabor auténtico.
              </p>
            </div>

            <div>
              <h4 className="text-brand-cream font-semibold mb-3 flex items-center gap-2 text-sm">
                <Clock size={15} className="text-brand-orange" />
                Horarios
              </h4>
              <div className="space-y-1.5 text-sm">
                <p>Lunes – Viernes: 7:00 AM – 8:00 PM</p>
                <p>Sábados: 6:00 AM – 9:00 PM</p>
                <p>Domingos: 8:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div>
              <h4 className="text-brand-cream font-semibold mb-3 flex items-center gap-2 text-sm">
                <MapPin size={15} className="text-brand-orange" />
                Ubicación
              </h4>
              <p className="text-sm leading-relaxed">
                Funza, Cundinamarca
                <br />
                Colombia
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-cream text-sm font-medium transition-colors"
              >
                <Phone size={13} />
                Pregunta cómo llegar
              </a>
            </div>
          </div>

          <div className="border-t border-brand-cream/10 pt-6 text-center text-xs text-brand-cream/30">
            © {new Date().getFullYear()} Sanduches del Abuelo · Funza,
            Cundinamarca · Hecho con ❤️ y 50 años de tradición
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl shadow-green-900/40 flex items-center justify-center transition-all hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
