import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Nutrition & Dietary Strategies — CascadiaFitness.org",
  description:
    "Evidence-based protein targets, creatine supplementation, the Mediterranean dietary pattern, and the leucine threshold — peer-reviewed nutrition science for adults over 40.",
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
            Research Theme &middot; Strongest Evidence Base
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
            Nutrition &amp; Dietary Strategies
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
            The protein target most adults over 40 need is roughly double the
            official recommendation. Creatine monohydrate is the most underused
            supplement in aging. And protein without exercise is like fuel
            without an engine. Here&apos;s what 49 peer-reviewed articles say
            about eating for longevity.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Protein Imperative ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Protein Imperative</h2>

          <p style={bodyTextStyle}>
            The official RDA for protein (0.8 g/kg/day) was established to
            prevent deficiency — not to optimize health, preserve muscle, or
            support aging. For adults over 40, the evidence supports{" "}
            <strong>1.2–2.0 g/kg/day</strong>, roughly double the standard
            recommendation.
          </p>

          <p style={bodyTextStyle}>
            Baum et al. (2016) established this range based on nitrogen balance
            studies, muscle protein synthesis research, and clinical outcomes in
            older adults. The International Society of Sports Nutrition position
            stands in agreement.
          </p>

          <p style={bodyTextStyle}>
            The leucine threshold is why meal distribution matters. Each meal
            needs approximately <strong>2.5–2.8 grams of leucine</strong> — a
            specific amino acid — to trigger muscle protein synthesis. This means
            three meals with 30–40 grams of protein each outperforms the common
            pattern of a low-protein breakfast, moderate lunch, and large dinner.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Baum et al.",
                year: 2016,
                title: "Optimal protein intake for older adults: 1.2-2.0 g/kg/day",
                detail: "Position Statement — JAND",
              },
              {
                authors: "Phillips et al.",
                year: 2016,
                title: "Protein requirements beyond the RDA for aging adults",
                detail: "Review — Nutrients",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Protein Without Exercise Is Fuel Without an Engine ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Protein Without Exercise Is Fuel Without an Engine
          </h2>

          <p style={bodyTextStyle}>
            Zhang et al. (2025) conducted a meta-analysis that delivered a
            sobering finding: protein supplementation alone, without concurrent
            resistance exercise, produces negligible effects on lean mass and
            strength in older adults.
          </p>

          <p style={bodyTextStyle}>
            This means protein is necessary but not sufficient. The mechanical
            stimulus of resistance training activates the muscle protein synthesis
            pathways that dietary protein fuels. Without the signal, the fuel has
            nowhere to go.
          </p>

          <p style={bodyTextStyle}>
            The practical implication: any nutrition strategy for aging adults
            must be paired with a strength training program. Recommending higher
            protein intake without prescribing exercise is incomplete at best and
            misleading at worst.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Zhang et al.",
                year: 2025,
                title:
                  "Protein supplementation without exercise: negligible lean mass effects",
                detail: "Meta-analysis — Clinical Nutrition",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Creatine: Pennies a Day, Decades of Benefit ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Creatine: Pennies a Day, Decades of Benefit
          </h2>

          <p style={bodyTextStyle}>
            Creatine monohydrate is the most studied ergogenic supplement in
            history, with over 500 peer-reviewed studies and a safety profile
            spanning decades. Yet it remains dramatically underused in aging
            populations where it may matter most.
          </p>

          <p style={bodyTextStyle}>
            Davies et al. (2024) conducted a meta-analysis showing creatine
            supplementation combined with resistance training added an average of{" "}
            <strong>1.08 kg of lean mass</strong> compared to resistance training
            alone. For older adults fighting sarcopenia, that is a meaningful
            clinical difference.
          </p>

          <p style={bodyTextStyle}>
            Beyond muscle, creatine is emerging as a cognitive support tool. It
            serves as a phosphocreatine energy buffer in the brain, and
            supplementation has shown benefits for short-term memory and
            reasoning, particularly in adults over 60 and during sleep
            deprivation.
          </p>

          <p style={bodyTextStyle}>
            Does creatine cause hair loss? No. The first randomized controlled
            trial to test this directly found no effect on hair loss biomarkers.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Davies et al.",
                year: 2024,
                title: "Creatine + resistance training: +1.08 kg lean mass",
                detail: "Meta-analysis",
              },
              {
                authors: "Antonio et al.",
                year: 2021,
                title: "ISSN position stand: creatine supplementation safety",
                detail: "Position Statement — JISSN",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: The Mediterranean Operating System ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            The Mediterranean Operating System
          </h2>

          <p style={bodyTextStyle}>
            The Mediterranean dietary pattern is the most evidence-supported
            dietary approach for longevity. The PREDIMED trial — one of the
            largest and most rigorous nutrition RCTs ever conducted — demonstrated
            a <strong>30% reduction in cardiovascular events</strong> among
            high-risk adults.
          </p>

          <p style={bodyTextStyle}>
            Estruch et al. (2013) randomized 7,447 participants to a
            Mediterranean diet supplemented with either extra-virgin olive oil or
            mixed nuts versus a control diet. Both Mediterranean groups showed
            significant cardiovascular benefit, with the trial stopped early due
            to the clear advantage of the intervention groups.
          </p>

          <p style={bodyTextStyle}>
            The Mediterranean pattern works not because of any single food but
            because of the overall dietary system: high intake of vegetables,
            fruits, legumes, nuts, whole grains, fish, and olive oil, with
            moderate wine consumption and limited red meat and processed food. It
            is an anti-inflammatory dietary pattern that complements the exercise
            and sleep pillars.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Estruch et al.",
                year: 2013,
                title: "PREDIMED trial: Mediterranean diet and CVD prevention",
                detail: "RCT, N=7,447 — NEJM",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 5: Frequently Asked Questions ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "How much protein do I really need?",
              a: "If you are over 40, the evidence supports 1.2–1.6 g/kg of body weight per day for most people, and up to 2.0 g/kg/day if you are actively strength training. For a 170-pound person, that is roughly 90–120 grams per day, distributed across three meals of 30–40 grams each to hit the leucine threshold at every meal.",
            },
            {
              q: "Is plant protein as good as animal protein?",
              a: "Plant proteins are lower in leucine and less bioavailable than animal proteins, meaning you need a higher total intake to achieve the same muscle protein synthesis response. This is manageable with planning — combining legumes with grains, using soy-based proteins, and slightly increasing total protein targets. It is not a barrier, but it does require intentionality.",
            },
            {
              q: "Should I take creatine if I'm over 50?",
              a: "Especially if you are over 50. Creatine monohydrate is inexpensive, extensively studied, and safe. Combined with resistance training, it adds meaningful lean mass. It also shows emerging cognitive benefits for older adults. The dose is 3–5 grams per day, every day — no loading phase needed. Powder form mixed in water is the most cost-effective approach.",
            },
            {
              q: "What is the leucine threshold and why does it matter?",
              a: "Leucine is the amino acid that triggers muscle protein synthesis. Each meal needs approximately 2.5–2.8 grams of leucine to flip this switch. If you spread your protein too thin across many small meals or snacks, none of them may reach the threshold. This is why three substantial protein-rich meals outperform grazing.",
            },
            {
              q: "Does creatine cause hair loss?",
              a: "No. This myth originated from a single 2009 study that measured DHT levels but did not actually measure hair loss. The first randomized controlled trial designed to directly test the hair loss question found no effect. The International Society of Sports Nutrition considers creatine safe for long-term use.",
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
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                }}
              >
                {q}
              </h3>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>{a}</p>
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
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
