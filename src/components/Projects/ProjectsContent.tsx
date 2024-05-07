import {GitHubRepo} from "@website/types";
import {getGitHubRepos} from "@website/lib/fetchData";
import ProjectsMain from "@website/components/Projects/ProjectsMain";

export default async function ProjectsContent() {
    const repos: GitHubRepo[] = await getGitHubRepos()
    return <ProjectsMain repos={repos}/>
}