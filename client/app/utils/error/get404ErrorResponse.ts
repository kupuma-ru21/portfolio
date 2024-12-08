export const get404ErrorResponse = (target: string) => {
  return new Response(null, {status: 404, statusText: `${target} not found`});
};
