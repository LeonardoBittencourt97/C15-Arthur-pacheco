"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ShieldCheck, ChevronRight, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo do Hero
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 45,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[92dvh] sm:min-h-[95dvh] lg:min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden w-full"
    >
      {/* Imagem de Fundo Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden md:block absolute inset-0 -top-12 -bottom-12 will-change-transform">
          <Image
            src="/header_desktop.jpeg"
            alt="Arthur Pacheco Advocacia - Soluções Trabalhistas e Previdenciárias"
            fill
            priority
            quality={90}
            className="object-cover object-[center_28%] brightness-[0.88] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile */}
        <div ref={imageMobileRef} className="block md:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpeg"
            alt="Arthur Pacheco Advocacia - Escritório Trabalhista e Previdenciário"
            fill
            priority
            quality={90}
            className="object-cover object-[center_22%] brightness-[0.85] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays no tom Cobalt Sky */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060A17]/95 via-[#0A1128]/80 to-[#0A1128]/50 md:from-[#060A17]/90 md:via-[#0A1128]/50 md:via-55% md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A17]/90 via-transparent to-[#060A17]/60 md:from-[#060A17]/45 md:via-transparent md:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0047AB]/25 rounded-full blur-3xl md:hidden" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-2 sm:pt-4 lg:pt-4 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#82C8E5]/40 bg-[#060A17]/70 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#82C8E5] mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#82C8E5]" />
            <span>Arthur M. Jungles Pacheco • Mais de 6 Anos de Prática</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-white font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Soluções jurídicas{" "}
            <span className="text-[#82C8E5] relative font-extrabold">
              ágeis e estratégicas
            </span>{" "}
            na defesa dos seus direitos trabalhistas e previdenciários.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-2 sm:pb-4 lg:pb-4 max-w-3xl mt-6 sm:mt-8 lg:mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6 font-normal drop-shadow-sm">
            Tecnologia jurídica, cálculos de alta precisão e atendimento 100% humanizado e transparente direto com o titular, para Curitiba/PR e trabalhadores de todo o Brasil.
          </p>

          {/* CTAs com Hover e Microinterações */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#0047AB] hover:bg-[#003580] hover:scale-[1.02] text-white border border-[#82C8E5]/40 gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal shadow-[0_0_20px_rgba(0,71,171,0.4)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Falar com o Dr. Arthur</span>
            </a>

            <Link
              href="#educativo"
              className="btn-pill bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-[#82C8E5] hover:text-[#000080] hover:border-[#82C8E5] hover:scale-[1.02] shadow-md gap-2 py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="font-semibold">Conheça seus Direitos</span>
              <ChevronRight className="w-4 h-4 text-[#82C8E5] group-hover:translate-x-1 group-hover:text-[#000080] transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-3 border-t border-white/20 mt-8 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#82C8E5]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Curitiba / PR • Atendimento Digital
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#82C8E5]" />
                Pós-Graduação PUC Minas
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#82C8E5]" />
                Mais de 6 Anos de Atuação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}