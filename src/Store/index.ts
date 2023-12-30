import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import itemReducer from "./AddItem";
import tipReducer from "./Tip";

const combinedReducer: any = combineReducers({
  itemState: itemReducer,
  tipState: tipReducer,
});

const store: any = createStore(combinedReducer, composeWithDevTools());

export default store;
