import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(4, 13, 24, 0.92)"
          : "rgba(4, 13, 24, 0.5)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 191, 255, 0.1)"
          : "1px solid rgba(0, 191, 255, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#inicio"
          className="flex items-center gap-2 select-none"
          whileHover={{ scale: 1.03 }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M4 4L18 4L28 18L18 32L4 32L14 18L4 4Z" fill="url(#logoGrad)" />
            <path d="M18 4L32 4L32 32L18 32L28 18Z" fill="url(#logoGrad2)" opacity="0.6" />
            <defs>
              <linearGradient id="logoGrad" x1="4" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00bfff" />
                <stop offset="1" stopColor="#0066ff" />
              </linearGradient>
              <linearGradient id="logoGrad2" x1="18" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00e5ff" />
                <stop offset="1" stopColor="#0099ff" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #00bfff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BeFinance
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
              className="relative text-sm font-medium group"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(240, 248, 255, 0.75)",
                textDecoration: "none",
              }}
              whileHover={{ color: "#00bfff" }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #00bfff, #0066ff)" }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 191, 255, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(135deg, #00bfff, #0066ff)",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Abra sua conta gratuita
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
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
            style={{ background: "rgba(4, 13, 24, 0.98)", borderTop: "1px solid rgba(0,191,255,0.1)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
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
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-center"
                style={{
                  background: "linear-gradient(135deg, #00bfff, #0066ff)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Abra sua conta gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
