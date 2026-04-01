import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercise & Physical Activity — CascadiaFitness.org",
  description:
    "Fitness is the most powerful modifiable determinant of lifespan and healthspan. Evidence from 24 peer-reviewed studies on strength, cardio, and movement for adults over 40.",
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

/* ── Newsletter Form (client island) ───────────────────────────────────────── */

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

export default function ExercisePage() {
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
            Research Theme &middot; 5 Featured Studies
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
            Exercise &amp; Physical Activity
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
            Fitness is the most powerful modifiable determinant of lifespan and
            healthspan. Strength predicts survival better than muscle size. The
            minimum effective dose is 15 minutes a day. And much of what we call
            &ldquo;normal aging&rdquo; is actually the body&apos;s response to
            decades of inactivity. Here&apos;s what the evidence says.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Case for Movement ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Case for Movement</h2>

          <p style={bodyTextStyle}>
            Being physically unfit carries a greater mortality risk than
            smoking, diabetes, or coronary artery disease. Mandsager et al.
            (2018), studying 122,007 patients, found that elite fitness was
            associated with an <strong>80% reduction in mortality risk</strong>{" "}
            compared to the least fit — with no observed upper limit of benefit.
          </p>

          <p style={bodyTextStyle}>
            The minimum effective dose is remarkably low. Wen et al. (2011),
            following 416,175 participants, found that as little as{" "}
            <strong>15 minutes of daily exercise</strong> reduces all-cause
            mortality by 14% and extends life expectancy by three years. Each
            additional 15 minutes beyond the minimum reduces mortality by
            another 4%.
          </p>

          <p style={bodyTextStyle}>
            Exercise matches drugs for secondary prevention of heart disease and
            prediabetes. Naci &amp; Ioannidis (2015), comparing exercise to
            pharmaceutical interventions across 305 RCTs, found exercise was
            comparable to medications and{" "}
            <strong>more effective than anticoagulants after stroke</strong>.
          </p>

          <p style={bodyTextStyle}>
            Much of what we call &ldquo;normal aging&rdquo; is actually
            deconditioning. In one striking example, three weeks of bedrest
            produced physiological decline comparable to 40 years of aging —
            but the effects were reversible with training.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Mandsager et al.",
                year: 2018,
                title: "CRF and long-term mortality: no upper limit of benefit",
                detail: "Cohort, N=122,007 — JAMA Network Open",
              },
              {
                authors: "Wen et al.",
                year: 2011,
                title: "15 min/day adds 3 years life expectancy",
                detail: "Cohort, N=416,175 — The Lancet",
              },
              {
                authors: "Naci & Ioannidis",
                year: 2015,
                title: "Exercise vs drug interventions on mortality",
                detail: "Meta-epidemiological, 305 RCTs — BJSM",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Strength Is Survival ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Strength Is Survival</h2>

          <p style={bodyTextStyle}>
            Strength predicts survival better than muscle size. Newman et al.
            (2006) analyzed 2,292 adults aged 70–79 and found that muscle{" "}
            <strong>strength — not muscle mass — predicted mortality</strong>.
            The strength–mortality association was not explained by muscle size.
          </p>

          <p style={bodyTextStyle}>
            Grip strength is your longevity credit score. Bohannon (2019) found
            that grip strength predicts all-cause mortality, falls, fractures,
            hospitalization, and cognitive decline. Low grip strength is
            associated with a <strong>72% higher risk of dementia</strong> and
            87% higher dementia mortality.
          </p>

          <p style={bodyTextStyle}>
            Resistance training can literally reverse aging at the molecular
            level. Melov et al. (2007) showed that six months of resistance
            training reversed age-associated gene expression changes in skeletal
            muscle, shifting transcriptional profiles toward those of younger
            adults.
          </p>

          <p style={bodyTextStyle}>
            The combination of fitness and strength is especially powerful. Kim
            et al. (2018) found that combined high cardiorespiratory fitness and
            high grip strength reduces all-cause mortality by{" "}
            <strong>47%</strong> and CVD mortality by <strong>69%</strong>.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Newman et al.",
                year: 2006,
                title: "Strength, not muscle mass, associated with mortality",
                detail: "Cohort, N=2,292 — J Gerontology",
              },
              {
                authors: "Melov et al.",
                year: 2007,
                title: "Resistance exercise reverses aging gene expression",
                detail: "Experimental — PLoS ONE",
              },
              {
                authors: "Kim et al.",
                year: 2018,
                title: "CRF + muscle strength and mortality risk",
                detail: "Cohort, N=70,913 — UK Biobank",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Your Fitness Test Battery ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Your Fitness Test Battery</h2>

          <p style={bodyTextStyle}>
            The 10-second one-leg stance test predicts survival. Araujo et al.
            (2022) found that inability to complete this simple test in
            middle-aged and older adults was associated with significantly higher
            all-cause mortality over 7 years of follow-up.
          </p>

          <p style={bodyTextStyle}>
            VO2max — your maximum oxygen uptake — is the single best biomarker
            of biological age. It declines approximately 10% per decade after
            age 30 in sedentary individuals, but regular training can cut that
            decline in half.
          </p>

          <p style={bodyTextStyle}>
            Grip strength, walking speed (gait velocity above 1.0 m/s), and the
            ability to rise from the floor without using your hands are simple,
            self-administered tests that predict longevity better than most lab
            work.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Araujo et al.",
                year: 2022,
                title: "10-second one-leg stance predicts survival",
                detail: "Cohort — British Journal of Sports Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: Frequently Asked Questions ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                q: "How much exercise do I actually need?",
                a: "The steepest mortality reduction comes from moving at all — going from zero to 15 minutes per day. Maximum benefit is reached at roughly 150–300 minutes per week of moderate activity or 75–150 minutes of vigorous activity. Higher levels show no harm. More is not dangerous, it simply yields diminishing returns.",
              },
              {
                q: "Is cardio or strength training more important?",
                a: "Both, but strength training is dramatically undervalued. Cardiorespiratory fitness is the strongest predictor of all-cause mortality, but grip strength independently predicts mortality, dementia, falls, and hospitalization. The ideal program includes both. If forced to choose one, the answer depends on your current baseline — but most people over 40 are more deficient in strength than aerobic capacity.",
              },
              {
                q: "Can I exercise too much?",
                a: "The research has found no safe upper limit of exercise benefit at volumes up to 4–8 times the recommended guidelines. Elite fitness carries the lowest mortality risk of any group studied. Overtraining syndrome exists but is rare outside competitive athletics. For the vast majority of adults, the risk is too little exercise, not too much.",
              },
              {
                q: "I'm 50 and haven't exercised in years. Where do I start?",
                a: "With 15 minutes a day. The evidence shows that the largest mortality benefit comes from moving from inactive to minimally active. Walk. Then walk faster. Then add bodyweight exercises. Progressive resistance training can begin at any age with any baseline — Melov's research showed gene expression reversal even in adults who began strength training in their 60s and 70s.",
              },
              {
                q: "What's the single best test of my fitness?",
                a: "VO2max testing gives the most comprehensive picture, but it requires clinical equipment. For a practical self-assessment, try these three: stand on one leg for 10 seconds with eyes open, rise from the floor without using your hands or knees, and measure your walking speed over 4 meters. These simple tests predict longevity better than most lab work.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--forest)",
                    marginBottom: 8,
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </p>
                <p style={{ ...bodyTextStyle, marginBottom: 0 }}>{a}</p>
              </div>
            ))}
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
            New exercise research, summarized in plain language, delivered every
            week.
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
