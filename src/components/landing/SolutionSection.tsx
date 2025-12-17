import { Gift, Check } from "lucide-react";

const benefits = [
  "Centraliza tudo num só lugar",
  "Interface simples e intuitiva",
  "Segurança em cada etapa",
  "Adaptado ao contexto angolano",
  "Funciona em tempo real",
  "Suporte à moeda local (AOA)",
];

export const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Visual */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-primary-light to-background rounded-3xl p-8 lg:p-12 border border-primary/20">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-primary flex items-center justify-center shadow-glow">
                      <Gift className="w-16 h-16 lg:w-20 lg:h-20 text-primary-foreground" />
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border animate-float">
                      <span className="text-xl">🎄</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                      <span className="text-xl">🎁</span>
                    </div>
                    <div className="absolute top-1/2 -right-8 w-10 h-10 bg-accent rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                      <span className="text-sm">✨</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Amigo Oculto Angola</h3>
                  <p className="text-muted-foreground">A solução completa para o seu evento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              A Solução
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Tudo o que precisa, num só lugar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              O Amigo Oculto Angola foi criado para simplificar a organização de eventos de troca de presentes. Uma aplicação moderna, segura e pensada para a realidade angolana.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
