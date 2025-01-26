import { Placeholder } from "@/components/placeholder";
import { initialTickets } from "@/mockData";

type TicketProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Ticket({ params }: TicketProps) {
  const { id } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === Number(id));

  if (!ticket) {
    return <Placeholder label="Ticket not found" />;
  }

  return <div>Ticket</div>;
}
