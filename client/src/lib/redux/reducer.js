const initialStore = {
  user: null,
  chat:[]
};

export const rootReducer = (store = initialStore, action) => {
  switch (action.type) {
    case "SIGNUP":
      store = { ...store, user: action.user.data.user };
      break;
    case "LOGIN":
      store = { ...store, user: action.user };
      break;
    case "LOGOUT":
      store = { ...store, user: null };
      break;
    case "UPDATE":
      store = { ...store, user: action.user };
      break;
    default:
      return store;
  }
  return store;
};
