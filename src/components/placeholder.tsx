type PlaceholderProps = {
  label: string;
};

export function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col justify-center items-center">
      <h2 className="text-lg text-center">{label}</h2>
    </div>
  );
}
