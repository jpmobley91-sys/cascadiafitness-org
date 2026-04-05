import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Healthy Aging Foundations — CascadiaFitness.org",
  description:
    "What healthy aging actually means, the six lifestyle pillars that drive it, and evidence-based strategies for preserving function into your 8th and 9th decades.",
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

export default function HealthyAgingPage() {
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
            Healthy Aging Foundations
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
            Healthy aging is not the absence of disease &mdash; it&apos;s the
            preservation of functional capacity across every domain that matters.
            Here&apos;s what the science says about the decisions you make today
            and the body they build for your 80-year-old self.
          </p>
        </div>
      </section>

      {/* ── Section 1: What Healthy Aging Really Means ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>What Healthy Aging Really Means</h2>

          <p style={bodyTextStyle}>
            Behr et al. (2023) conducted a 60-year definitional review of
            healthy aging literature. The concept has evolved from simply
            &ldquo;absence of disease&rdquo; to a multidimensional framework
            encompassing physical function, cognitive capacity, emotional
            wellbeing, social engagement, and independence.
          </p>

          <p style={bodyTextStyle}>
            Your 45-year-old decisions build your 80-year-old body. The gap
            between what science shows and what gets implemented is where
            coaching lives.
          </p>

          <p style={bodyTextStyle}>
            Masini et al. (2025) conducted a PRISMA systematic review of 14
            preventive pathway studies and found that co-designed interventions
            &mdash; where older adults help shape the programs &mdash; produce
            better adherence and outcomes.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Behr et al.",
                year: 2023,
                title: "60-year definitional review of healthy aging",
                detail: "Review — Gerontologist",
              },
              {
                authors: "Masini et al.",
                year: 2025,
                title: "Preventive pathways for healthy aging (PRISMA SR)",
                detail: "Systematic Review, 14 studies",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: The Six Pillars of Lifestyle Medicine ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            The Six Pillars of Lifestyle Medicine
          </h2>

          <p style={bodyTextStyle}>
            Lassell et al. (2025) defined six lifestyle medicine pillars:
            nutrition, exercise, sleep, stress management, social connection,
            and substance avoidance. These are the intervention &mdash; not
            background noise.
          </p>

          <p style={bodyTextStyle}>
            Each pillar interacts with the others. Poor sleep undermines
            exercise recovery. Chronic stress drives poor nutrition choices.
            Social isolation accelerates cognitive decline. The pillars are a
            system, not a checklist.
          </p>

          <p style={bodyTextStyle}>
            The transdisciplinary gaps between clinical medicine and lifestyle
            intervention represent the largest missed opportunity in preventive
            health.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Lassell et al.",
                year: 2025,
                title:
                  "Six lifestyle medicine pillars and transdisciplinary gaps",
                detail: "Review — Lifestyle Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Is Aging Modifiable? ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Is Aging Modifiable?</h2>

          <p style={bodyTextStyle}>
            Aging is not a clock you watch &mdash; it&apos;s a system you
            maintain. Genes set roughly 25% of the trajectory; daily choices
            negotiate the rest.
          </p>

          <p style={bodyTextStyle}>
            The question is not whether you will age, but how. The science
            distinguishes between &ldquo;escapers&rdquo; (those who avoid major
            disease), &ldquo;delayers&rdquo; (those who postpone it), and
            &ldquo;survivors&rdquo; (those who endure it). Your lifestyle
            choices determine which category you fall into.
          </p>

          <p style={bodyTextStyle}>
            Much of what we call &ldquo;normal aging&rdquo; is actually the
            body&apos;s response to decades of inactivity, poor nutrition, and
            chronic stress. These are modifiable factors, not inevitabilities.
          </p>
        </div>
      </section>

      {/* ── Section 4: FAQ ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p
                style={{
                  ...bodyTextStyle,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                What does &ldquo;healthy aging&rdquo; actually mean?
              </p>
              <p style={bodyTextStyle}>
                It&apos;s the preservation of functional capacity across five
                domains: physical, cognitive, emotional, social, and
                independence. It&apos;s not about avoiding all disease &mdash;
                it&apos;s about maintaining the ability to live the life you
                want.
              </p>
            </div>

            <div>
              <p
                style={{
                  ...bodyTextStyle,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                At what age should I start thinking about healthy aging?
              </p>
              <p style={bodyTextStyle}>
                Now. The research is clear that interventions in your 40s and
                50s have the greatest impact on outcomes in your 70s and 80s.
                But it is genuinely never too late &mdash; even adults in their
                70s show measurable improvement from lifestyle changes.
              </p>
            </div>

            <div>
              <p
                style={{
                  ...bodyTextStyle,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                What are the six pillars of lifestyle medicine?
              </p>
              <p style={bodyTextStyle}>
                Nutrition, exercise, sleep, stress management, social
                connection, and substance avoidance. These six domains interact
                as a system &mdash; optimizing one while ignoring the others
                limits your results.
              </p>
            </div>

            <div>
              <p
                style={{
                  ...bodyTextStyle,
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                How do I know if I&apos;m aging well?
              </p>
              <p style={bodyTextStyle}>
                Functional markers matter more than chronological age. Can you
                rise from the floor without using your hands? Stand on one leg
                for 10 seconds? Walk at a pace above 1.0 m/s? These simple
                tests predict longevity better than most lab work.
              </p>
            </div>
          </div>
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
            New healthy aging research, summarized in plain language, delivered
            every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
