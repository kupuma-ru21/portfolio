import {
  json,
  type MetaFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import {About} from "./components/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";

export default function Route() {
  return <About />;
}

const I18N = "about";

export const loader = async ({request}: LoaderFunctionArgs) => {
  const t = await i18next.getFixedT(request, I18N);
  const title = t("About");
  return json({title});
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};

export const handle = {i18n: "about"};
