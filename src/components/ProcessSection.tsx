import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { WORK_PROCESS } from "../data/portfolioData";

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="processo"
      className="py-24 bg-[#090A0F] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>06. Método de Implementação</span>
            <span aria-hidden="true">·</span>
            <span>Passo a Passo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Como funciona a implementação do projeto.
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            Trabalhamos com cronograma rigoroso e comunicação transparente. Você sabe exatamente
            o que está sendo produzido em cada semana sem reuniões desnecessárias.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((item, index) => (
            <div
              key={item.step}
              className="bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 flex flex-col justify-between transition-colors relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-amber-400">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {item.phase}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 uppercase">
                {index < 3 ? `Próximo: Fase 0${index + 2}` : "Ciclo de Crescimento Ativo"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
