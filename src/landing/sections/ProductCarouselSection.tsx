import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Wallet,
  Building2,
  Smartphone,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    title: "Tarjeta Platinum",
    description:
      "La tarjeta más exclusiva con beneficios premium, cashback del 3% y acceso a salas VIP en aeropuertos.",
    icon: CreditCard,
    color: "from-slate-800 to-slate-600",
    bgColor: "from-slate-900/20 via-slate-800/10 to-slate-700/5",
    accentColor: "slate",
    features: ["Cashback 3%", "Salas VIP", "Sin anualidad"],
    animation: "animate-float-slow",
  },
  {
    id: 2,
    title: "Tarjeta Gold",
    description:
      "Perfecta para el día a día con recompensas en cada compra y meses sin intereses en comercios seleccionados.",
    icon: Wallet,
    color: "from-amber-600 to-yellow-500",
    bgColor: "from-amber-500/20 via-yellow-400/10 to-orange-300/5",
    accentColor: "amber",
    features: ["MSI disponible", "Puntos dobles", "Seguro de viaje"],
    animation: "animate-bounce-gentle",
  },
  {
    id: 3,
    title: "Tarjeta Empresarial",
    description:
      "Diseñada para negocios con control de gastos, reportes detallados y líneas de crédito flexibles.",
    icon: Building2,
    color: "from-blue-700 to-blue-500",
    bgColor: "from-blue-600/20 via-blue-500/10 to-cyan-400/5",
    accentColor: "blue",
    features: ["Control gastos", "Reportes", "Multi-tarjetas"],
    animation: "animate-pulse-soft",
  },
  {
    id: 4,
    title: "Tarjeta Digital",
    description:
      "100% digital, perfecta para compras en línea con la mejor seguridad y CVV dinámico.",
    icon: Smartphone,
    color: "from-violet-600 to-purple-500",
    bgColor: "from-violet-600/20 via-purple-500/10 to-fuchsia-400/5",
    accentColor: "violet",
    features: ["CVV dinámico", "Sin plástico", "Activación inmediata"],
    animation: "animate-wiggle",
  },
  {
    id: 5,
    title: "Tarjeta Rewards",
    description:
      "Acumula puntos en cada compra y canjéalos por experiencias únicas, viajes y productos exclusivos.",
    icon: Gift,
    color: "from-emerald-600 to-teal-500",
    bgColor: "from-emerald-600/20 via-teal-500/10 to-green-400/5",
    accentColor: "emerald",
    features: ["Puntos x2", "Catálogo premium", "Sin límite"],
    animation: "animate-sway",
  },
];

export function ProductCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const activeProduct = products[activeIndex];

  return (
    <section
      className={cn(
        "py-32 transition-colors duration-1000 ease-in-out relative overflow-hidden min-h-200 flex items-center",
        `bg-linear-to-b ${activeProduct.bgColor}` // Cambiado de 'br' a 'b' para un flujo vertical
      )}
    >
      {/* Overlay superior para suavizar la entrada desde el Hero */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-background to-transparent z-10" />

      {/* Background Particles: Posicionamiento absoluto fijo al contenedor padre */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute w-125 h-125 rounded-full blur-[120px] transition-all duration-1000",
            activeIndex === 0 && "bg-slate-500/20 top-[-10%] left-[-10%]",
            activeIndex === 1 && "bg-amber-500/20 top-[10%] right-[-5%]",
            activeIndex === 2 && "bg-blue-500/20 bottom-[-10%] left-[0%]",
            activeIndex === 3 && "bg-violet-500/20 top-[20%] right-[10%]",
            activeIndex === 4 && "bg-emerald-500/20 bottom-[0%] left-[10%]"
          )}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestras <span className="text-gradient-toka">Tarjetas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre la tarjeta perfecta para tu estilo de vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10 md:mt-32">
          {/* Cambiado a items-start para evitar estiramientos raros */}
          {/* Main Card Display */}
          <div className="relative flex justify-center items-center min-h-75">
            <div className="relative">
              <div
                key={activeProduct.id}
                className={cn(
                  "w-80 md:w-96 h-52 md:h-60 rounded-3xl shadow-2xl p-8 text-white transition-all duration-500 bg-linear-to-br transform",
                  activeProduct.color,
                  activeProduct.animation
                )}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/70 text-sm">TOKA</p>
                      <h3 className="text-xl font-bold">
                        {activeProduct.title}
                      </h3>
                    </div>
                    <activeProduct.icon className="h-10 w-10 opacity-50" />
                  </div>
                  <div>
                    <div className="text-xl tracking-widest font-mono mb-2">
                      •••• •••• •••• 4589
                    </div>
                    <div className="flex gap-2 text-[10px]">
                      {activeProduct.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-white/20 px-2 py-1 rounded-full whitespace-nowrap"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </div>
          {/* Thumbnails & Description */}
          <div className="flex flex-col justify-center h-full">
            {/* Bloque de texto con altura mínima controlada */}
            <div className="min-h-45 md:min-h-50 flex flex-col justify-start">
              <h3 className="text-3xl font-bold mb-4 transition-all">
                {activeProduct.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {activeProduct.description}
              </p>
              <div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl">
                  Solicitar esta tarjeta
                </Button>
              </div>
            </div>

            {/* Thumbnail Grid & Indicators */}
            <div className="mt-12 space-y-6">
              <div className="flex gap-3 flex-wrap">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-16 h-10 rounded-lg transition-all duration-300 bg-linear-to-br relative overflow-hidden",
                      product.color,
                      activeIndex === index
                        ? "ring-2 ring-primary ring-offset-4 scale-110 shadow-lg"
                        : "opacity-40 hover:opacity-70"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay inferior para suavizar la salida hacia Partners */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}
