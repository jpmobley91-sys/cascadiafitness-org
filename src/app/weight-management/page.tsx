import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weight Management & Metabolic Health — CascadiaFitness.org",
  description:
    "Why metabolic health matters more than the scale, the muscle preservation imperative during weight loss, and evidence-based strategies for body composition after 40.",
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

/* ── Newsletter Form ────────────────────────────────────────────────────────── */

function NewsletterForm() {
  return (
    <form
      style={{
        display: "flex",
        gap: 10,
        maxWidth: 440,
        margin: "0 auto",
      }}
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
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function WeightManagementPage() {
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
            Weight Management &amp; Metabolic Health
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
            The goal is metabolic optimization with muscle preservation &mdash;
            not weight loss. 93% of Americans are metabolically unhealthy, and
            what the scale shows you is the least important part of the story.
            Here&apos;s what the evidence says about body composition,
            metabolism, and aging.
          </p>
        </div>
      </section>

      {/* ── Section 1: What Your Scale Can't Tell You ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>What Your Scale Can&apos;t Tell You</h2>

          <p style={bodyTextStyle}>
            Body composition matters more than body weight. Two people at the
            same weight can have vastly different health profiles depending on
            their ratio of muscle to fat, where fat is distributed, and how
            their metabolism processes fuel.
          </p>

          <p style={bodyTextStyle}>
            BMI is a population screening tool, not an individual health
            measure. It cannot distinguish muscle from fat, does not account for
            fat distribution, and misclassifies metabolically healthy individuals
            as overweight while missing metabolically unhealthy individuals at
            normal weight.
          </p>

          <p style={bodyTextStyle}>
            Fat-free mass index (FFMI) and waist-to-hip ratio are more
            informative measures for individual health assessment. The shift from
            scale weight to body composition is one of the most important
            reframings in modern health science.
          </p>
        </div>
      </section>

      {/* ── Section 2: The Metabolic Health Crisis ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Metabolic Health Crisis</h2>

          <p style={bodyTextStyle}>
            An estimated 93% of American adults do not meet criteria for optimal
            metabolic health, defined by five markers: blood glucose,
            triglycerides, HDL cholesterol, blood pressure, and waist
            circumference.
          </p>

          <p style={bodyTextStyle}>
            Simple blood tests &mdash; particularly the triglyceride-to-HDL
            ratio &mdash; can reveal metabolic dysfunction years before disease
            diagnosis. A TG/HDL ratio above 3.5 is a warning signal that most
            routine physicals overlook.
          </p>

          <p style={bodyTextStyle}>
            Metabolic health is modifiable through the same lifestyle pillars
            that drive all healthy aging: nutrition, exercise, sleep, and stress
            management. The interventions are not exotic &mdash; they are
            foundational.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Araújo et al.",
                year: 2019,
                title:
                  "Prevalence of optimal metabolic health in US adults",
                detail:
                  "Cross-sectional, NHANES — Metabolic Syndrome and Related Disorders",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: The Muscle Preservation Imperative ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            The Muscle Preservation Imperative
          </h2>

          <p style={bodyTextStyle}>
            Weight loss without resistance training accelerates the very muscle
            loss that threatens independence in later decades. Up to 25% of
            weight lost through caloric restriction alone comes from lean tissue
            &mdash; muscle, bone, and organ mass.
          </p>

          <p style={bodyTextStyle}>
            This is especially dangerous after 50, when the body is already
            losing muscle at 1&ndash;2% per year through sarcopenia. Dieting
            without strength training compounds the problem, creating a thinner
            but more fragile body.
          </p>

          <p style={bodyTextStyle}>
            The evidence is clear: any weight loss program for adults over 40
            must include progressive resistance training to preserve muscle mass.
            Protein intake of 1.2&ndash;1.6 g/kg/day during caloric restriction
            further protects lean tissue.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Willoughby et al.",
                year: 2018,
                title:
                  "Body composition changes in weight loss: role of resistance training",
                detail: "Review — Nutrients",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: Time-Restricted Eating & GLP-1 ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Time-Restricted Eating &amp; GLP-1 Medications
          </h2>

          <p style={bodyTextStyle}>
            Time-restricted eating (TRE) is a metabolic tool, not a diet. By
            compressing the daily eating window to 8&ndash;10 hours, TRE
            improves insulin sensitivity, reduces inflammatory markers, and may
            support modest fat loss &mdash; independent of calorie counting.
          </p>

          <p style={bodyTextStyle}>
            GLP-1 receptor agonists (Ozempic, Wegovy, Mounjaro) represent a
            pharmaceutical breakthrough in weight management, but they do not
            replace the need for exercise. In fact, the muscle loss associated
            with rapid GLP-1-mediated weight loss makes resistance training more
            important than ever during medication use.
          </p>

          <p style={bodyTextStyle}>
            The question is not whether these tools work &mdash; they do. The
            question is whether the weight loss they produce preserves the
            functional capacity you need for the decades ahead. Without
            concurrent strength training and adequate protein, the answer is
            often no.
          </p>
        </div>
      </section>

      {/* ── Section 5: FAQ ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "Is BMI a useful measure?",
              a: "For population-level screening, yes. For individual health assessment, it is deeply limited. BMI cannot distinguish muscle from fat and does not account for fat distribution. A muscular athlete and a sedentary individual can have identical BMIs with completely different health profiles. Body composition measures like DEXA, waist-to-hip ratio, or fat-free mass index are far more informative.",
            },
            {
              q: "What is metabolic health and how do I know if I have it?",
              a: "Metabolic health is defined by five markers within healthy ranges: fasting blood glucose below 100, triglycerides below 150, HDL cholesterol above 40 for men or 50 for women, blood pressure below 120/80, and waist circumference below 40 inches for men or 35 inches for women. Ask your doctor for these numbers at your next visit.",
            },
            {
              q: "I'm on Ozempic or Wegovy — do I still need to exercise?",
              a: "More than ever. GLP-1 medications cause significant weight loss, but up to 25–40% of that loss can come from lean tissue including muscle. Resistance training at least twice per week plus protein intake of 1.2–1.6 g/kg/day are essential to preserve the muscle mass you need for long-term function and independence.",
            },
            {
              q: "What is time-restricted eating and does it work?",
              a: "TRE compresses your daily eating to an 8–10 hour window, typically by extending your overnight fast. Evidence shows improvements in insulin sensitivity and inflammatory markers. It works best as a metabolic timing strategy layered on top of good nutrition — not as a license to eat poorly within a shorter window.",
            },
            {
              q: "Why am I gaining weight in menopause?",
              a: "Hormonal shifts during menopause — particularly declining estrogen — redistribute fat toward visceral (abdominal) storage, reduce muscle mass, and alter metabolic rate. This is not a failure of willpower. The evidence-based response is resistance training to preserve muscle, adequate protein, and attention to sleep quality, which deteriorates during perimenopause and compounds the metabolic disruption.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              style={{
                borderBottom: "1px solid var(--stone-dark)",
                paddingBottom: 24,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                  fontWeight: 600,
                }}
              >
                {q}
              </p>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section style={{ padding: "80px 24px", backgroundColor: "var(--stone)" }}>
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
            New metabolic health research, summarized in plain language,
            delivered every week.
          </p>
          <NewsletterForm />
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
