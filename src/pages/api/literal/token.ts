import {NextApiRequest, NextApiResponse} from "next";
import {GetLiteralTokenQuery, GRAPHQL_URL} from "@website/constants";
import {getGraphQLQueryStr} from "@website/lib";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const GRes = await fetch(GRAPHQL_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
            body: getGraphQLQueryStr(GetLiteralTokenQuery)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data);
    } catch (e) {
        res.status(500).json({error: e});
    }
}