import {GitHubRepo} from "@website/types";
import {ProjectCard} from "@website/components/Projects/ProjectCard";

export default function ProjectsMain({repos}: { repos: GitHubRepo[] }) {
    return (
        <div className="flex flex-wrap justify-between">
            {repos.length > 0 && repos.map((repo, i) => (
                <ProjectCard key={`${repo.url}-${i}`} {...repo} />
            ))}
        </div>
    )
}