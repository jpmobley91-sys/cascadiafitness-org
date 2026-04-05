import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Health & Wellness Coaching — CascadiaFitness.org",
  description:
    "The evidence behind health and wellness coaching: what it is, how long it takes, why it works, and how it differs from therapy and personal training.",
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

export default function CoachingPage() {
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
            Health &amp; Wellness Coaching
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
            Coaching works, and the effects last. 25 of 28 tracked studies
            showed outcomes that sustained or improved after coaching ended.
            This is not a compliance mirage &mdash; it is durable behavior
            change supported by a growing evidence base of 480+ studies.
          </p>
        </div>
      </section>

      {/* ── Section 1: The Evidence Is Clear ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Evidence Is Clear</h2>

          <p style={bodyTextStyle}>
            Health and wellness coaching is not a trend &mdash; it is an
            evidence-based profession with measurable outcomes. Across the
            research literature, coaching interventions consistently improve
            health behaviors, clinical biomarkers, and self-reported wellbeing.
          </p>

          <p style={bodyTextStyle}>
            The most important finding is durability. In studies that tracked
            participants after coaching ended, 25 of 28 showed that outcomes
            either sustained or continued improving. This distinguishes coaching
            from interventions that produce short-term compliance followed by
            relapse.
          </p>

          <p style={bodyTextStyle}>
            Coaching works because it addresses the root cause of failed health
            behavior: not lack of information, but lack of sustained
            implementation support. The coach does not tell you what to do
            &mdash; the coach helps you figure out how to actually do it,
            consistently, in the context of your real life.
          </p>
        </div>
      </section>

      {/* ── Section 2: The Right Dose ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Right Dose</h2>

          <p style={bodyTextStyle}>
            The evidence points to an optimal engagement structure: 12&ndash;15
            sessions over 7&ndash;9 months, with sessions lasting 35&ndash;40
            minutes each. This is not arbitrary &mdash; it reflects the time
            required to move through the stages of behavior change and build
            self-sustaining habits.
          </p>

          <p style={bodyTextStyle}>
            Virtual coaching is at least as effective as in-person delivery,
            and may be more effective for sustained outcomes. The convenience
            and consistency of virtual sessions reduce dropout rates and remove
            geographic barriers to access.
          </p>

          <p style={bodyTextStyle}>
            Session frequency matters more than session length. Weekly or
            biweekly contact during the first three months, transitioning to
            monthly contact for maintenance, mirrors the natural arc of behavior
            change from intensive learning to independent practice.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Sforzo et al.",
                year: 2022,
                title: "Health coaching evidence review: 480+ studies",
                detail: "Systematic Review — American Journal of Lifestyle Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: The Profession Is Real ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Profession Is Real</h2>

          <p style={bodyTextStyle}>
            Health and wellness coaching has its own CPT codes for billing,
            more than 28,000 credentialed professionals through the National
            Board for Health &amp; Wellness Coaching (NBHWC), Medicare
            telehealth coverage, and an expanding evidence base.
          </p>

          <p style={bodyTextStyle}>
            The credential matters. Board-certified coaches (NBC-HWC) have
            completed accredited training programs, passed a national
            certification exam, and demonstrated competency in motivational
            interviewing, behavior change theory, and positive psychology.
          </p>

          <p style={bodyTextStyle}>
            Coaching is distinct from therapy, personal training, and nutrition
            counseling. Coaches do not diagnose, treat, or prescribe. They work
            within a defined scope that focuses on behavior change, goal
            setting, accountability, and self-efficacy development.
          </p>
        </div>
      </section>

      {/* ── Section 4: Coaching vs. Therapy vs. Personal Training ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Coaching vs. Therapy vs. Personal Training
          </h2>

          <p style={bodyTextStyle}>
            Therapy addresses mental health conditions, processes trauma, and
            treats clinical disorders. It is backward-looking and diagnostic.
            Coaching is forward-looking and goal-oriented &mdash; it helps
            healthy individuals implement sustainable behavior changes.
          </p>

          <p style={bodyTextStyle}>
            Personal training prescribes exercise programs and supervises
            workout execution. Coaching addresses the broader behavioral
            context: why you skip workouts, how to build consistency, what
            barriers are preventing follow-through, and how to align health
            behaviors with your values and identity.
          </p>

          <p style={bodyTextStyle}>
            The three are complementary, not competitive. Many people benefit
            from therapy AND coaching, or personal training AND coaching. The
            distinction is scope and methodology, not quality or importance.
          </p>
        </div>
      </section>

      {/* ── Section 5: FAQ ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          {[
            {
              q: "What is health and wellness coaching?",
              a: "Evidence-based behavior change support delivered by a trained and credentialed professional. Coaches use motivational interviewing, goal setting, and accountability structures to help you implement sustainable health behaviors. They do not diagnose, prescribe, or treat \u2014 they help you bridge the gap between knowing what to do and actually doing it.",
            },
            {
              q: "How long does coaching take?",
              a: "The evidence supports 12\u201315 sessions over 7\u20139 months as the optimal engagement structure. Most people see meaningful progress within the first 3 months, with the remaining sessions focused on building independence and preventing relapse. Benefits persist after coaching ends.",
            },
            {
              q: "Is virtual coaching as effective as in-person?",
              a: "Yes, and possibly more effective for long-term outcomes. Virtual delivery reduces barriers to attendance, increases scheduling flexibility, and produces comparable or superior results across most measured outcomes.",
            },
            {
              q: "Is coaching covered by insurance?",
              a: "Increasingly, yes. Health and wellness coaching has its own CPT codes, and Medicare covers telehealth coaching sessions. Private insurance coverage varies by plan. Many employers also offer coaching as a workplace wellness benefit.",
            },
            {
              q: "How is coaching different from therapy?",
              a: "Scope and direction. Therapy treats clinical mental health conditions and often processes past experiences. Coaching is forward-looking \u2014 it helps healthy individuals set and achieve goals for behavior change. Coaches do not diagnose or treat mental health disorders. The two are complementary, and many people benefit from both.",
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
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  color: "var(--forest)",
                  marginBottom: 8,
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
            New coaching science research, summarized in plain language,
            delivered every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
