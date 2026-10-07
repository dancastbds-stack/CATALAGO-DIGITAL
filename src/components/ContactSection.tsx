import React, { useState } from "react";
import { MessageSquare, Mail, Send, CheckCircle2, Share2, Check, ArrowRight, ShoppingBag } from "lucide-react";

interface ContactSectionProps {
  selectedSkus?: string[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedSkus = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    budget: "R$ 3.000 a R$ 6.000/mês",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const catalogItemsText = selectedSkus.length > 0 ? `\n*Soluções Selecionadas:* ${selectedSkus.join(", ")}` : "";

    const text = `*Solicitação de Proposta via Catálogo Digital*
*Nome:* ${formData.name}
*Empresa:* ${formData.company || "Não informado"}
*WhatsApp:* ${formData.phone}
*Investimento Previsto:* ${formData.budget}${catalogItemsText}
*Objetivo/Desafio:* ${formData.message || "Interesse nas soluções do catálogo"}`;

    const waUrl = `https://wa.me/5511998765432?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section
      id="contato"
      className="py-24 bg-[#090A0F] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Closing Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
                <span>Seção 08 · Contratação & SLA</span>
                <span aria-hidden="true">·</span>
                <span>Atendimento Direto</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
                Solicite uma proposta técnica dos itens do catálogo.
              </h2>
              <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
                Analisamos a viabilidade técnica e estratégica para a sua empresa sem compromisso.
                Entre em contato pelo WhatsApp para receber um cronograma com datas de implantação.
              </p>
            </div>

            {selectedSkus.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Itens Selecionados no Catálogo ({selectedSkus.length})</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono">
                  {selectedSkus.join(" · ")}
                </p>
              </div>
            )}

            {/* Direct Channels */}
            <div className="space-y-3">
              <a
                href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Acessei%20o%20cat%C3%A1logo%20digital%20e%20gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block uppercase">
                    WhatsApp Direto (Resposta Rápida)
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    +55 (11) 99876-5432
                  </span>
                </div>
              </a>

              <a
                href="mailto:contato@apresentacaoexecutiva.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 block uppercase">
                    E-mail Corporativo
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    contato@apresentacaoexecutiva.com
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Share Link for Partners / Decision Makers */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-400 block mb-2 uppercase">
                Apresentando para sócios ou diretoria?
              </span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link do Catálogo Copiado!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copiar Link do Catálogo Digital Completo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Briefing Request Form */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Solicitar Proposta do Catálogo Digital
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-normal">
              Preencha os dados abaixo para receber uma análise preliminar e proposta personalizada com prazos e valores.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-display text-lg font-bold text-white">
                  Mensagem Encaminhada com Sucesso!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Sua solicitação foi direcionada diretamente ao WhatsApp para atendimento prioritário.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs text-zinc-400 hover:text-white bg-zinc-900 rounded-lg border border-zinc-800"
                >
                  Enviar Outra Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Mendes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Nome da Empresa / Projeto
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Clínica Estética / Marca X"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Investimento Mensal Estimado
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="R$ 2.000 a R$ 4.000/mês">R$ 2.000 a R$ 4.000 / mês</option>
                      <option value="R$ 4.000 a R$ 8.000/mês">R$ 4.000 a R$ 8.000 / mês</option>
                      <option value="R$ 8.000 a R$ 20.000/mês">R$ 8.000 a R$ 20.000 / mês</option>
                      <option value="Acima de R$ 20.000/mês">Acima de R$ 20.000 / mês</option>
                      <option value="Apenas Projeto Pontual do Catálogo">Apenas Projeto Pontual do Catálogo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Detalhes do Seu Momento ou Soluções Desejadas
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ex: Desejamos contratar o pacote [CAT-01] para escalar nossas campanhas e reformular nossa página [CAT-03]."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Pedido de Cotação no WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
