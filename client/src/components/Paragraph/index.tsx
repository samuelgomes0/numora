import { cn } from "@/lib/utils";

interface ParagraphProps {
  text: string;
  className?: string;
}

function Paragraph({ text, className }: ParagraphProps) {
  return (
    <p className={cn("text-lg text-muted-foreground", className)}>{text}</p>
  );
}

export default Paragraph;
