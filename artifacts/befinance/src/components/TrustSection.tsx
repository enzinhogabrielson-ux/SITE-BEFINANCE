import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const badges = [
  { icon: "🔥", label: "Plataforma moderna" },
  { icon: "💎", label: "Recursos exclusivos" },
  { icon: "🚀", label: "Começo fácil" },
  { icon: "📚", label: "Central de aprendizagem" },
  { icon: "⚡", label: "Saques rápidos" },
  { icon: "🛡️", label: "Corretora confiável" },
];

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #040d18 0%, #061220 50%, #040d18 100%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.15)" }}
          >
            <span style={{ color: "#00bfff", fontSize: "14px", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>
              Sobre a BeFinance
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Capacitando traders,{" "}
            <br className="hidden md:block" />
            e é apenas o{" "}
            <span style={{ color: "#00bfff" }}>começo.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,248,255,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}
          >
            Conheça a BeFinance, transformada e melhor. Receba a atenção que importa
            para suas operações de trading.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center"
              style={{
                background: "rgba(0,191,255,0.04)",
                border: "1px solid rgba(0,191,255,0.08)",
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.1 * i, ease }}
              whileHover={{ y: -4, borderColor: "rgba(0,191,255,0.25)" }}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(240,248,255,0.8)", fontFamily: "'Inter',sans-serif" }}
              >
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {[
            { value: "500K+", label: "Traders ativos" },
            { value: "R$10bi+", label: "Volume negociado" },
            { value: "98%", label: "Satisfação" },
            { value: "40+", label: "Países" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(240,248,255,0.5)", fontFamily: "'Inter',sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
