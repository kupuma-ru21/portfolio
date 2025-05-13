import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import {CreateBlogDocument} from "gql/graphql";
import {AddBlog} from "./components/index/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";
import {get500ErrorResponse} from "~/utils/error/get500ErrorResponse";
import {getContext} from "~/utils/getContext";
import {getJwt} from "~/utils/getJwt";
import {apolloClient} from "~/utils/graphql";
import {isLoggedIn} from "~/utils/isLoggedIn";

export default function Route() {
  return <AddBlog />;
}

const I18N = "admin_add-blog-post";

export const loader = async ({request}: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const t = await i18next.getFixedT(request, I18N);
  const title = t("add-blog-post");
  return json({title});
};

export const action = async ({request}: ActionFunctionArgs) => {
  const [formData, {token}] = await Promise.all([
    request.formData(),
    getJwt(request.headers.get("cookie")),
  ]);

  const {errors} = await apolloClient.mutate({
    mutation: CreateBlogDocument,
    variables: {
      input: {
        title: String(formData.get("title")),
        detail: String(formData.get("detail")),
        isDraft: formData.get("isDraft") === "true",
      },
    },
    context: getContext({token}),
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/admin");
};

export const handle = {isAdmin: true, i18n: I18N};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};
