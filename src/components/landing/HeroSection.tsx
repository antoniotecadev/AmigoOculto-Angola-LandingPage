import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Feito para Angola</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Organize o Amigo Oculto de forma{" "}
              <span className="text-gradient">simples, segura e moderna.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              O Amigo Oculto Angola é a aplicação completa para criar grupos, sortear participantes, gerir desejos e acompanhar tudo em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                <Gift className="w-5 h-5" />
                Em breve disponível
              </Button>
              <Button variant="hero-outline" size="xl">
                Saber mais
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Produto funcional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">Testes finais</span>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl" />
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* App screen mockup */}
                  <div className="p-6 pt-12 h-full bg-gradient-to-b from-primary-light to-background">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
                        <Gift className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground text-lg">Amigo Oculto</h3>
                      <p className="text-muted-foreground text-sm">Angola</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-card rounded-xl p-4 shadow-card">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-lg">🎄</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Natal da Família</p>
                            <p className="text-muted-foreground text-xs">8 participantes</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-card rounded-xl p-4 shadow-card">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <span className="text-lg">🏢</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Empresa ABC</p>
                            <p className="text-muted-foreground text-xs">25 participantes</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-card rounded-xl p-4 shadow-card">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-lg">👥</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">Amigos de Infância</p>
                            <p className="text-muted-foreground text-xs">12 participantes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-6 top-20 bg-card rounded-2xl p-3 shadow-lg animate-float border border-border">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎁</span>
                  <span className="text-sm font-medium text-foreground">Sorteio feito!</span>
                </div>
              </div>
              
              <div className="absolute -left-6 bottom-32 bg-card rounded-2xl p-3 shadow-lg animate-float border border-border" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-sm font-medium text-foreground">AOA 5.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
