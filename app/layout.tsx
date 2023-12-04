import Header from "@/components/header";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airikr.com"),
  title: {
    default: "aiRikr | Johan Eriksson",
    template: "%s | aiRikr",
  },
  description: "Advisor| Interim | Consultant",
  openGraph: {
    title: "aiRikr",
    description: "Advisor | Interim | Consultant",
    url: "https://airikr.com",
    siteName: "aiRikr",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    title: "aiRikr",
    card: "summary_large_image",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="mb-40 min-h-screen bg-neutral-50 text-neutral-950 antialiased">
        <Header />
        <main className="container mx-auto max-w-5xl">{children}</main>
      </body>
    </html>
  );
}
