import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import { type CompanyLinkType, CreateCompanyDocument } from "gql/graphql";
import { AddApp } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";
import { isLoggedIn } from "~/utils/isLoggedIn";

export default function Route() {
  return <AddApp />;
}

const I18N = "admin_add-app";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Add Application");
  return json({ title });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const { errors } = await apolloClient.mutate({
    mutation: CreateCompanyDocument,
    variables: {
      title: String(formData.get("title")),
      detail: String(formData.get("detail")),
      imageURL: String(formData.get("imageUrl")),
      link: String(formData.get("link")),
      linkType: String(formData.get("linkType")) as CompanyLinkType,
    },
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/admin");
};

export const handle = { isAdmin: true, i18n: I18N };

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};
