import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement;
};

export function Placeholder({
  label,
  icon = <LucideMessageSquareWarning />,
}: PlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col justify-center items-center gap-y-2">
      {cloneElement(icon as React.ReactElement<any>, {
        className: "h-16 w-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
    </div>
  );
}
