import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalContext from "./GlobalContext";
import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RUHSC",
  description: "Rajshahi University Higher Study Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContext>
          <Drawer>
            <Navbar />
            {children}
            <Footer />
          </Drawer>
        </GlobalContext>
      </body>
    </html>
  );
}
