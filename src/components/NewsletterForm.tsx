"use client";

import { useState } from "react";

const FORM_ID = 9291145;

type Variant = "inline" | "footer" | "hero";
type FormState = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm({
  variant = "inline",
}: {
  variant?: Variant;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "submitting") return;
    setState("submitting");
    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            api_key: process.env.NEXT_PUBLIC_KIT_API_KEY,
          }),
        }
      );
      const data = await res.json();
      if (data?.subscription?.id) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    if (variant === "footer") {
      return (
        <p style={{ fontSize: "0.88rem", color: "var(--sage-light)", lineHeight: 1.5 }}>
          ✓ You&apos;re subscribed! Check your inbox to confirm.
        </p>
      );
    }
    return (
      <p
        style={{
          fontSize: "1rem",
          color: variant === "hero" ? "var(--sage-light)" : "var(--forest)",
          fontFamily: "var(--font-body)",
          textAlign: "center",
        }}
      >
        ✓ You&apos;re subscribed! Check your inbox to confirm.
      </p>
    );
  }

  if (variant === "hero") {
    return (
      <>
        <form
          style={{
            display: "flex",
            gap: 10,
            maxWidth: 440,
            margin: "0 auto 16px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "14px 16px",
              borderRadius: 6,
              border: "none",
              fontSize: "0.95rem",
              fontFamily: "var(--font-body)",
              outline: "none",
              backgroundColor: "white",
              color: "var(--charcoal)",
            }}
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            style={{
              padding: "14px 20px",
              backgroundColor: "transparent",
              color: "var(--warm-white)",
              border: "2px solid var(--warm-white)",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: state === "submitting" ? "not-allowed" : "pointer",
              fontFamily: "var(--font-body)",
              whiteSpace: "nowrap",
            }}
          >
            {state === "submitting" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {state === "error" && (
          <p style={{ fontSize: "0.82rem", color: "#f87171", marginBottom: 8, textAlign: "center" }}>
            Something went wrong. Please try again.
          </p>
        )}
        <p style={{ fontSize: "0.78rem", color: "var(--sage)" }}>
          Free forever. No spam. Unsubscribe anytime.
        </p>
      </>
    );
  }

  if (variant === "footer") {
    return (
      <>
        <form style={{ display: "flex", gap: 8 }} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email address for newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid var(--forest-light)",
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "0.9rem",
              fontFamily: "var(--font-body)",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            style={{
              padding: "10px 20px",
              backgroundColor: "var(--river)",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: "0.88rem",
              cursor: state === "submitting" ? "not-allowed" : "pointer",
              fontFamily: "var(--font-body)",
            }}
          >
            {state === "submitting" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {state === "error" && (
          <p style={{ fontSize: "0.72rem", marginTop: 6, color: "#f87171" }}>
            Something went wrong. Please try again.
          </p>
        )}
        <p style={{ fontSize: "0.72rem", marginTop: 8, color: "var(--sage)" }}>
          No spam. Unsubscribe anytime.
        </p>
      </>
    );
  }

  // inline (default)
  return (
    <>
      <form
        style={{
          display: "flex",
          gap: 10,
          maxWidth: 440,
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          disabled={state === "submitting"}
          style={{
            padding: "14px 24px",
            backgroundColor: "var(--forest)",
            color: "var(--warm-white)",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: state === "submitting" ? "not-allowed" : "pointer",
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
          }}
        >
          {state === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {state === "error" && (
        <p style={{ fontSize: "0.78rem", color: "#dc2626", marginTop: 8, textAlign: "center" }}>
          Something went wrong. Please try again.
        </p>
      )}
      <p style={{ fontSize: "0.78rem", color: "var(--sage)", marginTop: 12 }}>
        No spam. Unsubscribe anytime.
      </p>
    </>
  );
}
