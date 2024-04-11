import {NextApiRequest, NextApiResponse} from "next";
import {GRAPHQL_URL, LITERAL_GRAPHQL_URL, LiteralReadingListQuery} from "@website/constants";
import {getGraphQLQueryStr} from "@website/lib";

`
NOTE: This API route requires an access token.
The access token should be used as an Authorization header for queries or mutations that require it. An access token is valid for 6 months.
Example Authorization header:
Authorization: Bearer c29tZSBqd3QgY29udGVudA==
`
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const token = req.body.token;
        const GRes = await fetch(process.env.NODE_ENV === "development" ? GRAPHQL_URL : LITERAL_GRAPHQL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: getGraphQLQueryStr(LiteralReadingListQuery)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data.myReadingStates);
    } catch (e) {
        res.status(500).json({error: e});
    }
}