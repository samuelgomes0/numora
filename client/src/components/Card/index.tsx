import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  content: number;
}

function InfoCard({ icon: Icon, iconColor, title, content }: InfoCardProps) {
  return (
    <Card className="w-full bg-whiteBackground">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="flex items-center justify-center rounded-full bg-gray-200 p-3">
          <Icon size={20} color={iconColor} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-anek text-3xl font-bold">
          R$ {content.toLocaleString("pt-BR")}
        </p>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
