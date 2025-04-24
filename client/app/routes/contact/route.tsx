import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import {Contact} from "./components/index";
import i18next from "~/i18n/i18next.server";
import {createMetaTitle} from "~/utils/createMetaTitle";

export default function Route() {
  return <Contact />;
}

export async function action({request}: ActionFunctionArgs) {
  const body = await request.formData();
  try {
    // Ref: https://resend.com/docs/send-with-remix
    const Resend = (await import("resend")).Resend;
    await new Resend(import.meta.env.VITE_RESEND_API_KEY).emails.send({
      from: `${String(body.get("email"))} <onboarding@resend.dev>`,
      to: [import.meta.env.VITE_EMAIL],
      subject: String(body.get("subject")),
      html: `<p>${String(body.get("content"))}</p>`,
    });
    return redirect("/contact/submitted");
  } catch (error) {
    throw new Response(JSON.stringify({error}), {status: 500});
  }
}

const I18N = "contact";

export async function loader({request}: LoaderFunctionArgs) {
  const t = await i18next.getFixedT(request, "contact");
  const title = t("Contact");
  return json({title});
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: createMetaTitle(data?.title ?? "")}];
};

export const handle = {i18n: I18N};
