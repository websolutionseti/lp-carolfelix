"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    className: "fade-in-scale",
  });
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({
      threshold: 0.2,
      delay: 300,
      className: "fade-in-up",
    });

  const handleCTAClick = () => {
    // Scroll to pricing section or open registration
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} optimize-performance`}
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className={styles.heroContainer}>
        {/* Background images - decorative only */}
        <div className={styles.backgroundImages} aria-hidden="true">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a7a4159456ce31f01ca6c42ddfa09f5a8388812?width=1958"
            alt=""
            width={979}
            height={676}
            className={styles.bgImage1}
            priority
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19585c1f273d4179c032f1767e8203de3fb3224?width=2608"
            alt=""
            width={1304}
            height={689}
            className={styles.bgImage2}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da77b2a92f83d9f18042d034245a6811f1421583?width=1256"
            alt=""
            width={628}
            height={702}
            className={styles.bgImage3}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d235c9fde96423b4decdd3debf3639267718655e?width=1386"
            alt=""
            width={693}
            height={698}
            className={styles.bgImage4}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1175fb7581393199838cfa0c61ae384f33c03e0?width=1310"
            alt="Carolina - Instrutora principal do curso Fórmula da Autoridade"
            width={655}
            height={676}
            className={styles.carolImage}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a686f986b5e1ff0a5526c6277297bfcd441059?width=2872"
            alt=""
            width={1436}
            height={744}
            className={styles.bgImage6}
          />
        </div>

        {/* Main content */}
        <div ref={contentRef} className={`${styles.content} will-animate`}>
          <div className={styles.badge} role="complementary">
            <span className={styles.badgeText}>Imersão online</span>
          </div>

          <h1 id="hero-heading" className={styles.title}>
            <span className={styles.titleWhite}>FÓRMULA DA </span>
            <span className={styles.titleGold}>AUTORIDADE</span>
          </h1>

          <p className={styles.subtitle}>
            Para os que querem aparecer com verdade. Sem parecer forçado, sem
            imitar terceiros, sem se trair.
          </p>

          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95064b65faa4bed1b09627b49ee1766aa1acadf8?width=412"
            alt="Elemento decorativo dourado"
            width={206}
            height={88}
            className={styles.decorativeElement}
            aria-hidden="true"
          />

          <button
            className={`${styles.ctaButton} hover-lift focus-ring`}
            onClick={handleCTAClick}
            aria-label="Inscrever-se na imersão Fórmula da Autoridade - Ativar minha autoridade"
            type="button"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65a4d4e2ee55248bd00c60e0938651d6535f56c0?width=656"
              alt=""
              width={328}
              height={75}
              className={styles.buttonBackground}
              aria-hidden="true"
            />
            <span className={styles.buttonText}>
              QUERO ATIVAR MINHA AUTORIDADE
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
