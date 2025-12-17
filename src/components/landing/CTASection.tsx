import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Check, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Email registado!",
      description: "Será notificado quando o lançamento acontecer.",
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary mb-8 shadow-glow">
            <Gift className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Seja o primeiro a saber
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Registe o seu email para receber novidades sobre o lançamento e ter acesso antecipado à aplicação.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="O seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-base rounded-xl border-border bg-card"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isLoading}
                  className="sm:w-auto"
                >
                  {isLoading ? (
                    "A registar..."
                  ) : (
                    <>
                      Entrar na lista
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sem spam. Apenas novidades importantes sobre o lançamento.
              </p>
            </form>
          ) : (
            <div className="animate-scale-in">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary-light border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Tudo pronto!</p>
                  <p className="text-sm text-muted-foreground">Será notificado em {email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
