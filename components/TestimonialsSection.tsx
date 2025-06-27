"use client";

import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

const testimonialImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/3ffc3b1185cdc56716bbd816ac4742a6e8aa3ac3?width=722",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/17d6bb4a9f72534715be5c0d5150e8a964bf4f08?width=466",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/8155b044167a9dc591b8874fb634293f8fb04a8a?width=720",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/102e0024f761ccd1d81180179dde56f504d91fb0?width=550",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/153876491fb03dc01163128b237b4e0fab602851?width=758",
];

export const TestimonialsSection = () => {
  return (
    <section
      className={styles.testimonialsSection}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e05f69e0086e45579d525c845b1575892838cc?width=2868"
          alt=""
          width={1434}
          height={894}
          className={styles.backgroundImage1}
        />
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/279c78abe36a26fc2faf73ec8deeb503a2e8bb9d?width=2890"
          alt=""
          width={1445}
          height={884}
          className={styles.backgroundImage2}
        />

        <div className={styles.header}>
          <h2 id="testimonials-heading" className={styles.title}>
            <span className={styles.titleLine}>VEJA O QUE ESTÃO</span>
            <span className={styles.titleLine}>FALANDO DO MÉTODO</span>
          </h2>
        </div>

        <div
          className={styles.testimonialsGrid}
          role="region"
          aria-label="Depoimentos de alunos"
        >
          {testimonialImages.map((image, index) => (
            <div key={index} className={styles.testimonialItem}>
              <Image
                src={image}
                alt={`Depoimento ${index + 1} - Feedback positivo de aluno sobre o método`}
                width={
                  index === 1
                    ? 233
                    : index === 3
                      ? 275
                      : index === 4
                        ? 379
                        : 361
                }
                height={
                  index === 1
                    ? 233
                    : index === 3
                      ? 244
                      : index === 4
                        ? 357
                        : index === 2
                          ? 175
                          : 222
                }
                className={styles.testimonialImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            <span className={styles.footerWhite}>FÓRMULA DA</span>
            <span className={styles.footerGold}>AUTORIDADE</span>
          </p>
        </div>
      </div>
    </section>
  );
};
