import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./Redux/reduxStore";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
	<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));

serviceWorker.unregister();
