import {NextApiRequest, NextApiResponse} from "next";
import {GRAPHQL_URL, LITERAL_GRAPHQL_URL} from "@website/constants";
import {getGraphQLQueryStr} from "@website/lib";
import {LiteralClubLoginMutation} from "@website/constants/mutations";

const variables = {
    email: process.env.LITERAL_CLUB_EMAIL,
    password: process.env.LITERAL_CLUB_AUTHORIZATION_TOKEN
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const GRes = await fetch(process.env.NODE_ENV === "development" ? GRAPHQL_URL : LITERAL_GRAPHQL_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(LiteralClubLoginMutation, variables)
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data);
    } catch (e) {
        res.status(500).json({error: e});
    }
}