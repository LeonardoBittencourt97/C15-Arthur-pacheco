"use client";

interface GeometricLinesProps {
  variant:
    | "pillars"
    | "about"
    | "areas"
    | "reviews"
    | "methodology"
    | "educational"
    | "faq"
    | "contact";
  className?: string;
}

export function GeometricLines({ variant, className = "" }: GeometricLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-colors duration-500 ${className}`}
    >
      {/* 1. PILARES: Linhas de sustentação técnica ortogonal e nós em cruz (+) */}
      {variant === "pillars" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.055] dark:text-[#D1D5DB]/[0.085] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pillarsGridPattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="0" r="1.5" className="fill-[#0B192C]/[0.14] dark:fill-[#D1D5DB]/[0.22]" />
                <path
                  d="M 38 40 L 42 40 M 40 38 L 40 42"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pillarsGridPattern)" />
            {/* Linhas Diagonais Estruturais Suaves */}
            <line x1="0" y1="0" x2="35%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="100%" y1="0" x2="65%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>
      )}

      {/* 2. SOBRE O ADVOGADO: Vetores angulares a 45°, losangos e linhas editoriais */}
      {variant === "about" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.05] dark:text-[#D1D5DB]/[0.08] [mask-image:radial-gradient(circle_at_60%_40%,black_45%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Diagonais em 45 Graus */}
            <line x1="-10%" y1="20%" x2="110%" y2="70%" stroke="currentColor" strokeWidth="1" />
            <line x1="-10%" y1="35%" x2="110%" y2="85%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 6" />
            <line x1="-10%" y1="5%" x2="110%" y2="55%" stroke="currentColor" strokeWidth="0.7" />
            <line x1="25%" y1="-10%" x2="95%" y2="110%" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            
            {/* Formas Geométricas Losangulares de Alta Engenharia */}
            <polygon
              points="150,80 200,130 150,180 100,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              className="hidden md:block"
            />
            <polygon
              points="150,100 180,130 150,160 120,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="4 4"
              className="hidden md:block"
            />
            <polygon
              points="850,220 900,270 850,320 800,270"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              className="hidden lg:block"
            />
            {/* Círculo Técnico Cartesiano */}
            <circle cx="850" cy="270" r="85" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" className="hidden lg:block" />
            <circle cx="850" cy="270" r="2.5" className="fill-[#0B192C]/[0.18] dark:fill-[#D1D5DB]/[0.25]" />
          </svg>
        </div>
      )}

      {/* 3. ESPECIALIDADES / ÁREAS DE ATUAÇÃO: Malha isométrica técnica e réguas de cálculo */}
      {variant === "areas" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.055] dark:text-[#D1D5DB]/[0.085] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="areasIsometricPattern"
                width="120"
                height="70"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 35 L 60 0 L 120 35 L 60 70 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <circle cx="60" cy="35" r="1.5" className="fill-[#0B192C]/[0.15] dark:fill-[#D1D5DB]/[0.22]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#areasIsometricPattern)" />
            {/* Guias Longas de Precisão */}
            <line x1="5%" y1="0" x2="5%" y2="100%" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 8" />
            <line x1="95%" y1="0" x2="95%" y2="100%" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 8" />
          </svg>
        </div>
      )}

      {/* 4. RECONHECIMENTO PÚBLICO / AVALIAÇÕES: Linhas de fluxo dinâmico e anéis concêntricos */}
      {variant === "reviews" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.05] dark:text-[#D1D5DB]/[0.08] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Diagonais Espaçadas */}
            <line x1="-5%" y1="15%" x2="105%" y2="45%" stroke="currentColor" strokeWidth="1" />
            <line x1="-5%" y1="45%" x2="105%" y2="75%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="10 8" />
            <line x1="-5%" y1="75%" x2="105%" y2="95%" stroke="currentColor" strokeWidth="0.9" />

            {/* Cruzes de Alinhamento nos Cantos */}
            <g transform="translate(100, 60)">
              <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
            </g>
            <g transform="translate(1100, 180)" className="hidden lg:block">
              <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="-14" x2="0" y2="14" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 4" />
            </g>
          </svg>
        </div>
      )}

      {/* 5. COMO ATUAMOS / METODOLOGIA: Trilha direcional ortogonal com marcadores de etapas */}
      {variant === "methodology" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.055] dark:text-[#D1D5DB]/[0.085] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="methodGridPattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 6" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.7" strokeDasharray="6 6" />
                <circle cx="50" cy="50" r="2" className="fill-[#0B192C]/[0.15] dark:fill-[#D1D5DB]/[0.22]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#methodGridPattern)" />

            {/* Linhas em zigue-zague arquiteturais de conexão */}
            <path
              d="M 50 120 L 250 120 L 320 180 L 750 180 L 820 120 L 1150 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="8 6"
              className="hidden md:block"
            />
          </svg>
        </div>
      )}

      {/* 6. CONTEÚDO EDUCATIVO: Grade milimetrada editorial com linhas de cadência e mira técnica */}
      {variant === "educational" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.05] dark:text-[#D1D5DB]/[0.08] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="educationalPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#educationalPattern)" />

            {/* Eixos Cartesianos e Marcadores */}
            <line x1="12%" y1="0" x2="12%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="88%" y1="0" x2="88%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="5 5" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="5 5" />
          </svg>
        </div>
      )}

      {/* 7. PERGUNTAS FREQUENTES (FAQ): Círculos concêntricos e eixos de convergência */}
      {variant === "faq" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.05] dark:text-[#D1D5DB]/[0.08] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Círculos Geométricos Concêntricos Centrais */}
            <circle cx="50%" cy="40%" r="160" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="5 5" />
            <circle cx="50%" cy="40%" r="280" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50%" cy="40%" r="420" fill="none" stroke="currentColor" strokeWidth="0.65" strokeDasharray="6 6" />

            {/* Linhas Radiais Suaves de Fuga */}
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
            <line x1="10%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="0.7" />
            <line x1="90%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="0.7" />
          </svg>
        </div>
      )}

      {/* 8. CONTATO: Rede de canais conectados e vetores com quebras a 45° */}
      {variant === "contact" && (
        <div className="absolute inset-0 text-[#0B192C]/[0.055] dark:text-[#D1D5DB]/[0.085] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Linhas Tecnológicas de Conectividade em Rede Digital */}
            <path
              d="M 0 100 L 200 100 L 260 160 L 500 160 L 560 220 L 900 220 L 960 160 L 1200 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            />
            <path
              d="M 100 0 L 100 200 L 160 260 L 160 500 L 220 560 L 220 800"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeDasharray="6 4"
            />
            <path
              d="M 1200 80 L 1050 80 L 990 140 L 700 140 L 640 200 L 400 200 L 340 260 L 0 260"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeDasharray="8 6"
            />

            {/* Pontos de Conexão em Nós */}
            <circle cx="260" cy="160" r="3" className="fill-[#0B192C]/[0.2] dark:fill-[#D1D5DB]/[0.3]" />
            <circle cx="560" cy="220" r="3" className="fill-[#0B192C]/[0.2] dark:fill-[#D1D5DB]/[0.3]" />
            <circle cx="960" cy="160" r="3" className="fill-[#0B192C]/[0.2] dark:fill-[#D1D5DB]/[0.3]" />
            <circle cx="160" cy="260" r="3" className="fill-[#0B192C]/[0.2] dark:fill-[#D1D5DB]/[0.3]" />
            <circle cx="220" cy="560" r="3" className="fill-[#0B192C]/[0.2] dark:fill-[#D1D5DB]/[0.3]" />
          </svg>
        </div>
      )}
    </div>
  );
}
