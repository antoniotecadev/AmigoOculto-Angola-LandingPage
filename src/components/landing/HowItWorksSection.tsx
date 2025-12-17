import { PlusCircle, UserPlus, Settings, Shuffle, Gift, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: PlusCircle,
    step: "01",
    title: "Criar um grupo",
    description: "Comece criando um novo grupo para o seu evento de Amigo Oculto.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Convidar participantes",
    description: "Partilhe o código único do grupo para que outros possam entrar.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Definir regras",
    description: "Configure o orçamento, datas e outras regras do evento.",
  },
  {
    icon: Shuffle,
    step: "04",
    title: "Executar o sorteio",
    description: "Com um clique, o sistema faz o sorteio de forma secreta e justa.",
  },
  {
    icon: Gift,
    step: "05",
    title: "Ver wishlist",
    description: "Descubra o que a pessoa que você tirou deseja ganhar.",
  },
  {
    icon: PartyPopper,
    step: "06",
    title: "Revelar",
    description: "No dia marcado, todos descobrem quem era o seu amigo oculto.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simples de usar, do início ao fim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em poucos passos, o seu Amigo Oculto está organizado e pronto para acontecer.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center shadow-card relative z-10">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
