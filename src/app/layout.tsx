import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahayogi — काठमाडौंको आपतकालीन साथी",
  description:
    "Nepal's first community emergency response app. Health emergencies, police alerts, blood donors, hospital finder — all in one place. Free forever.",
  openGraph: {
    title: "Sahayogi — काठमाडौंको आपतकालीन साथी",
    description:
      "Nepal's first community emergency response app. Health emergencies, police alerts, blood donors, hospital finder — all in one place. Free forever.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ne" className={`${inter.className} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
