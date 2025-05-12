import {
  AboutQuery,
  AllAwardsQuery,
  AllBasicsQuery,
  AllCertificatesQuery,
  AllEducationQuery,
  AllVolunteersQuery,
  AllWorkExperienceQuery,
  GRAPHQL_URL,
  GetGitHubDataQuery,
  GetGoodreadsBooksQuery,
  GetLiteralTokenQuery,
  GetReadingStatesQuery,
  GetSubstackFeedQuery,
} from "@website/constants";
import { getGraphQLQueryStr } from "@website/lib/index";

import {
  Award,
  Basics,
  Certificate,
  Education,
  LiteralReadingState,
  LiteralSecrets,
  Volunteer,
  Work,
} from "@website/types";
import { getToken } from "./auth0";

export async function getResumeBasics(): Promise<Basics> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllBasicsQuery),
  });
  const {
    data: { basics },
  } = await basicsRaw.json();
  return basics;
}

export async function getAboutQuery(): Promise<Basics> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AboutQuery),
  });
  const {
    data: { basics },
  } = await basicsRaw.json();
  return basics;
}

export async function getResumeWork(): Promise<Work[]> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllWorkExperienceQuery),
  });
  const {
    data: { work },
  } = await basicsRaw.json();
  return work;
}

export async function getResumeEducation(): Promise<Education[]> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllEducationQuery),
  });
  const {
    data: { education },
  } = await basicsRaw.json();
  return education;
}

export async function getVolunteering(): Promise<Volunteer[]> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllVolunteersQuery),
  });
  const {
    data: { volunteer },
  } = await basicsRaw.json();
  return volunteer;
}

export async function getAwards(): Promise<Award[]> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllAwardsQuery),
  });
  const {
    data: { awards },
  } = await basicsRaw.json();
  return awards;
}

export async function getCertifications(): Promise<Certificate[]> {
  const basicsRaw = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(AllCertificatesQuery),
  });
  const {
    data: { certificates },
  } = await basicsRaw.json();
  return certificates;
}

export async function fetchLiteralToken(): Promise<LiteralSecrets> {
  const GRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(GetLiteralTokenQuery),
  });
  const formattedGRes = await GRes.json();
  return formattedGRes.data.getLiteralToken;
}

export async function getLiteralReadingStates(): Promise<
  LiteralReadingState[]
> {
  const literalSecrets = await fetchLiteralToken();
  const GRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
      "x-literal-token": literalSecrets.token,
    },
    body: getGraphQLQueryStr(GetReadingStatesQuery),
  });
  const formattedGRes = await GRes.json();
  return formattedGRes?.data?.getReadingStates ?? [];
}

export async function getGitHubRepos(): Promise<any> {
  const GRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
    },
    body: getGraphQLQueryStr(GetGitHubDataQuery),
  });
  const formattedGRes = await GRes.json();
  return formattedGRes.data.gitHubRepos;
}

export async function getSubstackFeed() {
  const GRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.APP_SECRET}`,
      cache: "no-store",
    },
    body: getGraphQLQueryStr(GetSubstackFeedQuery),
  });
  const formattedGRes = await GRes.json();
  return formattedGRes.data.getSubstackRawData;
}

export async function getGoodreadsBooks() {
  const GRes = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: getGraphQLQueryStr(GetGoodreadsBooksQuery),
    cache: "no-store",
  })
  const formattedGRes = await GRes.json();
  const booksWithStatus: LiteralReadingState[] =
    formattedGRes.data.getGoodreadsBooks;
  return booksWithStatus;
}
