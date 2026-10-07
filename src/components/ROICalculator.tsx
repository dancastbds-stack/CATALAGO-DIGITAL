import React, { useState } from "react";
import { Calculator, ArrowRight, MessageSquare, Info, Sparkles } from "lucide-react";

export const ROICalculator: React.FC = () => {
  const [budget, setBudget] = useState<number>(5000);
  const [ticket, setTicket] = useState<number>(1800);
  const [segment, setSegment] = useState<"services" | "b2b" | "ecommerce" | "local">("services");

  // Segment multipliers for realistic benchmarks
  const segmentMultipliers = {
    services: { cpl: 28, closeRate: 0.12, name: "Clínicas, Consultorias & Serviços de Alto Padrão" },
    b2b: { cpl: 65, closeRate: 0.15, name: "Fintechs, SaaS & Negócios B2B" },
    ecommerce: { cpl: 14, closeRate: 0.08, name: "E-commerce & Marcas D2C" },
    local: { cpl: 18, closeRate: 0.18, name: "Negócios Locais & Franquias Premium" },
  };

  const currentConfig = segmentMultipliers[segment];
  
  // Real-time calculation math
  const estimatedLeads = Math.max(1, Math.round(budget / currentConfig.cpl));
  const estimatedSales = Math.max(1, Math.round(estimatedLeads * currentConfig.closeRate));
  const estimatedRevenue = estimatedSales * ticket;
  const estimatedROAS = Number((estimatedRevenue / budget).toFixed(1));
  const estimatedQualifiedReach = Math.round(budget * 24); // Avg 24 people reached per real spent

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="calculadora-roi"
      className="py-24 bg-[#0B0C12] border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 mb-3 uppercase">
            <span>05. Ferramenta de Projeção</span>
            <span aria-hidden="true">·</span>
            <span>Simulador Interativo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Simule o potencial de retorno para o seu negócio.
          </h2>
          <p className="mt-4 text-base text-zinc-300 leading-relaxed font-normal">
            Ajuste seu orçamento mensal previsto e o valor médio do seu serviço. As estimativas são baseadas
            em médias reais de campanhas ativas com a metodologia integrada.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Segment Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                1. Selecione o Modelo do Seu Negócio
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: "services", label: "Serviços / Clínicas" },
                  { id: "b2b", label: "B2B / Corporativo" },
                  { id: "ecommerce", label: "E-commerce D2C" },
                  { id: "local", label: "Negócios Locais" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSegment(item.id as any)}
                    className={`px-4 py-3 text-xs font-medium rounded-lg border text-left transition-all ${
                      segment === item.id
                        ? "bg-amber-400/10 border-amber-400 text-amber-300 shadow-sm"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="budget-slider" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  2. Investimento Mensal Previsto em Anúncios
                </label>
                <span className="font-display text-xl font-bold text-white font-mono-numbers">
                  {formatCurrency(budget)}
                </span>
              </div>
              <input
                id="budget-slider"
                type="range"
                min="1500"
                max="30000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>R$ 1.500/mês</span>
                <span>R$ 15.000/mês</span>
                <span>R$ 30.000/mês</span>
              </div>
            </div>

            {/* Ticket Average Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="ticket-slider" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  3. Ticket Médio do Produto ou Serviço
                </label>
                <span className="font-display text-xl font-bold text-amber-400 font-mono-numbers">
                  {formatCurrency(ticket)}
                </span>
              </div>
              <input
                id="ticket-slider"
                type="range"
                min="200"
                max="15000"
                step="100"
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>R$ 200</span>
                <span>R$ 5.000</span>
                <span>R$ 15.000</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-zinc-400 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Cálculo baseado em taxa média de conversão da landing page de alta performance e
                taxa de fechamento comercial conservadora ({Math.round(currentConfig.closeRate * 100)}%).
              </span>
            </div>
          </div>

          {/* Results Box Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                Projeção Estimada Mensal
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Retorno Estimado em Mídia
              </h3>

              <div className="space-y-4">
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-4">
                  <span className="text-xs text-zinc-400 block mb-0.5">Faturamento Estimado</span>
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white font-mono-numbers">
                    {formatCurrency(estimatedRevenue)}
                  </span>
                  <span className="text-xs text-zinc-500 block mt-1">
                    Com {estimatedSales} fechamentos previstos no mês
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3">
                    <span className="text-xs text-zinc-400 block mb-1">ROAS Projetado</span>
                    <span className="font-display text-2xl font-bold text-amber-400 font-mono-numbers">
                      {estimatedROAS}x
                    </span>
                  </div>

                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-3">
                    <span className="text-xs text-zinc-400 block mb-1">Contatos Qualificados</span>
                    <span className="font-display text-2xl font-bold text-white font-mono-numbers">
                      ~{estimatedLeads}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-zinc-400 px-1 pt-1 font-mono">
                  <span>Alcance Qualificado:</span>
                  <span className="text-zinc-200">+{estimatedQualifiedReach.toLocaleString("pt-BR")} pessoas</span>
                </div>
              </div>
            </div>

            {/* Direct CTA with pre-filled projection values */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <a
                href={`https://wa.me/5511998765432?text=Ol%C3%A1!%20Fiz%20uma%20simula%C3%A7%C3%A3o%20no%20link%20de%20apresenta%C3%A7%C3%A3o%3A%20Investimento%20de%20${encodeURIComponent(
                  formatCurrency(budget)
                )}%20com%20ticket%20m%C3%A9dio%20de%20${encodeURIComponent(
                  formatCurrency(ticket)
                )}%20no%20segmento%20${encodeURIComponent(
                  currentConfig.name
                )}.%20Podemos%20conversar%20sobre%20a%20estrat%C3%A9gia%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-400/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Validar Essa Projeção no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
