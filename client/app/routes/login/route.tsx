import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import { Login } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { authenticator } from "~/utils/auth.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  return <Login />;
}

export function action({ request }: ActionFunctionArgs) {
  return authenticator.authenticate("auth0", request);
}

const I18N = "login";

export async function loader({ request }: LoaderFunctionArgs) {
  if (await isLoggedIn(request.headers.get("cookie"))) {
    return redirect("/admin");
  }

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Login");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: I18N };
