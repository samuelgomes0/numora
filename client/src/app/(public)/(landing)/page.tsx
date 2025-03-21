import OverviewCards from "@/components/OverviewCards";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

function Landing() {
  const userAccount = {
    name: "John Doe",
    income: 3200,
    expenses: 1500,
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          Olá, <span className="font-bold">{userAccount.name}</span>!
        </h1>
        <Button className="rounded-full p-3">
          <BellIcon color="white" strokeWidth={3} />
        </Button>
      </div>
      <OverviewCards account={userAccount} />
    </div>
  );
}

export default Landing;
