import type { NextApiRequest, NextApiResponse } from "next";
import { getM2MToken } from "@website/lib/auth0";

/**
 * API route to get Auth0 M2M token
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const token = await getM2MToken();
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
