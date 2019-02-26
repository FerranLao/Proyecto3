export const addClientMessage = text => {
  return {
    type: "ADD_MESSAGE",
    message: {
      from: "me",
      text
    }
  };
};

export const getChat = chat => {
  return {
    type: "GET_CHAT",
    chat: chat
  };
};

export const addServerMessage = (text, from) => {
  return {
    type: "ADD_MESSAGE",
    message: {
      from,
      text
    }
  };
};
