// Ref: https://remix.run/resources/remix-auth-auth0-strategy
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { sessionStorage } from "~/services/session.server";

export const authenticator = new Authenticator(sessionStorage);

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: "http://localhost:5173/auth/auth0/callback",
    clientID: import.meta.env.VITE_AUTH0_CLIENT_ID,
    clientSecret: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
    domain: "dev-ua0u4w00e0t0u374.us.auth0.com",
  },
  async (data) => {
    return data;
  }
);

authenticator.use(auth0Strategy);
