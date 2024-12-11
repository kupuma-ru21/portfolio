/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_SCHEMA_URL: string;
  readonly VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
