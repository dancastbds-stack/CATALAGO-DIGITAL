import React, { useState, useEffect } from "react";
import { MessageSquare, Share2, Check, ShoppingBag } from "lucide-react";

interface HeaderProps {
  selectedCount?: number;
  onOpenDrawer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCount = 0,
  onOpenDrawer,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090A0F]/85 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Scroll Reading Progress Bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Clean Digital Catalog Wordmark */}
        <a
          href="#topo"
          className="font-display text-sm sm:text-base font-bold tracking-wider text-white hover:text-amber-400 transition-colors uppercase flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>CATÁLOGO DIGITAL 2026</span>
        </a>

        {/* Zone 2: Catalog Quick Actions (No website tabs!) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenDrawer && (
            <button
              type="button"
              onClick={onOpenDrawer}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                selectedCount > 0
                  ? "bg-amber-400 text-zinc-950 border-amber-400 shadow-md shadow-amber-400/20"
                  : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Minha Seleção</span>
              <span
                className={`px-1.5 py-0.2 rounded text-[11px] font-mono font-bold ${
                  selectedCount > 0 ? "bg-zinc-950 text-amber-400" : "bg-zinc-800 text-zinc-300"
                }`}
              >
                {selectedCount}
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={handleCopyLink}
            title="Copiar link deste catálogo digital para compartilhar"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-mono-numbers">Link Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Copiar Catálogo</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Acessei%20o%20cat%C3%A1logo%20digital%20e%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shadow-sm shadow-amber-400/10"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Direto</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
