import type { ReactNode } from "react";
import { Header } from "@website/components/layout/Header";
import { Footer } from "@website/components/layout/Footer";

/**
 * Shared site shell: header, main content region, and footer. Pages provide
 * only their own main content.
 */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
