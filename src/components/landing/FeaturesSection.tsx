import { 
  Users, 
  Shuffle, 
  Heart, 
  Bell, 
  Calendar, 
  Shield, 
  Coins, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Grupos com código exclusivo",
    description: "Crie grupos privados e convide participantes com um código único e seguro.",
  },
  {
    icon: Shuffle,
    title: "Sorteio automático e secreto",
    description: "O sistema faz o sorteio de forma justa e garante que ninguém descobre quem tirou quem.",
  },
  {
    icon: Heart,
    title: "Wishlist privada",
    description: "Cada participante pode adicionar seus desejos de presente, visíveis apenas para quem o tirou.",
  },
  {
    icon: Bell,
    title: "Notificações inteligentes",
    description: "Lembretes automáticos para datas importantes e actualizações do grupo.",
  },
  {
    icon: Calendar,
    title: "Revelação programada",
    description: "Defina a data de revelação e deixe o sistema criar a expectativa perfeita.",
  },
  {
    icon: Shield,
    title: "Gestão de participantes",
    description: "Controle total sobre quem entra e sai, com níveis de permissão para admins.",
  },
  {
    icon: Coins,
    title: "Orçamento em Kwanza",
    description: "Defina valores mínimos e máximos em AOA, adaptado à realidade local.",
  },
  {
    icon: Zap,
    title: "Tempo real",
    description: "Todas as actualizações acontecem instantaneamente para todos os participantes.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tudo para o evento perfeito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recursos pensados para facilitar cada etapa da organização do seu Amigo Oculto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
