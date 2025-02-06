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
        iconColor="#1d3557"
        title={"Saldo"}
        content={account.income - account.outcome}
      />
      <InfoCard
        icon={TrendingUpIcon}
        iconColor="#90a955"
        title={"Entradas"}
        content={account.income}
      />
      <InfoCard
        icon={TrendingDownIcon}
        iconColor="#c1121f"
        title={"Saídas"}
        content={account.outcome}
      />
    </div>
  );
}

export default OverviewCards;
