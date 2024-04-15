import {NextApiRequest, NextApiResponse} from "next";
import {GetGitHubDataQuery, GRAPHQL_URL} from "@website/constants";
import {getGraphQLQueryStr} from "@website/lib";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const token = req.body.token;
        const GRes = await fetch(GRAPHQL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: getGraphQLQueryStr(GetGitHubDataQuery, {
                token
            })
        })
        const formattedGRes = await GRes.json();
        res.status(200).json(formattedGRes.data.gitHubRepos);
    } catch (e) {
        res.status(500).json({error: e});
    }
}