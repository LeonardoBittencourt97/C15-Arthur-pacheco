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
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8 overflow-hidden"
    >
      {/* Imagem de Fundo Desktop (Landscape / >= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={imageDesktopRef} className="hidden lg:block absolute inset-0 -top-10 -bottom-10 will-change-transform">
          <Image
            src="/header_desktop.jpeg"
            alt="Arthur Pacheco Advocacia - Soluções Trabalhistas e Previdenciárias"
            fill
            priority
            quality={92}
            className="object-cover object-[center_28%] brightness-[0.88] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile & Tablet Portrait (< lg) */}
        <div ref={imageMobileRef} className="block lg:hidden absolute inset-0 -top-8 -bottom-8 will-change-transform">
          <Image
            src="/header_mobile.jpeg"
            alt="Arthur Pacheco Advocacia - Escritório Trabalhista e Previdenciário"
            fill
            priority
            quality={92}
            className="object-cover object-[center_30%] sm:object-[center_35%] brightness-[0.86] contrast-[1.05]"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays mesclando Azul Bem Escuro, Preto e Prata */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E18]/95 via-[#0B192C]/85 to-[#121212]/50 lg:from-[#080E18]/92 lg:via-[#0B192C]/65 lg:via-55% lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E18]/95 via-transparent to-[#121212]/60 lg:from-[#080E18]/60 lg:via-transparent lg:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0B192C]/40 rounded-full blur-3xl lg:hidden" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-1 sm:pt-2 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade Prateado */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1D5DB]/40 bg-[#0B192C]/75 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#E5E7EB] mb-3 sm:mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D1D5DB]" />
            <span>Arthur M. Jungles Pacheco • Mais de 6 Anos de Prática</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] leading-[1.16] sm:leading-[1.14] tracking-tight text-white font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Soluções jurídicas{" "}
            <span className="text-[#D1D5DB] relative font-extrabold underline decoration-[#64748B]/50 underline-offset-4">
              ágeis e estratégicas
            </span>{" "}
            na defesa dos seus direitos trabalhistas e previdenciários.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo Conciso + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-1 sm:pb-2 max-w-3xl mt-auto animate-fade-in-up">
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-4 sm:mb-5 font-normal drop-shadow-sm">
            Tecnologia jurídica, cálculos de alta precisão e atendimento 100% humanizado e transparente direto com o titular, para Curitiba/PR e trabalhadores de todo o Brasil.
          </p>

          {/* CTAs mesclando Azul bem escuro, Preto e Prateado */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#0B192C] hover:bg-[#132238] hover:scale-[1.02] text-white border-2 border-[#D1D5DB]/60 gap-2.5 py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal shadow-[0_6px_24px_rgba(11,25,44,0.7)] group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#D1D5DB] group-hover:scale-110 transition-transform" />
              <span>Falar com o Dr. Arthur</span>
            </a>

            <Link
              href="#educativo"
              className="btn-pill bg-[#121212]/80 backdrop-blur-md text-[#E5E7EB] border border-[#D1D5DB]/40 hover:bg-[#D1D5DB] hover:text-[#0B192C] hover:border-[#E5E7EB] hover:scale-[1.02] shadow-md gap-2 py-2.5 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <span className="font-semibold">Conheça seus Direitos</span>
              <ChevronRight className="w-4 h-4 text-[#D1D5DB] group-hover:translate-x-1 group-hover:text-[#0B192C] transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-2.5 xl:py-3 border-t border-white/20 mt-4 xl:mt-6 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#D1D5DB]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Curitiba / PR • Atendimento Digital
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D1D5DB]" />
                Pós-Graduação PUC Minas
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D1D5DB]" />
                Mais de 6 Anos de Atuação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}