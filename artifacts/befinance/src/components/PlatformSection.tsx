import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
    description: "Analise o mercado com ferramentas profissionais, indicadores técnicos e análises em tempo real para tomar as melhores decisões.",
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
    description: "Ordens executadas em milissegundos com a melhor tecnologia de trading disponível, garantindo que você nunca perca uma oportunidade.",
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
    description: "Pratique com R$10.000 em conta de treinamento sem risco. Aprenda e teste estratégias antes de investir dinheiro real.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L17 10H23L18.5 14L20.5 20L14 16.5L7.5 20L9.5 14L5 10H11L14 4Z" stroke="#00bfff" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Suporte 24/7",
    description: "Especialistas disponíveis 24 horas por dia, 7 dias por semana para te auxiliar em qualquer questão técnica ou operacional.",
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

export default function PlatformSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="plataforma"
      ref={ref}
      className="relative py-28 overflow-hidden section-glow-border"
      style={{ background: "linear-gradient(180deg, #020814 0%, #040d18 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.04) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,191,255,0.07)", border: "1px solid rgba(0,191,255,0.18)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00bfff" }} />
            <span style={{ color: "#00bfff", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Plataforma
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              marginBottom: "1rem",
            }}
          >
            Tudo que você precisa para{" "}
            <span className="shimmer-text">investir melhor</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(240,248,255,0.58)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nossa plataforma foi desenvolvida por especialistas em mercado financeiro para oferecer a melhor experiência de trading do Brasil.
          </motion.p>
        </div>

        {/* Features grid — blur-fade stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, filter: "blur(12px)", y: 32 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.05 * i + 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="kyvoo-card group p-6 rounded-2xl cursor-default"
              style={{
                background: "rgba(4, 20, 40, 0.45)",
                border: "1px solid rgba(0, 191, 255, 0.09)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/30"
                style={{
                  background: "rgba(0, 191, 255, 0.07)",
                  border: "1px solid rgba(0,191,255,0.13)",
                  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#fff",
                  marginBottom: "0.65rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(240,248,255,0.52)",
                  lineHeight: 1.68,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
