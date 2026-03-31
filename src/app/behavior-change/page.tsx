import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behavior Change Research — CascadiaFitness.org",
  description:
    "Evidence-based behavior change strategies for lasting health habits. Motivational interviewing, social accountability, and what 9 studies say about making changes that stick.",
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

/* ── Newsletter Form ───────────────────────────────────────────────────────── */

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

export default function BehaviorChangePage() {
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
            Research Theme &middot; 3 Top 25 Studies
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
            Behavior Change
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
            Knowing what to do is rarely the problem. The research on lasting
            health behavior change is clear: it&apos;s not about willpower
            &mdash; it&apos;s about strategy. Here&apos;s what 9 studies say
            about making changes that actually stick.
          </p>
        </div>
      </section>

      {/* ── Section 1: Interpersonal Strategies Beat Willpower ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Interpersonal Strategies Beat Willpower
          </h2>

          <p style={bodyTextStyle}>
            The highest-ranked behavior change study in our corpus is a 2x2
            factorial RCT by McMahon et al. (2024, JAMA Network Open, N=309
            adults aged 70+). The question: what drives lasting physical
            activity change &mdash; personal strategies or social ones?
          </p>

          <p style={bodyTextStyle}>
            The answer was clear. Interpersonal strategies &mdash; partnered
            activities, group walks, social accountability check-ins &mdash;
            produced a significant increase of{" "}
            <strong>27.1 minutes/day of total activity</strong> at 1 week,
            sustained through 12 months. Surprisingly, intrapersonal strategies
            (goal setting, self-monitoring, action planning) showed no
            significant independent effect on physical activity when used alone.
          </p>

          <p style={bodyTextStyle}>
            The combination of interpersonal and intrapersonal strategies did
            not produce additive effects &mdash; social connection was the
            driver. If you want to move more, find someone to move with. The
            research suggests accountability and social connection matter more
            than self-tracking.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "McMahon et al.",
                year: 2024,
                title:
                  "Intrapersonal and interpersonal behavior change strategies for PA",
                detail: "2x2 Factorial RCT, N=309 — JAMA Network Open",
                rank: 4,
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 2: Which Behavior Change Techniques Work? ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Which Behavior Change Techniques Work?
          </h2>

          <p style={bodyTextStyle}>
            Ahmed et al. (2024) systematically reviewed 12 RCTs targeting
            adults aged 50&ndash;70 and identified 13 distinct behavior change
            techniques across 7 intervention components. The most effective
            BCTs: goal setting, self-monitoring, and feedback on behavior.
            Action planning and problem solving were linked to sustained change.
          </p>

          <p style={bodyTextStyle}>
            Interventions combining multiple BCTs showed stronger effects than
            single-technique approaches. Notably, all intervention components
            except social connectedness improved physical activity outcomes in
            this review &mdash; an interesting contrast with McMahon&apos;s
            finding that interpersonal strategies were the key driver in adults
            70+. Age and context may matter.
          </p>

          <p style={bodyTextStyle}>
            Gilchrist et al. (2024) also confirmed that multicomponent BCT
            interventions are more effective than single-technique approaches in
            older adult physical activity programs.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Ahmed et al.",
                year: 2024,
                title: "BCTs for PA in adults 50–70",
                detail: "Systematic Review, 12 RCTs — J Aging & Physical Activity",
              },
              {
                authors: "Gilchrist et al.",
                year: 2024,
                title: "BCTs in PA programs for older adults",
                detail: "Systematic Review",
                rank: 14,
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: Motivational Interviewing ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Motivational Interviewing: What the Evidence Shows
          </h2>

          <p style={bodyTextStyle}>
            Motivational interviewing (MI) is one of the most studied
            approaches to health behavior change. Zhu et al. (2024, BMJ)
            conducted a systematic review and meta-analysis that is the #6
            ranked article in our entire corpus.
          </p>

          <p style={bodyTextStyle}>
            Their finding: MI is effective at increasing physical activity,
            though effect sizes vary by delivery method and population. MI works
            by supporting people&apos;s intrinsic motivation rather than
            prescribing behavior &mdash; it&apos;s collaborative, not
            directive.
          </p>

          <p style={bodyTextStyle}>
            This maps directly to NBHWC Competency 2.3 (Motivational
            Interviewing), making it foundational for health coaching practice.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Zhu et al.",
                year: 2024,
                title: "MI effectiveness on physical activity",
                detail: "SR/Meta-analysis — BMJ",
                rank: 6,
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: The Long Game ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The Long Game: What Lasts?</h2>

          <p style={bodyTextStyle}>
            Hobbs et al. (2013) conducted a meta-analysis of 21 trials (10,519
            participants) looking at long-term behavioral intervention outcomes
            in adults aged 55&ndash;70.
          </p>

          <p style={bodyTextStyle}>
            At 12 months: step count increased by approximately{" "}
            <strong>2,197 extra steps per day</strong> (SMD 1.08). Physical
            activity duration showed a small but significant effect. At 24
            months: no significant effects were maintained for any physical
            activity outcome.
          </p>

          <p style={bodyTextStyle}>
            This is an honest finding: most behavioral interventions produce
            gains that fade after the first year without ongoing support.
            Tailored interventions with personalized goals and
            pedometers/self-monitoring showed stronger effects. The implication
            is clear: behavior change programs need built-in maintenance
            strategies. A 12-week program isn&apos;t enough &mdash; ongoing
            structure and support matter.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Hobbs et al.",
                year: 2013,
                title:
                  "Behavioral interventions for PA at 12–36 months",
                detail: "SR/Meta-analysis, 21 trials, N=10,519 — BMC Medicine",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 5: Nature and Stress ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Nature and Stress</h2>

          <p style={bodyTextStyle}>
            Behavior change isn&apos;t only about exercise habits &mdash;
            stress regulation plays a role in overall wellness. Sudimac et al.
            (2022) used fMRI to measure brain activity before and after a
            60-minute walk. The nature walk group showed significantly{" "}
            <strong>decreased amygdala activity</strong> (the brain&apos;s
            stress response center) compared to the urban walk group.
          </p>

          <p style={bodyTextStyle}>
            The effect was observed in both hemispheres and specifically during
            a social stress task. Interestingly, self-reported stress measures
            did not differ between groups &mdash; the neural changes occurred
            below conscious awareness.
          </p>

          <p style={bodyTextStyle}>
            Practical takeaway: walking in nature may help regulate stress at a
            neurobiological level, even when you don&apos;t &ldquo;feel&rdquo;
            the difference.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Sudimac et al.",
                year: 2022,
                title:
                  "Amygdala activity decreases after one-hour nature walk",
                detail: "fMRI Study, N=63 — Molecular Psychiatry",
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
            Behavior change research, summarized in plain language, delivered
            every week.
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
