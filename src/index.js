import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./Redux/reduxStore";

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
	<App />
		</Provider>
	</HashRouter>
	, document.getElementById('root'));

serviceWorker.unregister();
