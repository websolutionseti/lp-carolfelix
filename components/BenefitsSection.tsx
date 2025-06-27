"use client";

import Image from "next/image";
import styles from "./BenefitsSection.module.css";

const benefits = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/22f02d76070b60046fc8c802ac0ee364e7c7f741?width=102",
    text: "Clareza sobre o que trava a sua presença hoje",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09dc4a26348d391a1c978ea40039ce51b87a743f?width=102",
    text: "Um roteiro emocional leve para organizar sua rotina com mais segurança",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad3d2e832f9f582e9f05738a1d681081455ac1ce?width=102",
    text: "Uma nova visão sobre o que é, de fato, autoridade — e como ela nasce de dentro",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8159f47cbe6590af1c6f789fc0d7971c9f6446b?width=102",
    text: "Permissão interna para se posicionar com autenticidade e consistência",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24b8b6d775264d64cc3cc938ad914e2f70595934?width=102",
    text: "A virada de chave para parar de adiar sua visibilidade",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      className={styles.benefitsSection}
      aria-labelledby="benefits-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f7369feaa9cdb58b7bc44f01a7f454fa8babd1?width=2892"
          alt=""
          width={1446}
          height={759}
          className={styles.backgroundImage}
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ed0c3e5e571d5f069af1bcec48b289397a610a?width=1118"
          alt=""
          width={559}
          height={754}
          className={styles.leftImage}
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aceeb6de5ac3800780ecb2d141e15c256d0bbe2?width=1397"
          alt=""
          width={698}
          height={13}
          className={styles.divider}
        />

        <div className={styles.leftContent}>
          <h2 className={styles.mainDescription}>
            A Fórmula da Autoridade é uma aula criada para pessoas que têm muito
            a oferecer — mas que ainda não conseguem se expressar com segurança
            e consistência.
          </h2>

          <p className={styles.secondaryDescription}>
            Aqui, você vai descobrir o protocolo emocional para reorganizar seus
            dias, alinhar sua energia e começar a aparecer com verdade.
          </p>
        </div>

        <div className={styles.rightContent}>
          <h3 id="benefits-heading" className={styles.benefitsTitle}>
            Ao final da aula, você vai sair com:
          </h3>

          <div className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <Image
                  src={benefit.icon}
                  alt=""
                  width={51}
                  height={49}
                  className={styles.benefitIcon}
                />
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>

          <button
            className={`${styles.ctaButton} cta-button`}
            aria-label="Quero aprender - Inscrever-se na imersão"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c91d8e7a8d106f28adb5739f1d84bae34652bc9?width=606"
              alt=""
              width={303}
              height={68}
              className={styles.buttonBackground}
            />
            <span className={styles.buttonText}>QUERO APRENDER!</span>
          </button>
        </div>
      </div>
    </section>
  );
};
