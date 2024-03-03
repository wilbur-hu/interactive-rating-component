import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interactive Rating Component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen text-[15px] leading-[24px]",
          overpass.className,
        )}
      >
        <div className="flex min-h-screen items-center justify-center bg-black">
          <div className="h-[416px] w-[412px] ">{children}</div>
        </div>
      </body>
    </html>
  );
}
