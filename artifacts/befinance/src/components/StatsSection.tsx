import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500000, suffix: "+",   label: "Investidores ativos",  prefix: "" },
  { value: 98,     suffix: "%",   label: "Satisfação dos clientes", prefix: "" },
  { value: 1000,   suffix: "+",   label: "Ativos disponíveis",   prefix: "" },
  { value: 10,     suffix: " bi", label: "Em volume negociado",  prefix: "$" },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step  = target / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = count >= 1000 ? count.toLocaleString("pt-BR") : count;
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden section-glow-border">
      {/* Subtle section bg */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,191,255,0.03) 0%, rgba(4,13,24,1) 50%, rgba(0,102,255,0.03) 100%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.25), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.18), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, filter: "blur(14px)", y: 32 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "tween", duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Stat number — Kyvoo cyan gradient */}
              <div style={{
                fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                letterSpacing: "-0.04em",
                background: "linear-gradient(135deg, #00bfff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              {/* Divider accent */}
              <div className="w-10 mx-auto mb-3"
                style={{ height: "2px", background: "linear-gradient(90deg, #00bfff, transparent)" }} />

              <p style={{
                fontFamily: "'DM Sans','Inter',sans-serif",
                fontSize: "0.875rem",
                color: "rgba(240,248,255,0.55)",
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
