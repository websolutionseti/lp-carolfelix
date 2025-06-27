"use client";

import Image from "next/image";
import styles from "./ProblemSection.module.css";

const problems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cff85bb506eb4115189491821638b6936467bdf7?width=135",
    text: "Quer ser reconhecida(o) por quem realmente ",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13ccddb86af95d1aed553875ba2c9369d4d8cbc7?width=135",
    text: "Tentou aparecer, mas se sentiu forçada(o), desconfortável ou até julgada(o).",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/760a931c80fd83a21acffa302854e9dba1279077?width=135",
    text: "Sente que tem muito a dizer, mas trava sempre que pensa em se expor",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee413f9b96b373d7d8a28256a3d3fff2395b8b48?width=135",
    text: " Sabe que tem algo valioso pra entregar, mas ainda se sente invisível",
  },
];

export const ProblemSection = () => {
  return (
    <section
      className={styles.problemSection}
      aria-labelledby="problem-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/821062f44564e545b19a43f19e8ca9289236f1bf?width=2892"
          alt=""
          width={1446}
          height={838}
          className={styles.backgroundImage}
        />

        <div className={styles.content}>
          <h2 id="problem-heading" className={styles.heading}>
            "Essa aula é pra você se..."
          </h2>

          <div className={styles.problemsList}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.problemItem}>
                <Image
                  src={problem.icon}
                  alt=""
                  width={68}
                  height={63}
                  className={styles.problemIcon}
                />
                <p className={styles.problemText}>{problem.text}</p>
              </div>
            ))}
          </div>

          <p className={styles.conclusion}>
            Se você se enxergou em alguma dessas frases, essa aula é o seu ponto
            de virada.
          </p>

          <button
            className={`${styles.ctaButton} cta-button`}
            aria-label="Quero mudar isso - Inscrever-se na imersão"
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1ca2c40b066f1dbaed2da101e284cb110ab50b?width=623"
              alt=""
              width={311}
              height={68}
              className={styles.buttonBackground}
            />
            <span className={styles.buttonText}>QUERO MUDAR ISSO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
