import { createStore, combineReducers } from "redux";
import texts from "../modules/texts";

const rootReducer = combineReducers({
  texts: texts,
});

const store = createStore(rootReducer);

export default store;
