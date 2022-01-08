import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import modeReducer from "./reducer";

const store = createStore(
  modeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;