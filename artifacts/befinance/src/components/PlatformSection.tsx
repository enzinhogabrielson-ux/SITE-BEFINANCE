import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lidAngle = useTransform(scrollYProgress, [0.05, 0.4], [-80, 0]);
  const screenGlow = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

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

        {/* ===== MACBOOK PRO MOCKUP ===== */}
        <div className="relative max-w-[820px] mx-auto" style={{ perspective: "2000px" }}>

          {/* LID (screen) — rotates open on scroll */}
          <motion.div
            style={{
              rotateX: lidAngle,
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            <div style={{
              background: "linear-gradient(180deg, #2e2e30 0%, #1d1d1f 100%)",
              borderRadius: "14px 14px 0 0",
              padding: "14px 14px 6px",
              position: "relative",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 -4px 30px rgba(0,191,255,0.04)",
            }}>
              <div className="flex items-center justify-center mb-1" style={{ height: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0d0d0d", border: "1px solid #3a3a3c" }} />
              </div>
              <div style={{
                background: "#000",
                borderRadius: "6px",
                overflow: "hidden",
                aspectRatio: "16 / 10",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
              }}>
                <motion.div className="w-full h-full" style={{ opacity: screenGlow }}>
                  <img src="/laptop-screen.png" alt="Trading platform" className="w-full h-full object-cover object-center" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* HINGE BAR */}
          <div style={{
            height: "14px",
            background: "linear-gradient(180deg, #48484a 0%, #3a3a3c 20%, #636366 50%, #3a3a3c 80%, #2c2c2e 100%)",
            position: "relative",
            zIndex: 5,
            boxShadow: "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "60px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,0.04)" }} />
          </div>

          {/* KEYBOARD BODY — perspective tilt */}
          <div style={{
            background: "linear-gradient(180deg, #2c2c2e 0%, #1c1c1e 100%)",
            borderRadius: "0 0 14px 14px",
            padding: "14px 28px 12px",
            position: "relative",
            zIndex: 4,
            transform: "perspective(1200px) rotateX(5deg)",
            transformOrigin: "top center",
            boxShadow: "0 12px 50px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
          }}>
            {/* Speaker grilles */}
            <div className="flex justify-between mb-3 px-4">
              <div className="flex gap-[2px]">
                {[...Array(20)].map((_, i) => (
                  <div key={i} style={{ width: "1.5px", height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "1px" }} />
                ))}
              </div>
              <div className="flex gap-[2px]">
                {[...Array(20)].map((_, i) => (
                  <div key={i} style={{ width: "1.5px", height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "1px" }} />
                ))}
              </div>
            </div>

            {/* Keyboard */}
            <div className="flex flex-col gap-[4px] mb-4">
              <div className="flex gap-[3px]">
                {[...Array(16)].map((_, k) => (
                  <div key={k} style={{ flex: k === 0 ? "1.4" : "1", height: "10px", borderRadius: "2px", background: "rgba(255,255,255,0.055)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(14)].map((_, k) => (
                  <div key={k} style={{ flex: k === 13 ? "1.6" : "1", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(14)].map((_, k) => (
                  <div key={k} style={{ flex: k === 0 ? "1.5" : k === 13 ? "1.5" : "1", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(13)].map((_, k) => (
                  <div key={k} style={{ flex: k === 0 ? "1.8" : k === 12 ? "2" : "1", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                ))}
              </div>
              <div className="flex gap-[3px]">
                {[...Array(12)].map((_, k) => (
                  <div key={k} style={{ flex: k === 0 ? "2.2" : k === 11 ? "2.2" : "1", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                ))}
              </div>
              <div className="flex gap-[3px] items-end">
                <div style={{ flex: "1.2", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div style={{ flex: "1.2", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div style={{ flex: "1.2", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div style={{ flex: "5", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div style={{ flex: "1.2", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div style={{ flex: "1.2", height: "14px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.04)" }} />
                <div className="flex flex-col gap-[2px]" style={{ flex: "1" }}>
                  <div style={{ height: "6px", borderRadius: "1.5px", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.03)" }} />
                  <div style={{ height: "6px", borderRadius: "1.5px", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.03)" }} />
                </div>
                <div className="flex gap-[2px] items-end" style={{ flex: "2" }}>
                  <div style={{ flex: "1", height: "6px", borderRadius: "1.5px", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.03)" }} />
                  <div style={{ flex: "1", height: "6px", borderRadius: "1.5px", background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.03)" }} />
                </div>
              </div>
            </div>

            {/* TRACKPAD */}
            <div className="mx-auto" style={{
              width: "42%",
              height: "56px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.2)",
            }} />
          </div>

          {/* Bottom edge */}
          <div className="mx-auto" style={{
            width: "80%",
            height: "4px",
            background: "linear-gradient(90deg, transparent 5%, rgba(80,80,85,0.3) 20%, rgba(80,80,85,0.4) 50%, rgba(80,80,85,0.3) 80%, transparent 95%)",
            borderRadius: "0 0 4px 4px",
          }} />

          {/* Glow under laptop */}
          <motion.div
            className="mx-auto mt-4 rounded-full pointer-events-none"
            style={{
              width: "50%",
              height: "30px",
              background: "radial-gradient(ellipse, rgba(0,191,255,0.08), transparent 70%)",
              filter: "blur(14px)",
              opacity: screenGlow,
            }}
          />
        </div>
      </div>
    </section>
  );
}
