"use client";

import { useState, useRef } from "react";

// ── PNW Palette ──
const COLORS = {
  forest: "#2D4A3E",
  sage: "#7A9E7E",
  river: "#4A7C8F",
  stone: "#B8AFA6",
  bark: "#5C4033",
  warmWhite: "#FAF8F5",
  charcoal: "#2C2C2C",
  sageMuted: "rgba(122,158,126,0.12)",
  riverLight: "rgba(74,124,143,0.08)",
};

const INTERESTS = [
  { value: "nutrition", label: "Nutrition & Protein Optimization" },
  { value: "exercise", label: "Exercise & Physical Activity" },
  { value: "weight", label: "Weight Management & Metabolic Health" },
  { value: "sleep", label: "Sleep & Recovery" },
  { value: "cognitive", label: "Cognitive Health & Brain Aging" },
  { value: "longevity", label: "Longevity Science" },
  { value: "coach", label: "Find a Health Coach" },
  { value: "unsure", label: "I'm not sure — help me figure it out" },
];

const SOURCES = [
  { value: "google", label: "Google Search" },
  { value: "social", label: "Social Media" },
  { value: "friend", label: "Friend / Word of Mouth" },
  { value: "youtube", label: "YouTube" },
  { value: "other", label: "Other" },
];

// Smart redirect map
const REDIRECTS = {
  nutrition: { url: "/nutrition", cta: "Try the Protein Calculator", note: "E-book coming soon." },
  exercise: { url: "/exercise", cta: "Explore Exercise Resources", note: null },
  weight: { url: "/nutrition", cta: "Try the Protein Calculator", note: "E-book coming soon." },
  sleep: { url: "/sleep", cta: "Take the Sleep Assessment", note: null },
  cognitive: { url: "/cognitive-health", cta: "Explore Cognitive Health", note: null },
  longevity: { url: "/longevity", cta: "Explore Longevity Science", note: null },
  coach: { url: "/find-a-coach", cta: "Browse NBC-HWC Coaches", note: null },
  unsure: { url: "/faq", cta: "Start with the FAQ", note: null },
};

// ── Styles ──
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: COLORS.warmWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 2px 24px rgba(44,44,44,0.06)",
    border: `1px solid ${COLORS.stone}33`,
    overflow: "hidden",
  },
  header: {
    padding: "36px 32px 0",
  },
  accentBar: {
    width: 48,
    height: 3,
    background: `linear-gradient(90deg, ${COLORS.forest}, ${COLORS.sage})`,
    borderRadius: 2,
    marginBottom: 20,
  },
  h1: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.forest,
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.charcoal,
    opacity: 0.72,
    lineHeight: 1.55,
    marginTop: 10,
    marginBottom: 0,
  },
  form: {
    padding: "28px 32px 32px",
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.forest,
    marginBottom: 6,
    letterSpacing: "0.02em",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    fontSize: 15,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: `${COLORS.stone}88`,
    borderRadius: 8,
    background: COLORS.warmWhite,
    color: COLORS.charcoal,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputFocus: {
    borderColor: COLORS.sage,
    boxShadow: `0 0 0 3px ${COLORS.sageMuted}`,
  },
  select: {
    width: "100%",
    padding: "11px 14px",
    fontSize: 15,
    borderWidth: "1.5px",
    borderStyle: "solid",
    borderColor: `${COLORS.stone}88`,
    borderRadius: 8,
    background: COLORS.warmWhite,
    color: COLORS.charcoal,
    outline: "none",
    cursor: "pointer",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%232D4A3E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    boxSizing: "border-box",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  optional: {
    fontSize: 11,
    fontWeight: 400,
    color: COLORS.stone,
    marginLeft: 4,
  },
  button: {
    width: "100%",
    padding: "14px",
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
    background: `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.river})`,
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    letterSpacing: "0.03em",
    transition: "transform 0.15s, box-shadow 0.2s, opacity 0.2s",
    marginTop: 8,
    fontFamily: "inherit",
  },
  buttonHover: {
    transform: "translateY(-1px)",
    boxShadow: `0 4px 16px ${COLORS.forest}44`,
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "none",
  },
  disclaimer: {
    fontSize: 11.5,
    color: COLORS.stone,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 1.5,
  },
  // Thank-you state
  thankYou: {
    padding: "48px 32px",
    textAlign: "center",
  },
  checkCircle: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: COLORS.sageMuted,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  thankYouH2: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 24,
    fontWeight: 700,
    color: COLORS.forest,
    margin: "0 0 10px",
  },
  thankYouP: {
    fontSize: 15,
    color: COLORS.charcoal,
    opacity: 0.75,
    lineHeight: 1.55,
    margin: "0 0 24px",
  },
  ctaLink: {
    display: "inline-block",
    padding: "12px 28px",
    fontSize: 15,
    fontWeight: 600,
    color: "#fff",
    background: COLORS.forest,
    borderRadius: 8,
    textDecoration: "none",
    transition: "background 0.2s",
  },
  noteText: {
    fontSize: 13,
    color: COLORS.sage,
    marginTop: 12,
    fontStyle: "italic",
  },
  error: {
    fontSize: 12,
    color: "#c0392b",
    marginTop: 4,
  },
};

// ── Component ──
export default function ConnectForm() {
  const [form, setForm] = useState({ name: "", email: "", interest: "", goal: "", source: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "First name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required.";
    if (!form.interest) e.interest = "Please select an interest.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          interest: form.interest,
          goal: form.goal,
          source: form.source,
        }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSubmitted(true);
    } catch {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const redirect = REDIRECTS[form.interest] || REDIRECTS.unsure;

  const inputStyle = (field) => ({
    ...styles.input,
    ...(focusedField === field ? styles.inputFocus : {}),
  });

  const selectStyle = (field) => ({
    ...styles.select,
    ...(focusedField === field ? styles.inputFocus : {}),
    color: form[field] ? COLORS.charcoal : COLORS.stone,
  });

  if (submitted) {
    return (
      <div style={styles.wrapper}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
        <div style={styles.card}>
          <div style={styles.thankYou}>
            <div style={styles.checkCircle}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.forest} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h2 style={styles.thankYouH2}>You're in, {form.name}.</h2>
            <p style={styles.thankYouP}>
              We'll send curated resources to {form.email}.<br />
              In the meantime, here's your next step:
            </p>
            <a href={redirect.url} style={styles.ctaLink}>{redirect.cta}</a>
            {redirect.note && <p style={styles.noteText}>{redirect.note}</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.accentBar} />
          <h1 style={styles.h1}>What Are You Working On?</h1>
          <p style={styles.subtitle}>
            Tell us what matters to you. We'll point you to the best free resources — and when you're ready, connect you with an NBC-HWC certified coach.
          </p>
        </div>

        <div style={styles.form}>
          {/* Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>First Name</label>
            <input
              style={inputStyle("name")}
              placeholder="Your first name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.name && <div style={styles.error}>{errors.name}</div>}
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={inputStyle("email")}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.email && <div style={styles.error}>{errors.email}</div>}
          </div>

          {/* Interest */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>What brings you here?</label>
            <select
              style={selectStyle("interest")}
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              onFocus={() => setFocusedField("interest")}
              onBlur={() => setFocusedField(null)}
            >
              <option value="" disabled>Select your primary interest</option>
              {INTERESTS.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
            </select>
            {errors.interest && <div style={styles.error}>{errors.interest}</div>}
          </div>

          {/* Goal */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>
              Your #1 health goal right now<span style={styles.optional}> (optional)</span>
            </label>
            <input
              style={inputStyle("goal")}
              placeholder="e.g. Lose 20 lbs, sleep better, build muscle after 50"
              maxLength={120}
              value={form.goal}
              onChange={(e) => setForm({ ...form, goal: e.target.value })}
              onFocus={() => setFocusedField("goal")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Source */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>
              How did you find us?<span style={styles.optional}> (optional)</span>
            </label>
            <select
              style={selectStyle("source")}
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
              onFocus={() => setFocusedField("source")}
              onBlur={() => setFocusedField(null)}
            >
              <option value="" disabled>Select one</option>
              {SOURCES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          {/* Submit */}
          <button
            style={{
              ...styles.button,
              ...(btnHover && !submitting ? styles.buttonHover : {}),
              ...(submitting ? styles.buttonDisabled : {}),
            }}
            onClick={handleSubmit}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Let's Go →"}
          </button>

          {errors.submit && <div style={{ ...styles.error, textAlign: "center", marginTop: 8 }}>{errors.submit}</div>}

          <p style={styles.disclaimer}>
            We respect your privacy. Your information is never sold or shared.{" "}
            <a href="/privacy" style={{ color: COLORS.sage, textDecoration: "underline" }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
