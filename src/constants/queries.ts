import AboutPageQuery from "@website/graphql/queries/about.graphql";
import AllAwards from "@website/graphql/queries/allAwards.graphql";
import AllBasics from "@website/graphql/queries/allBasics.graphql";
import AllCertificates from "@website/graphql/queries/allCertificates.graphql";
import AllEducation from "@website/graphql/queries/allEducation.graphql";
import AllInterests from "@website/graphql/queries/allInterests.graphql";
import AllLanguages from "@website/graphql/queries/allLanguages.graphql";
import AllProjects from "@website/graphql/queries/allProjects.graphql";
import AllPublications from "@website/graphql/queries/allPublications.graphql";
import AllReferences from "@website/graphql/queries/allReferences.graphql";
import AllSkills from "@website/graphql/queries/allSkills.graphql";
import AllVolunteer from "@website/graphql/queries/allVolunteer.graphql";
import AllWorkExperience from "@website/graphql/queries/allWorkExperience.graphql";
import GetReadingStates from "@website/graphql/queries/getReadingStates.graphql";
import GetLiteralToken from "@website/graphql/queries/getToken.graphql";
import GetGitHubData from "@website/graphql/queries/gitHubRepos.graphql";
import GetGoodreadsBooks from "@website/graphql/queries/goodreadsBooks.graphql";
import GetSubstackRawData from "@website/graphql/queries/substackFeed.graphql";
import GetResumes from "@website/graphql/queries/resumes.graphql";
import gql from "graphql-tag";

export const AboutQuery = gql`
  ${AboutPageQuery}
`;
export const AllBasicsQuery = gql`
  ${AllBasics}
`;
export const AllWorkExperienceQuery = gql`
  ${AllWorkExperience}
`;
export const AllProjectsQuery = gql`
  ${AllProjects}
`;
export const AllSkillsQuery = gql`
  ${AllSkills}
`;
export const AllEducationQuery = gql`
  ${AllEducation}
`;
export const AllAwardsQuery = gql`
  ${AllAwards}
`;
export const AllPublicationsQuery = gql`
  ${AllPublications}
`;
export const AllLanguagesQuery = gql`
  ${AllLanguages}
`;
export const AllInterestsQuery = gql`
  ${AllInterests}
`;
export const AllReferencesQuery = gql`
  ${AllReferences}
`;
export const AllVolunteersQuery = gql`
  ${AllVolunteer}
`;
export const AllCertificatesQuery = gql`
  ${AllCertificates}
`;

export const GetGitHubDataQuery = gql`
  ${GetGitHubData}
`;

export const GetReadingStatesQuery = gql`
  ${GetReadingStates}
`;
export const GetLiteralTokenQuery = gql`
  ${GetLiteralToken}
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
