import { motion } from "framer-motion";

const assets = [
  { name: "Bitcoin", symbol: "BTC", price: "R$ 484.250,33", change: "+1,71%", positive: true, color: "#f7931a" },
  { name: "Solana", symbol: "SOL", price: "R$ 979,46", change: "-0,65%", positive: false, color: "#9945ff" },
  { name: "Dash", symbol: "DASH", price: "R$ 124,68", change: "+1,71%", positive: true, color: "#008de4" },
  { name: "XRP", symbol: "XRP", price: "R$ 12,07", change: "+1,66%", positive: true, color: "#00aae4" },
  { name: "Ethereum", symbol: "ETH", price: "R$ 13.109,21", change: "+1,71%", positive: true, color: "#627eea" },
  { name: "Litecoin", symbol: "LTC", price: "R$ 562,22", change: "-1,71%", positive: false, color: "#bfbbbb" },
  { name: "Cardano", symbol: "ADA", price: "R$ 3,74", change: "+2,15%", positive: true, color: "#0d1e6f" },
  { name: "Polkadot", symbol: "DOT", price: "R$ 35,47", change: "+0,83%", positive: true, color: "#e6007a" },
];

const cryptoIcons: Record<string, string> = {
  BTC: "₿",
  SOL: "◎",
  DASH: "D",
  XRP: "✕",
  ETH: "Ξ",
  LTC: "Ł",
  ADA: "₳",
  DOT: "●",
};

function TickerItem({ asset }: { asset: typeof assets[0] }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl mx-3 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        background: "rgba(4, 20, 40, 0.7)",
        border: "1px solid rgba(0, 191, 255, 0.1)",
        backdropFilter: "blur(10px)",
        minWidth: "200px",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: asset.color, color: "#fff" }}
      >
        {cryptoIcons[asset.symbol] || asset.symbol[0]}
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
      {/* Section header */}
      <div className="text-center mb-10 pt-4">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex justify-center mb-4"
        >
          <div className="hero-badge">
            <span className="badge-tag">Mercado</span>
            <span className="badge-text">Negocie agora mesmo</span>
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
          Principais ativos do{" "}
          <span className="shimmer-text">mercado</span>
        </motion.h2>
      </div>

      {/* Ticker strip */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(2,8,20,1), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(2,8,20,1), transparent)" }}
        />

        {/* Ticker row 1 */}
        <div className="ticker-wrapper mb-3">
          <div className="ticker-inner">
            {[...assets, ...assets].map((asset, i) => (
              <TickerItem key={`${asset.symbol}-${i}`} asset={asset} />
            ))}
          </div>
        </div>

        {/* Ticker row 2 - reverse direction */}
        <div className="ticker-wrapper" style={{ overflow: "hidden" }}>
          <div
            className="ticker-inner"
            style={{ animation: "ticker 35s linear infinite reverse" }}
          >
            {[...assets.slice().reverse(), ...assets.slice().reverse()].map((asset, i) => (
              <TickerItem key={`rev-${asset.symbol}-${i}`} asset={asset} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
