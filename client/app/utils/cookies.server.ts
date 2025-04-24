import {createCookie} from "@remix-run/node"; // or cloudflare/deno

export const tokenCookie = createCookie("token", {
  maxAge: 604_800, // one week
});
