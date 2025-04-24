export const getContext = ({token}: {token: string}) => {
  return {headers: {Authorization: `Bearer ${token}`}};
};
