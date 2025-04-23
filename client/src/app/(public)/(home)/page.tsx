import Paragraph from "@/components/Paragraph";
import PrimaryTitle from "@/components/PrimaryTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="w-full mx-auto h-screen max-w-xl text-center flex flex-col items-center justify-center gap-6">
      <PrimaryTitle text="Eleve sua experiência financeira" />
      <Paragraph
        text="Assuma o controle das suas finanças com uma plataforma inteligente para gerenciar
        receitas, despesas e investimentos com clareza, segurança e
        sofisticação."
      />
      <div className="relative w-full mt-4">
        <Input
          className="px-4 h-14 backdrop-blur-sm"
          placeholder="Insira seu melhor email"
        />
        <Button className="absolute top-1.5 h-11 right-2">
          Entrar na lista de espera
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Home;
