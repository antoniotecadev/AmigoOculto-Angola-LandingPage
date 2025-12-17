import { Shield, Lock, Eye, Server, Check } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Autenticação segura",
    description: "Acesso protegido por autenticação moderna e encriptada.",
  },
  {
    icon: Shield,
    title: "Controle de permissões",
    description: "Níveis de acesso definidos para administradores e participantes.",
  },
  {
    icon: Eye,
    title: "Privacidade garantida",
    description: "Cada participante só vê as informações que lhe dizem respeito.",
  },
  {
    icon: Server,
    title: "Infraestrutura moderna",
    description: "Servidores confiáveis com backups automáticos e alta disponibilidade.",
  },
];

export const SecuritySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
              Segurança
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Segurança e confiabilidade em primeiro lugar
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              O Amigo Oculto Angola foi construído com as melhores práticas de segurança para proteger os seus dados e garantir uma experiência tranquila.
            </p>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-card">
                {/* Shield animation */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md animate-pulse">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Dados protegidos
                  </h3>
                  <p className="text-muted-foreground">
                    Encriptação de ponta a ponta para todas as informações sensíveis.
                  </p>
                </div>

                {/* Security badges */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                    SSL/TLS
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                    HTTPS
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                    Auth 2.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
