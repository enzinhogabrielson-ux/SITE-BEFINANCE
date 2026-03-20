import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function CriptomoedasPage() {
  return (
    <InternalPageLayout
      badge="Negociação"
      title={<><span style={{ color: "#00bfff" }}>Criptomoedas</span></>}
      subtitle="Negocie Bitcoin, Ethereum e dezenas de altcoins. Mercado 24/7 com volatilidade e oportunidades constantes."
      cta={{ label: "Negociar Cripto", href: "#" }}
      features={[
        { title: "Bitcoin e Ethereum", description: "As maiores criptomoedas do mundo disponíveis para negociação instantânea.", icon: icon("M9.5 2C5.36 2 2 5.36 2 9.5C2 13.64 5.36 17 9.5 17C11.5 17 13.35 16.22 14.69 14.94L20 20.25L21.25 19L15.94 13.69C17.22 12.35 18 10.5 18 8.5") },
        { title: "Mercado 24/7", description: "Criptomoedas não dormem. Negocie a qualquer hora, qualquer dia da semana.", icon: icon("M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z") },
        { title: "+30 criptoativos", description: "BTC, ETH, ADA, SOL, DOT, AVAX e muitas outras altcoins disponíveis.", icon: icon("M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12") },
        { title: "Volatilidade lucrativa", description: "Aproveite as oscilações do mercado cripto para maximizar seus ganhos.", icon: icon("M3 3V21H21M7 16L11 11L15 15L21 7") },
        { title: "Sem custódia", description: "Negocie sem se preocupar com carteiras digitais ou chaves privadas.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "Spreads competitivos", description: "Negocie cripto com spreads entre os mais baixos do mercado.", icon: icon("M4 20L10 12L14 16L20 8M20 8H15M20 8V13") },
      ]}
    />
  );
}
