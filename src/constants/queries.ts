import GetGitHubData from "@website/graphql/queries/gitHubRepos.graphql";
import GetGoodreadsBooks from "@website/graphql/queries/goodreadsBooks.graphql";
import GetSubstackRawData from "@website/graphql/queries/substackFeed.graphql";
import GetResumes from "@website/graphql/queries/resumes.graphql";
import gql from "graphql-tag";

export const GetGitHubDataQuery = gql`
  ${GetGitHubData}
`;

export const GetSubstackFeedQuery = gql`
  ${GetSubstackRawData}
`;

export const GetGoodreadsBooksQuery = gql`
  ${GetGoodreadsBooks}
`;

export const GetResumesQuery = gql`
  ${GetResumes}
`;
