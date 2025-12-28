import { LoginForm } from "./components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-toka-navy relative overflow-hidden font-sans">
      {/* --- FONDO ANIMADO DE ALTO NIVEL --- */}
      <div className="absolute inset-0 z-0">
        {/* Capa 1: Orbes de Luz Dinámicos (Inspirados en tu versión anterior) */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-toka-light-blue/20 rounded-full blur-[110px] animate-float-slow opacity-60"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-toka-blue/15 rounded-full blur-[130px] animate-sway opacity-50"
          style={{ animationDelay: "-4s", animationDuration: "22s" }}
        />
        <div
          className="absolute top-[20%] right-[15%] w-[35%] h-[35%] bg-cyan-500/10 rounded-full blur-[90px] animate-float-slow opacity-40"
          style={{ animationDelay: "-10s", animationDuration: "15s" }}
        />

        {/* Capa 2: Red Global (Patrón de puntos y líneas en movimiento) */}
        <div
          className="absolute inset-0 opacity-25 animate-pan-slow"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, var(--color-toka-light-blue) 1.5px, transparent 1.5px),
              linear-gradient(to right, var(--color-toka-blue) 0.5px, transparent 0.5px),
              linear-gradient(to bottom, var(--color-toka-blue) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "45px 45px, 90px 90px, 90px 90px",
            backgroundBlendMode: "screen",
          }}
        />

        {/* Capa 3: Gradiente de profundidad (Viñeta) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-toka-navy)_100%)] opacity-70" />
      </div>

      {/* --- CONTENIDO CENTRADO --- */}
      <div className="relative z-10 w-full max-w-[420px] px-6 animate-fade-in-up">
        {/* Branding Toka Connect */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-monserrat font-bold tracking-tighter text-white">
            toka
            <span className="text-gradient-toka block mt-[-8px] text-right text-4xl md:text-5xl">
              connect
            </span>
          </h1>
        </div>

        {/* Card de Login con Glassmorphism sutil */}
        <div className="glass-effect border border-white/20 rounded-[2.5rem] p-10 shadow-2xl bg-white/10 backdrop-blur-2xl">
          <LoginForm />
        </div>

        {/* Footer Minimalista al fondo */}
        <footer className="mt-12 text-center space-y-3">
          <div className="flex justify-center gap-5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <a
              href="#"
              className="hover:text-toka-light-blue transition-colors"
            >
              Aviso de Privacidad
            </a>
            <span className="text-white/10">|</span>
            <a
              href="#"
              className="hover:text-toka-light-blue transition-colors"
            >
              Toka.com.mx
            </a>
          </div>
          <p className="text-[9px] text-white/20 tracking-[0.2em] uppercase">
            Toka Internacional S.A.P.I. de C.V. {new Date().getFullYear()} •
            v1.0.4
          </p>
        </footer>
      </div>
    </div>
  );
};
