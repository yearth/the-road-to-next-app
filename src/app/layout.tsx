import { Header } from "@/components/header";
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
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
