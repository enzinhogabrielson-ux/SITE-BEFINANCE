import { motion } from "framer-motion";

const posts = [
  {
    tag: "Market",
    date: "Mar 15, 2026",
    title: "S&P 500 hits new all-time high in 2026",
    excerpt: "The main American index reached a new record, driven by corporate results above expectations and investor confidence in economic growth.",
    readTime: "5 min",
    chartPath: "M0 50L30 35L60 42L90 20L120 30L150 10L200 25",
    chartFill: "M0 50L30 35L60 42L90 20L120 30L150 10L200 25L200 60L0 60Z",
  },
  {
    tag: "Education",
    date: "Mar 12, 2026",
    title: "How to diversify your portfolio in 2026: complete guide",
    excerpt: "Learn the best diversification strategies to maximize your returns and protect your assets in different economic scenarios.",
    readTime: "8 min",
    chartPath: "M0 45L40 30L80 38L110 20L150 28L200 15",
    chartFill: "M0 45L40 30L80 38L110 20L150 28L200 15L200 60L0 60Z",
  },
  {
    tag: "Analysis",
    date: "Mar 10, 2026",
    title: "Commodities on the rise: oil and gold hit records",
    excerpt: "The commodities market shows strong appreciation in Q1. Understand the macroeconomic factors driving these assets.",
    readTime: "6 min",
    chartPath: "M0 40L35 45L70 25L100 35L140 15L175 30L200 20",
    chartFill: "M0 40L35 45L70 25L100 35L140 15L175 30L200 20L200 60L0 60Z",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-28 overflow-hidden section-glow-border"
      style={{ background: "linear-gradient(180deg, #040d18 0%, #020810 100%)" }}
    >
      <div
        className="absolute -right-60 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,255,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,191,255,0.07)", border: "1px solid rgba(0,191,255,0.18)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00bfff" }} />
              <span style={{ color: "#00bfff", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Blog
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                color: "#ffffff",
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
              }}
            >
              Stay updated on the{" "}
              <span className="shimmer-text">market</span>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 4 }}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-medium"
            style={{ color: "#00bfff", textDecoration: "none", fontFamily: "'Inter', sans-serif" }}
          >
            View all articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Two small cards on top row */}
          {posts.slice(1).map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, filter: "blur(12px)", y: 28 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="kyvoo-card group cursor-pointer rounded-2xl overflow-hidden"
              style={{
                background: "rgba(4, 20, 40, 0.45)",
                border: "1px solid rgba(0, 191, 255, 0.09)",
              }}
            >
              <div
                className="relative h-36 overflow-hidden"
                style={{ background: "rgba(2, 8, 20, 0.8)" }}
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(0,191,255,0.3), rgba(0,60,120,0.3))" }}
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 px-4 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  <svg width="100%" height="60" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
                    <path d={post.chartPath} stroke="#00bfff" strokeWidth="1.8" fill="none"/>
                    <path d={post.chartFill} fill="rgba(0,191,255,0.07)"/>
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(0, 191, 255, 0.1)",
                      color: "#00bfff",
                      border: "1px solid rgba(0,191,255,0.2)",
                      fontFamily: "'Inter', sans-serif",
                      backdropFilter: "blur(10px)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div
                  className="flex items-center gap-3 mb-3"
                  style={{ color: "rgba(240,248,255,0.38)", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{post.date}</span>
                  <div style={{ width: "2px", height: "2px", borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                  <span>{post.readTime} read</span>
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.45,
                  }}
                >
                  {post.title}
                </h3>

                <motion.div
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#00bfff", fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ x: 3 }}
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}

          {/* One large card on bottom, full width */}
          <motion.article
            initial={{ opacity: 0, filter: "blur(12px)", y: 28 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="kyvoo-card group cursor-pointer rounded-2xl overflow-hidden md:col-span-2"
            style={{
              background: "rgba(4, 20, 40, 0.45)",
              border: "1px solid rgba(0, 191, 255, 0.09)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="relative h-56 md:h-full overflow-hidden"
                style={{ background: "rgba(2, 8, 20, 0.8)" }}
              >
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(0,191,255,0.3), rgba(0,60,120,0.3))" }}
                />
                <div className="absolute inset-0 flex items-end justify-center pb-6 px-6 opacity-50 group-hover:opacity-70 transition-opacity duration-300">
                  <svg width="100%" height="80" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none">
                    <path d={posts[0].chartPath} stroke="#00bfff" strokeWidth="2" fill="none"/>
                    <path d={posts[0].chartFill} fill="rgba(0,191,255,0.1)"/>
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(0, 191, 255, 0.1)",
                      color: "#00bfff",
                      border: "1px solid rgba(0,191,255,0.2)",
                      fontFamily: "'Inter', sans-serif",
                      backdropFilter: "blur(10px)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {posts[0].tag}
                  </span>
                </div>
              </div>

              <div className="p-7 flex flex-col justify-center">
                <div
                  className="flex items-center gap-3 mb-3"
                  style={{ color: "rgba(240,248,255,0.38)", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif" }}
                >
                  <span>{posts[0].date}</span>
                  <div style={{ width: "2px", height: "2px", borderRadius: "50%", background: "rgba(255,255,255,0.3)" }} />
                  <span>{posts[0].readTime} read</span>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.35,
                  }}
                >
                  {posts[0].title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(240,248,255,0.55)",
                    lineHeight: 1.65,
                    marginBottom: "1.2rem",
                  }}
                >
                  {posts[0].excerpt}
                </p>

                <motion.div
                  className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#00bfff", fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ x: 3 }}
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
