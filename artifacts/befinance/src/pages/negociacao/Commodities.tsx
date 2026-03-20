import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function CommoditiesPage() {
  return (
    <InternalPageLayout
      badge="Negociação"
      title={<><span style={{ color: "#00bfff" }}>Commodities</span></>}
      subtitle="Negocie ouro, prata, petróleo e outras commodities globais. Diversifique seu portfólio com ativos tradicionais."
      cta={{ label: "Negociar Commodities", href: "#" }}
      features={[
        { title: "Ouro e Prata", description: "Negocie metais preciosos como proteção e oportunidade de lucro.", icon: icon("M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z") },
        { title: "Petróleo WTI e Brent", description: "Acompanhe e negocie as duas principais referências de petróleo do mundo.", icon: icon("M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 6V12L16 14") },
        { title: "Gás Natural", description: "Opere gás natural e aproveite as variações sazonais de preço.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Commodities agrícolas", description: "Café, soja, milho e outros produtos agrícolas para diversificação.", icon: icon("M7 20L11 4M13 20L17 4M4 8H21M3 16H20") },
        { title: "Análise de mercado", description: "Relatórios e análises específicas para o mercado de commodities.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
        { title: "Proteção contra inflação", description: "Commodities são uma das melhores formas de proteger seu capital da inflação.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
      ]}
    />
  );
}
