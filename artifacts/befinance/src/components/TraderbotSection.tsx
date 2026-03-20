import { motion } from "framer-motion";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const botFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L11.8 7H17L12.6 10L14.2 15L10 12L5.8 15L7.4 10L3 7H8.2L10 2Z" stroke="#00bfff" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    title: "IA Preditiva",
    desc: "Algoritmos de machine learning analisam padrões do mercado em tempo real",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#00bfff" strokeWidth="1.3"/>
        <path d="M10 6V10L13 12" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "24/7 Automático",
    desc: "Opera enquanto você dorme, aproveitando oportunidades a qualquer hora",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="5.5" width="15" height="9" rx="2.5" stroke="#00bfff" strokeWidth="1.3"/>
        <path d="M5 9H15M7 12H13" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: "Stop Loss Inteligente",
    desc: "Proteção automática do seu capital com gestão de risco configurável",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 15L7 10L11 12.5L17 5" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="5" r="2" fill="#00bfff"/>
      </svg>
    ),
    title: "Backtesting",
    desc: "Teste estratégias em dados históricos antes de ativar no mercado real",
  },
];

export default function TraderbotSection() {
  return (
    <section className="relative py-28 overflow-hidden section-glow-border">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,40,80,0.3) 0%, rgba(4,13,24,1) 50%, rgba(0,20,60,0.3) 100%)" }}/>
      {/* Glow orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 65%)", filter: "blur(60px)" }}/>
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,80,200,0.07) 0%, transparent 70%)", filter: "blur(50px)" }}/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo }}
              className="inline-flex mb-5"
            >
              <div className="hero-badge">
                <span className="badge-tag">Em breve</span>
                <span className="badge-text">Automatize suas operações</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: 0.08 }}
              style={{
                fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                fontWeight: 700, fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "1.2rem",
              }}
            >
              Ative o{" "}
              <span className="shimmer-text">Trader Bot</span>
              {" "}e aumente seus lucros
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: 0.15 }}
              style={{
                fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "1rem",
                color: "rgba(240,248,255,0.6)", lineHeight: 1.65, letterSpacing: "-0.01em", marginBottom: "2rem",
              }}
            >
              Nossa inteligência artificial analisa gráficos, identifica padrões e executa operações automaticamente — sem você precisar ficar colado na tela.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: 0.22 }}
              className="flex flex-col gap-3 mb-8"
            >
              {botFeatures.slice(0, 2).map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.14)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.15rem" }}>
                      {f.title}
                    </p>
                    <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.82rem", color: "rgba(240,248,255,0.5)", letterSpacing: "-0.01em" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: 0.28 }}
            >
              <a href="#" className="btn-glow">
                <span className="btn-glow-face" style={{ padding: "0 28px" }}>
                  Ser avisado no lançamento
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right — bot visual */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(18px)", x: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.1 }}
            className="relative"
          >
            {/* Bot card */}
            <div className="relative p-6 rounded-3xl"
              style={{
                background: "rgba(4,20,40,0.5)",
                border: "1px solid rgba(0,191,255,0.12)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Top status bar */}
              <div className="flex items-center justify-between mb-5 pb-4"
                style={{ borderBottom: "1px solid rgba(0,191,255,0.08)" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,191,255,0.12)", border: "1px solid rgba(0,191,255,0.2)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="6" r="3" stroke="#00bfff" strokeWidth="1.2"/>
                      <rect x="5" y="10" width="6" height="4" rx="1.5" stroke="#00bfff" strokeWidth="1.2"/>
                      <circle cx="3" cy="6" r="1.5" stroke="#00bfff" strokeWidth="1"/>
                      <circle cx="13" cy="6" r="1.5" stroke="#00bfff" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff", letterSpacing: "-0.02em" }}>BeFinance Bot</p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "rgba(240,248,255,0.4)" }}>v2.4 • IA Neural</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{ background: "rgba(0,212,130,0.1)", border: "1px solid rgba(0,212,130,0.2)" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00d084" }} className="animate-pulse"/>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", color: "#00d084", fontWeight: 600 }}>Ativo</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Lucro hoje", value: "+$842", positive: true },
                  { label: "Operações", value: "47", positive: null },
                  { label: "Taxa acerto", value: "78.4%", positive: true },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl text-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.03em", color: stat.positive === true ? "#00d084" : "#fff" }}>
                      {stat.value}
                    </p>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: "rgba(240,248,255,0.35)", letterSpacing: "-0.01em" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bot activity feed */}
              <div className="flex flex-col gap-2">
                {[
                  { type: "buy", pair: "AAPL/USD", price: "$198.50", profit: "+$142", time: "14:23" },
                  { type: "sell", pair: "XAU/USD", price: "$2.340", profit: "+$89", time: "14:18" },
                  { type: "buy", pair: "TSLA/USD", price: "$312.80", profit: "+$35", time: "14:12" },
                  { type: "sell", pair: "WTI/USD", price: "$78,45", profit: "-$22", time: "14:05" },
                ].map((op, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...expo, delay: 0.3 + i * 0.06 }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="px-2 py-0.5 rounded text-center"
                        style={{
                          background: op.type === "buy" ? "rgba(0,212,130,0.12)" : "rgba(255,77,106,0.12)",
                          border: `1px solid ${op.type === "buy" ? "rgba(0,212,130,0.2)" : "rgba(255,77,106,0.2)"}`,
                        }}>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.6rem", color: op.type === "buy" ? "#00d084" : "#ff4d6a", letterSpacing: "0.04em" }}>
                          {op.type === "buy" ? "COMPRA" : "VENDA"}
                        </span>
                      </div>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "rgba(240,248,255,0.8)" }}>
                        {op.pair}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "rgba(240,248,255,0.4)" }}>
                        {op.price}
                      </span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.78rem", color: op.profit.startsWith("+") ? "#00d084" : "#ff4d6a" }}>
                        {op.profit}
                      </span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", color: "rgba(240,248,255,0.25)" }}>
                        {op.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom features */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {botFeatures.slice(2).map((f) => (
                  <div key={f.title} className="flex items-center gap-2 p-2">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.12)" }}>
                      {f.icon}
                    </div>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: "rgba(240,248,255,0.55)", letterSpacing: "-0.01em" }}>
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow effect behind card */}
            <div className="absolute -inset-8 -z-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,191,255,0.08) 0%, transparent 65%)", filter: "blur(20px)" }}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
