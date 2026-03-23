import { motion } from "framer-motion";

type Asset = { name: string; symbol: string; price: string; change: string; positive: boolean; color: string; icon: string };

const row1Assets: Asset[] = [
  { name: "Oil", symbol: "WTI", price: "$78.45", change: "+1.71%", positive: true, color: "#2b5f2b", icon: "⛽" },
  { name: "S&P 500", symbol: "SPX", price: "$5,420.30", change: "+0.52%", positive: true, color: "#1a5276", icon: "S" },
  { name: "Microsoft", symbol: "MSFT", price: "$428.60", change: "-0.38%", positive: false, color: "#00a4ef", icon: "M" },
  { name: "Silver", symbol: "XAG", price: "$29.85", change: "+1.66%", positive: true, color: "#c0c0c0", icon: "Ag" },
  { name: "Apple", symbol: "AAPL", price: "$198.50", change: "+1.42%", positive: true, color: "#555555", icon: "" },
  { name: "Tesla", symbol: "TSLA", price: "$312.80", change: "+2.15%", positive: true, color: "#cc0000", icon: "T" },
  { name: "Coca-Cola", symbol: "KO", price: "$62.40", change: "+0.28%", positive: true, color: "#d12a2a", icon: "KO" },
  { name: "NASDAQ", symbol: "NDX", price: "$18,920.50", change: "+0.91%", positive: true, color: "#0d6efd", icon: "N" },
  { name: "Dow Jones", symbol: "DJI", price: "$39,150.80", change: "+0.34%", positive: true, color: "#1e3a5f", icon: "DJ" },
  { name: "Platinum", symbol: "XPT", price: "$1,024.30", change: "-0.22%", positive: false, color: "#8c8c8c", icon: "Pt" },
];

const row2Assets: Asset[] = [
  { name: "Gold", symbol: "XAU", price: "$2,340.20", change: "+0.83%", positive: true, color: "#d4a017", icon: "Au" },
  { name: "Amazon", symbol: "AMZN", price: "$185.30", change: "-0.65%", positive: false, color: "#ff9900", icon: "A" },
  { name: "Nike", symbol: "NKE", price: "$97.25", change: "+0.74%", positive: true, color: "#111111", icon: "NK" },
  { name: "Disney", symbol: "DIS", price: "$112.80", change: "+1.12%", positive: true, color: "#0057a8", icon: "D" },
  { name: "Netflix", symbol: "NFLX", price: "$628.40", change: "+1.87%", positive: true, color: "#e50914", icon: "N" },
  { name: "Copper", symbol: "HG", price: "$4.52", change: "+0.95%", positive: true, color: "#b87333", icon: "Cu" },
  { name: "Meta", symbol: "META", price: "$502.15", change: "-0.42%", positive: false, color: "#0668E1", icon: "M" },
  { name: "FTSE 100", symbol: "UKX", price: "$8,245.60", change: "+0.18%", positive: true, color: "#003366", icon: "FT" },
  { name: "Natural Gas", symbol: "NG", price: "$2.85", change: "+3.12%", positive: true, color: "#4a8f4a", icon: "NG" },
  { name: "Visa", symbol: "V", price: "$278.90", change: "+0.56%", positive: true, color: "#1a1f71", icon: "V" },
];

function TickerItem({ asset }: { asset: Asset }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl mx-3 cursor-pointer transition-colors duration-300"
      style={{
        background: "rgba(4, 20, 40, 0.7)",
        border: "1px solid rgba(0, 191, 255, 0.1)",
        backdropFilter: "blur(10px)",
        minWidth: "200px",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: asset.color, color: "#fff", fontSize: asset.icon.length > 1 ? "0.6rem" : "0.8rem" }}
      >
        {asset.icon || asset.symbol[0]}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span style={{
            color: "#fff", fontSize: "0.8rem", fontWeight: 600,
            fontFamily: "'DM Sans','Inter', sans-serif", letterSpacing: "-0.01em",
          }}>
            {asset.name}
          </span>
          <span style={{
            fontSize: "0.65rem",
            fontFamily: "'DM Sans','Inter', sans-serif",
            color: "rgba(240,248,255,0.4)",
            fontWeight: 500,
          }}>
            {asset.symbol}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span style={{
            color: "rgba(240,248,255,0.85)", fontSize: "0.75rem",
            fontFamily: "'DM Sans','Inter', sans-serif", letterSpacing: "-0.01em",
          }}>
            {asset.price}
          </span>
          <span style={{
            color: asset.positive ? "#00d084" : "#ff4d4d",
            fontSize: "0.7rem",
            fontWeight: 600,
            fontFamily: "'DM Sans','Inter', sans-serif",
          }}>
            {asset.change}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MarketTicker() {
  return (
    <section
      id="mercado"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(4,13,24,0) 0%, rgba(2,8,20,0.95) 30%, rgba(2,8,20,1) 100%)",
        paddingTop: "0px",
        paddingBottom: "60px",
      }}
    >
      <div className="text-center mb-10 pt-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex justify-center mb-4"
        >
          <div className="hero-badge">
            <span className="badge-tag">Market</span>
            <span className="badge-text">Trade now</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'DM Sans','Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "#ffffff",
            letterSpacing: "-0.035em",
          }}
        >
          Top assets on the{" "}
          <span className="shimmer-text">market</span>
        </motion.h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(2,8,20,1), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(2,8,20,1), transparent)" }}
        />

        <div className="ticker-wrapper mb-3">
          <div className="ticker-inner">
            {[...row1Assets, ...row1Assets].map((asset, i) => (
              <TickerItem key={`r1-${asset.symbol}-${i}`} asset={asset} />
            ))}
          </div>
        </div>

        <div className="ticker-wrapper" style={{ overflow: "hidden" }}>
          <div
            className="ticker-inner"
            style={{ animation: "ticker 35s linear infinite reverse" }}
          >
            {[...row2Assets, ...row2Assets].map((asset, i) => (
              <TickerItem key={`r2-${asset.symbol}-${i}`} asset={asset} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
