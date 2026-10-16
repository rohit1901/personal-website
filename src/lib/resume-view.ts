/**
 * The backend returns JSON-Resume style `highlights` as an array of objects
 * (`{ value }`) while the local types model them as strings. Normalise both,
 * plus plain strings, to a list of display strings.
 */
export function toHighlights(value: unknown): string[] {
  if (!value) return [];
  if (typeof value === "string") {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  if (Array.isArray(value)) {
    return value
      .map((entry) => {
        if (typeof entry === "string") return entry.trim();
        if (entry && typeof entry === "object" && "value" in entry) {
          const inner = (entry as { value?: unknown }).value;
          return typeof inner === "string" ? inner.trim() : "";
        }
        return "";
      })
      .filter(Boolean);
  }
  return [];
}

/**
 * Skills arrive as a comma-separated string in practice, though the type
 * declares `string[]`. Accept both.
 */
export function toKeywords(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.flatMap((entry) =>
      typeof entry === "string" ? entry.split(",") : [],
    );
  }
  if (typeof value === "string") {
    return value.split(",");
  }
  return [];
}

export function formatMonthYear(value?: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatDateRange(from?: string, to?: string): string {
  const start = formatMonthYear(from);
  const end = from && to ? formatMonthYear(to) : "Present";
  if (!start) return "";
  return `${start} – ${end}`;
}
