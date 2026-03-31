"use client";

import { useState, useId } from "react";

type ActivityLevel = "sedentary" | "active" | "resistance";
type HealthGoal = "general" | "weight" | "muscle";
type WeightUnit = "lbs" | "kg";

interface Results {
  lowRate: number;
  highRate: number;
  dailyLow: number;
  dailyHigh: number;
  perMealLow: number;
  perMealHigh: number;
  rdaGrams: number;
  explanation: string;
  kidneyNote: boolean;
}

function calculate(
  age: number,
  weightKg: number,
  activity: ActivityLevel,
  goal: HealthGoal
): Results {
  let lowRate: number;
  let highRate: number;
  let explanation: string;

  const isOver50 = age >= 50;

  if (isOver50) {
    if (goal === "muscle" || activity === "resistance") {
      lowRate = 1.5;
      highRate = 2.0;
      explanation =
        "The PROT-AGE Study Group and ESPEN consensus recommend 1.5–2.0 g/kg/day for older adults engaged in resistance training or pursuing muscle-building goals. This range optimizes muscle protein synthesis under progressive loading and helps counteract sarcopenia — the age-related muscle loss that accelerates after 50.";
    } else if (activity === "active" || goal === "weight") {
      lowRate = 1.2;
      highRate = 1.5;
      explanation =
        "For moderately active older adults, or those managing body weight, PROT-AGE and ESPEN recommend 1.2–1.5 g/kg/day. Regular movement increases protein turnover, and higher intake supports muscle retention during a caloric deficit, reducing the risk of losing lean mass rather than fat.";
    } else {
      lowRate = 1.0;
      highRate = 1.2;
      explanation =
        "Even sedentary older adults need more protein than the standard RDA of 0.8 g/kg. The PROT-AGE Study Group and ESPEN consensus established 1.0–1.2 g/kg/day as the minimum for adults 50+, reflecting reduced anabolic sensitivity to dietary protein and the need to offset age-related muscle loss.";
    }
  } else {
    // Under 50
    if (goal === "muscle" || activity === "resistance") {
      lowRate = 1.2;
      highRate = 1.6;
      explanation =
        "For adults under 50 engaged in resistance training or muscle-building, current evidence supports 1.2–1.6 g/kg/day to maximize muscle protein synthesis. The standard RDA of 0.8 g/kg is a minimum floor — not an optimal target for active individuals.";
    } else if (activity === "active") {
      lowRate = 1.0;
      highRate = 1.2;
      explanation =
        "For regularly active adults under 50, 1.0–1.2 g/kg/day is well-supported by the research literature. The RDA of 0.8 g/kg is a population minimum; physically active individuals benefit from the higher end to support muscle recovery and adaptation.";
    } else {
      lowRate = 0.8;
      highRate = 1.0;
      explanation =
        "For sedentary adults under 50, the established RDA of 0.8 g/kg/day serves as a reasonable baseline. Even so, research from the PROT-AGE Study Group suggests that targeting the upper end (1.0 g/kg) provides a useful buffer — protein needs can increase during illness or stress.";
    }
  }

  const dailyLow = Math.round(lowRate * weightKg);
  const dailyHigh = Math.round(highRate * weightKg);

  return {
    lowRate,
    highRate,
    dailyLow,
    dailyHigh,
    perMealLow: Math.round(dailyLow / 3),
    perMealHigh: Math.round(dailyHigh / 3),
    rdaGrams: Math.round(0.8 * weightKg),
    explanation,
    kidneyNote: isOver50 && (goal === "muscle" || activity === "resistance"),
  };
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string; sub?: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset style={{ border: "none", padding: 0 }}>
      <legend
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "0.9rem",
          color: "var(--charcoal)",
          marginBottom: 10,
        }}
      >
        {legend}
      </legend>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((opt) => {
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 8,
                border: `1.5px solid ${checked ? "var(--river)" : "var(--stone-dark)"}`,
                background: checked ? "rgba(61,124,140,0.07)" : "var(--warm-white)",
                cursor: "pointer",
                transition: "border-color 0.15s, background 0.15s",
              }}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                style={{ marginTop: 2, accentColor: "var(--river)", flexShrink: 0 }}
              />
              <span>
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
                {opt.sub && (
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      color: "var(--bark-light)",
                      marginTop: 2,
                    }}
                  >
                    {opt.sub}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function ProteinBar({
  dailyLow,
  dailyHigh,
  rdaGrams,
}: {
  dailyLow: number;
  dailyHigh: number;
  rdaGrams: number;
}) {
  const max = Math.max(dailyHigh * 1.3, rdaGrams * 1.5, 80);
  const rdaPct = Math.min((rdaGrams / max) * 100, 100);
  const lowPct = Math.min((dailyLow / max) * 100, 100);
  const highPct = Math.min((dailyHigh / max) * 100, 100);
  const rangePct = highPct - lowPct;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.78rem",
          color: "var(--bark-light)",
          marginBottom: 4,
          fontFamily: "var(--font-body)",
        }}
      >
        <span>0g</span>
        <span>{Math.round(max)}g/day</span>
      </div>

      {/* Bar track */}
      <div
        style={{
          position: "relative",
          height: 28,
          borderRadius: 14,
          background: "var(--stone-dark)",
          overflow: "visible",
        }}
      >
        {/* RDA line */}
        <div
          style={{
            position: "absolute",
            left: `${rdaPct}%`,
            top: -6,
            bottom: -6,
            width: 2,
            background: "var(--bark)",
            borderRadius: 2,
            zIndex: 2,
          }}
        />
        {/* Recommended range */}
        <div
          style={{
            position: "absolute",
            left: `${lowPct}%`,
            width: `${rangePct}%`,
            top: 0,
            bottom: 0,
            background: "var(--river)",
            borderRadius: 14,
            opacity: 0.85,
          }}
        />
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 10,
          flexWrap: "wrap",
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              display: "inline-block",
              width: 14,
              height: 14,
              borderRadius: 3,
              background: "var(--river)",
              opacity: 0.85,
            }}
          />
          <span style={{ color: "var(--charcoal)" }}>
            Your range ({dailyLow}–{dailyHigh}g)
          </span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              display: "inline-block",
              width: 3,
              height: 14,
              borderRadius: 2,
              background: "var(--bark)",
            }}
          />
          <span style={{ color: "var(--charcoal)" }}>
            Standard RDA ({rdaGrams}g)
          </span>
        </span>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function ProteinCalculator() {
  const uid = useId();

  const [age, setAge] = useState<number>(60);
  const [weight, setWeight] = useState<number>(160);
  const [unit, setUnit] = useState<WeightUnit>("lbs");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [goal, setGoal] = useState<HealthGoal>("general");

  const weightKg = unit === "lbs" ? weight / 2.2046 : weight;
  const results = weightKg > 0 ? calculate(age, weightKg, activity, goal) : null;

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    color: "var(--charcoal)",
    border: "1.5px solid var(--stone-dark)",
    borderRadius: 8,
    padding: "8px 12px",
    background: "var(--warm-white)",
    outline: "none",
  };

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
      <div
        style={{
          background: "var(--forest)",
          padding: "24px 28px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--warm-white)",
            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          Protein Needs Calculator
        </h2>
        <p style={{ color: "var(--sage-light)", fontSize: "0.88rem", margin: 0 }}>
          Based on PROT-AGE Study Group &amp; ESPEN consensus guidelines
        </p>
      </div>

      <div style={{ padding: "28px" }}>
        {/* Inputs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 28,
          }}
        >
          {/* Age */}
          <div>
            <label
              htmlFor={`${uid}-age`}
              style={{
                display: "block",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Age
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <input
                id={`${uid}-age`}
                type="range"
                min={18}
                max={100}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                style={{ flex: 1, accentColor: "var(--river)", cursor: "pointer" }}
              />
              <input
                type="number"
                min={18}
                max={100}
                value={age}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (v >= 18 && v <= 100) setAge(v);
                }}
                style={{ ...inputStyle, width: 64, textAlign: "center" }}
                aria-label="Age in years"
              />
            </div>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--bark-light)",
                marginTop: 4,
              }}
            >
              {age >= 50
                ? "Recommendations from PROT-AGE/ESPEN apply (50+)"
                : "Standard adult guidelines apply (under 50)"}
            </p>
          </div>

          {/* Weight */}
          <div>
            <label
              htmlFor={`${uid}-weight`}
              style={{
                display: "block",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Body Weight
            </label>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                id={`${uid}-weight`}
                type="number"
                min={1}
                max={unit === "lbs" ? 700 : 320}
                value={weight}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (v > 0) setWeight(v);
                }}
                style={{ ...inputStyle, flex: 1 }}
              />
              {/* Unit toggle */}
              <div
                style={{
                  display: "flex",
                  border: "1.5px solid var(--stone-dark)",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                {(["lbs", "kg"] as WeightUnit[]).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => {
                      if (u === unit) return;
                      setUnit(u);
                      setWeight(
                        Math.round(
                          u === "kg" ? weight / 2.2046 : weight * 2.2046
                        )
                      );
                    }}
                    style={{
                      padding: "8px 14px",
                      border: "none",
                      background: unit === u ? "var(--river)" : "transparent",
                      color: unit === u ? "var(--warm-white)" : "var(--charcoal)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      fontWeight: unit === u ? 600 : 400,
                      cursor: "pointer",
                      transition: "background 0.15s, color 0.15s",
                    }}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
            {weightKg > 0 && (
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--bark-light)",
                  marginTop: 4,
                }}
              >
                {unit === "lbs"
                  ? `≈ ${weightKg.toFixed(1)} kg`
                  : `≈ ${(weight * 2.2046).toFixed(0)} lbs`}
              </p>
            )}
          </div>
        </div>

        {/* Radio groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <RadioGroup
            legend="Activity Level"
            name={`${uid}-activity`}
            value={activity}
            onChange={(v) => setActivity(v as ActivityLevel)}
            options={[
              {
                value: "sedentary",
                label: "Sedentary",
                sub: "Little or no structured exercise",
              },
              {
                value: "active",
                label: "Moderately Active",
                sub: "Regular walks, light gym sessions, yoga",
              },
              {
                value: "resistance",
                label: "Very Active / Resistance Training",
                sub: "Regular strength training or high-intensity exercise",
              },
            ]}
          />
          <RadioGroup
            legend="Health Goal"
            name={`${uid}-goal`}
            value={goal}
            onChange={(v) => setGoal(v as HealthGoal)}
            options={[
              {
                value: "general",
                label: "General Health",
                sub: "Maintain health and function",
              },
              {
                value: "weight",
                label: "Weight Management",
                sub: "Lose or maintain weight while preserving muscle",
              },
              {
                value: "muscle",
                label: "Muscle Building / Strength",
                sub: "Maximize muscle protein synthesis",
              },
            ]}
          />
        </div>

        {/* Results */}
        {results && (
          <div>
            {/* Main result cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: "var(--forest)",
                  borderRadius: 12,
                  padding: "20px 22px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "var(--sage-light)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  Daily Target
                </p>
                <p
                  style={{
                    color: "var(--warm-white)",
                    fontSize: "clamp(1.6rem, 4vw, 2rem)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {results.dailyLow}–{results.dailyHigh}g
                </p>
                <p style={{ color: "var(--mist)", fontSize: "0.8rem" }}>
                  {results.lowRate.toFixed(1)}–{results.highRate.toFixed(1)} g/kg/day
                </p>
              </div>

              <div
                style={{
                  background: "var(--river)",
                  borderRadius: 12,
                  padding: "20px 22px",
                  textAlign: "center",
                  opacity: 0.92,
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  Per Meal (3 meals)
                </p>
                <p
                  style={{
                    color: "var(--warm-white)",
                    fontSize: "clamp(1.6rem, 4vw, 2rem)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {results.perMealLow}–{results.perMealHigh}g
                </p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem" }}>
                  0.4 g/kg/meal target
                </p>
              </div>

              <div
                style={{
                  background: "var(--stone)",
                  borderRadius: 12,
                  padding: "20px 22px",
                  textAlign: "center",
                  border: "1.5px solid var(--stone-dark)",
                }}
              >
                <p
                  style={{
                    color: "var(--bark-light)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  Standard RDA
                </p>
                <p
                  style={{
                    color: "var(--bark)",
                    fontSize: "clamp(1.6rem, 4vw, 2rem)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {results.rdaGrams}g
                </p>
                <p style={{ color: "var(--bark-light)", fontSize: "0.8rem" }}>
                  0.8 g/kg/day (for comparison)
                </p>
              </div>
            </div>

            {/* Visual bar */}
            <div
              style={{
                background: "var(--stone)",
                borderRadius: 12,
                padding: "20px 22px",
                marginBottom: 20,
                border: "1.5px solid var(--stone-dark)",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "var(--charcoal)",
                  marginBottom: 14,
                }}
              >
                Your range vs. standard RDA
              </p>
              <ProteinBar
                dailyLow={results.dailyLow}
                dailyHigh={results.dailyHigh}
                rdaGrams={results.rdaGrams}
              />
            </div>

            {/* Explanation */}
            <div
              style={{
                background: "rgba(61,124,140,0.07)",
                border: "1.5px solid rgba(61,124,140,0.25)",
                borderRadius: 12,
                padding: "18px 22px",
                marginBottom: 20,
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "var(--river)",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                Why this range?
              </p>
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--charcoal)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {results.explanation}
              </p>
            </div>

            {/* Kidney note (conditional) */}
            {results.kidneyNote && (
              <div
                style={{
                  background: "rgba(107,79,58,0.07)",
                  border: "1.5px solid rgba(107,79,58,0.25)",
                  borderRadius: 10,
                  padding: "12px 18px",
                  marginBottom: 20,
                  fontSize: "0.83rem",
                  color: "var(--bark)",
                  lineHeight: 1.5,
                }}
              >
                <strong>Note on kidney health:</strong> Higher protein intakes
                (1.5–2.0 g/kg) are appropriate for most healthy adults. However,
                people with impaired kidney function (eGFR &lt; 30) should consult
                their physician or registered dietitian before increasing protein
                intake, as recommendations differ significantly.
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div
          style={{
            borderTop: "1px solid var(--stone-dark)",
            paddingTop: 16,
            marginTop: 4,
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
            <strong>Disclaimer:</strong> This calculator is for educational
            purposes only. It is not medical advice. Consult your healthcare
            provider before making dietary changes, especially if you have a
            chronic health condition.
          </p>
        </div>
      </div>
    </div>
  );
}
