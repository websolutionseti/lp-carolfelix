"use client";

import Image from "next/image";
import styles from "./SolutionSection.module.css";

export const SolutionSection = () => {
  return (
    <section
      className={styles.solutionSection}
      aria-labelledby="solution-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/336640613c03ed3952b0193a0963e8b618db4904?width=2892"
          alt=""
          width={1446}
          height={838}
          className={styles.backgroundImage}
        />

        <div className={styles.leftContent}>
          <h2 id="solution-heading" className={styles.title}>
            O QUE BLOQUEIA SUA PRESENÇA NÃO É FALTA DE TÉCNICA.
          </h2>

          <p className={styles.description}>
            É o excesso de julgamento interno, a autocobrança, a ansiedade de
            parecer perfeita(o).
          </p>

          <div className={styles.infoBox}>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/064605b90bc653aebe134851b3154b9e779cff06?width=1020"
              alt=""
              width={510}
              height={224}
              className={styles.boxBackground}
            />
            <div className={styles.boxContent}>
              <p className={styles.boxText}>
                É aquela voz que diz: • "Quando eu estiver pronta(o), eu
                apareço" • "Quando eu me sentir mais segura(o), eu falo" •
                "Quando eu souber exatamente o que dizer, eu posto"
              </p>
            </div>
          </div>

          <button
            className={`${styles.ctaButton} cta-button`}
            aria-label="Desbloqueie agora - Inscrever-se na imersão"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9be5253b9390bd49accabe2dd1a7a66fe25fffc1?width=622"
              alt=""
              width={311}
              height={68}
              className={styles.buttonBackground}
            />
            <span className={styles.buttonText}>DESBLOQUEIE AGORA!</span>
          </button>
        </div>

        <div className={styles.rightImage}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e80991a8171967fc841857899b28f0e69971c87d?width=1668"
            alt="Homem com microfone"
            width={834}
            height={838}
            className={styles.manImage}
          />
        </div>
      </div>
    </section>
  );
};
