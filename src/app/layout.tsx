import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cashmere",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <ClerkProvider>
        <body suppressHydrationWarning={true}>
          <main className="relative overflow-hidden">{children}</main>
        </body>
      </ClerkProvider>
    </html>
  );
}
