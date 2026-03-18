import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "/hero-bg.png";

const cycleWords = ["commodities", "ações", "cripto moedas", "ETFs", "futuros"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(cycleWords[0]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setWordIndex((prev) => {
          const next = (prev + 1) % cycleWords.length;
          setDisplayWord(cycleWords[next]);
          return next;
        });
        setIsTyping(false);
      }, 300);
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
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
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
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,13,24,0.3) 0%, rgba(4,13,24,0.1) 40%, rgba(4,13,24,0.55) 70%, rgba(4,13,24,1) 100%)",
          }}
        />
        {/* Left side gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,13,24,0.7) 0%, rgba(4,13,24,0.45) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
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
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              y: [0, -60, 0],
            }}
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: "#00bfff",
                color: "#040d18",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              A melhor
            </span>
            <span
              className="text-xs font-medium"
              style={{
                color: "rgba(240,248,255,0.8)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              corretora do mundo
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: "0.25rem",
            }}
          >
            Invista de forma
            <br />
            simplificada em
          </motion.h1>

          {/* Animated word */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <motion.span
              key={displayWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #00bfff 0%, #00e5ff 50%, #0099ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
                filter: "drop-shadow(0 0 20px rgba(0, 191, 255, 0.5))",
              }}
            >
              {displayWord}
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(240,248,255,0.75)",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Registre-se e receba{" "}
            <strong style={{ color: "#00bfff", fontWeight: 700 }}>R$10.000</strong>{" "}
            na sua conta de treinamento
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 191, 255, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg, #00bfff, #0066ff)",
                color: "#ffffff",
                textDecoration: "none",
                letterSpacing: "0.01em",
                boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)",
              }}
            >
              Abra sua conta gratuita
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="#plataforma"
              whileHover={{ scale: 1.03, borderColor: "rgba(0,191,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240,248,255,0.85)",
                textDecoration: "none",
                border: "1px solid rgba(0,191,255,0.2)",
                background: "rgba(0,191,255,0.05)",
                backdropFilter: "blur(10px)",
              }}
            >
              Saiba mais
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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
                style={{ color: "rgba(240,248,255,0.6)", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span style={{ color: "rgba(240,248,255,0.4)", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(0,191,255,0.3)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#00bfff" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
