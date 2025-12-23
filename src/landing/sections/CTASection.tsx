import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fondo base que hace el blend */}
      <div className="absolute inset-0 gradient-toka" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para transformar tu manera de pagar?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Únete a más de 2 millones de mexicanos que ya disfrutan de los
            beneficios de nuestras tarjetas y soluciones de pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-toka-gold hover:bg-toka-gold/90 text-accent-foreground font-bold px-8 group"
            >
              <Link to="/cotizacion">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white hover:text-white font-semibold transition-all duration-300"
            >
              <a href="tel:8001234567" className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-toka-gold" />
                800 123 4567
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
