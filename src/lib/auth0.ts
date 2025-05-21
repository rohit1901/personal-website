import { ModuleOptions, ClientCredentials, AccessToken } from "simple-oauth2";

let cachedToken: string | null = null;
let tokenExpiry = 0; // Unix timestamp in ms

const config: ModuleOptions = {
  client: {
    id: process.env.AUTH0_CLIENT_ID as string,
    secret: process.env.AUTH0_CLIENT_SECRET as string,
  },
  auth: {
    tokenHost: `https://${process.env.AUTH0_DOMAIN}`,
    tokenPath: "/oauth/token",
  },
  options: {
    authorizationMethod: "body",
  },
};

const client = new ClientCredentials(config);

export async function getM2MToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && now < tokenExpiry - 60 * 1000) {
    return cachedToken;
  }

  const tokenParams = {
    audience: process.env.AUTH0_AUDIENCE,
    scope: process.env.AUTH0_SCOPE || "",
  };

  try {
    const accessToken: AccessToken = await client.getToken(tokenParams);

    // Type assertion for access_token and expires_in
    const token = accessToken.token.access_token as string;
    const expiresIn = accessToken.token.expires_in as number;

    tokenExpiry = now + expiresIn * 1000;
    cachedToken = token;

    return cachedToken;
  } catch (error: Error | any) {
    // Optionally log error details here
    throw new Error(
      `Failed to fetch Auth0 M2M token: ${error.message || error}`,
    );
  }
}
