import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/providers/GolbalProviders";

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
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
