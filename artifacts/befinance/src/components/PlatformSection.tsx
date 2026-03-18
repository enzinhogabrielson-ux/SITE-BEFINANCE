import { motion } from "framer-motion";

export default function PlatformSection() {
  return (
    <section
      id="plataforma"
      className="relative overflow-hidden section-glow-border"
      style={{
        background: "linear-gradient(180deg, #020814 0%, #06081a 50%, #040d18 100%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="flex -space-x-2.5">
              {["#00bfff", "#8b5cf6", "#f59e0b", "#10b981"].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold" style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, borderColor: "#06081a", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
                  {["M", "A", "R", "L"][i]}
                </div>
              ))}
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(240,248,255,0.65)" }}>
              Junte-se a <strong style={{ color: "#fff" }}>+ 10.000</strong> Investidores na plataforma
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "1.5rem", lineHeight: 1.15 }}
          >
            Negocie em gráficos ao <span className="shimmer-text">vivo</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(240,248,255,0.85)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}>
              Abra sua conta gratuita
            </a>
          </motion.div>
        </div>

        {/* ===== MACBOOK PRO — kyvoo style ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="macbook-wrapper"
        >
          <div className="macbook-container">
            {/* Screen / Lid */}
            <div className="macbook-screen">
              {/* Bezel */}
              <div className="macbook-bezel">
                {/* Camera */}
                <div className="macbook-camera" />
                {/* Display */}
                <div className="macbook-display">
                  <img
                    src="/laptop-screen.png"
                    alt="BeFinance Trading Platform"
                    className="macbook-display-img"
                  />
                </div>
              </div>
            </div>

            {/* Bottom chin / hinge */}
            <div className="macbook-chin" />

            {/* Base / keyboard area */}
            <div className="macbook-base">
              <div className="macbook-base-top-edge" />
            </div>

            {/* Shadow underneath */}
            <div className="macbook-shadow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
