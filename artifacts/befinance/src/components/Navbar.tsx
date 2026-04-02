import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

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

const languages: { code: Lang; Flag: React.FC; label: string }[] = [
  { code: "PT", Flag: FlagBR, label: "Português" },
  { code: "EN", Flag: FlagUS, label: "English" },
  { code: "ES", Flag: FlagES, label: "Español" },
];

const megaIcons: Record<string, React.ReactNode> = {
  "nav.trading.digitalOptions": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20L10 12L14 16L20 8M20 8H15M20 8V13" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.trading.stocks": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21M7 14L11 10L15 14L21 8" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.trading.commodities": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.platform.webTrading": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4H20V16H4ZM8 20H16M12 16V20" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.platform.demoAccount": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.platform.analyticalTools": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3A1 1 0 0 0 13.3 6.3L2 17.6V22H6.4L17.7 10.7A1 1 0 0 0 17.7 9.3L14.7 6.3Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.platform.downloadApp": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.about.aboutUs": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21V19A4 4 0 0 0 13 15H11A4 4 0 0 0 7 19V21M12 11A4 4 0 1 0 12 3A4 4 0 0 0 12 11Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.about.regulation": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L18 6V11C18 16 15 19.5 11 21C7 19.5 4 16 4 11V6L12 2Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.about.affiliates": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M17 5H9.5C7.57 5 6 6.57 6 8.5S7.57 12 9.5 12H14.5C16.43 12 18 13.57 18 15.5S16.43 19 14.5 19H6" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.help.helpCenter": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7 3 6 4 6 5.2V18.8C6 20 7 21 8.2 21H15.8C17 21 18 20 18 18.8V8L13 3Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.help.contact": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15A2 2 0 0 1 19 17H7L3 21V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.help.faq": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2S2 6.5 2 12S6.5 22 12 22ZM9.09 9A3 3 0 0 1 14.83 10C14.83 12 12 12.5 12 14.5M12 17.5H12.01" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  "nav.help.support": <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 6V12L16 14M22 12A10 10 0 1 1 2 12A10 10 0 0 1 22 12Z" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

type MenuItem = { titleKey: string; descKey: string; href: string };

const megaMenuKeys: Record<string, { labelKey: string; items: MenuItem[] }> = {
  trading: {
    labelKey: "nav.trading",
    items: [
      { titleKey: "nav.trading.digitalOptions", descKey: "nav.trading.digitalOptions.desc", href: "/negociacao/opcoes-digitais" },
      { titleKey: "nav.trading.stocks", descKey: "nav.trading.stocks.desc", href: "/negociacao/acoes" },
      { titleKey: "nav.trading.commodities", descKey: "nav.trading.commodities.desc", href: "/negociacao/commodities" },
    ],
  },
  platform: {
    labelKey: "nav.platform",
    items: [
      { titleKey: "nav.platform.demoAccount", descKey: "nav.platform.demoAccount.desc", href: "/plataforma/conta-demo" },
      { titleKey: "nav.platform.webTrading", descKey: "nav.platform.webTrading.desc", href: "/plataforma/trading-web" },
      { titleKey: "nav.platform.analyticalTools", descKey: "nav.platform.analyticalTools.desc", href: "/plataforma/ferramentas" },
      { titleKey: "nav.platform.downloadApp", descKey: "nav.platform.downloadApp.desc", href: "/plataforma/baixar-app" },
    ],
  },
  about: {
    labelKey: "nav.about",
    items: [
      { titleKey: "nav.about.aboutUs", descKey: "nav.about.aboutUs.desc", href: "/sobre/sobre-nos" },
      { titleKey: "nav.about.regulation", descKey: "nav.about.regulation.desc", href: "/sobre/regulamentacao" },
      { titleKey: "nav.about.affiliates", descKey: "nav.about.affiliates.desc", href: "/sobre/afiliados" },
    ],
  },
  help: {
    labelKey: "nav.help",
    items: [
      { titleKey: "nav.help.helpCenter", descKey: "nav.help.helpCenter.desc", href: "/ajuda/central-de-ajuda" },
      { titleKey: "nav.help.contact", descKey: "nav.help.contact.desc", href: "/ajuda/contato" },
      { titleKey: "nav.help.faq", descKey: "nav.help.faq.desc", href: "/ajuda/faq" },
      { titleKey: "nav.help.support", descKey: "nav.help.support.desc", href: "/ajuda/suporte" },
    ],
  },
};

const menuKeys = ["trading", "platform", "about", "help"];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeMenu, setActiveMenu]   = useState<string | null>(null);
  const [langOpen, setLangOpen]       = useState(false);
  const langRef                       = useRef<HTMLDivElement>(null);
  const menuTimeout                   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();

  const currentLangObj = languages.find(l => l.code === lang) ?? languages[1];

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
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
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
          {menuKeys.map((key, i) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMenuEnter(key)}
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
                  color: activeMenu === key ? "#fff" : "rgba(240,248,255,0.72)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  paddingBottom: "4px",
                }}
              >
                {t(megaMenuKeys[key].labelKey)}
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  style={{ transition: "transform 0.2s", transform: activeMenu === key ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.5 }}
                >
                  <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="absolute -bottom-0.5 left-0 h-[1.5px]"
                  style={{
                    width: activeMenu === key ? "100%" : "0%",
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
          <a href="/#login" className="btn-login">
            <Lock size={13} style={{ opacity: 0.65 }} />
            {t("nav.login")}
          </a>
          <a href="/#account" className="btn-glow">
            <span className="btn-glow-face">
              {t("nav.startTrading")}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <div ref={langRef} className="lang-switcher" onClick={() => setLangOpen(!langOpen)}>
            <span className="lang-flag"><currentLangObj.Flag /></span>
            <span className="lang-code">{lang}</span>
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
                      className={`lang-option${lang === l.code ? " active" : ""}`}
                      onClick={(e) => { e.stopPropagation(); setLang(l.code); setLangOpen(false); }}
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
                {megaMenuKeys[activeMenu]?.items.map((item) => (
                  <Link
                    key={item.titleKey}
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
                      {megaIcons[item.titleKey] || <div className="w-5 h-5" />}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold mb-1"
                        style={{ color: "#fff", fontFamily: "'DM Sans',sans-serif", letterSpacing: "-0.02em" }}
                      >
                        {t(item.titleKey)}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(240,248,255,0.4)", fontFamily: "'Inter',sans-serif", lineHeight: 1.5 }}
                      >
                        {t(item.descKey)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              {menuKeys.map((key) => (
                <MobileSection key={key} menuKey={key} items={megaMenuKeys[key].items} onNavigate={() => setMobileOpen(false)} />
              ))}
              <div className="flex gap-2 mt-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    style={{
                      padding: "5px 11px",
                      borderRadius: "20px",
                      border: `1px solid ${lang === l.code ? "rgba(0,191,255,0.5)" : "rgba(0,191,255,0.15)"}`,
                      background: lang === l.code ? "rgba(0,191,255,0.1)" : "transparent",
                      color: lang === l.code ? "#00bfff" : "rgba(240,248,255,0.6)",
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
              <a
                href="/#login"
                className="btn-login mt-3"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Lock size={13} style={{ opacity: 0.65 }} />
                {t("nav.login")}
              </a>
              <Link href="/#account" className="btn-glow mt-2" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
                <span className="btn-glow-face" style={{ width: "100%", justifyContent: "center" }}>
                  {t("nav.startTrading")}
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileSection({ menuKey, items, onNavigate }: { menuKey: string; items: MenuItem[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-3 border-b"
        style={{ borderColor: "rgba(0,191,255,0.08)", color: "rgba(240,248,255,0.8)", fontFamily: "'DM Sans','Inter',sans-serif", fontSize: "14px", fontWeight: 500 }}
        onClick={() => setOpen(!open)}
      >
        {t(megaMenuKeys[menuKey].labelKey)}
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
                  key={item.titleKey}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
                  style={{ textDecoration: "none", color: "rgba(240,248,255,0.6)", fontSize: "13px", fontFamily: "'Inter',sans-serif" }}
                >
                  <div className="w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0" style={{ background: "rgba(0,191,255,0.08)" }}>
                    {megaIcons[item.titleKey] || <div className="w-4 h-4" />}
                  </div>
                  <div>
                    <div style={{ color: "rgba(240,248,255,0.85)", fontWeight: 500 }}>{t(item.titleKey)}</div>
                    <div className="text-xs" style={{ color: "rgba(240,248,255,0.35)", marginTop: 2 }}>{t(item.descKey)}</div>
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
