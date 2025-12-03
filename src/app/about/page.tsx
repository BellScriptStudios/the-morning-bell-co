import { Metadata } from "next";
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About — The Morning Bell Co.",
  description:
    "The Morning Bell Co. builds ventures across digital technology, applied design, and operational strategy. Learn about our mission, values, and the vision shaping our work.",
  openGraph: {
    title: "About The Morning Bell Co.",
    description:
      "Learn how The Morning Bell Co. blends technology, design, and strategy to build ventures with clarity and long-term vision.",
    url: "https://themorningbell.co/about",
    type: "website",
    siteName: "The Morning Bell Co.",
  },
  twitter: {
    title: "About The Morning Bell Co.",
    description:
      "The Morning Bell Co. builds ventures at the intersection of technology, design, and operational clarity.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutClient />
    </>
  );
}