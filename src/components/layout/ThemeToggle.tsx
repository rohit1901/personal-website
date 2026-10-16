"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const emptySubscribe = () => () => {};

/**
 * Theme toggle backed by next-themes. `useSyncExternalStore` yields `false`
 * during SSR and `true` after hydration, so the icon never mismatches without
 * an effect.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {mounted && isDark ? (
        <IoMoon className="h-5 w-5 text-accent" aria-hidden />
      ) : (
        <IoSunny className="h-5 w-5 text-amber-500" aria-hidden />
      )}
    </button>
  );
}
