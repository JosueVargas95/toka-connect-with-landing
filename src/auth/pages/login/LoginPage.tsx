import { LoginForm } from "./components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-navy">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-bright/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(var(--color-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-cyan) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-cyan/20 backdrop-blur-sm border border-cyan/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-cyan" />
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 backdrop-blur-sm border border-cyan/20">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-cyan text-sm font-medium">
                  Plataforma Global Empresarial
                </span>
              </div>
            </div>

            <h1 className="text-6xl font-bold text-white leading-tight">
              <span className="block">toka</span>
              <span className="block text-cyan">connect</span>
            </h1>

            <p className="text-xl text-cyan-soft/80 max-w-md leading-relaxed">
              Conectando equipos globales con tecnología de vanguardia.
              Experiencia empresarial sin fronteras.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-cyan">150+</div>
                <div className="text-sm text-cyan-soft/60">
                  Países conectados
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan">24/7</div>
                <div className="text-sm text-cyan-soft/60">Soporte global</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan">99.9%</div>
                <div className="text-sm text-cyan-soft/60">
                  Uptime garantizado
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-xs text-cyan-soft/40">
            Toka Connect | Toka Internacional, S.A.P.I de C.V.{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <h1 className="text-4xl font-bold">
              <span className="text-navy">toka</span>
              <span className="text-cyan"> connect</span>
            </h1>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};
