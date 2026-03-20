import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function AfiliadosPage() {
  return (
    <InternalPageLayout
      badge="Sobre"
      title={<>Programa de <span style={{ color: "#00bfff" }}>Afiliados</span></>}
      subtitle="Ganhe comissões atrativas indicando traders para a BeFinance. Programa transparente com pagamentos pontuais."
      cta={{ label: "Seja um afiliado", href: "#" }}
      features={[
        { title: "Comissões de até 60%", description: "Ganhe até 60% de comissão sobre a receita gerada pelos traders indicados.", icon: icon("M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6") },
        { title: "Pagamentos semanais", description: "Receba suas comissões toda semana, sem atrasos ou burocracias.", icon: icon("M8 2V6M16 2V6M3 10H21M5 4H19A2 2 0 0 1 21 6V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V6A2 2 0 0 1 5 4Z") },
        { title: "Dashboard exclusivo", description: "Painel completo para acompanhar indicações, conversões e comissões.", icon: icon("M4 4H20V16H4ZM8 20H16M12 16V20") },
        { title: "Materiais de marketing", description: "Banners, landing pages e materiais prontos para suas campanhas.", icon: icon("M4 4H20V16H4ZM4 8H20M8 4V16") },
        { title: "Suporte dedicado", description: "Equipe de afiliados dedicada para ajudar a maximizar seus resultados.", icon: icon("M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z") },
        { title: "Sem limite de ganhos", description: "Quanto mais traders você indicar, mais você ganha. Sem teto de comissão.", icon: icon("M4 20L10 12L14 16L20 8M20 8H15M20 8V13") },
      ]}
    />
  );
}
