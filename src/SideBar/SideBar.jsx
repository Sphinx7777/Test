import React from 'react'
import s from './SideBar.module.scss'
import {NavLink} from "react-router-dom";



export const SideBar = ({menuShowStatus,setToggleShowSideBar}) => {

	return (
		<div className={!menuShowStatus ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.disableShow)}>
			<div className={s.sideBar}>
				<NavLink className={s.sideBarLink} to="/social">
					Проект социальной сети
				</NavLink>
				<NavLink className={s.sideBarLink} to="/">
					ToDo приложение
				</NavLink>
				<NavLink className={s.sideBarLink} to="/todonew">
					ToDo2 еще не начал
				</NavLink>
				<NavLink className={s.sideBarLink} to="/resume">
					Резюме
				</NavLink>
				<div className={s.sideBarToClose} onClick={()=>{setToggleShowSideBar(true)}}>X</div>


			</div>
		</div>
	)
};


