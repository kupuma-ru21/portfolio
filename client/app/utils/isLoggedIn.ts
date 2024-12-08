import { tokenCookie } from "./cookies.server";

export const isLoggedIn = async (cookieHeader: string | null) => {
  const cookie: { token: string } = (await tokenCookie.parse(cookieHeader)) || {
    token: "",
  };
  return cookie.token !== "";
};
