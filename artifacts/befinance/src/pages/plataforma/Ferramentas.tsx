import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function FerramentasPage() {
  return (
    <InternalPageLayout
      badge="Plataforma"
      title={<>Ferramentas <span style={{ color: "#00bfff" }}>Analíticas</span></>}
      subtitle="Mais de 50 indicadores técnicos, gráficos avançados e ferramentas profissionais para suas análises."
      cta={{ label: "Explorar ferramentas", href: "#" }}
      features={[
        { title: "+50 indicadores técnicos", description: "RSI, MACD, Bollinger Bands, médias móveis e muito mais.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Gráficos avançados", description: "Candlestick, barras, linhas e gráficos de área com zoom e timeframes.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
        { title: "Ferramentas de desenho", description: "Linhas de tendência, canais, Fibonacci e ferramentas de retração.", icon: icon("M14.7 6.3A1 1 0 0 0 13.3 6.3L2 17.6V22H6.4L17.7 10.7A1 1 0 0 0 17.7 9.3L14.7 6.3Z") },
        { title: "Sinais automáticos", description: "Receba sinais de compra e venda baseados em análise técnica avançada.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Multi-timeframe", description: "Analise desde gráficos de 5 segundos até mensais na mesma tela.", icon: icon("M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z") },
        { title: "Alertas de preço", description: "Configure alertas personalizados e receba notificações quando atingidos.", icon: icon("M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8ZM13.73 21A2 2 0 0 1 10.27 21") },
      ]}
    />
  );
}
