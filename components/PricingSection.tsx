"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./PricingSection.module.css";

export const PricingSection = () => {
  const { elementRef: sectionRef } = useScrollAnimation({
    threshold: 0.1,
    className: "fade-in-up",
  });

  const handleCTAClick = () => {
    // Handle registration
    console.log("Registro iniciado");
  };

  return (
    <section
      ref={sectionRef}
      id="pricing-section"
      className={`${styles.pricingSection} optimize-performance`}
      aria-labelledby="pricing-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf56a5a71b088750d57e67e042a6f80011fa2bc?width=3036"
          alt=""
          width={1518}
          height={737}
          className={styles.backgroundImage}
          loading="lazy"
        />

        <div className={styles.leftContent}>
          <p className={`${styles.subtitle} text-responsive`}>
            Garanta seu ingresso para a imersão
          </p>

          <h2
            id="pricing-heading"
            className={`${styles.title} heading-responsive`}
          >
            <span className={styles.titleWhite}>FÓRMULA DA </span>
            <span className={styles.titleGold}>AUTORIDADE</span>
          </h2>

          <p className={`${styles.eventInfo} text-responsive`}>
            Evento online e ao vivo
          </p>

          <p className={`${styles.dateInfo} text-responsive`}>
            10 DE JULHO às 19H
          </p>
        </div>

        <div className={styles.rightContent}>
          <h3 className={`${styles.benefitTitle} text-responsive`}>
            Uma aula para destravar sua comunicação, reorganizar sua presença e
            construir uma autoridade verdadeira!
          </h3>

          <div className={styles.investmentSection}>
            <h4 className={`${styles.investmentLabel} text-responsive`}>
              INVESTIMENTO:
            </h4>

            <div className={styles.priceBox}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f337f26edfa5311f9360aa530249880787116df?width=1059"
                alt=""
                width={529}
                height={204}
                className={styles.priceBackground}
                loading="lazy"
              />
              <div className={styles.priceContent}>
                <p className={styles.originalPrice}>DE R$297 POR APENAS</p>
                <p className={styles.finalPrice}>R$ 90,00</p>
              </div>
            </div>
          </div>

          <button
            className={`${styles.ctaButton} hover-lift focus-ring`}
            onClick={handleCTAClick}
            aria-label="Garantir ingresso para a Fórmula da Autoridade"
            type="button"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a26b763f2200e4549460307df9da19d90b07a7?width=889"
              alt=""
              width={444}
              height={89}
              className={styles.buttonBackground}
              loading="lazy"
            />
            <span className={styles.buttonText}>
              QUERO GARANTIR MEU INGRESSO
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
