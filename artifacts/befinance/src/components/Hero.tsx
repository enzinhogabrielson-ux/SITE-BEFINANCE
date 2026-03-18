import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "/hero-bg.png";

const cycleWords = ["commodities", "ações", "cripto moedas", "ETFs", "futuros"];

const blurFade = (delay: number) => ({
  initial: { opacity: 0, filter: "blur(12px)", y: 24 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(cycleWords[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => {
        const next = (prev + 1) % cycleWords.length;
        setDisplayWord(cycleWords[next]);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "64px" }}
    >
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            minHeight: "120%",
            marginTop: "-10%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,13,24,0.3) 0%, rgba(4,13,24,0.1) 40%, rgba(4,13,24,0.6) 70%, rgba(4,13,24,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,13,24,0.72) 0%, rgba(4,13,24,0.48) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "rgba(0, 191, 255, 0.6)",
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], y: [0, -60, 0] }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl">

          {/* Badge — blur-fade in */}
          <motion.div
            {...blurFade(0.2)}
            className="inline-flex items-center gap-2.5 mb-7"
          >
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#00bfff" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#00bfff" }} />
            </span>
            <span
              className="text-xs font-semibold tracking-widest"
              style={{
                color: "#00bfff",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              A melhor corretora do mundo
            </span>
          </motion.div>

          {/* Heading — blur-fade staggered */}
          <motion.h1
            {...blurFade(0.35)}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              marginBottom: "0.2rem",
            }}
          >
            Invista de forma
            <br />
            simplificada em
          </motion.h1>

          {/* Animated shimmer word */}
          <motion.div {...blurFade(0.5)} style={{ marginBottom: "1.75rem" }}>
            <motion.span
              key={displayWord}
              initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="shimmer-text"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                display: "block",
                filter: "drop-shadow(0 0 28px rgba(0, 191, 255, 0.45))",
              }}
            >
              {displayWord}
            </motion.span>
          </motion.div>

          {/* Subtitle — blur-fade */}
          <motion.p
            {...blurFade(0.65)}
            className="mb-9"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(240,248,255,0.72)",
              fontWeight: 400,
              lineHeight: 1.65,
            }}
          >
            Registre-se e receba{" "}
            <strong style={{ color: "#00e5ff", fontWeight: 700 }}>R$10.000</strong>{" "}
            na sua conta de treinamento — sem risco.
          </motion.p>

          {/* CTA Buttons — blur-fade */}
          <motion.div
            {...blurFade(0.8)}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(0, 191, 255, 0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg, #00bfff, #0066ff)",
                color: "#ffffff",
                textDecoration: "none",
                letterSpacing: "0.01em",
                boxShadow: "0 0 24px rgba(0, 191, 255, 0.35)",
              }}
            >
              Abra sua conta gratuita
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="#plataforma"
              whileHover={{ scale: 1.03, borderColor: "rgba(0,191,255,0.5)", background: "rgba(0,191,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240,248,255,0.85)",
                textDecoration: "none",
                border: "1px solid rgba(0,191,255,0.18)",
                background: "rgba(0,191,255,0.04)",
                backdropFilter: "blur(10px)",
                transition: "all 0.25s ease",
              }}
            >
              Saiba mais
            </motion.a>
          </motion.div>

          {/* Trust indicators — blur-fade */}
          <motion.div
            {...blurFade(1.0)}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { icon: "🔒", text: "100% Seguro" },
              { icon: "⚡", text: "Execução rápida" },
              { icon: "🌍", text: "Mercado global" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2"
                style={{
                  color: "rgba(240,248,255,0.55)",
                  fontSize: "0.8rem",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span style={{ color: "rgba(240,248,255,0.35)", fontSize: "0.65rem", fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(0,191,255,0.28)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#00bfff" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
