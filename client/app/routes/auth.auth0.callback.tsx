import { type LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export function loader({ request }: LoaderFunctionArgs) {
  return authenticator.authenticate("auth0", request, {
    successRedirect: "/admin",
    failureRedirect: "/login",
  });
}
