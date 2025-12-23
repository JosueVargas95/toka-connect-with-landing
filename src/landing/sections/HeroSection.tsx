import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, CreditCard } from "lucide-react";

const features = [
  { icon: Shield, label: "Seguridad Garantizada" },
  { icon: Zap, label: "Pagos Instantáneos" },
  { icon: CreditCard, label: "Sin Comisiones Ocultas" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 gradient-toka opacity-5" />
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Izquierdo: Contenido */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Líder en soluciones de pago en México
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transforma la forma en que{" "}
              <span className="text-gradient-toka block sm:inline">
                manejas tu dinero
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Descubre nuestras tarjetas y soluciones de pago diseñadas para
              simplificar tu vida financiera con la mejor tecnología y
              seguridad.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 group rounded-xl"
              >
                <Link to="/cotizacion" className="flex items-center">
                  Solicitar Cotización{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/5 rounded-xl"
              >
                <Link to="/servicios/tarjetas-credito">Ver Tarjetas</Link>
              </Button>
            </div>

            {/* Features */}
            <div
              className="flex items-center flex-wrap gap-6 animate-fade-in-up justify-center lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-muted-foreground bg-white/5 lg:bg-transparent px-3 py-1.5 rounded-full border border-white/5 lg:border-0 lg:p-0"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Las 3 Tarjetas Visuales */}
          <div className="relative flex justify-center items-center lg:mt-0 animate-slide-in-right">
            {/* Contenedor que escala las tarjetas en móviles para que no se corten */}
            <div className="relative w-full max-w-87.5 sm:max-w-112.5 aspect-square flex items-center justify-center scale-75 sm:scale-90 lg:scale-100">
              <div className="relative group w-96 h-64">
                {/* 1. Tarjeta Platinum (Principal - Al frente) */}
                <div className="absolute z-30 top-8 left-8 w-80 h-48 card-shine bg-slate-600 rounded-2xl shadow-2xl transform rotate-6 transition-all duration-500 ease-out group-hover:rotate-12 group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:shadow-slate-500/40">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="text-lg font-bold">TOKA</div>
                      <div className="text-xs opacity-70">PLATINUM</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg tracking-widest font-mono">
                        •••• •••• •••• 4589
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>12/28</span>
                        <span className="font-semibold">VISA</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
                </div>

                {/* 2. Tarjeta Gold (Secundaria - Atrás) */}
                <div className="absolute z-20 top-12 -left-4 w-80 h-48 bg-linear-to-br from-amber-500 to-yellow-400 rounded-2xl shadow-xl transform -rotate-6 opacity-90 transition-all duration-500 ease-out group-hover:-rotate-12 group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:shadow-amber-500/40">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="text-lg font-bold">TOKA</div>
                      <div className="text-xs opacity-70">GOLD</div>
                    </div>
                    <div className="space-y-2 text-lg tracking-widest font-mono">
                      •••• •••• •••• 7823
                    </div>
                  </div>
                </div>

                {/* 3. Tarjeta Digital (Tercera - Aparece/Se mueve en Hover) */}
                <div className="absolute z-10 top-24 left-16 w-80 h-48 bg-linear-to-br from-violet-600 to-purple-500 rounded-2xl shadow-lg transform rotate-0 opacity-0 scale-90 transition-all duration-700 ease-out group-hover:opacity-90 group-hover:scale-100 group-hover:translate-y-12 group-hover:translate-x-4">
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="text-lg font-bold">TOKA</div>
                      <div className="text-xs opacity-70">DIGITAL</div>
                    </div>
                    <div className="text-lg tracking-widest font-mono">
                      •••• •••• •••• 2156
                    </div>
                  </div>
                </div>

                {/* Badge 0% CAT */}
                <div className="absolute z-40 -top-4 right-4 w-16 h-16 bg-toka-gold rounded-full flex items-center justify-center shadow-lg animate-bounce transition-transform duration-300 group-hover:scale-110">
                  <span className="text-black font-bold text-[10px] text-center leading-tight">
                    0%
                    <br />
                    CAT
                  </span>
                </div>

                {/* Glow de fondo al hacer hover */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/0 to-amber-500/0 rounded-3xl blur-3xl transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-amber-500/10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background to-transparent z-20" />
    </section>
  );
}
