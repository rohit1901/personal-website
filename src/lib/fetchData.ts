import {getGraphQLQueryStr} from "@website/lib/index";
import {
    AboutQuery,
    AllAwardsQuery,
    AllBasicsQuery,
    AllCertificatesQuery,
    AllEducationQuery,
    AllVolunteersQuery,
    AllWorkExperienceQuery,
    GetGitHubDataQuery,
    GetLiteralTokenQuery,
    GetReadingStatesQuery,
    GRAPHQL_URL
} from "@website/constants";

import {Award, Basics, Education, LiteralReadingState, LiteralSecrets, Volunteer, Work} from "@website/types";

export async function getResumeBasics(): Promise<Basics> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllBasicsQuery)
    })
    const {data: {basics}} = await basicsRaw.json()
    return basics
}

export async function getAboutQuery(): Promise<Basics> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AboutQuery)
    })
    const {data: {basics}} = await basicsRaw.json()
    return basics
}

export async function getResumeWork(): Promise<Work[]> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllWorkExperienceQuery)
    })
    const {data: {work}} = await basicsRaw.json()
    return work
}

export async function getResumeEducation(): Promise<Education[]> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllEducationQuery)
    })
    const {data: {education}} = await basicsRaw.json()
    return education
}

export async function getVolunteering(): Promise<Volunteer[]> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllVolunteersQuery)
    })
    const {data: {volunteer}} = await basicsRaw.json()
    return volunteer
}

export async function getAwards(): Promise<Award[]> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllAwardsQuery)
    })
    const {data: {awards}} = await basicsRaw.json()
    return awards
}

export async function getCertifications(): Promise<Volunteer[]> {
    const basicsRaw = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(AllCertificatesQuery)
    })
    const {data: {certificates}} = await basicsRaw.json()
    return certificates
}

export async function getLiteralToken(): Promise<LiteralSecrets> {
    const GRes = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(GetLiteralTokenQuery)
    })
    const formattedGRes = await GRes.json();
    return formattedGRes.data
}

export async function getLiteralReadingStates(): Promise<LiteralReadingState[]> {
    const literalSecrets = await getLiteralToken()
    const GRes = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.APP_SECRET}`,
            "x-literal-token": literalSecrets.token
        },
        body: getGraphQLQueryStr(GetReadingStatesQuery)
    })
    const formattedGRes = await GRes.json();
    return formattedGRes?.data?.getReadingStates ?? []
}

export async function getGitHubRepos(): Promise<any> {
    const GRes = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Authorization": `Bearer ${process.env.APP_SECRET}`},
        body: getGraphQLQueryStr(GetGitHubDataQuery)
    })
    const formattedGRes = await GRes.json();
    return formattedGRes.data.gitHubRepos;
}