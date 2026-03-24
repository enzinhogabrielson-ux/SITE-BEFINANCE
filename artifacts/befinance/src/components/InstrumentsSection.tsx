import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const cardDefs = [
  {
    titleKey: "instruments.card1.title",
    descKey: "instruments.card1.desc",
    ctaKey: "instruments.card1.cta",
    highlight: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="6" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M18 28L22 22L26 26L32 18" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="18" r="3" fill="#00bfff" opacity="0.6" />
      </svg>
    ),
  },
  {
    titleKey: "instruments.card2.title",
    descKey: "instruments.card2.desc",
    ctaKey: "instruments.card2.cta",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L40 12V24C40 34.4 33 42.5 24 45C15 42.5 8 34.4 8 24V12L24 4Z" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M17 24L22 29L31 19" stroke="#00bfff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: "instruments.card5.title",
    descKey: "instruments.card5.desc",
    ctaKey: "",
    highlight: false,
    hasStats: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M24 14V24L30 30" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    titleKey: "instruments.card6.title",
    descKey: "instruments.card6.desc",
    ctaKey: "instruments.card6.cta",
    highlight: false,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="18" width="28" height="18" rx="3" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M10 24H38" stroke="#00bfff" strokeWidth="1" opacity="0.3" />
        <circle cx="24" cy="12" r="6" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M22 12H26" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function InstrumentsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="negociacao" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#040d18" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            {t("instruments.title1")}{" "}
            <br className="hidden md:block" />
            {t("instruments.title2")}{" "}
            <span style={{ color: "#00bfff" }}>{t("instruments.titleHighlight")}</span> {t("instruments.title3")}
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
            {t("instruments.body")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cardDefs.map((card, i) => (
            <motion.div
              key={card.titleKey}
              className="kyvoo-card rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: card.highlight
                  ? "linear-gradient(135deg, rgba(0,191,255,0.12), rgba(0,102,255,0.08))"
                  : "rgba(0,191,255,0.04)",
                border: card.highlight
                  ? "1px solid rgba(0,191,255,0.25)"
                  : "1px solid rgba(0,191,255,0.08)",
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.08 * i, ease }}
            >
              <div className="mb-1">{card.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em", lineHeight: 1.3 }}
              >
                {t(card.titleKey)}
              </h3>
              <p
                className="text-sm flex-1"
                style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}
              >
                {t(card.descKey)}
              </p>
              {card.hasStats && (
                <div className="flex gap-6 mt-2">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>$1</div>
                    <div className="text-xs" style={{ color: "rgba(240,248,255,0.45)" }}>{t("instruments.card5.stat1")}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>1 min</div>
                    <div className="text-xs" style={{ color: "rgba(240,248,255,0.45)" }}>{t("instruments.card5.stat2")}</div>
                  </div>
                </div>
              )}
              {card.ctaKey && (
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-auto"
                  style={{ color: "#00bfff", fontFamily: "'Inter',sans-serif" }}
                >
                  {t(card.ctaKey)}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
