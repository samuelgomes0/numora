import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import type { Metadata } from "next";
import { Anek_Bangla, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anek = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wise Wallet",
  description:
    "Wise Wallet é um sistema moderno e intuitivo para gestão de finanças pessoais, projetado para auxiliar usuários no controle de suas receitas, despesas e investimentos. O objetivo do projeto é fornecer uma visão clara e prática da saúde financeira do usuário, facilitando o planejamento financeiro e o alcance de metas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${anek.variable} m-auto bg-darkBlueBackground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full p-4">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
