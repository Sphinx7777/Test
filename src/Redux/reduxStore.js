import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import testReducer from "./testReducer";
import { save} from 'redux-localstorage-simple'


let reducers = combineReducers({
	test: testReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers,compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware,save({namespace:'forTest'}))
	)));

export default store