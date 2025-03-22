"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function FixedBottomBar() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="bg-darkCardBlueBackground fixed bottom-0 flex w-full justify-center p-4">
      <Button
        className="h-12 w-12 rounded-full p-0"
        aria-label="Add new transaction"
        onClick={handleClick}
      >
        <PlusIcon className="!size-5 text-white" size={32} strokeWidth={3} />
      </Button>
    </div>
  );
}

export default FixedBottomBar;
