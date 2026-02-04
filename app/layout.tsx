import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thailand Group Escape – Luxury Party Trip for 5–6 People",
  description: "All-inclusive Thailand group trip package with luxury accommodation, airport transfers, pool party, complimentary drinks, and entertainment. Secure your spot now!",
  keywords: "Thailand trip, group travel, luxury vacation, pool party, Bangkok nightlife, travel package",
  openGraph: {
    title: "Thailand Group Escape – Luxury Party Trip",
    description: "All-inclusive stay, food, alcohol, entertainment & airport transfers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
