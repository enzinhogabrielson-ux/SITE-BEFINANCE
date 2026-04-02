import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const featureCardKeys = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1.5" y="1.5" width="19" height="19" rx="5" stroke="#00bfff" strokeWidth="1.4"/>
        <path d="M5 15L8.5 10L12 12.5L17 6" stroke="#00bfff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="6" r="1.8" fill="#00bfff"/>
      </svg>
    ),
    titleKey: "platform.advancedCharts",
    descKey: "platform.advancedCharts.desc",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#00bfff" strokeWidth="1.4"/>
        <path d="M11 6.5V11L14 13.5" stroke="#00bfff" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="1.5" fill="#00bfff"/>
      </svg>
    ),
    titleKey: "platform.execution",
    descKey: "platform.execution.desc",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="14" rx="3" stroke="#00bfff" strokeWidth="1.4"/>
        <path d="M7 5V3M15 5V3" stroke="#00bfff" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="6" y="11" width="4" height="3" rx="1" fill="#00bfff" opacity="0.7"/>
        <rect x="13" y="11" width="4" height="3" rx="1" fill="#00bfff" opacity="0.35"/>
      </svg>
    ),
    titleKey: "platform.demoAccount",
    descKey: "platform.demoAccount.desc",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L20 6.5V13C20 17.5 16 21 11 22C6 21 2 17.5 2 13V6.5L11 2Z" stroke="#00bfff" strokeWidth="1.4" fill="rgba(0,191,255,0.05)"/>
        <path d="M7.5 11L10 13.5L14.5 8.5" stroke="#00bfff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: "platform.multiAssets",
    descKey: "platform.multiAssets.desc",
  },
];

function LaptopMockup() {
  const laptopRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: laptopRef,
    offset: ["start 0.9", "center 0.55"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [-78, 6]);
  const lidRotateX = useSpring(rawRotateX, { stiffness: 80, damping: 20, mass: 0.8 });

  const screenOpacity = useTransform(scrollYProgress, [0.3, 0.75], [0, 1]);
  const baseScale    = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);

  return (
    <div
      ref={laptopRef}
      style={{ width: "100%", maxWidth: "680px", margin: "0 auto", perspective: "1400px" }}
    >
      <motion.div style={{ transformStyle: "preserve-3d", scale: baseScale }}>
        <motion.div
          style={{
            transformOrigin: "bottom center",
            rotateX: lidRotateX,
            transformStyle: "preserve-3d",
          }}
        >
          <div style={{
            width: "100%",
            aspectRatio: "16/10",
            background: "linear-gradient(160deg, #141a2a, #0c1120)",
            border: "2.5px solid #1e2a3d",
            borderBottom: "2px solid #111826",
            borderRadius: "14px 14px 0 0",
            padding: "9px",
            boxShadow:
              "0 0 0 1px rgba(0,191,255,0.06), " +
              "0 30px 90px rgba(0,0,0,0.9), " +
              "inset 0 1px 0 rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.18), transparent)", zIndex: 2 }}/>
            <div style={{
              position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%)",
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#0c1120", border: "1px solid #1a2238", zIndex: 3
            }}/>
            <motion.div style={{
              width: "100%", height: "100%",
              background: "#060c1a",
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              opacity: screenOpacity,
            }}>
              <img
                src={import.meta.env.BASE_URL + "laptop-screen.png"}
                alt="BeFinance trading platform"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: "top left",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
              }}/>
            </motion.div>
            <div style={{
              position: "absolute", top: 0, left: 0, width: "3px", height: "100%",
              background: "linear-gradient(180deg, rgba(255,255,255,0.06), transparent)",
              borderRadius: "14px 0 0 0",
            }}/>
          </div>
        </motion.div>

        <div style={{
          width: "100%", height: "7px",
          background: "linear-gradient(180deg, #1a2438 0%, #0e1624 100%)",
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            position: "absolute", left: "50%", transform: "translateX(-50%)",
            width: "18%", height: "100%",
            background: "linear-gradient(180deg, #0d1830, #0a1220)",
            borderRadius: "0 0 4px 4px",
          }}/>
        </div>

        <div style={{
          width: "103%", marginLeft: "-1.5%",
          background: "linear-gradient(180deg, #111928 0%, #0c1420 100%)",
          border: "2px solid #1a2538",
          borderTop: "none",
          borderRadius: "0 0 14px 14px",
          padding: "10px 14px 14px",
          boxShadow: "0 28px 70px rgba(0,0,0,0.75)",
          position: "relative",
        }}>
          {[13, 12, 11, 5].map((cols, ri) => (
            <div key={ri} style={{
              display: "flex", gap: "5px", marginBottom: ri < 3 ? "5px" : "0",
              width: ri === 3 ? "72%" : `${100 - ri * 4}%`,
              margin: ri === 3 ? "0 auto" : undefined,
            }}>
              {Array.from({ length: cols }).map((_, ki) => (
                <div key={ki} style={{
                  flex: 1, height: "11px",
                  background: "rgba(255,255,255,0.038)",
                  border: "1px solid rgba(255,255,255,0.055)",
                  borderRadius: "2.5px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.025)",
                }}/>
              ))}
            </div>
          ))}
          <div style={{
            width: "26%", height: "28px",
            background: "rgba(255,255,255,0.022)",
            border: "1px solid rgba(255,255,255,0.045)",
            borderRadius: "6px",
            margin: "9px auto 0",
          }}/>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
            background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.05), transparent)",
            borderRadius: "0 0 14px 14px",
          }}/>
        </div>

        <div style={{
          width: "75%", height: "18px", margin: "3px auto 0",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
          filter: "blur(8px)",
          position: "relative",
          zIndex: 0,
        }}/>
      </motion.div>
    </div>
  );
}

export default function PlatformSection() {
  const { t } = useLanguage();

  return (
    <section
      id="plataforma"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020814 0%, #040d18 100%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,191,255,0.05) 0%, transparent 65%)", filter: "blur(40px)" }}/>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.15), transparent)" }}/>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo }}
            className="inline-flex justify-center mb-5"
          >
            <div className="hero-badge">
              <span className="badge-tag">{t("platform.badge")}</span>
              <span className="badge-text">{t("platform.badgeText")}</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.08 }}
            style={{
              fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
              fontWeight: 700, fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              color: "#fff", letterSpacing: "-0.035em", marginBottom: "1rem",
            }}
          >
            {t("platform.title")}{" "}
            <span className="shimmer-text">{t("platform.titleHighlight")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.16 }}
            style={{
              fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "1rem",
              color: "rgba(240,248,255,0.6)", maxWidth: "480px", margin: "0 auto",
              lineHeight: 1.65, letterSpacing: "-0.01em",
            }}
          >
            {t("platform.body")}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 flex-shrink-0 w-full lg:w-60 order-2 lg:order-1">
            {featureCardKeys.slice(0, 2).map((f, i) => (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, filter: "blur(12px)", x: -24 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                viewport={{ once: true }}
                transition={{ ...expo, delay: 0.2 + i * 0.1 }}
                className="kyvoo-card flex-1 p-5 rounded-2xl"
                style={{ background: "rgba(4,20,40,0.6)", border: "1px solid rgba(0,191,255,0.1)", backdropFilter: "blur(12px)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.14)" }}>
                  {f.icon}
                </div>
                <h4 style={{ fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>
                  {t(f.titleKey)}
                </h4>
                <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.78rem", color: "rgba(240,248,255,0.5)", letterSpacing: "-0.01em", lineHeight: 1.5 }}>
                  {t(f.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 w-full max-w-2xl order-1 lg:order-2">
            <LaptopMockup />
          </div>

          <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 flex-shrink-0 w-full lg:w-60 order-3">
            {featureCardKeys.slice(2, 4).map((f, i) => (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, filter: "blur(12px)", x: 24 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                viewport={{ once: true }}
                transition={{ ...expo, delay: 0.2 + i * 0.1 }}
                className="kyvoo-card flex-1 p-5 rounded-2xl"
                style={{ background: "rgba(4,20,40,0.6)", border: "1px solid rgba(0,191,255,0.1)", backdropFilter: "blur(12px)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.14)" }}>
                  {f.icon}
                </div>
                <h4 style={{ fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>
                  {t(f.titleKey)}
                </h4>
                <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.78rem", color: "rgba(240,248,255,0.5)", letterSpacing: "-0.01em", lineHeight: 1.5 }}>
                  {t(f.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
