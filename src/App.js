import React from 'react';
import s from './App.module.scss';
import TodoContainer from "./ToDo/TodoContainer";
import {Route, Switch} from "react-router-dom";



const App=()=> {
	return (
		<div className={s.appWrapper}>
			<TodoContainer />
			<Switch>
				<Route path='/telegram' component={() => {
					window.location.href = 'https://t.me/S_f_i_n_x';
					return null;
				}}/>
				<Route path='/djinni' component={() => {
					window.location.href = 'https://djinni.co/q/03c688fb54';
					return null;
				}}/>
				<Route path='/git' component={() => {
					window.location.href = 'https://github.com/Sphinx7777?tab=repositories';
					return null;
				}}/>
			</Switch>
		</div>
	);
};



export default App;
