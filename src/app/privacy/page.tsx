import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CascadiaFitness.org",
  description:
    "How CascadiaFitness.org collects, uses, and protects your information. We are not a healthcare provider and do not collect sensitive health data.",
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

const boldStyle: React.CSSProperties = {
  fontWeight: 600,
};

export default function PrivacyPolicyPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "64px 24px",
        fontFamily: "var(--font-body)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2rem",
          color: "var(--forest)",
          marginBottom: "0.5rem",
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--stone-dark)",
          marginBottom: "2rem",
        }}
      >
        Effective: March 2026 · Last updated: April 2026
      </p>

      {/* Who We Are */}
      <h2 style={sectionHeadingStyle}>Who We Are</h2>
      <p style={bodyStyle}>
        CascadiaFitness.org is an educational website focused on evidence-based
        wellness research for adults over 50. It is independently operated and is
        not a healthcare provider, health plan, or healthcare clearinghouse. We
        are not a HIPAA-covered entity.
      </p>
      <p style={bodyStyle}>
        This privacy policy explains what information we collect, how we use it,
        and your choices regarding that information.
      </p>

      {/* What We Collect */}
      <h2 style={sectionHeadingStyle}>What We Collect</h2>
      <p style={bodyStyle}>
        <span style={boldStyle}>Information you provide directly:</span> When
        you subscribe to our newsletter, we collect your email address. When you
        submit a contact form or email us, we collect your name and email
        address, and any information you choose to include in your message.
      </p>
      <p style={bodyStyle}>
        We do not request or collect medical records, health insurance
        information, Social Security numbers, financial account numbers, or other
        sensitive personal data. Please do not send us sensitive health or
        medical information through email or any form on this site.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Information collected automatically:</span> When
        you visit the site, we may collect standard analytics data including
        pages viewed, time spent on pages, referring URLs, browser type, device
        type, and approximate geographic location (city/region level, not
        precise). This data is collected through Google Analytics and is used to
        understand how visitors use the site and to improve our content.
      </p>
      <p style={bodyStyle}>
        We do not use this data to identify individual visitors. Google Analytics
        data is governed by Google&apos;s own privacy policy.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Cookies:</span> We use only essential cookies
        required for site functionality and analytics. We do not use advertising
        cookies, tracking pixels, or retargeting technologies. We do not serve
        ads on this site.
      </p>

      {/* How We Use Your Information */}
      <h2 style={sectionHeadingStyle}>How We Use Your Information</h2>
      <p style={bodyStyle}>
        We use the information we collect for the following purposes: to send you
        our newsletter if you&apos;ve subscribed; to respond to messages you send
        us; to understand aggregate traffic patterns and improve our content; and
        to measure the reach and engagement of our educational resources.
      </p>
      <p style={bodyStyle}>
        We do not sell, rent, or share your personal information with third
        parties for marketing purposes. We do not use your data for advertising
        or ad targeting.
      </p>

      {/* Third-Party Services */}
      <h2 style={sectionHeadingStyle}>Third-Party Services</h2>
      <p style={bodyStyle}>
        We use the following third-party services to operate this site:
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Vercel</span> — Hosts the website. May process
        server logs containing IP addresses. Governed by Vercel&apos;s privacy
        policy.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Google Analytics</span> — Collects anonymized
        site usage data. Governed by Google&apos;s privacy policy. You can opt
        out of Google Analytics by installing the Google Analytics opt-out
        browser add-on.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Kit (formerly ConvertKit)</span> — Manages
        newsletter subscriptions and delivers emails. Your email address is
        shared with Kit solely for the purpose of delivering the newsletter.
        Governed by Kit&apos;s privacy policy at kit.com/privacy.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Buy Me a Coffee</span> — Accepts voluntary
        support contributions. If you choose to make a contribution, your
        payment is processed by Buy Me a Coffee and is subject to their privacy
        policy. We do not collect or store your payment information.
      </p>

      {/* Coach Directory */}
      <h2 style={sectionHeadingStyle}>Coach Directory</h2>
      <p style={bodyStyle}>
        The coach directory on this site displays professional profiles of
        NBC-HWC certified health coaches. Profile information (name,
        credentials, location, specialties, and website URL) is provided by the
        coaches themselves and displayed with their consent.
      </p>
      <p style={bodyStyle}>
        Coach contact information (email addresses) is stored internally for
        administrative purposes and is not displayed publicly on the site.
      </p>
      <p style={bodyStyle}>
        If you are a listed coach and want to update or remove your profile,
        contact us at the email address below.
      </p>

      {/* Your Choices */}
      <h2 style={sectionHeadingStyle}>Your Choices</h2>
      <p style={bodyStyle}>
        <span style={boldStyle}>Newsletter:</span> You can unsubscribe from our
        newsletter at any time using the unsubscribe link in any email we send.
        Your email address will be removed from our mailing list.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Analytics:</span> You can opt out of Google
        Analytics tracking by installing the official opt-out browser extension
        at{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--forest)" }}
        >
          tools.google.com/dlpage/gaoptout
        </a>
        .
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Cookies:</span> You can configure your browser
        to block or delete cookies. Note that blocking essential cookies may
        affect site functionality.
      </p>
      <p style={bodyStyle}>
        <span style={boldStyle}>Data requests:</span> You can contact us to
        request a copy of any personal data we hold about you, or to request
        deletion of your data. We will respond within 30 days.
      </p>

      {/* Data Security */}
      <h2 style={sectionHeadingStyle}>Data Security</h2>
      <p style={bodyStyle}>
        We take reasonable measures to protect the information we collect.
        However, no method of electronic transmission or storage is 100% secure.
      </p>
      <p style={bodyStyle}>
        Communications sent through forms or email on this site are not
        encrypted end-to-end. Do not send sensitive medical, financial, or
        personal information through these channels. By submitting information
        through a form or email, you acknowledge this limitation.
      </p>

      {/* Children's Privacy */}
      <h2 style={sectionHeadingStyle}>Children&apos;s Privacy</h2>
      <p style={bodyStyle}>
        This site is designed for adults and is not directed at children under
        13. We do not knowingly collect personal information from children under
        13. If we learn that we have collected information from a child under 13,
        we will delete it promptly.
      </p>

      {/* Changes to This Policy */}
      <h2 style={sectionHeadingStyle}>Changes to This Policy</h2>
      <p style={bodyStyle}>
        We may update this privacy policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision. Material changes will be noted on the site.
      </p>

      {/* Contact */}
      <h2 style={sectionHeadingStyle}>Contact</h2>
      <p style={bodyStyle}>
        If you have questions about this privacy policy or your personal data,
        contact us at:
      </p>
      <p style={bodyStyle}>
        <a
          href="mailto:hello@cascadiafitness.org"
          style={{ color: "var(--forest)" }}
        >
          hello@cascadiafitness.org
        </a>
        <br />
        CascadiaFitness.org
        <br />
        Vancouver, WA
      </p>
    </main>
  );
}
