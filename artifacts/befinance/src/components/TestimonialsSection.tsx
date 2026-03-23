import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonialDefs = [
  { nameKey: "testimonials.t1.name", roleKey: "testimonials.t1.role", locationKey: "testimonials.t1.location", textKey: "testimonials.t1.text", avatar: "JM", rating: 5, color: "#00bfff" },
  { nameKey: "testimonials.t2.name", roleKey: "testimonials.t2.role", locationKey: "testimonials.t2.location", textKey: "testimonials.t2.text", avatar: "SW", rating: 5, color: "#0099ff" },
  { nameKey: "testimonials.t3.name", roleKey: "testimonials.t3.role", locationKey: "testimonials.t3.location", textKey: "testimonials.t3.text", avatar: "RC", rating: 5, color: "#00d4ff" },
  { nameKey: "testimonials.t4.name", roleKey: "testimonials.t4.role", locationKey: "testimonials.t4.location", textKey: "testimonials.t4.text", avatar: "ER", rating: 5, color: "#0066ff" },
  { nameKey: "testimonials.t5.name", roleKey: "testimonials.t5.role", locationKey: "testimonials.t5.location", textKey: "testimonials.t5.text", avatar: "MT", rating: 5, color: "#00e5ff" },
  { nameKey: "testimonials.t6.name", roleKey: "testimonials.t6.role", locationKey: "testimonials.t6.location", textKey: "testimonials.t6.text", avatar: "JA", rating: 5, color: "#00bfff" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFB800">
          <path d="M7 1L8.8 5.5H13.5L9.6 8.4L11.2 13L7 10.2L2.8 13L4.4 8.4L0.5 5.5H5.2L7 1Z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialDefs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    testimonialDefs[current % testimonialDefs.length],
    testimonialDefs[(current + 1) % testimonialDefs.length],
    testimonialDefs[(current + 2) % testimonialDefs.length],
  ];

  return (
    <section
      id="depoimentos"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020810 0%, #040d18 100%)" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,191,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.2)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00bfff" }} />
            <span style={{ color: "#00bfff", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
              {t("testimonials.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            {t("testimonials.title1")}{" "}
            <span style={{ background: "linear-gradient(135deg, #00bfff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("testimonials.titleHighlight")}
            </span>{" "}
            {t("testimonials.title2")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(240,248,255,0.6)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t("testimonials.body")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10" style={{ minHeight: "320px" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.nameKey}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(4, 20, 40, 0.6)",
                  border: "1px solid rgba(0, 191, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="mb-4" style={{ color: "rgba(0,191,255,0.3)", fontSize: "2rem", lineHeight: 1, fontFamily: "Georgia, serif" }}>
                  &ldquo;
                </div>

                <StarRating count={testimonial.rating} />

                <p
                  className="mt-4 mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(240,248,255,0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {t(testimonial.textKey)}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, #0066ff)`, color: "#fff", fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>
                      {t(testimonial.nameKey)}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(240,248,255,0.45)" }}>
                      {t(testimonial.roleKey)} · {t(testimonial.locationKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2">
          {testimonialDefs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: current === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: current === i ? "#00bfff" : "rgba(0,191,255,0.2)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
