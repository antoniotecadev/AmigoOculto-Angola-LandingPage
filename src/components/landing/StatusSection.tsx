import { CheckCircle2, Clock, Rocket } from "lucide-react";

export const StatusSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
              Status do Produto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Onde estamos agora
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparência sobre o estado actual do desenvolvimento do Amigo Oculto Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Completed */}
            <div className="p-6 rounded-2xl bg-card border-2 border-primary/30 shadow-card animate-fade-in-up">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Produto funcional
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                A aplicação está completa e operacional, com todas as funcionalidades principais implementadas.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">Concluído</span>
              </div>
            </div>

            {/* In Progress */}
            <div className="p-6 rounded-2xl bg-card border-2 border-accent/30 shadow-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fase final de testes
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                A testar com grupos seleccionados para garantir a melhor experiência possível.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium">Em andamento</span>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Lançamento público
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Em breve disponível para todos nas lojas de aplicações.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">Em breve</span>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 p-6 rounded-2xl bg-primary-light border border-primary/20 text-center">
            <p className="text-foreground">
              <span className="font-semibold">Acesso controlado:</span>{" "}
              <span className="text-muted-foreground">
                Neste momento, o acesso está limitado a grupos de teste. Registe o seu interesse para ser notificado quando o lançamento público acontecer.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
