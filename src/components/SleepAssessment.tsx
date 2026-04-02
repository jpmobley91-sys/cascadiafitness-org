"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    text: "How long does it typically take you to fall asleep?",
    options: [
      { label: "Less than 15 min", score: 0 },
      { label: "15-30 min", score: 1 },
      { label: "30-60 min", score: 2 },
      { label: "More than 60 min", score: 3 },
    ],
  },
  {
    text: "How many hours of actual sleep do you get per night?",
    options: [
      { label: "7+ hours", score: 0 },
      { label: "6-7 hours", score: 1 },
      { label: "5-6 hours", score: 2 },
      { label: "Less than 5 hours", score: 3 },
    ],
  },
  {
    text: "How often do you wake up during the night?",
    options: [
      { label: "Rarely", score: 0 },
      { label: "1-2 times", score: 1 },
      { label: "3-4 times", score: 2 },
      { label: "5+ times", score: 3 },
    ],
  },
  {
    text: "How would you rate your overall sleep quality?",
    options: [
      { label: "Very good", score: 0 },
      { label: "Fairly good", score: 1 },
      { label: "Fairly bad", score: 2 },
      { label: "Very bad", score: 3 },
    ],
  },
  {
    text: "How often do you feel tired during the day?",
    options: [
      { label: "Never", score: 0 },
      { label: "Rarely", score: 1 },
      { label: "Sometimes", score: 2 },
      { label: "Almost daily", score: 3 },
    ],
  },
];

function getResult(score: number) {
  if (score <= 3)
    return {
      label: "Excellent",
      color: "#059669",
      bg: "rgba(5,150,105,0.08)",
      border: "rgba(5,150,105,0.25)",
      message:
        "Your sleep patterns are strong. Maintain your current habits and focus on consistency.",
    };
  if (score <= 6)
    return {
      label: "Good",
      color: "var(--river)",
      bg: "rgba(61,124,140,0.08)",
      border: "rgba(61,124,140,0.25)",
      message:
        "Your sleep is generally healthy with some room for improvement. Small adjustments to your sleep environment or routine could help.",
    };
  if (score <= 9)
    return {
      label: "Fair",
      color: "#d97706",
      bg: "rgba(217,119,6,0.08)",
      border: "rgba(217,119,6,0.25)",
      message:
        "Your sleep quality is compromised. Evidence shows this range is associated with increased metabolic and cognitive risk. Consider a structured sleep improvement plan.",
    };
  return {
    label: "Needs Attention",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.08)",
    border: "rgba(220,38,38,0.25)",
    message:
      "Your sleep patterns suggest significant disruption. Research links chronic poor sleep to accelerated aging, weight gain, and cognitive decline. A health coach can help you build a personalized sleep plan.",
  };
}

export default function SleepAssessment() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const totalScore = answers.reduce<number>(
    (sum, a) => sum + (a ?? 0),
    0
  );
  const result = showResults ? getResult(totalScore) : null;

  function handleAnswer(qIndex: number, score: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = score;
      return next;
    });
    if (showResults) setShowResults(false);
  }

  return (
    <div
      style={{
        background: "var(--warm-white)",
        border: "1.5px solid var(--stone-dark)",
        borderRadius: 16,
        overflow: "hidden",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Header */}
      <div style={{ background: "var(--forest)", padding: "24px 28px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--warm-white)",
            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          Sleep Quality Assessment
        </h2>
        <p style={{ color: "var(--sage-light)", fontSize: "0.88rem", margin: 0 }}>
          Simplified PSQI-derived screener · 5 questions
        </p>
      </div>

      <div style={{ padding: "28px" }}>
        {/* Questions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 28 }}>
          {questions.map((q, qi) => (
            <div key={qi}>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--charcoal)",
                  marginBottom: 12,
                }}
              >
                {qi + 1}. {q.text}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 8,
                }}
              >
                {q.options.map((opt) => {
                  const checked = answers[qi] === opt.score;
                  return (
                    <label
                      key={opt.score}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 14px",
                        borderRadius: 8,
                        border: `1.5px solid ${checked ? "var(--river)" : "var(--stone-dark)"}`,
                        background: checked
                          ? "rgba(61,124,140,0.07)"
                          : "var(--warm-white)",
                        cursor: "pointer",
                        transition: "border-color 0.15s, background 0.15s",
                      }}
                    >
                      <input
                        type="radio"
                        name={`sleep-q${qi}`}
                        value={opt.score}
                        checked={checked}
                        onChange={() => handleAnswer(qi, opt.score)}
                        style={{
                          marginTop: 0,
                          accentColor: "var(--river)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.95rem",
                          color: "var(--charcoal)",
                          fontWeight: checked ? 600 : 400,
                        }}
                      >
                        {opt.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {!showResults && (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setShowResults(true)}
            style={{
              width: "100%",
              padding: "14px 24px",
              backgroundColor: allAnswered ? "var(--forest)" : "var(--stone-dark)",
              color: allAnswered ? "var(--warm-white)" : "var(--bark-light)",
              border: "none",
              borderRadius: 8,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: allAnswered ? "pointer" : "not-allowed",
              transition: "background 0.15s",
              marginBottom: 24,
            }}
          >
            {allAnswered ? "See Your Results" : `Answer all ${questions.length} questions to continue`}
          </button>
        )}

        {/* Results */}
        {result && (
          <div
            style={{
              background: result.bg,
              border: `1.5px solid ${result.border}`,
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: result.color,
                  fontWeight: 700,
                }}
              >
                {result.label}
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--bark-light)",
                  fontWeight: 500,
                }}
              >
                Score: {totalScore} / 15
              </span>
            </div>
            <p
              style={{
                fontSize: "0.93rem",
                color: "var(--charcoal)",
                lineHeight: 1.65,
                margin: 0,
                marginBottom: 14,
              }}
            >
              {result.message}
            </p>
            <Link
              href="/sleep"
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: result.color,
                textDecoration: "none",
              }}
            >
              Learn more about the science of sleep →
            </Link>
          </div>
        )}

        {/* Disclaimer */}
        <div
          style={{
            borderTop: "1px solid var(--stone-dark)",
            paddingTop: 16,
            marginTop: result ? 4 : 0,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--bark-light)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            This is an educational screening tool, not a clinical assessment. It does not diagnose sleep disorders. Consult your healthcare provider for medical concerns.
          </p>
        </div>
      </div>
    </div>
  );
}
