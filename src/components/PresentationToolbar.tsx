import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, MessageSquare, Maximize2, Minimize2, Share2, Check } from "lucide-react";

const SECTIONS = [
  { id: "topo", name: "Capa do Catálogo" },
  { id: "visao-estrategica", name: "Metodologia" },
  { id: "solucoes-catalogo", name: "Soluções [CAT-01..06]" },
  { id: "amostras-producao", name: "Amostras de Produção" },
  { id: "comparativo", name: "Comparativo Técnico" },
  { id: "calculadora-roi", name: "Simulador de Retorno" },
  { id: "processo", name: "Prazos & SLA" },
  { id: "depoimentos", name: "Avaliações Auditadas" },
  { id: "contato", name: "Pedido de Cotação" },
];

export const PresentationToolbar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Monitor which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      let activeIndex = 0;

      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            activeIndex = i;
          }
        }
      }
      setCurrentIdx(activeIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for presentation pitch (Arrow Down / Arrow Up)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in form inputs
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentIdx < SECTIONS.length - 1) {
          e.preventDefault();
          scrollToSection(currentIdx + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentIdx > 0) {
          e.preventDefault();
          scrollToSection(currentIdx - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIdx]);

  const scrollToSection = (idx: number) => {
    if (idx >= 0 && idx < SECTIONS.length) {
      const target = document.getElementById(SECTIONS[idx].id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setCurrentIdx(idx);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <aside
      aria-label="Controles de apresentação de slides"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 p-1.5 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl shadow-2xl text-xs"
    >
      {/* Current section name indicator */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1 font-mono text-zinc-400 border-r border-zinc-800">
        <span className="text-amber-400 font-semibold font-mono-numbers">
          {String(currentIdx + 1).padStart(2, "0")}/{String(SECTIONS.length).padStart(2, "0")}
        </span>
        <span className="text-zinc-300 font-medium truncate max-w-[140px]">
          {SECTIONS[currentIdx].name}
        </span>
      </div>

      {/* Up Button */}
      <button
        type="button"
        disabled={currentIdx === 0}
        onClick={() => scrollToSection(currentIdx - 1)}
        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Seção Anterior (Seta para cima)"
        aria-label="Seção Anterior"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Down Button */}
      <button
        type="button"
        disabled={currentIdx === SECTIONS.length - 1}
        onClick={() => scrollToSection(currentIdx + 1)}
        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Próxima Seção (Seta para baixo)"
        aria-label="Próxima Seção"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Fullscreen toggle button */}
      <button
        type="button"
        onClick={toggleFullscreen}
        className="hidden md:inline-flex p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        title={isFullscreen ? "Sair da Tela Cheia" : "Modo Tela Cheia"}
        aria-label="Alternar Tela Cheia"
      >
        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
      </button>

      {/* Copy link quick button */}
      <button
        type="button"
        onClick={handleShare}
        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        title="Copiar Link Desta Apresentação"
        aria-label="Copiar Link"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
      </button>

      {/* Direct WhatsApp Call */}
      <a
        href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Estou%20vendo%20a%20apresenta%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar."
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold transition-colors"
        title="Falar no WhatsApp"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
      </a>
    </aside>
  );
};
