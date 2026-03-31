import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CascadiaFitness.org — Research-Based Wellness for Adults 50+",
  description:
    "Evidence-based nutrition, exercise, and health coaching resources for adults over 50. Built on peer-reviewed research. Find a certified health coach near you.",
  keywords: [
    "health coaching",
    "wellness over 50",
    "evidence-based nutrition",
    "exercise for older adults",
    "NBC-HWC",
    "Pacific Northwest wellness",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Educational disclaimer — required on every page per roadmap */}
        <div
          style={{
            backgroundColor: "var(--stone)",
            borderBottom: "1px solid var(--stone-dark)",
            padding: "8px 24px",
            fontSize: "0.78rem",
            color: "var(--bark)",
            textAlign: "center",
            fontFamily: "var(--font-body)",
          }}
        >
          Educational resource only — not medical advice. Always consult your
          healthcare provider before making changes to your diet or exercise
          routine.
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-VH80XCS2T1"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VH80XCS2T1');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
