import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { BEFORE_AFTER_COMPARISON } from "../data/portfolioData";

export const BeforeAfterSection: React.FC = () => {
  return (
    <section
      id="comparativo"
      className="py-24 bg-[#0B0C12] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>03. Diagnóstico de Mercado</span>
            <span aria-hidden="true">·</span>
            <span>Comparativo Direto</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            O que muda na sua empresa quando unimos tráfego e design?
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            A maioria dos negócios trava o crescimento não por falta de um bom produto,
            mas por transmitir uma imagem desvalorizada ou rodar anúncios sem narrativa de conversão.
          </p>
        </div>

        {/* Comparison Matrix Table / Cards */}
        <div className="space-y-4">
          {BEFORE_AFTER_COMPARISON.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
            >
              {/* Criteria Title */}
              <div className="md:col-span-3 p-5 md:p-6 bg-zinc-900/80 border-b md:border-b-0 md:border-r border-zinc-800 flex items-center">
                <span className="font-display text-sm sm:text-base font-bold text-white">
                  {item.criteria}
                </span>
              </div>

              {/* Before State (Com Cenário Tradicional) */}
              <div className="md:col-span-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-zinc-800/70 flex items-start gap-3 bg-red-950/10">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400/90 font-semibold block mb-1">
                    Sem Estratégia Integrada
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.before}
                  </p>
                </div>
              </div>

              {/* After State (Com Metodologia Integrada) */}
              <div className="md:col-span-5 p-5 md:p-6 flex items-start gap-3 bg-amber-500/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                    Com a Metodologia Integrada
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                    {item.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaway Callout */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Conclusão Prática
            </span>
            <p className="text-sm text-zinc-300 mt-1">
              Você não precisa de mais seguidores curiosos. Precisa de um sistema previsível que coloque
              clientes com dinheiro no bolso em contato com sua equipe comercial.
            </p>
          </div>
          <a
            href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20como%20aplicar%20essa%20metodologia%20na%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap self-start sm:self-center"
          >
            <span>Quero Mudar Meu Cenário</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
