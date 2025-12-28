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
    // Simulación de login
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        {/* Usuario */}
        <div className="space-y-3">
          <Label
            htmlFor="usuario"
            className="text-toka-navy text-xs font-bold uppercase tracking-wider ml-1"
          >
            Usuario
          </Label>
          <Input
            id="usuario"
            type="text"
            placeholder="Ej. juan.perez@toka.com"
            required
            className="h-12 bg-white/60 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-toka-light-blue focus:ring-toka-light-blue/30 rounded-xl transition-all font-medium"
          />
        </div>

        {/* Contraseña */}
        <div className="space-y-3">
          <div className="flex justify-between items-end px-1">
            <Label
              htmlFor="password"
              className="text-toka-navy text-xs font-bold uppercase tracking-wider"
            >
              Contraseña
            </Label>
            <a
              href="#"
              className="text-[11px] font-semibold text-toka-light-blue hover:text-toka-blue transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="h-12 bg-white/60 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-toka-light-blue focus:ring-toka-light-blue/30 rounded-xl transition-all font-medium pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-toka-blue transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Botón Principal */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 gradient-toka hover:brightness-110 text-white font-bold rounded-xl shadow-lg shadow-toka-blue/20 transition-all duration-300 group relative overflow-hidden"
      >
        {/* Efecto de brillo al pasar el mouse */}
        <div className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:animate-shimmer" />

        {isLoading ? (
          <div className="flex items-center justify-center gap-3">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="tracking-wider text-sm">VERIFICANDO...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 w-full relative z-10">
            <span className="tracking-widest uppercase text-sm">
              Iniciar Sesión
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </Button>
    </form>
  );
};
