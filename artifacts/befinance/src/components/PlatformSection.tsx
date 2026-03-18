import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lidAngle = useTransform(scrollYProgress, [0.15, 0.5], [-85, 0]);
  const screenGlow = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <section
      id="plataforma"
      ref={sectionRef}
      className="relative overflow-hidden section-glow-border"
      style={{
        background: "linear-gradient(180deg, #020814 0%, #06081a 50%, #040d18 100%)",
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Candlestick background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]">
        {[...Array(16)].map((_, i) => {
          const bodyH = 50 + (i * 37 % 180);
          const wickTop = 15 + (i * 23 % 60);
          const wickBot = 10 + (i * 19 % 40);
          const left = 3 + i * 6.2;
          const bottom = 5 + (i * 13 % 20);
          return (
            <div key={i} className="absolute flex flex-col items-center" style={{ left: `${left}%`, bottom: `${bottom}%` }}>
              <div style={{ width: "1px", height: `${wickTop}px`, background: "rgba(120,70,200,0.6)" }} />
              <div style={{ width: "6px", height: `${bodyH}px`, background: "rgba(100,50,180,0.2)", borderRadius: "2px" }} />
              <div style={{ width: "1px", height: `${wickBot}px`, background: "rgba(120,70,200,0.6)" }} />
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="flex -space-x-2.5">
              {["#00bfff", "#8b5cf6", "#f59e0b", "#10b981"].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, borderColor: "#06081a", color: "#fff", fontFamily: "'Inter', sans-serif" }}
                >
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
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium"
              style={{ fontFamily: "'Inter', sans-serif", color: "rgba(240,248,255,0.85)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
            >
              Abra sua conta gratuita
            </a>
          </motion.div>
        </div>

        {/* MacBook 3D */}
        <div className="relative max-w-[820px] mx-auto" style={{ perspective: "1800px" }}>

          {/* === LID (screen) - rotates open === */}
          <motion.div
            style={{
              rotateX: lidAngle,
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Screen outer shell */}
            <div
              style={{
                background: "linear-gradient(180deg, #2c2c2e, #1c1c1e)",
                borderRadius: "12px 12px 0 0",
                padding: "10px 10px 0",
                position: "relative",
              }}
            >
              {/* Camera notch */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: "4px", width: "6px", height: "6px", borderRadius: "50%", background: "#0a0a0a", border: "1px solid #3a3a3a" }}
              />

              {/* Inner screen bezel */}
              <div
                style={{
                  background: "#0a0a0a",
                  borderRadius: "4px 4px 0 0",
                  overflow: "hidden",
                  aspectRatio: "16 / 10",
                }}
              >
                <motion.div className="w-full h-full" style={{ opacity: screenGlow }}>
                  <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #0a0e27, #1a1040 30%, #0d1530 60%, #080c20)" }}>
                    <div className="w-full h-full p-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2 px-1">
                        <div className="w-14 h-4 rounded-sm" style={{ background: "rgba(0,191,255,0.35)" }} />
                        <div className="w-20 h-4 rounded-sm" style={{ background: "rgba(139,92,246,0.3)" }} />
                        <div className="flex-1" />
                        <div className="w-16 h-4 rounded-sm" style={{ background: "rgba(16,185,129,0.3)" }} />
                      </div>
                      <div className="flex-1 flex gap-2">
                        <div className="flex-1 rounded-md p-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
                            {[30, 70, 110, 150, 190, 230, 270, 310, 350].map((x, j) => {
                              const green = [0, 2, 4, 5, 7, 8].includes(j);
                              const bh = 12 + ((j * 31) % 50);
                              const y = 30 + ((j * 17) % 90);
                              return (
                                <g key={j}>
                                  <line x1={x} y1={y - 12} x2={x} y2={y + bh + 12} stroke={green ? "#10b981" : "#ef4444"} strokeWidth="1" />
                                  <rect x={x - 7} y={y} width="14" height={bh} fill={green ? "#10b981" : "#ef4444"} rx="1" />
                                </g>
                              );
                            })}
                          </svg>
                        </div>
                        <div className="w-[22%] rounded-md p-2 flex flex-col gap-1.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                          <div className="w-full h-3 rounded-sm" style={{ background: "rgba(0,191,255,0.25)" }} />
                          <div className="w-3/4 h-2.5 rounded-sm" style={{ background: "rgba(255,255,255,0.08)" }} />
                          <div className="w-full h-2.5 rounded-sm" style={{ background: "rgba(255,255,255,0.05)" }} />
                          <div className="mt-auto flex flex-col gap-1.5">
                            <div className="w-full h-6 rounded-sm" style={{ background: "rgba(16,185,129,0.45)" }} />
                            <div className="w-full h-6 rounded-sm" style={{ background: "rgba(239,68,68,0.4)" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* === HINGE === */}
          <div
            style={{
              height: "8px",
              background: "linear-gradient(180deg, #3a3a3c, #2c2c2e, #48484a)",
              borderRadius: "0",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
            }}
          />

          {/* === KEYBOARD BASE === */}
          <div
            style={{
              background: "linear-gradient(180deg, #2c2c2e 0%, #1c1c1e 40%, #161618 100%)",
              borderRadius: "0 0 12px 12px",
              padding: "12px 24px 10px",
              position: "relative",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            {/* Keyboard rows */}
            <div className="flex flex-col gap-[3px] mb-3">
              {[14, 14, 13, 12, 8].map((keys, row) => (
                <div key={row} className="flex gap-[3px] justify-center">
                  {[...Array(keys)].map((_, k) => {
                    const isSpace = row === 4 && k === 4;
                    return (
                      <div
                        key={k}
                        style={{
                          width: isSpace ? "28%" : row === 4 ? "5%" : `${90 / keys}%`,
                          height: "6px",
                          borderRadius: "1.5px",
                          background: "rgba(255,255,255,0.06)",
                          border: "0.5px solid rgba(255,255,255,0.04)",
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Trackpad */}
            <div
              className="mx-auto"
              style={{
                width: "38%",
                height: "28px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          </div>

          {/* Bottom lip / feet */}
          <div
            className="mx-auto"
            style={{
              width: "30%",
              height: "3px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              borderRadius: "0 0 4px 4px",
            }}
          />

          {/* Glow reflection */}
          <motion.div
            className="mx-auto mt-4 rounded-full pointer-events-none"
            style={{
              width: "50%",
              height: "24px",
              background: "radial-gradient(ellipse, rgba(0,191,255,0.1), transparent 70%)",
              filter: "blur(12px)",
              opacity: screenGlow,
            }}
          />
        </div>
      </div>
    </section>
  );
}
