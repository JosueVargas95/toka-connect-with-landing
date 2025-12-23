const partners = [
  { name: "VISA", logo: "VISA" },
  { name: "Mastercard", logo: "Mastercard" },
  { name: "Carnet", logo: "Carnet" },
  { name: "American Express", logo: "AMEX" },
  { name: "Prosa", logo: "PROSA" },
  { name: "Condusef", logo: "CONDUSEF" },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background">
      {" "}
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Respaldados por las principales redes de pago
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors cursor-default animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
