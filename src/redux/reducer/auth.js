const initialState = {
  data: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_USER":
      return {
        ...state,
        data: action.payload
      };
    case "UNSET_AUTH_USER":
      return initialState;
    default:
      return state;
  }
};

export default auth;
