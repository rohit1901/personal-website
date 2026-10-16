import GetResumes from "@website/graphql/queries/resumes.graphql";
import GetResumeCertifications from "@website/graphql/queries/resumeCertifications.graphql";
import gql from "graphql-tag";

export const GetResumesQuery = gql`
  ${GetResumes}
`;

export const GetResumeCertificationsQuery = gql`
  ${GetResumeCertifications}
`;
