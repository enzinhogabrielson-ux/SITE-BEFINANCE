import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const expo = { type: "tween", duration: 0.85, ease: [0.16, 1, 0.3, 1] } as const;

const faqs = [
  {
    q: "O que é a BeFinance e como ela funciona?",
    a: "A BeFinance é uma plataforma de trading regulamentada que permite investir em ações, criptomoedas, ETFs, commodities e mais de 1000 ativos. Após criar sua conta gratuita, você recebe R$10.000 em conta de treinamento para praticar sem risco antes de investir dinheiro real.",
  },
  {
    q: "É preciso ter experiência para operar na BeFinance?",
    a: "Não! Nossa plataforma foi projetada para iniciantes e profissionais. Temos tutoriais integrados, uma biblioteca com mais de 200 horas de conteúdo educacional, webinars ao vivo com especialistas e ferramentas de análise automática para te guiar em cada decisão.",
  },
  {
    q: "A BeFinance é uma plataforma segura e regulamentada?",
    a: "Sim. Somos totalmente regulamentados pela CVM (Comissão de Valores Mobiliários) e pelo Banco Central do Brasil. Utilizamos criptografia SSL 256-bit, autenticação de dois fatores e segregação de contas para garantir máxima proteção dos seus fundos.",
  },
  {
    q: "Qual o valor mínimo para começar a operar?",
    a: "Você pode começar com apenas R$50 na BeFinance. Não exigimos depósito mínimo alto — democratizamos o acesso ao mercado financeiro para que qualquer pessoa possa investir. Operamos com 0% de comissão e os menores spreads do mercado brasileiro.",
  },
  {
    q: "Posso sacar meus lucros quando quiser?",
    a: "Sim, você pode solicitar saques a qualquer momento sem burocracia. Processamos retiradas em até 24 horas via PIX (instantâneo), TED/DOC ou transferência bancária. Não há taxas ocultas ou períodos de carência para saques.",
  },
  {
    q: "Quais ativos posso negociar na BeFinance?",
    a: "Oferecemos mais de 1000 ativos incluindo: ações brasileiras e internacionais (B3, NYSE, NASDAQ), criptomoedas (BTC, ETH, SOL e +200 moedas), ETFs, commodities (ouro, petróleo, soja), pares de moedas (Forex) e contratos futuros. Tudo em uma única plataforma.",
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
        {/* Header */}
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
              <span className="badge-text">Perguntas frequentes</span>
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
            Perguntas{" "}
            <span className="shimmer-text">mais frequentes</span>
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
            Encontre respostas para as dúvidas mais comuns sobre a BeFinance.
          </motion.p>
        </div>

        {/* Accordion */}
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
              {/* Question */}
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

              {/* Answer */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...expo, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p style={{ fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "0.9rem", color: "rgba(240,248,255,0.5)", marginBottom: "1rem", letterSpacing: "-0.01em" }}>
            Ainda tem dúvidas?
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
            Falar com suporte
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
