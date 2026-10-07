import React from "react";
import { TrendingUp, Palette, Target, Zap, CheckCircle2 } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section
      id="visao-estrategica"
      className="py-24 bg-[#0B0C12] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>Metodologia Estratégica</span>
            <span aria-hidden="true">·</span>
            <span>Visão Integrada</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Por que contratar tráfego e design separados é um erro comum?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            No mercado tradicional, a agência de tráfego culpa o site ou os criativos pelas baixas vendas,
            enquanto o designer cria peças conceituais sem entender métricas de retenção e conversão.
            Nossa abordagem unifica ambos em um único ecossistema focado no faturamento.
          </p>
        </div>

        {/* 2 Core Pillars & The Central Synergy Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1: Tráfego de Precisão */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Pilar 01
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                Tráfego de Alta Precisão
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Segmentação granular baseada em intenção de compra e dados demográficos.
                Testes contínuos de lances, orçamentos e canais para garantir que cada real
                investido encontre o cliente com poder aquisitivo real.
              </p>
            </div>
            <ul className="mt-6 pt-6 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Otimização diária de CPA e ROAS</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rastreamento Server-Side e GA4</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Públicos de remarketing segmentados</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Design de Autoridade */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Pilar 02
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                Design com Autoridade
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                A estética não é cosmética; ela é a barreira contra a comoditização.
                Criamos marcas com posicionamento premium que despertam desejo imediato e
                eliminam a comparação por preço com concorrentes comuns.
              </p>
            </div>
            <ul className="mt-6 pt-6 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Identidades visuais exclusivas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hierarquia tipográfica impecável</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Percepção de alto valor percebido</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: O Resultado Combinado */}
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-400/30 p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-lg bg-amber-400 text-zinc-950 flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                O Resultado Integrado
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                A Máquina de Conversão
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Anúncios atraem os visitantes certos com criativos magnéticos, e a landing page
                transforma esse fluxo em pedidos de orçamento qualificados ou vendas fechadas,
                sem perdas pelo caminho.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Retenção de Atenção</span>
                <span className="text-amber-400 font-mono-numbers font-semibold">+320%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Conversão de Leads</span>
                <span className="text-amber-400 font-mono-numbers font-semibold">Até 3x maior</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Gasto com Desperdício</span>
                <span className="text-emerald-400 font-mono-numbers font-semibold">Redução drástica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
