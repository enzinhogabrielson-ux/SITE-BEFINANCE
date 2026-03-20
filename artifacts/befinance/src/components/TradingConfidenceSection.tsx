import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    title: "Suporte ininterrupto em seu idioma",
    description: "Atendimento 24/7 em português com especialistas do mercado financeiro prontos para te ajudar.",
    span: "lg:col-span-2",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="16" r="8" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M8 34C8 28 13.4 24 20 24C26.6 24 32 28 32 34" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="12" r="5" fill="rgba(0,191,255,0.15)" stroke="#00bfff" strokeWidth="1" />
        <path d="M30 12H34M32 10V14" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sinais de negociação para identificar tendências lucrativas",
    description: "Receba alertas em tempo real sobre as melhores oportunidades do mercado.",
    span: "",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 30L14 20L22 26L34 10" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="10" r="3" fill="#00bfff" opacity="0.5" />
        <path d="M28 10H34V16" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Estratégias de negociação prontas para uso",
    description: "Estratégias testadas por especialistas, prontas para aplicar nas suas operações.",
    span: "",
    cta: "Experimente de graça",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="4" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M6 16H34" stroke="#00bfff" strokeWidth="1" opacity="0.3" />
        <rect x="10" y="20" width="8" height="4" rx="1" fill="#00bfff" opacity="0.4" />
        <rect x="22" y="20" width="8" height="4" rx="1" fill="#00bfff" opacity="0.2" />
        <rect x="10" y="26" width="20" height="2" rx="1" fill="#00bfff" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Materiais de aprendizagem integrados e tutoriais",
    description: "Biblioteca completa com cursos, vídeos e guias para todos os níveis de experiência.",
    span: "",
    cta: "Começar a aprender",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M4 12L20 6L36 12L20 18L4 12Z" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M8 14V26L20 32L32 26V14" stroke="#00bfff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M36 12V24" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TradingConfidenceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#040d18" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            A caminho da{" "}
            <br className="hidden md:block" />
            <span style={{ color: "#00bfff" }}>negociação confiante</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={`kyvoo-card rounded-2xl p-7 flex flex-col gap-4 ${f.span}`}
              style={{
                background: i === 0
                  ? "linear-gradient(135deg, rgba(0,191,255,0.1), rgba(0,60,120,0.08))"
                  : "rgba(0,191,255,0.04)",
                border: `1px solid rgba(0,191,255,${i === 0 ? "0.2" : "0.08"})`,
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.1 * i, ease }}
            >
              <div>{f.icon}</div>
              <h3
                className="text-xl font-semibold"
                style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em", lineHeight: 1.3 }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}
              >
                {f.description}
              </p>
              {f.cta && (
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-auto"
                  style={{ color: "#00bfff", fontFamily: "'Inter',sans-serif" }}
                >
                  {f.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
