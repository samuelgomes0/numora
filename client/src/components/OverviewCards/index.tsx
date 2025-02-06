import { TrendingDownIcon, TrendingUpIcon, Wallet2Icon } from "lucide-react";
import InfoCard from "../Card";

interface OverviewCardsProps {
  account: { income: number; outcome: number };
}

function OverviewCards({ account }: OverviewCardsProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
      <InfoCard
        icon={Wallet2Icon}
        iconColor="#3B82F6"
        title={"Saldo"}
        content={account.income - account.outcome}
      />
      <InfoCard
        icon={TrendingUpIcon}
        iconColor="#10B981"
        title={"Entradas"}
        content={account.income}
      />
      <InfoCard
        icon={TrendingDownIcon}
        iconColor="#EF4444"
        title={"Saídas"}
        content={account.outcome}
      />
    </div>
  );
}

export default OverviewCards;
