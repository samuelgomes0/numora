import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import InfoCard from "../InfoCard";

interface OverviewCardsProps {
  account: { income: number; expenses: number };
}

function OverviewCards({ account }: OverviewCardsProps) {
  const { income, expenses } = account;

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="bg-mediumBlueBackground flex items-center justify-center gap-4 rounded-md bg-none p-4">
        <div className="p-0">
          <p className="text-sm font-medium">Saldo</p>
          <p className="font-anek text-3xl font-bold">
            R$ {(income - expenses).toLocaleString("pt-BR")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <InfoCard
          icon={TrendingUpIcon}
          iconColor="green"
          title="Receitas"
          content={income}
        />
        <InfoCard
          icon={TrendingDownIcon}
          iconColor="red"
          title="Despesas"
          content={expenses}
        />
      </div>
    </div>
  );
}

export default OverviewCards;
