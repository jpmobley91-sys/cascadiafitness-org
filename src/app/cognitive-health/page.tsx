import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Cognitive Health & Brain Aging — CascadiaFitness.org",
  description:
    "How exercise, nutrition, and multidomain interventions protect your brain. Evidence from the FINGER trial, omega-3 research, and aerobic fitness studies.",
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

export default function CognitiveHealthPage() {
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
            Cognitive Health &amp; Brain Aging
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
            Your brain ages the way you train your body to let it. The evidence
            shows that combining exercise, nutrition, cognitive challenge, and
            vascular care changes cognitive trajectory in just two years.
            Here&apos;s how to protect your most important organ.
          </p>
        </div>
      </section>

      {/* ── Section 1: The FINGER Model ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            The FINGER Model: Proof That Multidomain Intervention Works
          </h2>

          <p style={bodyTextStyle}>
            The Finnish Geriatric Intervention Study to Prevent Cognitive
            Impairment and Disability (FINGER) was the first large-scale
            randomized trial to demonstrate that a multidomain lifestyle
            intervention can improve cognitive function in at-risk older adults.
          </p>

          <p style={bodyTextStyle}>
            The intervention combined four components: nutritional guidance,
            exercise programming, cognitive training, and vascular risk
            monitoring. After two years, the intervention group showed
            significantly better performance in overall cognition, executive
            function, and processing speed compared to controls.
          </p>

          <p style={bodyTextStyle}>
            The FINGER model has since been replicated and adapted across
            multiple countries and populations, establishing that cognitive
            decline is not inevitable — it is modifiable through coordinated
            lifestyle intervention.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Ngandu et al.",
                year: 2015,
                title:
                  "FINGER trial: multidomain intervention and cognitive function",
                detail: "RCT, N=1,260 — The Lancet",
              },
              {
                authors: "Kivipelto et al.",
                year: 2020,
                title:
                  "World-Wide FINGERS: global network for dementia prevention",
                detail: "Review — Alzheimer's & Dementia",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Exercise for the Brain ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Exercise for the Brain</h2>

          <p style={bodyTextStyle}>
            Your VO2max is a brain-age biomarker. Aerobic fitness predicts brain
            volume and biological brain age. Every year of maintained fitness is
            a year of structural brain preservation.
          </p>

          <p style={bodyTextStyle}>
            The type of exercise matters for different cognitive domains.
            Resistance training has the strongest effects on global cognition.
            Aerobic exercise preferentially benefits memory and hippocampal
            volume. Mind-body practices like tai chi and yoga show the best
            results for executive function.
          </p>

          <p style={bodyTextStyle}>
            An active lifestyle — independent of structured exercise — is
            associated with reduced dementia risk. Walking, gardening, household
            activity, and social engagement all contribute to the cumulative dose
            of physical activity that protects the brain.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Cardoso et al.",
                year: 2022,
                title: "Aerobic fitness and biological brain age",
                detail: "Cohort — Brain Imaging and Behavior",
              },
              {
                authors: "Northey et al.",
                year: 2018,
                title:
                  "Exercise and cognition in older adults: meta-analysis",
                detail: "Meta-analysis, 39 RCTs — British Journal of Sports Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Brain Nutrients ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Brain Nutrients: The Supplement System
          </h2>

          <p style={bodyTextStyle}>
            Supplements work as a system, not as individual pills. Omega-3 fatty
            acids open a biochemical door that B vitamins and creatine can only
            walk through if it is already open.
          </p>

          <p style={bodyTextStyle}>
            DHA — the omega-3 most concentrated in brain tissue — supports
            neuronal membrane integrity and reduces neuroinflammation. But B
            vitamins (B6, B12, folate) only slow brain atrophy in individuals
            who have adequate omega-3 status. Without the omega-3 foundation, B
            vitamin supplementation shows no cognitive benefit.
          </p>

          <p style={bodyTextStyle}>
            Creatine supplementation is emerging as a cognitive support tool,
            particularly for adults over 60. A meta-analysis found that creatine
            improved short-term memory and reasoning, with effects most
            pronounced in older adults and during periods of stress or sleep
            deprivation.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Jerneren et al.",
                year: 2015,
                title:
                  "B vitamins slow brain atrophy only with adequate omega-3",
                detail: "RCT secondary analysis — Am J Clin Nutr",
              },
              {
                authors: "Avgerinos et al.",
                year: 2018,
                title:
                  "Creatine supplementation and cognition: systematic review",
                detail: "Systematic Review — Experimental Gerontology",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: FAQ ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "What is the best exercise for brain health?",
              a: "It depends on the cognitive domain. Resistance training has the strongest evidence for global cognition. Aerobic exercise preferentially benefits memory and hippocampal volume. Mind-body practices like tai chi show the best results for executive function. The ideal program includes all three.",
            },
            {
              q: "Should I take omega-3 supplements?",
              a: "Yes, as a foundation. DHA is the most concentrated omega-3 in brain tissue and supports neuronal membrane function. Critically, B vitamins only show cognitive benefits when omega-3 status is adequate — making omega-3 the prerequisite for other brain nutrients to work.",
            },
            {
              q: "Does creatine help with memory?",
              a: "Emerging evidence says yes, especially for adults over 60. Creatine supplementation improved short-term memory and reasoning in meta-analyses, with the strongest effects in older adults and during cognitive stress. Powder form is recommended over capsules for adequate dosing.",
            },
            {
              q: "Can I prevent Alzheimer's?",
              a: "Delay, not prevent, is the accurate framing. No single intervention eliminates Alzheimer's risk. But the FINGER trial and related research show that multidomain lifestyle approaches — combining exercise, nutrition, cognitive engagement, and vascular care — can significantly reduce risk and delay onset.",
            },
            {
              q: "How does social engagement affect brain health?",
              a: "Positively, in general. Social interaction provides cognitive stimulation, emotional regulation, and motivation for physical activity. Social isolation is an independent risk factor for cognitive decline. However, the quality of social engagement matters more than the quantity.",
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
            New brain health research, summarized in plain language, delivered
            every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
