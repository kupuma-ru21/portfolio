import {type GraphQLFormattedError} from "graphql";

export const get500ErrorResponse = (error: Error | GraphQLFormattedError) => {
  return new Response(JSON.stringify({error}), {status: 500});
};
