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
import { DocumentNode } from "graphql";

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

// --- Helper function ---
async function fetchGraphQL<T = any>(
  query: DocumentNode,
  extraHeaders: Record<string, string> = {},
  options: RequestInit = {},
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const tokenResp = await fetch(`${baseUrl}/api/auth0/get`);
  const { token } = await tokenResp.json();
  if (!token) {
    throw new Error("Failed to fetch token");
  }
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...extraHeaders,
  };
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers,
    body: getGraphQLQueryStr(query),
    ...options,
  });
  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }
  return response.json();
}

// --- Data fetching functions ---

export async function getResumeBasics(): Promise<Basics> {
  const {
    data: { basics },
  } = await fetchGraphQL(AllBasicsQuery);
  return basics;
}

export async function getAboutQuery(): Promise<Basics> {
  const {
    data: { basics },
  } = await fetchGraphQL(AboutQuery);
  return basics;
}

export async function getResumeWork(): Promise<Work[]> {
  const {
    data: { work },
  } = await fetchGraphQL(AllWorkExperienceQuery);
  return work;
}

export async function getResumeEducation(): Promise<Education[]> {
  const {
    data: { education },
  } = await fetchGraphQL(AllEducationQuery);
  return education;
}

export async function getVolunteering(): Promise<Volunteer[]> {
  const {
    data: { volunteer },
  } = await fetchGraphQL(AllVolunteersQuery);
  return volunteer;
}

export async function getAwards(): Promise<Award[]> {
  const {
    data: { awards },
  } = await fetchGraphQL(AllAwardsQuery);
  return awards;
}

export async function getCertifications(): Promise<Certificate[]> {
  const {
    data: { certificates },
  } = await fetchGraphQL(AllCertificatesQuery);
  return certificates;
}

export async function fetchLiteralToken(): Promise<LiteralSecrets> {
  const {
    data: { getLiteralToken },
  } = await fetchGraphQL(GetLiteralTokenQuery);
  return getLiteralToken;
}

export async function getLiteralReadingStates(): Promise<
  LiteralReadingState[]
> {
  const literalSecrets = await fetchLiteralToken();
  const { data } = await fetchGraphQL(GetReadingStatesQuery, {
    "x-literal-token": literalSecrets.token,
  });
  return data?.getReadingStates ?? [];
}

export async function getGitHubRepos(): Promise<any> {
  const {
    data: { gitHubRepos },
  } = await fetchGraphQL(GetGitHubDataQuery);
  return gitHubRepos;
}

export async function getSubstackFeed() {
  const {
    data: { getSubstackRawData },
  } = await fetchGraphQL(GetSubstackFeedQuery);
  return getSubstackRawData;
}

export async function getGoodreadsBooks() {
  const {
    data: { getGoodreadsBooks },
  } = await fetchGraphQL(GetGoodreadsBooksQuery);
  return getGoodreadsBooks;
}
