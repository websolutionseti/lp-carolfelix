"use client";

import Image from "next/image";
import styles from "./InstructorSection.module.css";

export const InstructorSection = () => {
  return (
    <section
      className={styles.instructorSection}
      aria-labelledby="instructor-heading"
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b033be04515cd93864fa8e22725c7f32fe8533e?width=1384"
            alt=""
            width={692}
            height={838}
            className={styles.backgroundFrame}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97da6c068b6999992a019a5b102391aa716d44ee?width=1231"
            alt="Carolina - Sua professora"
            width={615}
            height={833}
            className={styles.instructorImage}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27ea78bf3eb86b0df82a160043caad4a7443fb4a?width=1692"
            alt=""
            width={846}
            height={464}
            className={styles.shadowRight}
          />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ed1870ae734c6ff58dc0f02c09ffd5c7c848848?width=1684"
            alt=""
            width={842}
            height={464}
            className={styles.shadowLeft}
          />
        </div>

        <div className={styles.rightContent}>
          <div className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <h2 id="instructor-heading" className={styles.title}>
                <span className={styles.titleLine}>SUA </span>
                <span className={styles.titleLine}>PROFESSORA</span>
              </h2>
            </div>
            <div className={styles.signatureImages}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaabbf74b9d0bc511ba97fc65f56201024aad8c?width=392"
                alt="Assinatura Carol"
                width={196}
                height={180}
                className={styles.signatureCarol}
              />
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2796ab5236607545e2b1bbe0a0c772ceb2e37ee2?width=303"
                alt="Assinatura Felix"
                width={151}
                height={180}
                className={styles.signatureFelix}
              />
            </div>
          </div>

          <div className={styles.bioContent}>
            <p className={styles.bioParagraph}>
              Sou jornalista há 14 anos, Psicanalista, Analista Corporal e
              Estrategista em Comunicação com foco em performance emocional,
              Carolina iniciou sua trajetória em vendas comercializando livros —
              primeiro de porta em porta e, posteriormente, em palestras. Entre
              2008 e 2012, vendeu mais de meio milhão de reais antes dos 30
              anos.
            </p>

            <p className={styles.bioParagraph}>
              Com 13 anos de experiência em comunicação institucional, sendo 8
              deles no setor educacional, desenvolveu estratégias de mídia,
              captação e posicionamento para instituições de ensino. Como
              apresentadora e produtora executiva, conduziu 934 edições ao vivo,
              sempre com foco em conexão e clareza de mensagem.
            </p>

            <p className={styles.bioParagraph}>
              Atualmente, une análise corporal e neuromarketing para formar
              times de vendas e matrícula com alta performance emocional,
              orientando líderes e equipes em estratégias de conversão para o
              mercado educacional e de desenvolvimento humano.
            </p>
          </div>

          <button
            className={`${styles.ctaButton} cta-button`}
            aria-label="Quero ser aluna(o) - Inscrever-se na imersão"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1b9bdd01c0524804687fef1d0e9b123c54134c4?width=650"
              alt=""
              width={325}
              height={75}
              className={styles.buttonBackground}
            />
            <span className={styles.buttonText}>QUERO SER ALUNA(O)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
