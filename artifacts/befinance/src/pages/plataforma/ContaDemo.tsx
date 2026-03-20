import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function ContaDemoPage() {
  return (
    <InternalPageLayout
      badge="Plataforma"
      title={<>Conta <span style={{ color: "#00bfff" }}>Demo</span> Gratuita</>}
      subtitle="Pratique sem riscos com R$10.000 virtuais. Aprenda a negociar antes de investir dinheiro real."
      cta={{ label: "Abrir conta demo", href: "#" }}
      features={[
        { title: "R$10.000 virtuais", description: "Comece com saldo virtual generoso para praticar suas estratégias.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Sem riscos financeiros", description: "Aprenda e erre sem perder dinheiro real. Perfeito para iniciantes.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "Dados reais do mercado", description: "A conta demo usa dados reais do mercado para simulação fiel.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Todas as ferramentas", description: "Acesso completo a indicadores, gráficos e ferramentas de análise.", icon: icon("M14.7 6.3A1 1 0 0 0 13.3 6.3L2 17.6V22H6.4L17.7 10.7A1 1 0 0 0 17.7 9.3L14.7 6.3Z") },
        { title: "Saldo recarregável", description: "Acabou o saldo demo? Recarregue a qualquer momento, ilimitadamente.", icon: icon("M23 4V10H17M1 20V14H7M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.99 14A9 9 0 0 1 18.36 18.36L14 23") },
        { title: "Transição fácil para real", description: "Quando estiver confiante, migre para conta real com apenas um clique.", icon: icon("M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z") },
      ]}
    />
  );
}
