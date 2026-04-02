"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const topicsColumns = [
  {
    heading: "Body",
    links: [
      { href: "/exercise", label: "Exercise" },
      { href: "/nutrition", label: "Nutrition" },
      { href: "/weight-management", label: "Weight Management" },
    ],
  },
  {
    heading: "Mind",
    links: [
      { href: "/cognitive-health", label: "Cognitive Health" },
      { href: "/behavior-change", label: "Behavior Change" },
      { href: "/sleep", label: "Sleep" },
    ],
  },
  {
    heading: "Longevity",
    links: [
      { href: "/longevity", label: "Longevity" },
      { href: "/healthy-aging", label: "Healthy Aging" },
      { href: "/coaching", label: "Coaching" },
      { href: "/digital-health", label: "Digital Health" },
    ],
  },
];

const allTopicLinks = topicsColumns.flatMap((col) => col.links);

const topNavLinks = [
  { href: "/coaches", label: "Find a Coach" },
  { href: "/blog", label: "Research Blog" },
  { href: "/methodology", label: "Methodology" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--warm-white)",
        borderBottom: "1px solid var(--stone-dark)",
        height: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/cascadia-fitness-logo.svg"
            alt="Cascadia Fitness"
            width={200}
            height={74}
            style={{ height: "auto", width: 200 }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 28, marginLeft: 24 }}
        >
          {/* Topics dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: dropdownOpen ? "var(--forest)" : "var(--charcoal)",
                padding: 0,
              }}
            >
              Topics
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s",
                }}
              >
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  borderRadius: 8,
                  border: "1px solid var(--stone-dark)",
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 160px)",
                  gap: "0 24px",
                  zIndex: 200,
                  minWidth: 520,
                }}
              >
                {topicsColumns.map((col) => (
                  <div key={col.heading}>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--sage)",
                        marginBottom: 10,
                      }}
                    >
                      {col.heading}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setDropdownOpen(false)}
                          style={{
                            textDecoration: "none",
                            fontSize: "0.88rem",
                            fontWeight: 500,
                            color: "var(--charcoal)",
                            padding: "4px 0",
                            transition: "color 0.15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--forest)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--charcoal)")
                          }
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--charcoal)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--forest)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--forest)"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--warm-white)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 99,
            overflowY: "auto",
          }}
        >
          {allTopicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "var(--forest)",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            style={{
              height: 1,
              background: "var(--stone-dark)",
              margin: "4px 0",
            }}
          />
          {topNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "var(--forest)",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
