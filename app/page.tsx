import { Suspense, lazy } from "react";
import { HeroSection } from "../components/HeroSection";
import "../styles/animations.css";

// Lazy load non-critical sections for better performance
const ProblemSection = lazy(() =>
  import("../components/ProblemSection").then((m) => ({
    default: m.ProblemSection,
  })),
);
const SolutionSection = lazy(() =>
  import("../components/SolutionSection").then((m) => ({
    default: m.SolutionSection,
  })),
);
const BenefitsSection = lazy(() =>
  import("../components/BenefitsSection").then((m) => ({
    default: m.BenefitsSection,
  })),
);
const InstructorSection = lazy(() =>
  import("../components/InstructorSection").then((m) => ({
    default: m.InstructorSection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("../components/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const CasesSection = lazy(() =>
  import("../components/CasesSection").then((m) => ({
    default: m.CasesSection,
  })),
);
const PricingSection = lazy(() =>
  import("../components/PricingSection").then((m) => ({
    default: m.PricingSection,
  })),
);
const FooterSection = lazy(() =>
  import("../components/FooterSection").then((m) => ({
    default: m.FooterSection,
  })),
);

// Loading component for suspense
const SectionSkeleton = () => (
  <div
    className="skeleton"
    style={{ height: "400px", width: "100%" }}
    role="status"
    aria-label="Carregando seção"
  >
    <span className="sr-only">Carregando conteúdo...</span>
  </div>
);

export default function LandingPage() {
  return (
    <>
      {/* Navigation landmarks for screen readers */}
      <nav aria-label="Navegação da página" className="sr-only">
        <ul>
          <li>
            <a href="#hero">Início</a>
          </li>
          <li>
            <a href="#problems">Identificação de Problemas</a>
          </li>
          <li>
            <a href="#solution">Solução</a>
          </li>
          <li>
            <a href="#benefits">Benefícios</a>
          </li>
          <li>
            <a href="#instructor">Instrutora</a>
          </li>
          <li>
            <a href="#testimonials">Depoimentos</a>
          </li>
          <li>
            <a href="#cases">Cases de Sucesso</a>
          </li>
          <li>
            <a href="#pricing">Investimento</a>
          </li>
        </ul>
      </nav>

      <main role="main" className="landing-page">
        {/* Hero Section - Above the fold, no lazy loading */}
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* Below the fold sections - lazy loaded */}
        <section id="problems" aria-labelledby="problems-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <ProblemSection />
          </Suspense>
        </section>

        <section id="solution" aria-labelledby="solution-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <SolutionSection />
          </Suspense>
        </section>

        <section id="benefits" aria-labelledby="benefits-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <BenefitsSection />
          </Suspense>
        </section>

        <section id="instructor" aria-labelledby="instructor-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <InstructorSection />
          </Suspense>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <section id="cases" aria-labelledby="cases-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <CasesSection />
          </Suspense>
        </section>

        <section id="pricing" aria-labelledby="pricing-heading">
          <Suspense fallback={<SectionSkeleton />}>
            <PricingSection />
          </Suspense>
        </section>
      </main>

      {/* Footer Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <FooterSection />
      </Suspense>
    </>
  );
}
