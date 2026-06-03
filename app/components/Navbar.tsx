"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["How we work", "Services", "Pricing", "Contact"];

  function getHref(link: string) {
    return "#" + link.toLowerCase().split(" ").join("-");
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(14,14,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <style>{`
        @keyframes logoPulse {
          0%,100% { filter: drop-shadow(0 0 6px rgba(107,92,231,0.8)); }
          50% { filter: drop-shadow(0 0 18px rgba(107,92,231,1)); }
        }
        @keyframes flyBird1 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(-22px,-20px) scale(0.5); opacity:0; }
        }
        @keyframes flyBird2 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(-10px,-28px) scale(0.45); opacity:0; }
        }
        @keyframes flyBird3 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(4px,-30px) scale(0.55); opacity:0; }
        }
        @keyframes flyBird4 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(18px,-22px) scale(0.4); opacity:0; }
        }
        @keyframes flyBird5 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(28px,-14px) scale(0.35); opacity:0; }
        }
        @keyframes flyBird6 {
          0% { transform: translate(0px,0px) scale(1); opacity:0; }
          20% { opacity:1; }
          100% { transform: translate(-30px,-10px) scale(0.38); opacity:0; }
        }
        .logo-svg-wrap {
          animation: logoPulse 2.5s ease-in-out infinite;
          cursor: pointer;
          position: relative;
        }
        .logo-bird {
          position: absolute;
          opacity: 0;
          top: 6px;
          left: 14px;
          pointer-events: none;
        }
        .logo-svg-wrap:hover .logo-bird1 { animation: flyBird1 0.9s ease-out forwards 0.0s; }
        .logo-svg-wrap:hover .logo-bird2 { animation: flyBird2 0.9s ease-out forwards 0.08s; }
        .logo-svg-wrap:hover .logo-bird3 { animation: flyBird3 0.9s ease-out forwards 0.14s; }
        .logo-svg-wrap:hover .logo-bird4 { animation: flyBird4 0.9s ease-out forwards 0.05s; }
        .logo-svg-wrap:hover .logo-bird5 { animation: flyBird5 0.9s ease-out forwards 0.18s; }
        .logo-svg-wrap:hover .logo-bird6 { animation: flyBird6 0.9s ease-out forwards 0.11s; }

        /* Nav link styles */
        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          padding: 6px 4px;
          transition: color 0.25s ease;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: linear-gradient(90deg, var(--purple), var(--purple-light));
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #fff;
        }
        .nav-link.active::after {
          width: 100%;
          background: linear-gradient(90deg, var(--purple-light), #fff);
        }

        /* Pill hover background */
        .nav-link::before {
          content: '';
          position: absolute;
          inset: -4px -10px;
          border-radius: 8px;
          background: rgba(107,92,231,0);
          transition: background 0.25s ease;
          z-index: -1;
        }
        .nav-link:hover::before {
          background: rgba(107,92,231,0.12);
        }
      `}</style>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div className="logo-svg-wrap" style={{ width: 40, height: 40 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#6B5CE7"/>
            <path d="M10 10 L20 28 L30 10" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <svg className="logo-bird logo-bird1" width="10" height="6" viewBox="0 0 10 6">
            <path d="M0 3 Q2.5 0 5 3 Q7.5 0 10 3" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="logo-bird logo-bird2" width="9" height="5" viewBox="0 0 9 5">
            <path d="M0 3 Q2.2 0 4.5 3 Q6.8 0 9 3" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="logo-bird logo-bird3" width="11" height="6" viewBox="0 0 11 6">
            <path d="M0 3 Q2.7 0 5.5 3 Q8.3 0 11 3" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="logo-bird logo-bird4" width="8" height="5" viewBox="0 0 8 5">
            <path d="M0 3 Q2 0 4 3 Q6 0 8 3" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="logo-bird logo-bird5" width="9" height="5" viewBox="0 0 9 5">
            <path d="M0 3 Q2.2 0 4.5 3 Q6.8 0 9 3" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="logo-bird logo-bird6" width="8" height="5" viewBox="0 0 8 5">
            <path d="M0 3 Q2 0 4 3 Q6 0 8 3" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "16px", lineHeight: 1 }}>
            Velora Technologies
          </div>
          <div style={{ fontSize: "10px", color: "var(--muted)", lineHeight: 1, marginTop: "2px" }}>
            Full Stack Projects
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
        {links.map((l) => (
          <a
            key={l}
            href={getHref(l)}
            className={"nav-link" + (activeLink === l ? " active" : "")}
            onClick={() => setActiveLink(l)}
          >
            {l}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <a
          href="#how-we-work"
          style={{
            padding: "8px 14px",
            borderRadius: "100px",
            border: "1px solid rgba(255,255,255,0.2)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.8)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(107,92,231,0.6)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
          See Our Work
        </a>
        <a
          href="#contact"
          style={{
            padding: "10px 20px",
            borderRadius: "100px",
            background: "var(--purple)",
            fontSize: "13px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--purple-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--purple)")}
        >
          {"Let's work"}
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="block md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <rect y="4" width="22" height="2" rx="1" fill="white" />
                <rect y="10" width="22" height="2" rx="1" fill="white" />
                <rect y="16" width="22" height="2" rx="1" fill="white" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.98)",
            backdropFilter: "blur(20px)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={getHref(l)}
              onClick={() => setMenuOpen(false)}
              style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "15px" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}