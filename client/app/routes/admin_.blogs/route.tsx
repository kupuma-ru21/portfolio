import {
  type ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {AdminBlogsDocument, DeleteBlogDocument} from "gql/graphql";
import {AdminBlogs} from "./components/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";
import {get500ErrorResponse} from "~/utils/error/get500ErrorResponse";
import {getContext} from "~/utils/getContext";
import {getJwt} from "~/utils/getJwt";
import {apolloClient} from "~/utils/graphql";
import {isLoggedIn} from "~/utils/isLoggedIn";

export default function Route() {
  const data = useLoaderData<typeof loader>();
  return <AdminBlogs blogs={data.blogs} />;
}

const I18N = "admin_blogs";

export const loader = async ({request}: LoaderFunctionArgs) => {
  if (!(await isLoggedIn(request.headers.get("cookie")))) {
    // TODO: wanna add type to path
    return redirect("/login");
  }

  // TODO: create fetchBlogs in utils
  const {
    data: {blogs},
    error,
  } = await apolloClient.query({query: AdminBlogsDocument});
  if (error) throw get500ErrorResponse(error);

  const t = await i18next.getFixedT(request, I18N);
  const title = t("Blogs");

  return json({blogs, title});
};

export const action = async ({request}: ActionFunctionArgs) => {
  const [formData, {token}] = await Promise.all([
    request.formData(),
    getJwt(request.headers.get("cookie")),
  ]);

  const {errors} = await apolloClient.mutate({
    mutation: DeleteBlogDocument,
    variables: {id: String(formData.get("blogId"))},
    context: getContext({token}),
    refetchQueries: [{query: AdminBlogsDocument}],
  });
  if (errors) throw get500ErrorResponse(errors[0]);

  return null;
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};

export const handle = {isAdmin: true, i18n: I18N};
