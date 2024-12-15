import { tokenCookie } from "./cookies.server";

export const getJwt = async (
  cookieHeader: string | null
): Promise<{ token: string }> => {
  return (await tokenCookie.parse(cookieHeader)) || { token: "" };
};
