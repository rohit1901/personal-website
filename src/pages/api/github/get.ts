import {NextApiRequest, NextApiResponse} from "next";
import {GITHUB_PUBLIC_REPOS_URL} from "@website/constants";
import fetchMeta from "fetch-meta-tags";
import {GitHubRepo} from "@website/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const raw = await fetch(GITHUB_PUBLIC_REPOS_URL);
        const data = await raw.json();
        if (!data || data.length === 0 || data.message) {
            res.status(404).json({error: data.hasOwnProperty("message") ? data.message : "No data found"});
            return;
        }
        const {login, avatar_url, html_url} = data[0].owner
        const urls = data.map((repo: any) => repo.html_url);
        const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) => fetchMeta(url));
        const meta = await Promise.all(rawMeta);
        res.status(200).json(meta.map(m => ({
            ...m,
            title: m.title.split(":")[0],
            description: m.title.split(":")[1],
            login,
            avatar_url,
            html_url
        })) as GitHubRepo[]);
    } catch (e) {
        res.status(500).json(e);
    }
}