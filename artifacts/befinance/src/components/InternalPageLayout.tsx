import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface InternalPageProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  features: Feature[];
  cta?: { label: string; href: string };
  extraContent?: React.ReactNode;
}

export default function InternalPageLayout({ badge, title, subtitle, features, cta, extraContent }: InternalPageProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#040d18", fontFamily: "'DM Sans','Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,191,255,0.04) 0%, #040d18 40%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...blur} animate={blur.animate} transition={{ duration: 0.8, ease }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.15)" }}>
              <span style={{ color: "#00bfff", fontSize: "13px", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
              {subtitle}
            </p>
            {cta && (
              <motion.a
                href={cta.href}
                className="inline-flex items-center gap-2 mt-8 btn-glow"
                whileTap={{ scale: 0.97 }}
              >
                <span className="btn-glow-face">
                  {cta.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="kyvoo-card rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: "rgba(0,191,255,0.04)", border: "1px solid rgba(0,191,255,0.08)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "rgba(0,191,255,0.08)" }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em" }}>
                  {f.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: 1.65 }}>
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {extraContent}

      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            className="p-10 md:p-14 rounded-3xl"
            style={{ background: "rgba(4,20,40,0.45)", border: "1px solid rgba(0,191,255,0.12)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em" }}>
              Pronto para começar?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
              Abra sua conta gratuita e comece a negociar com confiança.
            </p>
            <a href="#" className="btn-glow">
              <span className="btn-glow-face">
                Comece a negociar
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
