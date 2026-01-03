import CommonGroundPageClient from "./CommonGround"

export const metadata = {
  title: "Common Ground Concept — The Morning Bell Co.",
  description:
    "Discover Common Ground, a collaborative initiative by The Morning Bell Co. focused on fostering innovation, shared values, and community-driven projects.",

  openGraph: {
    title: "Common Ground Concept — The Morning Bell Co.",
    description:
      "Discover Common Ground, a collaborative initiative by The Morning Bell Co. focused on fostering innovation, and shared values.",
    url: "https://themorningbell.co/portfolio",
    type: "website",
    siteName: "The Morning Bell Co.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Common Ground Concept— The Morning Bell Co.",
    description:
        "Common Ground, a collaborative initiative by The Morning Bell Co."
  }
};

export default function CommonGroundPage() {
  return (
    <>
      <CommonGroundPageClient />
    </>
  );
}