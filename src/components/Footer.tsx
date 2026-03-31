"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--forest)",
        color: "var(--sage-light)",
        padding: "64px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              color: "white",
              marginBottom: 12,
            }}
          >
            CascadiaFitness.org
          </h3>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 280 }}>
            Evidence-based wellness resources for adults 50+. Built on
            peer-reviewed research from leading journals.
          </p>
        </div>

        {/* Topics column */}
        <div>
          <h4
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--sage)",
              marginBottom: 16,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            Topics
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { href: "/nutrition", label: "Nutrition" },
              { href: "/exercise", label: "Exercise" },
              { href: "/behavior-change", label: "Behavior Change" },
              { href: "/coaches", label: "Find a Coach" },
              { href: "/blog", label: "Research Blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--sage-light)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div>
          <h4
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--sage)",
              marginBottom: 16,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            Weekly Research Digest
          </h4>
          <p style={{ fontSize: "0.88rem", marginBottom: 16, lineHeight: 1.5 }}>
            One email per week. The latest peer-reviewed findings on nutrition,
            exercise, and healthy aging — translated into plain language.
          </p>
          <form
            style={{ display: "flex", gap: 8 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address for newsletter"
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 6,
                border: "1px solid var(--forest-light)",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "white",
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "var(--river)",
                color: "white",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: "0.88rem",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
              }}
            >
              Subscribe
            </button>
          </form>
          <p
            style={{
              fontSize: "0.72rem",
              marginTop: 8,
              color: "var(--sage)",
            }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1120,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--forest-light)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: "0.78rem",
          color: "var(--sage)",
        }}
      >
        <span>&copy; {new Date().getFullYear()} CascadiaFitness.org</span>
        <Link
          href="/privacy"
          style={{
            color: "var(--sage)",
            textDecoration: "none",
            fontSize: "0.78rem",
          }}
        >
          Privacy Policy
        </Link>
        <span>
          Educational resource only — not medical advice.
        </span>
      </div>
    </footer>
  );
}
