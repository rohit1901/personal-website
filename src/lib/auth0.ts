import { ClientCredentials } from "simple-oauth2";

// lib/client-credentials.ts
export const getToken = async () => {
    const response = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        audience: process.env.AUTH0_AUDIENCE,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }
    return response.json();
  };
  