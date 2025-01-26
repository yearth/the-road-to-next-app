import { Button } from "@/components/ui/button";
import { home, tickets } from "@/paths";
import { LucideKanban } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
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
            <Button variant="ghost" asChild>
              <Link href={home()}>
                <LucideKanban />
                <h1 className="text-lg font-semibold">TicketyBounty</h1>
              </Link>
            </Button>
          </div>
          <div>
            <Button variant="default" asChild>
              <Link href={tickets()}>Tickets</Link>
            </Button>
          </div>
        </nav>

        <main className="min-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
