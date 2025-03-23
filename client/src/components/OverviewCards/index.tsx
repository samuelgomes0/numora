import { TrendingDownIcon, TrendingUpIcon, Wallet2Icon } from "lucide-react";
import InfoCard from "../InfoCard";

interface OverviewCardsProps {
  account: { income: number; expenses: number };
}

function OverviewCards({ account }: OverviewCardsProps) {
  const { income, expenses } = account;

  return (
    <div className="grid grid-cols-3 gap-2">
      <InfoCard
        icon={Wallet2Icon}
        iconColor="#6366F1"
        title="Saldo atual"
        content={income}
      />
      <InfoCard
        icon={TrendingUpIcon}
        iconColor="#22C55E"
        title="Receitas"
        content={income}
      />
      <InfoCard
        icon={TrendingDownIcon}
        iconColor="#EF4444"
        title="Despesas"
        content={expenses}
      />
    </div>
  );
}

export default OverviewCards;
