import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,60,120,0.4) 0%, rgba(4,13,24,0.95) 50%, rgba(0,40,80,0.4) 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.4), transparent)" }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)", y: 32 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="kyvoo-card p-10 md:p-16 rounded-3xl"
          style={{
            background: "rgba(4, 20, 40, 0.5)",
            border: "1px solid rgba(0, 191, 255, 0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.2)" }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#00bfff" }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#00bfff" }} />
            </span>
            <span style={{ color: "#00bfff", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Comece agora — É grátis
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#fff",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              marginBottom: "1.2rem",
            }}
          >
            Pronto para começar a{" "}
            <span className="shimmer-text">investir de verdade?</span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(240,248,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Abra sua conta gratuita hoje e receba{" "}
            <strong style={{ color: "#00bfff" }}>R$10.000</strong>{" "}
            na sua conta de treinamento. Sem riscos, sem compromissos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 191, 255, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all btn-border-light"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#ffffff",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Abra sua conta gratuita
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9H14.5M10.5 5L14.5 9L10.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="#plataforma"
              whileHover={{ scale: 1.03, borderColor: "rgba(0,191,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240,248,255,0.85)",
                textDecoration: "none",
                border: "1px solid rgba(0,191,255,0.25)",
                background: "rgba(0,191,255,0.05)",
              }}
            >
              Conhecer a plataforma
            </motion.a>
          </div>

          {/* Trust badges — single-color SVG icons */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-0">
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="3" y="6" width="8" height="7" rx="1.5" stroke="#00bfff" strokeWidth="1.3"/>
                    <path d="M5 6V4.5C5 3.4 5.9 2.5 7 2.5C8.1 2.5 9 3.4 9 4.5V6" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="7" cy="9.5" r="1" fill="#00bfff"/>
                  </svg>
                ),
                text: "SSL 256-bit",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L8.5 5H12.5L9.5 7.5L10.5 11.5L7 9L3.5 11.5L4.5 7.5L1.5 5H5.5L7 1Z" stroke="#00bfff" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Regulamentada CVM",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M8 1.5L4 7.5H7L6 12.5L10 6.5H7L8 1.5Z" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                text: "Execução < 1ms",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#00bfff" strokeWidth="1.3"/>
                    <path d="M1.5 7H12.5" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M7 1.5C7 1.5 5 4 5 7C5 10 7 12.5 7 12.5M7 1.5C7 1.5 9 4 9 7C9 10 7 12.5 7 12.5" stroke="#00bfff" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                text: "+40 países",
              },
            ].map((badge, i) => (
              <div key={badge.text} className="flex items-center">
                <div
                  className="flex items-center gap-1.5"
                  style={{
                    color: "rgba(240,248,255,0.48)",
                    fontSize: "0.77rem",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.01em",
                  }}
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
                {i < 3 && (
                  <div className="mx-4 h-3" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
