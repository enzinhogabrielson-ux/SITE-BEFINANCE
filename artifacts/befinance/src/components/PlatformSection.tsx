import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Lid animation: starts closed (-90deg), opens to 0deg as you scroll
  const lidRotation = useTransform(scrollYProgress, [0.1, 0.5], [-90, 0]);
  const screenOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section
      id="plataforma"
      ref={sectionRef}
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

        {/* ===== MACBOOK PRO — scroll-driven opening/closing ===== */}
        <div className="macbook-wrapper">
          <div className="macbook-container">
            {/* Screen / Lid — rotates on scroll */}
            <motion.div
              style={{
                rotateX: lidRotation,
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="macbook-screen">
                <div className="macbook-bezel">
                  <div className="macbook-camera" />
                  <div className="macbook-display">
                    <motion.img
                      src="/laptop-screen.png"
                      alt="BeFinance Trading Platform"
                      className="macbook-display-img"
                      style={{ opacity: screenOpacity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chin / hinge bar */}
            <div className="macbook-chin" />

            {/* Keyboard base */}
            <div className="macbook-base">
              <div className="macbook-base-top-edge" />
            </div>

            {/* Shadow reflection */}
            <div className="macbook-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
