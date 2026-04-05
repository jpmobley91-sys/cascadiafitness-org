import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Digital Health & Technology — CascadiaFitness.org",
  description:
    "How wearables, continuous glucose monitors, and health apps fit into evidence-based wellness — and why technology amplifies coaching but never replaces it.",
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

export default function DigitalHealthPage() {
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
            Digital Health &amp; Technology
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
            Technology amplifies coaching — it does not replace it. The most
            sophisticated AI coaching platform in a 366-person trial produced a
            majority of users who couldn&apos;t see it fitting into their lives.
            Here&apos;s what the evidence says about using technology wisely in
            your health journey.
          </p>
        </div>
      </section>

      {/* ── Section 1: Every Digital Tool Has a Half-Life ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Every Digital Tool Has a Half-Life</h2>

          <p style={bodyTextStyle}>
            Adherence to digital health tools drops predictably. Most apps and
            wearables see significant engagement decline within 6 weeks. This is
            not a design failure — it is a feature of human behavior that must
            be planned for, not ignored.
          </p>

          <p style={bodyTextStyle}>
            The coach&apos;s responsiveness to the client&apos;s relationship
            with the app IS the intervention. When a client stops logging meals
            or checking their step count, that is not failure — it is a signal.
            Skilled coaches use these moments to explore barriers and adjust
            strategies.
          </p>

          <p style={bodyTextStyle}>
            The best digital health tools are those that generate actionable
            data a human coach can interpret and respond to. Technology without
            human accountability is a novelty. Technology with coaching support
            is a system.
          </p>
        </div>
      </section>

      {/* ── Section 2: CGM: Making the Invisible Visible ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>CGM: Making the Invisible Visible</h2>

          <p style={bodyTextStyle}>
            Continuous glucose monitoring is a paradigm shift for metabolic
            health. By making invisible glucose patterns visible in real time,
            CGMs transform abstract dietary advice into concrete biofeedback.
          </p>

          <p style={bodyTextStyle}>
            In clinical trials, CGM-informed interventions reduced diabetes
            progression by <strong>42%</strong>. The mechanism is not the
            device — it is the behavior change that occurs when people can see
            the immediate metabolic consequences of their food choices.
          </p>

          <p style={bodyTextStyle}>
            For adults with prediabetes or metabolic risk factors, CGM is most
            effective as a coached experience — not a standalone gadget. The
            data without interpretation is overwhelming. The data with a coach
            who can explain patterns and guide adjustments becomes
            transformative.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Ehrhardt & Al Zaghal",
                year: 2023,
                title: "CGM-informed interventions and diabetes prevention",
                detail: "Systematic Review — Diabetes Technology & Therapeutics",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 3: How Accurate Are Wearables? ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>How Accurate Are Wearables?</h2>

          <p style={bodyTextStyle}>
            Wearable accuracy varies dramatically by metric. Heart rate
            measurement is generally reliable across most consumer devices. Step
            counting is reasonably accurate. But energy expenditure estimates
            can be off by <strong>30–90%</strong>, making calorie burn numbers
            essentially unreliable.
          </p>

          <p style={bodyTextStyle}>
            Sleep staging — the breakdown of light, deep, and REM sleep — is
            improving but still falls short of clinical polysomnography. Total
            sleep time estimates are more reliable than stage-specific data.
          </p>

          <p style={bodyTextStyle}>
            The practical guidance: use wearables for trend tracking, not
            absolute numbers. A week-over-week decline in your resting heart
            rate trend is meaningful. The specific calorie number your watch
            shows after a workout is not.
          </p>

          <StudyGrid
            studies={[
              {
                authors: "Fuller et al.",
                year: 2020,
                title: "Consumer wearable accuracy: systematic review",
                detail: "Systematic Review — JMIR mHealth and uHealth",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Section 4: Can AI Replace a Human Coach? ── */}
      <section style={{ ...sectionStyle, backgroundColor: "var(--stone)" }}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Can AI Replace a Human Coach?</h2>

          <p style={bodyTextStyle}>
            No. The evidence is unambiguous on this point. AI-driven coaching
            platforms produce measurable short-term behavior changes, but
            sustained engagement and long-term outcomes consistently require
            human support.
          </p>

          <p style={bodyTextStyle}>
            The largest trial of an AI coaching platform (366 participants)
            found that while the technology was technically effective, the
            majority of users could not see it fitting into their daily lives.
            The human element — empathy, accountability, adaptive questioning,
            and relational trust — remains indispensable.
          </p>

          <p style={bodyTextStyle}>
            AI is valuable as a coaching amplifier: automating data collection,
            generating personalized content, flagging risk patterns, and
            extending the coach&apos;s reach between sessions. The future is
            human coaches with AI tools, not AI replacing coaches.
          </p>
        </div>
      </section>

      {/* ── Section 5: Frequently Asked Questions ── */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                }}
              >
                Which health apps actually work?
              </h3>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                The apps with the strongest evidence are those that combine
                self-monitoring with human feedback — coaching apps, CGM
                platforms with clinician support, and exercise tracking tools
                connected to accountability partners. Standalone tracking apps
                without a human component show high initial engagement but poor
                long-term adherence.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                }}
              >
                Should I use a continuous glucose monitor?
              </h3>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                If you have prediabetes, metabolic risk factors, or simply want
                to understand how your body responds to different foods, a 2–4
                week CGM trial can be highly informative. It is most valuable as
                a coached experience where someone helps you interpret patterns
                and make actionable changes, rather than as a permanent
                monitoring device.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                }}
              >
                How accurate are wearable fitness trackers?
              </h3>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                It depends on the metric. Heart rate is generally reliable. Step
                counting is reasonably accurate. But calorie burn estimates can
                be off by 30–90% and should not be used for precise energy
                balance calculations. Sleep tracking provides useful trend data
                but does not match clinical sleep study accuracy. Use wearables
                for trends, not absolutes.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--forest)",
                  marginBottom: 10,
                }}
              >
                Can AI replace a human coach?
              </h3>
              <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
                No. AI tools can automate data collection, generate personalized
                recommendations, and extend a coach&apos;s reach between
                sessions. But sustained behavior change requires human
                accountability, empathy, and adaptive support that current AI
                cannot provide. The evidence consistently shows that human
                coaching produces more durable outcomes than technology alone.
              </p>
            </div>
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
            New digital health research, summarized in plain language, delivered
            every week.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
