import React from 'react';
import s from './App.module.scss';
import TodoContainer from "./ToDo/TodoContainer";
/*import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";*/

const App=(props)=> {
	return (
		<div className={s.appWrapper}>
			<TodoContainer/>
		</div>
	);
};

/*let AppWithRoute = (props)=>{
	return (
		<BrowserRouter>
			<Provider store={store}>
				<App {...props}/>
			</Provider>
		</BrowserRouter>
	)
};*/

export default App;
