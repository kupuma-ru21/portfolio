import {getJwt} from "./getJwt";

export const isLoggedIn = async (cookieHeader: string | null) => {
  const {token} = await getJwt(cookieHeader);
  return token !== "";
};
