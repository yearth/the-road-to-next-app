import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { home, tickets } from "@/paths";

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
      <body suppressHydrationWarning>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`
            fixed left-0 right-0 top-0 z-20
            w-full flex justify-between
            py-2 px-4 sm:py-2.5 sm:px-5
            border-b bg-background/95 backdrop-blur
            supports-backdrop-blur:bg-background/60
          `}
        >
          <div>
            <Link href={home()} className="text-lg font-bold">
              Home
            </Link>
          </div>
          <div>
            <Link href={tickets()} className="text-sm underline">
              Tickets
            </Link>
          </div>
        </nav>

        <main className="min-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
