import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { CatalogSection } from "./components/CatalogSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ROICalculator } from "./components/ROICalculator";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PresentationToolbar } from "./components/PresentationToolbar";
import { CatalogDrawer } from "./components/CatalogDrawer";
import { CatalogSolution } from "./data/portfolioData";

export default function App() {
  const [selectedItems, setSelectedItems] = useState<CatalogSolution[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleItem = (item: CatalogSolution) => {
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.sku === item.sku);
      if (exists) {
        return prev.filter((i) => i.sku !== item.sku);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveItem = (sku: string) => {
    setSelectedItems((prev) => prev.filter((i) => i.sku !== sku));
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  const selectedSkus = selectedItems.map((i) => i.sku);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-amber-400 selection:text-zinc-950 font-sans">
      {/* Top Header Bar with Reading Progress & Catalog Selection Trigger */}
      <Header
        selectedCount={selectedItems.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Main Single-Page Infinite Scroll Flow - Digital Catalog Structure */}
      <main className="w-full">
        {/* 1. Capa Editorial do Catálogo & Visão Executiva */}
        <HeroSection />

        {/* 2. Metodologia Estratégica: Por que tráfego e design funcionam em sinergia */}
        <PhilosophySection />

        {/* 3. Catálogo Oficial de Soluções & Serviços [CAT-01 a CAT-06] */}
        <CatalogSection
          selectedSkus={selectedSkus}
          onToggleItem={handleToggleItem}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />

        {/* 4. Amostras de Produção Catalogadas (Cases reais com métricas e fotos em alta resolução) */}
        <ProjectsSection />

        {/* 5. Comparativo Técnico & Diagnóstico de Mercado */}
        <BeforeAfterSection />

        {/* 6. Simulador Interativo de Faturamento & ROI */}
        <ROICalculator />

        {/* 7. Prazos de Entrega, SLA & Fluxo de Implementação */}
        <ProcessSection />

        {/* 8. Prova Social & Depoimentos Auditáveis */}
        <TestimonialsSection />

        {/* 9. Envio de Pedido de Cotação & WhatsApp Direto */}
        <ContactSection selectedSkus={selectedSkus} />
      </main>

      {/* Quiet Professional Footer */}
      <Footer />

      {/* Floating Presentation & Section Navigation Toolbar */}
      <PresentationToolbar />

      {/* Slide-over Drawer para Gestão de Itens Selecionados no Catálogo */}
      <CatalogDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        selectedItems={selectedItems}
        onRemoveItem={handleRemoveItem}
        onClear={handleClear}
      />
    </div>
  );
}
