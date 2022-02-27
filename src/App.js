import { createStore, applyMiddleware, compose } from "redux";

import Reducer from "./Reducers/Index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
