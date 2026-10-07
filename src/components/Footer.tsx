import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-sm font-bold text-white uppercase tracking-wider block mb-1">
            PORTFÓLIO EXECUTIVO
          </span>
          <p className="text-zinc-400">
            Apresentação comercial e projetos de marketing digital, branding e performance.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono">© {new Date().getFullYear()} Apresentação Executiva. Todos os direitos reservados.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            title="Voltar ao Topo"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
