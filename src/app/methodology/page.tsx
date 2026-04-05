import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Research Methodology — CascadiaFitness.org",
  description:
    "How we selected, scored, and organized 135 peer-reviewed studies on nutrition, exercise, and healthy aging. Our methodology explained.",
};

const themes = [
  {
    num: 1,
    name: "Healthy Aging Foundations",
    total: 10,
    top25: 2,
    desc: "Frameworks for understanding healthy aging across biological, social, and lifestyle dimensions.",
  },
  {
    num: 2,
    name: "Exercise & Physical Activity",
    total: 24,
    top25: 4,
    desc: "Cardiorespiratory fitness, resistance training, strength, and physical function in aging.",
  },
  {
    num: 3,
    name: "Nutrition & Dietary Strategies",
    total: 28,
    top25: 6,
    desc: "Protein requirements, dietary patterns, supplementation, and nutritional interventions for older adults.",
  },
  {
    num: 4,
    name: "Weight Management & Metabolic Health",
    total: 16,
    top25: 1,
    desc: "Body composition, metabolic syndrome, time-restricted eating, and weight management strategies.",
  },
  {
    num: 5,
    name: "Behavior Change & Motivation",
    total: 9,
    top25: 3,
    desc: "Behavior change techniques, motivational interviewing, and strategies for sustained health behavior.",
  },
  {
    num: 6,
    name: "Sleep & Recovery",
    total: 15,
    top25: 2,
    desc: "Sleep quality, sleep extension, circadian biology, and recovery as a pillar of health.",
  },
  {
    num: 7,
    name: "Cognitive Health & Brain Aging",
    total: 7,
    top25: 1,
    desc: "Cognitive decline prevention, dementia risk factors, and multidomain interventions.",
  },
  {
    num: 8,
    name: "Health & Wellness Coaching Practice",
    total: 8,
    top25: 2,
    desc: "Evidence for coaching effectiveness, compendium standards, and coaching intervention outcomes.",
  },
  {
    num: 9,
    name: "Digital Health & Technology",
    total: 5,
    top25: 1,
    desc: "Web-based interventions, digital health tools, and technology-supported behavior change.",
  },
  {
    num: 10,
    name: "Longevity Science & Mechanisms",
    total: 13,
    top25: 1,
    desc: "Biological mechanisms of aging, epigenetics, and geroscience approaches to healthspan.",
  },
];

export default function MethodologyPage() {
  const sectionStyle: React.CSSProperties = {
    padding: "clamp(48px, 8vw, 80px) 24px",
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: 1120,
    margin: "0 auto",
  };

  const proseStyle: React.CSSProperties = {
    maxWidth: 760,
    fontFamily: "var(--font-body)",
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "var(--charcoal)",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    color: "var(--forest)",
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    marginBottom: 24,
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "clamp(48px, 8vw, 80px) 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--sage)",
              marginBottom: 12,
            }}
          >
            Transparency
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--forest)",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Our Research Methodology
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "var(--bark)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Every claim on this site traces back to a peer-reviewed study.
            Here&apos;s how we selected, scored, and organized the research
            behind CascadiaFitness.org.
          </p>
        </div>
      </section>

      {/* Section 1: How We Built This Collection */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <div style={proseStyle}>
            <h2 style={headingStyle}>How We Built This Collection</h2>
            <p style={{ marginBottom: 20 }}>
              CascadiaFitness.org is built on a structured literature review of
              135 peer-reviewed studies spanning nutrition, exercise, behavior
              change, sleep, cognitive health, coaching practice, and longevity
              science. The review was conducted by [Author Name], MPA, Portland
              State University.
            </p>
            <p style={{ marginBottom: 20 }}>
              Studies were sourced from PubMed, Cochrane Library, and major
              peer-reviewed journals including The New England Journal of
              Medicine, The Lancet, JAMA Network Open, the British Medical
              Journal, Circulation, the Journal of the American College of
              Cardiology, Nutrients, and others. Source material includes
              original database searches, citations from foundational texts in
              health and longevity, and post-publication updates through early
              2026.
            </p>
            <p>
              The goal was not to be exhaustive — it was to identify the studies
              most relevant to evidence-based health coaching for adults over 50.
              Every study in the collection was extracted using a standardized
              protocol capturing study design, sample size, duration, key
              findings, methods, and author-noted limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Scoring Framework */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: "var(--warm-white)",
        }}
      >
        <div style={innerStyle}>
          <div style={proseStyle}>
            <h2 style={headingStyle}>Scoring Framework</h2>
            <p style={{ marginBottom: 20 }}>
              Each study was evaluated on four dimensions using a standardized
              scoring framework. Scores range from 1 (lowest) to 5 (highest) on
              each dimension, for a maximum possible score of 20. The Top 25
              studies represent the highest-scoring articles in the collection.
            </p>
            <p style={{ marginBottom: 20 }}>
              <strong>Scientific Rigor</strong> evaluates study design and
              evidence quality. Randomized controlled trials, meta-analyses, and
              expert consensus documents score highest. Case studies and opinion
              pieces score lowest.
            </p>
            <p style={{ marginBottom: 20 }}>
              <strong>Population Relevance</strong> assesses how closely the
              study population matches our target audience: generally healthy,
              community-dwelling adults aged 50–75. Studies focused on pediatric,
              ICU, or highly clinical populations score lowest.
            </p>
            <p style={{ marginBottom: 20 }}>
              <strong>Practical Applicability</strong> measures whether findings
              translate into actionable guidance for health coaching. Studies with
              directly translatable coaching interventions score highest. Purely
              theoretical or molecular-level research scores lowest.
            </p>
            <p style={{ marginBottom: 28 }}>
              <strong>Recency</strong> weights newer evidence more heavily.
              Studies published in 2024–2026 score highest. Studies from 2010 or
              earlier score lowest.
            </p>
          </div>

          {/* Summary Table */}
          <div style={{ maxWidth: 760, overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.88rem",
                fontFamily: "var(--font-body)",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "var(--stone)",
                    color: "var(--forest)",
                  }}
                >
                  <th
                    style={{
                      textAlign: "left",
                      padding: 12,
                      borderBottom: "2px solid var(--stone-dark)",
                      fontWeight: 600,
                    }}
                  >
                    Dimension
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 12,
                      borderBottom: "2px solid var(--stone-dark)",
                      fontWeight: 600,
                    }}
                  >
                    What It Measures
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: 12,
                      borderBottom: "2px solid var(--stone-dark)",
                      fontWeight: 600,
                    }}
                  >
                    Highest Score (5)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Scientific Rigor
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Study design and evidence quality
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    RCT, meta-analysis, expert consensus
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Population Relevance
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Match to adults 50–75
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Generally healthy, community-dwelling adults 50–75
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Practical Applicability
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Translates to coaching guidance
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Directly translatable coaching interventions
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Recency
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    Publication date
                  </td>
                  <td
                    style={{
                      padding: 12,
                      borderBottom: "1px solid var(--stone-dark)",
                    }}
                  >
                    2024–2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            style={{
              maxWidth: 760,
              fontSize: "0.85rem",
              color: "var(--bark)",
              lineHeight: 1.6,
              marginTop: 20,
              fontFamily: "var(--font-body)",
            }}
          >
            The detailed scoring rubric, individual study scores, and full
            ranked spreadsheet are maintained internally and are not published.
            This protects the intellectual property underlying our curation
            process while maintaining transparency about the methodology.
          </p>
        </div>
      </section>

      {/* Section 3: The Collection at a Glance */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2
            style={{
              ...headingStyle,
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            The Collection at a Glance
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {themes.map((theme) => (
              <div
                key={theme.num}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid var(--stone-dark)",
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      backgroundColor: "var(--forest)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {theme.num}
                  </span>
                  <strong
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      color: "var(--forest)",
                    }}
                  >
                    {theme.name}
                  </strong>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--charcoal)",
                    margin: "0 0 4px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {theme.total} studies
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--charcoal)",
                    margin: "0 0 10px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {theme.top25} in Top 25
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--bark)",
                    margin: 0,
                    lineHeight: 1.5,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--forest)",
              marginTop: 48,
            }}
          >
            135 studies &middot; 10 themes &middot; Top 25 curated by score
          </p>
        </div>
      </section>

      {/* Section 4: What This Is — and What It Isn't */}
      <section
        style={{
          ...sectionStyle,
          backgroundColor: "var(--warm-white)",
        }}
      >
        <div style={innerStyle}>
          <div style={proseStyle}>
            <h2 style={headingStyle}>
              What This Is — and What It Isn&apos;t
            </h2>
            <p style={{ marginBottom: 20 }}>
              This literature review was conducted by a single researcher using a
              systematic but non-exhaustive approach. It is not a Cochrane-style
              systematic review, and it does not claim to capture every relevant
              study in every field. The scoring framework reflects editorial
              judgment informed by health coaching practice priorities.
            </p>
            <p style={{ marginBottom: 20 }}>
              Studies were evaluated based on publicly available published
              versions. We did not contact study authors, access unpublished
              data, or conduct independent statistical analysis. All findings
              reported on this site are drawn from the original published
              research.
            </p>
            <p style={{ marginBottom: 20 }}>
              The review is a living document. As new research is published,
              studies may be added, re-scored, or replaced. The Top 25 may shift
              over time as the evidence base evolves.
            </p>
            <p>
              CascadiaFitness.org is an educational resource. Nothing on this
              site constitutes medical advice, clinical diagnosis, or treatment
              recommendations. Always consult your healthcare provider before
              making changes to your diet, exercise routine, or health plan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: About the Reviewer */}
      <section style={sectionStyle}>
        <div style={innerStyle}>
          <h2
            style={{
              ...headingStyle,
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            About the Reviewer
          </h2>
          <div
            style={{
              backgroundColor: "var(--stone)",
              borderRadius: 12,
              padding: 32,
              maxWidth: 600,
              margin: "0 auto",
              fontFamily: "var(--font-body)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                color: "var(--forest)",
                marginBottom: 4,
              }}
            >
              [Your Name]
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--bark)",
                marginBottom: 16,
              }}
            >
              MPA, Portland State University &middot; NBC-HWC Candidate
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--charcoal)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              The research behind CascadiaFitness.org was compiled and scored as
              part of an independent literature review project. [Your Name]
              holds a Master of Public Administration from Portland State
              University and is currently pursuing NBC-HWC certification. This
              site reflects a commitment to making peer-reviewed evidence
              accessible to the adults who can benefit from it most.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "clamp(48px, 8vw, 80px) 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--forest)",
              marginBottom: 12,
            }}
          >
            Stay current with the research
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--bark)",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            Subscribe to the weekly digest.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </section>
    </>
  );
}
