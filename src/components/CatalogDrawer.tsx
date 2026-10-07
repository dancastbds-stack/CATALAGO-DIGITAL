import React from "react";
import { X, Trash2, ArrowRight, MessageSquare, CheckCircle2, Clock } from "lucide-react";
import { CatalogSolution } from "../data/portfolioData";

interface CatalogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: CatalogSolution[];
  onRemoveItem: (sku: string) => void;
  onClear: () => void;
}

export const CatalogDrawer: React.FC<CatalogDrawerProps> = ({
  isOpen,
  onClose,
  selectedItems,
  onRemoveItem,
  onClear,
}) => {
  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    if (selectedItems.length === 0) {
      return "https://wa.me/5511998765432?text=Ol%C3%A1!%20Acessei%20o%20cat%C3%A1logo%20digital%20e%20gostaria%20de%20solicitar%20uma%20proposta.";
    }

    const itemsList = selectedItems
      .map((item, idx) => `${idx + 1}. [${item.sku}] ${item.title} (${item.turnaround})`)
      .join("\n");

    const text = `*Solicitação de Proposta via Catálogo Digital*
Olá! Selecionei os seguintes itens no catálogo para solicitar orçamento:

${itemsList}

Poderia me enviar informações sobre disponibilidade e condições para o meu negócio?`;

    return `https://wa.me/5511998765432?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-zinc-950 border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                Seleção de Orçamento
              </span>
              <h3 id="drawer-title" className="font-display text-xl font-bold text-white mt-0.5">
                Itens Selecionados no Catálogo ({selectedItems.length})
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Fechar gaveta"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="py-6 space-y-4">
            {selectedItems.length === 0 ? (
              <div className="text-center py-12 px-4 border border-dashed border-zinc-800 rounded-xl">
                <p className="text-sm text-zinc-400 mb-2">
                  Você ainda não adicionou nenhuma solução do catálogo.
                </p>
                <p className="text-xs text-zinc-500">
                  Navegue pelo catálogo e clique em <strong>"Adicionar à Seleção"</strong> nas soluções que desejar orçar.
                </p>
              </div>
            ) : (
              selectedItems.map((item) => (
                <div
                  key={item.sku}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono mb-1">
                        <span className="text-amber-400 font-bold">{item.sku}</span>
                        <span className="text-zinc-500">·</span>
                        <span className="text-zinc-400 truncate max-w-[200px]">{item.category}</span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.sku)}
                      className="p-1 text-zinc-500 hover:text-rose-400 transition-colors shrink-0"
                      title="Remover item da seleção"
                      aria-label="Remover item da seleção"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.turnaround}</span>
                    </span>
                    <span className="text-zinc-300 font-medium">{item.model}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-zinc-800 space-y-3">
          {selectedItems.length > 0 && (
            <div className="flex justify-between items-center text-xs text-zinc-400 pb-2">
              <span>{selectedItems.length} soluções adicionadas</span>
              <button
                type="button"
                onClick={onClear}
                className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs underline"
              >
                Limpar seleção
              </button>
            </div>
          )}

          <a
            href={buildWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>
              {selectedItems.length > 0
                ? `Solicitar Proposta dos ${selectedItems.length} Itens no WhatsApp`
                : "Conversar sobre o Catálogo no WhatsApp"}
            </span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
          >
            Continuar Explorando o Catálogo
          </button>
        </div>
      </div>
    </div>
  );
};
