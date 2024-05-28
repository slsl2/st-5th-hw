const ADD_TEXT = "ADD_TEXT";

export const addText = (payload) => {
  return {
    type: ADD_TEXT,
    payload: payload,
  };
};

const initialState = {
  texts: localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [],
};

const texts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      const updatedTexts = [...state.texts, action.payload];
      localStorage.setItem("texts", JSON.stringify(updatedTexts));
      return {
        ...state,
        texts: updatedTexts,
      };
    default:
      return state;
  }
};

export default texts;
