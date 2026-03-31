export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  theme: "Nutrition" | "Exercise" | "Behavior Change";
  themeColor: string;
  date: string;
  readTime: string;
  studyAuthors: string;
  studyYear: number;
  studyTitle: string;
  studyJournal: string;
  studyType: string;
  top25Rank: number | null;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "protein-after-50",
    title: "How Much Protein Do You Really Need After 50?",
    subtitle:
      "The latest expert consensus says most older adults aren't eating enough. Here's what the evidence recommends — and why the standard guidelines fall short.",
    theme: "Nutrition",
    themeColor: "var(--sage)",
    date: "March 2026",
    readTime: "7 min read",
    studyAuthors: "Morgan et al.",
    studyYear: 2025,
    studyTitle:
      "Protein recommendations for healthy muscle ageing: consensus",
    studyJournal: "Expert Consensus",
    studyType: "Expert Consensus",
    top25Rank: 2,
    excerpt:
      "The standard protein recommendation of 0.8 g/kg/day was never designed for adults over 50. A 2025 expert consensus says you likely need 25–50% more.",
  },
  {
    slug: "creatine-over-50",
    title: "Creatine for Adults Over 50: What 33 Studies Found",
    subtitle:
      "It's not just for bodybuilders. A meta-analysis of 33 randomized controlled trials reveals consistent benefits for muscle function, strength, and lean tissue in older adults.",
    theme: "Nutrition",
    themeColor: "var(--sage)",
    date: "March 2026",
    readTime: "8 min read",
    studyAuthors: "Davies et al.",
    studyYear: 2024,
    studyTitle:
      "Creatine supplementation for optimization of physical function in the patient at risk of functional disability",
    studyJournal: "Journal of Parenteral and Enteral Nutrition",
    studyType: "SR/Meta-analysis, 33 RCTs",
    top25Rank: 24,
    excerpt:
      "Most creatine research targets young athletes. This meta-analysis of 33 trials focused on older adults and those with chronic disease — and the results were consistent.",
  },
  {
    slug: "global-exercise-prescription",
    title: "The Global Exercise Prescription for Healthy Aging",
    subtitle:
      "An international panel of 40+ researchers published the definitive exercise guidelines for older adults. Here's what they recommend — and why exercise should be treated like medicine.",
    theme: "Exercise",
    themeColor: "var(--river)",
    date: "March 2026",
    readTime: "8 min read",
    studyAuthors: "Izquierdo et al.",
    studyYear: 2025,
    studyTitle:
      "Global consensus on optimal exercise recommendations for enhancing healthy longevity in older adults (ICFSR)",
    studyJournal: "Journal of Nutrition, Health and Aging",
    studyType: "Expert Consensus",
    top25Rank: 1,
    excerpt:
      "The #1 ranked study in our entire collection. A global panel of 40+ researchers published the definitive exercise guidelines for adults over 65.",
  },
  {
    slug: "resistance-training-reverses-aging",
    title: "Can Resistance Training Reverse Aging? This Study Says Yes.",
    subtitle:
      "Researchers biopsied muscle tissue before and after 6 months of resistance training. What they found in the gene expression data changed our understanding of aging.",
    theme: "Exercise",
    themeColor: "var(--river)",
    date: "March 2026",
    readTime: "6 min read",
    studyAuthors: "Melov et al.",
    studyYear: 2007,
    studyTitle:
      "Resistance Exercise Reverses Aging in Human Skeletal Muscle",
    studyJournal: "PLoS ONE",
    studyType: "Experimental",
    top25Rank: null,
    excerpt:
      "After 6 months of resistance training, older adults' muscle gene expression shifted toward profiles seen in younger adults. The aging signature was literally reversed.",
  },
  {
    slug: "exercise-with-a-friend",
    title: "Why Exercising With a Friend Works Better Than Willpower",
    subtitle:
      "A rigorous clinical trial tested individual vs. social strategies for getting older adults to move more. The results surprised the researchers.",
    theme: "Behavior Change",
    themeColor: "var(--bark)",
    date: "March 2026",
    readTime: "6 min read",
    studyAuthors: "McMahon et al.",
    studyYear: 2024,
    studyTitle:
      "Effect of intrapersonal and interpersonal behavior change strategies on physical activity among older adults",
    studyJournal: "JAMA Network Open",
    studyType: "2x2 Factorial RCT, N=309",
    top25Rank: 4,
    excerpt:
      "Goal setting and self-monitoring had no significant independent effect. But partnered activities and social accountability added 27 minutes of daily activity — sustained for 12 months.",
  },
  {
    slug: "one-hour-in-nature",
    title: "What One Hour in Nature Does to Your Brain",
    subtitle:
      "Researchers used fMRI brain scans before and after a 60-minute walk. The group that walked in a forest showed measurable changes in their brain's stress center.",
    theme: "Behavior Change",
    themeColor: "var(--bark)",
    date: "March 2026",
    readTime: "5 min read",
    studyAuthors: "Sudimac et al.",
    studyYear: 2022,
    studyTitle:
      "How Nature Nurtures: Amygdala Activity Decreases as the Result of a One-Hour Walk in Nature",
    studyJournal: "Molecular Psychiatry",
    studyType: "fMRI Intervention Study, N=63",
    top25Rank: null,
    excerpt:
      "The nature walk group showed significantly decreased activity in the amygdala — the brain's stress response center. The urban walk group showed no change.",
  },
];
