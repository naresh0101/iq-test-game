import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initisalState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initisalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

