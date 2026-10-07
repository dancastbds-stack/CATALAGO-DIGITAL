import React from "react";
import { Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-[#0B0C12] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>07. Prova Social Auditável</span>
            <span aria-hidden="true">·</span>
            <span>O Que Dizem os Parceiros</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Resultados que geram parcerias de longo prazo.
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            Depoimentos reais de fundadores, médicos e diretores que confiaram na nossa consultoria
            para transformar seus números.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-7 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-400/80 mb-4" />
                <p className="text-sm text-zinc-200 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-1.5 mb-4 inline-block">
                  <span className="text-xs font-mono text-amber-300 font-semibold font-mono-numbers">
                    {item.metricHighlight}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {item.role} · <span className="text-zinc-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
