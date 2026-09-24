"use client";

import { useState, useRef } from "react";
import { EDUCATIONAL_TOPICS, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  // Estado para acordeão mobile condensado
  const [expandedMobileTopicId, setExpandedMobileTopicId] = useState<string | null>(null);

  const toggleMobileTopic = (id: string) => {
    setExpandedMobileTopicId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
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

      // 2. Coluna esquerda
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna direita
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getWhatsAppMessageUrl = (topicTitle: string) => {
    const text = `Olá, Dr. Arthur! Li o conteúdo educativo sobre "${topicTitle}" no seu site e gostaria de orientação a respeito do meu caso.`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="educativo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/35 editorial-border-b w-full relative"
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
                05 / Conteúdo Jurídico Educativo
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-bold">
              Conheça Seus Direitos
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Orientações e esclarecimentos práticos elaborados com finalidade exclusivamente didática e pedagógica, em estrita conformidade com o Provimento 205/2021 do CFOAB.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): PAINEL LATERAL + LEITOR DE ARTIGO                   */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          {/* Coluna da Esquerda: Lista de Artigos */}
          <div ref={leftColRef} className="md:col-span-5 space-y-3 will-change-transform">
            <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block px-2 mb-2">
              Artigos e Guias Didáticos
            </span>

            {EDUCATIONAL_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedId;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[var(--bg-card)] border-[var(--brand-silver-shine)] shadow-md -translate-y-0.5"
                      : "bg-[var(--bg-card)]/60 border-[var(--border-subtle)]/30 hover:bg-[var(--bg-card)] hover:border-[var(--brand-silver-shine)]/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[0.6875rem] font-heading uppercase tracking-wider font-semibold text-[var(--accent)]">
                      {topic.category}
                    </span>
                    <span className="text-[0.6875rem] font-body text-[var(--text-muted)] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[var(--accent)]" />
                      <span>{topic.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[var(--text-main)] leading-snug mb-2">
                    {topic.title}
                  </h3>

                  <p className="font-body text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>

                  <div className="pt-3 mt-3 border-t border-[var(--border-subtle)]/15 flex items-center justify-between text-xs font-heading font-semibold text-[var(--accent)]">
                    <span>Ler orientação completa</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "translate-x-1 text-[var(--accent)]" : "opacity-60"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Coluna da Direita: Leitor Detalhado do Artigo */}
          <div ref={rightColRef} className="md:col-span-7 will-change-transform">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-lg relative">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/20 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-heading font-semibold text-[var(--accent)]">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{activeTopic.category}</span>
                </span>
                <span className="text-xs text-[var(--text-muted)] font-body flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{activeTopic.readTime}</span>
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] leading-tight mb-6">
                {activeTopic.title}
              </h3>

              <div className="space-y-4 font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed mb-8">
                {activeTopic.content.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Disclaimer OAB */}
              <div className="p-4 rounded-xl bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)]/30 mb-8 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <p className="text-[0.6875rem] sm:text-xs text-[var(--text-muted)] font-body leading-relaxed">
                  {activeTopic.oabDisclaimer}
                </p>
              </div>

              {/* Botão de Dúvida / Contato Direto */}
              <div className="pt-6 border-t border-[var(--border-subtle)]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="font-heading text-sm font-bold text-[var(--text-main)] block">
                    Ficou com alguma dúvida específica?
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-body">
                    Converse diretamente com o Dr. Arthur M. Jungles Pacheco
                  </span>
                </div>

                <a
                  href={getWhatsAppMessageUrl(activeTopic.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[var(--accent)] hover:opacity-90 text-[var(--bg-primary)] border border-[var(--brand-silver-shine)]/40 gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-md hover-lift transition-all cursor-pointer flex items-center flex-shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): ACORDEÃO RESUMIDO                                   */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-3">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isExpanded = expandedMobileTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className={`rounded-2xl border transition-all duration-300 bg-[var(--bg-card)] overflow-hidden ${
                  isExpanded ? "border-[var(--brand-silver-shine)] shadow-md" : "border-[var(--border-subtle)]/35 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleMobileTopic(topic.id)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="pr-2">
                    <span className="text-[0.6875rem] font-heading uppercase tracking-wider font-semibold text-[var(--accent)] block mb-1">
                      {topic.category}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[var(--text-main)] leading-snug">
                      {topic.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[var(--accent)]" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 border-t border-[var(--border-subtle)]/20 animate-fade-in-down">
                    <div className="space-y-3 font-body text-xs sm:text-sm text-[var(--text-main)] leading-relaxed mb-4">
                      {topic.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/80 border border-[var(--border-subtle)]/30 mb-4 flex items-start gap-2 text-[0.6875rem] text-[var(--text-muted)] font-body">
                      <ShieldAlert className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span>{topic.oabDisclaimer}</span>
                    </div>

                    <a
                      href={getWhatsAppMessageUrl(topic.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill bg-[var(--accent)] hover:opacity-90 text-[var(--bg-primary)] border border-[var(--brand-silver-shine)]/40 w-full py-2.5 text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Tirar Dúvida sobre este Tema</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}