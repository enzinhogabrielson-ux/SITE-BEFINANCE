import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const cardDefs = [
  {
    titleKey: "withdrawals.card1.title",
    descKey: "withdrawals.card1.desc",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <text x="20" y="25" textAnchor="middle" fill="#00bfff" fontSize="14" fontWeight="700" fontFamily="DM Sans">$</text>
      </svg>
    ),
  },
  {
    titleKey: "withdrawals.card2.title",
    descKey: "withdrawals.card2.desc",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M20 10V20L26 26" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "withdrawals.card3.title",
    descKey: "withdrawals.card3.desc",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 32L16 22L22 28L32 14" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 14H32V20" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="14" r="3" fill="#00bfff" opacity="0.3" />
      </svg>
    ),
  },
  {
    titleKey: "withdrawals.card4.title",
    descKey: "withdrawals.card4.desc",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="7" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)" />
        <path d="M8 34C8 28 13.4 24 20 24C26.6 24 32 28 32 34" stroke="#00bfff" strokeWidth="1.5" />
        <path d="M28 8L32 4M32 4L36 8M32 4V14" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WithdrawalsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #040d18 0%, #061220 50%, #040d18 100%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-6"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            {t("withdrawals.title1")}<span style={{ color: "#00bfff" }}>{t("withdrawals.titleHighlight")}</span> {t("withdrawals.title2")}{" "}
            <br className="hidden md:block" />
            {t("withdrawals.title3")}
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-lg mb-14 max-w-2xl mx-auto"
          style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif" }}
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          {t("withdrawals.body")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cardDefs.map((card, i) => (
            <motion.div
              key={card.titleKey}
              className="kyvoo-card rounded-2xl p-7 flex gap-5 items-start"
              style={{
                background: "rgba(0,191,255,0.04)",
                border: "1px solid rgba(0,191,255,0.08)",
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.1 * i, ease }}
            >
              <div className="flex-shrink-0 mt-1">{card.icon}</div>
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em", lineHeight: 1.3 }}
                >
                  {t(card.titleKey)}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(240,248,255,0.5)", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}
                >
                  {t(card.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          {[
            { key: "withdrawals.method.wire" },
            { key: "withdrawals.method.paypal" },
            { key: "withdrawals.method.crypto" },
          ].map((method) => (
            <div
              key={method.key}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,191,255,0.06)",
                border: "1px solid rgba(0,191,255,0.1)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 8L7.5 9.5L10.5 6.5" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="6.5" stroke="#00bfff" strokeWidth="1" opacity="0.5" />
              </svg>
              <span className="text-xs font-medium" style={{ color: "rgba(240,248,255,0.7)", fontFamily: "'Inter',sans-serif" }}>
                {t(method.key)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
