import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    title: "Conta demo projetada para praticar",
    description: "Pratique suas estratégias sem riscos com R$10.000 virtuais. Aprenda no seu ritmo antes de investir de verdade.",
    cta: "Experimentar agora",
    highlight: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="6" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M18 28L22 22L26 26L32 18" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="18" r="3" fill="#00bfff" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Negociações sem riscos permitem que você negocie com confiança",
    description: "Teste suas estratégias em ambiente seguro. Sem riscos financeiros, com dados do mercado real.",
    cta: "Saiba mais",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L40 12V24C40 34.4 33 42.5 24 45C15 42.5 8 34.4 8 24V12L24 4Z" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M17 24L22 29L31 19" stroke="#00bfff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Stop Loss / Take Profit fecham as negociações nas suas condições",
    description: "Defina limites automáticos de ganho e perda. Proteja seus investimentos mesmo quando estiver offline.",
    cta: "Saiba mais",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M16 24H32M24 16V32" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 18L30 30M30 18L18 30" stroke="#00bfff" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Proteção contra saldo negativo",
    description: "Você nunca perde mais do que o valor investido na operação. Sua conta está sempre protegida.",
    cta: "Saiba mais",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="14" width="32" height="20" rx="4" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <circle cx="24" cy="24" r="6" stroke="#00bfff" strokeWidth="1.5" />
        <path d="M22 24H26M24 22V26" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Você escolhe o valor e a duração de sua negociação",
    description: "Abra negociações a partir de R$5, com durações a partir de 5 segundos. Total flexibilidade.",
    cta: "",
    highlight: false,
    stats: [
      { value: "R$5", label: "Operação mínima" },
      { value: "5s", label: "Duração mínima" },
    ],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M24 14V24L30 30" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Depósitos assegurados",
    description: "Seus fundos são mantidos em contas segregadas e seguradas. Máxima proteção para seu capital.",
    cta: "Saiba mais",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="18" width="28" height="18" rx="3" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M10 24H38" stroke="#00bfff" strokeWidth="1" opacity="0.3" />
        <circle cx="24" cy="12" r="6" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M22 12H26" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function InstrumentsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="negociacao" ref={ref} className="relative py-24 overflow-hidden">
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
            Explore a negociação{" "}
            <br className="hidden md:block" />
            com instrumentos{" "}
            <span style={{ color: "#00bfff" }}>sem riscos</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
            Descubra a combinação perfeita entre atenção, confiabilidade e usabilidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`kyvoo-card rounded-2xl p-6 flex flex-col gap-4 ${card.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{
                background: card.highlight
                  ? "linear-gradient(135deg, rgba(0,191,255,0.12), rgba(0,102,255,0.08))"
                  : "rgba(0,191,255,0.04)",
                border: card.highlight
                  ? "1px solid rgba(0,191,255,0.25)"
                  : "1px solid rgba(0,191,255,0.08)",
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.08 * i, ease }}
            >
              <div className="mb-1">{card.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em", lineHeight: 1.3 }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm flex-1"
                style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}
              >
                {card.description}
              </p>
              {card.stats && (
                <div className="flex gap-6 mt-2">
                  {card.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>{s.value}</div>
                      <div className="text-xs" style={{ color: "rgba(240,248,255,0.45)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
              {card.cta && (
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-auto"
                  style={{ color: "#00bfff", fontFamily: "'Inter',sans-serif" }}
                >
                  {card.cta}
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
