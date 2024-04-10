`curl -X POST \
  -H "Content-Type: application/json" \
  --data '{"query": "query Basics { basics { email } }"}' \
  http://localhost:4000/graphql
`
import {NextApiRequest, NextApiResponse} from "next";
import {GRAPHQL_URL} from "@website/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const QUERY = req.body;
        const GRes = await fetch(GRAPHQL_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(QUERY)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes);
    } catch (e) {
        res.status(500).json({error: e});
    }
}