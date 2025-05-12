import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/utils";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  icon: LucideIcon;
  title: string;
  content: number;
}

function SummaryCard({ icon: Icon, title, content }: SummaryCardProps) {
  return (
    <Card className="flex-1">
      <CardHeader className="flex flex-row items-center gap-">
        <Icon className="h-6 w-6" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">R$ {formatNumber(content)}</p>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
