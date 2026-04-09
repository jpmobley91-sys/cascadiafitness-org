// app/api/subscribe/route.js

const KIT_API_KEY = process.env.CONVERTKIT_API_KEY;
console.log("KIT_API_KEY loaded:", KIT_API_KEY ? KIT_API_KEY.substring(0, 5) + "..." : "MISSING");
const KIT_FORM_ID = "9291145";

// Maps form interest values → Kit tag names
const TAG_MAP = {
  nutrition: "interest-nutrition",
  exercise: "interest-exercise",
  weight: "interest-weight-management",
  sleep: "interest-sleep",
  cognitive: "interest-cognitive",
  longevity: "interest-longevity",
  coach: "interest-find-coach",
  unsure: "interest-unsure",
};

// Fetch all Kit tags and return the numeric ID for a given tag name
async function getTagId(tagName) {
  const res = await fetch(`https://api.convertkit.com/v3/tags?api_secret=${KIT_API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch Kit tags");
  const data = await res.json();
  const tag = data.tags.find((t) => t.name === tagName);
  if (!tag) throw new Error(`Tag "${tagName}" not found in Kit`);
  return tag.id;
}

export async function POST(request) {
  try {
    const { name, email, interest, goal, source } = await request.json();

    // ── Validate ──
    if (!name?.trim() || !email?.trim() || !interest) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const tagName = TAG_MAP[interest];
    if (!tagName) {
      return Response.json({ error: "Invalid interest selection." }, { status: 400 });
    }

    // ── Resolve tag ID ──
    const tagId = await getTagId(tagName);

    // ── Subscribe to form ──
    const subscribeRes = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_KEY,
          email,
          first_name: name.trim(),
          fields: {
            // Custom fields — create these in Kit under Subscribers → Custom Fields if you want them stored
            health_goal: goal || "",
            referral_source: source || "",
          },
        }),
      }
    );

    if (!subscribeRes.ok) {
      const err = await subscribeRes.json();
      console.error("Kit subscribe error:", err);
      return Response.json({ error: "Subscription failed." }, { status: 502 });
    }

    // ── Apply tag ──
    const tagRes = await fetch(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_secret: KIT_API_KEY,
          email,
        }),
      }
    );

    if (!tagRes.ok) {
      console.error("Kit tag error:", await tagRes.json());
      // Non-fatal — subscriber was still created
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
