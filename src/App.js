import React from 'react';
import s from './App.module.scss';
import TodoContainer from "./ToDo/TodoContainer";



const App=()=> {
	return (
		<div className={s.appWrapper}>
			<TodoContainer />
		</div>
	);
};



export default App;
