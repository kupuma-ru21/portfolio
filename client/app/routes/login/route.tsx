import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import { LoginDocument } from "gql/graphql";
import { Login } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { tokenCookie } from "~/utils/cookies.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get404ErrorResponse } from "~/utils/error/get404ErrorResponse";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  return <Login />;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const { data, errors } = await apolloClient.mutate({
    mutation: LoginDocument,
    variables: {
      input: {
        email: String(body.get("email")),
        password: String(body.get("password")),
      },
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  if (!data?.login) throw get404ErrorResponse("data.login");

  // TODO: wanna add type to path
  return redirect("/admin", {
    headers: {
      "Set-Cookie": await tokenCookie.serialize({ token: data.login }),
    },
  });
}

const I18N = "login";

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO
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
