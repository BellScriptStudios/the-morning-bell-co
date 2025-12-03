import ContactClient from "./ContactClient"

export const metadata = {
  title: "Contact — The Morning Bell Co.",
  description:
    "Get in touch with The Morning Bell Co. to discuss new ventures, partnerships, or digital initiatives. We're ready to help you build with clarity and purpose.",

  openGraph: {
    title: "Contact The Morning Bell Co.",
    description:
      "Reach out to The Morning Bell Co. to explore partnerships, digital projects, and venture collaboration.",
    url: "https://themorningbell.co/contact",
    type: "website",
    siteName: "The Morning Bell Co.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact — The Morning Bell Co.",
    description:
      "Start a conversation with The Morning Bell Co. about your next venture or digital initiative.",
  }
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />
    </>
  );
}