import reducers from "./reducers/index.js";
import { legacy_createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

const Store = legacy_createStore(reducers, composeWithDevTools());

export default Store;
