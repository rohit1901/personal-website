declare namespace NodeJS {
  export interface ProcessEnv {
    /** Base URL of the GraphQL backend, e.g. `https://api.example.com`. */
    NEXT_PUBLIC_GRAPHQL_SERVER_HOST?: string;
    /**
     * CloudFront distribution origin used to prefix relative résumé image
     * paths served by the GraphQL API, e.g. `https://dxxxx.cloudfront.net`.
     */
    NEXT_PUBLIC_AWS_CLOUDFRONT_URL?: string;
    /** Full Goodreads list RSS URL including its access key (server-only). */
    GOODREADS_FEED_URL?: string;
  }
}
