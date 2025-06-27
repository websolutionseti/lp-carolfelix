import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/accessibility.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fórmula da Autoridade - Imersão Online | Carolina",
  description:
    "Para os que querem aparecer com verdade. Sem parecer forçado, sem imitar terceiros, sem se trair. Descubra o protocolo emocional para reorganizar seus dias, alinhar sua energia e começar a aparecer com verdade.",
  keywords:
    "autoridade, comunicação, presença, visibilidade, autenticidade, coaching, desenvolvimento pessoal, Carolina, jornalista, psicanalista",
  authors: [{ name: "Carolina", url: "https://formula-autoridade.com" }],
  creator: "Carolina",
  publisher: "Fórmula da Autoridade",
  openGraph: {
    title: "Fórmula da Autoridade - Imersão Online",
    description:
      "Para os que querem aparecer com verdade. Sem parecer forçado, sem imitar terceiros, sem se trair.",
    type: "website",
    locale: "pt_BR",
    siteName: "Fórmula da Autoridade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fórmula da Autoridade - Imersão Online com Carolina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fórmula da Autoridade - Imersão Online",
    description:
      "Para os que querem aparecer com verdade. Sem parecer forçado, sem imitar terceiros, sem se trair.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//cdn.builder.io" />
        {/* Optimize resource loading */}
        <link rel="preconnect" href="https://cdn.builder.io" />
      </head>
      <body className={inter.className}>
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        {/* Main content wrapper */}
        <div id="main-content">{children}</div>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Fórmula da Autoridade",
              description:
                "Imersão online para desenvolver autoridade autêntica e presença",
              provider: {
                "@type": "Person",
                name: "Carolina",
                jobTitle:
                  "Jornalista, Psicanalista e Estrategista em Comunicação",
              },
              courseMode: "online",
              educationalLevel: "beginner",
              inLanguage: "pt-BR",
            }),
          }}
        />
      </body>
    </html>
  );
}
