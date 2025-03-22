"use client";

import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

function FixedTopBar() {
  return (
    <div
      className={`bg-primary-500 fixed left-0 right-0 top-0 flex w-full items-center justify-end p-4 text-white`}
    >
      <Button className="h-12 w-12 rounded-full p-0" aria-label="Notifications">
        <BellIcon className="!size-5 text-white" size={32} strokeWidth={3} />
      </Button>
    </div>
  );
}

export default FixedTopBar;
