import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000 ? count.toLocaleString("en-US") : count;
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

const badgeKeys = [
  {
    labelKey: "trust.modernPlatform",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="13" rx="2.5" stroke="#00bfff" strokeWidth="1.5" />
        <path d="M7 20H15" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 17V20" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    labelKey: "trust.exclusiveFeatures",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 7.5L19.5 8L15 12.5L16.5 18.5L11 15.5L5.5 18.5L7 12.5L2.5 8L8.5 7.5L11 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    labelKey: "trust.easyStart",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#00bfff" strokeWidth="1.5" />
        <path d="M8 11L10.5 13.5L14.5 8.5" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    labelKey: "trust.support247",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#00bfff" strokeWidth="1.5" />
        <path d="M11 6V11L14 13" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    labelKey: "trust.fastWithdrawals",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 2L6 12H11L10 20L16 10H11L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    labelKey: "trust.trustedBroker",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L11 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 11L10 13L14 9" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const stats = [
  { value: 500, suffix: "K+", prefix: "", labelKey: "trust.stat.traders" },
  { value: 10, suffix: "B+", prefix: "$", labelKey: "trust.stat.volume" },
  { value: 98, suffix: "%", prefix: "", labelKey: "trust.stat.satisfaction" },
  { value: 40, suffix: "+", prefix: "", labelKey: "trust.stat.countries" },
];

export default function TrustSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #040d18 0%, #061220 50%, #040d18 100%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.15)" }}
          >
            <span style={{ color: "#00bfff", fontSize: "14px", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>
              {t("trust.badge")}
            </span>
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            {t("trust.title1")}{" "}
            <br className="hidden md:block" />
            {t("trust.title2")}{" "}
            <br className="hidden md:block" />
            {t("trust.title3")}{" "}
            <span style={{ color: "#00bfff" }}>{t("trust.title4")}</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,248,255,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}
          >
            {t("trust.body")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badgeKeys.map((badge, i) => (
            <motion.div
              key={badge.labelKey}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center"
              style={{
                background: "rgba(0,191,255,0.04)",
                border: "1px solid rgba(0,191,255,0.08)",
              }}
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.7, delay: 0.1 * i, ease }}
              whileHover={{ y: -4, borderColor: "rgba(0,191,255,0.25)" }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: "rgba(0,191,255,0.08)" }}>
                {badge.icon}
              </div>
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(240,248,255,0.8)", fontFamily: "'Inter',sans-serif" }}
              >
                {t(badge.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              className="text-center"
              {...blur}
              animate={inView ? blur.animate : blur.initial}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-sm" style={{ color: "rgba(240,248,255,0.5)", fontFamily: "'Inter',sans-serif" }}>
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
