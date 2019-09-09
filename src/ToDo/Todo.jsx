import React,{useState} from 'react'
import s from './ToDo.module.scss'
import FormForTask from "./FormForTask";
import {ButtonHeaderToDo, MarkAllTasks} from "./ButtonHeaderToDo";
import {Task} from "./Task";



const Todo = ({tasks, addNewTask, removeTask, changeTask, changeTaskStatus,
								editMode, changeStatusTaskEditForm, allMark, changeStatusAllTasks}) => {

	let onSubmit = (e) => {
		addNewTask({id: Math.random(), name: e.name, description: e.description, status: false})
	};
	let [newTasks,setNewTasks]=useState(tasks);
  let activeTask = tasks.filter(t=>!t.status);
  let completedTask = tasks.filter(t=>t.status);




	return (
		<div className={s.todoWrapper}>
			<div className={s.todo}>
				<div><h2>Список дел которые надо успеть ...</h2></div>
				<ButtonHeaderToDo {...{tasks,removeTask,changeStatusTaskEditForm}}/>
				{editMode && <div className={s.formForTask}>
					<FormForTask onSubmit={onSubmit} changeStatusTaskEditForm={changeStatusTaskEditForm}/>
				</div>}
				<MarkAllTasks {...{allMark, changeStatusAllTasks}}/>
				<div className={s.todoList}>
					<div className={s.listWrapper}>
						<Task {...{newTasks,changeTask, changeTaskStatus}}/>
					</div>
				</div>


				<div className={s.footer}>
					<div className={s.allCount}>Общее количество : {tasks.length}</div>
					<div className={s.filter}>
						<div className={s.filterItem} onClick={() =>setNewTasks(tasks) }>Все
						</div>
						<div className={s.filterItem} onClick={() => setNewTasks(activeTask)}>Активные
						</div>
						<div className={s.filterItem} onClick={() =>setNewTasks(completedTask)}>Завершенные
						</div>
					</div>
				</div>


			</div>
		</div>
	)
};

export default Todo;