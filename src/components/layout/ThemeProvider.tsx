"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Wraps the app with next-themes. Themes are applied as a `.dark` class, which
 * the design tokens key off. `defaultTheme="system"` respects the OS setting
 * and the choice is persisted.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
