import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Sanduches del Abuelo | Sabor Artesanal de Siempre",
  description:
    "Sanduches artesanales hechos con amor y tradición familiar. Ingredientes frescos, recetas del abuelo, sabores únicos.",
};

const sandwiches = [
  {
    name: "El Clásico del Abuelo",
    description:
      "Jamón serrano, queso manchego curado, tomate de huerta, lechuga fresca y alioli casero en pan de masa madre.",
    price: "$12.000",
    badge: "⭐ Favorito",
    emoji: "🥪",
  },
  {
    name: "El Campesino",
    description:
      "Carne asada desmenuzada, chimichurri artesanal, cebolla caramelizada y pimientos asados en pan rústico.",
    price: "$14.500",
    badge: "🔥 Estrella",
    emoji: "🫓",
  },
  {
    name: "La Huerta",
    description:
      "Aguacate cremoso, tomate cherry, pepino, rúcula, hummus de garbanzo y vinagreta de limón. 100% vegetal.",
    price: "$11.000",
    badge: "🌿 Vegano",
    emoji: "🥑",
  },
  {
    name: "El Marinero",
    description:
      "Atún de aleta amarilla con mayonesa de alcaparras, rábano encurtido, pepinillos y mezcla de lechugas.",
    price: "$13.500",
    badge: "🐟 Del mar",
    emoji: "🐟",
  },
  {
    name: "La Abuela Especial",
    description:
      "Pollo a las hierbas deshilachado, queso crema con ciboulette, tomate seco, nueces tostadas y espinaca baby.",
    price: "$13.000",
    badge: "❤️ Receta secreta",
    emoji: "🍗",
  },
  {
    name: "El Madrugador",
    description:
      "Huevo pochado, panceta crujiente, tomate, queso cheddar fundido y salsa de mostaza-miel. Ideal al desayuno.",
    price: "$10.500",
    badge: "☀️ Desayuno",
    emoji: "🍳",
  },
];

const testimonials = [
  {
    name: "Mariana R.",
    text: "El clásico del abuelo me recuerda a los sanduches que hacía mi abuela. ¡Es puro amor en cada bocado!",
    stars: 5,
  },
  {
    name: "Carlos D.",
    text: "Los mejores sanduches artesanales de la ciudad. El pan de masa madre es una obra de arte.",
    stars: 5,
  },
  {
    name: "Sofía M.",
    text: "La huerta me conquistó. Por fin un lugar donde el sanduche vegano tiene verdadero sabor.",
    stars: 5,
  },
];

export default function SanduchesPage() {
  return (
    <main className="min-h-screen bg-amber-50 font-sans">
      {/* Nav */}
      <nav className="bg-amber-900 text-amber-50 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥪</span>
          <span className="font-bold text-lg tracking-tight">
            Los Sanduches del Abuelo
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#menu" className="hover:text-amber-300 transition-colors">
            Menú
          </a>
          <a href="#nosotros" className="hover:text-amber-300 transition-colors">
            Nosotros
          </a>
          <a
            href="#testimonios"
            className="hover:text-amber-300 transition-colors"
          >
            Opiniones
          </a>
          <a href="#contacto" className="hover:text-amber-300 transition-colors">
            Contacto
          </a>
        </div>
        <a
          href="#contacto"
          className="bg-amber-400 text-amber-900 font-bold px-4 py-2 rounded-full text-sm hover:bg-amber-300 transition-colors"
        >
          Pedir ahora
        </a>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36 text-center relative z-10">
          <p className="text-amber-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Desde 1978 · Recetas de siempre
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Los Sanduches
            <br />
            <span className="text-amber-300">del Abuelo</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pan artesanal horneado cada mañana, ingredientes frescos de huerta y
            el sabor que solo se aprende con años de amor y tradición familiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-amber-400 text-amber-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-300 transition-all hover:scale-105 shadow-xl"
            >
              Ver el Menú
            </a>
            <a
              href="#nosotros"
              className="border-2 border-amber-300 text-amber-100 font-semibold px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition-colors"
            >
              Nuestra Historia
            </a>
          </div>
        </div>
        <div className="text-6xl text-center pb-10 opacity-30 select-none">
          🥪 🫓 🥖 🧀 🍅
        </div>
      </section>

      {/* Badges */}
      <section className="bg-amber-100 border-y border-amber-200 py-6">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🌾", label: "Pan de masa madre", sub: "Horneado diario" },
            { icon: "🥬", label: "Ingredientes frescos", sub: "De huerta propia" },
            { icon: "👨‍🍳", label: "Receta artesanal", sub: "Desde 1978" },
            { icon: "🚚", label: "Domicilio gratis", sub: "En la ciudad" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{b.icon}</span>
              <span className="font-bold text-amber-900 text-sm">{b.label}</span>
              <span className="text-amber-600 text-xs">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 mb-3">
            Nuestro Menú
          </h2>
          <p className="text-amber-700 text-lg max-w-xl mx-auto">
            Cada sanduche es una experiencia única. Todos incluyen papas fritas
            artesanales o ensalada de tu elección.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sandwiches.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-amber-100 flex flex-col"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center py-10 text-7xl">
                {s.emoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-amber-900 text-lg leading-tight">
                    {s.name}
                  </h3>
                  <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                    {s.badge}
                  </span>
                </div>
                <p className="text-amber-700 text-sm leading-relaxed flex-1 mb-4">
                  {s.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-extrabold text-amber-900">
                    {s.price}
                  </span>
                  <a
                    href="#contacto"
                    className="bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="nosotros"
        className="bg-amber-900 text-amber-50 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="text-8xl mb-6">👴🏽</div>
            <h2 className="text-4xl font-extrabold mb-4 text-amber-300">
              La Historia del Abuelo
            </h2>
            <p className="text-amber-200 leading-relaxed mb-4">
              Todo comenzó en 1978, cuando el abuelo Ernesto abrió su pequeño
              puesto en el mercado central con una receta simple: pan horneado en
              casa, ingredientes frescos de su huerta y el secreto más
              importante… preparar cada sanduche con paciencia y amor.
            </p>
            <p className="text-amber-200 leading-relaxed mb-4">
              Hoy, tres generaciones después, seguimos honrando esa tradición.
              Nuestro pan sigue siendo de masa madre, nuestros vegetales siguen
              llegando frescos cada mañana y el cariño en cada bocado sigue
              siendo el mismo.
            </p>
            <p className="text-amber-300 font-semibold italic">
              "Un buen sanduche no se hace con prisa, se hace con alma."
              — Ernesto García, fundador
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "46+", label: "Años de tradición" },
              { num: "12", label: "Recetas únicas" },
              { num: "500+", label: "Clientes al día" },
              { num: "100%", label: "Ingredientes frescos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-amber-800 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-amber-300 mb-1">
                  {stat.num}
                </div>
                <div className="text-amber-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-amber-900 mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-amber-600">El sabor que vuelve día tras día</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100"
            >
              <div className="flex gap-1 mb-3 text-amber-400 text-lg">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-amber-800 italic mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                  {t.name[0]}
                </div>
                <span className="font-semibold text-amber-900 text-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contacto"
        className="bg-amber-800 text-white py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-amber-100">
            ¡Haz tu pedido ahora!
          </h2>
          <p className="text-amber-200 text-lg mb-10">
            Escríbenos por WhatsApp o llámanos. Atendemos de lunes a sábado de
            7:00 a.m. a 8:00 p.m. Hacemos domicilios en toda la ciudad.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "📱", label: "WhatsApp", value: "+57 300 123 4567" },
              { icon: "📍", label: "Dirección", value: "Calle 45 #12-30, Centro" },
              { icon: "🕐", label: "Horario", value: "Lun–Sáb 7am–8pm" },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-amber-700 rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-bold text-amber-200 text-xs uppercase tracking-widest mb-1">
                  {c.label}
                </div>
                <div className="text-white font-semibold">{c.value}</div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/573001234567"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-xl transition-all hover:scale-105 shadow-xl"
          >
            💬 Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-400 text-center py-6 px-4 text-sm">
        <p className="mb-1">
          🥪 <strong>Los Sanduches del Abuelo</strong> · Tradición artesanal
          desde 1978
        </p>
        <p className="text-amber-600">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </main>
  );
}
