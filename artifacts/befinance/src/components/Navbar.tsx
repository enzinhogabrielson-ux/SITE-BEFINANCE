import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";

const navLinks = [
  { label: "Início",       href: "#inicio" },
  { label: "Plataforma",   href: "#plataforma" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos",  href: "#depoimentos" },
  { label: "Blog",         href: "#blog" },
];

const FlagBR = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#009C3B"/>
    <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00"/>
    <circle cx="10" cy="7" r="3.2" fill="#002776"/>
    <path d="M6.9 5.6 Q10 4.2 13.1 5.6" stroke="white" strokeWidth="0.7" fill="none"/>
  </svg>
);

const FlagUS = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#B22234"/>
    {[1,3,5,7,9,11].map(y => <rect key={y} x="0" y={y} width="20" height="1" fill="white"/>)}
    <rect width="8" height="7" fill="#3C3B6E"/>
    {[1.2,2.5,3.8,5.1].map((y,ri) => [0.8,2.2,3.6,5,6.4,7.8,...(ri%2===0?[1.5,2.9,4.3,5.7,7.1]:[])].filter((_,i)=> ri%2===0 ? i<5 : i<4).map((x,ci) => (
      <circle key={`${ri}-${ci}`} cx={ri%2===0 ? [0.8,2.2,3.6,5,6.4][ci] : [1.5,2.9,4.3,5.7][ci]} cy={y} r="0.5" fill="white"/>
    )))}
  </svg>
);

const FlagES = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#AA151B"/>
    <rect y="3.5" width="20" height="7" fill="#F1BF00"/>
    <rect y="3.5" width="20" height="1" fill="#AA151B" opacity="0.15"/>
    <rect y="9.5" width="20" height="1" fill="#AA151B" opacity="0.15"/>
  </svg>
);

const languages = [
  { code: "PT", Flag: FlagBR, label: "Português" },
  { code: "EN", Flag: FlagUS, label: "English" },
  { code: "ES", Flag: FlagES, label: "Español" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang]             = useState(languages[0]);
  const [langOpen, setLangOpen]     = useState(false);
  const langRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(4,13,24,0.94)" : "rgba(4,13,24,0.5)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,191,255,0.10)"
          : "1px solid rgba(0,191,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#inicio"
          className="flex items-center select-none flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{ overflow: "hidden", height: "56px", width: "280px", position: "relative" }}
        >
          <img
            src="/logo-befinance.png"
            alt="BeFinance"
            style={{
              position: "absolute",
              height: "222px",
              width: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "screen",
              maxWidth: "none",
            }}
          />
        </motion.a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3, duration: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative group text-sm"
              style={{
                fontFamily: "'DM Sans','Inter',sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "rgba(240,248,255,0.72)",
                textDecoration: "none",
              }}
              whileHover={{ color: "#fff" } as any}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #00bfff, #0066ff)",
                  transition: "width 0.25s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Desktop actions */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {/* Login — Kyvoo-style outline pill */}
          <a href="#" className="btn-login">
            <Lock size={13} style={{ opacity: 0.65 }} />
            Login
          </a>

          {/* Primary CTA — radial glow border (Kyvoo pattern, cyan) */}
          <a href="#" className="btn-glow">
            <span className="btn-glow-face">
              Abra sua conta gratuita
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Language switcher */}
          <div ref={langRef} className="lang-switcher" onClick={() => setLangOpen(!langOpen)}>
            <span className="lang-flag"><lang.Flag /></span>
            <span className="lang-code">{lang.code}</span>
            <svg
              className="lang-arrow"
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] as any }}
                >
                  {languages.map((l) => (
                    <div
                      key={l.code}
                      className={`lang-option${lang.code === l.code ? " active" : ""}`}
                      onClick={(e) => { e.stopPropagation(); setLang(l); setLangOpen(false); }}
                    >
                      <l.Flag />
                      <span>{l.label}</span>
                      <span style={{ marginLeft: "auto", fontSize: "11px", opacity: 0.4 }}>{l.code}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(4,13,24,0.98)", borderTop: "1px solid rgba(0,191,255,0.1)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2 border-b"
                  style={{
                    color: "rgba(240,248,255,0.8)",
                    borderColor: "rgba(0,191,255,0.08)",
                    textDecoration: "none",
                    fontFamily: "'DM Sans','Inter',sans-serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l)}
                    style={{
                      padding: "5px 11px",
                      borderRadius: "20px",
                      border: `1px solid ${lang.code === l.code ? "rgba(0,191,255,0.5)" : "rgba(0,191,255,0.15)"}`,
                      background: lang.code === l.code ? "rgba(0,191,255,0.1)" : "transparent",
                      color: lang.code === l.code ? "#00bfff" : "rgba(240,248,255,0.6)",
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: "'Inter',sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    <l.Flag /> {l.code}
                  </button>
                ))}
              </div>
              <a href="#" className="btn-glow mt-2" style={{ width: "100%", justifyContent: "center" }}>
                <span className="btn-glow-face" style={{ width: "100%", justifyContent: "center" }}>
                  Abra sua conta gratuita
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
