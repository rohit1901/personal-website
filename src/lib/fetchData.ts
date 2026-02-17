import { GRAPHQL_URL, GetResumesQuery } from "@website/constants";
import { getGraphQLQueryStr } from "@website/lib/index";
import { DocumentNode } from "graphql";

import { ResumeSchema } from "@website/types";

async function fetchGraphQL<T = any>(
  query: DocumentNode,
  extraHeaders: Record<string, string> = {},
  options: RequestInit = {},
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
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

export async function getResumes(): Promise<ResumeSchema[]> {
  const {
    data: { resumes },
  } = await fetchGraphQL(GetResumesQuery);
  return resumes;
}

export const getEnglishResume = async () => {
  const resumes = await getResumes();
  return resumes.find((resume) => resume.language?.label === "English");
};
