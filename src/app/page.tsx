import { Heading } from "@/components/heading";
import { tickets } from "@/paths";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8 sm:gap-y-12">
      <Heading title="HomePage" description="Your home place to start" />

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
