import {Button} from "@chakra-ui/react";
import {useIndex} from "./useIndex";

export const DeleteButton = ({id}: {id: string}) => {
  const {fetcher, isDeletingApp} = useIndex();

  return (
    <fetcher.Form method="POST">
      <Button
        type="submit"
        variant="solid"
        colorScheme="red"
        loading={isDeletingApp}
      >
        Delete
      </Button>
      <input type="hidden" name="appId" value={id} />
    </fetcher.Form>
  );
};
