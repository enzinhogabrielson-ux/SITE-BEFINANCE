import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const BeFinanceIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect x="8" y="8" width="14" height="14" rx="2" fill="#00bfff" transform="rotate(45 15 15)" />
    <rect x="26" y="8" width="14" height="14" rx="2" fill="#00bfff" transform="rotate(45 33 15)" opacity="0.7" />
    <rect x="8" y="26" width="14" height="14" rx="2" fill="#00bfff" transform="rotate(45 15 33)" opacity="0.7" />
    <rect x="26" y="26" width="14" height="14" rx="2" fill="#00bfff" transform="rotate(45 33 33)" opacity="0.5" />
  </svg>
);

const VisaLogo = () => (
  <svg width="64" height="22" viewBox="0 0 64 22" fill="none">
    <text x="0" y="18" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif" fill="#1a1f71" letterSpacing="1">VISA</text>
  </svg>
);

const MastercardLogo = () => (
  <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
    <circle cx="20" cy="18" r="14" fill="#eb001b" />
    <circle cx="36" cy="18" r="14" fill="#f79e1b" />
    <path d="M28 7.5C30.8 9.6 32.5 13.1 32.5 18S30.8 26.4 28 28.5C25.2 26.4 23.5 22.9 23.5 18S25.2 9.6 28 7.5Z" fill="#ff5f00" />
  </svg>
);

const PayPalLogo = () => (
  <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
    <text x="4" y="26" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" fill="#003087">Pay</text>
    <text x="32" y="26" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" fill="#0070e0">Pal</text>
  </svg>
);

const SkrillLogo = () => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
    <circle cx="24" cy="18" r="16" fill="#862165" opacity="0.15" />
    <text x="24" y="24" textAnchor="middle" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" fill="#862165">S</text>
  </svg>
);

const NetellerLogo = () => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
    <circle cx="24" cy="18" r="16" fill="#83c43e" opacity="0.15" />
    <text x="24" y="24" textAnchor="middle" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" fill="#83c43e">N</text>
  </svg>
);

const cardDefs = [
  { logo: <BeFinanceIcon size={52} />, amount: "$500.00", labelKey: "deposits.label.deposit", col: 0 },
  { logo: <BeFinanceIcon size={52} />, amount: "$50.00", labelKey: "deposits.label.withdrawal", col: 1 },
  { logo: <VisaLogo />, amount: "$50.00", labelKey: "deposits.label.withdrawal", col: 0 },
  { logo: <MastercardLogo />, amount: "$30.00", labelKey: "deposits.label.deposit", col: 1 },
  { logo: <PayPalLogo />, amount: "$100.00", labelKey: "deposits.label.deposit", col: 0 },
  { logo: <SkrillLogo />, amount: "$20.00", labelKey: "deposits.label.withdrawal", col: 1 },
  { logo: <NetellerLogo />, amount: "$10.00", labelKey: "deposits.label.deposit", col: 0 },
];

function PaymentCard({
  logo,
  amount,
  label,
  index,
  inView,
}: {
  logo: React.ReactNode;
  amount: string;
  label: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col items-center justify-center gap-3"
      style={{
        background: "rgba(8, 16, 32, 0.8)",
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: "160px",
      }}
      {...blur}
      animate={inView ? blur.animate : blur.initial}
      transition={{ duration: 0.7, delay: 0.08 * index, ease }}
      whileHover={{
        borderColor: "rgba(0,191,255,0.2)",
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      <div className="flex items-center justify-center h-14">
        {logo}
      </div>
      <div className="text-center">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.35rem",
            color: "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          {amount}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(240,248,255,0.45)",
            marginTop: "4px",
          }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function DepositsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const leftCol = cardDefs.filter((c) => c.col === 0);
  const rightCol = cardDefs.filter((c) => c.col === 1);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...blur}
            animate={inView ? blur.animate : blur.initial}
            transition={{ duration: 0.8, ease }}
          >
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
              style={{
                background: "rgba(0,191,255,0.08)",
                border: "1px solid rgba(0,191,255,0.15)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="5" width="16" height="12" rx="2.5" stroke="#00bfff" strokeWidth="1.5" />
                <path d="M3 9H19" stroke="#00bfff" strokeWidth="1" opacity="0.5" />
                <rect x="6" y="12" width="4" height="2" rx="0.5" fill="#00bfff" opacity="0.6" />
              </svg>
            </motion.div>

            <h2
              style={{
                fontFamily: "'DM Sans', 'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#fff",
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                marginBottom: "1.2rem",
              }}
            >
              {t("deposits.title")}{" "}
              <span className="shimmer-text">{t("deposits.titleHighlight")}</span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(240,248,255,0.5)",
                lineHeight: 1.7,
                maxWidth: "380px",
              }}
            >
              {t("deposits.body")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {leftCol.map((card, i) => (
                <PaymentCard
                  key={`left-${i}`}
                  logo={card.logo}
                  amount={card.amount}
                  label={t(card.labelKey)}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-12">
              {rightCol.map((card, i) => (
                <PaymentCard
                  key={`right-${i}`}
                  logo={card.logo}
                  amount={card.amount}
                  label={t(card.labelKey)}
                  index={i + leftCol.length}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
