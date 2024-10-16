import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { getSession } from "~/services/session.server";

export default function Route() {
  return <>admin</>;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("cookie"));
  if (session.has("user")) return null;
  // TODO: wanna add type to path
  return redirect("/login");
}

export const handle = { isHideGlobalLayout: true };
