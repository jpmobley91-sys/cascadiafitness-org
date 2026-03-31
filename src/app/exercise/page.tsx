import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exercise Research — CascadiaFitness.org",
  description:
    "Global exercise guidelines and resistance training evidence for adults over 50. Peer-reviewed research translated into practical guidance.",
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
            Research Theme &middot; 4 Top 25 Studies
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
            The evidence is unambiguous: physical activity is the single most
            powerful intervention for healthy aging. Here&apos;s what 24
            studies — including the #1 ranked article in our entire
            collection — say about how to move.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Case for Movement ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Case for Movement</h2>

          <p style={bodyTextStyle}>
            Being physically unfit carries a greater mortality risk than any
            traditional cardiac risk factor — including smoking, diabetes, and
            coronary artery disease. Mandsager et al. (2018), studying 122,007
            patients, found that elite fitness was associated with an{" "}
            <strong>80% reduction in mortality risk</strong> compared to the
            least fit, with no observed upper limit of benefit.
          </p>

          <p style={bodyTextStyle}>
            Kokkinos et al. (2022) confirmed these findings across 750,302
            veterans of all ages, races, and both sexes: the association between
            cardiorespiratory fitness and mortality is inverse, independent, and
            graded. Higher fitness consistently means lower risk, without a
            plateau.
          </p>

          <p style={bodyTextStyle}>
            Harridge &amp; Lazarus (2017) argue that much of what we attribute
            to &ldquo;aging&rdquo; is actually deconditioning. In one striking
            example, just three weeks of bedrest produced physiological decline
            comparable to 40 years of aging — but the effects were reversible
            with training.
          </p>

          <p style={bodyTextStyle}>
            Lee et al. (2022), following 116,221 adults over 30 years, found
            that maximum mortality benefit is achieved at roughly{" "}
            <strong>150–300 minutes per week of vigorous activity</strong>.
            Importantly, higher levels showed no harm — more is not dangerous,
            it simply yields diminishing returns.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Mandsager et al.",
                year: 2018,
                title: "CRF and long-term mortality",
                detail: "Cohort, N=122,007 — JAMA Network Open",
              },
              {
                authors: "Kokkinos et al.",
                year: 2022,
                title: "CRF and mortality across age, race, sex",
                detail: "Cohort, N=750,302 — JACC",
              },
              {
                authors: "Lee et al.",
                year: 2022,
                title: "Long-term PA intensity and mortality",
                detail: "Cohort, N=116,221 — Circulation",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: What the Guidelines Recommend ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>What the Guidelines Recommend</h2>

          <p style={bodyTextStyle}>
            The 2025 ICFSR Global Consensus by Izquierdo et al. — the{" "}
            <strong>#1 ranked article</strong> in our entire corpus —
            recommends at least 150 minutes of moderate-intensity or 75 minutes
            of vigorous-intensity aerobic activity per week, plus
            muscle-strengthening activities on two or more days per week.
          </p>

          <p style={bodyTextStyle}>
            Exercise should be prescribed like medication: with a specific dose,
            modality, and intensity tailored to the individual. Multicomponent
            programs that combine strength, balance, and flexibility training
            are the most effective approach for preventing falls and maintaining
            functional capacity.
          </p>

          <p style={bodyTextStyle}>
            Progressive resistance training is specifically essential for
            combating sarcopenia and frailty. The ICFSR 2021 guidelines
            (Izquierdo et al.) go further, recommending that exercise can serve
            as an alternative to potentially inappropriate medications for
            depression and other conditions.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Izquierdo et al.",
                year: 2025,
                title: "Global consensus on exercise for healthy longevity",
                detail: "Expert Consensus",
                rank: 1,
              },
              {
                authors: "Izquierdo et al.",
                year: 2021,
                title: "International exercise recommendations (ICFSR)",
                detail: "Expert Consensus",
                rank: 10,
              },
              {
                authors: "US DHHS",
                year: 2018,
                title: "Physical Activity Guidelines for Americans, 2nd ed.",
                detail: "Guideline",
                rank: 16,
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Strength Matters More Than Size ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Strength Matters More Than Size
          </h2>

          <p style={bodyTextStyle}>
            Newman et al. (2006), analyzing 2,292 adults aged 70–79 in the
            Health ABC Study, found that muscle{" "}
            <strong>strength — not muscle mass — predicted mortality</strong>.
            The strength–mortality association was not explained by muscle size,
            overturning the assumption that bigger muscles automatically mean
            better outcomes.
          </p>

          <p style={bodyTextStyle}>
            Low grip strength is associated with a{" "}
            <strong>72% higher risk of dementia</strong> and 87% higher dementia
            mortality (Esteban-Cornejo et al., 2022, UK Biobank, N=466,788).
            Bohannon (2019) found that grip strength predicts all-cause
            mortality, falls, fractures, hospitalization, and cognitive decline.
          </p>

          <p style={bodyTextStyle}>
            The combination of fitness and strength is especially powerful. Kim
            et al. (2018), studying 70,913 UK Biobank participants, found that
            combined high cardiorespiratory fitness and high grip strength
            reduces all-cause mortality risk by{" "}
            <strong>47%</strong> and CVD mortality by{" "}
            <strong>69%</strong> compared to the least fit. Even among men with
            hypertension, those in the highest third of muscular strength had
            34% lower mortality risk (Artero et al., 2011).
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Newman et al.",
                year: 2006,
                title:
                  "Strength, not muscle mass, associated with mortality",
                detail: "Cohort, N=2,292 — J Gerontology",
              },
              {
                authors: "Esteban-Cornejo et al.",
                year: 2022,
                title: "Grip strength and dementia incidence",
                detail: "Cohort, N=466,788 — UK Biobank",
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

      {/* ── Section 4: It's Never Too Late ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>It&apos;s Never Too Late</h2>

          <p style={bodyTextStyle}>
            Resistance exercise can literally reverse aging at the molecular
            level. Melov et al. (2007) showed that six months of resistance
            training reversed age-associated gene expression changes in skeletal
            muscle, shifting transcriptional profiles toward those of younger
            adults.
          </p>

          <p style={bodyTextStyle}>
            The threshold for benefit is remarkably low. Wen et al. (2011),
            following 416,175 participants, found that as little as{" "}
            <strong>15 minutes of daily exercise</strong> reduces all-cause
            mortality by 14% and extends life expectancy by three years. Each
            additional 15 minutes beyond the minimum reduces mortality by
            another 4%.
          </p>

          <p style={bodyTextStyle}>
            Naci &amp; Ioannidis (2015), comparing exercise to drug
            interventions across 305 RCTs, found that exercise was comparable to
            medications for secondary prevention of heart disease and
            prediabetes, and{" "}
            <strong>more effective than anticoagulants after stroke</strong>.
            Exercise is medicine — with evidence comparable to pharmaceutical
            interventions.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Melov et al.",
                year: 2007,
                title:
                  "Resistance exercise reverses aging in skeletal muscle",
                detail: "Experimental — PLoS ONE",
              },
              {
                authors: "Wen et al.",
                year: 2011,
                title: "Minimum PA for reduced mortality",
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
