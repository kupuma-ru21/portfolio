import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";

export default function Index() {
  return (
    <>
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test test test test test test test test test test
      test test test test test test
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "index");
  const title = t("pageTitle");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: "index" };
