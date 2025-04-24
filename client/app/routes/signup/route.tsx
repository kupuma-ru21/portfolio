import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import {SignupDocument} from "gql/graphql";
import {Signup} from "./components/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";
import {get500ErrorResponse} from "~/utils/error/get500ErrorResponse";
import {apolloClient} from "~/utils/graphql";
import {isLoggedIn} from "~/utils/isLoggedIn";

export default function Route() {
  return null;
  return <Signup />;
}

export async function action({request}: ActionFunctionArgs) {
  const body = await request.formData();
  const {errors} = await apolloClient.mutate({
    mutation: SignupDocument,
    variables: {
      input: {
        email: String(body.get("email")),
        password: String(body.get("password")),
      },
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);

  // TODO: wanna add type to path
  return redirect("/login");
}

const I18N = "signup";

export async function loader({request}: LoaderFunctionArgs) {
  if (await isLoggedIn(request.headers.get("cookie"))) {
    return redirect("/admin");
  }

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Signup");
  return json({title});
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};

export const handle = {i18n: I18N};
