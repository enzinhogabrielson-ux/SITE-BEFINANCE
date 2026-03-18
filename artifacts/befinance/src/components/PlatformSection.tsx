import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="24" height="24" rx="6" stroke="#00bfff" strokeWidth="1.5"/>
        <path d="M7 18L11 13L15 16L21 9" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="9" r="2" fill="#00bfff"/>
      </svg>
    ),
    title: "Gráficos Avançados",
    description: "Analise o mercado com ferramentas profissionais de gráficos, indicadores técnicos e análises em tempo real para tomar as melhores decisões.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#00bfff" strokeWidth="1.5"/>
        <path d="M14 8V14L18 17" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="#00bfff"/>
      </svg>
    ),
    title: "Execução Instantânea",
    description: "Ordens executadas em milissegundos com a melhor tecnologia de trading disponível no mercado, garantindo que você nunca perca uma oportunidade.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 8.5V19.5L14 25L3 19.5V8.5L14 3Z" stroke="#00bfff" strokeWidth="1.5"/>
        <path d="M14 3V25M3 8.5L25 19.5M25 8.5L3 19.5" stroke="#00bfff" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    title: "Multi-Ativos",
    description: "Acesse mais de 1000 ativos incluindo ações, criptomoedas, ETFs, commodities e pares de moedas em uma única plataforma integrada.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#00bfff" strokeWidth="1.5"/>
        <path d="M9 6V4M19 6V4" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 11H24" stroke="#00bfff" strokeWidth="1" opacity="0.5"/>
        <rect x="8" y="14" width="4" height="4" rx="1" fill="#00bfff" opacity="0.6"/>
        <rect x="16" y="14" width="4" height="4" rx="1" fill="#00bfff" opacity="0.3"/>
      </svg>
    ),
    title: "Conta Demo Gratuita",
    description: "Pratique com R$10.000 em conta de treinamento sem risco. Aprenda, teste estratégias e ganhe confiança antes de investir dinheiro real.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L17 10H23L18.5 14L20.5 20L14 16.5L7.5 20L9.5 14L5 10H11L14 4Z" stroke="#00bfff" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Suporte 24/7",
    description: "Equipe de especialistas disponível 24 horas por dia, 7 dias por semana para te auxiliar em qualquer questão técnica ou operacional.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14C3 20 8 25 14 25C20 25 25 20 25 14" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 3L25 3L25 7" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 3L19 9" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Segurança Máxima",
    description: "Seus fundos protegidos com criptografia de ponta, autenticação de dois fatores e segregação de contas para máxima segurança.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PlatformSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="plataforma"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020814 0%, #040d18 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,191,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00bfff" }} />
            <span style={{ color: "#00bfff", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
              PLATAFORMA
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Tudo que você precisa para{" "}
            <span style={{ background: "linear-gradient(135deg, #00bfff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              investir melhor
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(240,248,255,0.6)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nossa plataforma foi desenvolvida por especialistas em mercado financeiro para oferecer a melhor experiência de trading do Brasil.
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="card-glow group p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                background: "rgba(4, 20, 40, 0.5)",
                border: "1px solid rgba(0, 191, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ y: -4 }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(0, 191, 255, 0.08)", border: "1px solid rgba(0,191,255,0.15)" }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#fff",
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(240,248,255,0.55)",
                  lineHeight: 1.65,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
