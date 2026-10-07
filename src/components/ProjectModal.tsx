import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, MessageSquare, Quote, Sparkles } from "lucide-react";
import { CaseStudy } from "../data/portfolioData";

interface ProjectModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-amber-400 font-semibold">{caseStudy.client}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.segment}</span>
            <span aria-hidden="true">·</span>
            <span>{caseStudy.period}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Frame with Fallback Resilience */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video group">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              onError={(e) => {
                // Zero-broken-image fallback
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
            {/* Fallback container background if image fails */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-6 text-center">
              <span className="text-zinc-500 font-mono text-sm">{caseStudy.title}</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-mono">
                {caseStudy.segment}
              </span>
              <h3 id="modal-case-title" className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                {caseStudy.title}
              </h3>
            </div>
          </div>

          {/* Quantitative Impact Metric Badges (Claim-to-proof adjacent) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-4 flex flex-col justify-between"
              >
                <span className="text-xs text-zinc-400 font-medium">{m.label}</span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-amber-400 my-1 font-mono-numbers">
                  {m.value}
                </span>
                <span className="text-xs text-zinc-500 leading-tight">{m.context}</span>
              </div>
            ))}
          </div>

          {/* Challenge and Solution Detailed Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-zinc-900/40 border border-zinc-800/70 rounded-xl p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                O Desafio Comercial
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/70 rounded-xl p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-mono mb-2">
                A Estratégia & Solução
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 font-mono mb-3">
              Entregáveis do Projeto
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-900/40 border border-zinc-800/60 rounded-lg px-3.5 py-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial (Attributable) */}
          {caseStudy.clientQuote && (
            <div className="bg-gradient-to-r from-amber-400/5 via-zinc-900/80 to-zinc-900 border-l-2 border-amber-400 p-5 rounded-r-xl">
              <Quote className="w-5 h-5 text-amber-400/60 mb-2" />
              <p className="text-sm italic text-zinc-200 leading-relaxed">
                "{caseStudy.clientQuote.text}"
              </p>
              <div className="mt-3 text-xs text-zinc-400 font-medium">
                <span className="text-white font-semibold">{caseStudy.clientQuote.author}</span>
                {" — "}
                <span>{caseStudy.clientQuote.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Footer */}
        <div className="px-6 py-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-zinc-400">
            Deseja resultados e estrutura semelhantes no seu negócio?
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 rounded-lg transition-colors"
            >
              Voltar à Apresentação
            </button>
            <a
              href={`https://wa.me/5511998765432?text=Ol%C3%A1!%20Vi%20o%20case%20da%20${encodeURIComponent(
                caseStudy.client
              )}%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20parecido.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Solicitar Orçamento Deste Formato</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
