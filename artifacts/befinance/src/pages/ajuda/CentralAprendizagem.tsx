import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function CentralAprendizagemPage() {
  return (
    <InternalPageLayout
      badge="Ajuda"
      title={<>Central de <span style={{ color: "#00bfff" }}>Aprendizagem</span></>}
      subtitle="Aprenda a negociar com confiança. Cursos, webinars e materiais educativos gratuitos para todos os níveis."
      cta={{ label: "Comece a aprender", href: "#" }}
      features={[
        { title: "Cursos para iniciantes", description: "Aprenda os fundamentos do trading, análise técnica e gestão de risco.", icon: icon("M2 7L12 3L22 7L12 11L2 7ZM5 8.5V15L12 18.5L19 15V8.5") },
        { title: "Webinars ao vivo", description: "Sessões ao vivo com analistas profissionais. Pergunte e aprenda em tempo real.", icon: icon("M15 10L19.5 7.5V16.5L15 14M5 18H13A2 2 0 0 0 15 16V8A2 2 0 0 0 13 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18Z") },
        { title: "Estratégias avançadas", description: "Técnicas avançadas de trading para traders experientes que buscam mais.", icon: icon("M3 3V21H21M7 14L11 10L15 14L21 8") },
        { title: "Glossário financeiro", description: "Todos os termos do mercado financeiro explicados de forma simples.", icon: icon("M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z") },
        { title: "Tutoriais em vídeo", description: "Vídeos passo a passo sobre todas as funcionalidades da plataforma.", icon: icon("M23 7L16 12L23 17V7ZM14 5H3A2 2 0 0 0 1 7V17A2 2 0 0 0 3 19H14A2 2 0 0 0 16 17V7A2 2 0 0 0 14 5Z") },
        { title: "Análises diárias", description: "Relatórios de mercado diários escritos por nossa equipe de analistas.", icon: icon("M22 12H18L15 21L9 3L6 12H2") },
      ]}
    />
  );
}
