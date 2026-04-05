"use client";

import Link from "next/link";
import ProteinCalculator from "@/components/ProteinCalculator";
import SleepAssessment from "@/components/SleepAssessment";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "80px 24px 88px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            gap: 48,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: 60% */}
          <div style={{ flex: "3 1 320px" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--river)",
                marginBottom: 16,
              }}
            >
              Evidence-Based Wellness for Adults 40+
            </p>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                maxWidth: 640,
                marginBottom: 20,
                color: "var(--forest)",
                lineHeight: 1.2,
              }}
            >
              Your decisions deserve better than headlines.
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: 560,
                color: "var(--bark)",
                lineHeight: 1.65,
                marginBottom: 36,
              }}
            >
              200+ peer-reviewed studies on nutrition, exercise, sleep, and
              behavior change. Distilled into clear, actionable guidance.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  backgroundColor: "var(--forest)",
                  color: "var(--warm-white)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                }}
              >
                Explore →
              </Link>
              <Link
                href="/coaches"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  backgroundColor: "transparent",
                  color: "var(--forest)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "2px solid var(--forest)",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                }}
              >
                Find a Coach
              </Link>
            </div>
          </div>

          {/* Right: 40% — Quick Start card */}
          <div style={{ flex: "2 1 260px" }}>
            <div
              style={{
                background: "var(--warm-white)",
                border: "1.5px solid var(--stone-dark)",
                borderRadius: 12,
                padding: 32,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                  color: "var(--forest)",
                  marginBottom: 16,
                }}
              >
                Free Assessments!
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link
                  href="#protein-calculator"
                  style={{
                    display: "block",
                    padding: "18px 24px",
                    background: "var(--stone)",
                    border: "1px solid var(--stone-dark)",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--mist)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--stone)")
                  }
                >
                  🥩 Calculate Your Protein Target
                </Link>
                <Link
                  href="#sleep-assessment"
                  style={{
                    display: "block",
                    padding: "18px 24px",
                    background: "var(--stone)",
                    border: "1px solid var(--stone-dark)",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--mist)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--stone)")
                  }
                >
                  😴 Assess Your Sleep Quality
                </Link>
                <Link
                  href="#newsletter"
                  style={{
                    display: "block",
                    padding: "18px 24px",
                    background: "var(--stone)",
                    border: "1px solid var(--stone-dark)",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--charcoal)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--mist)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--stone)")
                  }
                >
                  📧 Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools Section ── */}
      <section id="tools" style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--forest)",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Free Evidence-Based Tools
          </h2>
          <p
            style={{
              color: "var(--bark)",
              fontSize: "1.05rem",
              marginBottom: 56,
              textAlign: "center",
            }}
          >
            No account required. No data stored. Just science you can use today.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 40,
            }}
          >
            {/* Protein Calculator column */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--forest)",
                  marginBottom: 8,
                }}
              >
                Protein Calculator
              </h3>
              <p
                style={{
                  color: "var(--bark)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                Most adults over 40 need roughly double the official protein
                recommendation. Find your personal target.
              </p>
              <div id="protein-calculator">
                <ProteinCalculator />
              </div>
            </div>

            {/* Sleep Assessment column */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--forest)",
                  marginBottom: 8,
                }}
              >
                Sleep Quality Assessment
              </h3>
              <p
                style={{
                  color: "var(--bark)",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                Sleep below 7 hours triggers a metabolic cascade that accelerates
                aging. Check where you stand.
              </p>
              <div id="sleep-assessment">
                <SleepAssessment />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section
        id="newsletter"
        style={{
          backgroundColor: "var(--forest)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--warm-white)",
              marginBottom: 12,
            }}
          >
            Get the Weekly Research Digest
          </h2>
          <p
            style={{
              color: "var(--sage-light)",
              fontSize: "1rem",
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            New research across 10 themes. Plain language. Every week. Join 0
            evidence-based thinkers.
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </section>

      {/* ── Evidence Banner ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--bark)",
              lineHeight: 1.7,
              marginBottom: 12,
            }}
          >
            Built on 231 peer-reviewed articles across 10 research themes. Every
            claim is cited. Every recommendation is evidence-based.
          </p>
          <Link
            href="/methodology"
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--forest)",
              textDecoration: "none",
            }}
          >
            Read our methodology →
          </Link>
        </div>
      </section>
    </>
  );
}
