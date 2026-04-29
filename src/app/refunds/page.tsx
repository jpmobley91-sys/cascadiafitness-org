import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — CascadiaFitness.org",
  description:
    "Cascadia Fitness 14-day satisfaction guarantee on Protein After 50 and all digital products. Full refunds, no questions asked.",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.3rem",
  color: "var(--forest)",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
  paddingTop: "2rem",
  borderTop: "1px solid var(--stone-dark)",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "var(--charcoal)",
  marginBottom: "1rem",
};

const listStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.7,
  color: "var(--charcoal)",
  marginBottom: "1rem",
  paddingLeft: "1.4rem",
};

const linkStyle: React.CSSProperties = {
  color: "var(--forest)",
};

export default function RefundPolicyPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "64px 24px",
        fontFamily: "var(--font-body)",
        backgroundColor: "var(--warm-white)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          color: "var(--forest)",
          marginBottom: "1rem",
        }}
      >
        Refund Policy
      </h1>

      <p style={bodyStyle}>
        We sell digital books and tools to people who care about their long-term
        health. That relationship only works if it&apos;s built on trust — so
        our refund policy is simple, generous, and honest.
      </p>

      <h2 style={sectionHeadingStyle}>14-Day Satisfaction Guarantee</h2>
      <p style={bodyStyle}>
        If Protein After 50 — or any digital product we sell — doesn&apos;t
        deliver what we promised, reply to your receipt within 14 days of
        purchase and we&apos;ll refund you in full.
      </p>
      <p style={bodyStyle}>
        No forms. No follow-up questions. No interrogation. We&apos;d rather
        lose $27 than your trust.
      </p>

      <h2 style={sectionHeadingStyle}>How It Works</h2>
      <ul style={listStyle}>
        <li style={{ marginBottom: "0.5rem" }}>
          Reply to the receipt email you received at purchase, or email{" "}
          <a href="mailto:jpmobley91@gmail.com" style={linkStyle}>
            jpmobley91@gmail.com
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Include your order number (it&apos;s in the receipt) and we&apos;ll
          handle the rest
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Refunds are processed within 2 business days
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          The refunded amount appears on your statement within 5–10 days,
          depending on your bank
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          The PDF is yours to keep — there&apos;s nothing for us to &ldquo;take
          back&rdquo;
        </li>
      </ul>

      <h2 style={sectionHeadingStyle}>What&apos;s Covered</h2>
      <p style={bodyStyle}>
        The 14-day guarantee applies to all digital products purchased directly
        through{" "}
        <a href="http://cascadiafitness.online" style={linkStyle}>
          cascadiafitness.online
        </a>
        , including Protein After 50 and any future books, courses, or
        downloadable tools.
      </p>
      <p style={bodyStyle}>The guarantee does not apply to:</p>
      <ul style={listStyle}>
        <li style={{ marginBottom: "0.5rem" }}>
          Free resources (newsletters, blog posts, the protein calculator, free
          chapter downloads) — these are free, so there&apos;s nothing to refund
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Purchases made through third-party platforms (Amazon, Apple Books,
          etc.) if we ever distribute there in the future — those refunds are
          handled by the platform under their own terms
        </li>
      </ul>

      <h2 style={sectionHeadingStyle}>Why We Offer This</h2>
      <p style={bodyStyle}>
        Cascadia Fitness exists to put evidence-based health information in
        front of people who want to make better decisions. If a book we wrote
        doesn&apos;t earn its place in your life, we shouldn&apos;t keep your
        money.
      </p>
      <p style={bodyStyle}>
        Refunds are not a loophole. They&apos;re the cost of being trustworthy.
      </p>

      <h2 style={sectionHeadingStyle}>Questions</h2>
      <p style={bodyStyle}>
        For any refund-related questions, email{" "}
        <a href="mailto:jpmobley91@gmail.com" style={linkStyle}>
          jpmobley91@gmail.com
        </a>{" "}
        and we&apos;ll respond within 1 business day.
      </p>
      <p style={bodyStyle}>
        For all other questions, see our{" "}
        <Link href="/connect" style={linkStyle}>
          Contact
        </Link>{" "}
        page or{" "}
        <Link href="/faq" style={linkStyle}>
          FAQ
        </Link>
        .
      </p>

      <p
        style={{
          marginTop: "3rem",
          fontSize: "0.82rem",
          fontStyle: "italic",
          color: "var(--bark)",
          lineHeight: 1.6,
        }}
      >
        Educational content, not medical advice. Cascadia Fitness is a research
        and education platform — your physician makes the call on what&apos;s
        right for your body.
      </p>
    </main>
  );
}
