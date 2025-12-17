import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { StatusSection } from "@/components/landing/StatusSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <section id="funcionalidades">
          <FeaturesSection />
        </section>
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <AudienceSection />
        <section id="seguranca">
          <SecuritySection />
        </section>
        <StatusSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
