export type Bindings = {
  KV: KVNamespace;
  STORAGE: R2Bucket;
  TELLER_CERT: Fetcher;
  AI: Ai;
  API_SECRET_KEY: string;
  GOCARDLESS_SECRET_ID: string;
  GOCARDLESS_SECRET_KEY: string;
  PLAID_CLIENT_ID: string;
  PLAID_ENVIRONMENT: string;
  PLAID_SECRET: string;
  TYPESENSE_API_KEY: string;
  TYPESENSE_ENDPOINT_AU: string;
  TYPESENSE_ENDPOINT_EU: string;
  TYPESENSE_ENDPOINT_US: string;
  TYPESENSE_ENDPOINT: string;
  UPSTASH_REDIS_REST_TOKEN: string;
  UPSTASH_REDIS_REST_URL: string;
};
