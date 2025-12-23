import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import tokaLogo from "@/assets/toka-logo.png";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

const servicesItems = [
  { label: "Tarjetas de Crédito", href: "/servicios/tarjetas-credito" },
  { label: "Tarjetas de Débito", href: "/servicios/tarjetas-debito" },
  { label: "Pagos Empresariales", href: "/servicios/pagos-empresariales" },
  { label: "Soluciones Digitales", href: "/servicios/soluciones-digitales" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={tokaLogo} alt="TOKA" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Servicios Dropdown - Portal evita que el header se mueva */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary font-medium transition-colors outline-none">
                Servicios
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={20}
                className="w-56 animate-in fade-in zoom-in-95 duration-200"
              >
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link to={item.href} className="cursor-pointer w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/afiliate"
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Afíliate
            </Link>

            <Link
              to="/blog"
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Blog
            </Link>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-xl"
            >
              <Link to="/cotizacion">Solicita una Cotización</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-all duration-300",
                  isOpen ? "top-3 rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transition-all duration-300",
                  isOpen ? "top-3 -rotate-45" : "top-5"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Suave */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-md",
          isOpen
            ? "max-h-125 border-t border-border/50 opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">
              Servicios
            </p>
            <div className="grid grid-cols-1 gap-1">
              {servicesItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-3 text-base text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/50" />

          <div className="flex flex-col gap-4">
            <Link
              to="/afiliate"
              className="px-4 py-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Afíliate
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Button asChild className="w-full py-6 text-lg rounded-xl">
              <Link to="/cotizacion" onClick={() => setIsOpen(false)}>
                Solicita una Cotización
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
