const initialStore = {
  user: null,
  chat: [],
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
    case "ADD_MESSAGE":
      store = { ...store, chat: [...store.chat, action.message] };
      break;
    case "GET_CHAT":
      console.log("dijdj")
      store = { ...store, chat: action.chat };
      break;
    default:
      return store;
  }
  return store;
};
