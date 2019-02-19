


export const addClientMessage = text => {

  return {
    type: "ADD_MESSAGE",
    message: {
      from: "me",
      text
    }
  };
};

export const addServerMessage = text => {
  return {
    type: "ADD_MESSAGE",
    message: {
      from: "server",
      text
    }
  };
};
