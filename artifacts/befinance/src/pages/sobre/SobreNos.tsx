import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function SobreNosPage() {
  return (
    <InternalPageLayout
      badge="Sobre"
      title={<>Sobre a <span style={{ color: "#00bfff" }}>BeFinance</span></>}
      subtitle="Somos uma corretora digital focada em democratizar o acesso ao mercado financeiro. Tecnologia, transparência e educação para todos os traders."
      features={[
        { title: "Nossa missão", description: "Tornar o mercado financeiro acessível para qualquer pessoa, em qualquer lugar do Brasil.", icon: icon("M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12") },
        { title: "Fundada em 2020", description: "Anos de experiência no mercado financeiro digital, atendendo traders no Brasil e no mundo.", icon: icon("M8 2V6M16 2V6M3 10H21M5 4H19A2 2 0 0 1 21 6V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V6A2 2 0 0 1 5 4Z") },
        { title: "+500K traders ativos", description: "Mais de meio milhão de traders confiam na BeFinance para suas operações diárias.", icon: icon("M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M16 3.13A4 4 0 0 1 16 10.87M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z") },
        { title: "Presença global", description: "Atuação em mais de 40 países, com foco especial no mercado latino-americano.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22M12 2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 22M12 2C9.5 4.7 8 8.2 8 12C8 15.8 9.5 19.3 12 22") },
        { title: "Tecnologia de ponta", description: "Infraestrutura em nuvem com latência ultra-baixa e 99.9% de uptime.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
        { title: "Equipe especializada", description: "Profissionais com experiência em fintechs globais e mercados financeiros.", icon: icon("M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z") },
      ]}
    />
  );
}
