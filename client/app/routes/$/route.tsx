import {NotFound} from "./components/index";

/*
  Ref: https://remix.run/docs/en/1.19.3/guides/routing#splats
  > It's common to add a routes/$.tsx file build custom 404 pages
 */
export default function Route() {
  return <NotFound />;
}

export const handle = {i18n: "not-found"};
