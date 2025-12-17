import { Gift } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container-section">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Gift className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Amigo Oculto Angola</span>
          </div>

          {/* Made in Angola */}
          <p className="text-muted-foreground mb-6">
            Desenvolvido com ❤️ em Angola 🇦🇴
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Termos de Uso
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacidade
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amigo Oculto Angola. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
