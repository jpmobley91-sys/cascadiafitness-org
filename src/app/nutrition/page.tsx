"use client";

import ProteinCalculator from "@/components/ProteinCalculator";

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

/* ── Study Card Types ──────────────────────────────────────────────────────── */

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

export default function NutritionPage() {
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
            Research Theme &middot; 6 Top 25 Studies
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
            Nutrition After 50
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
            What does the peer-reviewed evidence actually say about protein, diet
            quality, and supplementation for adults over 50? We distilled 28
            studies — including 6 in our Top 25 — into clear, actionable
            guidance.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Protein Question ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Protein Question</h2>

          <p style={bodyTextStyle}>
            The current Recommended Dietary Allowance (RDA) of 0.8 g/kg/day was
            designed to prevent deficiency — not to optimize muscle health in
            aging adults. Both the PROT-AGE Study Group and the European Society
            for Clinical Nutrition and Metabolism (ESPEN) now recommend{" "}
            <strong>1.0–1.2 g/kg/day</strong> for healthy adults over 65, rising
            to <strong>1.2–1.5 g/kg/day</strong> for those who are physically
            active or managing chronic conditions.
          </p>

          <p style={bodyTextStyle}>
            A 2025 randomized controlled trial by Church et al. found that
            within a 2-meal eating pattern, consuming 1.5 g/kg/day produced
            significantly more positive whole-body net protein balance than
            either 0.8 or 1.1 g/kg/day — evidence that the current RDA may
            leave older adults in a suboptimal protein state.
          </p>

          <p style={bodyTextStyle}>
            The Health ABC Study (Houston et al., 2008), following 2,066 older
            adults over three years, found that participants in the highest
            protein intake quintile lost{" "}
            <strong>40% less lean mass</strong> than those in the lowest
            quintile. Despite this evidence, roughly 30% of men and 50% of women
            over 71 in the United States consume inadequate protein (Harris et
            al., 2025).
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Morgan et al.",
                year: 2025,
                title:
                  "Protein recommendations for healthy muscle ageing",
                detail: "Expert Consensus",
                rank: 2,
              },
              {
                authors: "Church et al.",
                year: 2025,
                title:
                  "Effect of 3 different daily protein intakes on protein turnover",
                detail: "RCT",
                rank: 5,
              },
              {
                authors: "Houston et al.",
                year: 2008,
                title:
                  "Dietary protein intake and lean mass change in older adults",
                detail: "Cohort, N=2,066",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Per-Meal Protein Targets ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Per-Meal Protein Targets</h2>

          <p style={bodyTextStyle}>
            Total daily protein matters, but so does how you distribute it
            across meals. Older adults need at least{" "}
            <strong>25–30 g of protein per meal</strong> (roughly 0.4 g/kg/meal)
            to maximally stimulate muscle protein synthesis (MPS).
          </p>

          <p style={bodyTextStyle}>
            The MPS response has a finite duration of about 2–3 hours
            post-meal, which means a single large dinner is suboptimal compared
            to spreading protein intake evenly. Research by Layman (2024) shows
            that meals need at least <strong>2.8 g of leucine</strong> — found
            in approximately 30 g of high-quality protein — to reliably trigger
            MPS in adults over 60.
          </p>

          <p style={bodyTextStyle}>
            Hayashi et al. (2020) found that the number of meals containing at
            least 20 g of protein was significantly associated with greater lean
            mass in frail elderly participants. Schoenfeld &amp; Aragon (2018)
            recommend targeting 0.4 g/kg/meal across at least four meals daily
            for maximum anabolic benefit.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Layman",
                year: 2024,
                title:
                  "Impacts of protein quantity and distribution on body composition",
                detail: "Review",
              },
              {
                authors: "Hayashi et al.",
                year: 2020,
                title:
                  "Number of high-protein meals correlates with muscle mass",
                detail: "Cross-sectional, N=157",
              },
              {
                authors: "Schoenfeld & Aragon",
                year: 2018,
                title:
                  "How much protein can the body use in a single meal",
                detail: "Review",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Protein Calculator ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Protein Calculator</h2>
          <p style={{ ...bodyTextStyle, marginBottom: 32 }}>
            Use this calculator to estimate your daily protein target based on
            current research. Enter your details below.
          </p>
          <ProteinCalculator />
        </div>
      </section>

      {/* ── Section 4: Beyond Protein — Diet Quality ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Beyond Protein: Diet Quality</h2>

          <p style={bodyTextStyle}>
            The Mediterranean diet is the most-studied dietary pattern for
            cardiovascular and cognitive health in older adults. The landmark
            PREDIMED trial (Estruch et al., 2013), enrolling 7,447
            participants, demonstrated a{" "}
            <strong>30% reduction in major cardiovascular events</strong> with a
            Mediterranean diet compared to a control diet over approximately
            five years.
          </p>

          <p style={bodyTextStyle}>
            A related randomized controlled trial by Valls-Pedret et al. (2015)
            found that a Mediterranean diet supplemented with extra-virgin olive
            oil or mixed nuts countered age-related cognitive decline over four
            or more years in 447 participants.
          </p>

          <p style={bodyTextStyle}>
            Diet composition affects health both directly and through the gut
            microbiota (Perler et al., 2023). A Cochrane review by Abdelhamid
            et al. (2018), encompassing 49 RCTs, concluded that increasing
            polyunsaturated fatty acid intake probably slightly reduces coronary
            heart disease and cardiovascular events.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Estruch et al.",
                year: 2013,
                title:
                  "Primary prevention of CVD with Mediterranean diet",
                detail: "RCT, N=7,447 — NEJM",
              },
              {
                authors: "Valls-Pedret et al.",
                year: 2015,
                title: "Mediterranean diet and cognitive decline",
                detail: "RCT, N=447 — JAMA Internal Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 5: Creatine and Supplementation ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Creatine and Supplementation</h2>

          <p style={bodyTextStyle}>
            Creatine monohydrate, when combined with resistance training,
            increases lean body mass by approximately 1 kg and improves
            upper-body strength and grip strength in older adults. About{" "}
            <strong>70% of adults over 65</strong> consume less than the
            recommended creatine intake.
          </p>

          <p style={bodyTextStyle}>
            A 2024 meta-analysis by Davies et al., pooling 33 randomized
            controlled trials, found that creatine supplementation improved
            sit-to-stand performance (SMD 0.51) and increased lean tissue mass
            by 1.08 kg.
          </p>

          <p style={bodyTextStyle}>
            Context matters: the global supplement market exceeds $200 billion,
            and many products lack strong evidence (Khubchandani &amp; Batra,
            2024). Creatine monohydrate stands out as one of the few supplements
            with robust, replicated research support.{" "}
            <strong>
              Always consult a healthcare provider before starting any
              supplement.
            </strong>
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Davies et al.",
                year: 2024,
                title:
                  "Creatine supplementation for optimization of physical function",
                detail: "SR/MA, 33 RCTs",
                rank: 24,
              },
              {
                authors: "Candow et al.",
                year: 2025,
                title:
                  "Creatine monohydrate supplementation for older adults",
                detail: "Review",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 6: Newsletter CTA ── */}
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
            New nutrition research, summarized in plain language, delivered every
            week.
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
