import FixedTopBar from "@/components/FixedTopBar";
import OverviewCards from "@/components/OverviewCards";

function Landing() {
  const userAccount = {
    name: "John Doe",
    income: 3200,
    expenses: 1500,
  };

  return (
    <div className="grid gap-4">
      <FixedTopBar />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          Olá, <span className="font-bold">{userAccount.name}</span>!
        </h1>
      </div>
      <OverviewCards account={userAccount} />
    </div>
  );
}

export default Landing;
