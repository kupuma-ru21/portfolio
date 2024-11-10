import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { ContactSubmitted } from "./components/index/index";
import i18next from "~/i18n/i18next.server";
import { createMetaTitle } from "~/utils/createMetaTitle";

export default function Route() {
  return <ContactSubmitted />;
}

const I18N = "contact";

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, I18N);
  const title = t("Contact");
  return json({ title });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: createMetaTitle(data?.title ?? "") }];
};

export const handle = { i18n: I18N };
