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
    <Card className="bg-whiteBackground w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <Icon size={20} color={iconColor} />
        </div>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
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
