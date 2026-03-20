import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function ForexPage() {
  return (
    <InternalPageLayout
      badge="Negociação"
      title={<><span style={{ color: "#00bfff" }}>Forex</span> — Câmbio Global</>}
      subtitle="Negocie os principais pares de moedas do mundo. Mercado aberto 24h, 5 dias por semana, com spreads competitivos."
      cta={{ label: "Negociar Forex", href: "#" }}
      features={[
        { title: "Pares de moedas populares", description: "EUR/USD, GBP/USD, USD/JPY e dezenas de outros pares disponíveis para negociação.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22M12 2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 22M12 2C9.5 4.7 8 8.2 8 12C8 15.8 9.5 19.3 12 22") },
        { title: "Mercado 24h", description: "Opere em qualquer horário, de segunda a sexta. O mercado Forex nunca para.", icon: icon("M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z") },
        { title: "Alavancagem disponível", description: "Amplie seu poder de negociação com alavancagem competitiva em todos os pares.", icon: icon("M4 20L10 12L14 16L20 8M20 8H15M20 8V13") },
        { title: "Spreads baixos", description: "Opere com spreads a partir de 0.1 pip nos principais pares de moedas.", icon: icon("M3 3V21H21M7 16L11 11L15 15L21 7") },
        { title: "Execução instantânea", description: "Ordens executadas em milissegundos. Sem requotes, sem atrasos.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Calendário econômico", description: "Acompanhe eventos globais que impactam o mercado diretamente na plataforma.", icon: icon("M8 2V6M16 2V6M3 10H21M5 4H19A2 2 0 0 1 21 6V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V6A2 2 0 0 1 5 4Z") },
      ]}
    />
  );
}
