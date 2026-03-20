import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function CentralAjudaPage() {
  return (
    <InternalPageLayout
      badge="Ajuda"
      title={<>Central de <span style={{ color: "#00bfff" }}>Ajuda</span></>}
      subtitle="Encontre respostas rápidas para suas dúvidas. Nossa base de conhecimento cobre todos os aspectos da plataforma."
      features={[
        { title: "Primeiros passos", description: "Guias completos para criar sua conta, fazer o primeiro depósito e iniciar operações.", icon: icon("M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z") },
        { title: "Depósitos e saques", description: "Tudo sobre métodos de pagamento, tempos de processamento e limites.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Plataforma de trading", description: "Como usar indicadores, gráficos, configurar alertas e personalizar sua experiência.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Verificação de conta", description: "Processo de verificação KYC, documentos aceitos e prazos.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
        { title: "Segurança da conta", description: "Dicas de segurança, autenticação em dois fatores e recuperação de conta.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "Problemas técnicos", description: "Soluções para problemas comuns de acesso, performance e compatibilidade.", icon: icon("M14.7 6.3A1 1 0 0 0 13.3 6.3L2 17.6V22H6.4L17.7 10.7A1 1 0 0 0 17.7 9.3L14.7 6.3Z") },
      ]}
    />
  );
}
