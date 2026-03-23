import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const faqs = [
  {
    q: "What is BeFinance and how does it work?",
    a: "BeFinance is a regulated trading platform that allows you to invest in stocks, indices, ETFs, commodities and over 1,000 assets. After creating your free account, you receive $10,000 in a training account to practice risk-free before investing real money.",
  },
  {
    q: "Do I need experience to trade on BeFinance?",
    a: "Not at all! Our platform was designed for beginners and professionals alike. We have integrated tutorials, a library with over 200 hours of educational content, live webinars with experts and automatic analysis tools to guide you in every decision.",
  },
  {
    q: "Is BeFinance a safe and regulated platform?",
    a: "Yes. We are fully regulated and compliant with international financial standards. We use SSL 256-bit encryption, two-factor authentication and account segregation to ensure maximum protection of your funds.",
  },
  {
    q: "What is the minimum amount to start trading?",
    a: "You can start with just $10 on BeFinance. We don't require a high minimum deposit — we democratize access to financial markets so anyone can invest. We operate with 0% commission and the lowest spreads in the market.",
  },
  {
    q: "Can I withdraw my profits whenever I want?",
    a: "Yes, you can request withdrawals at any time without bureaucracy. We process withdrawals within 24 hours via wire transfer, credit/debit card or e-wallets. There are no hidden fees or waiting periods for withdrawals.",
  },
  {
    q: "What assets can I trade on BeFinance?",
    a: "We offer over 1,000 assets including: international stocks (NYSE, NASDAQ, LSE), ETFs, commodities (gold, oil, silver), global indices and futures contracts. All on a single platform.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="ajuda" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,191,255,0.04) 0%, transparent 65%)", filter: "blur(60px)" }}/>

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo }}
            className="inline-flex justify-center mb-5"
          >
            <div className="hero-badge">
              <span className="badge-tag">FAQ</span>
              <span className="badge-text">Frequently asked questions</span>
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
            Frequently{" "}
            <span className="shimmer-text">asked questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ ...expo, delay: 0.16 }}
            style={{
              fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "1rem",
              color: "rgba(240,248,255,0.6)", maxWidth: "440px", margin: "0 auto", lineHeight: 1.65, letterSpacing: "-0.01em",
            }}
          >
            Find answers to the most common questions about BeFinance.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ ...expo, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: open === i ? "rgba(0,191,255,0.04)" : "rgba(4,20,40,0.5)",
                border: open === i ? "1px solid rgba(0,191,255,0.2)" : "1px solid rgba(0,191,255,0.08)",
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between p-5 gap-4"
                style={{ cursor: "pointer", background: "none", border: "none" }}
              >
                <span style={{
                  fontFamily: "'DM Sans','Plus Jakarta Sans',sans-serif",
                  fontWeight: 600, fontSize: "0.95rem",
                  color: open === i ? "#fff" : "rgba(240,248,255,0.85)",
                  letterSpacing: "-0.02em", lineHeight: 1.4,
                  transition: "color 0.2s ease",
                }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: open === i ? "rgba(0,191,255,0.15)" : "rgba(0,191,255,0.06)",
                    border: open === i ? "1px solid rgba(0,191,255,0.3)" : "1px solid rgba(0,191,255,0.1)",
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M5.5 1.5V9.5M1.5 5.5H9.5" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 pb-5">
                      <div style={{ width: "100%", height: "1px", background: "rgba(0,191,255,0.08)", marginBottom: "1rem" }} />
                      <p style={{
                        fontFamily: "'DM Sans','Inter',sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(240,248,255,0.6)",
                        lineHeight: 1.7,
                        letterSpacing: "-0.01em",
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...expo, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.9rem", color: "rgba(240,248,255,0.5)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Still have questions?
          </p>
          <a href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              fontFamily: "'DM Sans',sans-serif", color: "#00bfff",
              border: "1px solid rgba(0,191,255,0.25)",
              background: "rgba(0,191,255,0.05)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,191,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,191,255,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,191,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,191,255,0.25)"; }}
          >
            Talk to support
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
