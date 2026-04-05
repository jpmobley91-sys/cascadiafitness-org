import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Behavior Change & Motivation — CascadiaFitness.org",
  description:
    "Why willpower fails, what actually sustains behavior change, the 12-month cliff, and evidence-based strategies for building health habits that last.",
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
            Behavior Change &amp; Motivation
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
            Sustainable behavior change is a systems design problem, not a
            willpower problem. Every behavior change intervention studied loses
            its effect within 12&ndash;24 months. The science is not about
            finding more motivation &mdash; it&apos;s about designing for
            renewal. Here&apos;s what the evidence says.
          </p>
        </div>
      </section>

      {/* ── Section 1: It's Not a Willpower Problem ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>It&apos;s Not a Willpower Problem</h2>

          <p style={bodyTextStyle}>
            The most common explanation for failed health behavior is lack of
            motivation or discipline. The research says otherwise. Behavior
            change fails because of poorly designed systems, not weak
            individuals.
          </p>

          <p style={bodyTextStyle}>
            60% of people prescribed exercise are not ready to exercise. This is
            not resistance &mdash; it is a mismatch between the intervention and
            the person&apos;s stage of change. The Transtheoretical Model
            identifies five stages (precontemplation, contemplation, preparation,
            action, maintenance), and most health advice assumes everyone is in
            the action stage.
          </p>

          <p style={bodyTextStyle}>
            Starting where you are &mdash; not where you think you should be
            &mdash; is not a consolation. It is the evidence-based approach.
            Interventions matched to a person&apos;s readiness stage produce
            significantly better outcomes than one-size-fits-all prescriptions.
          </p>
        </div>
      </section>

      {/* ── Section 2: The Most Powerful Lever: Another Person ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            The Most Powerful Lever: Another Person
          </h2>

          <p style={bodyTextStyle}>
            The single most powerful predictor of sustained behavior change is
            social accountability. Having another person who expects you to show
            up &mdash; a coach, a workout partner, a group &mdash; outperforms
            every individual motivation strategy studied.
          </p>

          <p style={bodyTextStyle}>
            This is not simply peer pressure. Social support provides three
            mechanisms that individual willpower cannot: external accountability
            (someone notices when you don&apos;t show up), identity
            reinforcement (you become someone who exercises), and emotional
            regulation (social connection buffers the stress that derails health
            behaviors).
          </p>

          <p style={bodyTextStyle}>
            The research on exercise partners is unambiguous. When asked whether
            it is better to exercise alone or with someone, the answer is with
            someone &mdash; across every population, every age group, and every
            outcome measured.
          </p>
        </div>
      </section>

      {/* ── Section 3: The 12-Month Cliff ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>The 12-Month Cliff</h2>

          <p style={bodyTextStyle}>
            Every behavior change intervention studied shows declining effect
            over time. Most programs produce strong results at 3&ndash;6 months,
            modest results at 12 months, and minimal residual effect at 24
            months. This pattern is so consistent it should be considered a
            feature of behavior change, not a failure of any specific program.
          </p>

          <p style={bodyTextStyle}>
            The implication is profound: no single intervention will sustain you
            for life. Health behavior requires periodic renewal &mdash; new
            programs, new partners, new challenges, new environments. Designing
            for this reality, rather than hoping it won&apos;t apply to you, is
            the key to long-term success.
          </p>

          <p style={bodyTextStyle}>
            The coaching model addresses this directly. The evidence-based
            coaching engagement of 12&ndash;15 sessions over 7&ndash;9 months is
            not designed to create permanent change in one cycle. It is designed
            to build the self-regulation skills and self-efficacy that allow you
            to navigate subsequent cycles of renewal independently.
          </p>
        </div>
      </section>

      {/* ── Section 4: Stress Regulation Is a Prerequisite ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>
            Stress Regulation Is a Prerequisite
          </h2>

          <p style={bodyTextStyle}>
            Stress regulation is not a nice-to-have &mdash; it is a
            prerequisite for every other behavior change. Chronic stress impairs
            executive function, depletes the cognitive resources needed for
            self-regulation, drives compensatory eating, disrupts sleep, and
            reduces exercise adherence.
          </p>

          <p style={bodyTextStyle}>
            The research shows that addressing stress management before or
            alongside health behavior goals produces better outcomes than
            ignoring stress and focusing only on diet and exercise. This is why
            coaching protocols that begin with stress and sleep assessment
            outperform those that jump straight to nutrition and exercise
            targets.
          </p>

          <p style={bodyTextStyle}>
            Practical stress regulation does not require meditation retreats or
            major life changes. Evidence-based strategies include brief breathing
            protocols, walking in nature, social connection, and consistent sleep
            schedules &mdash; interventions that themselves build toward other
            health behaviors.
          </p>
        </div>
      </section>

      {/* ── Section 5: FAQ ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                q: "Why can\u2019t I stick with exercise or diet programs?",
                a: "Because you are fighting a systems problem with individual willpower. The research shows that sustained behavior change requires environmental design, social accountability, stress regulation, and periodic renewal. It is not about trying harder \u2014 it is about building better support structures.",
              },
              {
                q: "How do I find motivation when I don\u2019t feel like it?",
                a: "You don\u2019t. Motivation is not a prerequisite for action \u2014 it is often a consequence of it. The evidence-based approach is to reduce the friction of starting (lay out workout clothes the night before, schedule exercise like an appointment) and build social accountability (a partner, a coach, a class). Motivation follows action more reliably than action follows motivation.",
              },
              {
                q: "Is it better to exercise alone or with someone?",
                a: "With someone, unambiguously. Every study comparing solo versus social exercise shows better adherence, better outcomes, and more sustained behavior change when another person is involved. This includes formal partners, group classes, coaching relationships, and even virtual accountability partners.",
              },
              {
                q: "What is motivational interviewing and how does it work?",
                a: "Motivational interviewing is a collaborative conversation technique that helps people explore and resolve ambivalence about behavior change. Rather than telling you what to do, a skilled practitioner asks open-ended questions, reflects back what you say, and helps you articulate your own reasons for change. It is the foundational communication method used by board-certified health coaches.",
              },
              {
                q: "Why does every program work for a year and then stop?",
                a: "Because the effect of any behavior change intervention naturally declines over 12\u201324 months. This is not a flaw in any specific program \u2014 it is a consistent finding across all interventions studied. The solution is designing for renewal: planning new challenges, new environments, and new social supports before the current program loses its effect. Coaching builds the self-regulation skills that make this ongoing renewal possible.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
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
            New behavior change research, summarized in plain language,
            delivered every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
