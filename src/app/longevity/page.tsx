import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Longevity Science — CascadiaFitness.org",
  description:
    "The science of biological aging, the hallmarks that drive it, and the evidence-based interventions — from vitamin D to exercise — proven to slow the clock.",
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

export default function LongevityPage() {
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
            Longevity Science
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
            Aging is not a clock you watch &mdash; it&apos;s a system you
            maintain. Your genes set roughly 25% of the trajectory. Your daily
            choices negotiate the rest. Here&apos;s what the evidence says about
            slowing biological aging and extending healthspan.
          </p>
        </div>
      </section>

      {/* ── Section 1: Everything Connects Through Inflammation ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Everything Connects Through Inflammation
          </h2>

          <p style={bodyTextStyle}>
            Sleep, exercise, nutrition, stress, and gut health all modulate the
            same inflammatory cascade. Chronic low-grade inflammation &mdash;
            sometimes called &ldquo;inflammaging&rdquo; &mdash; is the common
            thread linking nearly every age-related disease.
          </p>

          <p style={bodyTextStyle}>
            This means the problem is not ten separate battles. It is one
            integrated system. An anti-inflammatory diet supports sleep quality.
            Exercise reduces inflammatory markers. Sleep deprivation elevates
            them. Understanding this interconnection changes how you approach
            every health decision.
          </p>

          <p style={bodyTextStyle}>
            C-reactive protein (CRP) and interleukin-6 (IL-6) are measurable
            markers of this inflammatory load. Simple blood tests can reveal
            whether your lifestyle is feeding or fighting chronic inflammation.
          </p>
        </div>
      </section>

      {/* ── Section 2: The Longevity Stack ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Longevity Stack</h2>

          <p style={bodyTextStyle}>
            The simplest intervention may be the most powerful. Vitamin D
            combined with omega-3 fatty acids and 30 minutes of exercise three
            times per week is the first combination shown to slow biological
            aging in a randomized controlled trial.
          </p>

          <p style={bodyTextStyle}>
            This is not a supplement protocol &mdash; it is a systems
            intervention. Vitamin D supports immune regulation and bone
            metabolism. Omega-3s reduce inflammatory signaling. Exercise
            triggers mitochondrial biogenesis and cellular repair mechanisms.
            Together, they address multiple hallmarks of aging simultaneously.
          </p>

          <p style={bodyTextStyle}>
            The cost is minimal &mdash; vitamin D and omega-3 supplements are
            pennies per day, and 90 minutes of weekly exercise requires no
            equipment. The evidence-to-cost ratio of this triad is unmatched in
            longevity science.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Galkin et al.",
                year: 2023,
                title: "Vitamin D + omega-3 + exercise slows biological aging",
                detail: "RCT — Aging Cell",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Biological Age vs. Chronological Age ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Biological Age vs. Chronological Age
          </h2>

          <p style={bodyTextStyle}>
            Your chronological age is fixed. Your biological age is negotiable.
            Phenotypic Age &mdash; calculated from standard blood panel results
            &mdash; estimates your body&apos;s functional age independent of
            your birthday.
          </p>

          <p style={bodyTextStyle}>
            The gap between biological and chronological age predicts mortality,
            disease onset, and functional decline more accurately than
            chronological age alone. Two 55-year-olds can have biological ages a
            decade apart.
          </p>

          <p style={bodyTextStyle}>
            The most exciting finding in longevity science is that biological
            age is responsive to intervention. Lifestyle changes that reduce
            inflammation, improve metabolic function, and maintain muscle mass
            can measurably reduce biological age within months.
          </p>
        </div>
      </section>

      {/* ── Section 4: Do Centenarians Have Special Genetics? ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Do Centenarians Have Special Genetics?
          </h2>

          <p style={bodyTextStyle}>
            Yes &mdash; but less than you might think. Genetic factors
            contribute roughly 25% to longevity. Centenarian studies
            consistently show that long-lived individuals share certain genetic
            variants related to lipid metabolism, inflammation, and cellular
            repair.
          </p>

          <p style={bodyTextStyle}>
            However, lifestyle factors still add 1.8 to 3.4 years of life
            expectancy even among those with favorable genetics. And among those
            without longevity-associated genes, lifestyle becomes the dominant
            factor.
          </p>

          <p style={bodyTextStyle}>
            The practical takeaway: you cannot change your genes, but you can
            change whether they matter. For most people, the ceiling on lifespan
            is set by genetics, but the floor is set by behavior.
          </p>
        </div>
      </section>

      {/* ── Section 5: Frequently Asked Questions ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "What is biological age and how is it different from chronological age?",
              a: "Chronological age is how many years you have been alive. Biological age reflects how old your body functions as, based on biomarkers like inflammation, metabolic function, and organ performance. Two people born the same year can have biological ages a decade apart depending on lifestyle.",
            },
            {
              q: "Can I test my biological age?",
              a: "Yes. Phenotypic Age can be calculated from a standard blood panel your doctor already orders — it uses albumin, creatinine, glucose, CRP, lymphocyte percentage, mean cell volume, red cell distribution width, alkaline phosphatase, and white blood cell count. No specialized test required.",
            },
            {
              q: "What are the hallmarks of aging?",
              a: "Researchers have identified twelve fundamental biological processes that drive aging, including genomic instability, telomere attrition, mitochondrial dysfunction, cellular senescence, and chronic inflammation. These hallmarks interact as a system — intervening on one often improves others.",
            },
            {
              q: "What is the Longevity Stack?",
              a: "Vitamin D plus omega-3 fatty acids plus 30 minutes of exercise three times per week. This is the first combination shown in a randomized trial to slow biological aging. Total cost: roughly $15 per month in supplements plus 90 minutes of weekly exercise.",
            },
            {
              q: "Do centenarians have special genetics?",
              a: "Some do — certain genetic variants related to lipid metabolism and inflammation are overrepresented among centenarians. But lifestyle still adds measurable years even for the genetically fortunate, and is the dominant factor for everyone else.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                borderTop: "1px solid var(--stone-dark)",
                paddingTop: 24,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                  lineHeight: 1.4,
                }}
              >
                {q}
              </p>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>{a}</p>
            </div>
          ))}
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
            New longevity research, summarized in plain language, delivered
            every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
