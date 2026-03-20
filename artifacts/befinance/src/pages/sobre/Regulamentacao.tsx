import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function RegulamentacaoPage() {
  return (
    <InternalPageLayout
      badge="Sobre"
      title={<><span style={{ color: "#00bfff" }}>Regulamentação</span> e Segurança</>}
      subtitle="Operamos em conformidade com as principais regulamentações do mercado financeiro. Sua segurança é nossa prioridade."
      features={[
        { title: "CVM", description: "Registrada e em conformidade com a Comissão de Valores Mobiliários do Brasil.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "BACEN", description: "Regulamentações do Banco Central do Brasil seguidas rigorosamente.", icon: icon("M2 20H22M5 20V8L12 4L19 8V20M9 20V14H15V20") },
        { title: "SSL/TLS 256-bit", description: "Criptografia de nível bancário em todas as comunicações e transações.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2ZM8 11L10 13L14 9") },
        { title: "AML/KYC", description: "Políticas robustas de prevenção à lavagem de dinheiro e verificação de identidade.", icon: icon("M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z") },
        { title: "Fundos segregados", description: "Os fundos dos clientes são mantidos em contas segregadas e auditadas.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Auditoria independente", description: "Auditoria regular por empresas independentes reconhecidas globalmente.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
      ]}
    />
  );
}
