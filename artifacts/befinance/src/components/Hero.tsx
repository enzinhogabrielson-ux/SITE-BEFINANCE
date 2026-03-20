import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion";
import heroBg from "/hero-bg.png";

const cycleWords = ["commodities", "ações", "cripto moedas", "ETFs", "futuros"];

// Kyvoo-style spring presets
const springFast   = { type: "spring", stiffness: 400, damping: 40 } as const;
const springMedium = { type: "spring", duration: 0.6, bounce: 0.15 } as const;
const tweenExpoOut = { type: "tween", duration: 0.9, ease: [0.16, 1, 0.3, 1] } as const;

export default function Hero() {
  const [wordIndex,   setWordIndex]   = useState(0);
  const [displayWord, setDisplayWord] = useState(cycleWords[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY }  = useScroll();
  const bgY          = useTransform(scrollY, [0, 600], [0, 120]);
  
  const sharkXVal = useMotionValue(0);
  const sharkYVal = useMotionValue(0);
  const sharkRotVal = useMotionValue(0);

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

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let currentRot = 0;
    let goalX = 0;
    let goalY = 0;
    let goalRot = 0;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      goalX = (e.clientX - cx) * 0.02;
      goalY = (e.clientY - cy) * 0.015;
      goalRot = (e.clientX - cx) * 0.002;
    };

    const tick = () => {
      currentX = lerp(currentX, goalX, 0.03);
      currentY = lerp(currentY, goalY, 0.03);
      currentRot = lerp(currentRot, goalRot, 0.02);
      sharkXVal.set(currentX);
      sharkYVal.set(currentY);
      sharkRotVal.set(currentRot);
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [sharkXVal, sharkYVal, sharkRotVal]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* ── Parallax background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            minHeight: "120%",
            marginTop: "-10%",
          }}
        />
        {/* Dark overlays for text legibility */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(4,13,24,0.35) 0%, rgba(4,13,24,0.1) 35%, rgba(4,13,24,0.6) 70%, rgba(4,13,24,1) 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(4,13,24,0.75) 0%, rgba(4,13,24,0.5) 40%, transparent 70%)" }} />
      </motion.div>

      {/* ── Holographic shark overlay ── */}
      <motion.div
        className="absolute z-[2] pointer-events-none"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          right: "-8%",
          top: "5%",
          width: "75%",
          maxWidth: "1400px",
          x: sharkXVal,
          y: sharkYVal,
          rotate: sharkRotVal,
        }}
      >
        <img
          src="/TUBASVG.svg"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            mixBlendMode: "screen",
            filter: "brightness(1.1) contrast(1.05)",
          }}
        />
      </motion.div>

      {/* ── Kyvoo-style glow orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large diffuse cyan orb — center left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "20%", left: "-5%",
            width: "700px", height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,191,255,0.12) 0%, rgba(0,100,255,0.05) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Secondary orb — right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "40%", right: "5%",
            width: "500px", height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,60,180,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2.5 + 1,
              height: Math.random() * 2.5 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "rgba(0,191,255,0.55)",
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], y: [0, -60, 0] }}
            transition={{ duration: Math.random() * 4 + 3, delay: Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">

          {/* Hero badge pill — Kyvoo signature */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...tweenExpoOut, delay: 0.2 }}
            className="mb-7"
          >
            <div className="hero-badge">
              <span className="badge-tag">Novo</span>
              <span className="badge-text">A melhor plataforma de trading do Brasil</span>
            </div>
          </motion.div>

          {/* H1 — Kyvoo-style tight tracking */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...tweenExpoOut, delay: 0.32 }}
            style={{
              fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              marginBottom: "0.2rem",
            }}
          >
            Invista de forma
            <br />
            simplificada em
          </motion.h1>

          {/* Cycling word — blur-swap animation */}
          <div style={{ height: "clamp(2.9rem, 6vw, 4.8rem)", overflow: "hidden", marginBottom: "1.6rem" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={displayWord}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block",
                  fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  background: "linear-gradient(135deg, #00bfff 0%, #7df9ff 50%, #0099ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 22px rgba(0,191,255,0.45))",
                }}
              >
                {displayWord}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...tweenExpoOut, delay: 0.52 }}
            className="mb-8"
            style={{
              fontFamily: "'DM Sans','Inter',sans-serif",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              color: "rgba(240,248,255,0.72)",
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: "-0.01em",
              maxWidth: "440px",
            }}
          >
            Registre-se e receba{" "}
            <strong style={{ color: "#00bfff", fontWeight: 700 }}>R$10.000</strong>{" "}
            na sua conta de treinamento. Sem riscos, sem compromissos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...tweenExpoOut, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {/* Primary — radial glow (Kyvoo pattern) */}
            <a href="#" className="btn-glow">
              <span className="btn-glow-face">
                Abra sua conta gratuita
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            {/* Secondary */}
            <motion.a
              href="#plataforma"
              whileHover={{ borderColor: "rgba(0,191,255,0.45)", background: "rgba(0,191,255,0.08)" } as any}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all"
              style={{
                fontFamily: "'DM Sans','Inter',sans-serif",
                color: "rgba(240,248,255,0.82)",
                textDecoration: "none",
                border: "1px solid rgba(0,191,255,0.2)",
                background: "rgba(0,191,255,0.04)",
                backdropFilter: "blur(10px)",
                height: "50px",
                letterSpacing: "-0.01em",
              }}
            >
              Saiba mais
            </motion.a>
          </motion.div>

          {/* Trust indicators — Kyvoo-style inline badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-0"
          >
            {[
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2.5" y="5.5" width="8" height="6" rx="1.2" stroke="#00bfff" strokeWidth="1.2"/><path d="M4.5 5.5V4C4.5 3 5.2 2.3 6.5 2.3C7.8 2.3 8.5 3 8.5 4V5.5" stroke="#00bfff" strokeWidth="1.2" strokeLinecap="round"/></svg>, text: "SSL 256-bit" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1L7.8 4.5H11L8.5 6.5L9.5 10L6.5 8L3.5 10L4.5 6.5L2 4.5H5.2L6.5 1Z" stroke="#00bfff" strokeWidth="1.2" strokeLinejoin="round"/></svg>, text: "Reg. CVM" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M7 1.5L4 7H7L6 11.5L9.5 6H6.5L7 1.5Z" stroke="#00bfff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: "Exec. < 1ms" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#00bfff" strokeWidth="1.2"/><path d="M1.5 6.5H11.5M6.5 1.5C6.5 1.5 4.5 3.8 4.5 6.5C4.5 9.2 6.5 11.5 6.5 11.5M6.5 1.5C6.5 1.5 8.5 3.8 8.5 6.5C8.5 9.2 6.5 11.5 6.5 11.5" stroke="#00bfff" strokeWidth="1.2"/></svg>, text: "+40 países" },
            ].map((b, i) => (
              <div key={b.text} className="flex items-center">
                <div className="flex items-center gap-1.5"
                  style={{ color: "rgba(240,248,255,0.45)", fontSize: "0.75rem", fontFamily: "'DM Sans','Inter',sans-serif", letterSpacing: "-0.01em" }}>
                  {b.icon}<span>{b.text}</span>
                </div>
                {i < 3 && <div className="mx-4 h-3" style={{ width: "1px", background: "rgba(255,255,255,0.12)" }} />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span style={{ color: "rgba(240,248,255,0.35)", fontSize: "0.65rem", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(0,191,255,0.28)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#00bfff" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
