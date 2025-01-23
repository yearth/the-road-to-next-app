import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialTickets } from "@/mockData";
import { ticket as ticketPath } from "@/paths";
import clsx from "clsx";
import Link from "next/link";

export default function Tickets() {
  return (
    <div className="flex-1 flex flex-col gap-y-8 sm:gap-y-12">
      <div>
        <h2
          tabIndex={0}
          className="text-2xl sm:text-3xl font-bold tracking-tight"
        >
          TicketsPage
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>icon</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <span
                className={clsx("line-clamp-3 whitespace-break-spaces", {
                  "line-through": ticket.status === "DONE",
                })}
              >
                {ticket.description}
              </span>
            </CardContent>

            <CardFooter>
              <Link
                href={ticketPath(String(ticket.id))}
                className="text-sm underline"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
