import Header from "@/components/header";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airikr.com"),
  title: {
    default: "aiRikr | Johan Grundström Eriksson",
    template: "%s | aiRikr",
  },
  description: "Johan Grundström Eriksson - Advisor| Interim | Consultant",
  // openGraph: {
  //   title: "aiRikr",
  //   description: "Johan Grundström Eriksson - Advisor | Interim | Consultant",
  //   url: "https://www.airikr.com",
  //   siteName: "aiRikr",
  //   locale: "en_US",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://www.airikr.com/opengraph-image.png",
  //       alt: "Johan Grundström Eriksson - Advisor| Interim | Consultant",
  //     },
  //   ],
  // },

  // twitter: {
  //   title: "aiRikr",
  //   card: "summary_large_image",
  //   images: [
  //     {
  //       url: "https://www.airikr.com/opengraph-image.png",
  //       alt: "Johan Grundström Eriksson - Advisor| Interim | Consultant",
  //     },
  //   ],
  // },
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
