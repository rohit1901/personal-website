import {NextApiRequest, NextApiResponse} from "next";
import {GITHUB_PUBLIC_REPOS_URL, IS_DEV} from "@website/constants";
import fetchMeta from "fetch-meta-tags";
import {GitHubRepo} from "@website/types";
import {transformGitHubData} from "@website/lib";
import {GITHUB_DATA, GITHUB_OWNER} from "@website/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (IS_DEV) {
            res.status(200).json(transformGitHubData(GITHUB_DATA, GITHUB_OWNER));
            return;
        }
        const raw = await fetch(GITHUB_PUBLIC_REPOS_URL);
        const data = await raw.json();
        if (!data || data.length === 0 || data.message) {
            res.status(404).json({error: data.hasOwnProperty("message") ? data.message : "No data found"});
            return;
        }
        const urls = data.map((repo: any) => repo.html_url);
        const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) => fetchMeta(url));
        const meta: GitHubRepo[] = await Promise.all(rawMeta);
        res.status(200).json(transformGitHubData(meta, data[0].owner));
    } catch (e) {
        res.status(500).json(e);
    }
}