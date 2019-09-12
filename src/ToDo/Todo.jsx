import React, {useState, useEffect} from 'react'
import s from './ToDo.module.scss'
import FormForTask from "./FormForTask";
import {ButtonHeaderToDo, MarkAllTasks} from "./ButtonHeaderToDo";
import {Task} from "./Task";
import {SearchNameTask} from "./SearchNameTask";
import {Footer} from "./Footer";


export const Todo = ({
											 tasks, addNewTask, removeTask, changeTask, changeTaskStatus,
											 editMode, changeStatusTaskEditForm, allMark, changeStatusAllTasks,
											 editDescriptionStatus,toggleEditStatus,defaultName,defaultValue
										 }) => {

	let newDate = new Date();
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
	let createDate = (newDate.toLocaleString("ru", options));

	let onSubmit = (e) => {
		addNewTask({id: Math.random(), editStatus:false, name: e.name, description: e.description, status: false, createDate})
	};
	let [newTasks, setNewTasks] = useState(tasks);
	let activeTask = tasks.filter(t => !t.status);
	let completedTask = tasks.filter(t => t.status);

	let searchTaskByName = (name) => {
		setNewTasks(() => tasks.filter(t => t.name.match(name)));
	};
	let searchTaskByDescription = (description) => {
		setNewTasks(() => tasks.filter(t => t.description.match(description)));
	};
	let editTask = (id,name,value) => {
		toggleEditStatus(id,true,name,value)
	};

	useEffect(() => {
		setNewTasks(tasks)
	}, [tasks]);


	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div className={s.filterWrapper}>
					<div className={s.allCount}>Общее количество : {tasks.length} Показано : {newTasks.length}
					</div>
					<div className={s.filter}>
						<div className={s.filterItem} onClick={() => setNewTasks(tasks)}>Все
						</div>
						<div className={s.filterItem} onClick={() => setNewTasks(activeTask)}>В процессе
						</div>
						<div className={s.filterItem} onClick={() => setNewTasks(completedTask)}>Завершенные
						</div>
					</div>
				</div>
				<div><h2>Это надо запомнить, а лучше сделать ...</h2></div>
				<ButtonHeaderToDo {...{tasks, removeTask, changeStatusTaskEditForm,editDescriptionStatus, editMode}}/>
				{editMode && <div className={s.formForTask}>
					<FormForTask onSubmit={onSubmit} changeStatusTaskEditForm={changeStatusTaskEditForm}/>
				</div>}
				<div className={s.markAndSearchWrapper}>
					<MarkAllTasks {...{allMark, changeStatusAllTasks}}/>
					<SearchNameTask {...{searchTaskByName,searchTaskByDescription}}/>
				</div>
				<div className={s.todoList}>
					<div className={s.listWrapper}>
						<Task {...{newTasks,changeTask,editTask,editMode,changeTaskStatus,
							toggleEditStatus,defaultName,defaultValue}}
						/>
					</div>
					<Footer/>
				</div>
			</div>
		</div>
	)
};
