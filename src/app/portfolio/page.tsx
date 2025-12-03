import PortfolioClient from "./PortfolioClient"

export const metadata = {
  title: "Ventures — The Morning Bell Co.",
  description:
    "Explore active ventures, developing concepts, and practice areas within The Morning Bell Co. Our portfolio highlights digital systems, brand technology, and innovation-focused initiatives.",

  openGraph: {
    title: "Ventures — The Morning Bell Co.",
    description:
      "Explore the ventures and initiatives that define The Morning Bell Co.'s work in digital innovation, design, and operational strategy.",
    url: "https://themorningbell.co/portfolio",
    type: "website",
    siteName: "The Morning Bell Co.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ventures — The Morning Bell Co.",
    description:
      "Discover the ventures and practice areas developed under The Morning Bell Co.",
  }
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioClient />
    </>
  );
}