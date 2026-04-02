import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Evidence-Based Answers to Health & Wellness Questions | CascadiaFitness.org",
  description:
    "Answers to 50+ frequently asked questions about nutrition, exercise, sleep, weight management, cognitive health, behavior change, longevity, and coaching — backed by peer-reviewed research.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    // Exercise & Physical Activity
    {
      "@type": "Question",
      name: "How much exercise do I actually need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The steepest mortality reduction comes from moving at all — going from zero to 15 minutes per day. Maximum benefit is reached at roughly 150-300 minutes per week of moderate activity or 75-150 minutes of vigorous activity. Higher levels show no harm — more is not dangerous, it simply yields diminishing returns.",
      },
    },
    {
      "@type": "Question",
      name: "Is cardio or strength training more important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, but strength training is dramatically undervalued. Cardiorespiratory fitness is the strongest predictor of all-cause mortality, but grip strength independently predicts mortality, dementia, falls, and hospitalization. The ideal program includes both. Most people over 40 are more deficient in strength than aerobic capacity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I exercise too much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The research has found no safe upper limit of exercise benefit at volumes up to 4-8 times the recommended guidelines. Elite fitness carries the lowest mortality risk of any group studied. Overtraining syndrome exists but is rare outside competitive athletics.",
      },
    },
    {
      "@type": "Question",
      name: "I'm 50 and haven't exercised in years. Where do I start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With 15 minutes a day. The evidence shows that the largest mortality benefit comes from moving from inactive to minimally active. Walk. Then walk faster. Then add bodyweight exercises. Resistance training can begin at any age — research showed gene expression reversal even in adults who began strength training in their 60s and 70s.",
      },
    },
    {
      "@type": "Question",
      name: "What's the single best test of my fitness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VO2max testing gives the most comprehensive picture, but for a practical self-assessment try these three: stand on one leg for 10 seconds with eyes open, rise from the floor without using your hands or knees, and measure your walking speed over 4 meters. These simple tests predict longevity better than most lab work.",
      },
    },
    // Nutrition & Dietary Strategies
    {
      "@type": "Question",
      name: "How much protein do I really need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are over 40, the evidence supports 1.2-1.6 g/kg of body weight per day, and up to 2.0 g/kg/day if actively strength training. For a 170-pound person, that is roughly 90-120 grams per day, distributed across three meals of 30-40 grams each to hit the leucine threshold.",
      },
    },
    {
      "@type": "Question",
      name: "Is plant protein as good as animal protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plant proteins are lower in leucine and less bioavailable, meaning you need higher total intake for the same muscle protein synthesis response. This is manageable with planning — combining legumes with grains, using soy-based proteins, and slightly increasing total targets.",
      },
    },
    {
      "@type": "Question",
      name: "Should I take creatine if I'm over 50?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Especially if you are over 50. Creatine monohydrate is inexpensive, extensively studied, and safe. Combined with resistance training, it adds meaningful lean mass. It also shows emerging cognitive benefits for older adults. The dose is 3-5 grams per day — no loading phase needed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the leucine threshold and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leucine is the amino acid that triggers muscle protein synthesis. Each meal needs approximately 2.5-2.8 grams to flip this switch. If you spread protein too thin across many small meals, none may reach the threshold. Three substantial protein-rich meals outperform grazing.",
      },
    },
    {
      "@type": "Question",
      name: "Does creatine cause hair loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This myth originated from a single 2009 study that measured DHT levels but did not actually measure hair loss. The first RCT designed to directly test hair loss found no effect. The International Society of Sports Nutrition considers creatine safe for long-term use.",
      },
    },
    // Sleep & Recovery
    {
      "@type": "Question",
      name: "How much sleep do I actually need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "7-8 hours for most adults. Consistently sleeping under 7 hours increases cardiometabolic risk in a dose-dependent manner. If you think you function fine on 5-6 hours, you have likely adapted to impairment without recognizing it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I catch up on sleep on weekends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially, but it is not a sustainable strategy. Weekend recovery sleep can reduce some inflammatory markers from weeknight deprivation, but does not fully reverse metabolic or cognitive effects. Consistency matters more than compensation.",
      },
    },
    {
      "@type": "Question",
      name: "Why does poor sleep make me hungry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sleep deprivation increases ghrelin (hunger hormone) and decreases leptin (satiety hormone), creating a 250-350 calorie per day surplus. It also reduces prefrontal cortex activity, impairing your ability to resist high-calorie foods. The combination is powerful and largely unconscious.",
      },
    },
    {
      "@type": "Question",
      name: "Does sauna really help with heart health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The epidemiological evidence from Finland is strong — frequent sauna use is associated with significantly reduced cardiovascular mortality. However, most evidence comes from one large cohort of Finnish men. RCTs are limited. The mechanism is plausible and risk is low, but this is not yet at the evidence level of exercise or nutrition.",
      },
    },
    {
      "@type": "Question",
      name: "Is napping good or bad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on nighttime sleep. If you sleep 7+ hours at night, brief naps (20-30 minutes) can enhance cognitive performance. But napping combined with less than 6 hours of nighttime sleep is associated with doubled risk of type 2 diabetes.",
      },
    },
    // Weight Management & Metabolic Health
    {
      "@type": "Question",
      name: "Is BMI a useful measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For population screening, yes. For individual health, it is deeply limited. BMI cannot distinguish muscle from fat and misclassifies metabolically healthy individuals as overweight. Body composition measures like DEXA, waist-to-hip ratio, or fat-free mass index are far more informative.",
      },
    },
    {
      "@type": "Question",
      name: "What is metabolic health and how do I know if I have it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Defined by five markers in healthy ranges: fasting glucose below 100, triglycerides below 150, HDL above 40 (men) or 50 (women), blood pressure below 120/80, and waist circumference below 40 inches (men) or 35 inches (women). Ask your doctor for these numbers.",
      },
    },
    {
      "@type": "Question",
      name: "I'm on Ozempic or Wegovy — do I still need to exercise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More than ever. GLP-1 medications cause significant weight loss, but up to 25-40% can come from lean tissue. Resistance training at least twice per week plus protein of 1.2-1.6 g/kg/day are essential to preserve muscle mass for long-term function.",
      },
    },
    {
      "@type": "Question",
      name: "What is time-restricted eating and does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TRE compresses daily eating to an 8-10 hour window. Evidence shows improvements in insulin sensitivity and inflammatory markers. It works best as a metabolic timing strategy layered on good nutrition — not a license to eat poorly in a shorter window.",
      },
    },
    {
      "@type": "Question",
      name: "Why am I gaining weight in menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Declining estrogen redistributes fat toward visceral storage, reduces muscle mass, and alters metabolic rate. This is not willpower failure. The evidence-based response is resistance training, adequate protein, and attention to sleep quality.",
      },
    },
    // Cognitive Health & Brain Aging
    {
      "@type": "Question",
      name: "What is the best exercise for brain health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the domain. Resistance training has the strongest evidence for global cognition. Aerobic exercise benefits memory and hippocampal volume. Mind-body practices like tai chi show the best results for executive function. The ideal program includes all three.",
      },
    },
    {
      "@type": "Question",
      name: "Should I take omega-3 supplements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as a foundation. DHA supports neuronal membrane function. Critically, B vitamins only show cognitive benefits when omega-3 status is adequate — making omega-3 the prerequisite for other brain nutrients to work.",
      },
    },
    {
      "@type": "Question",
      name: "Does creatine help with memory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emerging evidence says yes, especially for adults over 60. Creatine improved short-term memory and reasoning in meta-analyses, with strongest effects in older adults and during cognitive stress. Powder form recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Can I prevent Alzheimer's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delay, not prevent. No single intervention eliminates risk. But the FINGER trial shows multidomain lifestyle approaches — exercise, nutrition, cognitive engagement, vascular care — can significantly reduce risk and delay onset.",
      },
    },
    {
      "@type": "Question",
      name: "How does social engagement affect brain health?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Positively. Social interaction provides cognitive stimulation, emotional regulation, and motivation for activity. Social isolation is an independent risk factor for cognitive decline. Quality matters more than quantity.",
      },
    },
    // Behavior Change & Motivation
    {
      "@type": "Question",
      name: "Why can't I stick with exercise or diet programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because you are fighting a systems problem with willpower. Sustained behavior change requires environmental design, social accountability, stress regulation, and periodic renewal. It is not about trying harder — it is about building better support structures.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find motivation when I don't feel like it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You don't. Motivation is not a prerequisite for action — it is often a consequence. Reduce friction (lay out clothes the night before, schedule like an appointment) and build accountability (a partner, coach, class). Motivation follows action more reliably than action follows motivation.",
      },
    },
    {
      "@type": "Question",
      name: "Is it better to exercise alone or with someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With someone, unambiguously. Every study comparing solo versus social exercise shows better adherence, outcomes, and sustained change when another person is involved.",
      },
    },
    {
      "@type": "Question",
      name: "What is motivational interviewing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A collaborative conversation technique that helps people explore and resolve ambivalence about change. Rather than telling you what to do, a practitioner asks open-ended questions, reflects back what you say, and helps you articulate your own reasons for change.",
      },
    },
    {
      "@type": "Question",
      name: "Why does every program work for a year and then stop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the effect of any intervention naturally declines over 12-24 months. This is consistent across all interventions studied. The solution is designing for renewal: new challenges, environments, and social supports before the current program fades.",
      },
    },
    // Longevity Science
    {
      "@type": "Question",
      name: "What is biological age vs chronological age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chronological age is years alive. Biological age reflects how old your body functions as, based on biomarkers like inflammation, metabolic function, and organ performance. Two people born the same year can have biological ages a decade apart.",
      },
    },
    {
      "@type": "Question",
      name: "Can I test my biological age?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Phenotypic Age uses a standard blood panel — albumin, creatinine, glucose, CRP, lymphocyte percentage, mean cell volume, red cell distribution width, alkaline phosphatase, and white blood cell count. No specialized test required.",
      },
    },
    {
      "@type": "Question",
      name: "What are the hallmarks of aging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Twelve fundamental biological processes including genomic instability, telomere attrition, mitochondrial dysfunction, cellular senescence, and chronic inflammation. These interact as a system — intervening on one often improves others.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Longevity Stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vitamin D plus omega-3 plus 30 minutes of exercise three times per week. First combination shown in an RCT to slow biological aging. Total cost: roughly $15/month in supplements plus 90 minutes of weekly exercise.",
      },
    },
    {
      "@type": "Question",
      name: "Do centenarians have special genetics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some do — certain variants related to lipid metabolism and inflammation are overrepresented. But lifestyle still adds measurable years even for the genetically fortunate, and is the dominant factor for everyone else.",
      },
    },
    // Healthy Aging Foundations
    {
      "@type": "Question",
      name: "What does 'healthy aging' actually mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preservation of functional capacity across five domains: physical, cognitive, emotional, social, and independence. It is not about avoiding all disease — it is about maintaining the ability to live the life you want.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should I start thinking about healthy aging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Now. Interventions in your 40s and 50s have the greatest impact on outcomes in your 70s and 80s. But it is genuinely never too late — even adults in their 70s show measurable improvement from lifestyle changes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the six pillars of lifestyle medicine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nutrition, exercise, sleep, stress management, social connection, and substance avoidance. These six interact as a system — optimizing one while ignoring others limits results.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I'm aging well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Functional markers matter more than chronological age. Can you rise from the floor without your hands? Stand on one leg for 10 seconds? Walk at a pace above 1.0 m/s? These simple tests predict longevity better than most lab work.",
      },
    },
    // Health & Wellness Coaching
    {
      "@type": "Question",
      name: "What is health and wellness coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evidence-based behavior change support by a trained, credentialed professional. Coaches use motivational interviewing, goal setting, and accountability to help you implement sustainable health behaviors. They do not diagnose, prescribe, or treat.",
      },
    },
    {
      "@type": "Question",
      name: "How long does coaching take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "12-15 sessions over 7-9 months. Most people see meaningful progress within 3 months, with remaining sessions building independence and preventing relapse. Benefits persist after coaching ends.",
      },
    },
    {
      "@type": "Question",
      name: "Is virtual coaching as effective as in-person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and possibly more effective for long-term outcomes. Virtual delivery reduces barriers, increases flexibility, and produces comparable or superior results.",
      },
    },
    {
      "@type": "Question",
      name: "Is coaching covered by insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Increasingly yes. Coaching has its own CPT codes and Medicare covers telehealth sessions. Private coverage varies by plan. Many employers offer coaching as a wellness benefit.",
      },
    },
    {
      "@type": "Question",
      name: "How is coaching different from therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scope and direction. Therapy treats clinical mental health conditions and processes past experiences. Coaching is forward-looking — it helps healthy individuals set and achieve behavior change goals. The two are complementary.",
      },
    },
    // Digital Health & Technology
    {
      "@type": "Question",
      name: "Which health apps actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apps combining self-monitoring with human feedback — coaching apps, CGM platforms with clinician support, exercise trackers with accountability partners. Standalone tracking apps without a human component show poor long-term adherence.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a continuous glucose monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have prediabetes or metabolic risk factors, a 2-4 week CGM trial can be highly informative — especially as a coached experience where someone helps interpret patterns.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are wearable fitness trackers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heart rate is generally reliable. Step counting is reasonably accurate. Calorie burn estimates can be off by 30-90%. Sleep tracking provides useful trends but doesn't match clinical accuracy. Use wearables for trends, not absolutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI replace a human coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI tools can automate data collection and extend a coach's reach between sessions. But sustained behavior change requires human accountability, empathy, and adaptive support that current AI cannot provide.",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
