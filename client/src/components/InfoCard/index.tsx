import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  content: number;
}

function InfoCard({ icon: Icon, iconColor, title, content }: InfoCardProps) {
  return (
    <Card className="flex items-center gap-4 p-4">
      {Icon && <Icon size={32} color={iconColor} />}
      <CardContent className="p-0">
        <p className="text-sm font-medium">{title}</p>
        <p className="font-anek text-xl font-bold">
          R$ {content.toLocaleString("pt-BR")}
        </p>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
