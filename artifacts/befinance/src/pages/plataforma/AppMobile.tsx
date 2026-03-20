import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function AppMobilePage() {
  return (
    <InternalPageLayout
      badge="Plataforma"
      title={<>App <span style={{ color: "#00bfff" }}>Mobile</span></>}
      subtitle="Negocie na palma da mão. Nosso app para iOS e Android traz toda a potência da plataforma para o seu celular."
      cta={{ label: "Baixar o app", href: "#" }}
      features={[
        { title: "iOS e Android", description: "Disponível na App Store e Google Play. Baixe gratuitamente.", icon: icon("M12 18H12.01M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2Z") },
        { title: "Notificações push", description: "Receba alertas de preço e sinais de negociação em tempo real no celular.", icon: icon("M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8ZM13.73 21A2 2 0 0 1 10.27 21") },
        { title: "Biometria e segurança", description: "Login com Face ID, Touch ID e autenticação em dois fatores.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "Gráficos mobile", description: "Gráficos otimizados para tela touch com todos os indicadores disponíveis.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Depósitos pelo app", description: "PIX, boleto e cartão de crédito diretamente pelo aplicativo.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Modo offline", description: "Consulte histórico de operações e análises mesmo sem conexão.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM8 12L16 12") },
      ]}
    />
  );
}
