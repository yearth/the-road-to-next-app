import { tickets } from "@/paths";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-4 sm:gap-y-6">
      <div>
        <h2
          tabIndex={0}
          className="text-2xl sm:text-3xl font-bold tracking-tight"
        >
          HomePage
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Link
          href={tickets()}
          className="underline transition-colors hover:text-primary"
        >
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}
