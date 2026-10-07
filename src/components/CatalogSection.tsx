import React from "react";
import { Check, Clock, Plus, CheckCircle, MessageSquare, Layers, ShieldCheck } from "lucide-react";
import { CATALOG_SOLUTIONS, CatalogSolution } from "../data/portfolioData";

interface CatalogSectionProps {
  selectedSkus: string[];
  onToggleItem: (item: CatalogSolution) => void;
  onOpenDrawer: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedSkus,
  onToggleItem,
  onOpenDrawer,
}) => {
  return (
    <section
      id="solucoes-catalogo"
      className="py-24 bg-[#090A0F] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Catalog Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>Seção 02 · Catálogo Oficial de Soluções</span>
            <span aria-hidden="true">·</span>
            <span>Edição 2026/2027</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Especificações técnicas das soluções catalogadas.
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            Consulte as fichas técnicas, prazos de entrega (SLA) e escopos detalhados de cada serviço.
            Você pode adicionar itens à sua seleção de orçamento para solicitar uma proposta conjunta
            ou contratar soluções avulsas.
          </p>
        </div>

        {/* Catalog Items Grid (Continuous single-page stream, NO tabs) */}
        <div className="space-y-8">
          {CATALOG_SOLUTIONS.map((item) => {
            const isSelected = selectedSkus.includes(item.sku);

            return (
              <div
                key={item.sku}
                className={`bg-zinc-900/40 border rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                  isSelected
                    ? "border-amber-400/70 bg-zinc-900/80 shadow-lg shadow-amber-400/5"
                    : "border-zinc-800/90 hover:border-zinc-700"
                }`}
              >
                {/* Item Top Bar / SKU & Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm sm:text-base font-bold bg-amber-400 text-zinc-950 px-2.5 py-1 rounded-md">
                      {item.sku}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.turnaround}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                      <Layers className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.model}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Core Description */}
                <div className="py-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-amber-300/90 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal max-w-4xl">
                    {item.description}
                  </p>
                  <div className="mt-3 text-xs text-zinc-400 flex items-center gap-2">
                    <span className="text-zinc-500 font-mono">Público-Alvo Recomendado:</span>
                    <span className="text-zinc-300">{item.targetAudience}</span>
                  </div>
                </div>

                {/* Dual Column: Technical Specs & Deliverables */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-zinc-800/80">
                  {/* Left: Deliverables Checklist */}
                  <div className="lg:col-span-7">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                      Entregáveis Inclusos no Catálogo:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.deliverables.map((del, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/50"
                        >
                          <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Technical Specs Table */}
                  <div className="lg:col-span-5 bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                        Ficha Técnica & Requisitos
                      </span>
                      <div className="space-y-2.5 text-xs">
                        {item.specifications.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex justify-between items-center py-1.5 border-b border-zinc-800/60 last:border-0"
                          >
                            <span className="text-zinc-400">{spec.label}</span>
                            <span className="text-zinc-200 font-mono font-medium text-right ml-2 truncate max-w-[210px]">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500 font-mono">
                      {item.priceNote}
                    </div>
                  </div>
                </div>

                {/* Item Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 font-mono">Código para Solicitação: </span>
                    <strong className="text-white font-mono">{item.sku}</strong>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onToggleItem(item)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        isSelected
                          ? "bg-amber-400 text-zinc-950 hover:bg-amber-300"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Adicionado ao Orçamento</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-amber-400" />
                          <span>Adicionar à Seleção ({item.sku})</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/5511998765432?text=Ol%C3%A1!%20Acessei%20o%20cat%C3%A1logo%20digital%20e%20gostaria%20de%20consultar%20a%20solu%C3%A7%C3%A3o%20[${encodeURIComponent(
                        item.sku
                      )}]%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Cotar Este Item Direto</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
