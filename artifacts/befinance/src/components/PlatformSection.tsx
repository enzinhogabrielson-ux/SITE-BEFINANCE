import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lidAngle = useTransform(scrollYProgress, [0.15, 0.5], [-90, 0]);
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
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: `${left}%`, bottom: `${bottom}%` }}
            >
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
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${color}88)`,
                    borderColor: "#06081a",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                  }}
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
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              color: "#ffffff",
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}
          >
            Negocie em gráficos ao{" "}
            <span className="shimmer-text">vivo</span>
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
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240,248,255,0.85)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
              }}
            >
              Abra sua conta gratuita
            </a>
          </motion.div>
        </div>

        {/* Laptop - 3D opening animation */}
        <div className="relative max-w-[850px] mx-auto" style={{ perspective: "1800px" }}>
          {/* Laptop lid */}
          <motion.div
            style={{
              rotateX: lidAngle,
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="relative rounded-t-xl overflow-hidden"
              style={{
                background: "#0c0c0c",
                border: "3px solid #222",
                borderBottom: "none",
                padding: "12px 12px 0",
                aspectRatio: "16 / 10",
              }}
            >
              {/* Camera */}
              <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: "#1a1a1a", border: "1px solid #333" }} />

              {/* Screen */}
              <motion.div
                className="w-full h-full rounded-t-md overflow-hidden"
                style={{ opacity: screenGlow }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(135deg, #0a0e27, #1a1040 30%, #0d1530 60%, #080c20)",
                  }}
                >
                  {/* Placeholder UI */}
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
          </motion.div>

          {/* Hinge */}
          <div
            className="relative"
            style={{
              background: "linear-gradient(180deg, #2a2a2a, #191919)",
              height: "12px",
              borderRadius: "0 0 2px 2px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b"
              style={{ width: "70px", height: "4px", background: "#2d2d2d" }}
            />
          </div>

          {/* Keyboard base */}
          <div
            className="mx-auto"
            style={{
              width: "94%",
              height: "8px",
              background: "linear-gradient(180deg, #181818, #0d0d0d)",
              borderRadius: "0 0 6px 6px",
              boxShadow: "0 6px 30px rgba(0,0,0,0.5)",
            }}
          />

          {/* Glow reflection */}
          <motion.div
            className="mx-auto mt-2 rounded-full pointer-events-none"
            style={{
              width: "60%",
              height: "20px",
              background: "radial-gradient(ellipse, rgba(0,191,255,0.1), transparent 70%)",
              filter: "blur(10px)",
              opacity: screenGlow,
            }}
          />
        </div>
      </div>
    </section>
  );
}
