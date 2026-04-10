"use client";

import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

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

        {/* Connect CTA */}
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
            Work With a Coach
          </h4>
          <p style={{ fontSize: "0.88rem", marginBottom: 16, lineHeight: 1.5 }}>
            Ready to put the research into practice? Connect with a certified
            health and wellness coach.
          </p>
          <Link
            href="/connect"
            style={{
              display: "inline-block",
              backgroundColor: "var(--bark)",
              color: "white",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: 6,
            }}
          >
            Connect with a Coach →
          </Link>
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
          <NewsletterForm variant="footer" />
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
        <span>Educational resource only — not medical advice.</span>
        <a
          href="https://www.buymeacoffee.com/jpmobley"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--bark)",
            textDecoration: "none",
            fontSize: "0.78rem",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--forest)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bark)")}
        >
          ☕ Support This Project
        </a>
      </div>
    </footer>
  );
}
