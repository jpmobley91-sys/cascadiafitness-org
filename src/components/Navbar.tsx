"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const dropdownGroups = [
  {
    label: "Body",
    links: [
      { href: "/exercise", label: "Exercise" },
      { href: "/nutrition", label: "Nutrition" },
      { href: "/weight-management", label: "Weight Management" },
    ],
  },
  {
    label: "Mind",
    links: [
      { href: "/cognitive-health", label: "Cognitive Health" },
      { href: "/behavior-change", label: "Behavior Change" },
      { href: "/sleep", label: "Sleep & Recovery" },
    ],
  },
  {
    label: "Longevity",
    links: [
      { href: "/longevity", label: "Longevity Science" },
      { href: "/healthy-aging", label: "Healthy Aging" },
      { href: "/coaching", label: "Coaching" },
      { href: "/digital-health", label: "Digital Health" },
    ],
  },
];

const allTopicLinks = dropdownGroups.flatMap((g) => g.links);

const topNavLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/coaches", label: "Find a Coach" },
  { href: "/blog", label: "Research Blog" },
  { href: "/methodology", label: "Methodology" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
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
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", overflow: "visible" }}>
          <Image
            src="/cascadia-fitness-logo.svg"
            alt="Cascadia Fitness"
            width={260}
            height={96}
            style={{ height: "auto", width: 260 }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 18, marginLeft: 24 }}
        >
          {/* Three dropdowns */}
          {dropdownGroups.map((group) => (
            <div
              key={group.label}
              style={{ position: "relative" }}
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(openDropdown === group.label ? null : group.label)
                }
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
                  color:
                    openDropdown === group.label ? "var(--forest)" : "var(--charcoal)",
                  padding: 0,
                }}
              >
                {group.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    transform:
                      openDropdown === group.label
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.15s",
                  }}
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              {openDropdown === group.label && (
                <div
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                    borderRadius: 8,
                    border: "1px solid var(--stone-dark)",
                    padding: 8,
                    minWidth: 200,
                    zIndex: 200,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpenDropdown(null)}
                      style={{
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "var(--charcoal)",
                        padding: "7px 12px",
                        borderRadius: 6,
                        transition: "background 0.12s, color 0.12s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--stone)";
                        e.currentTarget.style.color = "var(--forest)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--charcoal)";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Top-level links */}
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
