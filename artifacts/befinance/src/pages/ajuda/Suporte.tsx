import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function SuportePage() {
  return (
    <InternalPageLayout
      badge="Ajuda"
      title={<>Suporte <span style={{ color: "#00bfff" }}>24/7</span></>}
      subtitle="Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana. Atendimento humanizado em português."
      features={[
        { title: "Atendimento 24/7", description: "Suporte disponível a qualquer hora do dia ou da noite, todos os dias.", icon: icon("M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z") },
        { title: "Chat ao vivo", description: "Conecte-se instantaneamente com um especialista pelo chat da plataforma.", icon: icon("M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z") },
        { title: "Equipe em português", description: "Atendimento nativo em português brasileiro. Sem barreiras de idioma.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22") },
        { title: "Tempo médio de resposta: 30s", description: "Nossa equipe responde em média em menos de 30 segundos.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Especialistas em trading", description: "Atendentes treinados em mercado financeiro para ajuda técnica especializada.", icon: icon("M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z") },
        { title: "Satisfação de 98%", description: "98% dos nossos clientes avaliam positivamente o atendimento.", icon: icon("M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z") },
      ]}
    />
  );
}
