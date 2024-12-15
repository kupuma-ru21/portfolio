import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import { CompaniesDocument } from "gql/graphql";
import { Index } from "./components/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";
import { get500ErrorResponse } from "~/utils/error/get500ErrorResponse";
import { apolloClient } from "~/utils/graphql";

export default function Route() {
  // const data = useLoaderData<typeof loader>();
  return (
    <Index
    // companies={data.companies}
    />
  );
}

const I18N = "index";

export async function loader({ request }: LoaderFunctionArgs) {
  const {
    data: { companies },
    error,
  } = await apolloClient.query({ query: CompaniesDocument });
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Home");
  return json({ title, companies });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: I18N };
