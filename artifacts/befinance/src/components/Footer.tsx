import { motion } from "framer-motion";

const footerLinks = {
  plataforma: {
    title: "Plataforma",
    links: ["Trading Web", "App Mobile", "API para Traders", "Conta Demo", "Ferramentas Analíticas"],
  },
  mercados: {
    title: "Mercados",
    links: ["Commodities", "Ações", "Cripto Moedas", "ETFs", "Forex", "Futuros"],
  },
  empresa: {
    title: "Empresa",
    links: ["Sobre nós", "Regulamentação", "Parceiros", "Afiliados", "Carreiras"],
  },
  suporte: {
    title: "Suporte",
    links: ["Central de Ajuda", "Contato", "Webinars", "Academia", "Blog"],
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
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b"
          style={{ borderColor: "rgba(0,191,255,0.08)" }}>
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M4 4L18 4L28 18L18 32L4 32L14 18L4 4Z" fill="url(#footerLogoGrad)" />
                <path d="M18 4L32 4L32 32L18 32L28 18Z" fill="url(#footerLogoGrad2)" opacity="0.6" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="4" y1="4" x2="28" y2="32">
                    <stop stopColor="#00bfff" />
                    <stop offset="1" stopColor="#0066ff" />
                  </linearGradient>
                  <linearGradient id="footerLogoGrad2" x1="18" y1="4" x2="32" y2="32">
                    <stop stopColor="#00e5ff" />
                    <stop offset="1" stopColor="#0099ff" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #00bfff, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                BeFinance
              </span>
            </div>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(240,248,255,0.45)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              maxWidth: "240px",
            }}>
              A melhor plataforma de trading para investidores que buscam resultados reais no mercado financeiro.
            </p>

            {/* Social links */}
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

          {/* Links columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#fff",
                  marginBottom: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        color: "rgba(240,248,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00bfff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,248,255,0.45)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(240,248,255,0.3)",
          }}>
            © 2026 BeFinance. Todos os direitos reservados. Trading envolve riscos. Leia nossos termos.
          </p>

          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(240,248,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
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
