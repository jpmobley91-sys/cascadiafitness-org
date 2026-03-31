import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

/* ── Static params for all 6 posts ── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── SEO metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — CascadiaFitness.org`,
    description: post.excerpt,
  };
}

/* ── Shared inline styles ── */
const prose = {
  fontSize: "1.05rem",
  lineHeight: 1.75,
  color: "var(--charcoal)",
  marginBottom: "1.25rem",
} as const;

const h2Style = {
  fontFamily: "var(--font-display)",
  fontSize: "1.4rem",
  color: "var(--forest)",
  marginTop: "2rem",
  marginBottom: "0.75rem",
  lineHeight: 1.3,
} as const;

/* ── Blog post body content ── */
function PostBody({ slug }: { slug: string }) {
  switch (slug) {
    case "protein-after-50":
      return (
        <>
          <p style={prose}>
            The official protein recommendation for adults — 0.8 grams per
            kilogram of body weight per day — was set to prevent deficiency. It
            was never designed to optimize muscle health in aging adults. A
            growing body of evidence says it falls short, and a 2025 expert
            consensus now recommends substantially more.
          </p>
          <p style={prose}>
            The PROT-AGE Study Group and the European Society for Clinical
            Nutrition and Metabolism (ESPEN) both recommend 1.0–1.2 g/kg/day for
            healthy adults over 65. For those managing chronic conditions like
            diabetes, heart disease, or recovering from illness, the target
            rises to 1.2–1.5 g/kg/day. For a 160-pound adult, that means
            roughly 87–109 grams of protein daily — far more than most people
            are currently eating.
          </p>
          <h2 style={h2Style}>The gap is wider than you think</h2>
          <p style={prose}>
            According to national survey data, approximately 30% of men and 50%
            of women over age 71 in the United States consume inadequate
            protein. That&apos;s not a small shortfall — it&apos;s a population-wide
            pattern with real consequences for muscle mass, bone density, and
            functional independence.
          </p>
          <p style={prose}>
            The Health ABC Study (Houston et al., 2008), which followed 2,066
            older adults over three years, found that those in the highest
            quintile of protein intake lost 40% less lean mass than those in the
            lowest quintile. That&apos;s a meaningful difference — the kind that
            separates someone who can still get up from a chair unassisted from
            someone who can&apos;t.
          </p>
          <h2 style={h2Style}>It&apos;s not just how much — it&apos;s when</h2>
          <p style={prose}>
            Total daily protein matters, but the timing and distribution across
            meals matters too. Research on muscle protein synthesis (MPS) shows
            that older adults need at least 25–30 grams of protein per meal to
            trigger a meaningful anabolic response. The MPS window lasts only
            about 2–3 hours, which means spacing protein across three meals is
            far more effective than backloading it all at dinner — which is
            exactly what most Americans do.
          </p>
          <p style={prose}>
            A breakfast of toast and coffee, a light salad at lunch, and a large
            steak at dinner might hit the daily target on paper. But the
            evidence suggests your muscles didn&apos;t get the signal they needed at
            breakfast or lunch.
          </p>
          <h2 style={h2Style}>Does the source matter?</h2>
          <p style={prose}>
            Animal protein sources — meat, fish, eggs, dairy — have shown
            stronger associations with lean mass preservation in observational
            studies. This is likely due to their higher leucine content and more
            complete amino acid profiles. But plant proteins contribute
            meaningfully to overall intake, and a diet that combines both can
            absolutely meet the higher targets. The key is intentionality:
            planning protein at every meal rather than hoping it works out.
          </p>
          <h2 style={h2Style}>The practical takeaway</h2>
          <p style={prose}>
            Most adults over 50 benefit from actively planning protein at every
            meal. Aim for at least 25–30 grams per meal from high-quality
            sources. If you&apos;re currently eating the standard American pattern —
            light on protein at breakfast and lunch, heavy at dinner — the
            single most impactful change may be redistributing what you already
            eat.
          </p>
          <p style={prose}>
            This isn&apos;t about bodybuilding. It&apos;s about maintaining the muscle
            mass that keeps you independent, prevents falls, and supports
            metabolic health as you age.
          </p>
        </>
      );

    case "creatine-over-50":
      return (
        <>
          <p style={prose}>
            When most people hear &ldquo;creatine,&rdquo; they picture gym bros
            and protein shake culture. But the research on creatine for older
            adults tells a different story entirely. A 2024 systematic review
            and meta-analysis by Davies et al. pooled data from 33 randomized
            controlled trials involving 1,076 participants — 560 healthy older
            adults and 516 with chronic disease — and found consistent benefits
            for muscle function, strength, and lean tissue.
          </p>
          <h2 style={h2Style}>The numbers that matter</h2>
          <p style={prose}>
            Sit-to-stand performance — a key functional test for fall risk and
            independence — improved significantly (standardized mean difference
            0.51, P=0.04). If you&apos;ve ever watched an older adult struggle to
            rise from a low chair, you understand why this metric matters. It&apos;s
            one of the most practical measures of lower-body function we have.
          </p>
          <p style={prose}>
            Upper-body muscle strength also improved (SMD 0.25, P=0.01), as did
            handgrip strength (SMD 0.23, P=0.04). Handgrip strength deserves
            special attention: it is one of the strongest predictors of
            all-cause mortality in older adults. It&apos;s not just about grip — it&apos;s
            a proxy for overall neuromuscular health.
          </p>
          <p style={prose}>
            Lean tissue mass increased by an average of 1.08 kg (P&lt;0.01) across
            the trials. That may sound modest, but in the context of
            age-related muscle loss — where adults lose 3–8% of muscle mass per
            decade after 30 — gaining a kilogram back is clinically meaningful.
          </p>
          <h2 style={h2Style}>What about side effects?</h2>
          <p style={prose}>
            Across all 33 trials, side effects were mild: gastrointestinal
            issues in 6 participants, muscle cramps in 3. No serious adverse
            effects were reported. The persistent myth that creatine damages
            kidneys has not been supported by clinical evidence in healthy
            populations or in the populations studied here.
          </p>
          <h2 style={h2Style}>Context matters</h2>
          <p style={prose}>
            The global supplement market exceeds $200 billion, and most products
            lack strong evidence. Creatine monohydrate is a notable exception.
            It is one of the most extensively studied supplements in sports
            science, and this meta-analysis extends that evidence base to older
            adults and those with chronic conditions.
          </p>
          <p style={prose}>
            About 70% of adults over 65 consume less than the recommended
            creatine intake of 0.95 g/day through diet alone. Supplementation
            with creatine monohydrate at 5 g/day is the most commonly studied
            dose and is widely available at low cost.
          </p>
          <h2 style={h2Style}>The bottom line</h2>
          <p style={prose}>
            The evidence doesn&apos;t guarantee results for every individual, but
            across 33 randomized trials, the direction is consistent. If you&apos;re
            over 50 and doing resistance training, creatine monohydrate is
            worth discussing with your healthcare provider. It&apos;s inexpensive,
            well-studied, and — unlike most supplements — backed by a genuine
            body of evidence.
          </p>
        </>
      );

    case "global-exercise-prescription":
      return (
        <>
          <p style={prose}>
            In 2025, an international panel of more than 40 researchers
            published what may be the most comprehensive exercise guidelines
            ever written for older adults. Published through the International
            Conference on Frailty and Sarcopenia Research (ICFSR), it reads
            less like a suggestion and more like a prescription — and that&apos;s
            intentional.
          </p>
          <p style={prose}>
            This study ranked #1 in our entire 135-article corpus, scoring
            20/20 on rigor, population relevance, practicality, and recency.
            When we built CascadiaFitness.org, this was the paper that most
            directly shaped our approach.
          </p>
          <h2 style={h2Style}>The core prescription</h2>
          <p style={prose}>
            The panel recommends at least 150 minutes of moderate-intensity or
            75 minutes of vigorous-intensity aerobic activity per week, plus
            muscle-strengthening activities on 2 or more days per week. These
            numbers will sound familiar — they align with WHO guidelines. But
            the consensus goes further, with specific guidance on how to
            structure training for adults over 65.
          </p>
          <p style={prose}>
            Progressive resistance training is called out as essential for
            maintaining functional capacity, particularly for those with
            frailty and sarcopenia. The panel emphasizes that resistance
            training should not be optional or secondary to aerobic exercise —
            it is a first-line intervention for preserving independence.
          </p>
          <h2 style={h2Style}>Exercise as medicine</h2>
          <p style={prose}>
            One of the most striking aspects of the consensus is its framing.
            The panel argues that exercise should be prescribed like
            pharmaceutical treatment: with specific dose, modality, and
            intensity customized to the individual. A physician wouldn&apos;t tell a
            patient to &ldquo;take some blood pressure medication&rdquo; without
            specifying which drug, at what dose, and how often. The panel
            argues that exercise deserves the same precision.
          </p>
          <p style={prose}>
            Multicomponent exercise — combining strength, balance, and
            flexibility training — is identified as the most effective approach
            for preventing falls, which remain one of the leading causes of
            injury and loss of independence in older adults.
          </p>
          <h2 style={h2Style}>The biology of why it works</h2>
          <p style={prose}>
            The consensus reviews evidence that physical activity influences
            cellular drivers of biological aging. Through what the researchers
            call &ldquo;geroscience mechanisms,&rdquo; exercise acts on the
            fundamental pathways of aging itself — not just the symptoms. This
            includes effects on mitochondrial function, cellular senescence,
            and chronic inflammation.
          </p>
          <h2 style={h2Style}>The gap between evidence and practice</h2>
          <p style={prose}>
            Despite the strength of the evidence, the panel notes that exercise
            is far from fully integrated into medical practice for older
            adults. Most physician visits don&apos;t include an exercise
            prescription. Most health systems don&apos;t have referral pathways to
            qualified exercise professionals. The infrastructure for
            prescribing exercise the way we prescribe medication simply
            doesn&apos;t exist yet in most settings.
          </p>
          <p style={prose}>
            The research is not ambiguous. The panel&apos;s conclusion is that
            physical activity can prevent or ameliorate lifestyle-related
            diseases, extend healthspan, and enhance physical function. The
            challenge isn&apos;t evidence — it&apos;s implementation.
          </p>
        </>
      );

    case "resistance-training-reverses-aging":
      return (
        <>
          <p style={prose}>
            What if aging — at the molecular level — could be partially
            reversed? In 2007, a research team at the Buck Institute for Age
            Research and McMaster University decided to look inside the muscle
            cells of older adults before and after six months of resistance
            training. What they found was remarkable, and the paper has been
            cited extensively ever since.
          </p>
          <h2 style={h2Style}>The study design</h2>
          <p style={prose}>
            Researchers compared gene expression profiles in skeletal muscle of
            25 healthy older adults (mean age approximately 68) and 26 younger
            adults. They used microarray analysis to measure the activity of
            thousands of genes simultaneously. At baseline, 596 genes were
            differentially expressed between the young and old groups — many of
            them related to mitochondrial function, the cellular machinery
            responsible for energy production.
          </p>
          <p style={prose}>
            The older adults were 59% weaker than their younger counterparts at
            baseline. That gap is consistent with what we know about
            age-related strength loss, but seeing it quantified against a
            molecular backdrop makes the stakes clear.
          </p>
          <h2 style={h2Style}>What happened after training</h2>
          <p style={prose}>
            After six months of twice-weekly resistance training, the older
            adults improved their strength significantly. The strength gap
            between old and young narrowed from 59% to 38%. That alone would be
            a meaningful finding. But the gene expression data told a deeper
            story.
          </p>
          <p style={prose}>
            The transcriptional signature of aging — the pattern of gene
            expression that distinguishes old muscle from young muscle — was
            markedly reversed after training. Genes that had been
            downregulated with age were upregulated after exercise. Genes that
            had been overexpressed in older tissue moved back toward youthful
            levels. The reversal was most dramatic in genes related to
            mitochondrial dysfunction.
          </p>
          <h2 style={h2Style}>What this means — and what it doesn&apos;t</h2>
          <p style={prose}>
            This was a small study — 14 older adults were biopsied in the
            training group. It would be overstating the evidence to claim that
            resistance training makes you biologically younger. The researchers
            were careful to describe the findings as a reversal of the
            transcriptional signature of aging, not aging itself.
          </p>
          <p style={prose}>
            But the implication is powerful: the molecular markers we associate
            with aging muscle are not fixed. They respond to training. The
            muscle tissue of a 70-year-old, when challenged with progressive
            resistance, can shift its gene expression back toward the patterns
            seen in younger adults.
          </p>
          <h2 style={h2Style}>Why it still matters</h2>
          <p style={prose}>
            Nearly two decades later, this study remains one of the most cited
            papers in exercise gerontology. It helped establish the idea that
            aging at the cellular level is more plastic than we assumed — that
            our biology is not a one-way street. Combined with the growing
            body of evidence on resistance training for older adults, it makes
            a compelling case: the muscle you have at 70 can be pushed back
            toward the patterns of youth. That&apos;s worth picking up a weight for.
          </p>
        </>
      );

    case "exercise-with-a-friend":
      return (
        <>
          <p style={prose}>
            Most behavior change programs focus on the individual: set goals,
            track your steps, plan your workouts. It&apos;s the foundation of nearly
            every fitness app and wellness program on the market. A 2024
            clinical trial published in JAMA Network Open tested whether that
            approach actually works for adults over 70 — and the answer was
            surprising.
          </p>
          <h2 style={h2Style}>How the study worked</h2>
          <p style={prose}>
            McMahon et al. designed a 2x2 factorial randomized controlled trial
            with 309 adults aged 70 and older (mean age 77.3, 63% female). All
            participants were insufficiently active at baseline. They were
            randomly assigned to one of four groups: intrapersonal strategies
            only (goal setting, self-monitoring, action planning),
            interpersonal strategies only (partnered activities, group walks,
            social accountability check-ins), both strategies combined, or a
            health education control group.
          </p>
          <p style={prose}>
            Crucially, the study used accelerometer-measured physical activity
            rather than self-report. When people report their own activity
            levels, they tend to overestimate. Accelerometers don&apos;t lie.
          </p>
          <h2 style={h2Style}>The result that mattered</h2>
          <p style={prose}>
            The intrapersonal strategies — goal setting, self-monitoring,
            action planning — showed no significant independent effect on
            physical activity. The tools that form the backbone of most
            wellness programs simply didn&apos;t move the needle for this
            population when used alone.
          </p>
          <p style={prose}>
            The interpersonal strategies told a different story. Partnered
            activities and social accountability produced a significant
            increase of 27.1 minutes per day of total activity at one week
            (P&lt;.001), and this effect was sustained through 12 months of
            follow-up. Light physical activity increased significantly with
            interpersonal strategies at all measured time points.
          </p>
          <h2 style={h2Style}>Social connection was the active ingredient</h2>
          <p style={prose}>
            Perhaps the most telling finding: combining both approaches did not
            produce additive effects. Adding goal setting and self-monitoring
            on top of social strategies didn&apos;t make them work better. The
            social connection was the active ingredient. Everything else was
            noise.
          </p>
          <p style={prose}>
            This challenges a deeply held assumption in the wellness industry —
            that if we just give people better tools for self-management,
            they&apos;ll change their behavior. For adults over 70, at least, the
            evidence points in a different direction entirely.
          </p>
          <h2 style={h2Style}>What this means in practice</h2>
          <p style={prose}>
            The practical takeaway is simple: if you want to move more, find
            someone to move with. The data suggests that for adults over 70,
            social accountability matters more than self-tracking. A walking
            buddy may be more effective than a fitness app. A group exercise
            class may do more for your long-term activity levels than the most
            carefully designed personal goal-setting worksheet.
          </p>
        </>
      );

    case "one-hour-in-nature":
      return (
        <>
          <p style={prose}>
            We&apos;ve long intuited that time in nature feels restorative. Parks,
            forests, and green spaces have a way of quieting the mind that most
            people recognize but struggle to articulate. A 2022 study from the
            Max Planck Institute for Human Development decided to move beyond
            intuition and look directly at what happens inside the brain using
            fMRI scans.
          </p>
          <h2 style={h2Style}>The experiment</h2>
          <p style={prose}>
            Sixty-three healthy adults were randomly assigned to take a
            60-minute walk in one of two environments: the Grunewald forest in
            Berlin, or along a busy commercial street in the same city. Before
            and after the walk, participants underwent fMRI brain scans while
            performing a social stress task — viewing images of fearful and
            neutral faces designed to activate the brain&apos;s threat-processing
            circuitry.
          </p>
          <p style={prose}>
            The researchers were specifically interested in the amygdala — a
            small, almond-shaped brain region central to processing fear,
            anxiety, and the physiological stress response. If nature has a
            genuine calming effect on the brain, the amygdala is where you&apos;d
            expect to see it.
          </p>
          <h2 style={h2Style}>What the scans showed</h2>
          <p style={prose}>
            The nature walk group showed significantly decreased amygdala
            activity during the stress task after their walk. The effect was
            observed in both the left and right amygdala, and for both fearful
            and neutral face conditions. The brain&apos;s stress center had
            quieted.
          </p>
          <p style={prose}>
            The urban walk group showed stable amygdala activity — no decrease.
            Walking itself wasn&apos;t the mechanism. The environment was.
          </p>
          <h2 style={h2Style}>The gap between brain and awareness</h2>
          <p style={prose}>
            Here&apos;s where the study gets particularly interesting: self-reported
            stress measures did not differ between the two groups. Both groups
            reported similar subjective experiences. The neural changes occurred
            below conscious awareness — the nature walkers&apos; brains were
            objectively less reactive to stress, even though they didn&apos;t
            &ldquo;feel&rdquo; noticeably different from the urban walkers.
          </p>
          <p style={prose}>
            The researchers suggest this means nature may buffer stress at a
            biological level even when people don&apos;t subjectively perceive the
            benefit. Your amygdala knows something your conscious mind
            doesn&apos;t.
          </p>
          <h2 style={h2Style}>Limitations and context</h2>
          <p style={prose}>
            This was a single-session study with 63 participants. We don&apos;t know
            how long the effect lasts, whether it accumulates with repeated
            exposure, or whether it translates to clinical outcomes like reduced
            anxiety diagnoses. But the finding is consistent with a much larger
            observational literature linking nature exposure to better mental
            health outcomes.
          </p>
          <p style={prose}>
            One walk in a forest won&apos;t cure anxiety. But this study adds a
            neurobiological layer to what many people already sense: time in
            nature does something meaningful to the stress circuits in your
            brain, even if you can&apos;t quite put your finger on it.
          </p>
        </>
      );

    default:
      return null;
  }
}

/* ── Related posts helper ── */
function getRelatedPosts(current: BlogPost): BlogPost[] {
  // Prefer posts from different themes
  const otherTheme = blogPosts.filter(
    (p) => p.slug !== current.slug && p.theme !== current.theme
  );
  if (otherTheme.length >= 2) return otherTheme.slice(0, 2);
  // Fallback: just grab any 2 other posts
  return blogPosts.filter((p) => p.slug !== current.slug).slice(0, 2);
}

/* ── Page component ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      {/* ── Post Header ── */}
      <section
        style={{
          backgroundColor: "var(--stone)",
          padding: "80px 24px 60px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Badges */}
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginBottom: 16,
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

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              lineHeight: 1.2,
              marginBottom: 12,
              color: "var(--forest)",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--bark)",
              lineHeight: 1.55,
              marginBottom: 16,
            }}
          >
            {post.subtitle}
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--sage)",
              fontWeight: 500,
            }}
          >
            {post.date} &middot; {post.readTime}
          </p>
        </div>
      </section>

      {/* ── Study Info Box ── */}
      <section style={{ padding: "40px 24px 0" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--stone)",
              borderRadius: 8,
              padding: 20,
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--sage)",
                marginBottom: 8,
              }}
            >
              Based on:
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--charcoal)",
                marginBottom: 4,
              }}
            >
              {post.studyAuthors} ({post.studyYear})
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--bark)",
                marginBottom: 4,
                lineHeight: 1.5,
              }}
            >
              {post.studyTitle}
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--bark)",
                marginBottom: 8,
              }}
            >
              {post.studyJournal}
            </p>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: 12,
                background: "var(--stone-dark)",
                color: "var(--charcoal)",
              }}
            >
              {post.studyType}
            </span>
          </div>
        </div>
      </section>

      {/* ── Post Body ── */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <PostBody slug={post.slug} />
        </div>
      </section>

      {/* ── Post Footer: disclaimer + links ── */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Disclaimer */}
          <div
            style={{
              borderTop: "1px solid var(--stone-dark)",
              paddingTop: 24,
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--sage)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              This is an educational summary of peer-reviewed research. It is
              not medical advice. Always consult your healthcare provider before
              making changes to your health routine.
            </p>
          </div>

          {/* Study link + share */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <a
              href="#"
              style={{
                color: "var(--river)",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Read the original study &rarr;
            </a>
            <span
              style={{
                fontSize: "0.88rem",
                color: "var(--bark)",
                fontWeight: 500,
              }}
            >
              Share this article
            </span>
          </div>
        </div>
      </section>

      {/* ── More from the Research Blog ── */}
      <section
        style={{
          backgroundColor: "var(--warm-white)",
          padding: "64px 24px",
          borderTop: "1px solid var(--stone-dark)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--forest)",
              marginBottom: 24,
            }}
          >
            More from the Research Blog
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: 24,
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="blog-card-link"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
              >
                <article
                  className="blog-card"
                  style={{
                    background: "white",
                    border: "1px solid var(--stone-dark)",
                    borderRadius: 12,
                    padding: 24,
                    transition:
                      "transform 0.2s ease, box-shadow 0.2s ease",
                    height: "100%",
                  }}
                >
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
                        background: r.themeColor,
                        color: "white",
                      }}
                    >
                      {r.theme}
                    </span>
                    {r.top25Rank !== null && (
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
                        Top 25 &middot; #{r.top25Rank}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      color: "var(--forest)",
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {r.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--bark)",
                      lineHeight: 1.55,
                      marginBottom: 16,
                    }}
                  >
                    {r.excerpt}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--sage)",
                      fontWeight: 500,
                    }}
                  >
                    {r.date} &middot; {r.readTime}
                  </p>
                </article>
              </Link>
            ))}
          </div>
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
