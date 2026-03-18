import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5, 8, 22, 0.97)"
          : "rgba(5, 8, 22, 0.85)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[62px] flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#inicio"
          className="flex items-center select-none flex-shrink-0"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/logo-befinance.png"
            alt="BeFinance"
            style={{
              height: "100px",
              width: "auto",
              mixBlendMode: "screen",
              objectFit: "contain",
            }}
          />
        </motion.a>

        {/* Desktop Nav Links — centered */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3, duration: 0.4 }}
              className="relative text-sm font-medium group"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240, 248, 255, 0.72)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}
              whileHover={{ color: "#ffffff" }}
            >
              {link.label}
              {/* Underline hover effect */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #00bfff, rgba(0,191,255,0))" }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Right side CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Login button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(255,255,255,0.25)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(240,248,255,0.7)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
            }}
          >
            <Lock size={13} strokeWidth={2} />
            Login
          </motion.a>

          {/* CTA button — dark pill with subtle border (Kyvoo style) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all btn-border-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Abra sua conta gratuita
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1 opacity-70 hover:opacity-100 transition-opacity"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(5, 8, 22, 0.99)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2.5 border-b"
                  style={{
                    color: "rgba(240,248,255,0.75)",
                    borderColor: "rgba(255,255,255,0.06)",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-1">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-center"
                  style={{
                    color: "rgba(240,248,255,0.8)",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <Lock size={13} strokeWidth={2} />
                  Login
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-center btn-border-light"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Abra sua conta gratuita
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
