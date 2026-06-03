"use client";
export default function Pricing() {
  const plans = [
    {
      name: "Quick Build",
      italic: false,
      price: "₹500",
      desc: "Perfect for simple tasks and mini projects.",
      features: ["Login / Register page", "CRUD App", "Single REST API", "Responsive Portfolio", "Simple React UI", "MySQL Basic Integration"],
      delivery: "2–4 hrs",
      cta: "Get Started",
      style: "standard",
    },
    {
      name: "Standard",
      nameItalic: "Plan",
      price: "₹2,500",
      desc: "Full-featured projects with auth and dashboard.",
      features: ["Admin Dashboard", "Auth System (JWT)", "Mini Full-Stack App", "Blog System", "React + Spring Boot", "React + Django"],
      delivery: "1–2 days",
      cta: "Get Started",
      style: "featured",
    },
  ];

  return (
    <section id="pricing" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{
            color: "var(--purple-light)",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
            marginBottom: "12px",
          }}>Pricing</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05 }}>
              Perfect for Your<br />
              <em style={{ fontWeight: 400, color: "var(--purple-light)" }}>Creative Needs</em>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "240px", lineHeight: 1.7 }}>
              No hidden charges. Pay for what you need.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
        }}>
          {/* Left two stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Quick Build */}
            <div style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
              flex: 1,
            }}>
              <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "4px", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Quick Build</p>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "48px",
                fontWeight: 900,
                color: "var(--yellow)",
                lineHeight: 1,
                marginBottom: "0.8rem",
              }}>₹300</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.2rem" }}>Perfect for simple tasks.</p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
                {["Login / Register page", "CRUD App", "Single REST API", "Responsive Portfolio", "2–4 hr delivery"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ color: "#4ade80", fontSize: "11px" }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                marginTop: "1.5rem",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(107,92,231,0.5)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                Get Started
              </a>
            </div>

            {/* Project Based */}
            <div style={{
              background: "var(--purple)",
              borderRadius: "16px",
              padding: "2rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 900 }}>Project</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontStyle: "italic", fontWeight: 400 }}>based ↗</p>
                </div>
                <span style={{ fontSize: "28px", opacity: 0.6 }}>↗</span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", marginTop: "1rem", lineHeight: 1.6 }}>
                Have a unique idea? We embrace project-centric work and advance further.
              </p>
              <a href="https://wa.me/919032018799" target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "14px",
                marginTop: "1.5rem",
                border: "1px solid rgba(255,255,255,0.3)",
              }}>
                Book a call →
              </a>
            </div>
          </div>

          {/* Standard plan - tall center card */}
          <div style={{
            background: "var(--bg2)",
            border: "1px solid rgba(107,92,231,0.4)",
            borderRadius: "16px",
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Glow */}
            <div style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(107,92,231,0.15)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }} />
            <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "4px", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Standard</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontStyle: "italic", fontWeight: 400, color: "var(--purple-light)", marginBottom: "0.5rem" }}>Plan</p>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "56px",
              fontWeight: 900,
              color: "var(--yellow)",
              lineHeight: 1,
              marginBottom: "0.8rem",
            }}>₹500</div>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>Full-featured projects with auth and dashboard.</p>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
              {["Admin Dashboard", "Auth System (JWT)", "Mini Full-Stack App", "Blog System", "React + Spring Boot", "React + Django", "1–2 day delivery"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "#4ade80", fontSize: "11px" }}>✓</span> {f}
                </div>
              ))}
            </div>
            <a href="#contact" style={{
              display: "block",
              textAlign: "center",
              padding: "14px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.9)",
              color: "#0a0a0f",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.9)"; }}
            >
              Get Started
            </a>
          </div>

          {/* Right column: Advanced + Custom */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Advanced */}
            <div style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
              flex: 1,
            }}>
              <p style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "4px", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>Advanced</p>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "48px",
                fontWeight: 900,
                color: "var(--yellow)",
                lineHeight: 1,
                marginBottom: "0.8rem",
              }}>₹1000+</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1.2rem" }}>Complex systems, deployment, integrations.</p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
                {["Payment Integration", "Real-time Chat", "Deployment (Vercel/Render)", "Complex Backend", "AI/API Integration", "2–5 day delivery"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                    <span style={{ color: "#4ade80", fontSize: "11px" }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "100px",
                border: "1px solid var(--border)",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "14px",
                marginTop: "1.5rem",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(107,92,231,0.5)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
              >
                Get Started
              </a>
            </div>

            {/* Custom */}
            <div style={{
              background: "var(--yellow)",
              borderRadius: "16px",
              padding: "2rem",
            }}>
              <span style={{ fontSize: "28px" }}>↗</span>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontStyle: "italic", fontWeight: 400, color: "#0a0a0f", marginTop: "0.5rem" }}>Custom</p>
              <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.65)", marginTop: "0.75rem", lineHeight: 1.6 }}>
                Desire a tailor-made solution? WhatsApp us and we&apos;ll move forward.
              </p>
              <a href="https://wa.me/919032018799" target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "100px",
                background: "rgba(0,0,0,0.12)",
                color: "#0a0a0f",
                textDecoration: "none",
                fontSize: "14px",
                marginTop: "1.5rem",
                fontWeight: 500,
              }}>
                WhatsApp Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
