import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import todoReducer from "./todoReducer";
import {reduxForm} from "redux-form";


let reducers = combineReducers({
	toDo: todoReducer,
	form: reduxForm
});












const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers,compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)));

export default store