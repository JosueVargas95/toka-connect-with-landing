import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="space-y-5">
        {/* Campo Usuario */}
        <div className="space-y-2.5">
          <Label
            htmlFor="usuario"
            className="text-toka-navy text-[11px] font-extrabold uppercase tracking-[0.15em] ml-1 opacity-80"
          >
            Usuario
          </Label>
          <Input
            id="usuario"
            type="text"
            placeholder="nombre.apellido"
            required
            className="h-13 bg-white/80 border-slate-200 text-toka-navy placeholder:text-slate-400 focus:border-toka-blue focus:ring-toka-blue/20 rounded-2xl transition-all font-semibold"
          />
        </div>

        {/* Campo Contraseña */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-end px-1">
            <Label
              htmlFor="password"
              className="text-toka-navy text-[11px] font-extrabold uppercase tracking-[0.15em] opacity-80"
            >
              Contraseña
            </Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="h-13 bg-white/80 border-slate-200 text-toka-navy placeholder:text-slate-400 focus:border-toka-blue focus:ring-toka-blue/20 rounded-2xl transition-all font-semibold pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-toka-blue transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="text-right mt-1">
            <a
              href="#"
              className="text-[10px] font-bold text-toka-light-blue hover:text-toka-blue transition-colors uppercase tracking-tight"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>

      {/* Botón de Acción Principal */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-13 gradient-toka hover:brightness-110 text-white font-bold rounded-2xl shadow-xl shadow-toka-blue/30 transition-all duration-300 group"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="tracking-widest text-xs uppercase">
              Validando...
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 w-full">
            <span className="tracking-[0.2em] uppercase text-xs">
              Iniciar Sesión
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </Button>

      {/* Nota de seguridad al final */}
      <p className="text-center text-[10px] text-toka-navy/40 font-medium">
        Acceso restringido a personal autorizado.
      </p>
    </form>
  );
};
