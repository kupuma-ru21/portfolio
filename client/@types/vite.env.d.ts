/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string;
  readonly VITE_EMAIL: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_CLIENT_SECRET: string;
  readonly VITE_AUTH0_LOGOUT_URL: string;
  readonly VITE_AUTH0_RETURN_TO_URL: string;
  readonly VITE_GRAPHQL_SCHEMA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
