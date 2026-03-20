import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function TradingWebPage() {
  return (
    <InternalPageLayout
      badge="Plataforma"
      title={<>Trading <span style={{ color: "#00bfff" }}>Web</span></>}
      subtitle="Negocie diretamente do seu navegador. Sem downloads, sem instalações. Acesse de qualquer computador com internet."
      cta={{ label: "Acessar plataforma", href: "#" }}
      features={[
        { title: "Acesso instantâneo", description: "Abra a plataforma no navegador e comece a negociar em segundos.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22") },
        { title: "Gráficos profissionais", description: "Gráficos em tempo real com +50 indicadores técnicos e ferramentas de desenho.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Interface intuitiva", description: "Design limpo e moderno, projetado para traders de todos os níveis.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
        { title: "Multi-monitor", description: "Suporte a múltiplas janelas para acompanhar vários ativos simultaneamente.", icon: icon("M2 5H9V12H2ZM15 5H22V12H15ZM2 15H22V20H2Z") },
        { title: "Notificações em tempo real", description: "Alertas de preço, sinais de negociação e notícias diretamente na plataforma.", icon: icon("M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8ZM13.73 21A2 2 0 0 1 10.27 21") },
        { title: "Compatível com todos os navegadores", description: "Chrome, Firefox, Safari, Edge — funciona perfeitamente em qualquer um.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM9 12L11 14L15 10") },
      ]}
    />
  );
}
