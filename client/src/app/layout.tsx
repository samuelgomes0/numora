import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Anek_Bangla, Inter, Vollkorn } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
});

const anek = Anek_Bangla({
  variable: "--font-anek",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wise Wallet",
  description: "A simple wallet app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${vollkorn.variable} ${anek.variable} m-auto w-4/5 bg-[#a3b18a] antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
