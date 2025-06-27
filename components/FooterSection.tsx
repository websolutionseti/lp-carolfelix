"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "./FooterSection.module.css";

export const FooterSection = () => {
  const { elementRef: sectionRef } = useScrollAnimation({
    threshold: 0.1,
    className: "fade-in-up",
  });

  const socialLinks = [
    {
      href: "#",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f39bf62b8dbb98bc132de4445fdc15b4294eb721?width=91",
      alt: "Instagram da Carolina - Fórmula da Autoridade",
      label: "Instagram",
    },
    {
      href: "#",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de2b2904d8ffe668e6c2621213265849d84cb65c?width=91",
      alt: "LinkedIn da Carolina - Fórmula da Autoridade",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      ref={sectionRef}
      className={`${styles.footerSection} optimize-performance`}
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className={styles.container}>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c85f2ff8c8f07787f1e99343acd2a395b4d14bd?width=3112"
          alt=""
          width={1556}
          height={803}
          className={styles.backgroundMask}
          loading="lazy"
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/87a7e1f50cd41e5222a1d85f681031aed138f127?width=3136"
          alt=""
          width={1568}
          height={803}
          className={styles.backgroundFrame}
          loading="lazy"
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4e73795a1af150fa7c1b844f542002c504da728?width=1834"
          alt=""
          width={917}
          height={794}
          className={styles.glowEffect}
          loading="lazy"
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/589fee1670861c0693f3eac2739cc99b117c330d?width=1658"
          alt="Carolina - Criadora da Fórmula da Autoridade"
          width={829}
          height={803}
          className={styles.instructorImage}
          loading="lazy"
        />

        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbd0f468fa69ff6ea5dd57eef2a17584f04c14f?width=3136"
          alt=""
          width={1568}
          height={805}
          className={styles.textMask}
          loading="lazy"
        />

        <div className={styles.content}>
          <h2
            id="footer-heading"
            className={`${styles.title} heading-responsive`}
          >
            <span className={styles.titleWhite}>FÓRMULA DA </span>
            <span className={styles.titleGold}>AUTORIDADE</span>
          </h2>

          <div className={styles.socialSection}>
            <p className={`${styles.socialText} text-responsive`}>
              ME SIGA EM MINHAS REDES SOCIAIS:
            </p>

            <div className={styles.socialLinks} role="list">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${styles.socialLink} hover-lift focus-ring`}
                  aria-label={`Seguir Carolina no ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={45}
                    height={45}
                    className={styles.socialIcon}
                    loading="lazy"
                  />
                </a>
              ))}

              {/* TikTok icon as SVG */}
              <a
                href="#"
                className={`${styles.socialLink} hover-lift focus-ring`}
                aria-label="Seguir Carolina no TikTok"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                <svg
                  className={styles.socialIcon}
                  width="45"
                  height="45"
                  viewBox="0 0 42 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5899 2.12152L30.2275 2.09388C30.0892 7.36754 40.4401 17.2813 41.27 18.4148C37.0075 18.9378 33.0238 19.2696 30.2275 16.9495L30.1998 32.8557C30.1445 37.1641 28.291 40.3665 26.0479 42.493C25.8566 42.6865 25.6629 42.8801 25.4393 43.0459C22.5622 45.4766 19.7405 46.6055 15.8652 46.5801C12.0453 46.5249 9.16595 45.0895 6.73152 42.9907C4.90569 41.4171 3.4395 39.3735 2.60728 36.5558C0.809118 30.3721 3.1352 24.352 8.2807 20.8431C8.36369 20.7602 8.47435 20.6772 8.58501 20.622C10.9364 18.9931 14.5927 18.0277 17.9954 18.5784V26.3656C15.6439 25.7597 13.5392 26.285 11.99 27.5821C11.9623 27.5821 11.9623 27.6097 11.9347 27.6374C10.4408 28.9068 9.58322 30.7845 9.69387 32.9133C9.97051 36.7217 13.1242 39.097 16.5568 38.9312H16.5845C19.9042 38.5994 22.6452 35.8946 22.5622 32.2498L22.5899 2.12152Z"
                    fill="#FE2C55"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomInfo}>
          <p className={styles.copyright}>
            © 2024 Fórmula da Autoridade. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>
            Desenvolvido com ❤️ para transformar sua presença digital
          </p>
        </div>
      </div>
    </footer>
  );
};
