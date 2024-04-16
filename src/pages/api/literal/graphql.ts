import {NextApiRequest, NextApiResponse} from "next";
import {GetReadingStatesQuery, GRAPHQL_URL} from "@website/constants";
import {getGraphQLQueryStr} from "@website/lib";

`
NOTE: This API route requires an access token.
The access token should be used as a X-Literal-Token header which is the token returned from the /api/literal/token route.
The token validity is handled by the BE and the token is stored in the database.
`
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const GRes = await fetch(GRAPHQL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.APP_SECRET}`,
                "x-literal-token": req.headers["x-literal-token"] as string
            },
            body: getGraphQLQueryStr(GetReadingStatesQuery)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data);
    } catch (e) {
        res.status(500).json({error: e});
    }
}