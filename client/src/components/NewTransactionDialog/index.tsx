import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import NewTransactionForm from "../NewTransactionForm";

function NewTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#588157]">
          <PlusIcon /> Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 rounded-md md:w-fit">
        <DialogHeader>
          <DialogTitle className="text-2xl">Nova Transação</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar uma nova transação.
          </DialogDescription>
        </DialogHeader>
        <NewTransactionForm />
      </DialogContent>
    </Dialog>
  );
}

export default NewTransactionDialog;
