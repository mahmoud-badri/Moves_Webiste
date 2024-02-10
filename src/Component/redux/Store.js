import { applyMiddleware, createStore } from "redux";
import reducers from "./CombineReduses"
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const myStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default myStore