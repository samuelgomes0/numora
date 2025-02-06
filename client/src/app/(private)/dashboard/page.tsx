import NewTransactionDialog from "@/components/NewTransactionDialog";
import OverviewCards from "@/components/OverviewCards";

function Dashboard() {
  const account = {
    income: 3200.0,
    outcome: 2600.0,
  };

  return (
    <div className="m-8 space-y-4">
      <div className="bg-whiteBackground flex items-center justify-between rounded-md p-4 shadow-sm">
        <h1 className="text-3xl font-semibold">Visão Geral</h1>
        <NewTransactionDialog />
      </div>
      <OverviewCards account={account} />
    </div>
  );
}

export default Dashboard;
