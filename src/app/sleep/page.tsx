import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Sleep & Recovery — CascadiaFitness.org",
  description:
    "Why sleep is metabolic medicine, the 7-hour floor, heat therapy evidence, and practical recovery strategies backed by peer-reviewed research.",
};

/* ── Shared Styles ─────────────────────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  padding: "80px 24px",
};

const innerStyle: React.CSSProperties = {
  maxWidth: 820,
  margin: "0 auto",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  color: "var(--forest)",
  marginBottom: 24,
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  color: "var(--charcoal)",
  lineHeight: 1.7,
  marginBottom: 16,
};

/* ── Study Card ────────────────────────────────────────────────────────────── */

interface StudyCitation {
  authors: string;
  year: number;
  title: string;
  detail: string;
  rank?: number;
}

function StudyCard({ study }: { study: StudyCitation }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid var(--stone-dark)",
        borderRadius: 8,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.88rem",
          color: "var(--charcoal)",
          fontWeight: 600,
          margin: 0,
        }}
      >
        {study.authors} ({study.year})
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.88rem",
          fontStyle: "italic",
          color: "var(--bark)",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {study.title}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            padding: "3px 10px",
            borderRadius: 4,
            background: "var(--stone)",
            color: "var(--bark)",
            fontFamily: "var(--font-body)",
          }}
        >
          {study.detail}
        </span>
        {study.rank && (
          <span
            style={{
              display: "inline-block",
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              padding: "3px 10px",
              borderRadius: 4,
              background: "var(--forest)",
              color: "var(--warm-white)",
              fontFamily: "var(--font-body)",
            }}
          >
            Top 25 #{study.rank}
          </span>
        )}
      </div>
    </div>
  );
}

function StudyGrid({ studies }: { studies: StudyCitation[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 16,
        marginTop: 32,
      }}
    >
      {studies.map((s) => (
        <StudyCard key={`${s.authors}-${s.year}`} study={s} />
      ))}
    </div>
  );
}


/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function SleepPage() {
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
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
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
            Research Theme
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              maxWidth: 680,
              marginBottom: 20,
              color: "var(--forest)",
            }}
          >
            Sleep &amp; Recovery
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.15rem",
              maxWidth: 620,
              color: "var(--bark)",
              lineHeight: 1.65,
            }}
          >
            Sleep is not rest &mdash; it&apos;s an active biological process
            that regulates metabolism, clears neural waste, and rebuilds tissue.
            Below 7 hours, your body begins a quiet insurrection. Here&apos;s
            what the research says about protecting your most underrated health
            asset.
          </p>
        </div>
      </section>

      {/* ── Section 1: The 7-Hour Floor ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The 7-Hour Floor</h2>

          <p style={bodyTextStyle}>
            Consensus recommendations from multiple professional bodies converge
            on <strong>7&ndash;8 hours as the minimum effective sleep dose</strong>{" "}
            for adults. Below this threshold, risks accumulate across every
            system.
          </p>

          <p style={bodyTextStyle}>
            Short sleep duration is associated with increased blood pressure,
            deepening insulin resistance, appetite hormone disruption toward
            overconsumption, and impaired brain waste clearance via the
            glymphatic system.
          </p>

          <p style={bodyTextStyle}>
            The relationship is dose-dependent: each hour below 7 increases
            cardiometabolic risk in a graded fashion. This is not about
            optimization &mdash; it is about preventing a physiological cascade
            that accelerates aging.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Consensus Panel",
                year: 2024,
                title:
                  "Sleep duration and cardiometabolic health: dose-response evidence",
                detail: "Consensus Recommendations",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Sleep, Appetite & Weight ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Sleep, Appetite &amp; Weight</h2>

          <p style={bodyTextStyle}>
            A single sleep hygiene intervention extending sleep by 1.2 hours
            reduced daily caloric intake by{" "}
            <strong>270 calories</strong> in a randomized controlled trial
            &mdash; with no dietary instruction whatsoever.
          </p>

          <p style={bodyTextStyle}>
            Poor sleep disrupts the appetite hormone cascade: ghrelin (hunger)
            rises, leptin (satiety) falls, and the net effect is 250&ndash;350
            excess calories per day. Over a year, that is roughly 25&ndash;35
            pounds of potential weight gain from sleep debt alone.
          </p>

          <p style={bodyTextStyle}>
            The connection between sleep and weight is bidirectional. Excess
            weight impairs sleep quality through mechanisms including sleep
            apnea, and poor sleep drives further weight gain. Breaking this
            cycle requires addressing sleep as a primary intervention, not an
            afterthought.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Tasali et al.",
                year: 2022,
                title:
                  "Sleep extension reduces caloric intake in overweight adults",
                detail: "RCT — JAMA Internal Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Brain Detox: The Glymphatic System ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Brain Detox: The Glymphatic System
          </h2>

          <p style={bodyTextStyle}>
            During deep sleep, the brain&apos;s glymphatic system activates a
            waste-clearance process that removes metabolic byproducts, including
            beta-amyloid &mdash; the protein implicated in Alzheimer&apos;s
            disease.
          </p>

          <p style={bodyTextStyle}>
            Sleep fragmentation &mdash; waking frequently, even briefly &mdash;
            disrupts this clearance process more than short total sleep duration
            alone. Quality matters as much as quantity.
          </p>

          <p style={bodyTextStyle}>
            Chronic insomnia is associated with accelerated biological brain
            aging. The cumulative burden of decades of poor sleep is not merely
            fatigue &mdash; it is structural brain change.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Xie et al.",
                year: 2013,
                title: "Glymphatic clearance during sleep",
                detail: "Experimental — Science",
              },
              {
                authors: "Shi et al.",
                year: 2023,
                title: "Sleep fragmentation and Alzheimer's risk",
                detail: "Longitudinal Cohort",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: Heat Therapy as Recovery ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Heat Therapy as Recovery</h2>

          <p style={bodyTextStyle}>
            Frequent sauna use (4&ndash;7 times per week) was associated with a{" "}
            <strong>63% reduction in sudden cardiac death</strong> over two
            decades of follow-up in the Finnish Kuopio Ischemic Heart Disease
            cohort.
          </p>

          <p style={bodyTextStyle}>
            The cardiovascular benefits of heat exposure mirror those of
            moderate exercise: increased heart rate, vasodilation, improved
            endothelial function, and reduced systemic inflammation.
          </p>

          <p style={bodyTextStyle}>
            Infrared sauna use has been shown to improve sleep quality and
            reduce fatigue in clinical populations, with evidence suggesting
            enhanced slow-wave sleep &mdash; the deepest and most restorative
            stage &mdash; following regular heat exposure sessions in the
            evening hours.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Laukkanen et al.",
                year: 2018,
                title: "Sauna bathing and risk of sudden cardiac death",
                detail: "Cohort — Finnish KIHD Study",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Connect CTA ── */}
      <section style={{ backgroundColor: "var(--forest)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Ready to take the next step?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--sage-light)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            Connect with a certified health and wellness coach who can put this
            research into practice with you.
          </p>
          <Link
            href="/connect"
            style={{
              display: "inline-block",
              backgroundColor: "var(--bark)",
              color: "white",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "14px 32px",
              borderRadius: 6,
            }}
          >
            Connect with a Coach →
          </Link>
        </div>
      </section>

      {/* ── Section 5: Newsletter CTA ── */}
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
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 12,
            }}
          >
            Get the weekly research digest
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--bark)",
              fontSize: "1rem",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            New sleep and recovery research, summarized in plain language,
            delivered every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
