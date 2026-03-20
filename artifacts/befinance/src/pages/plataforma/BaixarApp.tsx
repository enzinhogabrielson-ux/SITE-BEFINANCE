import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function BaixarAppPage() {
  return (
    <InternalPageLayout
      badge="Plataforma"
      title={<>Baixar o <span style={{ color: "#00bfff" }}>App</span></>}
      subtitle="Baixe o app BeFinance para iOS ou Android e tenha o mercado financeiro no seu bolso."
      cta={{ label: "Baixar agora", href: "#" }}
      features={[
        { title: "Download gratuito", description: "Disponível gratuitamente na App Store e Google Play.", icon: icon("M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3") },
        { title: "Leve e rápido", description: "App otimizado para performance. Ocupa pouco espaço no seu dispositivo.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Sincronização automática", description: "Suas configurações e operações sincronizam entre web e mobile.", icon: icon("M23 4V10H17M1 20V14H7M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.99 14A9 9 0 0 1 18.36 18.36L14 23") },
        { title: "Atualizações constantes", description: "Novas funcionalidades e melhorias a cada atualização.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM12 6V12L16 14") },
        { title: "Suporte Android 8+", description: "Compatível com Android 8.0 e superior para máxima cobertura.", icon: icon("M12 18H12.01M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2Z") },
        { title: "Suporte iOS 14+", description: "Compatível com iPhone e iPad rodando iOS 14 ou superior.", icon: icon("M12 18H12.01M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2Z") },
      ]}
    />
  );
}
