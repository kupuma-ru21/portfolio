import { getSession } from "~/services/session.server";

export const isLoggedIn = async (cookie: string | null) => {
  const session = await getSession(cookie);
  return session.has("user");
};
