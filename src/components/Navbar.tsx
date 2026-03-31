"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/nutrition", label: "Nutrition" },
  { href: "/exercise", label: "Exercise" },
  { href: "/behavior-change", label: "Behavior Change" },
  { href: "/coaches", label: "Find a Coach" },
  { href: "/blog", label: "Research Blog" },
  { href: "/methodology", label: "Methodology" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              color: "var(--forest)",
            }}
          >
            CascadiaFitness
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--sage)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            .org
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--charcoal)",
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
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
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
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
            gap: 24,
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "1.2rem",
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
