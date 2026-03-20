import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import { Link, useLocation } from "wouter";

const megaMenuData: Record<string, { items: { title: string; desc: string; href: string }[] }> = {
  Negociação: {
    items: [
      { title: "Opções Digitais", desc: "Retornos de até 92% com operações a partir de $1", href: "/negociacao/opcoes-digitais" },
      { title: "Ações", desc: "Blue chips globais sem comissão", href: "/negociacao/acoes" },
      { title: "Commodities", desc: "Ouro, prata, petróleo e mais", href: "/negociacao/commodities" },
    ],
  },
  Plataforma: {
    items: [
      { title: "Trading Web", desc: "Negocie direto do navegador sem downloads", href: "/plataforma/trading-web" },
      { title: "App Mobile", desc: "iOS e Android com notificações push", href: "/plataforma/app-mobile" },
      { title: "Conta Demo", desc: "$10.000 virtuais para praticar", href: "/plataforma/conta-demo" },
      { title: "Ferramentas Analíticas", desc: "+50 indicadores técnicos profissionais", href: "/plataforma/ferramentas" },
      { title: "Baixar o App", desc: "Disponível na App Store e Google Play", href: "/plataforma/baixar-app" },
    ],
  },
  Sobre: {
    items: [
      { title: "Sobre nós", desc: "Conheça a BeFinance e nossa missão", href: "/sobre/sobre-nos" },
      { title: "Regulamentação", desc: "CVM, BACEN e conformidade global", href: "/sobre/regulamentacao" },
      { title: "Premiações", desc: "Prêmios e reconhecimentos da indústria", href: "/sobre/premiacoes" },
      { title: "Parceiros", desc: "Parceiros institucionais e tecnológicos", href: "/sobre/parceiros" },
      { title: "Afiliados", desc: "Ganhe comissões de até 60%", href: "/sobre/afiliados" },
    ],
  },
  Ajuda: {
    items: [
      { title: "Central de Ajuda", desc: "Respostas para todas as suas dúvidas", href: "/ajuda/central-de-ajuda" },
      { title: "Contato", desc: "Fale conosco por chat, e-mail ou telefone", href: "/ajuda/contato" },
      { title: "Central de Aprendizagem", desc: "Cursos, webinars e tutoriais gratuitos", href: "/ajuda/central-de-aprendizagem" },
      { title: "FAQ", desc: "Perguntas frequentes sobre a plataforma", href: "/ajuda/faq" },
      { title: "Suporte 24/7", desc: "Atendimento humanizado em português", href: "/ajuda/suporte" },
    ],
  },
};

const navLabels = ["Negociação", "Plataforma", "Sobre", "Ajuda"];

const FlagBR = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#009C3B"/>
    <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00"/>
    <circle cx="10" cy="7" r="3.2" fill="#002776"/>
    <path d="M6.9 5.6 Q10 4.2 13.1 5.6" stroke="white" strokeWidth="0.7" fill="none"/>
  </svg>
);

const FlagUS = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#B22234"/>
    {[1,3,5,7,9,11].map(y => <rect key={y} x="0" y={y} width="20" height="1" fill="white"/>)}
    <rect width="8" height="7" fill="#3C3B6E"/>
  </svg>
);

const FlagES = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ borderRadius: "2px", flexShrink: 0 }}>
    <rect width="20" height="14" fill="#AA151B"/>
    <rect y="3.5" width="20" height="7" fill="#F1BF00"/>
  </svg>
);

const languages = [
  { code: "PT", Flag: FlagBR, label: "Português" },
  { code: "EN", Flag: FlagUS, label: "English" },
  { code: "ES", Flag: FlagES, label: "Español" },
];

const megaIcons: Record<string, React.ReactNode> = {
  "Opções Digitais": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20L10 12L14 16L20 8M20 8H15M20 8V13" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Ações": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21M7 14L11 10L15 14L21 8" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Commodities": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Trading Web": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4H20V16H4ZM8 20H16M12 16V20" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "App Mobile": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 18H12.01M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Conta Demo": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Ferramentas Analíticas": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3A1 1 0 0 0 13.3 6.3L2 17.6V22H6.4L17.7 10.7A1 1 0 0 0 17.7 9.3L14.7 6.3Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Baixar o App": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Sobre nós": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Regulamentação": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Premiações": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Parceiros": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 12H18L15 21L9 3L6 12H2" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Afiliados": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Central de Ajuda": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Contato": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Central de Aprendizagem": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M2 7L12 3L22 7L12 11L2 7ZM5 8.5V15L12 18.5L19 15V8.5" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "FAQ": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2S2 6.5 2 12S6.5 22 12 22ZM9.09 9A3 3 0 0 1 14.83 10C14.83 12 12 12.5 12 14.5M12 17.5H12.01" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "Suporte 24/7": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeMenu, setActiveMenu]   = useState<string | null>(null);
  const [lang, setLang]               = useState(languages[0]);
  const [langOpen, setLangOpen]       = useState(false);
  const langRef                       = useRef<HTMLDivElement>(null);
  const menuTimeout                   = useRef<ReturnType<typeof setTimeout>>();
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  const handleMenuEnter = (label: string) => {
    clearTimeout(menuTimeout.current);
    setActiveMenu(label);
  };
  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(4,13,24,0.94)" : "rgba(4,13,24,0.5)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,191,255,0.10)"
          : "1px solid rgba(0,191,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <motion.div
          className="flex items-center select-none flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{ overflow: "hidden", height: "56px", width: "280px", position: "relative" }}
        >
          <Link href="/">
            <img
              src={`${basePath}/logo-befinance.png`}
              alt="BeFinance"
              style={{
                position: "absolute",
                height: "222px",
                width: "auto",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                mixBlendMode: "screen",
                maxWidth: "none",
                cursor: "pointer",
              }}
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-7">
          {navLabels.map((label, i) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => handleMenuEnter(label)}
              onMouseLeave={handleMenuLeave}
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.3, duration: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
                className="relative group text-sm cursor-pointer flex items-center gap-1"
                style={{
                  fontFamily: "'DM Sans','Inter',sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: activeMenu === label ? "#fff" : "rgba(240,248,255,0.72)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingBottom: "4px",
                }}
              >
                {label}
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  style={{ transition: "transform 0.2s", transform: activeMenu === label ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.5 }}
                >
                  <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px]"
                  style={{
                    width: activeMenu === label ? "100%" : "0%",
                    background: "linear-gradient(90deg, #00bfff, #0066ff)",
                    transition: "width 0.25s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              </motion.span>
            </div>
          ))}
        </nav>

        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href="#" className="btn-login">
            <Lock size={13} style={{ opacity: 0.65 }} />
            Login
          </a>
          <a href="#" className="btn-glow">
            <span className="btn-glow-face">
              Comece a negociar
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <div ref={langRef} className="lang-switcher" onClick={() => setLangOpen(!langOpen)}>
            <span className="lang-flag"><lang.Flag /></span>
            <span className="lang-code">{lang.code}</span>
            <svg
              className="lang-arrow"
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] as any }}
                >
                  {languages.map((l) => (
                    <div
                      key={l.code}
                      className={`lang-option${lang.code === l.code ? " active" : ""}`}
                      onClick={(e) => { e.stopPropagation(); setLang(l); setLangOpen(false); }}
                    >
                      <l.Flag />
                      <span>{l.label}</span>
                      <span style={{ marginLeft: "auto", fontSize: "11px", opacity: 0.4 }}>{l.code}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute left-0 right-0 top-[72px]"
            style={{
              background: "rgba(4,13,24,0.97)",
              backdropFilter: "blur(32px)",
              borderBottom: "1px solid rgba(0,191,255,0.10)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={() => handleMenuEnter(activeMenu)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-6xl mx-auto px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {megaMenuData[activeMenu]?.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-start gap-3 p-4 rounded-xl transition-all"
                    style={{ textDecoration: "none" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.background = "rgba(0,191,255,0.06)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg mt-0.5"
                      style={{ background: "rgba(0,191,255,0.08)" }}
                    >
                      {megaIcons[item.title] || <div className="w-5 h-5" />}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(240,248,255,0.4)", fontFamily: "'Inter',sans-serif", lineHeight: 1.5 }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(4,13,24,0.98)", borderTop: "1px solid rgba(0,191,255,0.1)" }}
          >
            <div className="px-6 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navLabels.map((label) => (
                <MobileSection key={label} label={label} items={megaMenuData[label].items} onNavigate={() => setMobileOpen(false)} />
              ))}
              <div className="flex gap-2 mt-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l)}
                    style={{
                      padding: "5px 11px",
                      borderRadius: "20px",
                      border: `1px solid ${lang.code === l.code ? "rgba(0,191,255,0.5)" : "rgba(0,191,255,0.15)"}`,
                      background: lang.code === l.code ? "rgba(0,191,255,0.1)" : "transparent",
                      color: lang.code === l.code ? "#00bfff" : "rgba(240,248,255,0.6)",
                      fontSize: "12px",
                      fontWeight: 600,
                      fontFamily: "'Inter',sans-serif",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <l.Flag /> {l.code}
                  </button>
                ))}
              </div>
              <Link href="#" className="btn-glow mt-3" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
                <span className="btn-glow-face" style={{ width: "100%", justifyContent: "center" }}>
                  Comece a negociar
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileSection({ label, items, onNavigate }: { label: string; items: { title: string; desc: string; href: string }[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-3 border-b"
        style={{ borderColor: "rgba(0,191,255,0.08)", color: "rgba(240,248,255,0.8)", fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "14px", fontWeight: 500 }}
        onClick={() => setOpen(!open)}
      >
        {label}
        <svg
          width="12" height="12" viewBox="0 0 10 10" fill="none"
          style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="py-2 pl-3 flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
                  style={{ textDecoration: "none", color: "rgba(240,248,255,0.6)", fontSize: "13px", fontFamily: "'Inter',sans-serif" }}
                >
                  <div className="w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0" style={{ background: "rgba(0,191,255,0.08)" }}>
                    {megaIcons[item.title] || <div className="w-4 h-4" />}
                  </div>
                  <div>
                    <div style={{ color: "rgba(240,248,255,0.85)", fontWeight: 500 }}>{item.title}</div>
                    <div className="text-xs" style={{ color: "rgba(240,248,255,0.35)", marginTop: 2 }}>{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
