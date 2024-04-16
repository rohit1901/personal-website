import {NextApiRequest, NextApiResponse} from "next";
import {GRAPHQL_URL} from "@website/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const QUERY = req.body;
        const GRes = await fetch(GRAPHQL_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
            body: JSON.stringify(QUERY)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data);
    } catch (e) {
        res.status(500).json({error: e});
    }
}