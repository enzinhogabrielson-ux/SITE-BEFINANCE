import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const regulators = [
  { name: "IFMRRC", desc: "International Financial Market Relations Regulation Center" },
  { name: "FCA", desc: "Financial Conduct Authority" },
  { name: "SSL", desc: "256-bit encryption" },
  { name: "AML", desc: "Anti-Money Laundering" },
];

export default function RegulationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,191,255,0.05) 0%, #040d18 40%, #040d18 60%, rgba(0,102,255,0.04) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            {...blur}
            animate={inView ? blur.animate : blur.initial}
            transition={{ duration: 0.8, ease }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              BeFinance is a licensed and{" "}
              <span style={{ color: "#00bfff" }}>regulated</span>{" "}
              online broker
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}
            >
              We operate following the highest regulatory standards in the financial market.
              Your security is our absolute priority in every operation.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(0,191,255,0.1)",
                border: "1px solid rgba(0,191,255,0.25)",
                color: "#00bfff",
                fontFamily: "'Inter',sans-serif",
              }}
            >
              Learn more about regulation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            {...blur}
            animate={inView ? blur.animate : blur.initial}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            {regulators.map((reg, i) => (
              <motion.div
                key={reg.name}
                className="kyvoo-card rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                style={{
                  background: "rgba(0,191,255,0.04)",
                  border: "1px solid rgba(0,191,255,0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-1"
                  style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.15)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3L24 8V14C24 21 19.6 27 14 28.5C8.4 27 4 21 4 14V8L14 3Z" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.08)" />
                    <path d="M10 14L13 17L18 11" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-lg font-bold" style={{ color: "#00bfff", fontFamily: "'DM Sans',sans-serif" }}>
                  {reg.name}
                </span>
                <span className="text-xs" style={{ color: "rgba(240,248,255,0.5)", fontFamily: "'Inter',sans-serif" }}>
                  {reg.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
