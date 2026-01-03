import ConceptsClient from "./ConceptsClient"

export const metadata = {
  title: "Concepts — The Morning Bell Co.",
  description:
    "Explore developing concepts and practice areas within The Morning Bell Co. Our portfolio highlights digital systems, brand technology, and innovation-focused initiatives.",

  openGraph: {
    title: "Concepts — The Morning Bell Co.",
    description:
      "Explore the concepts and practice areas that define The Morning Bell Co.'s work in digital innovation, design, and operational strategy.",
    url: "https://themorningbell.co/portfolio",
    type: "website",
    siteName: "The Morning Bell Co.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Concepts — The Morning Bell Co.",
    description:
      "Discover the concepts and practice areas developed under The Morning Bell Co.",
  }
};

export default function PortfolioPage() {
  return (
    <>
      <ConceptsClient />
    </>
  );
}