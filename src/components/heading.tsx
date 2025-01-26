import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  description: string;
};

export function Heading({ title, description }: HeadingProps) {
  return (
    <div>
      <div>
        <h2
          tabIndex={0}
          className="text-2xl sm:text-3xl font-bold tracking-tight"
        >
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <Separator />
    </div>
  );
}
