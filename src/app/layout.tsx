import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Road to Next App",
  description: "A Next.js App for buy tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
