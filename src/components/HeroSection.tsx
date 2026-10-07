import React from "react";
import { ArrowDown, MessageSquare, Sparkles, BookOpen, Layers } from "lucide-react";
import { CATALOG_INFO, EXECUTIVE_METRICS } from "../data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="topo"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-zinc-800/80"
    >
      {/* Subtle architectural ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto py-8">
        {/* Unboxed clean catalog metadata kicker (No pills!) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-6 uppercase">
          <span>{CATALOG_INFO.edition}</span>
          <span aria-hidden="true">·</span>
          <span>{CATALOG_INFO.version}</span>
          <span aria-hidden="true">·</span>
          <span>{CATALOG_INFO.totalSolutions}</span>
        </div>

        {/* Hero Headline with text-wrap balance */}
        <div className="max-w-5xl mb-8">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
            Catálogo de soluções em tráfego e design formuladas para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              gerar faturamento real.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
            Apresentação comercial e catálogo técnico de serviços. Conheça as especificações,
            prazos de entrega (SLA) e amostras de produção de projetos de alta conversão
            e marcas consolidadas no mercado.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#solucoes-catalogo"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explorar Soluções Catalogadas (CAT-01 a CAT-06)</span>
          </a>

          <a
            href="#amostras-producao"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors"
          >
            <span>Ver Amostras de Produção (Cases)</span>
            <ArrowDown className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Catalog Executive Metrics Bar */}
        <div className="pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXECUTIVE_METRICS.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-mono-numbers">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-zinc-500 mt-0.5 leading-snug">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Ticker Ribbon */}
      <div className="w-full bg-zinc-950 border-y border-zinc-800/80 py-3 overflow-hidden select-none">
        <div className="flex items-center gap-8 whitespace-nowrap text-xs font-mono tracking-widest text-zinc-400">
          <span className="text-amber-400 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            CATÁLOGO OFICIAL 2026
          </span>
          <span>·</span>
          <span>[CAT-01] TRÁFEGO PAGO MULTICANAL</span>
          <span>·</span>
          <span>[CAT-02] BRANDING & IDENTIDADE VISUAL</span>
          <span>·</span>
          <span>[CAT-03] LANDING PAGES DE ALTA CONVERSÃO</span>
          <span>·</span>
          <span>[CAT-04] ESTEIRA DE CRIATIVOS DE RETENÇÃO</span>
          <span>·</span>
          <span>[CAT-05] AUDITORIA TÉCNICA DE FUNIL</span>
          <span>·</span>
          <span>[CAT-06] COMBO ACELERAÇÃO TOTAL 360°</span>
        </div>
      </div>
    </section>
  );
};
