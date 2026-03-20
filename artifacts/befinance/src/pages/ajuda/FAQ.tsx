import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blur = { initial: { opacity: 0, filter: "blur(12px)", y: 24 }, animate: { opacity: 1, filter: "blur(0px)", y: 0 } };
const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  { q: "O que é a BeFinance?", a: "A BeFinance é uma corretora digital que permite negociar opções digitais, ações, commodities e índices. Nossa plataforma é segura, regulamentada e acessível para traders de todos os níveis." },
  { q: "Qual o depósito mínimo?", a: "O depósito mínimo na BeFinance é de apenas $10. Você também pode começar com uma conta demo gratuita com $10.000 virtuais." },
  { q: "Como faço um depósito?", a: "Aceitamos PIX (processamento instantâneo), boleto bancário, cartão de crédito e transferência bancária. Basta acessar a seção de depósitos na plataforma." },
  { q: "Quanto tempo leva para sacar?", a: "Saques via PIX são processados em até 24 horas. Boleto e transferência bancária podem levar de 1 a 3 dias úteis." },
  { q: "A plataforma é segura?", a: "Sim. Utilizamos criptografia SSL 256-bit, autenticação em dois fatores, e somos regulamentados pela CVM e BACEN. Fundos dos clientes são mantidos em contas segregadas." },
  { q: "Posso negociar pelo celular?", a: "Sim. Nosso app está disponível para iOS e Android, com todas as funcionalidades da versão web." },
  { q: "O que são opções digitais?", a: "Opções digitais são instrumentos financeiros onde você prevê a direção do preço de um ativo em um período determinado. Se sua previsão estiver correta, você recebe um retorno de até 92%." },
  { q: "Como funciona a conta demo?", a: "A conta demo é gratuita e vem com $10.000 virtuais. Você pode praticar estratégias sem risco. O saldo é recarregável ilimitadamente." },
  { q: "A BeFinance cobra comissões?", a: "Não cobramos comissões na maioria das operações. Nossos ganhos vêm dos spreads competitivos, que estão entre os mais baixos do mercado." },
  { q: "Como verifico minha conta?", a: "Para verificação KYC, envie um documento de identidade (RG ou CNH) e um comprovante de residência recente. O processo leva até 48 horas." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{ background: open ? "rgba(0,191,255,0.06)" : "rgba(0,191,255,0.03)", border: `1px solid rgba(0,191,255,${open ? 0.15 : 0.06})` }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm md:text-base" style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif" }}>{q}</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", flexShrink: 0, marginLeft: 16 }}
        >
          <path d="M10 4V16M4 10H16" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-sm" style={{ color: "rgba(240,248,255,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen" style={{ background: "#040d18", fontFamily: "'DM Sans','Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,191,255,0.04) 0%, #040d18 40%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...blur} animate={blur.animate} transition={{ duration: 0.8, ease }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.15)" }}>
              <span style={{ color: "#00bfff", fontSize: "13px", fontWeight: 600 }}>Ajuda</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Perguntas <span style={{ color: "#00bfff" }}>Frequentes</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(240,248,255,0.6)", fontFamily: "'Inter',sans-serif" }}>
              Encontre respostas rápidas para as dúvidas mais comuns sobre a BeFinance.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            className="p-10 md:p-14 rounded-3xl"
            style={{ background: "rgba(4,20,40,0.45)", border: "1px solid rgba(0,191,255,0.12)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'DM Sans',sans-serif", color: "#fff" }}>
              Não encontrou sua resposta?
            </h2>
            <p className="text-sm mb-6" style={{ color: "rgba(240,248,255,0.55)", fontFamily: "'Inter',sans-serif" }}>
              Fale com nossa equipe de suporte 24/7.
            </p>
            <a href="/ajuda/contato" className="btn-glow">
              <span className="btn-glow-face">
                Falar com suporte
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
