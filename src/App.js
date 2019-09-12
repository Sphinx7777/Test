import React from 'react';
import s from './App.module.scss';
import TodoContainer from "./ToDo/TodoContainer";
import {Route, Switch} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import {SideBar} from "./SideBar/SideBar";



const App=()=> {
	return (
		<div className={s.appWrapper}>
			<Header />
			<SideBar />
			<div className={s.contentWrapper}>
				<Switch>
					<Route exact path='/'  render = {()=> <TodoContainer />}/>
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
					<Route path='/mailLink' component={() => {
						window.location.href = 'mailto:Spamoglot13@gmail.com';
						return null;
					}}/>
				</Switch>
			</div>
			<Footer />
		</div>
	);
};



export default App;
