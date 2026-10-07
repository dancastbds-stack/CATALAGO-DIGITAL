export interface CatalogSolution {
  sku: string;
  category: string;
  title: string;
  subtitle: string;
  turnaround: string;
  model: string;
  targetAudience: string;
  description: string;
  deliverables: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  priceNote: string;
}

export interface CaseStudy {
  id: string;
  catalogRef: string;
  title: string;
  client: string;
  segment: string;
  period: string;
  image: string;
  featured?: boolean;
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  visualHighlights: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const CATALOG_INFO = {
  edition: "Catálogo Oficial · Edição Executiva 2026/2027",
  title: "Catálogo Digital de Soluções Criativas & Marketing",
  subtitle: "Guia completo de contratação de serviços de tráfego pago, branding e design de conversão para empresas em expansão.",
  version: "v4.2 - Homologado",
  totalSolutions: "06 Soluções Catalogadas",
  totalSamples: "06 Amostras de Produção",
  whatsappNumber: "5511998765432",
  email: "contato@apresentacaoexecutiva.com",
};

export const EXECUTIVE_METRICS = [
  {
    value: "+R$ 4.8M",
    label: "Faturamento Catalogado",
    detail: "Volume de vendas e contratos gerados em clientes",
  },
  {
    value: "4.2x",
    label: "ROAS Médio Auditado",
    detail: "Retorno histórico consolidado em mídia paga gerida",
  },
  {
    value: "+85",
    label: "Entregas Homologadas",
    detail: "Identidades visuais, funis e campanhas implementadas",
  },
  {
    value: "-38%",
    label: "Redução de Custo por Lead",
    detail: "Média de ganho de eficiência nos primeiros 90 dias",
  },
];

export const CATALOG_SOLUTIONS: CatalogSolution[] = [
  {
    sku: "CAT-01",
    category: "Aquisição de Tráfego & Mídia Paga",
    title: "Gestão de Tráfego Pago & Aquisição Multicanal",
    subtitle: "Campanhas contínuas de alta precisão no Meta Ads, Google Ads e TikTok Ads",
    turnaround: "5 a 7 dias úteis para setup e início",
    model: "Retainer Mensal com Otimização Semanal",
    targetAudience: "Empresas com produto validado que precisam de fluxo constante e previsível de novos clientes",
    description:
      "Estruturação e escala de campanhas focadas em geração de leads qualificados ou vendas diretas. Rastreamento server-side avançado, otimização de lances em tempo real e relatórios executivos quinzenais com métricas financeiras claras.",
    deliverables: [
      "Configuração de Pixels, GA4 e API de Conversões Server-Side",
      "Pesquisa aprofundada de intenção de busca e público-alvo",
      "Campanhas de Google Search, Rede de Display e YouTube Ads",
      "Campanhas de Meta Ads (Feed, Reels, Stories e Direct/WhatsApp)",
      "Testes contínuos de criativos, públicos e chamadas para ação",
      "Dashboard dinâmico de performance e reuniões de alinhamento",
    ],
    specifications: [
      { label: "Canais Suportados", value: "Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads" },
      { label: "Orçamento Mínimo Recomendado", value: "R$ 2.000 / mês em mídia" },
      { label: "Frequência de Otimização", value: "Acompanhamento diário" },
      { label: "Relatórios", value: "Dashboard ao vivo + Fechamento quinzenal" },
    ],
    priceNote: "Sob consulta com base no volume de contas e investimento",
  },
  {
    sku: "CAT-02",
    category: "Identidade Visual & Branding",
    title: "Identidade Visual & Branding Premium",
    subtitle: "Sistemas visuais completos para elevar o valor percebido do seu negócio",
    turnaround: "15 a 20 dias úteis",
    model: "Projeto Fechado Turn-Key com Direitos Autorais Totais",
    targetAudience: "Empresas que desejam cobrar mais caro, sair da briga por preço e atrair clientes de alto padrão",
    description:
      "Desenvolvimento de marcas com narrativa visual refinada e autoridade imediata. Não entregamos apenas um logotipo solto: criamos um universo de marca completo com tipografia, cromatismo, aplicações institucionais e diretrizes para todos os pontos de contato.",
    deliverables: [
      "Diagnóstico de posicionamento e moodboard estratégico",
      "Símbolo principal, logotipo tipográfico e monogramas de apoio",
      "Paleta de cores com códigos para digital (RGB/HEX) e impressão (CMYK/Pantone)",
      "Família tipográfica com hierarquia de uso e diretrizes",
      "Brandbook / Manual de Identidade Visual em PDF interativo",
      "Aplicações chave (papelaria, uniformes, embalagens, templates sociais)",
    ],
    specifications: [
      { label: "Arquivos Entregues", value: "AI, EPS, SVG, PNG transparente e PDF vetorial" },
      { label: "Direitos Autorais", value: "100% cedidos ao contratante" },
      { label: "Ciclos de Ajuste", value: "Até 3 rodadas de refinamento inclusas" },
      { label: "Suporte Pós-Entrega", value: "30 dias para dúvidas técnicas de aplicação" },
    ],
    priceNote: "Investimento fixo parcelado por etapas de aprovação",
  },
  {
    sku: "CAT-03",
    category: "Design de Conversão & UI/UX",
    title: "Landing Pages & Páginas de Alta Conversão",
    subtitle: "Estruturas digitais desenhadas milimetricamente para transformar visitantes em compradores",
    turnaround: "7 a 10 dias úteis",
    model: "Projeto Fechado (Design Exclusivo em Figma + Código Responsivo)",
    targetAudience: "Profissionais liberais, clínicas, infoprodutos e empresas B2B com perda de leads no site atual",
    description:
      "Páginas com carregamento instantâneo, narrativa persuasiva com quebra de objeções e visual moderno. Desenvolvidas sem templates engessados para garantir a máxima retenção de atenção nos primeiros 3 segundos.",
    deliverables: [
      "Arquitetura de informação e wireframe focado em conversão",
      "Copywriting comercial persuasivo com seções de prova social",
      "Design de interface mobile-first de alto impacto visual",
      "Desenvolvimento em código limpo, sem bloatware, com carregamento < 1.2s",
      "Integração nativa com WhatsApp, RD Station, HubSpot ou ActiveCampaign",
      "Testes de velocidade no Google PageSpeed Insights (Score 90+)",
    ],
    specifications: [
      { label: "Tecnologia", value: "HTML5/Tailwind/React ultrarrápido ou WordPress Headless" },
      { label: "Responsividade", value: "Otimizado para smartphones, tablets e desktop" },
      { label: "Segurança", value: "Certificado SSL e conformidade com LGPD" },
      { label: "Analytics", value: "Eventos de clique, scroll e conversão rastreados" },
    ],
    priceNote: "Orçamento por escopo de página (Single-page ou Funil multipáginas)",
  },
  {
    sku: "CAT-04",
    category: "Produção Criativa & Audiovisual",
    title: "Esteira de Criativos de Retenção & Motion Design",
    subtitle: "Peças visuais em vídeo e estáticas formuladas para superar a cegueira de banner",
    turnaround: "Entregas semanais ou quinzenais contínuas",
    model: "Assinatura Criativa Mensal ou Lote Pontual de Lançamento",
    targetAudience: "Marcas com anúncios saturados e que sofrem com aumento de CPM nas plataformas",
    description:
      "A chave para escalar tráfego pago hoje é o criativo. Produzimos roteiros, motion graphics e artes estáticas com ganchos visuais testados para reter a atenção nos primeiros 3 segundos de feed, Reels e TikTok.",
    deliverables: [
      "Roteiros e ganchos (Hook Rate) baseados em dores e desejos reais",
      "Motion graphics e edição dinâmica para formatos verticais 9:16",
      "Carrosséis estratégicos educativos e de prova social 1:1 e 4:5",
      "Variações de títulos e thumbnails para testes A/B sistemáticos",
      "Exportação em alta definição pronta para subir nos gerenciadores de anúncios",
    ],
    specifications: [
      { label: "Volume do Pacote", value: "Lotes de 8, 16 ou 24 criativos / mês" },
      { label: "Formatos", value: "MP4 (H.264), MOV, PNG 4K e WebP otimizado" },
      { label: "Duração dos Vídeos", value: "Entre 7s e 30s para máxima retenção" },
      { label: "Testes A/B", value: "3 variações de gancho para cada conceito aprovado" },
    ],
    priceNote: "Planos mensais recorrentes com desconto progressivo",
  },
  {
    sku: "CAT-05",
    category: "Consultoria & Inteligência de Negócio",
    title: "Diagnóstico & Auditoria Completa de Funil (Raio-X)",
    subtitle: "Auditoria técnica detalhada de contas de anúncios, site e jornada de vendas",
    turnaround: "3 a 5 dias úteis",
    model: "Consultoria Pontual de Diagnóstico com Reunião Executiva",
    targetAudience: "Empresas que já investem em marketing mas sentem que poderiam vender muito mais com a mesma verba",
    description:
      "Uma análise cirúrgica de onde o seu dinheiro está vazando. Avaliamos a estrutura de contas de anúncios, a taxa de rejeição da landing page, a qualidade dos criativos e a eficiência do time comercial que atende os leads.",
    deliverables: [
      "Auditoria de configuração de rastreamento (Pixel, CAPI, GA4)",
      "Análise de criativos com diagnóstico de Hook Rate e Hold Rate",
      "Mapa de calor e análise de pontos de atrito na página de captura",
      "Documento executivo em PDF com plano de ação prioritário de 30 dias",
      "Sessão estratégica de 90 minutos via videoconferência para apresentação",
    ],
    specifications: [
      { label: "Escopo de Contas", value: "Até 3 gerenciadores de anúncios e 2 sites" },
      { label: "Formato de Entrega", value: "Dossiê Executivo PDF + Vídeo explicativo gravado" },
      { label: "Plano de Ação", value: "Checklist com correções emergenciais e de escala" },
    ],
    priceNote: "Valor único com dedução em caso de contratação de gestão mensal",
  },
  {
    sku: "CAT-06",
    category: "Pacote Integrado Completo (All-in-One)",
    title: "Combo Aceleração Total 360°",
    subtitle: "A solução completa: Branding + Landing Page + Setup e Gestão Inicial de Tráfego",
    turnaround: "25 dias úteis para entrega e lançamento",
    model: "Projeto Completo de Estruturação + 1º Mês de Tráfego Inclusos",
    targetAudience: "Lançamento de novas empresas, produtos de alto valor ou rebranding total de marcas existentes",
    description:
      "A solução definitiva para quem busca rapidez, coerência absoluta e zero dor de cabeça com múltiplos fornecedores. Nós cuidamos da identidade da marca, criamos a página de vendas e colocamos as campanhas para rodar com o primeiro lote de criativos validados.",
    deliverables: [
      "Identidade Visual & Branding Completo (Manual da Marca + Ativos)",
      "Landing Page Exclusiva de Alta Conversão com Rastreamento Completo",
      "Lote de 12 Criativos Iniciais de Alto Impacto para Anúncios",
      "Setup Técnico de Meta Ads e Google Ads",
      "Gestão e Otimização do 1º Mês de Tráfego Pago Inclusa",
      "Roteiro e Treinamento de Abordagem para a Recepção/Comercial",
    ],
    specifications: [
      { label: "Integração", value: "100% alinhada entre design, copy e mídia paga" },
      { label: "Vantagem Comercial", value: "Economia de até 30% em relação aos itens separados" },
      { label: "Acompanhamento", value: "Canal exclusivo no WhatsApp com o estrategista" },
    ],
    priceNote: "Condição especial de pacote com parcelamento facilitado",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lumina-skin-clinic",
    catalogRef: "REF: #LUM-01",
    title: "Rebranding Premium & Funil de Aquisição de Pacientes",
    client: "Lumina Skin Clinic",
    segment: "Dermatologia & Estética Avançada",
    period: "Acompanhamento de 6 Meses",
    image: "/src/assets/images/case_branding_lumina_1791334275525.jpg",
    featured: true,
    metrics: [
      {
        label: "ROAS em Meta Ads",
        value: "5.8x",
        context: "Retorno sobre investimento em mídia",
      },
      {
        label: "Novas Consultas",
        value: "+184",
        context: "Pacientes agendados no primeiro trimestre",
      },
      {
        label: "Redução de Custo por Lead",
        value: "-42%",
        context: "Qualificação prévia via formulário WhatsApp",
      },
    ],
    challenge:
      "A clínica possuía excelentes profissionais e estrutura impecável, mas competia por preço na internet. Os criativos antigos tinham visual genérico e atraíam contatos desqualificados que desistiam ao ouvir o valor da consulta.",
    solution:
      "Desenvolvemos um reposicionamento visual completo com estética minimalista de luxo (tons quentes, tipografia editorial, fotografia autoral). Paralelamente, implementamos campanhas no Instagram com criativos em vídeo demonstrando a autoridade técnica dos médicos e segmentação geográfica por renda.",
    deliverables: [
      "Nova Identidade Visual & Brand Guidelines",
      "Design de Embalagens e Material de Cabine",
      "Landing Page Sensorial de Agendamento",
      "Gestão de Tráfego Meta Ads (Instagram/Facebook)",
      "Automação e Script de Conversão para Recepção",
    ],
    visualHighlights: [
      "Tipografia clássica com espaçamento óptico refinado",
      "Paleta de cores em nude mineral, marfim e bronze fosco",
      "Anúncios com roteiros de quebra de objeção prévia",
    ],
    clientQuote: {
      text: "Deixamos de dar descontos para ter fila de espera de 3 semanas. Essa reformulação transformou a percepção da clínica da noite para o dia.",
      author: "Dra. Mariana Vasconcellos",
      role: "Diretora Clínica & Sócia Fundadora",
    },
  },
  {
    id: "vortice-saas",
    catalogRef: "REF: #VOR-02",
    title: "Interface de Alta Conversão & Aquisição B2B",
    client: "Vórtice Finance Tech",
    segment: "Fintech & Gestão de Tesouraria B2B",
    period: "Lançamento em 4 Meses",
    image: "/src/assets/images/case_saas_vortice_1791334286337.jpg",
    featured: true,
    metrics: [
      {
        label: "Taxa de Conversão da LP",
        value: "5.4%",
        context: "Aumento de 200% em relação à versão antiga (1.8%)",
      },
      {
        label: "Pipeline Gerado",
        value: "R$ 1.2M",
        context: "Em oportunidades abertas para o time comercial",
      },
      {
        label: "Demos Fechadas",
        value: "72",
        context: "Reuniões qualificadas com CFOs e diretores",
      },
    ],
    challenge:
      "A solução de software resolvia uma dor crítica de conciliação bancária corporativa, porém o site anterior era denso, repleto de jargões técnicos e com formulário longo que causava alta taxa de rejeição.",
    solution:
      "Reformulação total da arquitetura de informação: layout dark mode tecnológico com visualização em micro-interações do software, prova social destacada e funil de conversão em 2 etapas integrado ao CRM. Campanhas focadas em Google Search de alta intenção e LinkedIn Ads.",
    deliverables: [
      "UI/UX Design de Landing Page Responsiva",
      "Design de Telas do Produto para Materiais Promocionais",
      "Campanhas Google Search & Display Segmentado",
      "Lead Magnets (Calculadora de ROI Financeiro)",
      "Rastreamento Avançado de Eventos (GA4 & Pixel)",
    ],
    visualHighlights: [
      "Micro-gráficos e prévias da interface em alta definição",
      "Hierarquia visual guiando o olhar diretamente para o CTA",
      "Formulário inteligente com validação em tempo real",
    ],
    clientQuote: {
      text: "O visual e a clareza da nova página dobraram a credibilidade do nosso pitch comercial com fundos e grandes contas.",
      author: "Rodrigo Mendonça",
      role: "Head of Growth na Vórtice",
    },
  },
  {
    id: "aura-cafe-roastery",
    catalogRef: "REF: #AUR-03",
    title: "Identidade Sensorial & Campanha de Lançamento D2C",
    client: "Aura Cafés Especiais",
    segment: "Alimentos & Bebidas Gourmet",
    period: "Campanha de 3 Meses",
    image: "/src/assets/images/case_coffee_packaging_1791334295848.jpg",
    featured: true,
    metrics: [
      {
        label: "Esgotamento do Estoque",
        value: "72 Horas",
        context: "Todo o 1º lote de microlotes foi vendido no launch",
      },
      {
        label: "Vendas no E-commerce",
        value: "+350%",
        context: "Crescimento sustentado no trimestre seguinte",
      },
      {
        label: "Engajamento Instagram",
        value: "8.4%",
        context: "Taxa média orgânica através de conteúdo estético",
      },
    ],
    challenge:
      "A marca precisava se destacar entre dezenas de cafés especiais sem depender de grandes verbas de patrocínio ou pontos físicos caros, focando 100% no modelo direto ao consumidor (D2C).",
    solution:
      "Criação de um universo de marca autêntico com design de embalagens colecionáveis, rótulos texturizados e narrativa focada na origem dos grãos. Estratégia de tráfego com vídeos cinematográficos curtos mostrando o ritual do preparo.",
    deliverables: [
      "Sistema de Identidade Visual e Ilustrações de Origem",
      "Design de Embalagens Especiais e Rótulos",
      "Design de E-commerce Shopify de Alta Velocidade",
      "Campanhas de Tráfego Pago D2C (Meta + Pinterest)",
      "Estratégia de Lançamento com Lista VIP de Espera",
    ],
    visualHighlights: [
      "Embalagens com acabamento matte e carimbos numerados",
      "Experiência de unboxing pensada para compartilhamento",
      "Fotografia e criativos com iluminação natural suave",
    ],
    clientQuote: {
      text: "As pessoas compram o café pelo sabor, mas chegaram até nós atraídas pelo design impecável da embalagem e dos anúncios.",
      author: "Camila Guimarães",
      role: "Mestre de Torra & Co-fundadora",
    },
  },
  {
    id: "nexus-fitness-club",
    catalogRef: "REF: #NEX-04",
    title: "Campanha Georreferenciada & Tráfego de Matrículas",
    client: "Nexus Performance Club",
    segment: "Fitness & Bem-Estar Premium",
    period: "Lançamento em 45 Dias",
    image: "/src/assets/images/case_fitness_campaign_1791334305655.jpg",
    featured: true,
    metrics: [
      {
        label: "Novas Matrículas",
        value: "+430",
        context: "Alunos pagantes nos primeiros 45 dias",
      },
      {
        label: "Receita Recorrente Adicional",
        value: "R$ 210k/mês",
        context: "Atingimento da meta de faturamento anual antecipada",
      },
      {
        label: "CAC Médio por Aluno",
        value: "R$ 14,20",
        context: "Investimento extremamente eficiente por matrícula",
      },
    ],
    challenge:
      "Inauguração de nova unidade física de grande porte em região com concorrência acirrada de redes 'low cost'. Era necessário vender o conceito de alta performance e suporte personalizado sem parecer inacessível.",
    solution:
      "Funil em 3 fases: Fase 1 (Campanha teaser de lista de espera VIP com desconto antecipado), Fase 2 (Abertura oficial com convite exclusivo para amigos), Fase 3 (Escala de tráfego local com raio de 5km destacando a estrutura).",
    deliverables: [
      "Comunicação Visual de Inauguração e Sinalização",
      "Campanhas Georreferenciadas no Meta Ads e Google Maps",
      "Criativos em Motion Design de Alto Impacto para Stories/Reels",
      "Landing Page com Integração Direta de Checkout Recorrente",
    ],
    visualHighlights: [
      "Estética esportiva enérgica com contraste preto, chumbo e neon",
      "Vídeos curtos de 6 a 15 segundos pensados para engajamento rápido",
      "Gatilhos de escassez real com contador de vagas por lote",
    ],
    clientQuote: {
      text: "Abrimos a unidade já no ponto de equilíbrio operacional. Nunca tínhamos visto uma adesão tão rápida nas unidades anteriores.",
      author: "Felipe Andrade",
      role: "Diretor de Operações Nexus",
    },
  },
  {
    id: "zenith-arquitetura",
    catalogRef: "REF: #ZEN-05",
    title: "Brand Book & Captação de Projetos Residenciais de Luxo",
    client: "Zenith Arquitetura Contemporânea",
    segment: "Arquitetura & Design de Interiores",
    period: "Ciclo de 90 Dias",
    image: "/src/assets/images/case_branding_lumina_1791334275525.jpg",
    featured: false,
    metrics: [
      {
        label: "Contratos Fechados",
        value: "6",
        context: "Projetos completos de casas em condomínios fechados",
      },
      {
        label: "Ticket Médio por Projeto",
        value: "R$ 380k",
        context: "Honorários e acompanhamento de obras",
      },
      {
        label: "Retorno sobre Mídia",
        value: "9.4x",
        context: "Campanha altamente segmentada por CEP e patrimônio",
      },
    ],
    challenge:
      "Escritório de arquitetura renomado que dependia exclusivamente de indicações boca a boca, o que gerava meses de ociosidade e incerteza no fluxo de caixa.",
    solution:
      "Desenvolvimento de portfolio digital interativo em formato de livro editorial impresso e digital. Campanhas de Google Ads com palavras-chave de altíssima qualificação ('arquiteto de luxo', 'projeto residencial alto padrão').",
    deliverables: [
      "Redesign de Portfolio Editorial Digital",
      "Google Ads de Alta Intenção Comercial",
      "Deck de Apresentação Comercial em PDF Interativo",
      "Consultoria de Processo Comercial de Apresentação",
    ],
    visualHighlights: [
      "Design minimalista com fotos em grande escala",
      "Propostas comerciais diagramadas com padrão internacional",
    ],
  },
  {
    id: "pulse-urbanwear",
    catalogRef: "REF: #PUL-06",
    title: "Estratégia de Criativos UGC & Escala de E-commerce",
    client: "Pulse Urbanwear",
    segment: "Moda & Streetwear Nacional",
    period: "Acompanhamento de 6 Meses",
    image: "/src/assets/images/case_fitness_campaign_1791334305655.jpg",
    featured: false,
    metrics: [
      {
        label: "Crescimento em Faturamento",
        value: "+280%",
        context: "Comparado ao mesmo semestre do ano anterior",
      },
      {
        label: "ROAS Médio Mantido",
        value: "3.9x",
        context: "Mesmo triplicando o orçamento diário de anúncios",
      },
      {
        label: "Aumento de Ticket Médio",
        value: "+45%",
        context: "Com bundles visuais e order bumps no checkout",
      },
    ],
    challenge:
      "A marca estagnou quando tentou escalar o orçamento de anúncios: o custo por compra disparou devido à fadiga rápida dos criativos convencionais.",
    solution:
      "Implementação de esteira contínua de testes de criativos semanais (3 novos formatos por semana), mixando estética urbana autoral com formatos virais estilo TikTok e melhoria visual do checkout da loja virtual.",
    deliverables: [
      "Direção de Arte para Ensaios de Coleção",
      "Esteira Semanal de 12+ Novos Criativos para Anúncios",
      "Otimização de CRO de Loja Virtual (Taxa de Conversão)",
      "Gestão de Tráfego no TikTok Ads e Meta Ads",
    ],
    visualHighlights: [
      "Linguagem visual autêntica e conectada à cultura jovem",
      "Testes constantes de ganchos visuais nos primeiros 3 segundos",
    ],
  },
];

export const BEFORE_AFTER_COMPARISON = [
  {
    criteria: "Design e Imagem de Marca",
    before: "Visual amador ou genérico feito em templates prontos. Não transmite a verdadeira qualidade do serviço.",
    after: "Identidade visual autoral, estética refinada e consistente em todos os pontos de contato com o cliente.",
  },
  {
    criteria: "Origem dos Clientes",
    before: "100% dependente de indicações boca a boca ou de postagens orgânicas que ninguém vê.",
    after: "Funil ativo de anúncios rodando 24 horas por dia atraindo pessoas interessadas no seu nicho.",
  },
  {
    criteria: "Qualidade dos Leads",
    before: "Curiosos que perguntam 'qual o valor?' e somem ao receber a resposta.",
    after: "Leads que já chegam pré-aquecidos, cientes da autoridade e do padrão do seu trabalho.",
  },
  {
    criteria: "Poder de Precificação",
    before: "Obrigatoriedade de dar descontos para não perder clientes para concorrentes mais baratos.",
    after: "Margem de lucro protegida pela percepção de exclusividade e profissionalismo.",
  },
  {
    criteria: "Clareza das Métricas",
    before: "Sem saber quanto cada anúncio gerou de retorno financeiro real.",
    after: "Dashboard com dados claros: custo por lead, taxa de conversão e retorno sobre investimento (ROAS).",
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    phase: "Diagnóstico & Imersão",
    duration: "Semana 1",
    description:
      "Mapeamento profundo do seu modelo de negócio, histórico de vendas, concorrentes e diferenciais competitivos. Identificamos exatamente onde está o gargalo de crescimento.",
  },
  {
    step: "02",
    phase: "Direção Estratégica & Criação",
    duration: "Semana 2",
    description:
      "Construção da narrativa da marca, definição das mensagens-chave, design das páginas e produção do primeiro lote de criativos de alta conversão.",
  },
  {
    step: "03",
    phase: "Setup Técnico & Lançamento",
    duration: "Semana 3",
    description:
      "Configuração de rastreamento avançado, publicação das landing pages com alta velocidade e início das campanhas de tráfego com orçamento controlado.",
  },
  {
    step: "04",
    phase: "Escala & Otimização Contínua",
    duration: "Contínuo",
    description:
      "Análise diária de dados, substituição de criativos saturados, otimização de públicos e escala gradual do orçamento nas variações mais lucrativas.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Dr. Marcelo Sampaio",
    role: "Proprietário",
    company: "Instituto Sampaio de Odontologia",
    text: "O trabalho integrou duas coisas que quase nunca andam juntas: um padrão visual impecável e uma mentalidade afiada de números e vendas. Nossa agenda de procedimentos de alto valor lotou em menos de 60 dias.",
    metricHighlight: "+140% no faturamento mensal",
  },
  {
    name: "Beatriz Nogueira",
    role: "CEO & Fundadora",
    company: "Nogueira Joias Contemporâneas",
    text: "Antes dessa metodologia, testamos agências que só falavam em curtidas vazias. Esta foi a primeira vez que vimos nosso site, apresentação e anúncios realmente gerarem vendas consistentes.",
    metricHighlight: "4.6x de ROAS no e-commerce",
  },
  {
    name: "Gabriel Rezende",
    role: "Diretor Comercial",
    company: "Apex Soluções em Energia Solar",
    text: "A apresentação institucional e a landing page criadas mudaram o patamar das nossas reuniões com empresas e indústrias. A taxa de fechamento subiu imediatamente porque a empresa passou a parecer o que ela realmente é: gigante.",
    metricHighlight: "R$ 3.4M em propostas aprovadas",
  },
];
