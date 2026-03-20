import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function ParceirosPage() {
  return (
    <InternalPageLayout
      badge="Sobre"
      title={<><span style={{ color: "#00bfff" }}>Parceiros</span> Institucionais</>}
      subtitle="Trabalhamos com parceiros de classe mundial para oferecer a melhor experiência de trading do mercado."
      features={[
        { title: "Provedores de liquidez", description: "Parcerias com os maiores provedores de liquidez globais para execução eficiente.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22M12 2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 22") },
        { title: "Infraestrutura cloud", description: "Servidores distribuídos globalmente com parceiros de tecnologia de ponta.", icon: icon("M22 12H18L15 21L9 3L6 12H2") },
        { title: "Processadores de pagamento", description: "Integração com os melhores processadores para transações seguras e rápidas.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Parceiros educacionais", description: "Colaborações com instituições de ensino para conteúdo educacional de qualidade.", icon: icon("M2 7L12 3L22 7L12 11L2 7ZM5 8.5V15L12 18.5L19 15V8.5") },
        { title: "Auditores financeiros", description: "Empresas de auditoria renomadas que verificam nossas práticas e conformidade.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
        { title: "Mídia e imprensa", description: "Relacionamentos com veículos de mídia especializados em finanças.", icon: icon("M4 4H20V16H4ZM4 8H20M8 4V16") },
      ]}
    />
  );
}
