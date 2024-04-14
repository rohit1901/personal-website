import gql from "graphql-tag";
import LiteralClubGetToken from "@website/graphql/mutations/literal/getToken.graphql";
import LiteralClubReadingStates from "@website/graphql/mutations/literal/getReadingStates.graphql";

export const LiteralClubTokenMutation = gql`${LiteralClubGetToken}`
export const LiteralClubReadingStatesMutation = gql`${LiteralClubReadingStates}`