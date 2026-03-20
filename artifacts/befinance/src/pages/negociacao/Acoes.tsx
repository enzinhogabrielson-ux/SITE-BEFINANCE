import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function AcoesPage() {
  return (
    <InternalPageLayout
      badge="Negociação"
      title={<>Negocie <span style={{ color: "#00bfff" }}>Ações</span> Globais</>}
      subtitle="Acesse as maiores empresas do mundo. Negocie ações de blue chips sem comissões, com execução rápida."
      cta={{ label: "Negociar Ações", href: "#" }}
      features={[
        { title: "Blue chips globais", description: "Apple, Tesla, Amazon, Google e centenas de outras empresas disponíveis.", icon: icon("M2 20H22M5 20V8L12 4L19 8V20") },
        { title: "Zero comissão", description: "Negocie ações sem pagar comissões. Seus lucros são seus.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Mercados globais", description: "NYSE, NASDAQ, LSE e outras bolsas internacionais ao seu alcance.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22") },
        { title: "Análise fundamentalista", description: "Dados financeiros, balanços e relatórios de empresas integrados na plataforma.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
        { title: "Gráficos avançados", description: "Ferramentas de análise técnica profissionais para tomar decisões informadas.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Notícias em tempo real", description: "Feed de notícias financeiras integrado para acompanhar o mercado.", icon: icon("M4 4H20V16H4ZM4 8H20M8 4V16") },
      ]}
    />
  );
}
