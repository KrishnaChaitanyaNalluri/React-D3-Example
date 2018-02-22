import { createStore, applyMiddleware, compose } from "redux";
// import reducers from "./reducers.js";
import thunk from "redux-thunk";

const reducers = function(state, action){
	if(action.type === "INC"){
		return state+1;
	}
	if(action.type === "DEC"){
		return state-1;
	}

}
export default function store() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    return createStore(reducers, enhancer);
}
 