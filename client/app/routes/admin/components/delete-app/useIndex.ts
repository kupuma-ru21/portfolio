import {useFetcher} from "@remix-run/react";

export const useIndex = () => {
  const fetcher = useFetcher();
  const isDeletingApp =
    fetcher.state === "submitting" || fetcher.state === "loading";

  return {fetcher, isDeletingApp};
};
