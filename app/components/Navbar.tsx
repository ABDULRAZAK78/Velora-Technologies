"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "0 1.5rem",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(14,14,26,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
    }}>
      <style>{`
        .nav-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          padding: 6px 4px;
          transition: color 0.25s ease;
        }
        .nav-link:hover { color: #fff; }
        .desktop-links { display: none; align-items: center; gap: 2rem; }
        .desktop-cta { display: none; align-items: center; gap: 12px; }
        .mobile-btn { display: flex; }
        @media (min-width: 769px) {
          .desktop-links { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
      `}</style>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36,
          background: "var(--purple)",
          borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#6B5CE7"/>
            <path d="M10 10 L20 28 L30 10" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "15px", lineHeight: 1 }}>
            Velora Technologies
          </div>
          <div style={{ fontSize: "10px", color: "var(--muted)", lineHeight: 1, marginTop: "2px" }}>
            Full Stack Projects
          </div>
        </div>
      </div>

      {/* Desktop links */}
      <div className="desktop-links">
        <a href="#how-we-work" className="nav-link">How we work</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      {/* Desktop CTA */}
      <div className="desktop-cta">
        <a href="#how-we-work" style={{
          padding: "8px 14px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: "13px",
          color: "rgba(255,255,255,0.8)",
          textDecoration: "none",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }}></span>
          See Our Work
        </a>
        <a href="#contact" style={{
          padding: "10px 20px",
          borderRadius: "100px",
          background: "var(--purple)",
          fontSize: "13px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}>
          {"Let's work"}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none", border: "none", color: "#fff",
          cursor: "pointer", alignItems: "center", justifyContent: "center",
          padding: "4px",
        }}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "65px", left: 0, right: 0,
          background: "rgba(14,14,26,0.98)",
          backdropFilter: "blur(20px)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          borderBottom: "1px solid var(--border)",
          zIndex: 99,
        }}>
          <a href="#how-we-work" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>How we work</a>
          <a href="#services" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Services</a>
          <a href="#pricing" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Pricing</a>
          <a href="#contact" onClick={closeMenu} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "16px" }}>Contact</a>
          <a href="#contact" onClick={closeMenu} style={{
            padding: "12px",
            borderRadius: "100px",
            background: "var(--purple)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            marginTop: "0.5rem",
          }}>
            {"Let's work"}
          </a>
        </div>
      )}
    </nav>
  );
}