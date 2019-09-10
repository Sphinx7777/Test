import React,{useState,useEffect} from 'react'
import s from './ToDo.module.scss'
import FormForTask from "./FormForTask";
import {ButtonHeaderToDo, MarkAllTasks} from "./ButtonHeaderToDo";
import {Task} from "./Task";
import {SearchNameTask} from "./SearchNameTask";
import brother from "./../image/Sfinx.jpg";
import telegram from "./../image/telegram.ico";
import lamp from "./../image/lamp.ico";
import {NavLink} from "react-router-dom";




export const Todo = ({tasks,addNewTask,removeTask,changeTask,changeTaskStatus,
											 editMode,changeStatusTaskEditForm,allMark,changeStatusAllTasks,
											 setToggleEditTask,editDescriptionStatus}) => {

	let newDate = new Date();
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
	let createDate=( newDate.toLocaleString("ru", options) );

	let onSubmit = (e) => {
		addNewTask({id: Math.random(), name: e.name, description: e.description, status: false,createDate})
	};
	let [newTasks,setNewTasks]=useState(tasks);
  let activeTask = tasks.filter(t=>!t.status);
  let completedTask = tasks.filter(t=>t.status);

  let searchTask=(name)=>{
		setNewTasks(()=>tasks.filter(t=>t.name===name));

  };
  let editTask=(id)=>{
		setNewTasks(()=>tasks.filter(t=>t.id===id));
		setToggleEditTask(true)
  };

  useEffect(()=>{
		setNewTasks(tasks)
	},[tasks]);



  return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div className={s.filterWrapper}>
					<div className={s.allCount}>Общее количество : {tasks.length} Показано : {newTasks.length}
					</div>
					<div className={s.filter}>
						<div className={s.filterItem} onClick={() =>setNewTasks(tasks) }>Все
						</div>
						<div className={s.filterItem} onClick={() => setNewTasks(activeTask)}>В процессе
						</div>
						<div className={s.filterItem} onClick={() =>setNewTasks(completedTask)}>Завершенные
						</div>
					</div>
				</div>;
				<div><h2>Список дел которые надо успеть ...</h2></div>
				<ButtonHeaderToDo {...{tasks,removeTask,changeStatusTaskEditForm,editMode}}/>
				{editMode && <div className={s.formForTask}>
					<FormForTask onSubmit={onSubmit} changeStatusTaskEditForm={changeStatusTaskEditForm}/>
				</div>}
				<div className={s.markAndSearchWrapper}>
					<MarkAllTasks {...{allMark, changeStatusAllTasks}}/>
					<SearchNameTask {...{searchTask}}/>
				</div>

				<div className={s.todoList}>
					<div className={s.listWrapper}>
						<Task {...{newTasks,changeTask,editTask,changeTaskStatus,setToggleEditTask,editDescriptionStatus}}/>
					</div>
					<div className={s.footerWrapper}>
						<footer className={s.footer}>
							<div className={s.LinkWrapper}>© «Онищенко С.М.», 2019 -
								<NavLink className={s.link} target='_blank' to="/telegram">
									<img className={s.linkImg} src={telegram} alt="Телеграм"/><span className={s.linkTitle}>Telegram</span>
								</NavLink>
								<NavLink className={s.link} target='_blank' to="/djinni">
									<img className={s.linkImg} src={lamp} alt="Джинни"/><span className={s.linkTitle}>Djinni</span>
								</NavLink>
							</div>
							<div className={s.photoWrapper}>
								<span>Будете копипастить пожалуюсь братану</span>
								<img className={s.photo} src={brother} alt="Brother"/>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	)
};
