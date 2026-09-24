"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Phone, Clock, MessageSquare, ArrowUpRight, ShieldCheck, FileText, Calculator, Video, CheckCircle2 } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const digitalHubRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do Hub Digital
      if (digitalHubRef.current) {
        gsap.fromTo(
          digitalHubRef.current,
          { scale: 0.95, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: digitalHubRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--accent)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--accent)] font-bold">
                07 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Contato & Consultoria Online
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Consultoria jurídica trabalhista e previdenciária 100% digital, com sede em Curitiba/PR e atendimento célere para clientes em todo o Brasil via WhatsApp e videoconferência.
          </p>
        </div>

        {/* Grid: Informações de Contato + Hub Visual de Atendimento Digital */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coluna 1: Informações e Ações */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-5 will-change-transform">
            <div className="space-y-4">
              {/* Card WhatsApp */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    WhatsApp & Contato Direto
                  </span>
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-lg font-bold text-[var(--text-main)] hover:underline"
                  >
                    {OFFICE_INFO.phone}
                  </a>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para análise preliminar do caso e orientações diretas com o Dr. Arthur Pacheco.
                  </p>
                </div>
              </div>

              {/* Card Base de Atendimento Digital */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Modalidade de Atendimento
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    100% Digital em Todo o Brasil
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Base de consultoria em Curitiba/PR. Acompanhamento processual eletrônico nos Tribunais Regionais do Trabalho (TRT) e no INSS em âmbito nacional.
                  </p>
                </div>
              </div>

              {/* Card Redes Sociais */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Redes Profissionais
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href={OFFICE_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{OFFICE_INFO.instagramHandle}</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
                    </a>
                    <a
                      href={OFFICE_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>{OFFICE_INFO.linkedinHandle}</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--accent)]" />
                    </a>
                  </div>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1.5">
                    Conteúdo técnico atualizado sobre decisões trabalhistas e revisões previdenciárias.
                  </p>
                </div>
              </div>

              {/* Card Horário */}
              <div className="contact-info-card p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4 will-change-transform shadow-2xs hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent)] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)] font-medium">
                    {OFFICE_INFO.schedule.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {OFFICE_INFO.schedule.saturday}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {OFFICE_INFO.schedule.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#0B192C] hover:bg-[#132238] text-white border-2 border-[#D1D5DB]/60 py-3.5 gap-2 shadow-[0_4px_20px_rgba(11,25,44,0.35)] text-sm sm:text-base cursor-pointer hover-lift transition-all flex items-center justify-center font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-[#D1D5DB]" />
                <span>Iniciar Atendimento no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Hub Visual de Consultoria 100% Online */}
          <div ref={digitalHubRef} className="lg:col-span-7 flex flex-col justify-between will-change-transform">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border-2 border-[#0B192C]/30 dark:border-[#D1D5DB]/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]/25 mb-6">
                  <div>
                    <span className="font-heading text-xs uppercase tracking-wider text-[var(--accent)] font-bold block mb-1">
                      Metodologia Digital
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                      Como Funciona a Consultoria 100% Online
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[0.6875rem] font-heading font-semibold text-[var(--accent)] hidden sm:block">
                    Sem Deslocamentos
                  </div>
                </div>

                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                  Você não precisa enfrentar trânsito nem aguardar semanas por um horário de escritório. Seu atendimento acontece com total segurança e comodidade:
                </p>

                {/* 3 Passos da Consultoria Digital */}
                <div className="space-y-4 mb-6">
                  {/* Passo 1 */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[var(--accent)]" />
                        <span>Envio Seguro de Documentos</span>
                      </h4>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        Envie CTPS, extrato analítico do FGTS, rescisão ou histórico do CNIS diretamente pelo WhatsApp em fotos legíveis ou formato PDF.
                      </p>
                    </div>
                  </div>

                  {/* Passo 2 */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-[var(--accent)]" />
                        <span>Análise Técnica & Conferência de Cálculos</span>
                      </h4>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        O Dr. Arthur Pacheco analisa cada detalhe com rigor matemático, identifica divergências de verbas e aponta o melhor caminho jurídico.
                      </p>
                    </div>
                  </div>

                  {/* Passo 3 */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]/30 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                        <Video className="w-4 h-4 text-[var(--accent)]" />
                        <span>Alinhamento Estratégico & Ação Judicial</span>
                      </h4>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                        Alinhamento transparente por mensagem ou videochamada, com assinatura eletrônica de procuração sem necessidade de autenticação em cartório.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pilares de Segurança e Sigilo */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-body text-[var(--text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    <span>Sigilo Absoluto</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-body text-[var(--text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    <span>Assinatura Digital</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-body text-[var(--text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    <span>Acesso em Todo o Brasil</span>
                  </div>
                </div>
              </div>

              {/* Botão de Envio de Documentos no Rodapé do Hub */}
              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25">
                <a
                  href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dr.%20Arthur.%20Gostaria%20de%20enviar%20documentos%20para%20uma%20an%C3%A1lise%20trabalhista%2Fprevidenci%C3%A1ria.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[var(--bg-secondary)] hover:bg-[#0B192C] hover:text-white text-[var(--text-main)] border border-[var(--border-subtle)] py-3 px-4 text-xs sm:text-sm font-semibold gap-2 shadow-xs inline-flex items-center justify-center transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Documentos para Análise via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}