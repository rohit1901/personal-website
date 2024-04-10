import gql from "graphql-tag";
import AboutPageQuery from "@website/graphql/queries/about.graphql";
import AllBasics from "@website/graphql/queries/index.graphql";
import AllWorkExperience from "@website/graphql/queries/index.graphql";
import AllProjects from "@website/graphql/queries/index.graphql";
import AllSkills from "@website/graphql/queries/index.graphql";
import AllEducation from "@website/graphql/queries/index.graphql";
import AllAwards from "@website/graphql/queries/index.graphql";
import AllPublications from "@website/graphql/queries/index.graphql";
import AllLanguages from "@website/graphql/queries/index.graphql";
import AllInterests from "@website/graphql/queries/index.graphql";
import AllReferences from "@website/graphql/queries/index.graphql";
import AllVolunteer from "@website/graphql/queries/index.graphql";
import AllCertificates from "@website/graphql/queries/index.graphql";


export const AboutQuery = gql`${AboutPageQuery}`
export const AllBasicsQuery = gql`${AllBasics}`
export const AllWorkExperienceQuery = gql`${AllWorkExperience}`
export const AllProjectsQuery = gql`${AllProjects}`
export const AllSkillsQuery = gql`${AllSkills}`
export const AllEducationQuery = gql`${AllEducation}`
export const AllAwardsQuery = gql`${AllAwards}`
export const AllPublicationsQuery = gql`${AllPublications}`
export const AllLanguagesQuery = gql`${AllLanguages}`
export const AllInterestsQuery = gql`${AllInterests}`
export const AllReferencesQuery = gql`${AllReferences}`
export const AllVolunteersQuery = gql`${AllVolunteer}`
export const AllCertificatesQuery = gql`${AllCertificates}`