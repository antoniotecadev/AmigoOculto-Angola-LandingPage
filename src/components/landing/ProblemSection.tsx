import { FileQuestion, Shuffle, MessageSquareWarning, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: FileQuestion,
    title: "Confusão com papéis",
    description: "Papéis perdidos, nomes repetidos e sorteios que precisam ser refeitos.",
  },
  {
    icon: Shuffle,
    title: "Sorteios mal feitos",
    description: "Alguém sempre acaba tirando o próprio nome ou descobrindo quem tirou.",
  },
  {
    icon: MessageSquareWarning,
    title: "Mensagens perdidas",
    description: "Informações espalhadas em grupos de WhatsApp, difíceis de encontrar.",
  },
  {
    icon: HelpCircle,
    title: "Dificuldade com presentes",
    description: "Nunca saber o que a pessoa realmente quer ganhar.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-section">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Organizar o Amigo Oculto é sempre complicado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os anos, a mesma história: confusão, retrabalho e informação perdida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
