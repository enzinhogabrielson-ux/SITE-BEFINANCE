import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1176336727?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78vh",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100%",
            transform: "translate(-50%, -50%)",
            border: "none",
            pointerEvents: "none",
          }}
          title="Background"
        />
        <div className="absolute inset-0" style={{ background: "rgba(4,13,24,0.55)" }} />
      </div>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "120px", background: "linear-gradient(to bottom, #040d18, transparent)" }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.14) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(18px)", y: 36 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ ...expo }}
          className="p-10 md:p-16 rounded-3xl"
          style={{ background: "rgba(4,20,40,0.45)", border: "1px solid rgba(0,191,255,0.12)", backdropFilter: "blur(24px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2, delay: 0.1 }}
            className="inline-flex justify-center mb-7"
          >
            <div className="hero-badge">
              <span className="badge-tag">{t("cta.badge")}</span>
              <span className="badge-text">{t("cta.badgeText")}</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.1 }}
            style={{
              fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
              fontWeight: 700, fontSize: "clamp(2rem,4.5vw,3.4rem)",
              color: "#fff", letterSpacing: "-0.035em", lineHeight: 1.1, marginBottom: "1.2rem",
            }}
          >
            {t("cta.title")}{" "}
            <span className="shimmer-text">{t("cta.titleHighlight")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.18 }}
            style={{
              fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "1rem",
              color: "rgba(240,248,255,0.65)", lineHeight: 1.65, maxWidth: "440px",
              margin: "0 auto 2.5rem", letterSpacing: "-0.01em",
            }}
          >
            {t("cta.body1")}{" "}
            <strong style={{ color: "#00bfff" }}>{t("cta.bodyHighlight")}</strong>{" "}
            {t("cta.body2")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.26 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#" className="btn-glow">
              <span className="btn-glow-face" style={{ padding: "0 32px" }}>
                {t("cta.startTrading")}
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <motion.a
              href="#plataforma"
              whileHover={{ borderColor: "rgba(0,191,255,0.45)", background: "rgba(0,191,255,0.08)" } as any}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 rounded-full font-medium text-sm"
              style={{
                fontFamily: "'DM Sans','Inter',sans-serif", color: "rgba(240,248,255,0.82)",
                textDecoration: "none", border: "1px solid rgba(0,191,255,0.22)",
                background: "rgba(0,191,255,0.04)", height: "50px", letterSpacing: "-0.01em",
              }}
            >
              {t("cta.explorePlatform")}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center items-center gap-0"
          >
            {[
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2.5" y="5.5" width="8" height="6" rx="1.2" stroke="#00bfff" strokeWidth="1.2"/><path d="M4.5 5.5V4C4.5 3 5.2 2.3 6.5 2.3C7.8 2.3 8.5 3 8.5 4V5.5" stroke="#00bfff" strokeWidth="1.2" strokeLinecap="round"/></svg>, textKey: "cta.ssl" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1L7.8 4.5H11L8.5 6.5L9.5 10L6.5 8L3.5 10L4.5 6.5L2 4.5H5.2L6.5 1Z" stroke="#00bfff" strokeWidth="1.2" strokeLinejoin="round"/></svg>, textKey: "cta.regulated" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M7 1.5L4 7H7L6 11.5L9.5 6H6.5L7 1.5Z" stroke="#00bfff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>, textKey: "cta.execution" },
              { icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke="#00bfff" strokeWidth="1.2"/><path d="M1.5 6.5H11.5" stroke="#00bfff" strokeWidth="1.2" strokeLinecap="round"/><path d="M6.5 1.5C6.5 1.5 4.5 3.8 4.5 6.5S6.5 11.5 6.5 11.5M6.5 1.5C6.5 1.5 8.5 3.8 8.5 6.5S6.5 11.5 6.5 11.5" stroke="#00bfff" strokeWidth="1.2"/></svg>, textKey: "cta.countries" },
            ].map((b, i) => (
              <div key={b.textKey} className="flex items-center">
                <div className="flex items-center gap-1.5"
                  style={{ color: "rgba(240,248,255,0.42)", fontSize: "0.75rem", fontFamily: "'DM Sans','Inter',sans-serif", letterSpacing: "-0.01em" }}>
                  {b.icon}<span>{t(b.textKey)}</span>
                </div>
                {i < 3 && <div className="mx-4 h-3" style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
