import { cn } from "@/lib/utils";

interface PrimaryTitleProps {
  text: string;
  className?: string;
}

function PrimaryTitle({ text, className }: PrimaryTitleProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-br from-neutral-400 to-black bg-clip-text text-transparent dark:from-white dark:to-neutral-600 capitalize",
        className
      )}
    >
      {text}
    </h1>
  );
}

export default PrimaryTitle;
