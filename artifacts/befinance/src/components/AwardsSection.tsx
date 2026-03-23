import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const awards = [
  { year: "2024", title: "Best Trading Platform" },
  { year: "2024", title: "Most Trusted Broker" },
  { year: "2023", title: "Best Trading Experience" },
  { year: "2023", title: "Broker with Best Support" },
  { year: "2023", title: "Best Mobile Platform" },
  { year: "2022", title: "Innovative Broker of the Year" },
];

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,191,255,0.04) 0%, #040d18 50%, rgba(0,102,255,0.03) 100%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.12), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          {...blur}
          animate={inView ? blur.animate : blur.initial}
          transition={{ duration: 0.8, ease }}
        >
          <div className="lg:w-1/3 text-center lg:text-left flex-shrink-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L28 11.5L22 18L23.5 26L16 22L8.5 26L10 18L4 11.5L12 10L16 2Z" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.1)" />
              </svg>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Awards &{" "}
              <span style={{ color: "#00bfff" }}>recognition</span>
            </h2>
            <p className="text-sm" style={{ color: "rgba(240,248,255,0.5)", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}>
              Globally recognized for excellence in financial services.
            </p>
          </div>

          <div className="lg:w-2/3 w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, i) => (
                <motion.div
                  key={`${award.year}-${award.title}`}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{
                    background: "rgba(0,191,255,0.04)",
                    border: "1px solid rgba(0,191,255,0.08)",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.08 * i, ease }}
                  whileHover={{ borderColor: "rgba(0,191,255,0.25)", y: -2 }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#00bfff", fontFamily: "'Inter',sans-serif" }}>
                    {award.year}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(240,248,255,0.8)", fontFamily: "'DM Sans',sans-serif" }}>
                    {award.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
