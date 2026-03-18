import { motion } from "framer-motion";

const posts = [
  {
    tag: "Mercado",
    tagColor: "#00bfff",
    date: "15 Mar 2026",
    title: "Bitcoin supera R$500.000 pela primeira vez na história",
    excerpt: "O Bitcoin atingiu uma nova máxima histórica, impulsionado pela aprovação de ETFs institucionais e pela crescente adoção global da criptomoeda como reserva de valor.",
    readTime: "5 min de leitura",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    tag: "Educação",
    tagColor: "#00d084",
    date: "12 Mar 2026",
    title: "Como diversificar sua carteira em 2026: guia completo",
    excerpt: "Aprenda as melhores estratégias de diversificação para maximizar seus rendimentos e proteger seu patrimônio em diferentes cenários econômicos.",
    readTime: "8 min de leitura",
    gradient: "from-green-500 to-teal-500",
  },
  {
    tag: "Análise",
    tagColor: "#ff9500",
    date: "10 Mar 2026",
    title: "Commodities em alta: petróleo e ouro batem recordes",
    excerpt: "O mercado de commodities apresenta forte valorização no primeiro trimestre. Entenda os fatores macroeconômicos que estão impulsionando esses ativos e como aproveitar as oportunidades.",
    readTime: "6 min de leitura",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute -right-60 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,191,255,0.08)", border: "1px solid rgba(0,191,255,0.2)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00bfff" }} />
              <span style={{ color: "#00bfff", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>
                BLOG
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Fique por dentro do{" "}
              <span style={{ background: "linear-gradient(135deg, #00bfff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                mercado
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ x: 5 }}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-medium"
            style={{ color: "#00bfff", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}
          >
            Ver todos os artigos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group cursor-pointer"
              whileHover={{ y: -4 }}
            >
              {/* Image placeholder with gradient */}
              <div
                className="relative h-48 rounded-2xl mb-5 overflow-hidden"
                style={{ background: "rgba(4, 20, 40, 0.8)" }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${
                      i === 0 ? "rgba(0,191,255,0.4), rgba(0,102,255,0.4)" :
                      i === 1 ? "rgba(0,208,132,0.4), rgba(0,191,255,0.4)" :
                      "rgba(255,149,0,0.4), rgba(255,69,0,0.3)"
                    })`,
                  }}
                />

                {/* Chart decoration */}
                <div className="absolute inset-0 flex items-end justify-center p-4 opacity-40">
                  <svg width="100%" height="60" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
                    <path
                      d={i === 0
                        ? "M0 50L30 35L60 42L90 20L120 30L150 10L200 25"
                        : i === 1
                        ? "M0 45L40 30L80 38L110 20L150 28L200 15"
                        : "M0 40L35 45L70 25L100 35L140 15L175 30L200 20"}
                      stroke={i === 0 ? "#00bfff" : i === 1 ? "#00d084" : "#ff9500"}
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d={i === 0
                        ? "M0 50L30 35L60 42L90 20L120 30L150 10L200 25L200 60L0 60Z"
                        : i === 1
                        ? "M0 45L40 30L80 38L110 20L150 28L200 15L200 60L0 60Z"
                        : "M0 40L35 45L70 25L100 35L140 15L175 30L200 20L200 60L0 60Z"}
                      fill={i === 0 ? "rgba(0,191,255,0.08)" : i === 1 ? "rgba(0,208,132,0.08)" : "rgba(255,149,0,0.08)"}
                    />
                  </svg>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(4, 13, 24, 0.8)",
                      color: post.tagColor,
                      border: `1px solid ${post.tagColor}33`,
                      fontFamily: "'Inter', sans-serif",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="px-1"
                style={{ border: "none" }}
              >
                <div
                  className="flex items-center gap-3 mb-3"
                  style={{ color: "rgba(240,248,255,0.4)", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3
                  className="mb-2 group-hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(240,248,255,0.5)",
                    lineHeight: 1.65,
                  }}
                >
                  {post.excerpt}
                </p>

                <motion.div
                  className="flex items-center gap-1 mt-4"
                  style={{ color: post.tagColor, fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  whileHover={{ x: 3 }}
                >
                  Ler mais
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
