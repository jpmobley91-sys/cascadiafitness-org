"use client";

import { useState, useMemo } from "react";
import { coaches, type Coach } from "@/data/coaches";

const ALL_SPECIALTIES = [
  "Nutrition",
  "Exercise",
  "Behavior Change",
  "Chronic Disease",
  "Weight Management",
  "Stress Management",
  "Healthy Aging",
  "Strength Training",
  "Fall Prevention",
  "Motivation",
  "Supplement Guidance",
  "Sarcopenia Prevention",
  "Diabetes Prevention",
];

const STATES = ["Oregon", "Washington", "Idaho"];

const AVATAR_COLORS = [
  "var(--forest)",
  "var(--river)",
  "var(--sage)",
  "var(--bark)",
];

const PRICE_LABELS: Record<Coach["priceRange"], string> = {
  "$$": "$75\u2013125/session",
  "$$$": "$125\u2013200/session",
  "$$$$": "$200+/session",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        fontSize: "0.82rem",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        borderRadius: 20,
        border: active ? "1px solid var(--forest)" : "1px solid var(--stone-dark)",
        background: active ? "var(--forest)" : "white",
        color: active ? "white" : "var(--charcoal)",
        cursor: "pointer",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

export default function CoachesPage() {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState("All States");
  const [sessionType, setSessionType] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const filtered = useMemo(() => {
    return coaches.filter((c) => {
      if (
        selectedSpecialties.length > 0 &&
        !selectedSpecialties.some((s) => c.specialties.includes(s))
      )
        return false;
      if (selectedState !== "All States" && c.location.state !== selectedState)
        return false;
      if (sessionType === "Virtual" && !c.virtual) return false;
      if (sessionType === "In-Person" && !c.inPerson) return false;
      if (priceRange !== "All" && c.priceRange !== priceRange) return false;
      return true;
    });
  }, [selectedSpecialties, selectedState, sessionType, priceRange]);

  function toggleSpecialty(s: string) {
    setSelectedSpecialties((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function clearFilters() {
    setSelectedSpecialties([]);
    setSelectedState("All States");
    setSessionType("All");
    setPriceRange("All");
  }

  const hasFilters =
    selectedSpecialties.length > 0 ||
    selectedState !== "All States" ||
    sessionType !== "All" ||
    priceRange !== "All";

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "80px 24px 60px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--river)",
              marginBottom: 12,
            }}
          >
            Coach Directory
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              marginBottom: 16,
              color: "var(--forest)",
            }}
          >
            Find a Certified Health Coach
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--bark)",
              lineHeight: 1.65,
              marginBottom: 16,
              maxWidth: 620,
            }}
          >
            Every coach in our directory holds the NBC-HWC credential &mdash;
            the national board certification for health and wellness coaching.
            They specialize in working with adults over 50.
          </p>
          <p
            style={{
              fontSize: "0.84rem",
              color: "var(--sage)",
              lineHeight: 1.5,
            }}
          >
            Currently showing sample profiles. Are you an NBC-HWC certified
            coach?{" "}
            <a
              href="mailto:hello@cascadiafitness.org"
              style={{ color: "var(--river)", fontWeight: 600 }}
            >
              Email us
            </a>{" "}
            for a free listing during our beta.
          </p>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div
        style={{
          position: "sticky",
          top: 72,
          zIndex: 90,
          background: "var(--warm-white)",
          borderBottom: "1px solid var(--stone-dark)",
          padding: "16px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          {/* Specialty pills */}
          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--bark)",
                marginRight: 10,
              }}
            >
              Specialty
            </span>
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 4,
              }}
            >
              {ALL_SPECIALTIES.map((s) => (
                <Pill
                  key={s}
                  label={s}
                  active={selectedSpecialties.includes(s)}
                  onClick={() => toggleSpecialty(s)}
                />
              ))}
            </div>
          </div>

          {/* Second row: Location, Session Type, Price */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "center",
            }}
          >
            {/* Location dropdown */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--bark)",
                }}
              >
                Location
              </span>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                style={{
                  padding: "6px 12px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-body)",
                  borderRadius: 6,
                  border: "1px solid var(--stone-dark)",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                <option>All States</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Session type pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--bark)",
                  marginRight: 4,
                }}
              >
                Session
              </span>
              {["All", "Virtual", "In-Person"].map((t) => (
                <Pill
                  key={t}
                  label={t}
                  active={sessionType === t}
                  onClick={() => setSessionType(t)}
                />
              ))}
            </div>

            {/* Price range pills */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--bark)",
                  marginRight: 4,
                }}
              >
                Price
              </span>
              {(["All", "$$", "$$$", "$$$$"] as const).map((p) => (
                <Pill
                  key={p}
                  label={
                    p === "All"
                      ? "All"
                      : p === "$$"
                        ? "$$ ($75\u2013125)"
                        : p === "$$$"
                          ? "$$$ ($125\u2013200)"
                          : "$$$$ ($200+)"
                  }
                  active={priceRange === p}
                  onClick={() => setPriceRange(p)}
                />
              ))}
            </div>

            {/* Clear + count */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginLeft: "auto",
              }}
            >
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--river)",
                    fontWeight: 600,
                    fontSize: "0.84rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    textDecoration: "underline",
                  }}
                >
                  Clear filters
                </button>
              )}
              <span
                style={{
                  fontSize: "0.84rem",
                  color: "var(--bark)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Showing {filtered.length} of {coaches.length} coaches
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Coach Cards Grid ── */}
      <section style={{ padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((coach, i) => (
            <CoachCard key={coach.id} coach={coach} index={i} />
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px 24px",
                color: "var(--bark)",
              }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>
                No coaches match your current filters.
              </p>
              <button
                onClick={clearFilters}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--river)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  textDecoration: "underline",
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Are You a Coach? CTA ── */}
      <section style={{ backgroundColor: "var(--stone)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 16,
              color: "var(--forest)",
            }}
          >
            Are you an NBC-HWC certified coach?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--bark)",
              lineHeight: 1.65,
              marginBottom: 16,
            }}
          >
            We&apos;re building the first research-backed directory for health
            coaches who work with adults over 50. During our beta, directory
            listings are completely free.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--charcoal)",
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            What you get: a professional profile page, visibility to consumers
            actively searching for evidence-based coaching, and association with
            a research-driven platform.
          </p>
          <a
            href="mailto:hello@cascadiafitness.org"
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
            Apply for a Free Listing &rarr;
          </a>
        </div>
      </section>

      {/* ── What is NBC-HWC? ── */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 16,
              color: "var(--forest)",
            }}
          >
            What is the NBC-HWC credential?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--bark)",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            The National Board for Health &amp; Wellness Coaching (NBHWC)
            credential is the gold standard for health coaching. NBC-HWC coaches
            have completed an approved training program, accumulated supervised
            coaching hours, and passed a rigorous board examination administered
            by the NBME (National Board of Medical Examiners). It&apos;s the
            same organization that certifies physicians.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--bark)",
              lineHeight: 1.7,
            }}
          >
            Every coach in our directory holds this credential. We verify it
            before listing.
          </p>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        style={{ backgroundColor: "var(--stone)", padding: "64px 24px" }}
      >
        <div
          style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 12,
            }}
          >
            Looking for research-based wellness guidance?
          </h2>
          <p
            style={{
              color: "var(--bark)",
              fontSize: "1rem",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Get our weekly digest. Peer-reviewed findings on nutrition,
            exercise, and healthy aging &mdash; in plain language, with links to
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
    </>
  );
}

function CoachCard({ coach, index }: { coach: Coach; index: number }) {
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const initials = getInitials(coach.name);
  const maxVisibleSpecialties = 4;
  const visibleSpecialties = coach.specialties.slice(0, maxVisibleSpecialties);
  const overflowCount = coach.specialties.length - maxVisibleSpecialties;

  return (
    <article
      style={{
        background: "white",
        border: "1px solid var(--stone-dark)",
        borderRadius: 12,
        padding: 24,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,58,42,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top row: avatar + name/location/badges */}
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: avatarColor,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1.2rem",
            fontFamily: "var(--font-display)",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              fontSize: "1.15rem",
              color: "var(--forest)",
              marginBottom: 4,
            }}
          >
            {coach.name}, {coach.credentials}
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--bark)",
              marginBottom: 6,
            }}
          >
            {coach.location.city}, {coach.location.state}
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {coach.virtual && (
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: "var(--river-light)",
                  color: "var(--river)",
                }}
              >
                Virtual
              </span>
            )}
            {coach.inPerson && (
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: "var(--sage-light)",
                  color: "var(--forest)",
                }}
              >
                In-Person
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: 12,
        }}
      >
        {visibleSpecialties.map((s) => (
          <span
            key={s}
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "3px 10px",
              borderRadius: 12,
              background: "var(--stone)",
              color: "var(--charcoal)",
            }}
          >
            {s}
          </span>
        ))}
        {overflowCount > 0 && (
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "3px 10px",
              borderRadius: 12,
              background: "var(--stone)",
              color: "var(--sage)",
            }}
          >
            +{overflowCount} more
          </span>
        )}
      </div>

      {/* Price + experience */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: "0.84rem",
            fontWeight: 600,
            color: "var(--forest)",
          }}
        >
          {coach.priceRange}{" "}
          <span style={{ fontWeight: 400, color: "var(--bark)" }}>
            {PRICE_LABELS[coach.priceRange]}
          </span>
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--sage)" }}>
          {coach.yearsExperience} years experience
        </span>
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--charcoal)",
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        {coach.bio}
      </p>

      {/* CTA */}
      <a
        href={coach.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 20px",
          backgroundColor: "var(--forest)",
          color: "var(--warm-white)",
          fontWeight: 600,
          fontSize: "0.88rem",
          borderRadius: 6,
          textDecoration: "none",
          fontFamily: "var(--font-body)",
        }}
      >
        Visit Website &rarr;
      </a>
    </article>
  );
}
