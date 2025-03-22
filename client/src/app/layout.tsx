import FixedBottomBar from "@/components/FixedBottomBar";
import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
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
        className={`${inter.variable} ${anek.variable} bg-darkBlueBackground m-auto antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <FixedBottomBar />
            <main className="w-full p-4">
              {/* <SidebarTrigger /> */}
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
