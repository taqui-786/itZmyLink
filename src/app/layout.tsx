import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "itZmyLink",
  description: "one page, many links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen w-screen overflow-hidden ">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
  );
}
