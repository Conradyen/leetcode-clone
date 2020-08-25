import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { customMiddleware } from "./middleware/customMiddleware";
// const initialState = {};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, customMiddleware))
);

export default store;
