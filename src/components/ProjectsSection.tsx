import React, { useState } from "react";
import { ArrowUpRight, Eye, Layers } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section
      id="amostras-producao"
      className="py-24 bg-[#090A0F] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with catalog index */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>Seção 03 · Amostras de Produção</span>
            <span aria-hidden="true">·</span>
            <span>Cases Homologados no Catálogo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Projetos reais executados com as soluções do catálogo.
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            Exemplos práticos de implementação das soluções [CAT-01] a [CAT-06] em negócios reais.
            Clique em qualquer amostra para inspecionar a ficha técnica completa, métricas de retorno e entregáveis.
          </p>
        </div>

        {/* Dynamic Bento Showcase Grid - Continuous Single Page Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((caseStudy, index) => {
            const isMarquee = index === 0 || index === 1;
            return (
              <div
                key={caseStudy.id}
                onClick={() => setSelectedCase(caseStudy)}
                className={`group cursor-pointer bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/90 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isMarquee ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Fallback pattern */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center">
                    <span className="text-zinc-600 font-mono text-sm">{caseStudy.client}</span>
                  </div>

                  {/* Gradient Overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Catalog Reference Pill */}
                  <div className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-sm border border-zinc-700/80 text-amber-400 font-mono text-xs px-2.5 py-1 rounded-md shadow-md">
                    {caseStudy.catalogRef}
                  </div>

                  {/* Hover inspection badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/90 backdrop-blur-sm border border-zinc-700 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspecionar Ficha Técnica</span>
                  </div>

                  {/* Client & Segment Over Image */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-1">
                      <span className="font-semibold">{caseStudy.client}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-zinc-400">{caseStudy.segment}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Metrics */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed mb-6 font-normal">
                    {caseStudy.challenge}
                  </p>

                  <div>
                    {/* Primary Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800/80 mb-4">
                      <div>
                        <span className="text-xs text-zinc-500 font-medium block">
                          {caseStudy.metrics[0].label}
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-white font-mono-numbers">
                          {caseStudy.metrics[0].value}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-zinc-500 font-medium block">
                          {caseStudy.metrics[1].label}
                        </span>
                        <span className="font-display text-xl sm:text-2xl font-bold text-amber-400 font-mono-numbers">
                          {caseStudy.metrics[1].value}
                        </span>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-zinc-800/60 text-zinc-400">
                      <span className="font-mono">{caseStudy.period}</span>
                      <span className="text-amber-400 font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Ver Ficha Completa
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Case Detail Modal */}
      <ProjectModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
};
