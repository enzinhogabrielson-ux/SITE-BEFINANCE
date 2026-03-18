import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const differentials = [
  {
    id: 1,
    number: "01",
    title: "Regulamentada e Confiável",
    description: "A BeFinance é completamente regulamentada pelos órgãos competentes. Seus investimentos estão protegidos com os mais altos padrões de segurança do mercado financeiro global.",
    highlight: "CVM e Banco Central",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L34 10V20C34 28.84 27.68 37.12 20 39C12.32 37.12 6 28.84 6 20V10L20 4Z" stroke="url(#shieldGrad)" strokeWidth="1.5" fill="rgba(0,191,255,0.05)"/>
        <path d="M14 20L18 24L26 16" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="shieldGrad" x1="6" y1="4" x2="34" y2="39">
            <stop stopColor="#00bfff"/>
            <stop offset="1" stopColor="#0066ff"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "Spreads Mais Baixos do Mercado",
    description: "Opere com os menores spreads do mercado brasileiro. Maximize seus lucros com taxas transparentes, sem custos ocultos, e veja a diferença no seu rendimento final.",
    highlight: "0% de comissão",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="url(#chartGrad)" strokeWidth="1.5" fill="rgba(0,191,255,0.05)"/>
        <path d="M10 26L16 18L22 22L30 12" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="12" r="2.5" fill="#00bfff"/>
        <defs>
          <linearGradient id="chartGrad" x1="5" y1="5" x2="35" y2="35">
            <stop stopColor="#00bfff"/>
            <stop offset="1" stopColor="#0066ff"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "Plataforma Intuitiva",
    description: "Interface projetada para iniciantes e profissionais. Com nossa plataforma, você aprende enquanto investe, com tutoriais integrados e análises inteligentes em tempo real.",
    highlight: "Mais de 50 indicadores",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="8" width="30" height="24" rx="4" stroke="url(#monitorGrad)" strokeWidth="1.5" fill="rgba(0,191,255,0.05)"/>
        <path d="M5 16H35" stroke="#00bfff" strokeWidth="1" opacity="0.4"/>
        <rect x="10" y="20" width="6" height="6" rx="1.5" fill="#00bfff" opacity="0.7"/>
        <rect x="19" y="20" width="10" height="2.5" rx="1" fill="#00bfff" opacity="0.4"/>
        <rect x="19" y="24" width="7" height="2" rx="1" fill="#00bfff" opacity="0.25"/>
        <defs>
          <linearGradient id="monitorGrad" x1="5" y1="8" x2="35" y2="32">
            <stop stopColor="#00bfff"/>
            <stop offset="1" stopColor="#0066ff"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "Suporte Educacional Completo",
    description: "Biblioteca completa com cursos, webinars ao vivo, análises de mercado diárias e uma comunidade ativa de traders para te ajudar a crescer no mercado financeiro.",
    highlight: "+200 horas de conteúdo",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 14L20 7L34 14V22C34 29 27.5 35 20 37C12.5 35 6 29 6 22V14Z" stroke="url(#eduGrad)" strokeWidth="1.5" fill="rgba(0,191,255,0.05)"/>
        <path d="M14 20H26M14 24H22" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="eduGrad" x1="6" y1="7" x2="34" y2="37">
            <stop stopColor="#00bfff"/>
            <stop offset="1" stopColor="#0066ff"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function DifferentialsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
      id="diferenciais"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}
    >
      {/* Decorative blur orbs */}
      <div
        className="absolute -left-40 top-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute -right-40 bottom-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
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
              DIFERENCIAIS
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
            Por que escolher a{" "}
            <span style={{ background: "linear-gradient(135deg, #00bfff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              BeFinance?
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
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Desenvolvemos cada detalhe pensando na sua experiência de investimento, do iniciante ao profissional.
          </motion.p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-7 rounded-2xl cursor-default transition-all duration-300"
              style={{
                background: activeId === item.id
                  ? "rgba(0, 191, 255, 0.06)"
                  : "rgba(4, 20, 40, 0.5)",
                border: activeId === item.id
                  ? "1px solid rgba(0, 191, 255, 0.3)"
                  : "1px solid rgba(0, 191, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
              onHoverStart={() => setActiveId(item.id)}
              onHoverEnd={() => setActiveId(null)}
              whileHover={{ y: -3 }}
            >
              {/* Number badge */}
              <div
                className="absolute top-6 right-6 text-4xl font-black leading-none select-none"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "rgba(0,191,255,0.06)",
                }}
              >
                {item.number}
              </div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(0, 191, 255, 0.06)", border: "1px solid rgba(0,191,255,0.15)" }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(240,248,255,0.55)",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{ background: "rgba(0,191,255,0.1)", border: "1px solid rgba(0,191,255,0.2)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" fill="#00bfff"/>
                    </svg>
                    <span style={{ color: "#00bfff", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
