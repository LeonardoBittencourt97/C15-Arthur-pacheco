export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Arthur Pacheco | Advogado Trabalhista e Previdenciário",
  shortName: "Arthur Pacheco Advocacia",
  lawyer: "Dr. Arthur M. Jungles Pacheco",
  role: "Advogado e Consultor Trabalhista e Previdenciário",
  tagline: "Soluções jurídicas ágeis, estratégicas e humanizadas para garantir os seus direitos trabalhistas e previdenciários.",
  slogan: "Tecnologia jurídica avançada, rigor técnico e atendimento 100% personalizado e transparente.",
  experienceYears: "mais de 6 anos",
  phone: "(41) 9585-6655",
  whatsapp: "554195856655",
  whatsappNumber: "554195856655",
  whatsappFormatted: "(41) 9585-6655",
  whatsappUrl:
    "https://wa.me/554195856655?text=Ol%C3%A1%2C%20Dr.%20Arthur%20Pacheco!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/arthurpacheco.adv/",
  instagramHandle: "@arthurpacheco.adv",
  linkedinUrl: "https://www.linkedin.com/in/arthurmjpacheco/",
  linkedinHandle: "arthurmjpacheco",
  address: "Atendimento 100% Digital e Personalizado • Sede em Curitiba / PR • Atuação em todo o Brasil",
  addressShort: "Curitiba / PR • Atendimento Digital em todo o Brasil",
  city: "Curitiba",
  state: "PR",
  schedule: {
    weekdays: "Segunda a Sexta: 09:00 às 19:00",
    saturday: "Sábado: 10:00 às 19:00",
    sunday: "Domingo: 10:00 às 14:00",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Arthur M. Jungles Pacheco",
  role: "Advogado e Consultor Trabalhista e Previdenciário",
  graduation: "Pós-graduação em Direito do Trabalho e Previdenciário pela PUC Minas (2020 – 2022) | Bacharel em Direito pelo Centro Universitário UniOPet (2015 – 2019)",
  experience: "Mais de 6 anos de atuação jurídica especializada",
  bio: [
    "Dr. Arthur M. Jungles Pacheco é advogado especialista e consultor focado em Direito do Trabalho e Previdenciário, com pós-graduação pela renomada Pontifícia Universidade Católica de Minas Gerais (PUC Minas) e graduação pelo Centro Universitário UniOPet.",
    "Sua bagagem profissional inclui atuação como Consultor Trabalhista e Previdenciário na Econet Editora Empresarial, além de passagens práticas pelo Tribunal de Justiça do Estado do Paraná (TJPR), na banca Pereira & Gionédis Advogados Associados e na Caixa Econômica Federal.",
    "À frente de sua advocacia, desenvolve uma prática jurídica ágil, ética e inovadora. Empregando tecnologias modernas de cálculos e gestão processual, alia rigor técnico e atendimento 100% personalizado e transparente para assegurar o pleno êxito nas demandas de trabalhadores e segurados em Curitiba e em todo o Brasil.",
  ],
  careerHighlights: [
    "Pós-Graduação em Direito do Trabalho e Previdenciário pela PUC Minas.",
    "Ex-Consultor Trabalhista e Previdenciário na Econet Editora Empresarial.",
    "Vivência e prática forense no Tribunal de Justiça do Estado do Paraná (TJPR).",
    "Mais de 6 anos de advocacia autônoma especializada e dezenas de clientes defendidos com sucesso.",
  ],
  personalNotes: [
    "Comprometido com a justiça social e a proteção da dignidade do trabalhador.",
    "Foco obstinado na clareza e na celeridade da informação, eliminando barreiras entre o cliente e seus direitos.",
    "Adepto do uso da tecnologia jurídica para conferir máxima precisão a cálculos rescisórios e simulações de benefícios.",
  ],
  differentials: [
    "Atendimento Direto com o Titular: suporte ágil e sem intermediários pelo WhatsApp oficial.",
    "Cálculos de Alta Precisão: simulações exatas de verbas rescisórias, horas extras e tempo de contribuição.",
    "Atendimento 100% Digital: comodidade, segurança e sigilo absoluto sem necessidade de deslocamento físico.",
    "Conformidade Ética OAB: respeito integral aos preceitos do Provimento 205/2021 do CFOAB.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "trabalhista",
    title: "Direito do Trabalho (Trabalhador & CLT)",
    shortDesc:
      "Defesa estratégica contra abusos corporativos, rescisões lesivas, horas extras impagas e violações aos direitos do trabalhador.",
    iconName: "Briefcase",
    featured: true,
    highlightText: "Cálculos minuciosos e atuação enérgica para reaver cada centavo devido pelo empregador.",
    coverageList: [
      "Cobrança de Horas Extras e Reflexos em 13º, Férias e FGTS",
      "Reconhecimento de Vínculo Empregatício (Fraude de 'PJ' / Pejotização)",
      "Reversão de Justa Causa Abusiva e Rescisão Indireta por Culpa do Patrão",
      "Assédio Moral, Perseguições e Indenizações por Danos Morais",
      "Acidente de Trabalho, Doenças Ocupacionais (Burnout/LER) e Estabilidade",
      "Adicionais de Insalubridade e Periculosidade por Risco de Vida",
      "Intervalo de Descanso/Refeição Suprimido e Trabalho em Sobreaviso",
    ],
    casesSummary:
      "Analisamos contratos, cartões-ponto e folhas de pagamento para identificar irregularidades e ajuizar ações com sólidos elementos probatórios e cálculos exatos.",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário (INSS & Benefícios)",
    shortDesc:
      "Combate judicial e administrativo às negativas arbitrárias do INSS, garantindo a concessão célere de benefícios e aposentadorias.",
    iconName: "Award",
    featured: true,
    highlightText: "Perícias judiciais independentes para reverter indeferimentos e restabelecer sua renda familiar.",
    coverageList: [
      "Concessão e Restabelecimento de Auxílio-Doença (Incapacidade Temporária)",
      "Conversão em Aposentadoria por Invalidez Permanente (+25% de acompanhante)",
      "Concessão de BPC/LOAS para Idosos (65+) e Pessoas com Deficiência (PCD)",
      "Aposentadoria por Idade Urbana, Rural e Híbrida pós-Reforma",
      "Aposentadoria Especial por Insalubridade e Ruído (Análise de PPP/LTCAT)",
      "Pensão por Morte (União Estável e Qualidade de Segurado) e Salário-Maternidade",
      "Auxílio-Acidente mensal para quem sofreu sequelas e continua trabalhando",
    ],
    casesSummary:
      "Atuamos perante a Justiça Federal com médicos peritos neutros, revertendo laudos administrativos superficiais do INSS e cobrando todos os valores retroativos.",
  },
  {
    id: "calculos-rescisorios",
    title: "Cálculos Rescisórios & Consultoria",
    shortDesc:
      "Auditoria preventiva de verbas rescisórias, horas extraordinárias e conformidade contratual antes ou após a demissão.",
    iconName: "Scale",
    featured: true,
    highlightText: "Simulação transparente do valor real a receber para evitar perdas financeiras na rescisão.",
    coverageList: [
      "Auditoria de Termos de Rescisão do Contrato de Trabalho (TRCT)",
      "Conferência de Salários Retidos, Férias Vencidas e Férias em Dobro",
      "Falta de Recolhimento do FGTS e Multa de 40%",
      "Desvio e Acúmulo de Função sem a Contraprestação Salarial Legal",
      "Estabilidade da Gestante e Demissões Ilícitas em Período de Garantia",
      "Limbo Jurídico Previdenciário (Impasse entre Alta do INSS e Médico da Empresa)",
      "Consultoria Preventiva e Análise de Propostas de Acordo",
    ],
    casesSummary:
      "Evitamos que o trabalhador assine quitações desvantajosas sob pressão, apresentando planilhas precisas dos valores devidos segundo a CLT e convenções sindicais.",
  },
  {
    id: "planejamento",
    title: "Planejamento Previdenciário & CNIS",
    shortDesc:
      "Estudo consultivo detalhado pós-Reforma da Previdência para antecipar sua aposentadoria e conquistar o teto possível.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText: "Mapeamento seguro das melhores regras de transição para você não perder dinheiro na velhice.",
    coverageList: [
      "Simulação Comparativa entre Regras de Transição (Pedágio 50%, 100% e Pontos)",
      "Acerto de Pendências e Indicadores de Erro no Extrato do CNIS",
      "Averbação de Tempo de Serviço Rural na Infância e Juventude",
      "Averbação de Períodos Especiais Insalubres e Serviço Militar",
      "Reconhecimento de Tempo sem Carteira Assinada ou sob Litígio Trabalhista",
      "Defesa em Processos de Pente-Fino e Corte de Benefícios do INSS",
      "Mandado de Segurança contra Demora Abusiva na Análise de Requerimentos",
    ],
    casesSummary:
      "Identificamos falhas no extrato contributivo que o simulador automático do Meu INSS omite, garantindo a data exata e o valor máximo para sua aposentadoria.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Su Souza",
    rating: 5,
    timeAgo: "2 meses atrás",
    text: "Ótimo advogado dr Arthur, em todos os momentos está disponível pra responder nossas dúvidas e dispostos a resolver o problema! Super indico de olhos fechados.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Kelly Cristina Fracasso",
    rating: 5,
    timeAgo: "11 meses atrás",
    text: "O Arthur é um advogado trabalhista excepcional. Transmite muita segurança e confiança, além de demonstrar profundo conhecimento da área.",
    source: "Google Reviews",
    details: "3 avaliações",
  },
  {
    author: "Edla Romanzini",
    rating: 5,
    timeAgo: "11 meses atrás",
    text: "Excelente profissional. Transmite muita tranquilidade e segurança para os clientes pois explica todos os detalhes com conhecimento e transparência. Recomendo o Dr Arthur, muito honesto e competente.",
    source: "Google Reviews",
    details: "15 avaliações • 3 fotos",
  },
  {
    author: "Matheus Luiz",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Excelente profissional! Me ajudou a buscar meus direitos de forma clara e objetiva, sempre transmitindo muita segurança durante todo o processo. Demonstrou conhecimento, dedicação e comprometimento.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Maurilio Bernini",
    rating: 5,
    timeAgo: "11 meses atrás",
    text: "O Doutor Arthur é muito profissional, sério, honesto e rápido quando precisamos de qualquer questão trabalhista. Recomendo, sempre consegue um horario para nos atender. Fiquei satisfeito com a resolução do problema.",
    source: "Google Reviews",
    details: "Local Guide • 14 avaliações",
  },
  {
    author: "Glauco Walifer Teixeira Fernandes",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Quero expressar minha profunda gratidão pelo excelente trabalho do advogado Arthur J. Pacheco. Sua dedicação, profissionalismo e conhecimento jurídico fizeram toda a diferença no meu caso. Desde o início, demonstrou empatia e atenção.",
    source: "Google Reviews",
    details: "Local Guide • 29 avaliações • 1 foto",
  },
  {
    author: "Fort Truck Pereira Implementos Rodoviários Ltda",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Gostaria de expressar minha gratidão e admiração pelo trabalho do meu advogado, que tem sido simplesmente impecável. Sua dedicação, profissionalismo e profundo conhecimento jurídico são inigualáveis.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Oliveira Alysson",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Dr Arthur foi excelente do início ao fim do processo, deu atenção a todos os detalhes e entendeu bem a situação.",
    source: "Google Reviews",
    details: "5 avaliações",
  },
  {
    author: "Francieli de Camargo",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Você é um verdadeiro defensor dos direitos dos trabalhadores! Sua dedicação e conhecimento na área trabalhista são impressionantes. Parabéns pelo excelente trabalho. Recomendo Arthur Pacheco!",
    source: "Google Reviews",
    details: "7 avaliações • 2 fotos",
  },
  {
    author: "Dileta Duda",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Fomos muito bem atendidos e também foi um trabalho ótimo e rápido meu esposo teve um ótimo atendimento e um excelente acordo com o doutor Arthur muito obrigado só tenho a agradecer.",
    source: "Google Reviews",
    details: "2 avaliações • 1 foto",
  },
  {
    author: "Renato Leonardo",
    rating: 5,
    timeAgo: "7 meses atrás",
    text: "Muito boa, me ajudou muito em todos os momentos do processo... Além de ganhar a causa em meu favor !!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Luan Stracka",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Excelente profissional, agilidade nos processos, claro em relação a informações preciso na sua objetividade, super recomendo.",
    source: "Google Reviews",
    details: "3 avaliações",
  },
  {
    author: "Geovana Neri Correa",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Ótimo profissional empenhado com seu trabalho super recomendo doutor Arthur Pacheco esse é o cara!!!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Gustavo Sartori",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Muito bom profissional. Conseguiu resolver todos os problemas e dúvidas minhas.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "Smile Motos",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Dr. Atencioso e bem competente no que faz! Sempre tira dúvidas e faz consultorias necessária para empresa!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Josué Santos",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Um advogado prestativo e capacitado para defender as causas, muito obrigado pelo trabalho prestado! Valeu muito a pena! Gratidão.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "Alex Morais",
    rating: 5,
    timeAgo: "2 anos atrás",
    text: "Um dos melhores profissionais que eu conheci. Arthur recomendo sempre!",
    source: "Google Reviews",
    details: "12 avaliações • 5 fotos",
  },
  {
    author: "Lucas Steger",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Super indico! Excelente profissional.",
    source: "Google Reviews",
    details: "12 avaliações",
  },
  {
    author: "Mateus Gomes",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Um excelente profissional, e um preço justo!",
    source: "Google Reviews",
    details: "8 avaliações",
  },
  {
    author: "Eloiza Pacheco",
    rating: 5,
    timeAgo: "2 anos atrás",
    text: "Dr. muito competente e qualificado no que se compromete a fazer.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "Ingrid Lima",
    rating: 5,
    timeAgo: "2 anos atrás",
    text: "Advogado com extrema capacitação profissional! Extremamente atencioso, com muito respaldo ético e moral.",
    source: "Google Reviews",
    details: "2 avaliações",
  },
  {
    author: "Andressa Dias",
    rating: 5,
    timeAgo: "1 ano atrás",
    text: "Excelente profissional. Muito solícito e atencioso.",
    source: "Google Reviews",
    details: "13 avaliações",
  },
  {
    author: "Maicon Dias",
    rating: 5,
    timeAgo: "2 anos atrás",
    text: "Um advogado atencioso, te ajuda em tudo que você precisar, muito responsável. Muito obrigado Arthur!",
    source: "Google Reviews",
    details: "10 avaliações",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-rescisao-direitos",
    number: "01",
    title: "Fui Demitido Sem Justa Causa: Quais São Meus Direitos e Prazos?",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary:
      "Entenda cada verba rescisória devida (aviso prévio, 13º, férias e FGTS + 40%) e o prazo legal de 10 dias para o acerto do empregador.",
    content: [
      "Na demissão sem justa causa, o trabalhador tem direito ao saldo de salário, aviso prévio proporcional ao tempo de serviço, férias vencidas e proporcionais com 1/3, 13º salário proporcional e liberação das guias para saque do FGTS com a multa rescisória de 40%, além do seguro-desemprego.",
      "A Reforma Trabalhista estabeleceu o prazo improrrogável de até 10 dias corridos após o término do contrato para que a empresa efetue o pagamento integral de todas as verbas rescisórias sob pena de multa de um salário do empregado.",
      "A conferência minuciosa do TRCT por um advogado trabalhista é fundamental para constatar descontos indevidos, reflexos de horas extras habituais suprimidas ou base de cálculo errônea.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de esclarecimento público, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-pj-vinculo",
    number: "02",
    title: "Contrato 'PJ' com Horário e Subordinação: Fraude e Reconhecimento CLT",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary:
      "Saiba como a Justiça do Trabalho anula a 'pejotização' fraudulenta e garante todos os direitos celetistas retroativos.",
    content: [
      "A contratação de profissionais através de CNPJ (pejotização) é legítima apenas quando há real autonomia na prestação dos serviços. Se a empresa impõe horário fixo, subordinação a chefias, controle de tarefas e habitualidade pessoal, há relação de emprego disfarçada.",
      "O princípio da primazia da realidade prevalece sobre documentos assinados. Comprovados os requisitos dos artigos 2º e 3º da CLT, o Poder Judiciário declara o vínculo empregatício retroativo.",
      "Com a procedência, o trabalhador recebe retroativamente todos os depósitos de FGTS com multa de 40%, férias com 1/3 de todo o período, 13º salários, horas extras e eventuais adicionais legais.",
    ],
    oabDisclaimer:
      "Artigo informativo e de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-auxilio-doenca-negado",
    number: "03",
    title: "Auxílio-Doença Negado pelo INSS: Como Reverter na Justiça Federal",
    category: "Direito Previdenciário",
    readTime: "3 min de leitura",
    summary:
      "Perícia rápida e genérica no posto do INSS indeferiu seu benefício? Saiba como a perícia médica judicial garante imparcialidade.",
    content: [
      "O indeferimento de benefício por incapacidade temporária (auxílio-doença) pelo INSS atinge milhares de trabalhadores enfermos diariamente, frequentemente em perícias que duram menos de 5 minutos.",
      "O segurado não precisa se conformar com a decisão administrativa. Pela via judicial na Justiça Federal, a perícia médica é realizada por médico perito especialista nomeado pelo juiz, sem subordinação ao órgão previdenciário.",
      "Munido de prontuários, laudos médicos detalhados e exames atualizados, o advogado pleiteia o restabelecimento imediato do benefício com pagamento de todos os retroativos desde a data de cessação indevida.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-horas-extras-provas",
    number: "04",
    title: "Horas Extras e Intervalo Intrajornada: Como Provar a Jornada em Juízo",
    category: "Direito do Trabalho",
    readTime: "3 min de leitura",
    summary:
      "Cartões-ponto britânicos (sem variação de minutos) ou adulterados? Saiba quais provas demonstram a real sobrejornada.",
    content: [
      "O não pagamento ou cálculo incorreto de horas extras e adicional noturno figura entre os maiores motivos de litígios trabalhistas no Brasil. Muitas empresas burlam a lei obrigando o empregado a bater o ponto e continuar trabalhando.",
      "A Súmula 338 do TST determina que registros de ponto invariáveis ('britânicos') são inválidos, transferindo para o empregador o ônus de provar a jornada efetiva.",
      "Mensagens de WhatsApp fora do expediente, e-mails enviados à noite, relatórios de login em sistemas e testemunhas idôneas formam robusto conjunto probatório para a condenação da empresa às horas extraordinárias com adicional mínimo de 50%.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às regras da OAB.",
  },
  {
    id: "artigo-planejamento-previdenciario",
    number: "05",
    title: "Planejamento Previdenciário: Por Que Simular Antes de Requerer a Aposentadoria?",
    category: "Direito Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "As regras pós-Reforma da Previdência exigem simulações técnicas prévias para evitar perdas irreversíveis na Renda Mensal Inicial.",
    content: [
      "A Reforma da Previdência (EC 103/2019) criou cinco regras de transição distintas com fórmulas de cálculo complexas que alteram drasticamente o valor do benefício final.",
      "Requerer a aposentadoria no primeiro instante pelo aplicativo Meu INSS pode significar aceitar redutores severos sem necessidade. Muitas vezes, aguardar poucos meses sob outra regra de transição garante um acréscimo expressivo mensal e vitalício.",
      "O planejamento previdenciário analisa todo o histórico contributivo, corrige pendências do CNIS, averba períodos rurais e especiais insalubres e indica o momento exato para conquistar o melhor valor possível.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Contato Ágil & Análise Inicial",
    subtitle: "Atendimento direto com o Dr. Arthur via WhatsApp",
    description:
      "Você relata seu caso e envia documentos com sigilo ético absoluto. Analisamos minuciosamente contratos, cartões-ponto, holerites ou extrato do INSS.",
  },
  {
    number: "02",
    title: "Diagnóstico & Cálculos Precisos",
    subtitle: "Rigor técnico e estimativa exata de valores",
    description:
      "Utilizamos tecnologias jurídicas avançadas para simular o valor exato das verbas rescisórias, horas extras ou o tempo de contribuição devido.",
  },
  {
    number: "03",
    title: "Estratégia & Atuação Judicial ou Acordo",
    subtitle: "Foco obstinado no êxito da sua demanda",
    description:
      "Buscamos a solução mais célere: negociação inteligente quando favorável ou ação judicial contundente e técnica perante a Justiça do Trabalho ou Federal.",
  },
  {
    number: "04",
    title: "Acompanhamento & Transparência",
    subtitle: "Atualizações constantes sem juridiquês",
    description:
      "Você acompanha cada etapa do seu processo de forma clara, sabendo exatamente o andamento e os próximos passos até o efetivo recebimento dos valores.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui demitido. Qual o prazo que a empresa tem para me pagar?",
        answer:
          "Pela CLT atual, o empregador tem até 10 dias corridos após o término do contrato de trabalho para efetuar o pagamento integral das verbas rescisórias e entregar a documentação. Se atrasar, a empresa é obrigada a pagar uma multa no valor de um salário do funcionário.",
      },
      {
        id: "faq-trab-2",
        question: "Trabalhei como PJ mas tinha horário e chefe. Posso pedir direitos da CLT?",
        answer:
          "Sim! A chamada 'pejotização' fraudulenta é nula perante a Justiça do Trabalho. Se existia subordinação, habitualidade, salário fixo e pessoalidade, é reconhecido o vínculo formal com recebimento retroativo de FGTS + 40%, 13º, férias, horas extras e aviso prévio.",
      },
      {
        id: "faq-trab-3",
        question: "Sou obrigado a fazer horas extras todos os dias?",
        answer:
          "A lei permite até no máximo 2 horas extras diárias mediante acordo escrito ou convenção coletiva. A imposição arbitrária ou recusa em remunerar com acréscimo mínimo de 50% é ilegal e pode motivar ação trabalhista ou rescisão indireta.",
      },
      {
        id: "faq-trab-4",
        question: "Sofri acidente de trabalho ou estou doente. Tenho estabilidade?",
        answer:
          "Sim. O trabalhador que sofre acidente de trabalho ou contrai doença ocupacional e fica afastado pelo INSS por mais de 15 dias tem estabilidade no emprego de 12 meses após a cessação do auxílio-doença acidentário (código B91).",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    iconName: "Award",
    items: [
      {
        id: "faq-prev-1",
        question: "O INSS negou meu auxílio-doença. O que posso fazer agora?",
        answer:
          "Você não é obrigado a aceitar o laudo negativo do perito do INSS. É possível ajuizar uma ação perante a Justiça Federal, onde a perícia médica é realizada por especialista neutro e competente, garantindo o benefício com pagamento de retroativos.",
      },
      {
        id: "faq-prev-2",
        question: "O simulador do aplicativo 'Meu INSS' é 100% confiável?",
        answer:
          "Não! O simulador automático frequentemente induz ao erro porque não reconhece períodos de atividade especial (insalubre), trabalho rural sem certidão averbada ou pendências cadastrais no CNIS. Um planejamento previdenciário técnico é fundamental.",
      },
      {
        id: "faq-prev-3",
        question: "Quem tem direito ao benefício BPC/LOAS?",
        answer:
          "Idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem situação de vulnerabilidade e baixa renda familiar, sem necessidade de ter contribuído para o INSS.",
      },
      {
        id: "faq-prev-4",
        question: "Trabalhei em ambiente insalubre ou barulhento. Como isso adianta minha aposentadoria?",
        answer:
          "Através do formulário PPP (Perfil Profissiográfico Previdenciário), é possível comprovar tempo especial trabalhado com agentes nocivos e convertê-lo em tempo comum com acréscimo de 40% (homens) ou 20% (mulheres) para períodos anteriores à Reforma, antecipando a aposentadoria.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Honorários",
    iconName: "Clock",
    items: [
      {
        id: "faq-atend-1",
        question: "Como funciona o atendimento 100% digital?",
        answer:
          "Você conversa diretamente com o Dr. Arthur Pacheco pelo WhatsApp oficial. O envio de documentos é feito digitalmente por fotos ou PDF com segurança, e as consultas podem ser realizadas por videochamada ou mensagens, sem que você precise sair de casa.",
      },
      {
        id: "faq-atend-2",
        question: "Como são cobrados os honorários advocatícios?",
        answer:
          "Trabalhamos com total clareza e contrato formal transparente, em estrita observância à Tabela de Honorários da OAB e ao Código de Ética da Advocacia. Em demandas trabalhistas e previdenciárias de êxito, a maior parte dos honorários é pactuada sobre o resultado favorável obtido.",
      },
      {
        id: "faq-atend-3",
        question: "Tenho medo de 'ficar na lista negra' ao processar uma empresa. Isso é real?",
        answer:
          "Isso é um mito amplamente disseminado para intimidar o trabalhador. Buscar os direitos sonegados na Justiça é um direito constitucional fundamental. Nenhuma empresa tem acesso a cadastros paralelos legítimos, e a legislação proíbe e pune qualquer discriminação.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;