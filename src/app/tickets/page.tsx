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

      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
          >
            <h3 className="text-lg truncate font-semibold">{ticket.title}</h3>
            <p
              className={clsx("text-sm truncate text-slate-500", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.description}
            </p>
            <Link
              href={ticketPath(String(ticket.id))}
              className="text-sm underline"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
