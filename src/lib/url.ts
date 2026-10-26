export type SafeExternalUrlOptions = {
  /**
   * When provided, only these hostnames (and their subdomains) are accepted.
   * Hostnames are matched case-insensitively.
   */
  allowedHosts?: readonly string[];
};

function matchesHost(hostname: string, allowedHost: string): boolean {
  const host = allowedHost.toLowerCase();
  return hostname === host || hostname.endsWith(`.${host}`);
}

/**
 * Returns a normalized URL only when it is a safe external destination.
 *
 * Only HTTPS is accepted. Credentials, non-default ports, and hosts outside an
 * optional allowlist are rejected so untrusted feed/backend values cannot be
 * rendered as links to unexpected destinations.
 */
export function toSafeExternalUrl(
  value: unknown,
  options: SafeExternalUrlOptions = {},
): string | undefined {
  if (typeof value !== "string") return undefined;

  const candidate = value.trim();
  if (!candidate) return undefined;

  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    return undefined;
  }

  if (url.protocol !== "https:") return undefined;
  if (url.username || url.password) return undefined;
  if (url.port) return undefined;

  if (
    options.allowedHosts &&
    !options.allowedHosts.some((host) => matchesHost(url.hostname, host))
  ) {
    return undefined;
  }

  return url.toString();
}

export function isSafeExternalUrl(
  value: unknown,
  options: SafeExternalUrlOptions = {},
): boolean {
  return toSafeExternalUrl(value, options) !== undefined;
}
