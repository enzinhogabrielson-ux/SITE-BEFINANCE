import { motion } from "framer-motion";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const avatars = [
  { initials: "CM", color: "#00bfff" },
  { initials: "AL", color: "#0099ff" },
  { initials: "RF", color: "#00d4ff" },
  { initials: "FC", color: "#0066ff" },
  { initials: "MO", color: "#00e5ff" },
  { initials: "JS", color: "#00bfff" },
];

const trustedLogos = [
  { name: "CVM", label: "Regulamentada" },
  { name: "B3", label: "Integrada" },
  { name: "BACEN", label: "Autorizada" },
  { name: "SSL", label: "Criptografada" },
];

export default function SocialProofSection() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(4,13,24,0) 0%, rgba(2,10,22,0.6) 50%, rgba(4,13,24,0) 100%)" }}/>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.15), transparent)" }}/>
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.1), transparent)" }}/>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)", y: 28 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ ...expo }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Avatars + text */}
          <div className="flex items-center gap-5">
            {/* Stacked avatars */}
            <div className="flex items-center">
              {avatars.map((av, i) => (
                <div
                  key={i}
                  style={{
                    width: "38px", height: "38px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${av.color}, #0044aa)`,
                    border: "2.5px solid #040d18",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginLeft: i === 0 ? 0 : "-10px",
                    position: "relative", zIndex: avatars.length - i,
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 700, fontSize: "0.65rem", color: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {av.initials}
                </div>
              ))}
            </div>

            <div>
              <p style={{
                fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                fontWeight: 700, fontSize: "1.05rem",
                color: "#fff", letterSpacing: "-0.025em", marginBottom: "0.15rem",
              }}>
                Junte-se a{" "}
                <span style={{ color: "#00bfff" }}>+500.000 investidores</span>
              </p>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#FFB800">
                    <path d="M6.5 1L7.8 4.5H11.5L8.5 6.8L9.7 10.5L6.5 8.3L3.3 10.5L4.5 6.8L1.5 4.5H5.2L6.5 1Z"/>
                  </svg>
                ))}
                <span style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.78rem", color: "rgba(240,248,255,0.5)", letterSpacing: "-0.01em", marginLeft: "2px" }}>
                  4.9 / 5 — mais de 12.000 avaliações
                </span>
              </div>
            </div>
          </div>

          {/* Trust logos */}
          <div className="flex items-center gap-6">
            {trustedLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...expo, delay: 0.05 + i * 0.06 }}
                className="flex flex-col items-center gap-1"
              >
                <div style={{
                  fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                  fontWeight: 800, fontSize: "1rem",
                  color: "rgba(240,248,255,0.65)", letterSpacing: "-0.02em",
                }}>
                  {logo.name}
                </div>
                <div style={{
                  fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.65rem",
                  color: "rgba(240,248,255,0.3)", letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>
                  {logo.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
