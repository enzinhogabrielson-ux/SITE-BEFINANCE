import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function OpcoesDigitais() {
  return (
    <InternalPageLayout
      badge="Negociação"
      title={<>Opções <span style={{ color: "#00bfff" }}>Digitais</span></>}
      subtitle="Negocie opções digitais com retornos de até 92%. Escolha a direção do preço, defina o tempo e o valor — tudo em poucos cliques."
      cta={{ label: "Comece a negociar", href: "#" }}
      features={[
        { title: "Retornos de até 92%", description: "Lucros potenciais elevados em cada operação bem-sucedida. Resultados rápidos e transparentes.", icon: icon("M4 20L10 12L14 16L20 8M20 8H15M20 8V13") },
        { title: "Operações a partir de R$5", description: "Comece com valores acessíveis. Negociações mínimas de apenas R$5 por operação.", icon: icon("M12 2V22M17 5H9.5C8.57 5 7.68 5.37 7.02 6.02C6.37 6.68 6 7.57 6 8.5C6 9.43 6.37 10.32 7.02 10.98C7.68 11.63 8.57 12 9.5 12H14.5C15.43 12 16.32 12.37 16.98 13.02C17.63 13.68 18 14.57 18 15.5C18 16.43 17.63 17.32 16.98 17.98C16.32 18.63 15.43 19 14.5 19H6") },
        { title: "Durações a partir de 5s", description: "Escolha o tempo que melhor se adapta à sua estratégia, de 5 segundos a várias horas.", icon: icon("M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z") },
        { title: "Mais de 190 ativos", description: "Negocie pares de moedas, ações, commodities e criptomoedas em uma única plataforma.", icon: icon("M3 3V21H21M7 16L11 11L15 15L21 7") },
        { title: "Análise técnica integrada", description: "Indicadores, gráficos avançados e ferramentas de análise diretamente na plataforma.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
        { title: "Conta demo gratuita", description: "Pratique com R$10.000 virtuais antes de investir dinheiro real. Sem riscos.", icon: icon("M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z") },
      ]}
    />
  );
}
