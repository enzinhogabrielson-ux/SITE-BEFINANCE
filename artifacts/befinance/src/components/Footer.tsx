import { motion } from "framer-motion";
import { Link } from "wouter";

const footerLinks = {
  trading: {
    title: "Trading",
    links: [
      { label: "Digital Options", href: "/negociacao/opcoes-digitais" },
      { label: "Stocks", href: "/negociacao/acoes" },
      { label: "Commodities", href: "/negociacao/commodities" },
    ],
  },
  platform: {
    title: "Platform",
    links: [
      { label: "Demo Account", href: "/plataforma/conta-demo" },
      { label: "Web Trading", href: "/plataforma/trading-web" },
      { label: "Analytical Tools", href: "/plataforma/ferramentas" },
      { label: "Download App", href: "/plataforma/baixar-app" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "About Us", href: "/sobre/sobre-nos" },
      { label: "Regulation", href: "/sobre/regulamentacao" },
      { label: "Affiliates", href: "/sobre/afiliados" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Help Center", href: "/ajuda/central-de-ajuda" },
      { label: "Contact", href: "/ajuda/contato" },
      { label: "FAQ", href: "/ajuda/faq" },
      { label: "24/7 Support", href: "/ajuda/suporte" },
    ],
  },
};

const socialLinks = [
  {
    name: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 2.2c2.1 0 2.35.01 3.18.05 3.42.16 4.57 1.31 4.73 4.73.04.83.05 1.08.05 3.18 0 2.1-.01 2.35-.05 3.18-.16 3.42-1.31 4.57-4.73 4.73-.83.04-1.08.05-3.18.05-2.1 0-2.35-.01-3.18-.05C2.4 17.91 1.25 16.76 1.09 13.34 1.05 12.51 1.04 12.26 1.04 9.16c0-2.1.01-2.35.05-3.18C1.25 2.56 2.4 1.41 5.82 1.25c.83-.04 1.08-.05 3.18-.05zM9 4.5A4.5 4.5 0 1 0 9 13.5 4.5 4.5 0 0 0 9 4.5zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M15.37 1H18L11.95 8.37 19 17h-5.82l-4.38-5.72L3.95 17H1.3l6.48-7.71L1 1h5.96l3.95 5.23L15.37 1zm-.96 14.4h1.44L4.38 2.34H2.84l11.57 13.06z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M15 1.5H3a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 3 16.5h12a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 15 1.5zM6.25 13.5h-2v-7h2v7zm-1-8c-.7 0-1.25-.55-1.25-1.25S4.55 3 5.25 3s1.25.55 1.25 1.25-.55 1.25-1.25 1.25zm9 8h-2V10c0-.83-.67-1.5-1.5-1.5S9.25 9.17 9.25 10v3.5h-2v-7h2v.9c.46-.65 1.21-1.15 2-1.15 1.43 0 2.75 1.09 2.75 2.75v4.5z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M16.84 5.2a2.17 2.17 0 0 0-1.53-1.54C14.09 3.38 9 3.38 9 3.38s-5.09 0-6.31.28A2.17 2.17 0 0 0 1.16 5.2C.88 6.43.88 9 .88 9s0 2.57.28 3.8a2.17 2.17 0 0 0 1.53 1.54C3.91 14.62 9 14.62 9 14.62s5.09 0 6.31-.28a2.17 2.17 0 0 0 1.53-1.53C17.12 11.57 17.12 9 17.12 9s-.01-2.57-.28-3.8zM7.25 11.5v-5l4.5 2.5-4.5 2.5z"/>
      </svg>
    ),
  },
];

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: "#020810",
        borderTop: "1px solid rgba(0,191,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b"
          style={{ borderColor: "rgba(0,191,255,0.08)" }}>
          <div className="col-span-2">
            <div className="mb-5" style={{ overflow: "hidden", height: "50px", width: "250px", position: "relative" }}>
              <img
                src={`${basePath}/logo-befinance.png`}
                alt="BeFinance"
                style={{
                  position: "absolute",
                  height: "198px",
                  width: "auto",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  mixBlendMode: "screen",
                  maxWidth: "none",
                }}
              />
            </div>

            <p style={{
              fontFamily: "'DM Sans','Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(240,248,255,0.45)",
              lineHeight: 1.65,
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
              maxWidth: "240px",
            }}>
              The best trading platform for investors seeking real results in financial markets.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#00bfff" }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(0,191,255,0.06)",
                    border: "1px solid rgba(0,191,255,0.1)",
                    color: "rgba(240,248,255,0.45)",
                    textDecoration: "none",
                  }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4
                style={{
                  fontFamily: "'DM Sans','Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#fff",
                  marginBottom: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "'DM Sans','Inter', sans-serif",
                        fontSize: "0.82rem",
                        color: "rgba(240,248,255,0.45)",
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                        transition: "color 0.22s cubic-bezier(0.16,1,0.3,1)",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#00bfff")}
                      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "rgba(240,248,255,0.45)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{
            fontFamily: "'DM Sans','Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "-0.01em",
            color: "rgba(240,248,255,0.3)",
          }}>
            © 2026 BeFinance. All rights reserved. Trading involves risk. Read our terms.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'DM Sans','Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(240,248,255,0.3)",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  transition: "color 0.22s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00bfff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,248,255,0.3)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
