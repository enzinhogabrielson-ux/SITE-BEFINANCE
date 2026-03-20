import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function PremiacoesPage() {
  return (
    <InternalPageLayout
      badge="Sobre"
      title={<><span style={{ color: "#00bfff" }}>Premiações</span> e Reconhecimento</>}
      subtitle="Reconhecida como uma das melhores plataformas de trading do Brasil. Nossos prêmios refletem nosso compromisso com a excelência."
      features={[
        { title: "Melhor Plataforma 2025", description: "Eleita a melhor plataforma de trading digital pela Finance Awards Brazil.", icon: icon("M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z") },
        { title: "Inovação Fintech 2024", description: "Reconhecida por inovação em tecnologia financeira pelo FinTech Report.", icon: icon("M13 2L3 14H12L11 22L21 10H12L13 2Z") },
        { title: "Melhor Atendimento", description: "Prêmio de melhor suporte ao cliente no setor de trading online.", icon: icon("M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z") },
        { title: "Top 10 Global Brokers", description: "Listada entre as 10 melhores corretoras do mundo pela Global Finance.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22") },
        { title: "Transparência Financeira", description: "Selo de transparência emitido pelo Instituto de Finanças Digitais.", icon: icon("M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z") },
        { title: "Experiência do Usuário", description: "Prêmio UX Design Awards pela interface intuitiva da plataforma.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
      ]}
    />
  );
}
