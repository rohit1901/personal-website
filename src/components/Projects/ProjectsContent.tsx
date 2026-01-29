import { GitHubRepo } from "@website/types";
import ProjectsMain from "@website/components/Projects/ProjectsMain";
import fetchMeta from "fetch-meta-tags";
const GITHUB_PUBLIC_REPOS_URL = "https://api.github.com/users/rohit1901/repos";
type GitHubOwner = {
  login: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
};
/**
 * Transforms the GitHub data. The data is transformed by adding the login, avatar_url, and html_url to each item
 * and splitting the title into title and description.
 * @example transformGitHubData(data, {login: "test", avatar_url: "test", html_url: "test"}) => [{title: "test", description: "test", login: "test", avatar_url: "test", html_url: "test"}]
 * @param data {GitHubRepo[]} - the GitHub data
 * @param login {string | undefined} - the login
 * @param avatar_url {string | undefined} - the avatar url
 * @param html_url {string | undefined} - the html url
 */
export const transformGitHubData = (
  data: GitHubRepo[],
  { login, avatar_url, html_url }: GitHubOwner,
): GitHubRepo[] =>
  data.map((m) => ({
    ...m,
    title: m.title?.split(":")[0],
    description: m.title?.split(":")[1],
    login,
    avatar_url,
    html_url,
  }));
const getGitHubRawData = async () => {
  const raw = await fetch(GITHUB_PUBLIC_REPOS_URL);
  return await raw.json();
};
const getGitHubRepos = async () => {
  const data = await getGitHubRawData();
  if (!data || 0 === data.length || data.message) {
    throw new Error(
      data.hasOwnProperty("message") ? data.message : "No data found",
    );
  }
  const urls = data.map((repo: any) => repo.html_url);
  const rawMeta: Promise<GitHubRepo>[] = urls.map(async (url: string) =>
    fetchMeta(url),
  );
  const meta: GitHubRepo[] = await Promise.all(rawMeta);
  return transformGitHubData(meta, data[0].owner);
};
export default async function ProjectsContent() {
  const repos: GitHubRepo[] = await getGitHubRepos();
  return <ProjectsMain repos={repos} />;
}
