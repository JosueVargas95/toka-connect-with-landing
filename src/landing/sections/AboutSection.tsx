import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Users, Award, TrendingUp, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "2M+", label: "Clientes activos" },
  { icon: Award, value: "15+", label: "Años de experiencia" },
  { icon: TrendingUp, value: "98%", label: "Satisfacción" },
  { icon: Globe, value: "32", label: "Estados en México" },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold mb-2">Quiénes Somos</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Más de 15 años transformando las{" "}
                <span className="text-gradient-toka">finanzas en México</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TOKA es una institución financiera líder en México, comprometida
                con brindar soluciones de pago innovadoras y accesibles. Nuestra
                misión es simplificar la vida financiera de millones de
                mexicanos a través de tecnología de vanguardia y un servicio
                excepcional.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Contamos con el respaldo de las principales redes de pago
              internacionales y cumplimos con los más altos estándares de
              seguridad para proteger cada una de tus transacciones.
            </p>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to="/afiliate">Conoce más sobre nosotros</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-gradient-toka">{value}</p>
                <p className="text-muted-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
