export const setAuthUser = data => {
  return {
    type: "SET_AUTH_USER",
    payload: data
  };
};

export const unsetAuthUser = () => {
  return {
    type: "UNSET_AUTH_USER"
  };
};
