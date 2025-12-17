import { Home, Users, Building2, Heart, Sparkles } from "lucide-react";

const audiences = [
  {
    icon: Home,
    title: "Famílias",
    description: "Organize o tradicional Amigo Oculto de Natal com toda a família, mesmo à distância.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Grupos de amigos",
    description: "Reúna a turma e faça um sorteio justo, sem complicações.",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Gerencie eventos corporativos com dezenas de participantes de forma profissional.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Comunidades",
    description: "Igrejas, associações e grupos podem usar para eventos especiais.",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Eventos especiais",
    description: "Aniversários, chás e outras ocasiões que pedem troca de presentes.",
    color: "primary",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Para Quem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Feito para todos os tipos de grupos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seja qual for a ocasião, o Amigo Oculto Angola adapta-se às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`group p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300 animate-fade-in-up ${
                index === audiences.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:mx-0 sm:mx-auto sm:max-w-md lg:max-w-none" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                audience.color === "primary" 
                  ? "bg-primary/10 group-hover:bg-primary group-hover:shadow-glow" 
                  : "bg-accent/10 group-hover:bg-accent"
              }`}>
                <audience.icon className={`w-7 h-7 transition-colors ${
                  audience.color === "primary" 
                    ? "text-primary group-hover:text-primary-foreground" 
                    : "text-accent group-hover:text-accent-foreground"
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
