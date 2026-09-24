import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, Globe, ShieldCheck, ArrowUpRight, Cpu } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arthur-pacheco-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Canais Oficiais & Links | Arthur Pacheco Advocacia Trabalhista",
  description:
    "Acesse diretamente o WhatsApp do Dr. Arthur Pacheco, Instagram oficial, LinkedIn e consultoria trabalhista e previdenciária 100% digital.",
  alternates: {
    canonical: `${siteUrl}/links`,
  },
  openGraph: {
    title: "Canais Oficiais & Links | Arthur Pacheco Advocacia Trabalhista",
    description: "Atendimento especializado em Direito do Trabalho e Previdenciário. Consultoria digital para todo o Brasil.",
    url: `${siteUrl}/links`,
    images: [{ url: "/og-image_optimized_300.jpeg", width: 1200, height: 630 }],
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(41) 9585-6655 • Fale com o Dr. Arthur Pacheco",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas de atuação, cálculos e artigos",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: "@arthurpacheco.adv • Conteúdo jurídico diário",
      href: OFFICE_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "Conectar no LinkedIn",
      subtitle: "Perfil profissional do Dr. Arthur Pacheco",
      href: OFFICE_INFO.linkedinUrl,
      icon: LinkedinIcon,
      highlight: false,
    },
    {
      id: "consultoria",
      title: "Consultoria 100% Digital",
      subtitle: "Envio seguro de documentos e análise de cálculos",
      href: `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Arthur.%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20de%20documentos%20online.`,
      icon: Cpu,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho (Rescisões & Horas Extras)",
    "Cálculos de Diferenças Verbas",
    "Direito Previdenciário (INSS)",
    "Planejamento Previdenciário",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#000080]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo e Identidade Visual Cobalt Sky */}
        <div className="relative bg-[#060A17] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#0047AB]/30">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0047AB" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#82C8E5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0047AB]/50 bg-[#0C142A]/80 backdrop-blur-md text-xs font-heading tracking-wider text-[#82C8E5]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#82C8E5]" />
              <span>+6 Anos de Prática Especializada</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#82C8E5]">
              Curitiba/PR • Todo o Brasil
            </span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center w-full">
            <div className="relative w-full max-w-[340px] h-36 xl:h-40 mb-4">
              <Image
                src="/logo_sem_fundo_usarnomodoescuro.png"
                alt={OFFICE_INFO.name}
                fill
                priority
                className="object-contain drop-shadow-lg"
                sizes="(min-width: 1024px) 340px, 260px"
              />
            </div>

            <p className="text-sm xl:text-base text-gray-300 font-body max-w-md mx-auto leading-relaxed mt-2">
              {OFFICE_INFO.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-lg">
              {specialties.map((spec, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-[#0C142A] border border-[#0047AB]/40 text-[#82C8E5] font-body"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-gray-400 font-body pt-4 border-t border-white/10">
            <p>{OFFICE_INFO.addressShort}</p>
            <p className="text-[0.6875rem] text-[#82C8E5]">Provimento 205/2021 CFOAB</p>
          </div>
        </div>

        {/* LADO DIREITO: Links Rápidos */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-8 h-full overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0047AB] font-heading font-bold block">
                  Acesso Imediato
                </span>
                <h1 className="text-2xl font-heading font-bold text-[#000080]">
                  Canais Oficiais
                </h1>
              </div>
              <Link
                href="/"
                className="text-xs font-heading text-[#0047AB] hover:text-[#000080] transition-colors flex items-center gap-1 font-bold"
              >
                <span>Acessar Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                      item.highlight
                        ? "bg-[#0047AB] text-white border-[#0047AB] shadow-[0_4px_16px_rgba(0,71,171,0.3)] hover:bg-[#003580] hover:scale-[1.01]"
                        : "bg-[#F8FAFC] hover:bg-[#E8EEF5] border-gray-200 text-[#000080] hover:border-[#0047AB]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                          item.highlight ? "bg-white/20 text-white" : "bg-[#E8EEF5] border border-[#82C8E5]/30 text-[#0047AB]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-sm tracking-wide leading-tight">
                          {item.title}
                        </h2>
                        <p
                          className={`text-xs mt-0.5 font-body ${
                            item.highlight ? "text-blue-100" : "text-[#6D8196]"
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white" : "text-[#6D8196] group-hover:text-[#0047AB]"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 font-body">
              © {new Date().getFullYear()} {OFFICE_INFO.name} • Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll + Linhas Geométricas Cobalt Sky) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 py-3 sm:py-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F7FB] to-[#E8EEF5]">
        {/* Linhas Geométricas em Azul Celeste / Ardósia de Fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cobaltGeomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#82C8E5" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#0047AB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#82C8E5" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cobaltGeomGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6D8196" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#82C8E5" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Linhas Diagonais Intersectantes em Cobalt Sky */}
            <line x1="-15%" y1="12%" x2="115%" y2="38%" stroke="url(#cobaltGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="42%" x2="115%" y2="18%" stroke="url(#cobaltGeomGrad2)" strokeWidth="1" />
            <line x1="-15%" y1="78%" x2="115%" y2="58%" stroke="url(#cobaltGeomGrad1)" strokeWidth="1.25" />
            <line x1="-15%" y1="92%" x2="115%" y2="72%" stroke="url(#cobaltGeomGrad2)" strokeWidth="0.75" />

            {/* Linhas Geométricas de Precisão Tracejadas */}
            <line x1="18%" y1="-10%" x2="82%" y2="110%" stroke="url(#cobaltGeomGrad1)" strokeWidth="0.75" strokeDasharray="5 5" />
            <line x1="88%" y1="-10%" x2="12%" y2="110%" stroke="url(#cobaltGeomGrad2)" strokeWidth="0.75" strokeDasharray="6 4" />

            {/* Círculos Geométricos Concêntricos em Sky Blue */}
            <circle cx="88%" cy="16%" r="80" fill="none" stroke="#82C8E5" strokeWidth="1" strokeOpacity="0.35" />
            <circle cx="88%" cy="16%" r="130" fill="none" stroke="#82C8E5" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle cx="12%" cy="84%" r="90" fill="none" stroke="#82C8E5" strokeWidth="1" strokeOpacity="0.35" />
            <circle cx="12%" cy="84%" r="150" fill="none" stroke="#82C8E5" strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="5 5" />

            {/* Formas Geométricas Arquiteturais Sutis */}
            <rect x="75%" y="45%" width="60" height="60" fill="none" stroke="#82C8E5" strokeWidth="0.75" strokeOpacity="0.25" transform="rotate(45 300 300)" />
            <rect x="10%" y="30%" width="45" height="45" fill="none" stroke="#82C8E5" strokeWidth="0.75" strokeOpacity="0.2" transform="rotate(45 50 200)" />
          </svg>
        </div>

        {/* Topo Mobile - Logo no tamanho e posição originais */}
        <div className="relative z-10 w-full flex flex-col items-center text-center pt-2 pb-1">
          <div className="relative h-20 w-48 mb-2 sm:mb-2.5">
            <Image
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain"
              sizes="200px"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#82C8E5]/50 text-xs font-heading text-[#000080] mb-1.5 font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0047AB]" />
            <span>+6 Anos de Prática Especializada</span>
          </div>
          <p className="text-xs text-[#6D8196] font-body max-w-xs mx-auto leading-tight line-clamp-1">
            {OFFICE_INFO.tagline}
          </p>
        </div>

        {/* Links Mobile - Distribuídos harmoniosamente ocupando o espaço sem folgas mortas */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-between py-1.5 sm:py-2.5 max-w-md mx-auto">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
                  item.highlight
                    ? "bg-[#0047AB] text-white border-[#0047AB] shadow-[0_4px_14px_rgba(0,71,171,0.35)]"
                    : "bg-white/95 backdrop-blur-xs hover:bg-white border-[#82C8E5]/35 text-[#000080] shadow-2xs"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#E8EEF5] border border-[#82C8E5]/30 text-[#0047AB]"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xs sm:text-sm leading-tight truncate">{item.title}</h2>
                    <p
                      className={`text-[0.6875rem] font-body truncate mt-0.5 ${
                        item.highlight ? "text-blue-100" : "text-[#6D8196]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-current flex-shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Especialidades & Rodapé no Mobile (Sem espaço ocioso com os botões) */}
        <div className="relative z-10 w-full max-w-md mx-auto pt-1 pb-1 space-y-1.5 sm:space-y-2">
          {/* Card Áreas de Atuação */}
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-xs border border-[#82C8E5]/35 text-center shadow-2xs">
            <span className="text-[0.625rem] sm:text-[0.6875rem] font-heading uppercase tracking-widest text-[#000080] font-bold block mb-1">
              Áreas de Atuação
            </span>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5">
              {specialties.map((spec, i) => (
                <span
                  key={i}
                  className="text-[0.625rem] sm:text-[0.6875rem] px-2.5 py-0.5 rounded-full bg-[#E8EEF5] text-[#000080] font-body border border-[#82C8E5]/30 font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Rodapé Mobile Compacto */}
          <div className="text-center text-[0.625rem] sm:text-[0.6875rem] text-[#6D8196] font-body">
            <p>{OFFICE_INFO.addressShort} • © {new Date().getFullYear()} {OFFICE_INFO.name}</p>
          </div>
        </div>
      </div>
    </main>
  );
}