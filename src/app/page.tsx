"use client";

import Link from "next/link";

const themes = [
  {
    href: "/nutrition",
    title: "Nutrition",
    subtitle: "What the research actually says",
    description:
      "Protein needs after 50, supplementation evidence, and dietary patterns linked to longevity — distilled from 6 top-ranked peer-reviewed studies.",
    accent: "var(--sage)",
    tag: "6 studies reviewed",
  },
  {
    href: "/exercise",
    title: "Exercise",
    subtitle: "Move smarter, not just more",
    description:
      "Global consensus guidelines on physical activity for older adults, resistance training protocols, and the dose-response relationship between movement and healthspan.",
    accent: "var(--river)",
    tag: "4 studies reviewed",
  },
  {
    href: "/behavior-change",
    title: "Behavior Change",
    subtitle: "The science of lasting habits",
    description:
      "Motivational interviewing effectiveness, self-determination theory in practice, and evidence-based coaching frameworks that help changes stick.",
    accent: "var(--bark)",
    tag: "3 studies reviewed",
  },
];

const credibilityPoints = [
  {
    number: "25",
    label: "Peer-reviewed studies",
    detail: "Ranked and curated from leading journals",
  },
  {
    number: "10",
    label: "Research themes",
    detail: "From nutrition to coaching practice",
  },
  {
    number: "0",
    label: "Sponsored content",
    detail: "No ads. No affiliates. Just evidence.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "80px 24px 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative element */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, var(--sage-light) 0%, transparent 70%)",
            opacity: 0.3,
          }}
        />
        <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative" }}>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--river)",
              marginBottom: 16,
            }}
          >
            Evidence-based wellness for adults 50+
          </p>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              maxWidth: 680,
              marginBottom: 20,
              color: "var(--forest)",
            }}
          >
            Your health decisions deserve better than headlines.
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              maxWidth: 560,
              color: "var(--bark)",
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            We read the research so you don&apos;t have to. Peer-reviewed studies
            on nutrition, exercise, and behavior change — translated into
            clear, actionable guidance.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/nutrition"
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
              Start with Nutrition &rarr;
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
      </section>

      {/* ── Theme Cards ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              marginBottom: 12,
            }}
          >
            Start with what matters to you
          </h2>
          <p
            style={{
              color: "var(--bark)",
              fontSize: "1.05rem",
              marginBottom: 48,
              maxWidth: 520,
            }}
          >
            Three research themes, built from the 25 highest-impact studies in
            our collection.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {themes.map((theme) => (
              <Link
                key={theme.href}
                href={theme.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article
                  style={{
                    background: "white",
                    borderRadius: 12,
                    border: "1px solid var(--stone-dark)",
                    padding: 32,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(26,58,42,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: theme.accent,
                      marginBottom: 12,
                    }}
                  >
                    {theme.tag}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: 4,
                      color: "var(--forest)",
                    }}
                  >
                    {theme.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontStyle: "italic",
                      color: "var(--sage)",
                      marginBottom: 12,
                    }}
                  >
                    {theme.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--charcoal)",
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {theme.description}
                  </p>
                  <span
                    style={{
                      marginTop: 20,
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--forest)",
                    }}
                  >
                    Explore research &rarr;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credibility / Numbers ── */}
      <section
        style={{
          backgroundColor: "var(--forest)",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {credibilityPoints.map((point) => (
            <div key={point.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.8rem",
                  color: "white",
                  marginBottom: 4,
                }}
              >
                {point.number}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--sage-light)",
                  marginBottom: 4,
                }}
              >
                {point.label}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--sage)" }}>
                {point.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 12,
            }}
          >
            Get the weekly research digest
          </h2>
          <p
            style={{
              color: "var(--bark)",
              fontSize: "1rem",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            One email per week. The latest peer-reviewed findings on nutrition,
            exercise, and healthy aging — in plain language, with links to
            the original studies.
          </p>
          <form
            style={{
              display: "flex",
              gap: 10,
              maxWidth: 440,
              margin: "0 auto",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              style={{
                flex: 1,
                padding: "14px 16px",
                borderRadius: 6,
                border: "1px solid var(--stone-dark)",
                fontSize: "0.95rem",
                fontFamily: "var(--font-body)",
                outline: "none",
                backgroundColor: "white",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px 24px",
                backgroundColor: "var(--forest)",
                color: "var(--warm-white)",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </form>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--sage)",
              marginTop: 12,
            }}
          >
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── Coach Directory Teaser ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                marginBottom: 12,
              }}
            >
              Looking for a certified health coach?
            </h2>
            <p
              style={{
                color: "var(--bark)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              Our directory features NBC-HWC certified coaches who specialize
              in working with adults over 50. Every coach holds a
              nationally-recognized credential in health and wellness coaching.
            </p>
            <Link
              href="/coaches"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                backgroundColor: "var(--river)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.92rem",
                borderRadius: 6,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
              }}
            >
              Browse coaches &rarr;
            </Link>
          </div>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 12,
              backgroundColor: "var(--mist)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.82rem",
              color: "var(--sage)",
              textAlign: "center",
              padding: 20,
            }}
          >
            Coach directory
            <br />
            coming soon
          </div>
        </div>
      </section>
    </>
  );
}
