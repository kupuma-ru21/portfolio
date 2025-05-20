import {
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
  type ActionFunctionArgs,
} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {BlogDocument, UpdateBlogDocument} from "gql/graphql";
import {EditBlog} from "./components/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";
import {get500ErrorResponse} from "~/utils/error/get500ErrorResponse";
import {getContext} from "~/utils/getContext";
import {getJwt} from "~/utils/getJwt";
import {apolloClient} from "~/utils/graphql";
import {isLoggedIn} from "~/utils/isLoggedIn";

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return <EditBlog blog={data.blog} />;
}

const I18N = "admin_apps_blog_id_edit";

export const loader = async ({request, params}: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    return redirect("/login");
  }

  const {token} = await getJwt(request.headers.get("cookie"));
  const {
    data: {blog},
    error,
  } = await apolloClient.query({
    query: BlogDocument,
    variables: {id: params.blogId || ""},
    context: getContext({token}),
  });
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Edit Blog");
  return json({title, blog});
};

export const action = async ({request, params}: ActionFunctionArgs) => {
  const [formData, {token}] = await Promise.all([
    request.formData(),
    getJwt(request.headers.get("cookie")),
  ]);

  const {errors} = await apolloClient.mutate({
    mutation: UpdateBlogDocument,
    variables: {
      id: params.blogId || "",
      input: {
        title: String(formData.get("title")),
        detail: String(formData.get("detail")),
        isDraft: formData.get("isDraft") === "true",
      },
    },
    context: getContext({token}),
  });
  if (errors) throw get500ErrorResponse(errors[0]);
  return redirect("/admin/blogs");
};

export const handle = {isAdmin: true, i18n: I18N};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};
