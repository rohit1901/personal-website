import gql from "graphql-tag";
import AboutPageQuery from "@website/graphql/queries/about.graphql";
import AllBasics from "@website/graphql/queries/allBasics.graphql";
import AllWorkExperience from "@website/graphql/queries/allWorkExperience.graphql";
import AllProjects from "@website/graphql/queries/allProjects.graphql";
import AllSkills from "@website/graphql/queries/allSkills.graphql";
import AllEducation from "@website/graphql/queries/allEducation.graphql";
import AllAwards from "@website/graphql/queries/allAwards.graphql";
import AllPublications from "@website/graphql/queries/allPublications.graphql";
import AllLanguages from "@website/graphql/queries/allLanguages.graphql";
import AllInterests from "@website/graphql/queries/allInterests.graphql";
import AllReferences from "@website/graphql/queries/allReferences.graphql";
import AllVolunteer from "@website/graphql/queries/allVolunteer.graphql";
import AllCertificates from "@website/graphql/queries/allCertificates.graphql";
import GetGitHubData from "@website/graphql/queries/gitHubRepos.graphql";
import GetReadingStates from "@website/graphql/queries/getReadingStates.graphql";
import GetLiteralToken from "@website/graphql/queries/getToken.graphql";
import GetSubstackRawData from "@website/graphql/queries/substackFeed.graphql";

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
