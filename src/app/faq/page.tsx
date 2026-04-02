"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Theme = {
  id: string;
  label: string;
  shortLabel: string;
  category: "body" | "mind" | "longevity";
  href: string;
  tagBg: string;
  tagColor: string;
  questions: { q: string; a: string }[];
};

const themes: Theme[] = [
  {
    id: "exercise",
    label: "Exercise & Physical Activity",
    shortLabel: "Exercise",
    category: "body",
    href: "/exercise",
    tagBg: "var(--forest)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "How much exercise do I actually need?",
        a: "The steepest mortality reduction comes from moving at all — going from zero to 15 minutes per day. Maximum benefit is reached at roughly 150-300 minutes per week of moderate activity or 75-150 minutes of vigorous activity. Higher levels show no harm — more is not dangerous, it simply yields diminishing returns.",
      },
      {
        q: "Is cardio or strength training more important?",
        a: "Both, but strength training is dramatically undervalued. Cardiorespiratory fitness is the strongest predictor of all-cause mortality, but grip strength independently predicts mortality, dementia, falls, and hospitalization. The ideal program includes both. Most people over 40 are more deficient in strength than aerobic capacity.",
      },
      {
        q: "Can I exercise too much?",
        a: "The research has found no safe upper limit of exercise benefit at volumes up to 4-8 times the recommended guidelines. Elite fitness carries the lowest mortality risk of any group studied. Overtraining syndrome exists but is rare outside competitive athletics.",
      },
      {
        q: "I'm 50 and haven't exercised in years. Where do I start?",
        a: "With 15 minutes a day. The evidence shows that the largest mortality benefit comes from moving from inactive to minimally active. Walk. Then walk faster. Then add bodyweight exercises. Resistance training can begin at any age — research showed gene expression reversal even in adults who began strength training in their 60s and 70s.",
      },
      {
        q: "What's the single best test of my fitness?",
        a: "VO2max testing gives the most comprehensive picture, but for a practical self-assessment try these three: stand on one leg for 10 seconds with eyes open, rise from the floor without using your hands or knees, and measure your walking speed over 4 meters. These simple tests predict longevity better than most lab work.",
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrition & Dietary Strategies",
    shortLabel: "Nutrition",
    category: "body",
    href: "/nutrition",
    tagBg: "var(--forest-light)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "How much protein do I really need?",
        a: "If you are over 40, the evidence supports 1.2-1.6 g/kg of body weight per day, and up to 2.0 g/kg/day if actively strength training. For a 170-pound person, that is roughly 90-120 grams per day, distributed across three meals of 30-40 grams each to hit the leucine threshold.",
      },
      {
        q: "Is plant protein as good as animal protein?",
        a: "Plant proteins are lower in leucine and less bioavailable, meaning you need higher total intake for the same muscle protein synthesis response. This is manageable with planning — combining legumes with grains, using soy-based proteins, and slightly increasing total targets.",
      },
      {
        q: "Should I take creatine if I'm over 50?",
        a: "Especially if you are over 50. Creatine monohydrate is inexpensive, extensively studied, and safe. Combined with resistance training, it adds meaningful lean mass. It also shows emerging cognitive benefits for older adults. The dose is 3-5 grams per day — no loading phase needed.",
      },
      {
        q: "What is the leucine threshold and why does it matter?",
        a: "Leucine is the amino acid that triggers muscle protein synthesis. Each meal needs approximately 2.5-2.8 grams to flip this switch. If you spread protein too thin across many small meals, none may reach the threshold. Three substantial protein-rich meals outperform grazing.",
      },
      {
        q: "Does creatine cause hair loss?",
        a: "No. This myth originated from a single 2009 study that measured DHT levels but did not actually measure hair loss. The first RCT designed to directly test hair loss found no effect. The International Society of Sports Nutrition considers creatine safe for long-term use.",
      },
    ],
  },
  {
    id: "weight-management",
    label: "Weight Management & Metabolic Health",
    shortLabel: "Weight Management",
    category: "body",
    href: "/weight-management",
    tagBg: "var(--sage)",
    tagColor: "var(--forest)",
    questions: [
      {
        q: "Is BMI a useful measure?",
        a: "For population screening, yes. For individual health, it is deeply limited. BMI cannot distinguish muscle from fat and misclassifies metabolically healthy individuals as overweight. Body composition measures like DEXA, waist-to-hip ratio, or fat-free mass index are far more informative.",
      },
      {
        q: "What is metabolic health and how do I know if I have it?",
        a: "Defined by five markers in healthy ranges: fasting glucose below 100, triglycerides below 150, HDL above 40 (men) or 50 (women), blood pressure below 120/80, and waist circumference below 40 inches (men) or 35 inches (women). Ask your doctor for these numbers.",
      },
      {
        q: "I'm on Ozempic or Wegovy — do I still need to exercise?",
        a: "More than ever. GLP-1 medications cause significant weight loss, but up to 25-40% can come from lean tissue. Resistance training at least twice per week plus protein of 1.2-1.6 g/kg/day are essential to preserve muscle mass for long-term function.",
      },
      {
        q: "What is time-restricted eating and does it work?",
        a: "TRE compresses daily eating to an 8-10 hour window. Evidence shows improvements in insulin sensitivity and inflammatory markers. It works best as a metabolic timing strategy layered on good nutrition — not a license to eat poorly in a shorter window.",
      },
      {
        q: "Why am I gaining weight in menopause?",
        a: "Declining estrogen redistributes fat toward visceral storage, reduces muscle mass, and alters metabolic rate. This is not willpower failure. The evidence-based response is resistance training, adequate protein, and attention to sleep quality.",
      },
    ],
  },
  {
    id: "cognitive-health",
    label: "Cognitive Health & Brain Aging",
    shortLabel: "Cognitive Health",
    category: "mind",
    href: "/cognitive-health",
    tagBg: "var(--river)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "What is the best exercise for brain health?",
        a: "It depends on the domain. Resistance training has the strongest evidence for global cognition. Aerobic exercise benefits memory and hippocampal volume. Mind-body practices like tai chi show the best results for executive function. The ideal program includes all three.",
      },
      {
        q: "Should I take omega-3 supplements?",
        a: "Yes, as a foundation. DHA supports neuronal membrane function. Critically, B vitamins only show cognitive benefits when omega-3 status is adequate — making omega-3 the prerequisite for other brain nutrients to work.",
      },
      {
        q: "Does creatine help with memory?",
        a: "Emerging evidence says yes, especially for adults over 60. Creatine improved short-term memory and reasoning in meta-analyses, with strongest effects in older adults and during cognitive stress. Powder form recommended.",
      },
      {
        q: "Can I prevent Alzheimer's?",
        a: "Delay, not prevent. No single intervention eliminates risk. But the FINGER trial shows multidomain lifestyle approaches — exercise, nutrition, cognitive engagement, vascular care — can significantly reduce risk and delay onset.",
      },
      {
        q: "How does social engagement affect brain health?",
        a: "Positively. Social interaction provides cognitive stimulation, emotional regulation, and motivation for activity. Social isolation is an independent risk factor for cognitive decline. Quality matters more than quantity.",
      },
    ],
  },
  {
    id: "behavior-change",
    label: "Behavior Change & Motivation",
    shortLabel: "Behavior Change",
    category: "mind",
    href: "/behavior-change",
    tagBg: "var(--river-light)",
    tagColor: "var(--forest)",
    questions: [
      {
        q: "Why can't I stick with exercise or diet programs?",
        a: "Because you are fighting a systems problem with willpower. Sustained behavior change requires environmental design, social accountability, stress regulation, and periodic renewal. It is not about trying harder — it is about building better support structures.",
      },
      {
        q: "How do I find motivation when I don't feel like it?",
        a: "You don't. Motivation is not a prerequisite for action — it is often a consequence. Reduce friction (lay out clothes the night before, schedule like an appointment) and build accountability (a partner, coach, class). Motivation follows action more reliably than action follows motivation.",
      },
      {
        q: "Is it better to exercise alone or with someone?",
        a: "With someone, unambiguously. Every study comparing solo versus social exercise shows better adherence, outcomes, and sustained change when another person is involved.",
      },
      {
        q: "What is motivational interviewing?",
        a: "A collaborative conversation technique that helps people explore and resolve ambivalence about change. Rather than telling you what to do, a practitioner asks open-ended questions, reflects back what you say, and helps you articulate your own reasons for change.",
      },
      {
        q: "Why does every program work for a year and then stop?",
        a: "Because the effect of any intervention naturally declines over 12-24 months. This is consistent across all interventions studied. The solution is designing for renewal: new challenges, environments, and social supports before the current program fades.",
      },
    ],
  },
  {
    id: "sleep",
    label: "Sleep & Recovery",
    shortLabel: "Sleep",
    category: "mind",
    href: "/sleep",
    tagBg: "var(--bark)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "How much sleep do I actually need?",
        a: "7-8 hours for most adults. Consistently sleeping under 7 hours increases cardiometabolic risk in a dose-dependent manner. If you think you function fine on 5-6 hours, you have likely adapted to impairment without recognizing it.",
      },
      {
        q: "Can I catch up on sleep on weekends?",
        a: "Partially, but it is not a sustainable strategy. Weekend recovery sleep can reduce some inflammatory markers from weeknight deprivation, but does not fully reverse metabolic or cognitive effects. Consistency matters more than compensation.",
      },
      {
        q: "Why does poor sleep make me hungry?",
        a: "Sleep deprivation increases ghrelin (hunger hormone) and decreases leptin (satiety hormone), creating a 250-350 calorie per day surplus. It also reduces prefrontal cortex activity, impairing your ability to resist high-calorie foods. The combination is powerful and largely unconscious.",
      },
      {
        q: "Does sauna really help with heart health?",
        a: "The epidemiological evidence from Finland is strong — frequent sauna use is associated with significantly reduced cardiovascular mortality. However, most evidence comes from one large cohort of Finnish men. RCTs are limited. The mechanism is plausible and risk is low, but this is not yet at the evidence level of exercise or nutrition.",
      },
      {
        q: "Is napping good or bad?",
        a: "It depends on nighttime sleep. If you sleep 7+ hours at night, brief naps (20-30 minutes) can enhance cognitive performance. But napping combined with less than 6 hours of nighttime sleep is associated with doubled risk of type 2 diabetes.",
      },
    ],
  },
  {
    id: "longevity",
    label: "Longevity Science",
    shortLabel: "Longevity Science",
    category: "longevity",
    href: "/longevity",
    tagBg: "var(--bark)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "What is biological age vs chronological age?",
        a: "Chronological age is years alive. Biological age reflects how old your body functions as, based on biomarkers like inflammation, metabolic function, and organ performance. Two people born the same year can have biological ages a decade apart.",
      },
      {
        q: "Can I test my biological age?",
        a: "Yes. Phenotypic Age uses a standard blood panel — albumin, creatinine, glucose, CRP, lymphocyte percentage, mean cell volume, red cell distribution width, alkaline phosphatase, and white blood cell count. No specialized test required.",
      },
      {
        q: "What are the hallmarks of aging?",
        a: "Twelve fundamental biological processes including genomic instability, telomere attrition, mitochondrial dysfunction, cellular senescence, and chronic inflammation. These interact as a system — intervening on one often improves others.",
      },
      {
        q: "What is the Longevity Stack?",
        a: "Vitamin D plus omega-3 plus 30 minutes of exercise three times per week. First combination shown in an RCT to slow biological aging. Total cost: roughly $15/month in supplements plus 90 minutes of weekly exercise.",
      },
      {
        q: "Do centenarians have special genetics?",
        a: "Some do — certain variants related to lipid metabolism and inflammation are overrepresented. But lifestyle still adds measurable years even for the genetically fortunate, and is the dominant factor for everyone else.",
      },
    ],
  },
  {
    id: "healthy-aging",
    label: "Healthy Aging Foundations",
    shortLabel: "Healthy Aging",
    category: "longevity",
    href: "/healthy-aging",
    tagBg: "var(--bark-light)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "What does 'healthy aging' actually mean?",
        a: "Preservation of functional capacity across five domains: physical, cognitive, emotional, social, and independence. It is not about avoiding all disease — it is about maintaining the ability to live the life you want.",
      },
      {
        q: "At what age should I start thinking about healthy aging?",
        a: "Now. Interventions in your 40s and 50s have the greatest impact on outcomes in your 70s and 80s. But it is genuinely never too late — even adults in their 70s show measurable improvement from lifestyle changes.",
      },
      {
        q: "What are the six pillars of lifestyle medicine?",
        a: "Nutrition, exercise, sleep, stress management, social connection, and substance avoidance. These six interact as a system — optimizing one while ignoring others limits results.",
      },
      {
        q: "How do I know if I'm aging well?",
        a: "Functional markers matter more than chronological age. Can you rise from the floor without your hands? Stand on one leg for 10 seconds? Walk at a pace above 1.0 m/s? These simple tests predict longevity better than most lab work.",
      },
    ],
  },
  {
    id: "coaching",
    label: "Health & Wellness Coaching",
    shortLabel: "Coaching",
    category: "longevity",
    href: "/coaching",
    tagBg: "var(--forest)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "What is health and wellness coaching?",
        a: "Evidence-based behavior change support by a trained, credentialed professional. Coaches use motivational interviewing, goal setting, and accountability to help you implement sustainable health behaviors. They do not diagnose, prescribe, or treat.",
      },
      {
        q: "How long does coaching take?",
        a: "12-15 sessions over 7-9 months. Most people see meaningful progress within 3 months, with remaining sessions building independence and preventing relapse. Benefits persist after coaching ends.",
      },
      {
        q: "Is virtual coaching as effective as in-person?",
        a: "Yes, and possibly more effective for long-term outcomes. Virtual delivery reduces barriers, increases flexibility, and produces comparable or superior results.",
      },
      {
        q: "Is coaching covered by insurance?",
        a: "Increasingly yes. Coaching has its own CPT codes and Medicare covers telehealth sessions. Private coverage varies by plan. Many employers offer coaching as a wellness benefit.",
      },
      {
        q: "How is coaching different from therapy?",
        a: "Scope and direction. Therapy treats clinical mental health conditions and processes past experiences. Coaching is forward-looking — it helps healthy individuals set and achieve behavior change goals. The two are complementary.",
      },
    ],
  },
  {
    id: "digital-health",
    label: "Digital Health & Technology",
    shortLabel: "Digital Health",
    category: "longevity",
    href: "/digital-health",
    tagBg: "var(--river)",
    tagColor: "var(--warm-white)",
    questions: [
      {
        q: "Which health apps actually work?",
        a: "Apps combining self-monitoring with human feedback — coaching apps, CGM platforms with clinician support, exercise trackers with accountability partners. Standalone tracking apps without a human component show poor long-term adherence.",
      },
      {
        q: "Should I use a continuous glucose monitor?",
        a: "If you have prediabetes or metabolic risk factors, a 2-4 week CGM trial can be highly informative — especially as a coached experience where someone helps interpret patterns.",
      },
      {
        q: "How accurate are wearable fitness trackers?",
        a: "Heart rate is generally reliable. Step counting is reasonably accurate. Calorie burn estimates can be off by 30-90%. Sleep tracking provides useful trends but doesn't match clinical accuracy. Use wearables for trends, not absolutes.",
      },
      {
        q: "Can AI replace a human coach?",
        a: "No. AI tools can automate data collection and extend a coach's reach between sessions. But sustained behavior change requires human accountability, empathy, and adaptive support that current AI cannot provide.",
      },
    ],
  },
];

const categoryThemes: Record<"body" | "mind" | "longevity", string[]> = {
  body: ["exercise", "nutrition", "weight-management"],
  mind: ["cognitive-health", "behavior-change", "sleep"],
  longevity: ["longevity", "healthy-aging", "coaching", "digital-health"],
};

type Category = "all" | "body" | "mind" | "longevity";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  function handleCategoryClick(cat: Category) {
    setActiveCategory(cat);
    setActiveTheme(null);
  }

  function handleThemeClick(themeId: string) {
    setActiveTheme(activeTheme === themeId ? null : themeId);
  }

  const normalizedSearch = search.toLowerCase().trim();

  const visibleThemes = useMemo(() => {
    return themes
      .filter((theme) => {
        if (activeTheme) return theme.id === activeTheme;
        if (activeCategory !== "all") return categoryThemes[activeCategory].includes(theme.id);
        return true;
      })
      .map((theme) => {
        const questions = normalizedSearch
          ? theme.questions.filter(
              (item) =>
                item.q.toLowerCase().includes(normalizedSearch) ||
                item.a.toLowerCase().includes(normalizedSearch)
            )
          : theme.questions;
        return { ...theme, questions };
      })
      .filter((theme) => theme.questions.length > 0);
  }, [activeCategory, activeTheme, normalizedSearch]);

  const totalVisible = visibleThemes.reduce((sum, t) => sum + t.questions.length, 0);

  const subThemes =
    activeCategory !== "all"
      ? themes.filter((t) => categoryThemes[activeCategory].includes(t.id))
      : [];

  const categoryBtnStyle = (cat: Category): React.CSSProperties => ({
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "8px 20px",
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
    background: activeCategory === cat ? "var(--forest)" : "var(--stone)",
    color: activeCategory === cat ? "white" : "var(--bark)",
  });

  const themeBtnStyle = (themeId: string): React.CSSProperties => ({
    fontFamily: "var(--font-body)",
    fontSize: "0.85rem",
    fontWeight: 500,
    padding: "6px 16px",
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
    transition: "background 0.15s, color 0.15s",
    background: activeTheme === themeId ? "var(--forest)" : "var(--stone-dark)",
    color: activeTheme === themeId ? "white" : "var(--bark)",
  });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--forest)",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "var(--bark)",
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            48 evidence-based answers across 10 research themes. Every answer is grounded in
            peer-reviewed science.
          </p>

          {/* Search */}
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions… (e.g., 'protein after 50', 'sleep hours', 'creatine')"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "16px 20px",
              fontSize: "1.1rem",
              fontFamily: "var(--font-body)",
              borderRadius: 8,
              border: "1px solid var(--stone-dark)",
              background: "white",
              color: "var(--charcoal)",
              outline: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          />
        </div>
      </section>

      {/* Filters */}
      <section
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid var(--stone-dark)",
          padding: "20px 24px",
          position: "sticky",
          top: "var(--nav-height)",
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Category row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: subThemes.length ? 10 : 0 }}>
            {(["all", "body", "mind", "longevity"] as Category[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                style={categoryBtnStyle(cat)}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Theme chip row */}
          {subThemes.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {subThemes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => handleThemeClick(theme.id)}
                  style={themeBtnStyle(theme.id)}
                >
                  {theme.shortLabel}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: "48px 24px 80px", backgroundColor: "var(--warm-white)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Result count */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.88rem",
              color: "var(--bark)",
              marginBottom: 32,
            }}
          >
            {totalVisible === 0
              ? "No questions match your search."
              : `Showing ${totalVisible} question${totalVisible !== 1 ? "s" : ""}${normalizedSearch ? ` for "${search}"` : ""}`}
          </p>

          {visibleThemes.map((theme) => (
            <div key={theme.id} style={{ marginBottom: 48 }}>
              {/* Theme heading */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)",
                    color: "var(--forest)",
                    margin: 0,
                  }}
                >
                  {theme.label}
                </h2>
                <Link
                  href={theme.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--river)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Full research →
                </Link>
              </div>

              {/* Questions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {theme.questions.map((item, idx) => (
                  <details
                    key={idx}
                    style={{
                      background: "white",
                      border: "1px solid var(--stone-dark)",
                      borderRadius: 8,
                      padding: 0,
                      overflow: "hidden",
                    }}
                  >
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "14px 16px",
                        cursor: "pointer",
                        listStyle: "none",
                        userSelect: "none",
                      }}
                    >
                      {/* Theme tag */}
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          padding: "3px 9px",
                          borderRadius: 4,
                          background: theme.tagBg,
                          color: theme.tagColor,
                          marginTop: 2,
                        }}
                      >
                        {theme.shortLabel}
                      </span>

                      {/* Question text */}
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.05rem",
                          color: "var(--forest)",
                          lineHeight: 1.35,
                          flex: 1,
                        }}
                      >
                        {item.q}
                      </span>

                      {/* Chevron */}
                      <span
                        className="faq-chevron"
                        aria-hidden="true"
                        style={{
                          flexShrink: 0,
                          marginTop: 4,
                          color: "var(--bark)",
                          fontSize: "1rem",
                          lineHeight: 1,
                        }}
                      >
                        ›
                      </span>
                    </summary>

                    {/* Answer */}
                    <div
                      className="faq-answer"
                      style={{ padding: "0 16px 16px", paddingLeft: "calc(16px + 12px + 60px)" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.98rem",
                          color: "var(--charcoal)",
                          lineHeight: 1.75,
                          margin: "0 0 12px",
                        }}
                      >
                        {item.a}
                      </p>
                      <Link
                        href={theme.href}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.85rem",
                          color: "var(--river)",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        Read the full research →
                      </Link>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Empty state */}
          {totalVisible === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "64px 24px",
                color: "var(--bark)",
                fontFamily: "var(--font-body)",
              }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>No questions found.</p>
              <p style={{ fontSize: "0.9rem" }}>
                Try different keywords or{" "}
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                    setActiveTheme(null);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--river)",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    padding: 0,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  clear all filters
                </button>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        details[open] .faq-chevron {
          transform: rotate(90deg);
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }
        .faq-chevron {
          transition: transform 0.18s ease;
          display: inline-block;
        }
        details[open] .faq-answer {
          animation: faqSlideIn 0.22s ease-out;
        }
        @keyframes faqSlideIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
