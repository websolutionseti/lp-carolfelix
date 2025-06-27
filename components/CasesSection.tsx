"use client";

import Image from "next/image";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";
import styles from "./CasesSection.module.css";

export const CasesSection = () => {
  const { elementRef: sectionRef } = useScrollAnimation({
    threshold: 0.1,
    className: "fade-in-up",
  });

  const { containerRef, visibleItems } = useStaggeredAnimation(2, 200, {
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className={`${styles.casesSection} optimize-performance`}
      aria-labelledby="cases-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c85ab40a5fa33546e6f6362d5a1f01e06cef1f?width=3020"
          alt=""
          width={1510}
          height={735}
          className={styles.backgroundImage}
          loading="lazy"
        />

        <div className={styles.header}>
          <h2
            id="cases-heading"
            className={`${styles.title} heading-responsive`}
          >
            <span className={styles.titleLine}>CASES DE SUCESSO</span>
          </h2>
          <p className={`${styles.subtitle} text-responsive`}>
            Criamos estratégias de comunicação para essas duas grandes empresas
            e além de resultado de vendas, a interação do público foi ainda mais
            intensa.
          </p>
        </div>

        <div
          ref={containerRef}
          className={`${styles.casesGrid} stagger-container`}
        >
          <div
            className={`${styles.caseItem} stagger-item ${visibleItems[0] ? "visible" : ""}`}
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c5971f88859763b9168bc252566df381f01b87?width=788"
              alt="Case de sucesso: A maior escola de análise do mundo com 1 milhão de seguidores"
              width={394}
              height={211}
              className={styles.caseImage}
              loading="lazy"
            />
            <div className={styles.caseDescription}>
              <p>
                A MAIOR ESCOLA DE ANÁLISE DO MUNDO COM 1 MILHÃO DE SEGUIDORES
              </p>
            </div>
          </div>

          <div
            className={`${styles.caseItem} stagger-item ${visibleItems[1] ? "visible" : ""}`}
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea54e6a8929b958dcf7195d023047d0b8c07f319?width=740"
              alt="Case de sucesso: Casal de médicos que se comunicam com outros médicos e pacientes com 161 mil seguidores"
              width={370}
              height={237}
              className={styles.caseImage}
              loading="lazy"
            />
            <div className={styles.caseDescription}>
              <p>
                CASAL DE MÉDICOS QUE SE COMUNICAM COM OUTROS MÉDICOS E PACIENTES
                COM 161 MIL SEGUIDORES
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true">
          <svg
            width="118"
            height="92"
            viewBox="0 0 118 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.568481 0.504829H117.415V30.4531H0.568481V0.504829ZM0.568481 61.3872H117.415V91.3354H0.568481V61.3872Z"
              fill="var(--color-primary)"
            />
          </svg>
        </div>

        <div className={styles.testimonialsList}>
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/513feb99c5b0d196d418c96da3d1eec0bec7fe38?width=836",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/f17791bcb36ba77ac55e67f3ae1bdedde79b1992?width=836",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/b23738c986e45e940e88f83f94f452e88d12c2d8?width=836",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/adda1925a1702fd86d91ddc5ce59da770d374d46?width=836",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/eb91eb10ef2be741d1265d006ac5248e0c3efb23?width=836",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0091fd9ff07c73e6a9b7f90f82ed74a225b538da?width=836",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Depoimento ${index + 1} sobre o método`}
              width={418}
              height={60}
              className={styles.testimonialImage}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
