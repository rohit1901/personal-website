"use client"
import {ProjectCard} from "@website/components/Projects/ProjectCard";
import {useEffect, useState} from "react";
import {GitHubRepo} from "@website/types";
import {ContentLoader} from "@website/components/ContentLoader";

export const ProjectsMain = ({repos}: { repos: GitHubRepo[] }) => {
    return (
        <div className="flex flex-wrap justify-between">
            {repos.length > 0 && repos.map((repo, i) => (
                <ProjectCard key={`${repo.url}-${i}`} {...repo} />
            ))}
        </div>
    )
}

export const ProjectsContent = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("/api/github/get")
            .then(res => res.json())
            .then(setRepos)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    if (loading) {
        return <ContentLoader/>;
    }
    return (
        <ProjectsMain repos={repos}/>
    )
}