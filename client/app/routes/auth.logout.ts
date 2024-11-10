// REF: https://remix.run/resources/remix-auth-auth0-strategy
import { redirect, type ActionFunctionArgs } from "@remix-run/node";

import { destroySession, getSession } from "~/services/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const logoutURL = new URL(import.meta.env.VITE_AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", import.meta.env.VITE_AUTH0_CLIENT_ID);
  logoutURL.searchParams.set(
    "returnTo",
    import.meta.env.VITE_AUTH0_RETURN_TO_URL
  );

  return redirect(logoutURL.toString(), {
    headers: { "Set-Cookie": await destroySession(session) },
  });
};
