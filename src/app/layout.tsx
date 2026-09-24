import type { Metadata } from "next";
import { Chonburi, Domine } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const chonburi = Chonburi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arthur-pacheco-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arthur Pacheco | Advogado Trabalhista e Previdenciário - Curitiba PR",
    template: "%s | Arthur Pacheco Advocacia",
  },
  description:
    "Soluções jurídicas ágeis, estratégicas e humanizadas em Direito do Trabalho e Previdenciário. Mais de 6 anos de experiência prática com atendimento 100% digital e personalizado para Curitiba e todo o Brasil.",
  keywords: [
    "advogado trabalhista curitiba",
    "advogado direito do trabalho curitiba",
    "arthur pacheco advogado",
    "rescisao indireta e justa causa",
    "calculo de horas extras curitiba",
    "reconhecimento vinculo pj clt",
    "advogado previdenciario curitiba",
    "aposentadoria inss auxilio doenca",
    "planejamento previdenciario curitiba pr",
  ],
  authors: [{ name: "Arthur M. Jungles Pacheco" }],
  creator: "Arthur M. Jungles Pacheco",
  publisher: "Arthur Pacheco | Advogado Trabalhista",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Arthur Pacheco | Advogado Trabalhista e Previdenciário - Curitiba PR",
    description:
      "Soluções jurídicas ágeis e inovadoras em Direito do Trabalho e Previdenciário. Mais de 6 anos de prática, tecnologia jurídica e atendimento personalizado para todo o Brasil.",
    siteName: "Arthur Pacheco Advocacia",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Arthur Pacheco Advocacia - Soluções Trabalhistas e Previdenciárias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Pacheco | Advogado Trabalhista e Previdenciário - Curitiba PR",
    description:
      "Soluções jurídicas ágeis e inovadoras em Direito do Trabalho e Previdenciário. Atendimento 100% digital e personalizado para Curitiba/PR e todo o Brasil.",
    images: ["/og-image_optimized_300.jpeg"],
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/Favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon-apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${chonburi.variable} ${domine.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}