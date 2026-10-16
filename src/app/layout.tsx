import type { Metadata } from "next";
import "./globals.css";
import { ReactNode, Suspense } from "react";
import { Outfit } from "next/font/google";
import { ContentLoader } from "@website/components/ContentLoader";
import { ThemeProvider } from "@website/components/layout/ThemeProvider";
import { Shell } from "@website/components/layout/Shell";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Rohit Khanduri's personal website",
  description:
    "My presence on the internet where I showcase my work and thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden font-sans" id="body">
        <ThemeProvider>
          <Shell>
            <Suspense fallback={<ContentLoader />}>{children}</Suspense>
          </Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
