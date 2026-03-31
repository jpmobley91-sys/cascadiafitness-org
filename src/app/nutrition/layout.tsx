import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutrition Research — CascadiaFitness.org",
  description:
    "Evidence-based nutrition guidance for adults over 50. Protein needs, dietary patterns, and supplementation research from peer-reviewed studies.",
};

export default function NutritionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
