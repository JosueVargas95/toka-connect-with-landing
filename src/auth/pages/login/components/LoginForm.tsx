import { Eye, EyeOff, ArrowRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLoginHook } from "@/auth/hooks/useLogin.hook";

export const LoginForm = () => {
  const { form, handleSubmit, isLoading, setShowPassword, showPassword } =
    useLoginHook();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-7">
        <div className="space-y-5">
          {/* Campo Correo */}
          <div className="space-y-2.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-toka-navy text-[11px] font-extrabold uppercase tracking-[0.15em] ml-1 opacity-80">
                    Correo
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="Correo"
                      type="text"
                      placeholder="josue.vargas@toka.mx"
                      required
                      className="h-13 bg-white/80 border-slate-200 text-toka-navy placeholder:text-slate-400 focus:border-toka-blue focus:ring-toka-blue/20 rounded-2xl transition-all font-semibold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Campo Contraseña */}
          <div className="space-y-2.5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-toka-navy text-[11px] font-extrabold uppercase tracking-[0.15em] ml-1 opacity-80">
                    Contraseña
                  </FormLabel>

                  {/* Contenedor relativo para posicionar el ojo */}
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••••"
                        required
                        className="h-13 bg-white/80 border-slate-200 text-toka-navy placeholder:text-slate-400 placeholder:tracking-[0.3em] focus:border-toka-blue focus:ring-toka-blue/20 rounded-2xl transition-all font-semibold pr-12"
                      />
                    </FormControl>

                    {/* Botón del Ojo */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-toka-blue transition-colors flex items-center justify-center"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-[10px] font-bold text-toka-light-blue hover:text-toka-blue transition-colors uppercase tracking-tight"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
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
    </Form>
  );
};
