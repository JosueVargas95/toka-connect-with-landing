import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { label: "Tarjetas de Crédito", href: "/servicios/tarjetas-credito" },
  { label: "Tarjetas de Débito", href: "/servicios/tarjetas-debito" },
  { label: "Pagos Empresariales", href: "/servicios/pagos-empresariales" },
  { label: "Soluciones Digitales", href: "/servicios/soluciones-digitales" },
];

const legalLinks = [
  { label: "Aviso de Privacidad", href: "#" },
  { label: "Términos y Condiciones", href: "#" },
  { label: "Contrato de Adhesión", href: "#" },
  { label: "Costos y Comisiones", href: "#" },
];

const companyLinks = [
  { label: "Acerca de Nosotros", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Afíliate", href: "/afiliate" },
  { label: "Contacto", href: "/cotizacion" },
];

export function Footer() {
  return (
    <footer className="gradient-toka text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo en Texto & Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-6 group cursor-default">
              <span className="text-3xl font-black tracking-tighter text-white relative overflow-hidden">
                TOKA
                {/* Capa de brillo animada */}
                <span className="absolute inset-0 animate-logo-shimmer text-transparent bg-clip-text">
                  TOKA
                </span>
              </span>
              {/* Punto decorativo animado */}
              <span className="w-2.5 h-2.5 bg-toka-gold rounded-full mt-2 animate-pulse shadow-[0_0_10px_rgba(255,191,0,0.5)]" />
            </div>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-sm">
              Somos una institución financiera comprometida con brindar
              soluciones de pago innovadoras y seguras para empresas y
              consumidores en México.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-toka-gold hover:text-navy-deep transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ... Resto de las columnas (Servicios, Empresa, Contacto) se mantienen igual ... */}

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Servicios</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-toka-gold transition-colors flex items-center gap-1 group"
                  >
                    <span className="h-px w-0 bg-toka-gold transition-all group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-toka-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-toka-gold" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-[10px] uppercase tracking-widest">
                    Teléfono
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    800 123 4567
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-toka-gold" />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-[10px] uppercase tracking-widest">
                    Email
                  </p>
                  <p className="font-medium text-sm md:text-base">
                    contacto@toka.mx
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-primary-foreground/50 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-primary-foreground/40 font-light italic">
              © {new Date().getFullYear()} TOKA. Innovación financiera para
              todos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
