import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "Professional Trader",
    location: "New York, USA",
    avatar: "JM",
    rating: 5,
    text: "BeFinance transformed the way I invest. The platform is incredible, the spreads are the lowest I've seen and the customer support is exceptional. I grew my portfolio by 40% in the last 6 months.",
    color: "#00bfff",
  },
  {
    name: "Sarah Williams",
    role: "Beginner Investor",
    location: "London, UK",
    avatar: "SW",
    rating: 5,
    text: "I started investing 3 months ago with BeFinance and already feel confident. The demo account with $10,000 was essential to learn risk-free. The tutorials are excellent and the interface is super intuitive.",
    color: "#0099ff",
  },
  {
    name: "Robert Chen",
    role: "Financial Manager",
    location: "Singapore",
    avatar: "RC",
    rating: 5,
    text: "After testing several brokers, BeFinance stood out for its transparency in fees and speed of order execution. I recommend it to anyone who wants to invest seriously.",
    color: "#00d4ff",
  },
  {
    name: "Emily Rodriguez",
    role: "Day Trader",
    location: "Miami, USA",
    avatar: "ER",
    rating: 5,
    text: "The advanced charts and 50+ technical indicators allow me to make precise analyses. The platform is fast, reliable and has never crashed during critical market moments.",
    color: "#0066ff",
  },
  {
    name: "Marcus Thompson",
    role: "Entrepreneur",
    location: "Toronto, Canada",
    avatar: "MT",
    rating: 5,
    text: "I've been investing for 10 years and BeFinance is definitely the best broker I've ever used. Maximum security, competitive fees and personalized service that goes beyond expectations.",
    color: "#00e5ff",
  },
  {
    name: "Julia Andersen",
    role: "Doctor & Investor",
    location: "Copenhagen, Denmark",
    avatar: "JA",
    rating: 5,
    text: "As a doctor, I don't have much time to follow the market all day. BeFinance gave me automated tools that work for me. Excellent results with little time invested.",
    color: "#00bfff",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FFB800">
          <path d="M7 1L8.8 5.5H13.5L9.6 8.4L11.2 13L7 10.2L2.8 13L4.4 8.4L0.5 5.5H5.2L7 1Z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="depoimentos"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020810 0%, #040d18 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,191,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
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
              TESTIMONIALS
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
              marginBottom: "1rem",
            }}
          >
            What our{" "}
            <span style={{ background: "linear-gradient(135deg, #00bfff, #0099ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              investors
            </span>{" "}
            say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(240,248,255,0.6)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Over 500,000 investors already trust BeFinance to make their money work for them.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10" style={{ minHeight: "320px" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.name}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(4, 20, 40, 0.6)",
                  border: "1px solid rgba(0, 191, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Quote icon */}
                <div className="mb-4" style={{ color: "rgba(0,191,255,0.3)", fontSize: "2rem", lineHeight: 1, fontFamily: "Georgia, serif" }}>
                  "
                </div>

                {/* Rating */}
                <StarRating count={testimonial.rating} />

                {/* Text */}
                <p
                  className="mt-4 mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(240,248,255,0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, #0066ff)`, color: "#fff", fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(240,248,255,0.45)" }}>
                      {testimonial.role} · {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: current === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: current === i ? "#00bfff" : "rgba(0,191,255,0.2)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
