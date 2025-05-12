import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  BanknoteIcon,
} from "lucide-react";
import SummaryCard from "./components/SummaryCard";

function DashboardPage() {
  const finances = {
    entries: 1500.0,
    exits: 500.0,
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Dashboard</h1>
      <div className="flex gap-4 w-full">
        <SummaryCard
          icon={BanknoteArrowUpIcon}
          title="Entradas"
          content={finances.entries}
        />
        <SummaryCard
          icon={BanknoteArrowDownIcon}
          title="Saídas"
          content={finances.exits}
        />
        <SummaryCard
          icon={BanknoteIcon}
          title="Balanço"
          content={finances.entries - finances.exits}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
