import InternalPageLayout from "@/components/InternalPageLayout";

const icon = (d: string) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={d} stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function ContatoPage() {
  return (
    <InternalPageLayout
      badge="Ajuda"
      title={<>Fale <span style={{ color: "#00bfff" }}>Conosco</span></>}
      subtitle="Estamos aqui para ajudar. Entre em contato conosco por qualquer um dos nossos canais de atendimento."
      features={[
        { title: "Chat ao vivo", description: "Suporte instantâneo 24/7 pelo chat da plataforma. Respostas em segundos.", icon: icon("M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z") },
        { title: "E-mail", description: "Envie sua dúvida para suporte@befinance.com e receba resposta em até 24h.", icon: icon("M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM22 6L12 13L2 6") },
        { title: "Telefone", description: "Ligue para nossa central de atendimento em horário comercial.", icon: icon("M22 16.92V19.92A2 2 0 0 1 20.07 21.91A19.79 19.79 0 0 1 3.09 3.93A2 2 0 0 1 5.08 2H8.08A2 2 0 0 1 10.07 3.72C10.25 4.68 10.54 5.61 10.93 6.49A2 2 0 0 1 10.48 8.54L9.13 9.89A16 16 0 0 0 14.11 14.87L15.46 13.52A2 2 0 0 1 17.51 13.07C18.39 13.46 19.32 13.75 20.28 13.93A2 2 0 0 1 22 16.92Z") },
        { title: "WhatsApp", description: "Fale conosco pelo WhatsApp para atendimento rápido e prático.", icon: icon("M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z") },
        { title: "Redes sociais", description: "Siga-nos no Instagram, Twitter e LinkedIn para novidades e suporte.", icon: icon("M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM2 12H22M12 2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 22") },
        { title: "Base de conhecimento", description: "Centenas de artigos e tutoriais para resolver suas dúvidas rapidamente.", icon: icon("M2 7L12 3L22 7L12 11L2 7ZM5 8.5V15L12 18.5L19 15V8.5") },
      ]}
    />
  );
}
