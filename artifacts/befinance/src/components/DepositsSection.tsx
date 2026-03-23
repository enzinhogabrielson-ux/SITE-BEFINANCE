import { motion } from "framer-motion";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const methods = [
  {
    name: "Wire Transfer",
    detail: "Bank transfer",
    amount: "$ 50",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#00bfff" strokeWidth="1.5" fill="rgba(0,191,255,0.06)"/>
        <path d="M4 11H24" stroke="#00bfff" strokeWidth="1"/>
        <rect x="8" y="14" width="5" height="3" rx="1" fill="#00bfff" opacity="0.5"/>
        <rect x="15" y="14" width="5" height="3" rx="1" fill="#00bfff" opacity="0.3"/>
      </svg>
    ),
    color: "#00bfff",
  },
  {
    name: "Visa",
    detail: "Credit/Debit",
    amount: "$ 10",
    icon: (
      <svg width="36" height="18" viewBox="0 0 36 18" fill="none">
        <text x="0" y="14" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" fill="#1a1f71">VISA</text>
      </svg>
    ),
    color: "#1a1f71",
    iconBg: "#e8eaf6",
  },
  {
    name: "Mastercard",
    detail: "Credit/Debit",
    amount: "$ 10",
    icon: (
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
        <circle cx="11" cy="12" r="10" fill="#eb001b"/>
        <circle cx="21" cy="12" r="10" fill="#f79e1b"/>
        <path d="M16 5.2C18.1 6.8 19.5 9.2 19.5 12S18.1 17.2 16 18.8C13.9 17.2 12.5 14.8 12.5 12S13.9 6.8 16 5.2Z" fill="#ff5f00"/>
      </svg>
    ),
    color: "#f79e1b",
  },
  {
    name: "PayPal",
    detail: "PayPal Account",
    amount: "$ 30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" fill="#003087" opacity="0.9"/>
        <text x="14" y="19" fontSize="12" fontWeight="700" textAnchor="middle" fill="white" fontFamily="Arial">P</text>
      </svg>
    ),
    color: "#003087",
  },
  {
    name: "Skrill",
    detail: "E-wallet",
    amount: "$ 20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" fill="#862165" opacity="0.9"/>
        <text x="14" y="19" fontSize="12" fontWeight="700" textAnchor="middle" fill="white" fontFamily="Arial">S</text>
      </svg>
    ),
    color: "#862165",
  },
  {
    name: "Neteller",
    detail: "E-wallet",
    amount: "$ 10",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" fill="#83c43e" opacity="0.9"/>
        <text x="14" y="19" fontSize="12" fontWeight="700" textAnchor="middle" fill="white" fontFamily="Arial">N</text>
      </svg>
    ),
    color: "#83c43e",
  },
];

export default function DepositsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}/>
      <div className="absolute -left-40 top-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.06) 0%, transparent 70%)", filter: "blur(50px)" }}/>
      <div className="absolute -right-40 bottom-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)", filter: "blur(50px)" }}/>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo }}
            className="inline-flex justify-center mb-5"
          >
            <div className="hero-badge">
              <span className="badge-tag">Payments</span>
              <span className="badge-text">Fast deposits and withdrawals</span>
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
            Deposits and withdrawals{" "}
            <span className="shimmer-text">fast and secure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.16 }}
            style={{
              fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "1rem",
              color: "rgba(240,248,255,0.6)", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65, letterSpacing: "-0.01em",
            }}
          >
            Choose from multiple payment methods with instant processing and no hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {methods.map((method, i) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: i * 0.06 }}
              className="kyvoo-card p-5 rounded-2xl flex flex-col items-center gap-3 cursor-default"
              style={{
                background: "rgba(4,20,40,0.6)",
                border: "1px solid rgba(0,191,255,0.09)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: method.iconBg ?? "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {method.icon}
              </div>
              <div className="text-center">
                <p style={{ fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#fff", letterSpacing: "-0.02em" }}>
                  {method.name}
                </p>
                <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.7rem", color: "rgba(240,248,255,0.4)", letterSpacing: "-0.01em" }}>
                  {method.detail}
                </p>
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                style={{ background: "rgba(0,191,255,0.07)", border: "1px solid rgba(0,191,255,0.14)" }}>
                <span style={{ color: "#00bfff", fontSize: "0.7rem", fontFamily: "'DM Sans','Inter',sans-serif", fontWeight: 600 }}>
                  {method.amount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...expo, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          {[
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L11.5 7H4.5L8 1Z" fill="#FF6B35" />
                  <path d="M4.5 9H11.5L11 15H5L4.5 9Z" fill="#FF6B35" opacity="0.7" />
                </svg>
              ),
              text: "Instant deposit processing"
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="7" width="10" height="7" rx="1" stroke="#00BFFF" strokeWidth="1.2" />
                  <path d="M6 7V5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5V7" stroke="#00BFFF" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              ),
              text: "SSL 256-bit on all transactions"
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V14" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 11L8 14L11 11" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              text: "Withdrawal within 24 hours"
            },
            {
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#0066FF" strokeWidth="1.5" fill="none" />
                  <text x="8" y="10" fontSize="10" fontWeight="700" textAnchor="middle" fill="#0066FF" fontFamily="Arial, sans-serif">0</text>
                </svg>
              ),
              text: "Zero deposit fees"
            },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                {b.icon}
              </div>
              <span style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.82rem", color: "rgba(240,248,255,0.5)", letterSpacing: "-0.01em" }}>
                {b.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
