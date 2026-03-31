"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

const THEMES = ["All", "Nutrition", "Exercise", "Behavior Change"] as const;

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        fontSize: "0.82rem",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        borderRadius: 20,
        border: active
          ? "1px solid var(--forest)"
          : "1px solid var(--stone-dark)",
        background: active ? "var(--forest)" : "white",
        color: active ? "white" : "var(--charcoal)",
        cursor: "pointer",
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <article
        style={{
          background: "white",
          border: "1px solid var(--stone-dark)",
          borderRadius: 12,
          padding: 24,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px rgba(26,58,42,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Theme badge + Top 25 badge */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "3px 10px",
              borderRadius: 12,
              background: post.themeColor,
              color: "white",
            }}
          >
            {post.theme}
          </span>
          {post.top25Rank !== null && (
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 12,
                background: "var(--river)",
                color: "white",
              }}
            >
              Top 25 &middot; #{post.top25Rank}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.15rem",
            color: "var(--forest)",
            lineHeight: 1.3,
            marginBottom: 8,
          }}
        >
          {post.title}
        </h3>

        {/* Subtitle / excerpt */}
        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--bark)",
            lineHeight: 1.55,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {post.excerpt}
        </p>

        {/* Bottom meta row */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "var(--sage)",
            fontWeight: 500,
          }}
        >
          {post.date} &middot; {post.readTime} &middot; {post.studyType}
        </p>
      </article>
    </Link>
  );
}

export default function BlogPage() {
  const [activeTheme, setActiveTheme] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTheme === "All") return blogPosts;
    return blogPosts.filter((p) => p.theme === activeTheme);
  }, [activeTheme]);

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "80px 24px 60px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--sage)",
              marginBottom: 12,
            }}
          >
            Research Blog
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              marginBottom: 16,
              color: "var(--forest)",
            }}
          >
            Research, Translated
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--bark)",
              lineHeight: 1.65,
              maxWidth: 580,
            }}
          >
            Each post summarizes a peer-reviewed study in plain language and
            links to the original source. No hype. No spin. Just evidence.
          </p>
        </div>
      </section>

      {/* ── Filter Pills ── */}
      <section style={{ padding: "32px 24px 0" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {THEMES.map((t) => (
            <FilterPill
              key={t}
              label={t}
              active={activeTheme === t}
              onClick={() => setActiveTheme(t)}
            />
          ))}
        </div>
      </section>

      {/* ── Blog Cards Grid ── */}
      <section style={{ padding: "32px 24px 80px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px 24px",
                color: "var(--bark)",
              }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                No posts found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        style={{ backgroundColor: "var(--stone)", padding: "64px 24px" }}
      >
        <div
          style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: 12,
            }}
          >
            Stay up to date
          </h2>
          <p
            style={{
              color: "var(--bark)",
              fontSize: "1rem",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            New research posts every two weeks. Subscribe to the digest.
          </p>
          <form
            style={{
              display: "flex",
              gap: 10,
              maxWidth: 440,
              margin: "0 auto",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
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
              style={{
                padding: "14px 24px",
                backgroundColor: "var(--forest)",
                color: "var(--warm-white)",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </form>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--sage)",
              marginTop: 12,
            }}
          >
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
